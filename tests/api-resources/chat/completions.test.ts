// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';
import { Response } from 'node-fetch';

const together = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource completions', () => {
  test('create: only required params', async () => {
    const responsePromise = together.chat.completions.create({
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
    const response = await together.chat.completions.create({
      messages: [
        { role: 'system', content: 'string' },
        { role: 'system', content: 'string' },
        { role: 'system', content: 'string' },
      ],
      model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
      echo: true,
      frequency_penalty: 0,
      logit_bias: { '105': 21.4, '1024': -10.5 },
      logprobs: 0,
      max_tokens: 0,
      min_p: 0,
      n: 1,
      presence_penalty: 0,
      repetition_penalty: 0,
      response_format: { type: 'json', schema: { foo: 'string' } },
      safety_model: 'safety_model_name',
      stop: ['string', 'string', 'string'],
      stream: false,
      temperature: 0,
      tool_choice: 'tool_name',
      tools: [
        {
          type: 'tool_type',
          function: {
            description: 'A description of the function.',
            name: 'function_name',
            parameters: { foo: 'bar' },
          },
        },
        {
          type: 'tool_type',
          function: {
            description: 'A description of the function.',
            name: 'function_name',
            parameters: { foo: 'bar' },
          },
        },
        {
          type: 'tool_type',
          function: {
            description: 'A description of the function.',
            name: 'function_name',
            parameters: { foo: 'bar' },
          },
        },
      ],
      top_k: 0,
      top_p: 0,
    });
  });
});
