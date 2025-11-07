import { Command, Flags, ux } from '@oclif/core';
import { Together } from '../../client';
import { APIError, TogetherError } from 'together-ai/error';

export default class ModelsUpload extends Command {
  static override args = {};
  static override description = 'Upload a model to Together';
  static override examples = [
    'together models upload --model-name <model-name> --model-source <model-source>',
  ];
  static override flags = {
    ['model-name']: Flags.string({
      description: 'The name to give to your uploaded model',
      required: true,
    }),
    ['model-source']: Flags.string({
      description: 'The source location of the model (Hugging Face repo or S3 path)',
      required: true,
    }),
  };

  public async run(): Promise<void> {
    const { flags } = await this.parse(ModelsUpload);
    const model_name = flags['model-name'];
    const model_source = flags['model-source'];

    const client = new Together();
    try {
      ux.action.start('Uploading model');
      const result = await client.models.upload({
        model_name,
        model_source,
      });

      ux.action.stop();
      this.logJson(result);
    } catch (error) {
      ux.action.stop('');
      if (error instanceof APIError) {
        this.log(ux.colorize('red', `\n❌ ${error.error.error.message}`));
      }
      // this.error(error.message, { code: error.message})
    }
  }
}
