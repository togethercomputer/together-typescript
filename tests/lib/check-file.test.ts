import fs from 'fs';
import path from 'path';
import os from 'os';
import { checkFile } from '../../src/lib/check-file';

describe('checkFile', () => {
  let tmpDir: string;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'check-file-test-'));
  });

  afterEach(() => {
    if (fs.existsSync(tmpDir)) {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    }
  });

  describe('JSONL files', () => {
    describe('valid files', () => {
      it('should pass for valid general format', async () => {
        const file = path.join(tmpDir, 'valid.jsonl');
        const content = [{ text: 'Hello, world!' }, { text: 'How are you?' }];
        fs.writeFileSync(file, content.map((item) => JSON.stringify(item)).join('\n'));

        const report = await checkFile(file);

        expect(report.is_check_passed).toBe(true);
        expect(report.utf8).toBe(true);
        expect(report.num_samples).toBe(content.length);
        expect(report.has_min_samples).toBe(true);
      });

      it('should pass for valid instruction format', async () => {
        const file = path.join(tmpDir, 'valid_instruction.jsonl');
        const content = [
          { prompt: 'Translate the following sentence.', completion: 'Hello, world!' },
          { prompt: 'Summarize the text.', completion: 'Weyland-Yutani Corporation creates advanced AI.' },
        ];
        fs.writeFileSync(file, content.map((item) => JSON.stringify(item)).join('\n'));

        const report = await checkFile(file);

        expect(report.is_check_passed).toBe(true);
        expect(report.utf8).toBe(true);
        expect(report.num_samples).toBe(content.length);
        expect(report.has_min_samples).toBe(true);
      });

      it('should pass for valid conversational format with single turn', async () => {
        const file = path.join(tmpDir, 'valid_conversational_single_turn.jsonl');
        const content = [
          {
            messages: [
              { role: 'user', content: 'Hello' },
              { role: 'assistant', content: 'Hi there!' },
            ],
          },
          {
            messages: [
              { role: 'user', content: 'How are you?' },
              { role: 'assistant', content: 'I am fine.' },
            ],
          },
          {
            messages: [
              { role: 'system', content: 'You are a kind AI' },
              { role: 'user', content: 'How are you?' },
              { role: 'assistant', content: 'I am fine.' },
            ],
          },
        ];
        fs.writeFileSync(file, content.map((item) => JSON.stringify(item)).join('\n'));

        const report = await checkFile(file);

        expect(report.is_check_passed).toBe(true);
        expect(report.utf8).toBe(true);
        expect(report.num_samples).toBe(content.length);
        expect(report.has_min_samples).toBe(true);
      });

      it('should pass for valid conversational format with multiple turns', async () => {
        const file = path.join(tmpDir, 'valid_conversational_multiple_turns.jsonl');
        const content = [
          {
            messages: [
              { role: 'user', content: 'Is it going to rain today?' },
              { role: 'assistant', content: 'Yes, expect showers in the afternoon.' },
              { role: 'user', content: 'What is the weather like in Tokyo?' },
              { role: 'assistant', content: 'It is sunny with a chance of rain.' },
            ],
          },
          {
            messages: [
              { role: 'user', content: 'Who won the game last night?' },
              { role: 'assistant', content: 'The home team won by two points.' },
              { role: 'user', content: 'What is the weather like in Amsterdam?' },
              { role: 'assistant', content: 'It is cloudy with a chance of snow.' },
            ],
          },
          {
            messages: [
              { role: 'system', content: 'You are a kind AI' },
              { role: 'user', content: 'Who won the game last night?' },
              { role: 'assistant', content: 'The home team won by two points.' },
              { role: 'user', content: 'What is the weather like in Amsterdam?' },
              { role: 'assistant', content: 'It is cloudy with a chance of snow.' },
            ],
          },
        ];
        fs.writeFileSync(file, content.map((item) => JSON.stringify(item)).join('\n'));

        const report = await checkFile(file);

        expect(report.is_check_passed).toBe(true);
        expect(report.utf8).toBe(true);
        expect(report.num_samples).toBe(content.length);
        expect(report.has_min_samples).toBe(true);
      });

      it('should pass for valid weights on all messages', async () => {
        const file = path.join(tmpDir, 'valid_weights_all.jsonl');
        const content = [
          {
            messages: [
              { role: 'user', content: 'Hello', weight: 1 },
              { role: 'assistant', content: 'Hi there!', weight: 0 },
              { role: 'user', content: 'How are you?', weight: 1 },
              { role: 'assistant', content: "I'm doing well!", weight: 1 },
            ],
          },
          {
            messages: [
              { role: 'system', content: 'You are helpful', weight: 0 },
              { role: 'user', content: "What's the weather?", weight: 1 },
              { role: 'assistant', content: "It's sunny today!", weight: 1 },
            ],
          },
        ];
        fs.writeFileSync(file, content.map((item) => JSON.stringify(item)).join('\n'));

        const report = await checkFile(file);
        expect(report.is_check_passed).toBe(true);
        expect(report.num_samples).toBe(content.length);
      });

      it('should pass for valid weights mixed with messages without weights', async () => {
        const file = path.join(tmpDir, 'valid_weights_mixed.jsonl');
        const content = [
          {
            messages: [
              { role: 'user', content: 'Hello', weight: 1 },
              { role: 'assistant', content: 'Hi there!', weight: 0 },
              { role: 'user', content: 'How are you?' },
              { role: 'assistant', content: "I'm doing well!" },
            ],
          },
          {
            messages: [
              { role: 'user', content: "What's the weather?" },
              { role: 'assistant', content: "It's sunny today!" },
            ],
          },
        ];
        fs.writeFileSync(file, content.map((item) => JSON.stringify(item)).join('\n'));

        const report = await checkFile(file);
        expect(report.is_check_passed).toBe(true);
        expect(report.num_samples).toBe(content.length);
      });
    });

    describe('invalid files', () => {
      it('should fail for empty file', async () => {
        const file = path.join(tmpDir, 'empty.jsonl');
        fs.writeFileSync(file, '');

        const report = await checkFile(file);

        expect(report.is_check_passed).toBe(false);
        expect(report.message).toBe('File is empty');
        expect(report.file_size).toBe(0);
      });

      it('should fail for non-UTF-8 encoded file', async () => {
        const file = path.join(tmpDir, 'non_utf8.jsonl');

        fs.writeFileSync(file, Buffer.from([0xff, 0xfe, 0xfd]), 'hex');

        const report = await checkFile(file);
        expect(report.is_check_passed).toBe(false);
        expect(report.utf8).toBe(false);
        expect(report.message).toContain('File is not UTF-8 encoded');
      });

      it('should fail for invalid JSON', async () => {
        const file = path.join(tmpDir, 'invalid_json.jsonl');
        const content = [JSON.stringify({ text: 'Hello, world!' }), 'Invalid JSON Line'];
        fs.writeFileSync(file, content.join('\n'));

        const report = await checkFile(file);

        expect(report.is_check_passed).toBe(false);
        expect(report.message).toContain('Error parsing');
      });

      it('should fail for missing required field', async () => {
        const file = path.join(tmpDir, 'missing_field.jsonl');
        const content = [
          { prompt: 'Translate the following sentence.', completion: 'Hello, world!' },
          { prompt: 'Summarize the text.' },
        ];
        fs.writeFileSync(file, content.map((item) => JSON.stringify(item)).join('\n'));

        const report = await checkFile(file);

        expect(report.is_check_passed).toBe(false);
        expect(report.message).toContain('Could not detect a format for the line 2');
      });

      it('should fail for inconsistent dataset format', async () => {
        const file = path.join(tmpDir, 'inconsistent_format.jsonl');
        const content = [
          {
            messages: [
              { role: 'user', content: 'Hi' },
              { role: 'assistant', content: 'Hi! How can I help you?' },
            ],
          },
          { text: 'How are you?' },
        ];
        fs.writeFileSync(file, content.map((item) => JSON.stringify(item)).join('\n'));

        const report = await checkFile(file);

        expect(report.is_check_passed).toBe(false);
        expect(report.message).toContain('All samples in the dataset must have the same dataset format');
      });

      it('should fail for invalid role', async () => {
        const file = path.join(tmpDir, 'invalid_role.jsonl');
        const content = [{ messages: [{ role: 'invalid_role', content: 'Hi' }] }];
        fs.writeFileSync(file, content.map((item) => JSON.stringify(item)).join('\n'));

        const report = await checkFile(file);

        expect(report.is_check_passed).toBe(false);
        expect(report.message).toContain('Invalid role `invalid_role` in conversation');
      });

      it('should fail for non-alternating roles', async () => {
        const file = path.join(tmpDir, 'non_alternating_roles.jsonl');
        const content = [
          {
            messages: [
              { role: 'user', content: 'Hi' },
              { role: 'user', content: 'Hello again' },
            ],
          },
        ];
        fs.writeFileSync(file, content.map((item) => JSON.stringify(item)).join('\n'));

        const report = await checkFile(file);

        expect(report.is_check_passed).toBe(false);
        expect(report.message).toContain('Invalid role turns');
      });

      it('should fail when assistant role does not exist', async () => {
        const file = path.join(tmpDir, 'assistant_role_exists.jsonl');
        const content = [{ messages: [{ role: 'user', content: 'Hi' }] }];
        fs.writeFileSync(file, content.map((item) => JSON.stringify(item)).join('\n'));

        const report = await checkFile(file);

        expect(report.is_check_passed).toBe(false);
        expect(report.message).toContain('At least one message with the assistant role must be present');
      });

      it('should fail for invalid value type', async () => {
        const file = path.join(tmpDir, 'invalid_value_type.jsonl');
        const content = [{ text: 123 }];
        fs.writeFileSync(file, content.map((item) => JSON.stringify(item)).join('\n'));

        const report = await checkFile(file);
        expect(report.is_check_passed).toBe(false);
        expect(report.message).toContain('Expected string');
      });

      it('should fail for missing field in conversation', async () => {
        const file = path.join(tmpDir, 'missing_field_in_conversation.jsonl');
        const content = [
          {
            messages: [{ role: 'user', content: 'Hi' }, { role: 'assistant' }],
          },
        ];
        fs.writeFileSync(file, content.map((item) => JSON.stringify(item)).join('\n'));

        const report = await checkFile(file);
        expect(report.is_check_passed).toBe(false);
        expect(report.message).toContain('Missing required column `content`');
      });

      it('should fail for wrong turn type', async () => {
        const file = path.join(tmpDir, 'wrong_turn_type.jsonl');
        const content = [
          {
            messages: ['Hi!', { role: 'user', content: 'Hi' }, { role: 'assistant' }],
          },
        ];
        fs.writeFileSync(file, content.map((item) => JSON.stringify(item)).join('\n'));

        const report = await checkFile(file);
        expect(report.is_check_passed).toBe(false);
        expect(report.message).toContain('The `messages` column must be a list of dicts');
      });

      it('should fail for extra column', async () => {
        const file = path.join(tmpDir, 'extra_column.jsonl');
        const content = [{ text: 'Hello, world!', extra_column: 'extra' }];
        fs.writeFileSync(file, content.map((item) => JSON.stringify(item)).join('\n'));

        const report = await checkFile(file);
        expect(report.is_check_passed).toBe(false);
        expect(report.message).toContain('Found extra column');
      });

      it('should fail for empty messages', async () => {
        const file = path.join(tmpDir, 'empty_messages.jsonl');
        const content = [{ messages: [] }];
        fs.writeFileSync(file, content.map((item) => JSON.stringify(item)).join('\n'));

        const report = await checkFile(file);
        expect(report.is_check_passed).toBe(false);
        expect(report.message).toContain('The `messages` column must not be empty');
      });

      it('should fail for invalid weight as float', async () => {
        const file = path.join(tmpDir, 'invalid_weight_float.jsonl');
        const content = [
          {
            messages: [
              { role: 'user', content: 'Hello', weight: 1.3 },
              { role: 'assistant', content: 'Hi there!', weight: 0 },
            ],
          },
        ];
        fs.writeFileSync(file, content.map((item) => JSON.stringify(item)).join('\n'));

        const report = await checkFile(file);
        expect(report.is_check_passed).toBe(false);
        expect(report.message).toContain('Weight must be an integer');
      });

      it('should fail for invalid weight value', async () => {
        const file = path.join(tmpDir, 'invalid_weight.jsonl');
        const content = [
          {
            messages: [
              { role: 'user', content: 'Hello', weight: 2 },
              { role: 'assistant', content: 'Hi there!', weight: 0 },
            ],
          },
        ];
        fs.writeFileSync(file, content.map((item) => JSON.stringify(item)).join('\n'));

        const report = await checkFile(file);
        expect(report.is_check_passed).toBe(false);
        expect(report.message).toContain('Weight must be either 0 or 1');
      });
    });
  });

  describe('CSV files', () => {
    it('should pass for valid general format', async () => {
      const file = path.join(tmpDir, 'valid.csv');
      const csvContent = 'text\n{"text": "Hello world!"}\n{"text": "How are you?"}\n';
      fs.writeFileSync(file, csvContent);

      const report = await checkFile(file, 'eval');

      expect(report.is_check_passed).toBe(true);
      expect(report.utf8).toBe(true);
      expect(report.num_samples).toBe(2);
      expect(report.has_min_samples).toBe(true);
    });

    it('should fail for empty file', async () => {
      const file = path.join(tmpDir, 'empty.csv');
      fs.writeFileSync(file, '');

      const report = await checkFile(file, 'eval');

      expect(report.is_check_passed).toBe(false);
      expect(report.message).toBe('File is empty');
      expect(report.file_size).toBe(0);
    });

    it('should pass for valid completion format', async () => {
      const file = path.join(tmpDir, 'valid_completion.csv');
      const csvContent = 'prompt,completion\r\nTranslate the following sentence,Hello world!\r\n';
      fs.writeFileSync(file, csvContent);

      const report = await checkFile(file, 'eval');
      expect(report.is_check_passed).toBe(true);
      expect(report.utf8).toBe(true);
      expect(report.num_samples).toBe(1);
      expect(report.has_min_samples).toBe(true);
    });

    it('should fail for invalid column', async () => {
      const file = path.join(tmpDir, 'invalid_column.csv');
      const csvContent = 'asfg\n';
      fs.writeFileSync(file, csvContent);

      const report = await checkFile(file);

      expect(report.is_check_passed).toBe(false);
    });
  });
});
