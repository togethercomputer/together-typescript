// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Images extends APIResource {
  /**
   * Use an image model to generate an image for a given prompt.
   *
   * @example
   * ```ts
   * const imageFile = await client.images.create({
   *   model: 'black-forest-labs/FLUX.1-schnell',
   *   prompt: 'cat floating in space, cinematic',
   * });
   * ```
   */
  create<Body extends ImageCreateParams>(
    body: Body,
    options?: RequestOptions,
  ): APIPromise<
    Omit<ImageFile, 'data'> & {
      data: Body['response_format'] extends 'base64' ? ImageDataB64[] : ImageDataURL[];
    }
  > {
    return this._client.post('/images/generations', { body, ...options });
  }
}

export interface ImageDataB64 {
  b64_json: string;

  index: number;

  type: 'b64_json';
}

export interface ImageDataURL {
  index: number;

  type: 'url';

  url: string;
}

export interface ImageFile {
  id: string;

  data: Array<ImageDataB64 | ImageDataURL>;

  model: string;

  object: 'list';
}

export interface ImageCreateParams {
  /**
   * The model to use for image generation.
   *
   * [See all of Together AI's image models](https://docs.together.ai/docs/serverless-models#image-models)
   */
  model:
    | 'black-forest-labs/FLUX.1-schnell-Free'
    | 'black-forest-labs/FLUX.1-schnell'
    | 'black-forest-labs/FLUX.1.1-pro'
    | (string & {});

  /**
   * A description of the desired images. Maximum length varies by model.
   */
  prompt: string;

  /**
   * If true, disables the safety checker for image generation.
   */
  disable_safety_checker?: boolean;

  /**
   * Adjusts the alignment of the generated image with the input prompt. Higher
   * values (e.g., 8-10) make the output more faithful to the prompt, while lower
   * values (e.g., 1-5) encourage more creative freedom.
   */
  guidance_scale?: number;

  /**
   * Height of the image to generate in number of pixels.
   */
  height?: number;

  /**
   * An array of objects that define LoRAs (Low-Rank Adaptations) to influence the
   * generated image.
   */
  image_loras?: Array<ImageCreateParams.ImageLora>;

  /**
   * URL of an image to use for image models that support it.
   */
  image_url?: string;

  /**
   * Number of image results to generate.
   */
  n?: number;

  /**
   * The prompt or prompts not to guide the image generation.
   */
  negative_prompt?: string;

  /**
   * The format of the image response. Can be either be `jpeg` or `png`. Defaults to
   * `jpeg`.
   */
  output_format?: 'jpeg' | 'png';

  /**
   * Format of the image response. Can be either a base64 string or a URL.
   */
  response_format?: 'base64' | 'url';

  /**
   * Seed used for generation. Can be used to reproduce image generations.
   */
  seed?: number;

  /**
   * Number of generation steps.
   */
  steps?: number;

  /**
   * Width of the image to generate in number of pixels.
   */
  width?: number;
}

export namespace ImageCreateParams {
  export interface ImageLora {
    /**
     * The URL of the LoRA to apply (e.g.
     * https://huggingface.co/strangerzonehf/Flux-Midjourney-Mix2-LoRA).
     */
    path: string;

    /**
     * The strength of the LoRA's influence. Most LoRA's recommend a value of 1.
     */
    scale: number;
  }
}

export declare namespace Images {
  export {
    type ImageDataB64 as ImageDataB64,
    type ImageDataURL as ImageDataURL,
    type ImageFile as ImageFile,
    type ImageCreateParams as ImageCreateParams,
  };
}
