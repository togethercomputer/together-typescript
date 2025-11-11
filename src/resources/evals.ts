// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Evals extends APIResource {
  /**
   * Get evaluation job details
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<EvalRetrieveResponse> {
    return this._client.get(path`/evaluation/${id}`, options);
  }

  /**
   * Get all evaluation jobs. Deprecated! Please use /evaluation
   */
  list(
    query: EvalListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EvalListResponse> {
    return this._client.get('/evaluations', { query, ...options });
  }

  /**
   * Get model list
   */
  getAllowedModels(
    query: EvalGetAllowedModelsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EvalGetAllowedModelsResponse> {
    return this._client.get('/evaluations/model-list', { query, ...options });
  }

  /**
   * Get evaluation job status and results
   */
  getStatus(id: string, options?: RequestOptions): APIPromise<EvalGetStatusResponse> {
    return this._client.get(path`/evaluation/${id}/status`, options);
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

export interface EvalRetrieveResponse {
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
    | EvalRetrieveResponse.EvaluationClassifyResults
    | EvalRetrieveResponse.EvaluationScoreResults
    | EvalRetrieveResponse.EvaluationCompareResults
    | EvalRetrieveResponse.Error
    | null;

  /**
   * Current status of the job
   */
  status?: 'pending' | 'queued' | 'running' | 'completed' | 'error' | 'user_error';

  /**
   * History of status updates (admin only)
   */
  status_updates?: Array<EvalRetrieveResponse.StatusUpdate>;

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

export namespace EvalRetrieveResponse {
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

export type EvalListResponse = Array<EvalListResponse.EvalListResponseItem>;

export namespace EvalListResponse {
  export interface EvalListResponseItem {
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
      | EvalListResponseItem.EvaluationClassifyResults
      | EvalListResponseItem.EvaluationScoreResults
      | EvalListResponseItem.EvaluationCompareResults
      | EvalListResponseItem.Error
      | null;

    /**
     * Current status of the job
     */
    status?: 'pending' | 'queued' | 'running' | 'completed' | 'error' | 'user_error';

    /**
     * History of status updates (admin only)
     */
    status_updates?: Array<EvalListResponseItem.StatusUpdate>;

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

  export namespace EvalListResponseItem {
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
}

export interface EvalGetAllowedModelsResponse {
  model_list?: Array<string>;
}

export interface EvalGetStatusResponse {
  /**
   * The results of the evaluation job
   */
  results?:
    | EvalGetStatusResponse.EvaluationClassifyResults
    | EvalGetStatusResponse.EvaluationScoreResults
    | EvalGetStatusResponse.EvaluationCompareResults;

  /**
   * The status of the evaluation job
   */
  status?: 'completed' | 'error' | 'user_error' | 'running' | 'queued' | 'pending';
}

export namespace EvalGetStatusResponse {
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

export interface EvalListParams {
  limit?: number;

  status?: string;

  /**
   * Admin users can specify a user ID to filter jobs. Pass empty string to get all
   * jobs.
   */
  userId?: string;
}

export interface EvalGetAllowedModelsParams {
  model_source?: string;
}

export declare namespace Evals {
  export {
    type EvaluationJudgeModelConfig as EvaluationJudgeModelConfig,
    type EvaluationModelRequest as EvaluationModelRequest,
    type EvalRetrieveResponse as EvalRetrieveResponse,
    type EvalListResponse as EvalListResponse,
    type EvalGetAllowedModelsResponse as EvalGetAllowedModelsResponse,
    type EvalGetStatusResponse as EvalGetStatusResponse,
    type EvalListParams as EvalListParams,
    type EvalGetAllowedModelsParams as EvalGetAllowedModelsParams,
  };
}
