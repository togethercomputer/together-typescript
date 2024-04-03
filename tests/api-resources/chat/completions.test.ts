// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TogetherAI from 'together-ai';
import { Response } from 'node-fetch';

const togetherAI = new TogetherAI({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource completions', () => {
  test('create: only required params', async () => {
    const responsePromise = togetherAI.chat.completions.create({
      messages: [
        { role: 'system', content: 'string' },
        { role: 'system', content: 'string' },
        { role: 'system', content: 'string' },
      ],
      model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
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
    const response = await togetherAI.chat.completions.create({
      messages: [
        { role: 'system', content: 'string' },
        { role: 'system', content: 'string' },
        { role: 'system', content: 'string' },
      ],
      model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
      echo: true,
      logprobs: 0,
      max_tokens: 0,
      n: 1,
      repetition_penalty: 0,
      stop: ['string', 'string', 'string'],
      stream: false,
      temperature: 0,
      top_k: 0,
      top_p: 0,
    });
  });
});
