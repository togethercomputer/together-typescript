// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Evaluations extends APIResource {
  /**
   * Get a list of evaluation jobs with optional filtering
   */
  list(
    query: EvaluationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EvaluationListResponse> {
    return this._client.get('/evaluations', { query, ...options });
  }

  /**
   * Get the list of models that are allowed for evaluation
   */
  getAllowedModels(options?: RequestOptions): APIPromise<EvaluationGetAllowedModelsResponse> {
    return this._client.get('/evaluations/model-list', options);
  }
}

export type EvaluationListResponse = Array<EvaluationListResponse.EvaluationListResponseItem>;

export namespace EvaluationListResponse {
  export interface EvaluationListResponseItem {
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
      | EvaluationListResponseItem.EvaluationClassifyResults
      | EvaluationListResponseItem.EvaluationScoreResults
      | EvaluationListResponseItem.EvaluationCompareResults
      | EvaluationListResponseItem.Error
      | null;

    /**
     * Current status of the job
     */
    status?: 'pending' | 'queued' | 'running' | 'completed' | 'error' | 'user_error';

    /**
     * History of status updates (admin only)
     */
    status_updates?: Array<EvaluationListResponseItem.StatusUpdate>;

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

  export namespace EvaluationListResponseItem {
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

export interface EvaluationGetAllowedModelsResponse {
  model_list?: Array<string>;
}

export interface EvaluationListParams {
  /**
   * Maximum number of results to return (max 100)
   */
  limit?: number;

  /**
   * Filter by job status
   */
  status?: 'pending' | 'queued' | 'running' | 'completed' | 'error' | 'user_error';
}

export declare namespace Evaluations {
  export {
    type EvaluationListResponse as EvaluationListResponse,
    type EvaluationGetAllowedModelsResponse as EvaluationGetAllowedModelsResponse,
    type EvaluationListParams as EvaluationListParams,
  };
}
