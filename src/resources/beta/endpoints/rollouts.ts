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
   *     sourceDeploymentId: 'dep_source123',
   *     targetDeploymentId: 'dep_target456',
   *     canary: {
   *       steps: [
   *         { traffic: 25 },
   *         { traffic: 50 },
   *         { traffic: 100 },
   *       ],
   *       stepInterval: '300s',
   *     },
   *     metrics: [
   *       {
   *         name: 'router_latency',
   *         stat: 'METRIC_STAT_TYPE_PERCENTILE',
   *         percentile: 95,
   *         thresholdCheck: {
   *           value: 30000,
   *           operator: 'THRESHOLD_OPERATOR_LT',
   *         },
   *         window: '300s',
   *       },
   *     ],
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
   * Cancels a running, pausing, paused, system-paused, or stabilizing rollout by
   * freezing the current traffic split into standing weights. Revert is removed and
   * rejected; after canceling, start another canary rollout in either direction or
   * rebalance the traffic split. The response is the accepted rollout snapshot; poll
   * GetRollout until it reaches CANCELED.
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
   * Requests a running or stabilizing rollout to pause and records an optional
   * reason. The response returns the PAUSING snapshot; poll GetRollout until state
   * is PAUSED to confirm the executor has parked.
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
   * Returns the values a create request would pick for any field left unset, plus
   * the capacity context needed to display them, without creating a rollout.
   * Responses are display state only and re-validated authoritatively at create and
   * start; do not copy response values back into a create request.
   *
   * @example
   * ```ts
   * const rolloutDefaultsPreview =
   *   await client.beta.endpoints.rollouts.previewDefaults(
   *     'endpointId',
   *     {
   *       projectId: 'projectId',
   *       sourceDeploymentId: 'sourceDeploymentId',
   *       targetDeploymentId: 'targetDeploymentId',
   *     },
   *   );
   * ```
   */
  previewDefaults(
    endpointID: string,
    params: RolloutPreviewDefaultsParams,
    options?: RequestOptions,
  ): APIPromise<RolloutDefaultsPreview> {
    const { projectId = this._client.projectID, ...body } = params;
    return this._client.post(path`/projects/${projectId}/endpoints/${endpointID}/rollouts/preview-defaults`, {
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
   * Resumes a pausing, paused, or system-paused rollout from its current step and
   * traffic split.
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
 * Public view of a rollout resource, including runtime progress and any pause or
 * abort reason.
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
    | 'ROLLOUT_STATE_CANCELED'
    | 'ROLLOUT_STATE_PAUSING';

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
     * Informational conditions that describe the rollout's current state. Omitted when
     * empty; clients should treat an absent key as an empty list.
     */
    conditions?: Array<Status.Condition>;

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

      /**
       * Informational condition type. `CapacityLimited` means the current step advanced
       * partially because full capacity was not placeable.
       */
      type?: 'CapacityLimited';
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

      /**
       * Informational condition type. `CapacityLimited` means the current step advanced
       * partially because full capacity was not placeable.
       */
      type?: 'CapacityLimited';
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
 * Completed create-form state — the caller's spec with defaulted values filled in,
 * the steps the rollout is expected to walk, and the capacity context the defaults
 * were computed from. Display only.
 */
export interface RolloutDefaultsPreview {
  /**
   * Source deployment replica count the defaults were computed from. Zero is a real
   * value.
   */
  sourceReplicas: number;

  /**
   * Strategy, metric gates, timing, and cleanup policy for shifting traffic between
   * two deployments under one endpoint.
   */
  spec: RolloutDefaultsPreview.Spec;

  /**
   * Target deployment autoscaling maximum replica count. Zero is a real value.
   */
  targetMaxReplicas: number;

  /**
   * Target deployment autoscaling minimum replica count. Zero is a real value.
   */
  targetMinReplicas: number;

  /**
   * Target deployment replica count the defaults were computed from. Zero is a real
   * value.
   */
  targetReplicas: number;

  /**
   * Non-blocking findings to surface next to the form. An empty list means the shown
   * values are safe to submit as-is.
   */
  warnings: Array<RolloutDefaultsPreview.Warning>;

  /**
   * Steps the rollout is expected to walk when the caller leaves steps unset.
   * Display only. Empty when the caller supplied steps or no ladder applies.
   */
  estimatedEffectiveSteps?: Array<RolloutDefaultsPreview.EstimatedEffectiveStep>;

  /**
   * Percentage of the pair's traffic currently reaching the target, the floor the
   * suggested steps start above. Unset when not a frozen pair or unknown; 0 is a
   * real measurement.
   */
  estimatedSeedPercent?: number;

  /**
   * True when both deployments stand in the endpoint traffic split, so the rollout
   * resumes from the current split rather than from zero. See warnings for standing
   * split shapes that StartRollout will still reject.
   */
  frozenPair?: boolean;
}

export namespace RolloutDefaultsPreview {
  /**
   * Strategy, metric gates, timing, and cleanup policy for shifting traffic between
   * two deployments under one endpoint.
   */
  export interface Spec {
    /**
     * Deployment that traffic shifts away from.
     */
    sourceDeploymentId: string;

    /**
     * Deployment that traffic shifts toward.
     */
    targetDeploymentId: string;

    /**
     * Blue-green strategy configuration for a single cutover to the target deployment.
     */
    blueGreen?: Spec.BlueGreen;

    /**
     * Canary strategy configuration for gradual traffic progression. An empty config
     * uses the default 5, 25, 50, 100 percent ladder; over a frozen traffic-split pair
     * left by cancel, the default ladder is derived at start from the pair's current
     * served share so it begins above it.
     */
    canary?: Spec.Canary;

    /**
     * Optional final replica count for the source deployment. Defaults to 0, which
     * drains and stops the source.
     */
    finalSourceReplicas?: number;

    /**
     * Optional target replica floor at completion. Must be at least 1 when set;
     * defaults to the source deployment's replica count at create time, or to the
     * source and target deployments' combined replica count when both already stand in
     * the endpoint traffic split after a cancel. If this exceeds the target
     * autoscaling max, the rollout raises that max once when first needed unless an
     * operator changes max mid-run; the raised ceiling remains after completion. A
     * pre-existing target whose own autoscaling min is higher keeps that floor,
     * reported as FINAL_BELOW_INHERITED_MIN. A target that starts stopped lands
     * exactly at this value; if the source min was higher, PreviewRolloutDefaults
     * reports FINAL_BELOW_SOURCE_MIN.
     */
    finalTargetReplicas?: number;

    /**
     * Optional metric gates evaluated after each step's soak. Canary only; rejected on
     * rolling and blue-green rollouts.
     */
    metrics?: Array<Spec.Metric>;

    /**
     * Rolling strategy configuration for capacity-preserving batches that ramp target
     * replicas up while draining source replicas.
     */
    rolling?: Spec.Rolling;
  }

  export namespace Spec {
    /**
     * Blue-green strategy configuration for a single cutover to the target deployment.
     */
    export interface BlueGreen {}

    /**
     * Canary strategy configuration for gradual traffic progression. An empty config
     * uses the default 5, 25, 50, 100 percent ladder; over a frozen traffic-split pair
     * left by cancel, the default ladder is derived at start from the pair's current
     * served share so it begins above it.
     */
    export interface Canary {
      /**
       * Optional positive soak between steps. Defaults to 3m if omitted, and grows to
       * cover metric rule windows plus ingestion lag.
       */
      stepInterval?: string;

      /**
       * Optional progression steps. Defaults to 5, 25, 50, 100 percent when empty;
       * explicit steps must increase and end at 100 percent.
       */
      steps?: Array<Canary.Step>;
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
       * Required catalogue key for the metric to gate on. `serving_latency` is retired.
       */
      name: 'inflight_requests' | 'router_error_rate' | 'router_latency';

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

  /**
   * A non-blocking finding attached to a rollout defaults preview.
   */
  export interface Warning {
    /**
     * Machine-readable warning code, such as START_WILL_REJECT,
     * ROLLOUT_WILL_RAISE_TARGET_MAX, FINAL_BELOW_INHERITED_MIN, or
     * FINAL_BELOW_SOURCE_MIN. Render message for unrecognized codes.
     */
    code: string;

    /**
     * Plain-language description of the finding, safe to show users as-is.
     */
    message: string;
  }

  /**
   * One stage of a canary rollout progression.
   */
  export interface EstimatedEffectiveStep {
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
   * Body param: Canary strategy configuration for gradual traffic progression. An
   * empty config uses the default 5, 25, 50, 100 percent ladder; over a frozen
   * traffic-split pair left by cancel, the default ladder is derived at start from
   * the pair's current served share so it begins above it.
   */
  canary?: RolloutCreateParams.Canary;

  /**
   * Body param: Optional final replica count for the source deployment. Defaults to
   * 0, which drains and stops the source.
   */
  finalSourceReplicas?: number;

  /**
   * Body param: Optional target replica floor at completion. Must be at least 1 when
   * set; defaults to the source deployment's replica count at create time, or to the
   * source and target deployments' combined replica count when both already stand in
   * the endpoint traffic split after a cancel. If this exceeds the target
   * autoscaling max, the rollout raises that max once when first needed unless an
   * operator changes max mid-run; the raised ceiling remains after completion. A
   * pre-existing target whose own autoscaling min is higher keeps that floor,
   * reported as FINAL_BELOW_INHERITED_MIN. A target that starts stopped lands
   * exactly at this value; if the source min was higher, PreviewRolloutDefaults
   * reports FINAL_BELOW_SOURCE_MIN.
   */
  finalTargetReplicas?: number;

  /**
   * Body param: Optional metric gates evaluated after each step's soak. Canary only;
   * rejected on rolling and blue-green rollouts.
   */
  metrics?: Array<RolloutCreateParams.Metric>;

  /**
   * Body param: Rolling strategy configuration for capacity-preserving batches that
   * ramp target replicas up while draining source replicas.
   */
  rolling?: RolloutCreateParams.Rolling;
}

export namespace RolloutCreateParams {
  /**
   * Blue-green strategy configuration for a single cutover to the target deployment.
   */
  export interface BlueGreen {}

  /**
   * Canary strategy configuration for gradual traffic progression. An empty config
   * uses the default 5, 25, 50, 100 percent ladder; over a frozen traffic-split pair
   * left by cancel, the default ladder is derived at start from the pair's current
   * served share so it begins above it.
   */
  export interface Canary {
    /**
     * Optional positive soak between steps. Defaults to 3m if omitted, and grows to
     * cover metric rule windows plus ingestion lag.
     */
    stepInterval?: string;

    /**
     * Optional progression steps. Defaults to 5, 25, 50, 100 percent when empty;
     * explicit steps must increase and end at 100 percent.
     */
    steps?: Array<Canary.Step>;
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
     * Required catalogue key for the metric to gate on. `serving_latency` is retired.
     */
    name: 'inflight_requests' | 'router_error_rate' | 'router_latency';

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
   * the current traffic split. Revert is removed and rejected with
   * FAILED_PRECONDITION; cancel with freeze, then run a reverse rollout back to the
   * source.
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

export interface RolloutPreviewDefaultsParams {
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
  blueGreen?: RolloutPreviewDefaultsParams.BlueGreen;

  /**
   * Body param: Canary strategy configuration for gradual traffic progression. An
   * empty config uses the default 5, 25, 50, 100 percent ladder; over a frozen
   * traffic-split pair left by cancel, the default ladder is derived at start from
   * the pair's current served share so it begins above it.
   */
  canary?: RolloutPreviewDefaultsParams.Canary;

  /**
   * Body param: Optional final replica count for the source deployment. Defaults to
   * 0, which drains and stops the source.
   */
  finalSourceReplicas?: number;

  /**
   * Body param: Optional target replica floor at completion. Must be at least 1 when
   * set; defaults to the source deployment's replica count at create time, or to the
   * source and target deployments' combined replica count when both already stand in
   * the endpoint traffic split after a cancel. If this exceeds the target
   * autoscaling max, the rollout raises that max once when first needed unless an
   * operator changes max mid-run; the raised ceiling remains after completion. A
   * pre-existing target whose own autoscaling min is higher keeps that floor,
   * reported as FINAL_BELOW_INHERITED_MIN. A target that starts stopped lands
   * exactly at this value; if the source min was higher, PreviewRolloutDefaults
   * reports FINAL_BELOW_SOURCE_MIN.
   */
  finalTargetReplicas?: number;

  /**
   * Body param: Optional metric gates evaluated after each step's soak. Canary only;
   * rejected on rolling and blue-green rollouts.
   */
  metrics?: Array<RolloutPreviewDefaultsParams.Metric>;

  /**
   * Body param: Rolling strategy configuration for capacity-preserving batches that
   * ramp target replicas up while draining source replicas.
   */
  rolling?: RolloutPreviewDefaultsParams.Rolling;
}

export namespace RolloutPreviewDefaultsParams {
  /**
   * Blue-green strategy configuration for a single cutover to the target deployment.
   */
  export interface BlueGreen {}

  /**
   * Canary strategy configuration for gradual traffic progression. An empty config
   * uses the default 5, 25, 50, 100 percent ladder; over a frozen traffic-split pair
   * left by cancel, the default ladder is derived at start from the pair's current
   * served share so it begins above it.
   */
  export interface Canary {
    /**
     * Optional positive soak between steps. Defaults to 3m if omitted, and grows to
     * cover metric rule windows plus ingestion lag.
     */
    stepInterval?: string;

    /**
     * Optional progression steps. Defaults to 5, 25, 50, 100 percent when empty;
     * explicit steps must increase and end at 100 percent.
     */
    steps?: Array<Canary.Step>;
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
     * Required catalogue key for the metric to gate on. `serving_latency` is retired.
     */
    name: 'inflight_requests' | 'router_error_rate' | 'router_latency';

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
    type RolloutDefaultsPreview as RolloutDefaultsPreview,
    type RolloutDeleteResponse as RolloutDeleteResponse,
    type RolloutsCursorPagination as RolloutsCursorPagination,
    type RolloutCreateParams as RolloutCreateParams,
    type RolloutRetrieveParams as RolloutRetrieveParams,
    type RolloutListParams as RolloutListParams,
    type RolloutDeleteParams as RolloutDeleteParams,
    type RolloutCancelParams as RolloutCancelParams,
    type RolloutPauseParams as RolloutPauseParams,
    type RolloutPreviewDefaultsParams as RolloutPreviewDefaultsParams,
    type RolloutPromoteParams as RolloutPromoteParams,
    type RolloutResumeParams as RolloutResumeParams,
    type RolloutStartParams as RolloutStartParams,
  };
}
