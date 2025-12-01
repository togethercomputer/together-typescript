import { FilePurpose } from '../resources';
import { createReadStream, readline, isUtf8, resolve, stat, extname, readFile } from './node-unsafe-imports';

// Constants
const MIN_SAMPLES = 1;
const NUM_BYTES_IN_GB = 2 ** 30;
const MAX_FILE_SIZE_GB = 4.9;
const PARQUET_EXPECTED_COLUMNS = ['input_ids', 'attention_mask', 'labels'];
const REQUIRED_COLUMNS_MESSAGE = ['role', 'content'];
const POSSIBLE_ROLES_CONVERSATION = ['system', 'user', 'assistant'];

enum DatasetFormat {
  GENERAL = 'general',
  CONVERSATION = 'conversation',
  INSTRUCTION = 'instruction',
  PREFERENCE_OPENAI = 'preference_openai',
}

const JSONL_REQUIRED_COLUMNS_MAP: Record<DatasetFormat, string[]> = {
  [DatasetFormat.GENERAL]: ['text'],
  [DatasetFormat.CONVERSATION]: ['messages'],
  [DatasetFormat.INSTRUCTION]: ['prompt', 'completion'],
  [DatasetFormat.PREFERENCE_OPENAI]: ['input', 'preferred_output', 'non_preferred_output'],
};

export class InvalidFileFormatError extends Error {
  line_number: number | null;
  error_source: string | null;

  constructor(message: string = '', line_number: number | null = null, error_source: string | null = null) {
    super(message);
    this.message = message;
    this.line_number = line_number;
    this.error_source = error_source;
    this.name = 'InvalidFileFormatError';
  }
}

export interface CheckFileReport {
  is_check_passed: boolean;
  message: string;
  found?: boolean | null;
  file_size?: number | null;
  utf8?: boolean | null;
  line_type?: boolean | null;
  text_field?: boolean | null;
  key_value?: boolean | null;
  has_min_samples?: boolean | null;
  num_samples?: number | null;
  load_json?: boolean | null;
  load_csv?: boolean | null;
  load_parquet?: string | null;
  filetype?: string;
  line_number?: number;
  format?: boolean;
}

export async function checkFile(
  file: string,
  purpose: FilePurpose | string = 'fine-tune',
): Promise<CheckFileReport> {
  const filePath = resolve(file);

  const report_dict: CheckFileReport = {
    is_check_passed: true,
    message: 'Checks passed',
    found: null,
    file_size: null,
    utf8: null,
    line_type: null,
    text_field: null,
    key_value: null,
    has_min_samples: null,
    num_samples: null,
    load_json: null,
    load_csv: null,
  };

  try {
    const stats = await stat(filePath);
    if (!stats.isFile()) {
      report_dict.found = false;
      report_dict.is_check_passed = false;
      return report_dict;
    }

    report_dict.found = true;

    const file_size = stats.size;

    if (file_size > MAX_FILE_SIZE_GB * NUM_BYTES_IN_GB) {
      report_dict.message = `Maximum supported file size is ${MAX_FILE_SIZE_GB} GB. Found file with size of ${
        Math.round((file_size / NUM_BYTES_IN_GB) * 1000) / 1000
      } GB.`;
      report_dict.is_check_passed = false;
    } else if (file_size === 0) {
      report_dict.message = 'File is empty';
      report_dict.file_size = 0;
      report_dict.is_check_passed = false;
      return report_dict;
    } else {
      report_dict.file_size = file_size;
    }
  } catch (e) {
    report_dict.found = false;
    report_dict.is_check_passed = false;
    return report_dict;
  }

  let data_report_dict: Partial<CheckFileReport> = {};
  const ext = extname(filePath);

  try {
    if (ext === '.jsonl') {
      report_dict.filetype = 'jsonl';
      data_report_dict = await _check_jsonl(filePath, purpose);
    } else if (ext === '.parquet') {
      report_dict.filetype = 'parquet';
      data_report_dict = await _check_parquet(filePath, purpose);
    } else if (ext === '.csv') {
      report_dict.filetype = 'csv';
      data_report_dict = await _check_csv(filePath, purpose);
    } else {
      report_dict.filetype = `Unknown extension of file ${filePath}. Only files with extensions .jsonl and .parquet are supported.`;
      report_dict.is_check_passed = false;
    }
  } catch (e) {
    Object.assign(report_dict, e);
  }

  Object.assign(report_dict, data_report_dict);

  return report_dict;
}

