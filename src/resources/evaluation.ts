// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EvaluationAPI from './evaluation';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Evaluation extends APIResource {
  /**
   * Creates a new evaluation job for classify, score, or compare tasks
   *
   * @example
   * ```ts
   * const evaluation = await client.evaluation.create({
   *   parameters: {
   *     judge: {
   *       model_name: 'meta-llama/Llama-3-70B-Instruct-Turbo',
   *       system_template:
   *         'You are a helpful assistant that classifies text.',
   *     },
   *     labels: ['Toxic', 'Non-Toxic'],
   *     pass_labels: ['Non-Toxic'],
   *     model_to_evaluate: 'output_column',
   *     input_data_file_path: 'file-abcd-1234',
   *   },
   *   type: 'classify',
   * });
   * ```
   */
  create(body: EvaluationCreateParams, options?: RequestOptions): APIPromise<EvaluationCreateResponse> {
    return this._client.post('/evaluation', { body, ...options });
  }

  /**
   * Get details of a specific evaluation job
   *
   * @example
   * ```ts
   * const evaluation = await client.evaluation.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<EvaluationRetrieveResponse> {
    return this._client.get(path`/evaluation/${id}`, options);
  }

  /**
   * Get the status and results of a specific evaluation job
   *
   * @example
   * ```ts
   * const response = await client.evaluation.getStatus('id');
   * ```
   */
  getStatus(id: string, options?: RequestOptions): APIPromise<EvaluationGetStatusResponse> {
    return this._client.get(path`/evaluation/${id}/status`, options);
  }

  /**
   * Internal callback endpoint for workflows to update job status and results
   *
   * @example
   * ```ts
   * const response = await client.evaluation.updateStatus(
   *   'id',
   *   { status: 'completed' },
   * );
   * ```
   */
  updateStatus(
    id: string,
    body: EvaluationUpdateStatusParams,
    options?: RequestOptions,
  ): APIPromise<EvaluationUpdateStatusResponse> {
    return this._client.post(path`/evaluation/${id}/update`, { body, ...options });
  }
}

export interface EvaluationJudgeModelConfig {
  /**
   * Name of the judge model
   */
  model_name: string;

  /**
   * System prompt template for the judge
   */
  system_template: string;
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
  model_name: string;

  /**
   * System prompt template
   */
  system_template: string;

  /**
   * Sampling temperature
   */
  temperature: number;
}

export interface EvaluationCreateResponse {
  /**
   * Initial status of the job
   */
  status?: 'pending';

  /**
   * The ID of the created evaluation job
   */
  workflow_id?: string;
}

export interface EvaluationRetrieveResponse {
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
    | EvaluationRetrieveResponse.EvaluationClassifyResults
    | EvaluationRetrieveResponse.EvaluationScoreResults
    | EvaluationRetrieveResponse.EvaluationCompareResults
    | EvaluationRetrieveResponse.Error
    | null;

  /**
   * Current status of the job
   */
  status?: 'pending' | 'queued' | 'running' | 'completed' | 'error' | 'user_error';

  /**
   * History of status updates (admin only)
   */
  status_updates?: Array<EvaluationRetrieveResponse.StatusUpdate>;

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

export namespace EvaluationRetrieveResponse {
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

export interface EvaluationGetStatusResponse {
  results?:
    | EvaluationGetStatusResponse.EvaluationClassifyResults
    | EvaluationGetStatusResponse.EvaluationScoreResults
    | EvaluationGetStatusResponse.EvaluationCompareResults
    | EvaluationGetStatusResponse.Error
    | null;

  status?: 'pending' | 'queued' | 'running' | 'completed' | 'error' | 'user_error';
}

export namespace EvaluationGetStatusResponse {
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
}

export interface EvaluationUpdateStatusResponse {
  status?: string;

  workflow_id?: string;
}

export interface EvaluationCreateParams {
  /**
   * Type-specific parameters for the evaluation
   */
  parameters:
    | EvaluationCreateParams.EvaluationClassifyParameters
    | EvaluationCreateParams.EvaluationScoreParameters
    | EvaluationCreateParams.EvaluationCompareParameters;

  /**
   * The type of evaluation to perform
   */
  type: 'classify' | 'score' | 'compare';
}

export namespace EvaluationCreateParams {
  export interface EvaluationClassifyParameters {
    /**
     * Data file ID
     */
    input_data_file_path: string;

    judge: EvaluationAPI.EvaluationJudgeModelConfig;

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
    model_to_evaluate?: string | EvaluationAPI.EvaluationModelRequest;
  }

  export interface EvaluationScoreParameters {
    /**
     * Data file ID
     */
    input_data_file_path: string;

    judge: EvaluationAPI.EvaluationJudgeModelConfig;

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
    model_to_evaluate?: string | EvaluationAPI.EvaluationModelRequest;
  }

  export interface EvaluationCompareParameters {
    /**
     * Data file name
     */
    input_data_file_path: string;

    judge: EvaluationAPI.EvaluationJudgeModelConfig;

    /**
     * Field name in the input data
     */
    model_a?: string | EvaluationAPI.EvaluationModelRequest;

    /**
     * Field name in the input data
     */
    model_b?: string | EvaluationAPI.EvaluationModelRequest;
  }
}

export interface EvaluationUpdateStatusParams {
  /**
   * The new status for the job
   */
  status: 'completed' | 'error' | 'running' | 'queued' | 'user_error' | 'inference_error';

  /**
   * Error message
   */
  error?: string;

  results?:
    | EvaluationUpdateStatusParams.EvaluationClassifyResults
    | EvaluationUpdateStatusParams.EvaluationScoreResults
    | EvaluationUpdateStatusParams.EvaluationCompareResults;
}

export namespace EvaluationUpdateStatusParams {
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

export declare namespace Evaluation {
  export {
    type EvaluationJudgeModelConfig as EvaluationJudgeModelConfig,
    type EvaluationModelRequest as EvaluationModelRequest,
    type EvaluationCreateResponse as EvaluationCreateResponse,
    type EvaluationRetrieveResponse as EvaluationRetrieveResponse,
    type EvaluationGetStatusResponse as EvaluationGetStatusResponse,
    type EvaluationUpdateStatusResponse as EvaluationUpdateStatusResponse,
    type EvaluationCreateParams as EvaluationCreateParams,
    type EvaluationUpdateStatusParams as EvaluationUpdateStatusParams,
  };
}
