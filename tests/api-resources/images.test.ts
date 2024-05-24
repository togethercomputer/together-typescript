// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';
import { Response } from 'node-fetch';

const together = new Together({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource images', () => {
  test('create: only required params', async () => {
    const responsePromise = together.images.create({
      model: 'stabilityai/stable-diffusion-xl-base-1.0',
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
    const response = await together.images.create({
      model: 'stabilityai/stable-diffusion-xl-base-1.0',
      prompt: 'cat floating in space, cinematic',
      height: 0,
      n: 0,
      negative_prompt: 'string',
      seed: 0,
      steps: 0,
      width: 0,
    });
  });
});