function _check_conversation_type(messages: Array<Record<string, string | boolean>>, idx: number): void {
  if (!Array.isArray(messages)) {
    throw new InvalidFileFormatError(
      `Invalid format on line ${
        idx + 1
      } of the input file. The \`messages\` column must be a list. Found ${typeof messages}`,
      idx + 1,
      'key_value',
    );
  }

  if (messages.length === 0) {
    throw new InvalidFileFormatError(
      `Invalid format on line ${idx + 1} of the input file. The \`messages\` column must not be empty.`,
      idx + 1,
      'key_value',
    );
  }

  for (const message of messages) {
    if (typeof message !== 'object' || message === null || Array.isArray(message)) {
      throw new InvalidFileFormatError(
        `Invalid format on line ${
          idx + 1
        } of the input file. The \`messages\` column must be a list of dicts. Found ${typeof message}`,
        idx + 1,
        'key_value',
      );
    }

    for (const column of REQUIRED_COLUMNS_MESSAGE) {
      if (!(column in message)) {
        throw new InvalidFileFormatError(
          `Missing required column \`${column}\` in message on line ${idx + 1}.`,
          idx + 1,
          'key_value',
        );
      }
      if (typeof message[column] !== 'string') {
        throw new InvalidFileFormatError(
          `Column \`${column}\` is not a string on line ${idx + 1}. Found ${typeof message[column]}`,
          idx + 1,
          'text_field',
        );
      }
    }
  }
}

function _check_conversation_roles(
  require_assistant_role: boolean,
  assistant_role_exists: boolean,
  idx: number,
): void {
  if (require_assistant_role && !assistant_role_exists) {
    throw new InvalidFileFormatError(
      `Invalid format on line ${
        idx + 1
      } of the input file. At least one message with the assistant role must be present in the example.`,
      idx + 1,
      'key_value',
    );
  }
}

function _check_message_weight(message: Record<string, string | boolean>, idx: number): void {
  if ('weight' in message) {
    const weight = message['weight'];
    if (typeof weight !== 'number' || !Number.isInteger(weight)) {
      throw new InvalidFileFormatError(`Weight must be an integer on line ${idx + 1}.`, idx + 1, 'key_value');
    }
    if (weight !== 0 && weight !== 1) {
      throw new InvalidFileFormatError(
        `Weight must be either 0 or 1 on line ${idx + 1}.`,
        idx + 1,
        'key_value',
      );
    }
  }
}

function _check_message_role(
  message: Record<string, string | boolean>,
  previous_role: string | null,
  idx: number,
): string {
  const role = message['role'];
  if (typeof role !== 'string' || !POSSIBLE_ROLES_CONVERSATION.includes(role)) {
    throw new InvalidFileFormatError(
      `Invalid role \`${role}\` in conversation on line ${
        idx + 1
      }. Possible roles: ${POSSIBLE_ROLES_CONVERSATION.join(', ')}`,
      idx + 1,
      'key_value',
    );
  }

  if (previous_role !== null && role === previous_role) {
    throw new InvalidFileFormatError(
      `Invalid role turns on line ${
        idx + 1
      } of the input file. After the optional system message, conversation roles must alternate between user/assistant/user/assistant.`,
      idx + 1,
      'key_value',
    );
  }

  return role;
}

export function validate_messages(
  messages: Array<Record<string, string | boolean>>,
  idx: number,
  require_assistant_role: boolean = true,
): void {
  _check_conversation_type(messages, idx);

  const has_weights = messages.some((message) => 'weight' in message);
  let previous_role: string | null = null;
  let assistant_role_exists = false;

  for (const message of messages) {
    if (has_weights) {
      _check_message_weight(message, idx);
    }
    previous_role = _check_message_role(message, previous_role, idx);
    assistant_role_exists = assistant_role_exists || previous_role === 'assistant';
  }

  _check_conversation_roles(require_assistant_role, assistant_role_exists, idx);
}

