// CUSTOM CODE. DO NOT LET STAINLESS REMOVE.
//
// Regression tests for the chat completion convenience runners in `src/lib`.
// These exercise the error paths, which previously never settled because
// `AbstractChatCompletionRunner#handleError` shadowed the `TogetherError` class
// with a local `const` of the same name.

import { ChatCompletionRunner } from '../../src/lib/ChatCompletionRunner';
import { ChatCompletionStreamingRunner } from '../../src/lib/ChatCompletionStreamingRunner';
import type { Completions } from '../../src/resources/chat/completions';

const failingCompletions = (error: Error) =>
  ({ create: () => Promise.reject(error) }) as unknown as Completions;

describe('chat completion runners', () => {
  it('rejects done() with a wrapped error when the request fails unexpectedly', async () => {
    const runner = ChatCompletionRunner.runTools(failingCompletions(new TypeError('tool exploded')), {
      messages: [{ role: 'user', content: 'hi' }],
      model: 'test-model',
      tools: [],
    });

    await expect(runner.done()).rejects.toThrow('tool exploded');
  });

  it('emits an error event instead of throwing a ReferenceError', async () => {
    const runner = ChatCompletionRunner.runTools(failingCompletions(new TypeError('tool exploded')), {
      messages: [{ role: 'user', content: 'hi' }],
      model: 'test-model',
      tools: [],
    });

    const error = await new Promise<Error>((resolve) => runner.on('error', resolve));
    expect(error.message).toBe('tool exploded');
  });

  it('streaming runners also settle when the request fails unexpectedly', async () => {
    const runner = ChatCompletionStreamingRunner.runTools(
      failingCompletions(new TypeError('stream exploded')),
      {
        messages: [{ role: 'user', content: 'hi' }],
        model: 'test-model',
        stream: true,
        tools: [],
      },
    );

    await expect(runner.done()).rejects.toThrow('stream exploded');
  });

  const assistantCompletion = (message: Record<string, unknown>) =>
    ({
      id: 'completion-1',
      object: 'chat.completion',
      created: 0,
      model: 'test-model',
      choices: [{ index: 0, finish_reason: 'stop', message }],
    }) as any;

  it('stops after one request when the model returns an empty tool_calls array', async () => {
    const create = jest
      .fn()
      .mockResolvedValue(assistantCompletion({ role: 'assistant', content: 'done', tool_calls: [] }));

    const runner = ChatCompletionRunner.runTools({ create } as unknown as Completions, {
      messages: [{ role: 'user', content: 'hi' }],
      model: 'test-model',
      tools: [],
    });

    const completion = await runner.finalChatCompletion();

    expect(create).toHaveBeenCalledTimes(1);
    expect(completion.choices[0]?.message?.content).toBe('done');
  });

  it('does not emit the caller-provided input history as message events', async () => {
    const create = jest.fn().mockResolvedValue(assistantCompletion({ role: 'assistant', content: 'done' }));

    const runner = ChatCompletionRunner.runTools({ create } as unknown as Completions, {
      messages: [
        { role: 'system', content: 'be nice' },
        { role: 'user', content: 'hi' },
      ],
      model: 'test-model',
      tools: [],
    });

    const seen: string[] = [];
    runner.on('message', (message) => seen.push(`${message.role}:${message.content}`));

    await runner.finalChatCompletion();

    // Streaming runners already behave this way; both should only surface the
    // messages produced by the model.
    expect(seen).toEqual(['assistant:done']);
  });
});
