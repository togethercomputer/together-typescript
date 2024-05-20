// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together';
import { Response } from 'node-fetch';

const together = new Together({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource completions', () => {
  test('create: only required params', async () => {
    const responsePromise = together.completions.create({
      model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
      prompt: '<s>[INST] What is the capital of France? [/INST]',
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
    const response = await together.completions.create({
      model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
      prompt: '<s>[INST] What is the capital of France? [/INST]',
      echo: true,
      frequency_penalty: 0,
      logit_bias: { '105': 21.4, '1024': -10.5 },
      logprobs: 0,
      max_tokens: 0,
      min_p: 0,
      n: 1,
      presence_penalty: 0,
      repetition_penalty: 0,
      safety_model: 'safety_model_name',
      stop: ['string', 'string', 'string'],
      stream: false,
      temperature: 0,
      top_k: 0,
      top_p: 0,
    });
  });
});
