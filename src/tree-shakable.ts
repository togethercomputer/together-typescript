// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseTogether, ClientOptions } from './client';
import { APIResource } from './core/resource';
import { hasOwn } from './internal/utils/values';

export type PartialTogether<T extends MaybeResource> = BaseTogether & T;

type InferClientStructure<T extends readonly (typeof APIResource)[]> =
  SimplifyResources<UnionToIntersection<ResourcePath<T[number]>>> extends infer O extends MaybeResource ? O
  : never;

/**
 * Creates a client with a subset of the available resources to reduce
 * bundle size.
 * Import the resource classes you need from `together-ai/resources/*`.
 * Use the BaseResource variants if you do not need to use subresources.
 *
 * @example
 * ```ts
 * import { Beta } from `together-ai/resources/beta`;
 * import { createClient } from `together-ai/tree-shakable`;
 *
 * const client = createClient({
 *   resources: [Beta],
 * });
 * ```
 */
export function createClient<const T extends readonly (typeof APIResource)[]>(
  options: ClientOptions & { resources: T },
): PartialTogether<InferClientStructure<T>> {
  const client = new BaseTogether(options);
  for (const ResourceClass of options.resources) {
    const resourceInstance: APIResource = new (ResourceClass as any)(client);
    let object: object = client;
    for (const part of ResourceClass._key.slice(0, -1)) {
      if (hasOwn(object, part)) {
        object = object[part];
      } else {
        Object.defineProperty(object, part, {
          value: (object = {}),
          configurable: true,
          enumerable: true,
          writable: true,
        });
      }
    }
    const name = ResourceClass._key.at(-1)!;
    if (!hasOwn(object, name)) {
      Object.defineProperty(object, name, {
        value: resourceInstance,
        configurable: true,
        enumerable: true,
        writable: true,
      });
    } else {
      if ((object as any)[name] instanceof APIResource) {
        throw new TypeError(`Resource at ${ResourceClass._key.join('.')} already exists!`);
      } else {
        (object as any)[name] = Object.assign(resourceInstance, (object as any)[name]);
      }
    }
  }
  return client as any;
}

/**
 * `FromDeepEntry<['a', 'b', 'c'], 'value'>` -> `{ a: { b: { c: 'value'; }; }; }`
 */
type FromDeepEntry<K extends readonly PropertyKey[], V> = K['length'] extends 1 ? { [_ in K[0]]: V } & {}
: K extends readonly [infer First extends PropertyKey, ...infer Rest extends readonly PropertyKey[]] ?
  { [_ in First]: FromDeepEntry<Rest, V> }
: never;

/**
 * `ResourcePath<{ _key: ["a", "b", "c"]; new (): Instance }>` -> `{ a: { b: { c: Instance; }; }; }`
 */
type ResourcePath<T extends typeof APIResource> =
  T extends any ? FromDeepEntry<T['_key'], InstanceType<T>> : never;

/**
 * `UnionToIntersection<{ a: 1 } | { b: 2 }>` -> `{ a: 1 } & { b: 2 }`
 */
type UnionToIntersection<U> =
  (U extends any ? (x: U) => void : never) extends (x: infer I) => void ? I : never;

/**
 * Makes the types look nicer:
 * `SimplifyResources<{ a: APIResource } & { b: { c: APIResource } & { d: APIResource } }>` -> `{ a: APIResource; b: { c: APIResource; d: APIResource; }; }`
 */
type SimplifyResources<T> =
  T extends APIResource ? T
  : T extends object ?
    {
      [P in keyof T as string extends P ? never : P]: SimplifyResources<T[P]>;
    }
  : T;

type MaybeResource = MaybeResource_ | APIResource;
interface MaybeResource_ {
  [_: string]: MaybeResource;
}
