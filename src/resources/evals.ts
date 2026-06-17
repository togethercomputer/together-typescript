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
   *       model: 'Qwen/Qwen3.5-9B',
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
     * Number of samples where model A was judged the winner
     */
    A_wins?: number;

    /**
     * Number of samples where model B was judged the winner
     */
    B_wins?: number;

    /**
     * Number of generation failures across model A and model B.
     */
    generation_fail_count?: number | null;

    /**
     * Number of judge inference failures. In the default two-pass mode
     * (disable_position_bias_correction=false) this is the combined failure count from
     * both the original-order and flipped-order judge passes.
     */
    judge_fail_count?: number | null;

    /**
     * File ID of the detailed output file. Each row contains the original input fields
     * plus judge outputs. In two-pass mode the file includes both original-order and
     * flipped-order judge fields; in single-pass mode
     * (disable_position_bias_correction=true) only original-order fields are present.
     */
    result_file_id?: string;

    /**
     * Number of samples that resulted in a tie
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
     * Number of samples where model A was judged the winner
     */
    A_wins?: number;

    /**
     * Number of samples where model B was judged the winner
     */
    B_wins?: number;

    /**
     * Number of generation failures across model A and model B.
     */
    generation_fail_count?: number | null;

    /**
     * Number of judge inference failures. In the default two-pass mode
     * (disable_position_bias_correction=false) this is the combined failure count from
     * both the original-order and flipped-order judge passes.
     */
    judge_fail_count?: number | null;

    /**
     * File ID of the detailed output file. Each row contains the original input fields
     * plus judge outputs. In two-pass mode the file includes both original-order and
     * flipped-order judge fields; in single-pass mode
     * (disable_position_bias_correction=true) only original-order fields are present.
     */
    result_file_id?: string;

    /**
     * Number of samples that resulted in a tie
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
     * Column name in the input dataset containing pre-generated responses
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
       * Source of the judge model inference: - `serverless`: Together's shared
       * serverless inference API. Default concurrency: 25 workers. - `dedicated`: A
       * Together dedicated deployment endpoint. Default concurrency: 5 workers (minimum
       * enforced even if num_workers is set lower).
       *
       * - `external`: An external inference API (e.g. OpenAI, Anthropic, Google,
       *   OpenRouter). Requires `external_api_token` and `external_base_url`. Default
       *   concurrency: 2 workers for first-party APIs, 20 for proxy/aggregator
       *   endpoints.
       */
      model_source: 'serverless' | 'dedicated' | 'external';

      /**
       * System prompt template for the judge
       */
      system_template: string;

      /**
       * Bearer/API token for the external judge model provider. Required when
       * model_source is 'external'.
       */
      external_api_token?: string;

      /**
       * Base URL of the external inference API for the judge. Must be OpenAI-compatible.
       * Required when model_source is 'external'.
       */
      external_base_url?: string;

      /**
       * Maximum number of tokens the judge model may generate. Defaults to 32768 if
       * omitted. Set higher for reasoning judges (e.g. o-series, Gemini) that spend
       * tokens on internal chain-of-thought before emitting the verdict JSON.
       */
      max_tokens?: number;

      /**
       * Number of concurrent inference workers for the judge. Overrides the
       * source-specific default (serverless: 25, dedicated: 5, external: 2–20). For
       * dedicated endpoints the value is clamped to a minimum of 5 regardless of what is
       * set here.
       */
      num_workers?: number;

      /**
       * Sampling temperature for the judge model. Defaults to 0.05 if omitted.
       */
      temperature?: number;
    }

    export interface EvaluationModelRequest {
      /**
       * User message template. Supports Jinja2 variables referencing dataset columns.
       */
      input_template: string;

      /**
       * Maximum number of tokens to generate.
       */
      max_tokens: number;

      /**
       * Name of the model to evaluate
       */
      model: string;

      /**
       * Source of the model inference: - `serverless`: Together's shared serverless
       * inference API. Default concurrency: 25 workers. - `dedicated`: A Together
       * dedicated deployment endpoint. Default concurrency: 5 workers (minimum enforced
       * even if num_workers is set lower). Authentication uses the requesting user's
       * Together API token automatically.
       *
       * - `external`: An external inference API (e.g. OpenAI, Anthropic, Google,
       *   OpenRouter). Requires `external_api_token` and `external_base_url`. Default
       *   concurrency: 2 workers for first-party APIs (OpenAI, Anthropic, Google), 20
       *   for proxy/aggregator endpoints.
       */
      model_source: 'serverless' | 'dedicated' | 'external';

      /**
       * System prompt template. Supports Jinja2 variables referencing dataset columns.
       */
      system_template: string;

      /**
       * Sampling temperature for generation.
       */
      temperature: number;

      /**
       * Bearer/API token for the external model provider. Required when model_source is
       * 'external'.
       */
      external_api_token?: string;

      /**
       * Base URL of the external inference API. Must be OpenAI-compatible. Required when
       * model_source is 'external'.
       */
      external_base_url?: string;

      /**
       * Number of concurrent inference workers. Overrides the source-specific default
       * (serverless: 25, dedicated: 5, external: 2–20). For dedicated endpoints the
       * value is clamped to a minimum of 5 regardless of what is set here.
       */
      num_workers?: number;
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
     * Column name in the input dataset containing pre-generated responses
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
       * Source of the judge model inference: - `serverless`: Together's shared
       * serverless inference API. Default concurrency: 25 workers. - `dedicated`: A
       * Together dedicated deployment endpoint. Default concurrency: 5 workers (minimum
       * enforced even if num_workers is set lower).
       *
       * - `external`: An external inference API (e.g. OpenAI, Anthropic, Google,
       *   OpenRouter). Requires `external_api_token` and `external_base_url`. Default
       *   concurrency: 2 workers for first-party APIs, 20 for proxy/aggregator
       *   endpoints.
       */
      model_source: 'serverless' | 'dedicated' | 'external';

      /**
       * System prompt template for the judge
       */
      system_template: string;

      /**
       * Bearer/API token for the external judge model provider. Required when
       * model_source is 'external'.
       */
      external_api_token?: string;

      /**
       * Base URL of the external inference API for the judge. Must be OpenAI-compatible.
       * Required when model_source is 'external'.
       */
      external_base_url?: string;

      /**
       * Maximum number of tokens the judge model may generate. Defaults to 32768 if
       * omitted. Set higher for reasoning judges (e.g. o-series, Gemini) that spend
       * tokens on internal chain-of-thought before emitting the verdict JSON.
       */
      max_tokens?: number;

      /**
       * Number of concurrent inference workers for the judge. Overrides the
       * source-specific default (serverless: 25, dedicated: 5, external: 2–20). For
       * dedicated endpoints the value is clamped to a minimum of 5 regardless of what is
       * set here.
       */
      num_workers?: number;

      /**
       * Sampling temperature for the judge model. Defaults to 0.05 if omitted.
       */
      temperature?: number;
    }

    export interface EvaluationModelRequest {
      /**
       * User message template. Supports Jinja2 variables referencing dataset columns.
       */
      input_template: string;

      /**
       * Maximum number of tokens to generate.
       */
      max_tokens: number;

      /**
       * Name of the model to evaluate
       */
      model: string;

      /**
       * Source of the model inference: - `serverless`: Together's shared serverless
       * inference API. Default concurrency: 25 workers. - `dedicated`: A Together
       * dedicated deployment endpoint. Default concurrency: 5 workers (minimum enforced
       * even if num_workers is set lower). Authentication uses the requesting user's
       * Together API token automatically.
       *
       * - `external`: An external inference API (e.g. OpenAI, Anthropic, Google,
       *   OpenRouter). Requires `external_api_token` and `external_base_url`. Default
       *   concurrency: 2 workers for first-party APIs (OpenAI, Anthropic, Google), 20
       *   for proxy/aggregator endpoints.
       */
      model_source: 'serverless' | 'dedicated' | 'external';

      /**
       * System prompt template. Supports Jinja2 variables referencing dataset columns.
       */
      system_template: string;

      /**
       * Sampling temperature for generation.
       */
      temperature: number;

      /**
       * Bearer/API token for the external model provider. Required when model_source is
       * 'external'.
       */
      external_api_token?: string;

      /**
       * Base URL of the external inference API. Must be OpenAI-compatible. Required when
       * model_source is 'external'.
       */
      external_base_url?: string;

      /**
       * Number of concurrent inference workers. Overrides the source-specific default
       * (serverless: 25, dedicated: 5, external: 2–20). For dedicated endpoints the
       * value is clamped to a minimum of 5 regardless of what is set here.
       */
      num_workers?: number;
    }
  }

  export interface EvaluationCompareParameters {
    /**
     * Data file ID
     */
    input_data_file_path: string;

    judge: EvaluationCompareParameters.Judge;

    /**
     * When false (default), the judge runs twice per sample: once with model A's
     * response first (original order) and once with model B's response first (flipped
     * order). The two verdicts are reconciled to cancel out position bias. When true,
     * only the original-order pass is run, halving judge cost and latency at the
     * expense of position-bias correction. The result file will not contain
     * flipped-order judge fields when this is true.
     */
    disable_position_bias_correction?: boolean;

    /**
     * Either an EvaluationModelRequest for generation or a string column name from the
     * dataset (when responses are pre-generated). When both model_a and model_b are
     * EvaluationModelRequest objects, their inference runs execute in parallel to
     * reduce total wall-clock time.
     */
    model_a?: EvaluationCompareParameters.EvaluationModelRequest | string;

    /**
     * Either an EvaluationModelRequest for generation or a string column name from the
     * dataset (when responses are pre-generated). When both model_a and model_b are
     * EvaluationModelRequest objects, their inference runs execute in parallel to
     * reduce total wall-clock time.
     */
    model_b?: EvaluationCompareParameters.EvaluationModelRequest | string;
  }

  export namespace EvaluationCompareParameters {
    export interface Judge {
      /**
       * Name of the judge model
       */
      model: string;

      /**
       * Source of the judge model inference: - `serverless`: Together's shared
       * serverless inference API. Default concurrency: 25 workers. - `dedicated`: A
       * Together dedicated deployment endpoint. Default concurrency: 5 workers (minimum
       * enforced even if num_workers is set lower).
       *
       * - `external`: An external inference API (e.g. OpenAI, Anthropic, Google,
       *   OpenRouter). Requires `external_api_token` and `external_base_url`. Default
       *   concurrency: 2 workers for first-party APIs, 20 for proxy/aggregator
       *   endpoints.
       */
      model_source: 'serverless' | 'dedicated' | 'external';

      /**
       * System prompt template for the judge
       */
      system_template: string;

      /**
       * Bearer/API token for the external judge model provider. Required when
       * model_source is 'external'.
       */
      external_api_token?: string;

      /**
       * Base URL of the external inference API for the judge. Must be OpenAI-compatible.
       * Required when model_source is 'external'.
       */
      external_base_url?: string;

      /**
       * Maximum number of tokens the judge model may generate. Defaults to 32768 if
       * omitted. Set higher for reasoning judges (e.g. o-series, Gemini) that spend
       * tokens on internal chain-of-thought before emitting the verdict JSON.
       */
      max_tokens?: number;

      /**
       * Number of concurrent inference workers for the judge. Overrides the
       * source-specific default (serverless: 25, dedicated: 5, external: 2–20). For
       * dedicated endpoints the value is clamped to a minimum of 5 regardless of what is
       * set here.
       */
      num_workers?: number;

      /**
       * Sampling temperature for the judge model. Defaults to 0.05 if omitted.
       */
      temperature?: number;
    }

    export interface EvaluationModelRequest {
      /**
       * User message template. Supports Jinja2 variables referencing dataset columns.
       */
      input_template: string;

      /**
       * Maximum number of tokens to generate.
       */
      max_tokens: number;

      /**
       * Name of the model to evaluate
       */
      model: string;

      /**
       * Source of the model inference: - `serverless`: Together's shared serverless
       * inference API. Default concurrency: 25 workers. - `dedicated`: A Together
       * dedicated deployment endpoint. Default concurrency: 5 workers (minimum enforced
       * even if num_workers is set lower). Authentication uses the requesting user's
       * Together API token automatically.
       *
       * - `external`: An external inference API (e.g. OpenAI, Anthropic, Google,
       *   OpenRouter). Requires `external_api_token` and `external_base_url`. Default
       *   concurrency: 2 workers for first-party APIs (OpenAI, Anthropic, Google), 20
       *   for proxy/aggregator endpoints.
       */
      model_source: 'serverless' | 'dedicated' | 'external';

      /**
       * System prompt template. Supports Jinja2 variables referencing dataset columns.
       */
      system_template: string;

      /**
       * Sampling temperature for generation.
       */
      temperature: number;

      /**
       * Bearer/API token for the external model provider. Required when model_source is
       * 'external'.
       */
      external_api_token?: string;

      /**
       * Base URL of the external inference API. Must be OpenAI-compatible. Required when
       * model_source is 'external'.
       */
      external_base_url?: string;

      /**
       * Number of concurrent inference workers. Overrides the source-specific default
       * (serverless: 25, dedicated: 5, external: 2–20). For dedicated endpoints the
       * value is clamped to a minimum of 5 regardless of what is set here.
       */
      num_workers?: number;
    }

    export interface EvaluationModelRequest {
      /**
       * User message template. Supports Jinja2 variables referencing dataset columns.
       */
      input_template: string;

      /**
       * Maximum number of tokens to generate.
       */
      max_tokens: number;

      /**
       * Name of the model to evaluate
       */
      model: string;

      /**
       * Source of the model inference: - `serverless`: Together's shared serverless
       * inference API. Default concurrency: 25 workers. - `dedicated`: A Together
       * dedicated deployment endpoint. Default concurrency: 5 workers (minimum enforced
       * even if num_workers is set lower). Authentication uses the requesting user's
       * Together API token automatically.
       *
       * - `external`: An external inference API (e.g. OpenAI, Anthropic, Google,
       *   OpenRouter). Requires `external_api_token` and `external_base_url`. Default
       *   concurrency: 2 workers for first-party APIs (OpenAI, Anthropic, Google), 20
       *   for proxy/aggregator endpoints.
       */
      model_source: 'serverless' | 'dedicated' | 'external';

      /**
       * System prompt template. Supports Jinja2 variables referencing dataset columns.
       */
      system_template: string;

      /**
       * Sampling temperature for generation.
       */
      temperature: number;

      /**
       * Bearer/API token for the external model provider. Required when model_source is
       * 'external'.
       */
      external_api_token?: string;

      /**
       * Base URL of the external inference API. Must be OpenAI-compatible. Required when
       * model_source is 'external'.
       */
      external_base_url?: string;

      /**
       * Number of concurrent inference workers. Overrides the source-specific default
       * (serverless: 25, dedicated: 5, external: 2–20). For dedicated endpoints the
       * value is clamped to a minimum of 5 regardless of what is set here.
       */
      num_workers?: number;
    }
  }
}

export interface EvalListParams {
  /**
   * Limit the number of results
   */
  limit?: number;

  /**
   * Filter evaluation jobs by status
   */
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