export function validate_preference_openai(example: Record<string, any>, idx: number = 0): void {
  if (typeof example['input'] !== 'object' || example['input'] === null || Array.isArray(example['input'])) {
    throw new InvalidFileFormatError(
      'The dataset is malformed, the `input` field must be a dictionary.',
      idx + 1,
      'key_value',
    );
  }

  if (!('messages' in example['input'])) {
    throw new InvalidFileFormatError(
      'The dataset is malformed, the `input` dictionary must contain a `messages` field.',
      idx + 1,
      'key_value',
    );
  }

  validate_messages(example['input']['messages'], idx, false);

  if (
    example['input']['messages'].length > 0 &&
    example['input']['messages'][example['input']['messages'].length - 1]['role'] === 'assistant'
  ) {
    throw new InvalidFileFormatError(
      `The last message in the input conversation must not be from the assistant on line ${idx + 1}.`,
      idx + 1,
      'key_value',
    );
  }

  const keys = ['preferred_output', 'non_preferred_output'];

  for (const key of keys) {
    if (!(key in example)) {
      throw new InvalidFileFormatError(
        `The dataset is malformed, the \`${key}\` field must be present in the input dictionary on line ${
          idx + 1
        }.`,
        idx + 1,
        'key_value',
      );
    }

    if (!Array.isArray(example[key])) {
      throw new InvalidFileFormatError(
        `The dataset is malformed, the \`${key}\` field must be a list on line ${idx + 1}.`,
        idx + 1,
        'key_value',
      );
    }

    if (example[key].length !== 1) {
      throw new InvalidFileFormatError(
        `The dataset is malformed, the \`${key}\` list must contain exactly one message on line ${idx + 1}.`,
        idx + 1,
        'key_value',
      );
    }

    if (typeof example[key][0] !== 'object' || example[key][0] === null || Array.isArray(example[key][0])) {
      throw new InvalidFileFormatError(
        `The dataset is malformed, the first element of \`${key}\` must be a dictionary on line ${idx + 1}.`,
        idx + 1,
        'key_value',
      );
    }

    if (!('role' in example[key][0])) {
      throw new InvalidFileFormatError(
        `The dataset is malformed, the first element of \`${key}\` must have a 'role' field on line ${
          idx + 1
        }.`,
        idx + 1,
        'key_value',
      );
    }

    if (example[key][0]['role'] !== 'assistant') {
      throw new InvalidFileFormatError(
        `The dataset is malformed, the first element of \`${key}\` must have the 'assistant' role on line ${
          idx + 1
        }.`,
        idx + 1,
        'key_value',
      );
    }

    if (!('content' in example[key][0])) {
      throw new InvalidFileFormatError(
        `The dataset is malformed, the first element of \`${key}\` must have a 'content' field on line ${
          idx + 1
        }.`,
        idx + 1,
        'key_value',
      );
    }

    if (typeof example[key][0]['content'] !== 'string') {
      throw new InvalidFileFormatError(
        `The dataset is malformed, the 'content' field in \`${key}\` must be a string on line ${idx + 1}.`,
        idx + 1,
        'key_value',
      );
    }
  }
}

async function _check_utf8(file: string): Promise<Partial<CheckFileReport>> {
  const report_dict: Partial<CheckFileReport> = {};
  const content = await readFile(file);
  report_dict.utf8 = isUtf8(content);

  if (!report_dict.utf8) {
    report_dict.message = `File is not UTF-8 encoded.`;
    report_dict.is_check_passed = false;
    throw report_dict;
  }
  return report_dict;
}

function _check_samples_count(
  file: string,
  report_dict: Partial<CheckFileReport>,
  idx: number,
): Partial<CheckFileReport> {
  if (idx + 1 < MIN_SAMPLES) {
    report_dict.has_min_samples = false;
    report_dict.message = `Processing ${file} resulted in only ${
      idx + 1
    } samples. Our minimum is ${MIN_SAMPLES} samples. `;
    report_dict.is_check_passed = false;
  } else {
    report_dict.num_samples = idx + 1;
    report_dict.has_min_samples = true;
  }

  return report_dict;
}

