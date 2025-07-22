// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource images', () => {
  test('create: only required params', async () => {
    const responsePromise = client.images.create({
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

  test('create: required and optional params', async () => {
    const response = await client.images.create({
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
      response_format: 'base64',
      seed: 0,
      steps: 0,
      width: 0,
    });
  });
});
