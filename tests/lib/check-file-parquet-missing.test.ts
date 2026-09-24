// CUSTOM CODE. DO NOT LET STAINLESS REMOVE.
//
// `parquetjs` is an optional dependency: it is only required when checking a
// `.parquet` file. Make sure a missing dependency is reported as a failed check
// rather than silently passing.

jest.mock('parquetjs', () => {
  throw new Error("Cannot find module 'parquetjs'");
});

import fs from 'fs';
import os from 'os';
import path from 'path';
import { checkFile } from '../../src/lib/check-file';

describe('checkFile without parquetjs installed', () => {
  let tmpDir: string;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'check-file-parquet-'));
  });

  afterEach(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it('should fail the check and explain that parquetjs is required', async () => {
    const file = path.join(tmpDir, 'data.parquet');
    fs.writeFileSync(file, 'not matter, parquetjs cannot be imported');

    const report = await checkFile(file, 'fine-tune');

    expect(report.is_check_passed).toBe(false);
    expect(report.message).toContain('parquetjs');
  });
});
