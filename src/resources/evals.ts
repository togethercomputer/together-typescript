// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class BaseEvals extends APIResource {
  static override readonly _key: readonly ['evals'] = Object.freeze(['evals'] as const);

  /**
   * @deprecated
   */
  create(body: EvalCreateParams, options?: RequestOptions): APIPromise<EvalCreateResponse> {
    return this._client.post('/v1/evaluation', { body, ...options });
  }

  /**
   * @deprecated
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<EvaluationJob> {
    return this._client.get(path`/v1/evaluation/${id}`, options);
  }

  /**
   * @deprecated
   */
  list(
    query: EvalListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EvalListResponse> {
    return this._client.get('/v1/evaluation', { query, ...options });
  }

  /**
   * @deprecated
   */
  status(id: string, options?: RequestOptions): APIPromise<EvalStatusResponse> {
    return this._client.get(path`/v1/evaluation/${id}/status`, options);
  }
}
export class Evals extends BaseEvals {}

/**
 * @deprecated
 */
export interface EvaluationJob {
  created_at?: string;

  owner_id?: string;

  parameters?: { [key: string]: unknown };

  results?:
    | EvaluationJob.EvaluationClassifyResults
    | EvaluationJob.EvaluationScoreResults
    | EvaluationJob.EvaluationCompareResults
    | EvaluationJob.Error
    | null;

  status?: 'pending' | 'queued' | 'running' | 'completed' | 'error' | 'user_error';

  status_updates?: Array<EvaluationJob.StatusUpdate>;

  type?: 'classify' | 'score' | 'compare';

  updated_at?: string;

  workflow_id?: string;
}

export namespace EvaluationJob {
  /**
   * @deprecated
   */
  export interface EvaluationClassifyResults {
    generation_fail_count?: number | null;

    invalid_label_count?: number | null;

    judge_fail_count?: number | null;

    label_counts?: string;

    pass_percentage?: number | null;

    result_file_id?: string;
  }

  /**
   * @deprecated
   */
  export interface EvaluationScoreResults {
    aggregated_scores?: EvaluationScoreResults.AggregatedScores;

    failed_samples?: number;

    generation_fail_count?: number | null;

    invalid_score_count?: number;

    judge_fail_count?: number | null;

    result_file_id?: string;
  }

  export namespace EvaluationScoreResults {
    export interface AggregatedScores {
      mean_score?: number;

      pass_percentage?: number;

      std_score?: number;
    }
  }

  /**
   * @deprecated
   */
  export interface EvaluationCompareResults {
    A_wins?: number;

    B_wins?: number;

    generation_fail_count?: number | null;

    judge_fail_count?: number | null;

    result_file_id?: string;

    Ties?: number;
  }

  export interface Error {
    error?: string;
  }

  /**
   * @deprecated
   */
  export interface StatusUpdate {
    message?: string;

    status?: string;

    timestamp?: string;
  }
}

/**
 * @deprecated
 */
export interface EvalCreateResponse {
  status?: 'pending';

  workflow_id?: string;
}

export type EvalListResponse = Array<EvaluationJob>;

export interface EvalStatusResponse {
  results?:
    | EvalStatusResponse.EvaluationClassifyResults
    | EvalStatusResponse.EvaluationScoreResults
    | EvalStatusResponse.EvaluationCompareResults;

  status?: 'completed' | 'error' | 'user_error' | 'running' | 'queued' | 'pending';
}

export namespace EvalStatusResponse {
  /**
   * @deprecated
   */
  export interface EvaluationClassifyResults {
    generation_fail_count?: number | null;

    invalid_label_count?: number | null;

    judge_fail_count?: number | null;

    label_counts?: string;

    pass_percentage?: number | null;

    result_file_id?: string;
  }

  /**
   * @deprecated
   */
  export interface EvaluationScoreResults {
    aggregated_scores?: EvaluationScoreResults.AggregatedScores;

    failed_samples?: number;

    generation_fail_count?: number | null;

    invalid_score_count?: number;

    judge_fail_count?: number | null;

    result_file_id?: string;
  }

  export namespace EvaluationScoreResults {
    export interface AggregatedScores {
      mean_score?: number;

      pass_percentage?: number;

      std_score?: number;
    }
  }

