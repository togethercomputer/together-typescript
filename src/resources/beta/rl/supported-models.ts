// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class SupportedModels extends APIResource {
  /**
   * Returns the models supported by the RL service and their limits for
   * training/sampling operations.
   *
   * @example
   * ```ts
   * const rlSupportedModels =
   *   await client.beta.rl.supportedModels.get();
   * ```
   */
  get(options?: RequestOptions): APIPromise<RlSupportedModels> {
    return this._client.get('/rl/supported-models', options);
  }
}

/**
 * A base model supported by the RL service. Per-mode configs are present only when
 * the model supports that mode.
 */
export interface RlSupportedModel {
  /**
   * Base model identifier to pass as base_model when creating a model resource
   */
  base_model: string;

  /**
   * Inference config. Set when the model can be provisioned with generator replicas.
   */
  generator_config?: RlSupportedModel.GeneratorConfig;

  /**
   * Training config. Set when the model supports at least one training mode.
   */
  trainer_config?: RlSupportedModel.TrainerConfig;
}

export namespace RlSupportedModel {
  /**
   * Inference config. Set when the model can be provisioned with generator replicas.
   */
  export interface GeneratorConfig {
    /**
     * Maximum tokens in a single inference request (prompt + completion)
     */
    context_length: number;

    /**
     * Default sampling parameters used for sample requests.
     */
    sampling_defaults: GeneratorConfig.SamplingDefaults;
  }

  export namespace GeneratorConfig {
    /**
     * Default sampling parameters used for sample requests.
     */
    export interface SamplingDefaults {
      /**
       * Number of logprobs to return per token
       */
      logprobs: number;

      /**
       * Maximum tokens generated per completion
       */
      max_tokens: number;

      /**
       * Number of completions per prompt
       */
      n: number;

      /**
       * Sampling temperature
       */
      temperature: number;
    }
  }

  /**
   * Training config. Set when the model supports at least one training mode.
   */
  export interface TrainerConfig {
    /**
     * Full-weight training config. Set when the model supports full-weight training.
     */
    full?: TrainerConfig.Full;

    /**
     * LoRA training config. Set when the model supports LoRA training.
     */
    lora?: TrainerConfig.Lora;
  }

  export namespace TrainerConfig {
    /**
     * Full-weight training config. Set when the model supports full-weight training.
     */
    export interface Full {
      /**
       * Maximum global batch size accepted by a forward-backward step
       */
      max_batch_size: number;

      /**
       * Maximum sequence length in tokens
       */
      max_seq_length: number;
    }

    /**
     * LoRA training config. Set when the model supports LoRA training.
     */
    export interface Lora {
      /**
       * Maximum global batch size accepted by a forward-backward step
       */
      max_batch_size: number;

      /**
       * Maximum LoRA rank
       */
      max_rank: number;

      /**
       * Maximum sequence length in tokens
       */
      max_seq_length: number;
    }
  }
}

/**
 * List of base models supported by the RL service
 */
export interface RlSupportedModels {
  /**
   * Supported base models for RL
   */
  data: Array<RlSupportedModel>;
}

export declare namespace SupportedModels {
  export { type RlSupportedModel as RlSupportedModel, type RlSupportedModels as RlSupportedModels };
}
