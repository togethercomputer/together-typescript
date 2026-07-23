// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Rollouts extends APIResource {
  /**
   * Creates a rollout in the pending state without shifting traffic. Start the
   * rollout in a separate request after reviewing its strategy and metric gates.
   *
   * @example
   * ```ts
   * const rollout = await client.beta.endpoints.rollouts.create(
   *   'endpointId',
   *   {
   *     projectId: 'projectId',
   *     sourceDeploymentId: 'sourceDeploymentId',
   *     targetDeploymentId: 'targetDeploymentId',
   *   },
   * );
   * ```
   */
  create(endpointID: string, params: RolloutCreateParams, options?: RequestOptions): APIPromise<Rollout> {
    const { projectId = this._client.projectID, ...body } = params;
    return this._client.post(path`/projects/${projectId}/endpoints/${endpointID}/rollouts`, {
      body,
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Retrieves a rollout's strategy, lifecycle state, current traffic percentage,
   * step history, and metric-gate results.
   *
   * @example
   * ```ts
   * const rollout =
   *   await client.beta.endpoints.rollouts.retrieve('id', {
   *     projectId: 'projectId',
   *     endpointId: 'endpointId',
   *   });
   * ```
   */
  retrieve(id: string, params: RolloutRetrieveParams, options?: RequestOptions): APIPromise<Rollout> {
    const { projectId = this._client.projectID, endpointId } = params;
    return this._client.get(path`/projects/${projectId}/endpoints/${endpointId}/rollouts/${id}`, {
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Lists rollout histories for an endpoint. Use `filter=ROLLOUT_FILTER_ACTIVE` to
   * return only the active rollout, if one exists.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const rollout of client.beta.endpoints.rollouts.list(
   *   'endpointId',
   *   { projectId: 'projectId' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    endpointID: string,
    params: RolloutListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<RolloutsCursorPagination, Rollout> {
    const { projectId = this._client.projectID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/projects/${projectId}/endpoints/${endpointID}/rollouts`,
      CursorPagination<Rollout>,
      { query, defaultBaseURL: 'https://api.together.ai/v2', ...options },
    );
  }

  /**
   * Deletes a rollout record. An active rollout must be aborted or completed before
   * it can be deleted.
   *
   * @example
   * ```ts
   * const rollout = await client.beta.endpoints.rollouts.delete(
   *   'id',
   *   { projectId: 'projectId', endpointId: 'endpointId' },
   * );
   * ```
   */
  delete(
    id: string,
    params: RolloutDeleteParams,
    options?: RequestOptions,
  ): APIPromise<RolloutDeleteResponse> {
    const { projectId = this._client.projectID, endpointId, etag } = params;
    return this._client.delete(path`/projects/${projectId}/endpoints/${endpointId}/rollouts/${id}`, {
      query: { etag },
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Aborts a running or paused rollout, routes traffic back to the source
   * deployment, and records the required reason in the audit trail.
   *
   * @example
   * ```ts
   * const rollout = await client.beta.endpoints.rollouts.abort(
   *   'id',
   *   {
   *     projectId: 'projectId',
   *     endpointId: 'endpointId',
   *     reason: 'reason',
   *   },
   * );
   * ```
   */
  abort(id: string, params: RolloutAbortParams, options?: RequestOptions): APIPromise<Rollout> {
    const { projectId = this._client.projectID, endpointId, ...body } = params;
    return this._client.post(path`/projects/${projectId}/endpoints/${endpointId}/rollouts/${id}/abort`, {
      body,
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Cancels a running, paused, system-paused, or stabilizing rollout by freezing the
   * current traffic split, or by reverting all traffic to the source deployment when
   * requested. The response is the accepted rollout snapshot; poll GetRollout until
   * it reaches CANCELED for freeze or ABORTED for revert.
   *
   * @example
   * ```ts
   * const rollout = await client.beta.endpoints.rollouts.cancel(
   *   'id',
   *   {
   *     projectId: 'projectId',
   *     endpointId: 'endpointId',
   *     reason: 'reason',
   *   },
   * );
   * ```
   */
  cancel(id: string, params: RolloutCancelParams, options?: RequestOptions): APIPromise<Rollout> {
    const { projectId = this._client.projectID, endpointId, ...body } = params;
    return this._client.post(path`/projects/${projectId}/endpoints/${endpointId}/rollouts/${id}/cancel`, {
      body,
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Pauses a running rollout at its current traffic split and records an optional
   * reason.
   *
   * @example
   * ```ts
   * const rollout = await client.beta.endpoints.rollouts.pause(
   *   'id',
   *   { projectId: 'projectId', endpointId: 'endpointId' },
   * );
   * ```
   */
  pause(id: string, params: RolloutPauseParams, options?: RequestOptions): APIPromise<Rollout> {
    const { projectId = this._client.projectID, endpointId, ...body } = params;
    return this._client.post(path`/projects/${projectId}/endpoints/${endpointId}/rollouts/${id}/pause`, {
      body,
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Completes a running or paused rollout immediately by sending all live traffic to
   * the target deployment.
   *
   * @example
   * ```ts
   * const rollout =
   *   await client.beta.endpoints.rollouts.promote('id', {
   *     projectId: 'projectId',
   *     endpointId: 'endpointId',
   *   });
   * ```
   */
  promote(id: string, params: RolloutPromoteParams, options?: RequestOptions): APIPromise<Rollout> {
    const { projectId = this._client.projectID, endpointId, ...body } = params;
    return this._client.post(path`/projects/${projectId}/endpoints/${endpointId}/rollouts/${id}/promote`, {
      body,
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Resumes a paused rollout from its current step and traffic split.
   *
   * @example
   * ```ts
   * const rollout = await client.beta.endpoints.rollouts.resume(
   *   'id',
   *   { projectId: 'projectId', endpointId: 'endpointId' },
   * );
   * ```
   */
  resume(id: string, params: RolloutResumeParams, options?: RequestOptions): APIPromise<Rollout> {
    const { projectId = this._client.projectID, endpointId, ...body } = params;
    return this._client.post(path`/projects/${projectId}/endpoints/${endpointId}/rollouts/${id}/resume`, {
      body,
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Starts a pending rollout and begins its configured traffic-shifting workflow.
   *
   * @example
   * ```ts
   * const rollout = await client.beta.endpoints.rollouts.start(
   *   'id',
   *   { projectId: 'projectId', endpointId: 'endpointId' },
   * );
   * ```
   */
  start(id: string, params: RolloutStartParams, options?: RequestOptions): APIPromise<Rollout> {
    const { projectId = this._client.projectID, endpointId } = params;
    return this._client.post(path`/projects/${projectId}/endpoints/${endpointId}/rollouts/${id}/start`, {
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }
}

export type RolloutsCursorPagination = CursorPagination<Rollout>;

/**
 * Public view of a rollout resource and its embedded runtime status.
 */
export interface Rollout {
  /**
   * Output only. Unique rollout identifier.
   */
  id: string;

  /**
   * Output only. Timestamp when the rollout was created.
   */
  createdAt: string;

  /**
   * Output only. Endpoint this rollout belongs to.
   */
  endpointId: string;

  /**
   * Output only. Deployment that traffic is shifting away from.
   */
  sourceDeploymentId: string;

  /**
   * Output only. High-level rollout lifecycle state.
   */
  state:
    | 'ROLLOUT_STATE_RUNNING'
    | 'ROLLOUT_STATE_PAUSED'
    | 'ROLLOUT_STATE_STABILIZING'
    | 'ROLLOUT_STATE_ABORTING'
    | 'ROLLOUT_STATE_COMPLETED'
    | 'ROLLOUT_STATE_ABORTED'
    | 'ROLLOUT_STATE_PENDING'
    | 'ROLLOUT_STATE_SYSTEM_PAUSED'
    | 'ROLLOUT_STATE_CANCELLING'
    | 'ROLLOUT_STATE_CANCELED';

  /**
   * Derived runtime progress for a rollout.
   */
  status: Rollout.Status;

  /**
   * Output only. Rollout strategy selected at creation.
   */
  strategy:
    | 'ROLLOUT_STRATEGY_TYPE_ROLLING'
    | 'ROLLOUT_STRATEGY_TYPE_CANARY'
    | 'ROLLOUT_STRATEGY_TYPE_BLUE_GREEN';

  /**
   * Output only. Deployment that traffic is shifting toward.
   */
  targetDeploymentId: string;

  /**
   * Output only. Timestamp when the rollout reached a terminal state.
   */
  completedAt?: string;

  /**
   * Output only. Zero-based index of the current step. Unset while PENDING; step 0
   * is reported explicitly after start.
   */
  currentStep?: number;

  /**
   * Output only. Applied percentage of traffic on the target deployment.
   */
  currentTrafficPercent?: number;

  /**
   * Output only. Opaque version tag for optimistic concurrency control.
   */
  etag?: string;

  /**
   * Pause metadata returned while a rollout is paused.
   */
  pauseInfo?: Rollout.PauseInfo;

  /**
   * Output only. Timestamp when the rollout started running.
   */
  startedAt?: string;
}

export namespace Rollout {
  /**
   * Derived runtime progress for a rollout.
   */
  export interface Status {
    /**
     * Per-step rollout execution summaries.
     */
    steps: Array<Status.Step>;

    /**
     * Total number of steps in the rollout progression. Always serializes when status
     * is present.
     */
    totalSteps: number;

    /**
     * Structured reason a rollout stopped progressing.
     */
    condition?: Status.Condition;

    /**
     * Timestamp of the most recent progress update.
     */
    updatedAt?: string;
  }

  export namespace Status {
    /**
     * Collapsed execution state for one rollout step.
     */
    export interface Step {
      /**
       * Timestamp when this step completed.
       */
      completedAt?: string;

      /**
       * Failure reason when this step failed.
       */
      failureReason?: string;

      /**
       * Metric gate results for this step.
       */
      metrics?: Array<Step.Metric>;

      /**
       * Timestamp when this step started.
       */
      startedAt?: string;

      /**
       * Execution state of this rollout step.
       */
      state?:
        | 'ROLLOUT_STEP_STATE_PENDING'
        | 'ROLLOUT_STEP_STATE_RUNNING'
        | 'ROLLOUT_STEP_STATE_PASSED'
        | 'ROLLOUT_STEP_STATE_FAILED';

      /**
       * Index of this step in the rollout progression. Step 0 serializes explicitly.
       */
      stepIndex?: number;

      /**
       * Target traffic percentage configured for this step. Always serializes for
       * recorded steps.
       */
      targetTrafficPercent?: number;
    }

    export namespace Step {
      /**
       * Observed metric value enriched with its rollout rule and verdict.
       */
      export interface Metric {
        /**
         * Evaluation form used by the metric rule.
         */
        check?: 'METRIC_CHECK_TYPE_THRESHOLD' | 'METRIC_CHECK_TYPE_REGRESSION';

        /**
         * Direction that indicates whether higher or lower values are worse.
         */
        direction?: 'REGRESSION_DIRECTION_HIGHER_IS_WORSE' | 'REGRESSION_DIRECTION_LOWER_IS_WORSE';

        /**
         * Regression percentage limit used when check is METRIC_CHECK_TYPE_REGRESSION.
         */
        maxRegressionPercent?: number;

        /**
         * Metric name as exported to the observability backend.
         */
        name?: string;

        /**
         * Threshold comparison operator.
         */
        operator?:
          | 'THRESHOLD_OPERATOR_GT'
          | 'THRESHOLD_OPERATOR_GTE'
          | 'THRESHOLD_OPERATOR_LT'
          | 'THRESHOLD_OPERATOR_LTE';

        /**
         * Percentile value, such as 99. Set only when stat is METRIC_STAT_TYPE_PERCENTILE.
         */
        percentile?: number;

        /**
         * Observed source baseline. Set only for regression checks; a 0 reading serializes
         * explicitly.
         */
        sourceValue?: number;

        /**
         * Aggregation used for the metric.
         */
        stat?:
          | 'METRIC_STAT_TYPE_AVG'
          | 'METRIC_STAT_TYPE_MIN'
          | 'METRIC_STAT_TYPE_MAX'
          | 'METRIC_STAT_TYPE_PERCENTILE';

        /**
         * Observed target value. A 0 reading serializes explicitly.
         */
        targetValue?: number;

        /**
         * Threshold criteria used when check is METRIC_CHECK_TYPE_THRESHOLD.
         */
        threshold?: number;

        /**
         * Result of evaluating this metric at the gate.
         */
        verdict?: 'METRIC_VERDICT_PASS' | 'METRIC_VERDICT_BREACHED' | 'METRIC_VERDICT_UNAVAILABLE';
      }
    }

    /**
     * Structured reason a rollout stopped progressing.
     */
    export interface Condition {
      /**
       * Step index where the condition arose. Step 0 serializes explicitly.
       */
      atStep?: number;

      /**
       * Category that classifies why the rollout stopped.
       */
      category?:
        | 'ROLLOUT_FAILURE_CATEGORY_METRIC_REGRESSION'
        | 'ROLLOUT_FAILURE_CATEGORY_METRICS_UNAVAILABLE'
        | 'ROLLOUT_FAILURE_CATEGORY_TARGET_NOT_READY'
        | 'ROLLOUT_FAILURE_CATEGORY_SOURCE_NOT_DRAINED'
        | 'ROLLOUT_FAILURE_CATEGORY_HEALTH_REGRESSION'
        | 'ROLLOUT_FAILURE_CATEGORY_CAPACITY_EXHAUSTED'
        | 'ROLLOUT_FAILURE_CATEGORY_ROUTING_ERROR'
        | 'ROLLOUT_FAILURE_CATEGORY_DEPENDENCY_OUTAGE'
        | 'ROLLOUT_FAILURE_CATEGORY_ABORTED_BY_OPERATOR'
        | 'ROLLOUT_FAILURE_CATEGORY_INTERNAL'
        | 'ROLLOUT_FAILURE_CATEGORY_POLICY_INFEASIBLE'
        | 'ROLLOUT_FAILURE_CATEGORY_UNDER_SERVED'
        | 'ROLLOUT_FAILURE_CATEGORY_ENTITLEMENT_LAPSED';

      /**
       * Human-readable explanation for the condition.
       */
      message?: string;

      /**
       * Metrics observed at the failing gate, enriched with their criteria.
       */
      metrics?: Array<Condition.Metric>;

      /**
       * Timestamp when the condition was observed.
       */
      observedAt?: string;
    }

    export namespace Condition {
      /**
       * Observed metric value enriched with its rollout rule and verdict.
       */
      export interface Metric {
        /**
         * Evaluation form used by the metric rule.
         */
        check?: 'METRIC_CHECK_TYPE_THRESHOLD' | 'METRIC_CHECK_TYPE_REGRESSION';

        /**
         * Direction that indicates whether higher or lower values are worse.
         */
        direction?: 'REGRESSION_DIRECTION_HIGHER_IS_WORSE' | 'REGRESSION_DIRECTION_LOWER_IS_WORSE';

        /**
         * Regression percentage limit used when check is METRIC_CHECK_TYPE_REGRESSION.
         */
        maxRegressionPercent?: number;

        /**
         * Metric name as exported to the observability backend.
         */
        name?: string;

        /**
         * Threshold comparison operator.
         */
        operator?:
          | 'THRESHOLD_OPERATOR_GT'
          | 'THRESHOLD_OPERATOR_GTE'
          | 'THRESHOLD_OPERATOR_LT'
          | 'THRESHOLD_OPERATOR_LTE';

        /**
         * Percentile value, such as 99. Set only when stat is METRIC_STAT_TYPE_PERCENTILE.
         */
        percentile?: number;

        /**
         * Observed source baseline. Set only for regression checks; a 0 reading serializes
         * explicitly.
         */
        sourceValue?: number;

        /**
         * Aggregation used for the metric.
         */
        stat?:
          | 'METRIC_STAT_TYPE_AVG'
          | 'METRIC_STAT_TYPE_MIN'
          | 'METRIC_STAT_TYPE_MAX'
          | 'METRIC_STAT_TYPE_PERCENTILE';

        /**
         * Observed target value. A 0 reading serializes explicitly.
         */
        targetValue?: number;

        /**
         * Threshold criteria used when check is METRIC_CHECK_TYPE_THRESHOLD.
         */
        threshold?: number;

        /**
         * Result of evaluating this metric at the gate.
         */
        verdict?: 'METRIC_VERDICT_PASS' | 'METRIC_VERDICT_BREACHED' | 'METRIC_VERDICT_UNAVAILABLE';
      }
    }
  }

  /**
   * Pause metadata returned while a rollout is paused.
   */
  export interface PauseInfo {
    /**
     * Timestamp when the rollout was paused.
     */
    pausedAt: string;

    /**
     * Human-readable reason recorded when the rollout was paused.
     */
    reason?: string;
  }
}

/**
 * Empty response returned after a successful delete operation.
 */
export interface RolloutDeleteResponse {}

export interface RolloutCreateParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Body param: Deployment that traffic shifts away from.
   */
  sourceDeploymentId: string;

  /**
   * Body param: Deployment that traffic shifts toward.
   */
  targetDeploymentId: string;

  /**
   * Body param: Blue-green strategy configuration for a single cutover to the target
   * deployment.
   */
  blueGreen?: RolloutCreateParams.BlueGreen;

  /**
   * Body param: Canary strategy configuration for gradual traffic progression.
   */
  canary?: RolloutCreateParams.Canary;

  /**
   * Body param: Optional final replica count for the source deployment after
   * completion.
   */
  finalSourceReplicas?: number;

  /**
   * Body param: Optional final replica count for the target deployment after
   * completion.
   */
  finalTargetReplicas?: number;

  /**
   * Body param: Optional metric gates evaluated after each step's soak.
   */
  metrics?: Array<RolloutCreateParams.Metric>;

  /**
   * Body param: Rolling strategy configuration for capacity-preserving batches that
   * ramp target replicas up while draining source replicas.
   */
  rolling?: RolloutCreateParams.Rolling;

  /**
   * Body param: Optional policy for the source deployment after completion.
   */
  sourceCleanup?: 'SOURCE_CLEANUP_POLICY_DRAIN' | 'SOURCE_CLEANUP_POLICY_KEEP';

  /**
   * Body param: Optional per-step soak duration before the metric gate runs.
   */
  stabilizationWindow?: string;
}

export namespace RolloutCreateParams {
  /**
   * Blue-green strategy configuration for a single cutover to the target deployment.
   */
  export interface BlueGreen {}

  /**
   * Canary strategy configuration for gradual traffic progression.
   */
  export interface Canary {
    /**
     * Required progression steps. The final step must send 100 percent traffic to the
     * target.
     */
    steps: Array<Canary.Step>;

    /**
     * Optional interval between steps. Defaults to 10m if omitted.
     */
    stepInterval?: string;
  }

  export namespace Canary {
    /**
     * One stage of a canary rollout progression.
     */
    export interface Step {
      /**
       * Required percentage of traffic on the target deployment for this step.
       */
      traffic: number;

      /**
       * Optional explicit target replica count for this step.
       */
      replicas?: number;
    }
  }

  /**
   * Metric gate evaluated during a rollout.
   */
  export interface Metric {
    /**
     * Required metric name as exported to the observability backend.
     */
    name: string;

    /**
     * Required aggregation used for the metric.
     */
    stat:
      | 'METRIC_STAT_TYPE_AVG'
      | 'METRIC_STAT_TYPE_MIN'
      | 'METRIC_STAT_TYPE_MAX'
      | 'METRIC_STAT_TYPE_PERCENTILE';

    /**
     * Percentile value, such as 99. Set only when stat is METRIC_STAT_TYPE_PERCENTILE.
     */
    percentile?: number;

    /**
     * Regression criteria that fail when the target regresses against the source
     * beyond a limit.
     */
    regressionCheck?: Metric.RegressionCheck;

    /**
     * Threshold criteria that fail when the target metric violates the configured
     * bound.
     */
    thresholdCheck?: Metric.ThresholdCheck;

    /**
     * Optional query window for the metric. Defaults to the step soak duration.
     */
    window?: string;
  }

  export namespace Metric {
    /**
     * Regression criteria that fail when the target regresses against the source
     * beyond a limit.
     */
    export interface RegressionCheck {
      /**
       * Required direction that indicates whether higher or lower metric values are
       * worse.
       */
      direction: 'REGRESSION_DIRECTION_HIGHER_IS_WORSE' | 'REGRESSION_DIRECTION_LOWER_IS_WORSE';

      /**
       * Required maximum allowed regression percentage.
       */
      maxRegressionPercent: number;
    }

    /**
     * Threshold criteria that fail when the target metric violates the configured
     * bound.
     */
    export interface ThresholdCheck {
      /**
       * Required comparison operator applied to the target metric value.
       */
      operator:
        | 'THRESHOLD_OPERATOR_GT'
        | 'THRESHOLD_OPERATOR_GTE'
        | 'THRESHOLD_OPERATOR_LT'
        | 'THRESHOLD_OPERATOR_LTE';

      /**
       * Required numeric threshold value.
       */
      value: number;
    }
  }

  /**
   * Rolling strategy configuration for capacity-preserving batches that ramp target
   * replicas up while draining source replicas.
   */
  export interface Rolling {}
}

export interface RolloutRetrieveParams {
  /**
   * Project identifier.
   */
  projectId?: string;

  /**
   * Endpoint identifier.
   */
  endpointId: string;
}

export interface RolloutListParams extends CursorPaginationParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Query param: Narrow results to active or terminal rollouts. Omit to list all
   * rollouts.
   */
  filter?: 'ROLLOUT_FILTER_ACTIVE' | 'ROLLOUT_FILTER_TERMINAL';
}

export interface RolloutDeleteParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Path param: Endpoint identifier.
   */
  endpointId: string;

  /**
   * Query param: Etag for optimistic concurrency.
   */
  etag?: string;
}

export interface RolloutAbortParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Path param: Endpoint identifier.
   */
  endpointId: string;

  /**
   * Body param: Required human-readable reason recorded in the rollout audit trail.
   */
  reason: string;

  /**
   * Body param: Optional etag for optimistic concurrency.
   */
  etag?: string;
}

export interface RolloutCancelParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Path param: Endpoint identifier.
   */
  endpointId: string;

  /**
   * Body param: Required human-readable reason recorded in the rollout audit trail.
   */
  reason: string;

  /**
   * Body param: Optional cancel behavior. Absent defaults to freeze, which preserves
   * the current traffic split; revert sends all traffic back to the source
   * deployment and terminates the rollout.
   */
  disposition?: 'CANCEL_DISPOSITION_FREEZE' | 'CANCEL_DISPOSITION_REVERT';

  /**
   * Body param: Optional etag for optimistic concurrency.
   */
  etag?: string;
}

export interface RolloutPauseParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Path param: Endpoint identifier.
   */
  endpointId: string;

  /**
   * Body param: Optional etag for optimistic concurrency.
   */
  etag?: string;

  /**
   * Body param: Optional human-readable reason recorded on the rollout pause
   * metadata.
   */
  reason?: string;
}

export interface RolloutPromoteParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Path param: Endpoint identifier.
   */
  endpointId: string;

  /**
   * Body param: Optional etag for optimistic concurrency.
   */
  etag?: string;
}

export interface RolloutResumeParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Path param: Endpoint identifier.
   */
  endpointId: string;

  /**
   * Body param: Optional etag for optimistic concurrency.
   */
  etag?: string;
}

export interface RolloutStartParams {
  /**
   * Project identifier.
   */
  projectId?: string;

  /**
   * Endpoint identifier.
   */
  endpointId: string;
}

export declare namespace Rollouts {
  export {
    type Rollout as Rollout,
    type RolloutDeleteResponse as RolloutDeleteResponse,
    type RolloutsCursorPagination as RolloutsCursorPagination,
    type RolloutCreateParams as RolloutCreateParams,
    type RolloutRetrieveParams as RolloutRetrieveParams,
    type RolloutListParams as RolloutListParams,
    type RolloutDeleteParams as RolloutDeleteParams,
    type RolloutAbortParams as RolloutAbortParams,
    type RolloutCancelParams as RolloutCancelParams,
    type RolloutPauseParams as RolloutPauseParams,
    type RolloutPromoteParams as RolloutPromoteParams,
    type RolloutResumeParams as RolloutResumeParams,
    type RolloutStartParams as RolloutStartParams,
  };
}