  /**
   * @deprecated
   */
  export interface EvaluationCompareResults {
    A_wins?: number;

    B_wins?: number;

    generation_fail_count?: number | null;

    judge_fail_count?: number | null;

    result_file_id?: string;

    Ties?: number;
  }
}

export interface EvalCreateParams {
  parameters:
    | EvalCreateParams.EvaluationClassifyParameters
    | EvalCreateParams.EvaluationScoreParameters
    | EvalCreateParams.EvaluationCompareParameters;

  type: 'classify' | 'score' | 'compare';
}

export namespace EvalCreateParams {
  /**
   * @deprecated
   */
  export interface EvaluationClassifyParameters {
    input_data_file_path: string;

    /**
     * @deprecated
     */
    judge: EvaluationClassifyParameters.Judge;

    labels: Array<string>;

    pass_labels: Array<string>;

    /**
     * @deprecated
     */
    model_to_evaluate?: string | EvaluationClassifyParameters.EvaluationModelRequest;
  }

  export namespace EvaluationClassifyParameters {
    /**
     * @deprecated
     */
    export interface Judge {
      model: string;

      model_source: 'serverless' | 'dedicated' | 'external';

      system_template: string;

      external_api_token?: string;

      external_base_url?: string;

      max_tokens?: number;

      num_workers?: number;

      temperature?: number;
    }

    /**
     * @deprecated
     */
    export interface EvaluationModelRequest {
      input_template: string;

      max_tokens: number;

      model: string;

      model_source: 'serverless' | 'dedicated' | 'external';

      system_template: string;

      temperature: number;

      external_api_token?: string;

      external_base_url?: string;

      num_workers?: number;
    }
  }

  /**
   * @deprecated
   */
  export interface EvaluationScoreParameters {
    input_data_file_path: string;

    /**
     * @deprecated
     */
    judge: EvaluationScoreParameters.Judge;

    max_score: number;

    min_score: number;

    pass_threshold: number;

    /**
     * @deprecated
     */
    model_to_evaluate?: string | EvaluationScoreParameters.EvaluationModelRequest;
  }

  export namespace EvaluationScoreParameters {
    /**
     * @deprecated
     */
    export interface Judge {
      model: string;

      model_source: 'serverless' | 'dedicated' | 'external';

      system_template: string;

      external_api_token?: string;

      external_base_url?: string;

      max_tokens?: number;

      num_workers?: number;

      temperature?: number;
    }

    /**
     * @deprecated
     */
    export interface EvaluationModelRequest {
      input_template: string;

      max_tokens: number;

      model: string;

      model_source: 'serverless' | 'dedicated' | 'external';

      system_template: string;

      temperature: number;

      external_api_token?: string;

      external_base_url?: string;

      num_workers?: number;
    }
  }

  /**
   * @deprecated
   */
  export interface EvaluationCompareParameters {
    input_data_file_path: string;

    /**
     * @deprecated
     */
    judge: EvaluationCompareParameters.Judge;

    disable_position_bias_correction?: boolean;

    model_a?: EvaluationCompareParameters.EvaluationModelRequest | string;

    model_b?: EvaluationCompareParameters.EvaluationModelRequest | string;
  }

  export namespace EvaluationCompareParameters {
    /**
     * @deprecated
     */
    export interface Judge {
      model: string;

      model_source: 'serverless' | 'dedicated' | 'external';

      system_template: string;

      external_api_token?: string;

      external_base_url?: string;

      max_tokens?: number;

      num_workers?: number;

      temperature?: number;
    }

    /**
     * @deprecated
     */
    export interface EvaluationModelRequest {
      input_template: string;

      max_tokens: number;

      model: string;

      model_source: 'serverless' | 'dedicated' | 'external';

      system_template: string;

      temperature: number;

      external_api_token?: string;

      external_base_url?: string;

      num_workers?: number;
    }

    /**
     * @deprecated
     */
    export interface EvaluationModelRequest {
      input_template: string;

      max_tokens: number;

      model: string;

      model_source: 'serverless' | 'dedicated' | 'external';

      system_template: string;

      temperature: number;

      external_api_token?: string;

      external_base_url?: string;

      num_workers?: number;
    }
  }
}

export interface EvalListParams {
  limit?: number;

  status?: string;
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
