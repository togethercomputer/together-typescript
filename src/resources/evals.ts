// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Evals extends APIResource {
  /**
   * Create an evaluation job
   *
   * @example
   * ```ts
   * const _eval = await client.evals.create({
   *   parameters: {
   *     input_data_file_path: 'file-1234-aefd',
   *     judge: {
   *       model: 'meta-llama/Llama-3-70B-Instruct-Turbo',
   *       model_source: 'serverless',
   *       system_template:
   *         'Imagine you are a helpful assistant',
   *     },
   *     labels: ['yes', 'no'],
   *     pass_labels: ['yes'],
   *   },
   *   type: 'classify',
   * });
   * ```
   */
  create(body: EvalCreateParams, options?: RequestOptions): APIPromise<EvalCreateResponse> {
    return this._client.post('/evaluation', { body, ...options });
  }

  /**
   * Get evaluation job details
   *
   * @example
   * ```ts
   * const evaluationJob = await client.evals.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<EvaluationJob> {
    return this._client.get(path`/evaluation/${id}`, options);
  }

  /**
   * Get all evaluation jobs
   *
   * @example
   * ```ts
   * const evaluationJobs = await client.evals.list();
   * ```
   */
  list(
    query: EvalListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EvalListResponse> {
    return this._client.get('/evaluation', { query, ...options });
  }

  /**
   * Get evaluation job status and results
   *
   * @example
   * ```ts
   * const response = await client.evals.status('id');
   * ```
   */
  status(id: string, options?: RequestOptions): APIPromise<EvalStatusResponse> {
    return this._client.get(path`/evaluation/${id}/status`, options);
  }
}

export interface EvaluationJob {
  /**
   * When the job was created
   */
  created_at?: string;

  /**
   * ID of the job owner (admin only)
   */
  owner_id?: string;

  /**
   * The parameters used for this evaluation
   */
  parameters?: { [key: string]: unknown };

  /**
   * Results of the evaluation (when completed)
   */
  results?:
    | EvaluationJob.EvaluationClassifyResults
    | EvaluationJob.EvaluationScoreResults
    | EvaluationJob.EvaluationCompareResults
    | EvaluationJob.Error
    | null;

  /**
   * Current status of the job
   */
  status?: 'pending' | 'queued' | 'running' | 'completed' | 'error' | 'user_error';

  /**
   * History of status updates (admin only)
   */
  status_updates?: Array<EvaluationJob.StatusUpdate>;

  /**
   * The type of evaluation
   */
  type?: 'classify' | 'score' | 'compare';

  /**
   * When the job was last updated
   */
  updated_at?: string;

  /**
   * The evaluation job ID
   */
  workflow_id?: string;
}

export namespace EvaluationJob {
  export interface EvaluationClassifyResults {
    /**
     * Number of failed generations.
     */
    generation_fail_count?: number | null;

    /**
     * Number of invalid labels
     */
    invalid_label_count?: number | null;

    /**
     * Number of failed judge generations
     */
    judge_fail_count?: number | null;

    /**
     * JSON string representing label counts
     */
    label_counts?: string;

    /**
     * Pecentage of pass labels.
     */
    pass_percentage?: number | null;

    /**
     * Data File ID
     */
    result_file_id?: string;
  }

  export interface EvaluationScoreResults {
    aggregated_scores?: EvaluationScoreResults.AggregatedScores;

    /**
     * number of failed samples generated from model
     */
    failed_samples?: number;

    /**
     * Number of failed generations.
     */
    generation_fail_count?: number | null;

    /**
     * number of invalid scores generated from model
     */
    invalid_score_count?: number;

    /**
     * Number of failed judge generations
     */
    judge_fail_count?: number | null;

    /**
     * Data File ID
     */
    result_file_id?: string;
  }

  export namespace EvaluationScoreResults {
    export interface AggregatedScores {
      mean_score?: number;

      pass_percentage?: number;

      std_score?: number;
    }
  }

  export interface EvaluationCompareResults {
    /**
     * Number of times model A won
     */
    A_wins?: number;

    /**
     * Number of times model B won
     */
    B_wins?: number;

    /**
     * Number of failed generations.
     */
    generation_fail_count?: number | null;

    /**
     * Number of failed judge generations
     */
    judge_fail_count?: number | null;

    /**
     * Total number of samples compared
     */
    num_samples?: number;

    /**
     * Data File ID
     */
    result_file_id?: string;

    /**
     * Number of ties
     */
    Ties?: number;
  }

  export interface Error {
    error?: string;
  }

  export interface StatusUpdate {
    /**
     * Additional message for this update
     */
    message?: string;

