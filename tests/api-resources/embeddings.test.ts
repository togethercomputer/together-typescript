// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TogetherAI from 'together-ai';
import { Response } from 'node-fetch';

const togetherAI = new TogetherAI({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource embeddings', () => {
  test('create: only required params', async () => {
    const responsePromise = togetherAI.embeddings.create({
      input: 'Our solar system orbits the Milky Way galaxy at about 515,000 mph',
      model: 'togethercomputer/m2-bert-80M-8k-retrieval',
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
    const response = await togetherAI.embeddings.create({
      input: 'Our solar system orbits the Milky Way galaxy at about 515,000 mph',
      model: 'togethercomputer/m2-bert-80M-8k-retrieval',
    });
  });
});