async function _check_csv(file: string, purpose: FilePurpose | string): Promise<Partial<CheckFileReport>> {
  const report_dict: Partial<CheckFileReport> = {};

  if (purpose !== 'eval') {
    report_dict.is_check_passed = false;
    report_dict.message = `CSV files are not supported for ${purpose}. Only JSONL and Parquet files are supported.`;
    return report_dict;
  }

  const utf8Check = await _check_utf8(file);
  Object.assign(report_dict, utf8Check);

  if (!report_dict.utf8) {
    return report_dict;
  }

  const fileStream = createReadStream(file);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let idx = -1;

  try {
    let header: string[] | null = null;
    let isFirstLine = true;

    for await (const line of rl) {
      if (isFirstLine) {
        header = line.split(',').map((col) => col.trim());
        if (!header || header.length === 0 || header[0] === '') {
          report_dict.message = 'CSV file is empty or has no header.';
          report_dict.is_check_passed = false;
          await rl.close();
          return report_dict;
        }
        isFirstLine = false;
        continue;
      }

      idx++;
      const values = line.split(',').map((val) => val.trim());

      if (values.length !== header!.length || values.some((v) => v === '')) {
        throw new InvalidFileFormatError(
          `CSV file is malformed or the number of columns found on line ${
            idx + 1
          } is inconsistent with the header`,
          idx + 1,
          'format',
        );
      }
    }

    Object.assign(report_dict, _check_samples_count(file, report_dict, idx));
    report_dict.load_csv = true;
  } catch (e) {
    report_dict.load_csv = false;
    report_dict.is_check_passed = false;

    if (e instanceof InvalidFileFormatError) {
      report_dict.message = e.message;
      if (e.line_number !== null) {
        report_dict.line_number = e.line_number;
      }
      if (e.error_source !== null) {
        (report_dict as any)[e.error_source] = false;
      }
    } else {
      if (idx < 0) {
        report_dict.message = 'Unable to decode file. File may be empty or in an unsupported format. ';
      } else {
        report_dict.message = `Error parsing the CSV file. Unexpected format on line ${idx + 1}.`;
      }
    }
  } finally {
    await rl.close();
  }

  return report_dict;
}

async function _check_jsonl(file: string, purpose: FilePurpose | string): Promise<Partial<CheckFileReport>> {
  const report_dict: Partial<CheckFileReport> = {};

  const utf8Check = await _check_utf8(file);
  Object.assign(report_dict, utf8Check);

  if (!report_dict.utf8) {
    return report_dict;
  }

  const fileStream = createReadStream(file);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let dataset_format: DatasetFormat | null = null;
  let idx = -1;

  try {
    for await (const line of rl) {
      idx++;
      const json_line = JSON.parse(line);

      if (typeof json_line !== 'object' || json_line === null || Array.isArray(json_line)) {
        throw new InvalidFileFormatError(
          `Error parsing file. Invalid format on line ${
            idx + 1
          } of the input file. Datasets must follow text, conversational, or instruction format. For more information, see https://docs.together.ai/docs/fine-tuning-data-preparation`,
          idx + 1,
          'line_type',
        );
      }

      if (purpose !== 'eval') {
        let current_format: DatasetFormat | null = null;

        for (const possible_format of Object.values(DatasetFormat)) {
          const requiredColumns = JSONL_REQUIRED_COLUMNS_MAP[possible_format];
          if (requiredColumns.every((column) => column in json_line)) {
            if (current_format === null) {
              current_format = possible_format;
            } else if (current_format !== possible_format) {
              throw new InvalidFileFormatError(
                `Found multiple dataset formats in the input file. Got ${current_format} and ${possible_format} on line ${
                  idx + 1
                }.`,
                idx + 1,
                'format',
              );
            }

            // Check that there are no extra columns
            for (const column in json_line) {
              if (!requiredColumns.includes(column)) {
                throw new InvalidFileFormatError(
                  `Found extra column "${column}" in the line ${idx + 1}.`,
                  idx + 1,
                  'format',
                );
              }
            }
          }
        }

        if (current_format === null) {
          throw new InvalidFileFormatError(
            `Error parsing file. Could not detect a format for the line ${
              idx + 1
            } with the columns:\n${Object.keys(json_line).join(', ')}`,
            idx + 1,
            'format',
          );
        }

        if (current_format === DatasetFormat.PREFERENCE_OPENAI) {
          validate_preference_openai(json_line, idx);
        } else if (current_format === DatasetFormat.CONVERSATION) {
          const message_column = JSONL_REQUIRED_COLUMNS_MAP[DatasetFormat.CONVERSATION][0];
          const require_assistant = purpose !== 'eval';
          // @ts-ignore - just bad typescript not being great at record access
          const messages = json_line[message_column];
          validate_messages(messages, idx, require_assistant);
        } else {
          for (const column of JSONL_REQUIRED_COLUMNS_MAP[current_format]) {
            if (typeof json_line[column] !== 'string') {
              throw new InvalidFileFormatError(
                `Invalid value type for "${column}" key on line ${
                  idx + 1
                }. Expected string. Found ${typeof json_line[column]}.`,
                idx + 1,
                'key_value',
              );
            }
          }
        }

        if (dataset_format === null) {
          dataset_format = current_format;
        } else if (current_format !== null) {
          if (current_format !== dataset_format) {
            throw new InvalidFileFormatError(
              `All samples in the dataset must have the same dataset format. Got ${dataset_format} for the first line and ${current_format} for the line ${
                idx + 1
              }.`,
              idx + 1,
              'format',
            );
          }
        }
      }
    }

    Object.assign(report_dict, _check_samples_count(file, report_dict, idx));
    report_dict.load_json = true;
  } catch (e) {
    report_dict.load_json = false;
    report_dict.is_check_passed = false;

    if (e instanceof InvalidFileFormatError) {
      report_dict.message = e.message;
      if (e.line_number !== null) {
        report_dict.line_number = e.line_number;
      }
      if (e.error_source !== null) {
        (report_dict as any)[e.error_source] = false;
      }
    } else {
      if (idx < 0) {
        report_dict.message = 'Unable to decode file. File may be empty or in an unsupported format. ';
      } else {
        report_dict.message = `Error parsing json payload. Unexpected format on line ${idx + 1}.`;
      }
    }
  } finally {
    await rl.close();
  }

  if (!('text_field' in report_dict)) {
    report_dict.text_field = true;
  }
  if (!('line_type' in report_dict)) {
    report_dict.line_type = true;
  }
  if (!('key_value' in report_dict)) {
    report_dict.key_value = true;
  }

  return report_dict;
}