    /**
     * The status at this update
     */
    status?: string;

    /**
     * When this update occurred
     */
    timestamp?: string;
  }
}

export interface EvalCreateResponse {
  /**
   * Initial status of the job
   */
  status?: 'pending';

  /**
   * The ID of the created evaluation job
   */
  workflow_id?: string;
}

export type EvalListResponse = Array<EvaluationJob>;

export interface EvalStatusResponse {
  /**
   * The results of the evaluation job
   */
  results?:
    | EvalStatusResponse.EvaluationClassifyResults
    | EvalStatusResponse.EvaluationScoreResults
    | EvalStatusResponse.EvaluationCompareResults;

  /**
   * The status of the evaluation job
   */
  status?: 'completed' | 'error' | 'user_error' | 'running' | 'queued' | 'pending';
}

export namespace EvalStatusResponse {
  export interface EvaluationClassifyResults {
    /**
     * Number of failed generations.
     */
    generation_fail_count?: number | null;

    /**
     * Number of invalid labels
     */
    invalid_label_count?: number | null;

    /**
     * Number of failed judge generations
     */
    judge_fail_count?: number | null;

    /**
     * JSON string representing label counts
     */
    label_counts?: string;

    /**
     * Pecentage of pass labels.
     */
    pass_percentage?: number | null;

    /**
     * Data File ID
     */
    result_file_id?: string;
  }

  export interface EvaluationScoreResults {
    aggregated_scores?: EvaluationScoreResults.AggregatedScores;

    /**
     * number of failed samples generated from model
     */
    failed_samples?: number;

    /**
     * Number of failed generations.
     */
    generation_fail_count?: number | null;

    /**
     * number of invalid scores generated from model
     */
    invalid_score_count?: number;

    /**
     * Number of failed judge generations
     */
    judge_fail_count?: number | null;

    /**
     * Data File ID
     */
    result_file_id?: string;
  }

  export namespace EvaluationScoreResults {
    export interface AggregatedScores {
      mean_score?: number;

      pass_percentage?: number;

      std_score?: number;
    }
  }

  export interface EvaluationCompareResults {
    /**
     * Number of times model A won
     */
    A_wins?: number;

    /**
     * Number of times model B won
     */
    B_wins?: number;

    /**
     * Number of failed generations.
     */
    generation_fail_count?: number | null;

    /**
     * Number of failed judge generations
     */
    judge_fail_count?: number | null;

    /**
     * Total number of samples compared
     */
    num_samples?: number;

    /**
     * Data File ID
     */
    result_file_id?: string;

    /**
     * Number of ties
     */
    Ties?: number;
  }
}

export interface EvalCreateParams {
  /**
   * Type-specific parameters for the evaluation
   */
  parameters:
    | EvalCreateParams.EvaluationClassifyParameters
    | EvalCreateParams.EvaluationScoreParameters
    | EvalCreateParams.EvaluationCompareParameters;

  /**
   * The type of evaluation to perform
   */
  type: 'classify' | 'score' | 'compare';
}

export namespace EvalCreateParams {
  export interface EvaluationClassifyParameters {
    /**
     * Data file ID
     */
    input_data_file_path: string;

    judge: EvaluationClassifyParameters.Judge;

    /**
     * List of possible classification labels
     */
    labels: Array<string>;

    /**
     * List of labels that are considered passing
     */
    pass_labels: Array<string>;

    /**
     * Field name in the input data
     */
    model_to_evaluate?: string | EvaluationClassifyParameters.EvaluationModelRequest;
  }

  export namespace EvaluationClassifyParameters {
    export interface Judge {
      /**
       * Name of the judge model
       */
      model: string;

      /**
       * Source of the judge model.
       */
      model_source: 'serverless' | 'dedicated' | 'external';

      /**
       * System prompt template for the judge
       */
      system_template: string;

      /**
       * Bearer/API token for external judge models.
       */
      external_api_token?: string;

      /**
       * Base URL for external judge models. Must be OpenAI-compatible base URL.
       */
      external_base_url?: string;
    }

    export interface EvaluationModelRequest {
      /**
       * Input prompt template
       */
      input_template: string;

      /**
       * Maximum number of tokens to generate
       */
      max_tokens: number;

      /**
       * Name of the model to evaluate
       */
      model: string;

      /**
       * Source of the model.
       */
      model_source: 'serverless' | 'dedicated' | 'external';

      /**
       * System prompt template
       */
      system_template: string;

      /**
       * Sampling temperature
       */
      temperature: number;

      /**
       * Bearer/API token for external models.
       */
      external_api_token?: string;

