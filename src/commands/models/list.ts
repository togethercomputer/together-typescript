import { Command } from '@oclif/core';
import { Together } from '../../client';

export default class ModelsList extends Command {
  // static override args = {};
  // static override description = 'List available models';
  // static override examples = ['together models list'];
  // static override flags = {};

  public async run(): Promise<void> {
    this.parse(ModelsList);
    const { printTable } = await import('@oclif/table');
    const client = new Together();

    const models = await client.models.list();
    const data = models.map((model) => ({
      ...model,
      pricingInput: model.pricing?.input,
      pricingOutput: model.pricing?.output,
    }));

    printTable({
      title: 'Models',
      data,
      columns: [
        {
          key: 'id',
          name: 'Name',
          width: 200,
        },
        {
          key: 'organization',
          name: 'Organization',
        },
        {
          key: 'type',
          name: 'Type',
        },
        {
          key: 'context_length',
          name: 'Context Length',
        },
        {
          key: 'license',
          name: 'License',
        },
        {
          key: 'pricingInput',
          name: 'Input per 1M token',
          width: 10,
        },
        {
          key: 'pricingOutput',
          name: 'Output per 1M token',
          width: 10,
        },
      ],
    });
  }
}
