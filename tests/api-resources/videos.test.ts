// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource videos', () => {
  test('create: only required params', async () => {
    const responsePromise = client.videos.create({ model: 'model' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.videos.create({
      model: 'model',
      fps: 0,
      frame_images: [{ frame: 0, input_image: 'input_image' }],
      guidance_scale: 0,
      height: 0,
      negative_prompt: 'negative_prompt',
      output_format: 'MP4',
      output_quality: 0,
      prompt: 'x',
      reference_images: [{}],
      seconds: 'seconds',
      seed: 0,
      steps: 10,
      width: 0,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.videos.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