      /**
       * Base URL for external models. Must be OpenAI-compatible base URL
       */
      external_base_url?: string;
    }
  }

  export interface EvaluationScoreParameters {
    /**
     * Data file ID
     */
    input_data_file_path: string;

    judge: EvaluationScoreParameters.Judge;

    /**
     * Maximum possible score
     */
    max_score: number;

    /**
     * Minimum possible score
     */
    min_score: number;

    /**
     * Score threshold for passing
     */
    pass_threshold: number;

    /**
     * Field name in the input data
     */
    model_to_evaluate?: string | EvaluationScoreParameters.EvaluationModelRequest;
  }

  export namespace EvaluationScoreParameters {
    export interface Judge {
      /**
       * Name of the judge model
       */
      model: string;

      /**
       * Source of the judge model.
       */
      model_source: 'serverless' | 'dedicated' | 'external';

      /**
       * System prompt template for the judge
       */
      system_template: string;

      /**
       * Bearer/API token for external judge models.
       */
      external_api_token?: string;

      /**
       * Base URL for external judge models. Must be OpenAI-compatible base URL.
       */
      external_base_url?: string;
    }

    export interface EvaluationModelRequest {
      /**
       * Input prompt template
       */
      input_template: string;

      /**
       * Maximum number of tokens to generate
       */
      max_tokens: number;

      /**
       * Name of the model to evaluate
       */
      model: string;

      /**
       * Source of the model.
       */
      model_source: 'serverless' | 'dedicated' | 'external';

      /**
       * System prompt template
       */
      system_template: string;

      /**
       * Sampling temperature
       */
      temperature: number;

      /**
       * Bearer/API token for external models.
       */
      external_api_token?: string;

      /**
       * Base URL for external models. Must be OpenAI-compatible base URL
       */
      external_base_url?: string;
    }
  }

  export interface EvaluationCompareParameters {
    /**
     * Data file name
     */
    input_data_file_path: string;

    judge: EvaluationCompareParameters.Judge;

    /**
     * Field name in the input data
     */
    model_a?: string | EvaluationCompareParameters.EvaluationModelRequest;

    /**
     * Field name in the input data
     */
    model_b?: string | EvaluationCompareParameters.EvaluationModelRequest;
  }

  export namespace EvaluationCompareParameters {
    export interface Judge {
      /**
       * Name of the judge model
       */
      model: string;

      /**
       * Source of the judge model.
       */
      model_source: 'serverless' | 'dedicated' | 'external';

      /**
       * System prompt template for the judge
       */
      system_template: string;

      /**
       * Bearer/API token for external judge models.
       */
      external_api_token?: string;

      /**
       * Base URL for external judge models. Must be OpenAI-compatible base URL.
       */
      external_base_url?: string;
    }

    export interface EvaluationModelRequest {
      /**
       * Input prompt template
       */
      input_template: string;

      /**
       * Maximum number of tokens to generate
       */
      max_tokens: number;

      /**
       * Name of the model to evaluate
       */
      model: string;

      /**
       * Source of the model.
       */
      model_source: 'serverless' | 'dedicated' | 'external';

      /**
       * System prompt template
       */
      system_template: string;

      /**
       * Sampling temperature
       */
      temperature: number;

      /**
       * Bearer/API token for external models.
       */
      external_api_token?: string;

      /**
       * Base URL for external models. Must be OpenAI-compatible base URL
       */
      external_base_url?: string;
    }

    export interface EvaluationModelRequest {
      /**
       * Input prompt template
       */
      input_template: string;

      /**
       * Maximum number of tokens to generate
       */
      max_tokens: number;

      /**
       * Name of the model to evaluate
       */
      model: string;

      /**
       * Source of the model.
       */
      model_source: 'serverless' | 'dedicated' | 'external';

      /**
       * System prompt template
       */
      system_template: string;

      /**
       * Sampling temperature
       */
      temperature: number;

      /**
       * Bearer/API token for external models.
       */
      external_api_token?: string;

      /**
       * Base URL for external models. Must be OpenAI-compatible base URL
       */
      external_base_url?: string;
    }
  }
}

export interface EvalListParams {
  limit?: number;

  status?: string;

  /**
   * Admin users can specify a user ID to filter jobs. Pass empty string to get all
   * jobs.
   */
  userId?: string;
}

export declare namespace Evals {
  export {
    type EvaluationJob as EvaluationJob,
    type EvalCreateResponse as EvalCreateResponse,
    type EvalListResponse as EvalListResponse,
    type EvalStatusResponse as EvalStatusResponse,
    type EvalCreateParams as EvalCreateParams,
    type EvalListParams as EvalListParams,
  };
}