async function _check_parquet(
  file: string,
  purpose: FilePurpose | string,
): Promise<Partial<CheckFileReport>> {
  let ParquetReader: any;
  try {
    // ParquetJS is optional as it's large and isn't compatible with older systems.
    const pkg = await import('parquetjs');
    ParquetReader = pkg.ParquetReader;
  } catch {
    throw new Error(
      'parquetjs is not installed and is required to use parquet files. Please install it via `npm install parquetjs`',
    );
  }

  const report_dict: Partial<CheckFileReport> = {};

  if (purpose === 'eval') {
    report_dict.is_check_passed = false;
    report_dict.message = `Parquet files are not supported for ${purpose}. Only JSONL and CSV files are supported.`;
    return report_dict;
  }

  try {
    const reader = await ParquetReader.openFile(file);
    const schema = reader.schema;
    const column_names = Object.keys(schema.fields);

    if (!column_names.includes('input_ids')) {
      report_dict.load_parquet = `Parquet file ${file} does not contain the \`input_ids\` column.`;
      report_dict.is_check_passed = false;
      await reader.close();
      return report_dict;
    }

    for (const column_name of column_names) {
      if (!PARQUET_EXPECTED_COLUMNS.includes(column_name)) {
        report_dict.load_parquet = `Parquet file ${file} contains an unexpected column ${column_name}. Only columns ${PARQUET_EXPECTED_COLUMNS.join(
          ', ',
        )} are supported.`;
        report_dict.is_check_passed = false;
        await reader.close();
        return report_dict;
      }
    }

    const num_samples = reader.getRowCount() as number;

    if (num_samples < MIN_SAMPLES) {
      report_dict.has_min_samples = false;
      report_dict.message = `Processing ${file} resulted in only ${num_samples} samples. Our minimum is ${MIN_SAMPLES} samples. `;
      report_dict.is_check_passed = false;
      await reader.close();
      return report_dict;
    } else {
      report_dict.num_samples = num_samples;
    }

    await reader.close();
    report_dict.is_check_passed = true;
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : String(e);
    const stack = e instanceof Error ? e.stack : '';
    report_dict.load_parquet = `An exception has occurred when loading the Parquet file ${file}. Please check the file for corruption. Exception trace:\n${errorMessage}\n${stack}`;
    report_dict.is_check_passed = false;
  }

  return report_dict;
}
