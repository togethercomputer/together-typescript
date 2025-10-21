// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Videos extends APIResource {
  /**
   * Create a video
   *
   * @example
   * ```ts
   * const video = await client.videos.create({
   *   model: 'model',
   * });
   * ```
   */
  create(body: VideoCreateParams, options?: RequestOptions): APIPromise<VideoCreateResponse> {
    return this._client.post('/videos', { body, defaultBaseURL: 'https://api.together.xyz/v2', ...options });
  }

  /**
   * Fetch video metadata
   *
   * @example
   * ```ts
   * const videoJob = await client.videos.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<VideoJob> {
    return this._client.get(path`/videos/${id}`, {
      defaultBaseURL: 'https://api.together.xyz/v2',
      ...options,
    });
  }
}

/**
 * Structured information describing a generated video job.
 */
export interface VideoJob {
  /**
   * Unique identifier for the video job.
   */
  id: string;

  /**
   * Unix timestamp (seconds) for when the job was created.
   */
  created_at: number;

  /**
   * The video generation model that produced the job.
   */
  model: string;

  /**
   * Duration of the generated clip in seconds.
   */
  seconds: string;

  /**
   * The resolution of the generated video.
   */
  size: string;

  /**
   * Current lifecycle status of the video job.
   */
  status: 'in_progress' | 'completed' | 'failed';

  /**
   * Unix timestamp (seconds) for when the job completed, if finished.
   */
  completed_at?: number;

  /**
   * Error payload that explains why generation failed, if applicable.
   */
  error?: VideoJob.Error;

  /**
   * The object type, which is always video.
   */
  object?: 'video';

  /**
   * Available upon completion, the outputs provides the cost charged and the hosted
   * url to access the video
   */
  outputs?: VideoJob.Outputs;
}

export namespace VideoJob {
  /**
   * Error payload that explains why generation failed, if applicable.
   */
  export interface Error {
    message: string;

    code?: string;
  }

  /**
   * Available upon completion, the outputs provides the cost charged and the hosted
   * url to access the video
   */
  export interface Outputs {
    /**
     * The cost of generated video charged to the owners account.
     */
    cost: number;

    /**
     * URL hosting the generated video
     */
    video_url: string;
  }
}

export interface VideoCreateResponse {
  /**
   * Unique identifier for the video job.
   */
  id: string;
}

export interface VideoCreateParams {
  /**
   * The model to be used for the video creation request.
   */
  model: string;

  /**
   * Frames per second. Defaults to 24.
   */
  fps?: number;

  /**
   * Array of images to guide video generation, similar to keyframes.
   */
  frame_images?: Array<VideoCreateParams.FrameImage>;

  /**
   * Controls how closely the video generation follows your prompt. Higher values
   * make the model adhere more strictly to your text description, while lower values
   * allow more creative freedom. guidence_scale affects both visual content and
   * temporal consistency.Recommended range is 6.0-10.0 for most video models. Values
   * above 12 may cause over-guidance artifacts or unnatural motion patterns.
   */
  guidance_scale?: number;

  height?: number;

  /**
   * Similar to prompt, but specifies what to avoid instead of what to include
   */
  negative_prompt?: string;

  /**
   * Specifies the format of the output video. Defaults to MP4.
   */
  output_format?: 'MP4' | 'WEBM';

  /**
   * Compression quality. Defaults to 20.
   */
  output_quality?: number;

  /**
   * Text prompt that describes the video to generate.
   */
  prompt?: string;

  /**
   * Unlike frame_images which constrain specific timeline positions, reference
   * images guide the general appearance that should appear consistently across the
   * video.
   */
  reference_images?: Array<string>;

  /**
   * Clip duration in seconds.
   */
  seconds?: string;

  /**
   * Seed to use in initializing the video generation. Using the same seed allows
   * deterministic video generation. If not provided a random seed is generated for
   * each request.
   */
  seed?: number;

  /**
   * The number of denoising steps the model performs during video generation. More
   * steps typically result in higher quality output but require longer processing
   * time.
   */
  steps?: number;

  width?: number;
}

export namespace VideoCreateParams {
  export interface FrameImage {
    /**
     * URL path to hosted image that is used for a frame
     */
    input_image: string;

    /**
     * Optional param to specify where to insert the frame. If this is omitted, the
     * following heuristics are applied:
     *
     * - frame_images size is one, frame is first.
     * - If size is two, frames are first and last.
     * - If size is larger, frames are first, last and evenly spaced between.
     */
    frame?: number | 'first' | 'last';
  }
}

export declare namespace Videos {
  export {
    type VideoJob as VideoJob,
    type VideoCreateResponse as VideoCreateResponse,
    type VideoCreateParams as VideoCreateParams,
  };
}
