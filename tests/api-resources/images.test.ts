// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseImages } from 'together-ai/resources/images';

import Together from 'together-ai';
import { createClient, type PartialTogether } from 'together-ai/tree-shakable';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseImages],
});

const runTests = (client: PartialTogether<{ images: BaseImages }>) => {
  test('generate: only required params', async () => {
    const responsePromise = client.images.generate({
      model: 'black-forest-labs/FLUX.1-schnell',
      prompt: 'cat floating in space, cinematic',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('generate: required and optional params', async () => {
    const response = await client.images.generate({
      model: 'black-forest-labs/FLUX.1-schnell',
      prompt: 'cat floating in space, cinematic',
      disable_safety_checker: true,
      guidance_scale: 0,
      height: 0,
      image_loras: [{ path: 'path', scale: 0 }],
      image_url: 'image_url',
      n: 0,
      negative_prompt: 'negative_prompt',
      output_format: 'jpeg',
      reference_images: ['string'],
      response_format: 'base64',
      seed: 0,
      steps: 0,
      width: 0,
    });
  });
};
describe('resource images', () => runTests(client));
describe('resource images (tree shakable, base)', () => runTests(partialClient));
