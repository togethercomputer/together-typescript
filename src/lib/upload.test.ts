import { upload } from './upload';

describe('Test Upload', () => {
  it('should upload a file', async () => {
    const output = await upload('./src/lib/file.jsonl', 'fine-tune', false);
    expect(output).toBeDefined()
    expect(output?.id).toEqual(expect.any(String));
  });
});
