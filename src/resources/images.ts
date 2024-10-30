// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ImagesAPI from './images';

export class Images extends APIResource {
  /**
   * Use an image model to generate an image for a given prompt.
   */
  create(body: ImageCreateParams, options?: Core.RequestOptions): Core.APIPromise<ImageFile> {
    return this._client.post('/images/generations', { body, ...options });
  }
}

export interface ImageFile {
  id: string;

  data: Array<ImageFile.Data>;

  model: string;

  object: 'list';
}

export namespace ImageFile {
  export interface Data {
    b64_json: string;

    index: number;
  }
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
   * Height of the image to generate in number of pixels.
   */
  height?: number;

  /**
   * Number of image results to generate.
   */
  n?: number;

  /**
   * The prompt or prompts not to guide the image generation.
   */
  negative_prompt?: string;

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

export namespace Images {
  export import ImageFile = ImagesAPI.ImageFile;
  export import ImageCreateParams = ImagesAPI.ImageCreateParams;
}
