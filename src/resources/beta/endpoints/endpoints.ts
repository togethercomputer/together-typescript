// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EndpointsAPI from './endpoints';
import * as AbExperimentsAPI from './ab-experiments';
import {
  AbExperiment,
  AbExperimentCreateParams,
  AbExperimentDeleteParams,
  AbExperimentDeleteResponse,
  AbExperimentListParams,
  AbExperimentRetrieveParams,
  AbExperimentUpdateParams,
  AbExperiments,
  AbExperimentsCursorPagination,
} from './ab-experiments';
import * as AdaptersAPI from './adapters';
import {
  AdapterCreateParams,
  AdapterCreateResponse,
  AdapterDeleteParams,
  AdapterDeleteResponse,
  AdapterListParams,
  AdapterListResponse,
  AdapterListResponsesCursorPagination,
  AdapterRetrieveParams,
  AdapterRetrieveResponse,
  AdapterUpdateParams,
  AdapterUpdateResponse,
  Adapters,
} from './adapters';
import * as DeploymentsAPI from './deployments';
import {
  DeploymentCreateParams,
  DeploymentDeleteParams,
  DeploymentDeleteResponse,
  DeploymentListParams,
  DeploymentRetrieveParams,
  DeploymentUpdateParams,
  Deployments,
} from './deployments';
import * as HardwareAPI from './hardware';
import { Hardware, HardwareListResponse, InferenceInstanceType } from './hardware';
import * as PlacementProfilesAPI from './placement-profiles';
import {
  PlacementProfile,
  PlacementProfileListParams,
  PlacementProfileRetrieveParams,
  PlacementProfiles,
  PlacementProfilesCursorPagination,
} from './placement-profiles';
import * as RolloutsAPI from './rollouts';
import {
  Rollout,
  RolloutAbortParams,
  RolloutCancelParams,
  RolloutCreateParams,
  RolloutDeleteParams,
  RolloutDeleteResponse,
  RolloutListParams,
  RolloutPauseParams,
  RolloutPromoteParams,
  RolloutResumeParams,
  RolloutRetrieveParams,
  RolloutStartParams,
  Rollouts,
  RolloutsCursorPagination,
} from './rollouts';
import * as ShadowExperimentsAPI from './shadow-experiments/shadow-experiments';
import {
  ShadowExperiment,
  ShadowExperimentCreateParams,
  ShadowExperimentDeleteParams,
  ShadowExperimentDeleteResponse,
  ShadowExperimentListParams,
  ShadowExperimentRetrieveParams,
  ShadowExperimentUpdateParams,
  ShadowExperiments,
  ShadowExperimentsCursorPagination,
} from './shadow-experiments/shadow-experiments';
import { APIPromise } from '../../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Endpoints extends APIResource {
  placementProfiles: PlacementProfilesAPI.PlacementProfiles = new PlacementProfilesAPI.PlacementProfiles(
    this._client,
  );
  abExperiments: AbExperimentsAPI.AbExperiments = new AbExperimentsAPI.AbExperiments(this._client);
  shadowExperiments: ShadowExperimentsAPI.ShadowExperiments = new ShadowExperimentsAPI.ShadowExperiments(
    this._client,
  );
  rollouts: RolloutsAPI.Rollouts = new RolloutsAPI.Rollouts(this._client);
  hardware: HardwareAPI.Hardware = new HardwareAPI.Hardware(this._client);
  adapters: AdaptersAPI.Adapters = new AdaptersAPI.Adapters(this._client);
  deployments: DeploymentsAPI.Deployments = new DeploymentsAPI.Deployments(this._client);

  /**
   * Creates a stable, inference-addressable endpoint. Add one or more deployments
   * and configure its traffic split before sending inference requests to the
   * endpoint name.
   *
   * @example
   * ```ts
   * const endpoint = await client.beta.endpoints.create({
   *   projectId: 'projectId',
   *   name: 'name',
   * });
   * ```
   */
  create(params: EndpointCreateParams, options?: RequestOptions): APIPromise<Endpoint> {
    const { projectId = this._client.projectID, ...body } = params;
    return this._client.post(path`/projects/${projectId}/endpoints`, {
      body,
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Retrieves an endpoint and lightweight summaries of the deployments attached to
   * it.
   *
   * @example
   * ```ts
   * const endpoint = await client.beta.endpoints.retrieve(
   *   'id',
   *   { projectId: 'projectId' },
   * );
   * ```
   */
  retrieve(
    id: string,
    params: EndpointRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Endpoint> {
    const { projectId = this._client.projectID } = params ?? {};
    return this._client.get(path`/projects/${projectId}/endpoints/${id}`, {
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Updates mutable endpoint fields such as its endpoint string, visibility, or
   * deployment traffic split. Use `updateMask` to select fields explicitly and
   * `etag` in the request body for optimistic concurrency.
   *
   * @example
   * ```ts
   * const endpoint = await client.beta.endpoints.update('id', {
   *   projectId: 'projectId',
   * });
   * ```
   */
  update(id: string, params: EndpointUpdateParams, options?: RequestOptions): APIPromise<Endpoint> {
    const { projectId = this._client.projectID, updateMask, ...body } = params;
    return this._client.patch(path`/projects/${projectId}/endpoints/${id}`, {
      query: { updateMask },
      body,
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Lists the dedicated inference endpoints owned by the specified project.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const endpoint of client.beta.endpoints.list({
   *   projectId: 'projectId',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(
    params: EndpointListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EndpointsCursorPagination, Endpoint> {
    const { projectId = this._client.projectID, ...query } = params ?? {};
    return this._client.getAPIList(path`/projects/${projectId}/endpoints`, CursorPagination<Endpoint>, {
      query,
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Permanently deletes an endpoint. Delete its deployments first; use `etag` to
   * reject the request if the endpoint changed after it was read.
   *
   * @example
   * ```ts
   * const endpoint = await client.beta.endpoints.delete('id', {
   *   projectId: 'projectId',
   * });
   * ```
   */
  delete(
    id: string,
    params: EndpointDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EndpointDeleteResponse> {
    const { projectId = this._client.projectID, etag } = params ?? {};
    return this._client.delete(path`/projects/${projectId}/endpoints/${id}`, {
      query: { etag },
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Returns aggregated request, token, latency, throughput, error, and
   * resource-utilization metrics for an endpoint over a time range. Optionally
   * includes time-series buckets and a per-deployment breakdown.
   *
   * @example
   * ```ts
   * const response = await client.beta.endpoints.analytics(
   *   'id',
   *   { projectId: 'projectId' },
   * );
   * ```
   */
  analytics(
    id: string,
    params: EndpointAnalyticsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EndpointAnalyticsResponse> {
    const { projectId = this._client.projectID, ...query } = params ?? {};
    return this._client.get(path`/projects/${projectId}/endpoints/${id}/analytics`, {
      query,
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Lists an endpoint's audit and lifecycle events newest first. The feed combines
   * endpoint changes with provisioning, scaling, readiness, rollout, and other
   * events from deployments under the endpoint.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const endpointListEventsResponse of client.beta.endpoints.listEvents(
   *   'id',
   *   { projectId: 'projectId' },
   * )) {
   *   // ...
   * }
   * ```
   */
  listEvents(
    id: string,
    params: EndpointListEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EndpointListEventsResponsesCursorPagination, EndpointListEventsResponse> {
    const { projectId = this._client.projectID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/projects/${projectId}/endpoints/${id}/events`,
      CursorPagination<EndpointListEventsResponse>,
      { query, defaultBaseURL: 'https://api.together.ai/v2', ...options },
    );
  }

  /**
   * Lists endpoints shared with every project in the specified organization.
   * Project-private and public endpoints are not included.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const endpoint of client.beta.endpoints.listOrgScoped(
   *   'organizationId',
   * )) {
   *   // ...
   * }
   * ```
   */
  listOrgScoped(
    organizationID: string,
    query: EndpointListOrgScopedParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EndpointsCursorPagination, Endpoint> {
    return this._client.getAPIList(
      path`/organizations/${organizationID}/endpoints`,
      CursorPagination<Endpoint>,
      { query, defaultBaseURL: 'https://api.together.ai/v2', ...options },
    );
  }
}

export type EndpointsCursorPagination = CursorPagination<Endpoint>;

export type EndpointListEventsResponsesCursorPagination = CursorPagination<EndpointListEventsResponse>;

export type EndpointDeploymentsCursorPagination = CursorPagination<EndpointDeployment>;

/**
 * Deployment participating in an A/B experiment.
 */
export interface AbMember {
  /**
   * Deployment under the parent endpoint.
   */
  deploymentId: string;

  /**
   * Integer traffic percent in [1, 100]. Percentages across all members must sum
   * to 100.
   */
  percent: number;

  /**
   * Role of this deployment within the A/B experiment.
   */
  role: 'AB_EXPERIMENT_MEMBER_ROLE_CONTROL' | 'AB_EXPERIMENT_MEMBER_ROLE_VARIANT';
}

/**
 * Autoscaling configuration for a deployment.
 */
export interface DeploymentAutoscaling {
  /**
   * Maximum number of replicas. Defaults to `minReplicas`; omitting it on update
   * preserves the current value.
   */
  maxReplicas?: number;

  /**
   * Minimum number of replicas. Omit on update to preserve the current value. Set
   * both `minReplicas` and `maxReplicas` to `0` to stop the deployment.
   */
  minReplicas?: number;

  /**
   * Time a lower replica recommendation must remain stable before scaling down.
   * Defaults to `5m`.
   */
  scaleDownWindow?: string;

  /**
   * Idle period after which the deployment automatically stops and releases its
   * replicas.
   */
  scaleToZeroWindow?: string;

  /**
   * Stabilization window before scaling up.
   */
  scaleUpWindow?: string;

  /**
   * Metrics and targets that drive replica recommendations. When omitted, the
   * platform uses concurrent in-flight requests per replica.
   */
  scalingMetrics?: Array<DeploymentAutoscaling.ScalingMetric>;
}

export namespace DeploymentAutoscaling {
  /**
   * Metric and target used by the autoscaler to recommend a replica count.
   */
  export interface ScalingMetric {
    /**
     * Metric name, such as `gpu_utilization`, `ttft`, `inflight_requests`,
     * `e2e_latency`, `throughput_per_replica`, or `decoding_speed`.
     */
    name: string;

    /**
     * Target interpreted according to `type`. Utilization uses a percentage from 0 to
     * 100, value uses an absolute measurement, and average value uses a per-replica
     * measurement.
     */
    target: number;

    /**
     * Whether `target` is an absolute value, a utilization percentage, or a
     * per-replica average.
     */
    type: 'METRIC_TARGET_TYPE_VALUE' | 'METRIC_TARGET_TYPE_UTILIZATION' | 'METRIC_TARGET_TYPE_AVERAGE_VALUE';

    /**
     * Percentile to evaluate for latency-based metrics: `p50`, `p90`, `p95`, or `p99`.
     */
    percentile?: string;
  }
}

/**
 * Inline placement parameters expanded into scheduling rules by the server.
 */
export interface DeploymentPlacementConfig {
  /**
   * How strictly the regions list is enforced.
   */
  constraint?: 'ENFORCEMENT_REQUIRED' | 'ENFORCEMENT_PREFERRED';

  /**
   * Regions where the deployment is allowed to run. Multiple regions allow
   * best-effort replica spreading.
   */
  regions?: Array<string>;
}

/**
 * Current status of a deployment, derived at read time from internal state.
 */
export interface DeploymentStatus {
  /**
   * Human-readable explanation of the current state.
   */
  message: string;

  /**
   * High-level lifecycle state.
   */
  state:
    | 'DEPLOYMENT_STATE_PROVISIONING'
    | 'DEPLOYMENT_STATE_READY'
    | 'DEPLOYMENT_STATE_SCALING'
    | 'DEPLOYMENT_STATE_DEGRADED'
    | 'DEPLOYMENT_STATE_FAILED'
    | 'DEPLOYMENT_STATE_STOPPED'
    | 'DEPLOYMENT_STATE_STOPPING';

  /**
   * Total replicas actively serving traffic across all clusters.
   */
  readyReplicas?: number;

  /**
   * Replicas the scheduler has placed on clusters.
   */
  scheduledReplicas?: number;
}

/**
 * Stable inference entry point that groups deployments and routes requests among
 * them.
 */
export interface Endpoint {
  /**
   * Unique endpoint identifier.
   */
  id: string;

  /**
   * Timestamp when the endpoint was created.
   */
  createdAt: string;

  /**
   * Lightweight summaries of deployments under this endpoint. Retrieve a deployment
   * through the endpoint's deployment API for full details.
   */
  deployments: Array<EndpointDeploymentSummary>;

  /**
   * Serving class of the endpoint.
   */
  endpointType: 'ENDPOINT_TYPE_DEDICATED' | 'ENDPOINT_TYPE_SERVERLESS';

  /**
   * Opaque version tag for optimistic concurrency control. Supply on update/delete
   * to ensure consistent read-modify-write. If not set, the write overwrites based
   * on current state.
   */
  etag: string;

  /**
   * Project-qualified endpoint name in the form `<project_slug>/<endpoint_name>`.
   * Pass this value as `model` in inference requests. Create and update requests may
   * use either a bare endpoint name or the qualified form; a supplied project slug
   * must match the project in the request path.
   */
  name: string;

  /**
   * ID of the project that owns the endpoint.
   */
  projectId: string;

  /**
   * Deployments eligible for live traffic and their capacity weights. An empty list
   * leaves the endpoint unrouted.
   */
  trafficSplit: Array<EndpointTrafficSplitEntry>;

  /**
   * Output only. Timestamp when the endpoint was last updated.
   */
  updatedAt: string;

  /**
   * Who can discover the endpoint. `VISIBILITY_PRIVATE` restricts it to the project;
   * `VISIBILITY_INTERNAL` shares it with the organization.
   */
  visibility: 'VISIBILITY_PRIVATE' | 'VISIBILITY_INTERNAL';

  /**
   * ID of the currently active rollout, or empty if none.
   */
  activeRolloutId?: string;
}

/**
 * Serving workload that binds a model and immutable config to an endpoint and
 * manages its replicas.
 */
export interface EndpointDeployment {
  /**
   * Unique deployment identifier.
   */
  id: string;

  /**
   * Replica bounds, timing windows, and metrics that control horizontal scaling.
   */
  autoscaling: EndpointDeployment.Autoscaling;

  /**
   * Immutable config revision in the form
   * `projects/{projectId}/configs/{configRevisionId}`.
   */
  config: string;

  /**
   * Deprecated. Use `config`. Config revision identifier, populated during
   * migration.
   */
  configId: string;

  /**
   * Timestamp when the deployment was created.
   */
  createdAt: string;

  /**
   * ID of the endpoint that contains the deployment.
   */
  endpointId: string;

  /**
   * Opaque version tag for optimistic concurrency control. Supply on update/delete
   * to ensure consistent read-modify-write. If not set, the write overwrites based
   * on current state.
   */
  etag: string;

  /**
   * Hardware selected by the deployment config, including GPU type and count.
   */
  hardware: string;

  /**
   * Pinned model resource in the form
   * `projects/{projectId}/models/{modelId}/revisions/{revisionId}`.
   */
  model: string;

  /**
   * Deprecated. Use `model`. Model identifier being served, populated during
   * migration.
   */
  modelId: string;

  /**
   * Deprecated. Use `model` with a /revisions/{revisionId} segment. Pin to a
   * specific model revision.
   */
  modelRevisionId: string;

  /**
   * Project- and endpoint-qualified deployment name in the form
   * `<project_slug>/<endpoint_name>/<deployment_name>`. Pass it as `model` in an
   * inference request to target this deployment directly instead of using the
   * endpoint's traffic split.
   */
  name: string;

  /**
   * ID of the project that owns the deployment.
   */
  projectId: string;

  /**
   * Current status of a deployment, derived at read time from internal state.
   */
  status: DeploymentStatus;

  /**
   * Whether the deployment serves client-visible responses or only mirrored shadow
   * traffic.
   */
  trafficMode: 'TRAFFIC_MODE_LIVE' | 'TRAFFIC_MODE_SHADOW';

  /**
   * Timestamp when the deployment was last updated.
   */
  updatedAt: string;

  /**
   * Number of replicas the autoscaler currently wants across all regions.
   */
  desiredReplicas?: number;

  /**
   * Whether the deployment can dynamically load LoRA adapters.
   */
  enableLora?: boolean;

  /**
   * Estimated fraction in [0, 1] of endpoint traffic that reaches this deployment
   * under the current routing configuration. Absent or unrouted deployments are 0.
   */
  estimatedEffectiveTrafficShare?: number;

  /**
   * Placement controls where a deployment is scheduled.
   */
  placement?: EndpointDeployment.Inline | EndpointDeployment.Profile;

  /**
   * Runtime information derived from the deployment's configuration.
   */
  runtimeInfo?: EndpointDeployment.RuntimeInfo;

  /**
   * Pinned draft-model resource used for speculative decoding, in the same form as
   * `model`. Omitted when speculative decoding is disabled.
   */
  speculator?: string;

  /**
   * Deprecated. Use `speculator`. Speculative decoding model identifier derived from
   * the deployment config.
   */
  speculatorId?: string;

  /**
   * Deprecated. Use `speculator`. ID of the speculative decoding draft-model
   * revision pinned at creation time.
   */
  speculatorRevisionId?: string;
}

export namespace EndpointDeployment {
  /**
   * Replica bounds, timing windows, and metrics that control horizontal scaling.
   */
  export interface Autoscaling extends EndpointsAPI.DeploymentAutoscaling {}

  export interface Inline {
    /**
     * Inline placement parameters expanded into scheduling rules by the server.
     */
    inline: EndpointsAPI.DeploymentPlacementConfig;
  }

  export interface Profile {
    /**
     * UID of a saved placement profile.
     */
    profile: string;
  }

  /**
   * Runtime information derived from the deployment's configuration.
   */
  export interface RuntimeInfo {
    /**
     * Serving engine, such as `vllm`, `trtllm`, or `sglang`.
     */
    engineType?: string;

    /**
     * Version of the serving engine.
     */
    engineVersion?: string;

    /**
     * Whether the runtime accepts tool and function-calling requests.
     */
    functionCallingSupported?: boolean;

    /**
     * Whether the runtime can constrain generation to a structured output schema.
     */
    structuredOutputSupported?: boolean;
  }
}

/**
 * Compact deployment status embedded in an endpoint response.
 */
export interface EndpointDeploymentSummary {
  /**
   * Deployment identifier.
   */
  id: string;

  /**
   * Autoscaling configuration for the deployment.
   */
  autoscaling: EndpointDeploymentSummary.Autoscaling;

  /**
   * Timestamp when the deployment was created.
   */
  createdAt: string;

  /**
   * Hardware configuration selected by the deployment's config, such as its GPU type
   * and count.
   */
  hardware: string;

  /**
   * Resource name of the served model in the form
   * `projects/{projectId}/models/{modelId}/revisions/{revisionId}`. For public
   * models, the model's owning project may differ from the deployment's project.
   */
  model: string;

  /**
   * Deprecated. Use `model`. Model identifier being served.
   */
  modelId: string;

  /**
   * Inference-addressable name in the fully-qualified form
   * "<project_slug>/<endpoint_name>/<deployment_name>". Pass it as the "model" field
   * when calling the inference API to pin to this deployment.
   */
  name: string;

  /**
   * Current state of the deployment.
   */
  state:
    | 'DEPLOYMENT_STATE_PROVISIONING'
    | 'DEPLOYMENT_STATE_READY'
    | 'DEPLOYMENT_STATE_SCALING'
    | 'DEPLOYMENT_STATE_DEGRADED'
    | 'DEPLOYMENT_STATE_FAILED'
    | 'DEPLOYMENT_STATE_STOPPED'
    | 'DEPLOYMENT_STATE_STOPPING';

  /**
   * Whether the deployment serves client-visible responses or only mirrored shadow
   * traffic.
   */
  trafficMode: 'TRAFFIC_MODE_LIVE' | 'TRAFFIC_MODE_SHADOW';

  /**
   * Number of replicas the autoscaler currently wants across all regions.
   */
  desiredReplicas?: number;

  /**
   * Estimated fraction from 0 to 1 of endpoint traffic currently routed to this
   * deployment.
   */
  estimatedEffectiveTrafficShare?: number;

  /**
   * Number of replicas currently ready to serve requests across all regions.
   */
  readyReplicas?: number;
}

export namespace EndpointDeploymentSummary {
  /**
   * Autoscaling configuration for the deployment.
   */
  export interface Autoscaling extends EndpointsAPI.DeploymentAutoscaling {}
}

/**
 * Capacity weight assigned to one deployment in an endpoint's live traffic split.
 */
export interface EndpointTrafficSplitEntry {
  /**
   * ID of a deployment under the endpoint that can receive live traffic.
   */
  deploymentId: string;

  /**
   * Non-negative, finite weight applied to each ready replica. A deployment's
   * effective routing capacity is `weight * readyReplicas`, and requests are
   * distributed in proportion to that capacity. Set to `0` to remove the deployment
   * from the live traffic split.
   */
  weight: number;
}

/**
 * Adaptive sticky-key sampling that throttles toward a target QPS.
 */
export interface ShadowAdaptiveKeyBasedSampling {
  /**
   * Required request-body field used as the sticky sampling key.
   */
  key: string;

  /**
   * Required per-gateway-replica target QPS for adaptive sampling.
   */
  targetQps: number;

  /**
   * Optional sliding window for QPS observation. Defaults to 60s and must not be
   * negative.
   */
  window?: string;
}

/**
 * Adaptive random sampling that throttles toward a target QPS.
 */
export interface ShadowAdaptiveUniformSampling {
  /**
   * Required per-gateway-replica target QPS for adaptive sampling.
   */
  targetQps: number;

  /**
   * Optional sliding window for QPS observation. Defaults to 60s and must not be
   * negative.
   */
  window?: string;
}

/**
 * Endpoint-level source that samples endpoint traffic at the API gateway.
 */
export interface ShadowEndpointSource {
  /**
   * Sampling strategy for endpoint-level shadow traffic. Exactly one strategy must
   * be set.
   */
  sampling:
    | ShadowEndpointSource.Uniform
    | ShadowEndpointSource.KeyBased
    | ShadowEndpointSource.AdaptiveUniform
    | ShadowEndpointSource.AdaptiveKeyBased;
}

export namespace ShadowEndpointSource {
  export interface Uniform {
    /**
     * Fixed-rate random sampling of endpoint requests.
     */
    uniform: EndpointsAPI.ShadowUniformSampling;
  }

  export interface KeyBased {
    /**
     * Fixed-rate sampling of distinct key values with sticky decisions.
     */
    keyBased: EndpointsAPI.ShadowKeyBasedSampling;
  }

  export interface AdaptiveUniform {
    /**
     * Adaptive random sampling that throttles toward a target QPS.
     */
    adaptiveUniform: EndpointsAPI.ShadowAdaptiveUniformSampling;
  }

  export interface AdaptiveKeyBased {
    /**
     * Adaptive sticky-key sampling that throttles toward a target QPS.
     */
    adaptiveKeyBased: EndpointsAPI.ShadowAdaptiveKeyBasedSampling;
  }
}

/**
 * Fixed-rate sampling of distinct key values with sticky decisions.
 */
export interface ShadowKeyBasedSampling {
  /**
   * Required request-body field used as the sticky sampling key.
   */
  key: string;

  /**
   * Required fraction of distinct key values to sample, from 0.0 to 1.0.
   */
  rate: number;
}

/**
 * Traffic source for a shadow experiment. The public API supports endpoint sources
 * only.
 */
export interface ShadowSource {
  /**
   * Endpoint-level source that samples endpoint traffic at the API gateway.
   */
  endpoint: ShadowEndpointSource;
}

/**
 * Fixed-rate random sampling of endpoint requests.
 */
export interface ShadowUniformSampling {
  /**
   * Required fraction of requests to sample, from 0.0 to 1.0.
   */
  rate: number;
}

/**
 * Empty response returned after a successful delete operation.
 */
export interface EndpointDeleteResponse {}

/**
 * Endpoint-wide usage and performance analytics with optional time-series and
 * per-deployment breakdowns.
 */
export interface EndpointAnalyticsResponse {
  /**
   * Per-deployment analytics.
   */
  deploymentAnalytics?: Array<EndpointAnalyticsResponse.DeploymentAnalytics>;

  /**
   * ID of the endpoint summarized by these analytics.
   */
  endpointId?: string;

  /**
   * Operational metrics aggregated across all deployments receiving traffic for an
   * endpoint.
   */
  metrics?: EndpointAnalyticsResponse.Metrics;

  /**
   * Closed-open time range covered by the analytics.
   */
  timeRange?: EndpointAnalyticsResponse.TimeRange;

  /**
   * Per-bucket metric samples, included only when `includeTimeSeries` is true.
   */
  timeSeries?: Array<EndpointAnalyticsResponse.TimeSeries>;
}

export namespace EndpointAnalyticsResponse {
  /**
   * Usage and performance analytics for one deployment under an endpoint.
   */
  export interface DeploymentAnalytics {
    /**
     * ID of the deployment summarized by these analytics.
     */
    deploymentId?: string;

    /**
     * ID of the deployment's parent endpoint.
     */
    endpointId?: string;

    /**
     * Aggregate operational metrics for the deployment.
     */
    metrics?: DeploymentAnalytics.Metrics;

    /**
     * Closed-open time range covered by the analytics.
     */
    timeRange?: DeploymentAnalytics.TimeRange;

    /**
     * Per-bucket metric samples for the deployment.
     */
    timeSeries?: Array<DeploymentAnalytics.TimeSeries>;
  }

  export namespace DeploymentAnalytics {
    /**
     * Aggregate operational metrics for the deployment.
     */
    export interface Metrics {
      /**
       * ID of the deployment summarized by these metrics.
       */
      deploymentId?: string;

      /**
       * ID of the deployment's parent endpoint.
       */
      endpointId?: string;

      /**
       * Error rate and counts by error type.
       */
      errorMetrics?: Metrics.ErrorMetrics;

      /**
       * Time-to-first-token, end-to-end, and inter-token latency percentiles.
       */
      latencyMetrics?: Metrics.LatencyMetrics;

      /**
       * Request counts and rates.
       */
      requestMetrics?: Metrics.RequestMetrics;

      /**
       * Average CPU, GPU, memory, and network utilization.
       */
      resourceUtilization?: Metrics.ResourceUtilization;

      /**
       * Token, request, and batching throughput.
       */
      throughputMetrics?: Metrics.ThroughputMetrics;

      /**
       * Closed-open time range covered by the metrics.
       */
      timeRange?: Metrics.TimeRange;

      /**
       * Input and output token totals and averages.
       */
      tokenMetrics?: Metrics.TokenMetrics;
    }

    export namespace Metrics {
      /**
       * Error rate and counts by error type.
       */
      export interface ErrorMetrics {
        /**
         * Percentage in [0, 100].
         */
        errorRate?: number;

        /**
         * Counts of errors keyed by error type (e.g. HTTP status code or error kind).
         */
        errorsByType?: { [key: string]: string };
      }

      /**
       * Time-to-first-token, end-to-end, and inter-token latency percentiles.
       */
      export interface LatencyMetrics {
        /**
         * 50th-percentile inter-token latency, in milliseconds.
         */
        itlP50Ms?: number;

        /**
         * 90th-percentile inter-token latency, in milliseconds.
         */
        itlP90Ms?: number;

        /**
         * 99th-percentile inter-token latency, in milliseconds.
         */
        itlP99Ms?: number;

        /**
         * 50th-percentile end-to-end request latency, in milliseconds.
         */
        latencyP50Ms?: number;

        /**
         * 90th-percentile end-to-end request latency, in milliseconds.
         */
        latencyP90Ms?: number;

        /**
         * 99th-percentile end-to-end request latency, in milliseconds.
         */
        latencyP99Ms?: number;

        /**
         * 50th-percentile time to first token, in milliseconds.
         */
        ttftP50Ms?: number;

        /**
         * 90th-percentile time to first token, in milliseconds.
         */
        ttftP90Ms?: number;

        /**
         * 99th-percentile time to first token, in milliseconds.
         */
        ttftP99Ms?: number;
      }

      /**
       * Request counts and rates.
       */
      export interface RequestMetrics {
        /**
         * Requests that failed during the time range.
         */
        failedRequests?: string;

        /**
         * Request counts keyed by HTTP status code.
         */
        requestsByStatusCode?: { [key: string]: string };

        /**
         * Average requests per second over the time range.
         */
        requestsPerSecond?: number;

        /**
         * Requests completed successfully during the time range.
         */
        successfulRequests?: string;

        /**
         * Total requests received during the time range.
         */
        totalRequests?: string;
      }

      /**
       * Average CPU, GPU, memory, and network utilization.
       */
      export interface ResourceUtilization {
        /**
         * Average CPU utilization across replicas, as a percentage.
         */
        cpuUtilization?: number;

        /**
         * Average GPU memory utilization across replicas, as a percentage.
         */
        gpuMemoryUtilization?: number;

        /**
         * Average GPU compute utilization across replicas, as a percentage.
         */
        gpuUtilization?: number;

        /**
         * Average system memory utilization across replicas, as a percentage.
         */
        memoryUtilization?: number;

        /**
         * Average network throughput across replicas, in megabits per second.
         */
        networkBandwidthMbps?: number;
      }

      /**
       * Token, request, and batching throughput.
       */
      export interface ThroughputMetrics {
        /**
         * Average number of batches queued or in flight in the serving engine.
         */
        avgBatchDepth?: number;

        /**
         * Average number of requests processed in each runtime batch.
         */
        avgBatchSize?: number;

        /**
         * Average completed requests per second.
         */
        requestsPerSecond?: number;

        /**
         * Average generated tokens per second.
         */
        tokensPerSecond?: number;
      }

      /**
       * Closed-open time range covered by the metrics.
       */
      export interface TimeRange {
        /**
         * Exclusive end of the time range.
         */
        endTime?: string;

        /**
         * Inclusive start of the time range.
         */
        startTime?: string;
      }

      /**
       * Input and output token totals and averages.
       */
      export interface TokenMetrics {
        /**
         * Average input tokens per request.
         */
        avgInputTokens?: number;

        /**
         * Average output tokens per request.
         */
        avgOutputTokens?: number;

        /**
         * Total input tokens processed during the time range.
         */
        totalInputTokens?: string;

        /**
         * Total output tokens generated during the time range.
         */
        totalOutputTokens?: string;
      }
    }

    /**
     * Closed-open time range covered by the analytics.
     */
    export interface TimeRange {
      /**
       * Exclusive end of the time range.
       */
      endTime?: string;

      /**
       * Inclusive start of the time range.
       */
      startTime?: string;
    }

    /**
     * Timestamped bucket containing one or more named metric values.
     */
    export interface TimeSeries {
      /**
       * Start time of the metric bucket.
       */
      timestamp?: string;

      /**
       * Metric names mapped to their numeric values for this bucket.
       */
      values?: { [key: string]: number };
    }
  }

  /**
   * Operational metrics aggregated across all deployments receiving traffic for an
   * endpoint.
   */
  export interface Metrics {
    /**
     * Per-deployment breakdown, if the endpoint has multiple deployments.
     */
    deploymentMetrics?: Array<Metrics.DeploymentMetric>;

    /**
     * The endpoint these metrics describe.
     */
    endpointId?: string;

    /**
     * Error rate and counts by error type.
     */
    errorMetrics?: Metrics.ErrorMetrics;

    /**
     * Time-to-first-token, end-to-end, and inter-token latency percentiles.
     */
    latencyMetrics?: Metrics.LatencyMetrics;

    /**
     * Request counts and rates.
     */
    requestMetrics?: Metrics.RequestMetrics;

    /**
     * Average CPU, GPU, memory, and network utilization.
     */
    resourceUtilization?: Metrics.ResourceUtilization;

    /**
     * Token, request, and batching throughput.
     */
    throughputMetrics?: Metrics.ThroughputMetrics;

    /**
     * Closed-open time range used by metrics and analytics responses.
     */
    timeRange?: Metrics.TimeRange;

    /**
     * Input and output token totals and averages.
     */
    tokenMetrics?: Metrics.TokenMetrics;
  }

  export namespace Metrics {
    /**
     * Operational metrics for one deployment under an endpoint.
     */
    export interface DeploymentMetric {
      /**
       * ID of the deployment summarized by these metrics.
       */
      deploymentId?: string;

      /**
       * ID of the deployment's parent endpoint.
       */
      endpointId?: string;

      /**
       * Error rate and counts by error type.
       */
      errorMetrics?: DeploymentMetric.ErrorMetrics;

      /**
       * Time-to-first-token, end-to-end, and inter-token latency percentiles.
       */
      latencyMetrics?: DeploymentMetric.LatencyMetrics;

      /**
       * Request counts and rates.
       */
      requestMetrics?: DeploymentMetric.RequestMetrics;

      /**
       * Average CPU, GPU, memory, and network utilization.
       */
      resourceUtilization?: DeploymentMetric.ResourceUtilization;

      /**
       * Token, request, and batching throughput.
       */
      throughputMetrics?: DeploymentMetric.ThroughputMetrics;

      /**
       * Closed-open time range covered by the metrics.
       */
      timeRange?: DeploymentMetric.TimeRange;

      /**
       * Input and output token totals and averages.
       */
      tokenMetrics?: DeploymentMetric.TokenMetrics;
    }

    export namespace DeploymentMetric {
      /**
       * Error rate and counts by error type.
       */
      export interface ErrorMetrics {
        /**
         * Percentage in [0, 100].
         */
        errorRate?: number;

        /**
         * Counts of errors keyed by error type (e.g. HTTP status code or error kind).
         */
        errorsByType?: { [key: string]: string };
      }

      /**
       * Time-to-first-token, end-to-end, and inter-token latency percentiles.
       */
      export interface LatencyMetrics {
        /**
         * 50th-percentile inter-token latency, in milliseconds.
         */
        itlP50Ms?: number;

        /**
         * 90th-percentile inter-token latency, in milliseconds.
         */
        itlP90Ms?: number;

        /**
         * 99th-percentile inter-token latency, in milliseconds.
         */
        itlP99Ms?: number;

        /**
         * 50th-percentile end-to-end request latency, in milliseconds.
         */
        latencyP50Ms?: number;

        /**
         * 90th-percentile end-to-end request latency, in milliseconds.
         */
        latencyP90Ms?: number;

        /**
         * 99th-percentile end-to-end request latency, in milliseconds.
         */
        latencyP99Ms?: number;

        /**
         * 50th-percentile time to first token, in milliseconds.
         */
        ttftP50Ms?: number;

        /**
         * 90th-percentile time to first token, in milliseconds.
         */
        ttftP90Ms?: number;

        /**
         * 99th-percentile time to first token, in milliseconds.
         */
        ttftP99Ms?: number;
      }

      /**
       * Request counts and rates.
       */
      export interface RequestMetrics {
        /**
         * Requests that failed during the time range.
         */
        failedRequests?: string;

        /**
         * Request counts keyed by HTTP status code.
         */
        requestsByStatusCode?: { [key: string]: string };

        /**
         * Average requests per second over the time range.
         */
        requestsPerSecond?: number;

        /**
         * Requests completed successfully during the time range.
         */
        successfulRequests?: string;

        /**
         * Total requests received during the time range.
         */
        totalRequests?: string;
      }

      /**
       * Average CPU, GPU, memory, and network utilization.
       */
      export interface ResourceUtilization {
        /**
         * Average CPU utilization across replicas, as a percentage.
         */
        cpuUtilization?: number;

        /**
         * Average GPU memory utilization across replicas, as a percentage.
         */
        gpuMemoryUtilization?: number;

        /**
         * Average GPU compute utilization across replicas, as a percentage.
         */
        gpuUtilization?: number;

        /**
         * Average system memory utilization across replicas, as a percentage.
         */
        memoryUtilization?: number;

        /**
         * Average network throughput across replicas, in megabits per second.
         */
        networkBandwidthMbps?: number;
      }

      /**
       * Token, request, and batching throughput.
       */
      export interface ThroughputMetrics {
        /**
         * Average number of batches queued or in flight in the serving engine.
         */
        avgBatchDepth?: number;

        /**
         * Average number of requests processed in each runtime batch.
         */
        avgBatchSize?: number;

        /**
         * Average completed requests per second.
         */
        requestsPerSecond?: number;

        /**
         * Average generated tokens per second.
         */
        tokensPerSecond?: number;
      }

      /**
       * Closed-open time range covered by the metrics.
       */
      export interface TimeRange {
        /**
         * Exclusive end of the time range.
         */
        endTime?: string;

        /**
         * Inclusive start of the time range.
         */
        startTime?: string;
      }

      /**
       * Input and output token totals and averages.
       */
      export interface TokenMetrics {
        /**
         * Average input tokens per request.
         */
        avgInputTokens?: number;

        /**
         * Average output tokens per request.
         */
        avgOutputTokens?: number;

        /**
         * Total input tokens processed during the time range.
         */
        totalInputTokens?: string;

        /**
         * Total output tokens generated during the time range.
         */
        totalOutputTokens?: string;
      }
    }

    /**
     * Error rate and counts by error type.
     */
    export interface ErrorMetrics {
      /**
       * Percentage in [0, 100].
       */
      errorRate?: number;

      /**
       * Counts of errors keyed by error type (e.g. HTTP status code or error kind).
       */
      errorsByType?: { [key: string]: string };
    }

    /**
     * Time-to-first-token, end-to-end, and inter-token latency percentiles.
     */
    export interface LatencyMetrics {
      /**
       * 50th-percentile inter-token latency, in milliseconds.
       */
      itlP50Ms?: number;

      /**
       * 90th-percentile inter-token latency, in milliseconds.
       */
      itlP90Ms?: number;

      /**
       * 99th-percentile inter-token latency, in milliseconds.
       */
      itlP99Ms?: number;

      /**
       * 50th-percentile end-to-end request latency, in milliseconds.
       */
      latencyP50Ms?: number;

      /**
       * 90th-percentile end-to-end request latency, in milliseconds.
       */
      latencyP90Ms?: number;

      /**
       * 99th-percentile end-to-end request latency, in milliseconds.
       */
      latencyP99Ms?: number;

      /**
       * 50th-percentile time to first token, in milliseconds.
       */
      ttftP50Ms?: number;

      /**
       * 90th-percentile time to first token, in milliseconds.
       */
      ttftP90Ms?: number;

      /**
       * 99th-percentile time to first token, in milliseconds.
       */
      ttftP99Ms?: number;
    }

    /**
     * Request counts and rates.
     */
    export interface RequestMetrics {
      /**
       * Requests that failed during the time range.
       */
      failedRequests?: string;

      /**
       * Request counts keyed by HTTP status code.
       */
      requestsByStatusCode?: { [key: string]: string };

      /**
       * Average requests per second over the time range.
       */
      requestsPerSecond?: number;

      /**
       * Requests completed successfully during the time range.
       */
      successfulRequests?: string;

      /**
       * Total requests received during the time range.
       */
      totalRequests?: string;
    }

    /**
     * Average CPU, GPU, memory, and network utilization.
     */
    export interface ResourceUtilization {
      /**
       * Average CPU utilization across replicas, as a percentage.
       */
      cpuUtilization?: number;

      /**
       * Average GPU memory utilization across replicas, as a percentage.
       */
      gpuMemoryUtilization?: number;

      /**
       * Average GPU compute utilization across replicas, as a percentage.
       */
      gpuUtilization?: number;

      /**
       * Average system memory utilization across replicas, as a percentage.
       */
      memoryUtilization?: number;

      /**
       * Average network throughput across replicas, in megabits per second.
       */
      networkBandwidthMbps?: number;
    }

    /**
     * Token, request, and batching throughput.
     */
    export interface ThroughputMetrics {
      /**
       * Average number of batches queued or in flight in the serving engine.
       */
      avgBatchDepth?: number;

      /**
       * Average number of requests processed in each runtime batch.
       */
      avgBatchSize?: number;

      /**
       * Average completed requests per second.
       */
      requestsPerSecond?: number;

      /**
       * Average generated tokens per second.
       */
      tokensPerSecond?: number;
    }

    /**
     * Closed-open time range used by metrics and analytics responses.
     */
    export interface TimeRange {
      /**
       * Exclusive end of the time range.
       */
      endTime?: string;

      /**
       * Inclusive start of the time range.
       */
      startTime?: string;
    }

    /**
     * Input and output token totals and averages.
     */
    export interface TokenMetrics {
      /**
       * Average input tokens per request.
       */
      avgInputTokens?: number;

      /**
       * Average output tokens per request.
       */
      avgOutputTokens?: number;

      /**
       * Total input tokens processed during the time range.
       */
      totalInputTokens?: string;

      /**
       * Total output tokens generated during the time range.
       */
      totalOutputTokens?: string;
    }
  }

  /**
   * Closed-open time range covered by the analytics.
   */
  export interface TimeRange {
    /**
     * Exclusive end of the time range.
     */
    endTime?: string;

    /**
     * Inclusive start of the time range.
     */
    startTime?: string;
  }

  /**
   * Timestamped bucket containing one or more named metric values.
   */
  export interface TimeSeries {
    /**
     * Start time of the metric bucket.
     */
    timestamp?: string;

    /**
     * Metric names mapped to their numeric values for this bucket.
     */
    values?: { [key: string]: number };
  }
}

/**
 * One endpoint- or deployment-scoped entry in an endpoint's combined audit and
 * lifecycle feed.
 */
export interface EndpointListEventsResponse {
  /**
   * Output only. Unique event identifier.
   */
  id: string;

  /**
   * Output only. Event creation time.
   */
  createdAt: string;

  /**
   * Output only. The endpoint this event belongs to. Always set.
   */
  endpointId: string;

  /**
   * Output only. Severity level.
   */
  level: 'LEVEL_DEBUG' | 'LEVEL_INFO' | 'LEVEL_WARN' | 'LEVEL_ERROR';

  /**
   * Output only. Service, cluster, or controller that emitted the event.
   */
  source: string;

  /**
   * Output only. Whether this row describes the endpoint or one of its deployments.
   */
  sourceKind: 'SOURCE_KIND_ENDPOINT' | 'SOURCE_KIND_DEPLOYMENT';

  /**
   * Output only. Stable event type, such as `endpoint.updated`,
   * `deployment.created`, `deployment.scaled`, `condition.set`, or `pod.log`.
   */
  type: string;

  /**
   * ID of the cluster associated with a cluster-scoped event.
   */
  clusterId?: string;

  /**
   * Stable public component label associated with a replica event, such as `engine`,
   * `model-download`, or `sidecar`.
   */
  containerName?: string;

  /**
   * Output only. Deployment associated with the event when `sourceKind` is
   * `SOURCE_KIND_DEPLOYMENT`.
   */
  deploymentId?: string;

  /**
   * Short diagnostic log excerpt captured with a pod event, for example during a
   * crash, out-of-memory termination, or image pull failure. This field is truncated
   * and is not a streaming log API.
   */
  logExcerpt?: string;

  /**
   * Output only. Human-readable description of the event. Short and stable; not
   * structured data.
   */
  message?: string;

  /**
   * Resource name at the time of the event. Populated by: deployment.created,
   * deployment.deleted, endpoint.created, endpoint.deleted
   */
  name?: string;

  /**
   * New replica count for a `deployment.scaled` event.
   */
  newReplicas?: number;

  /**
   * Opaque node handle for correlating replica failures on the same node. Omitted
   * when the replica is unscheduled or the node is unknown.
   */
  nodeId?: string;

  /**
   * Replica-count transition. Populated by: deployment.scaled
   */
  oldReplicas?: number;

  /**
   * Field-mask paths that were modified. Populated by: deployment.updated,
   * endpoint.updated
   */
  paths?: Array<string>;

  /**
   * Stable condition reason, such as `AllReplicasReady`, `ReplicasProgressing`, or
   * `ApplySuccessful`.
   */
  reason?: string;

  /**
   * Opaque replica identity associated with a `pod.*` event, stable for grouping
   * events from the same replica.
   */
  replicaId?: string;

  /**
   * Deployment subservice associated with the event, such as `model-deployment` or
   * `speculator-deployment`.
   */
  serviceType?: string;

  /**
   * Condition status for `condition.set` and `cluster_condition.set`: `True`,
   * `False`, or `Unknown`. The condition type is carried in `subjectId`.
   */
  status?: string;

  /**
   * Output only. ID of the event's subject, such as a rollout, shadow target, or
   * condition type.
   */
  subjectId?: string;

  /**
   * Target version. Populated by `target.created`; the target ID is carried in
   * `subjectId`.
   */
  version?: number;
}

export interface EndpointCreateParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Body param: Inference-addressable endpoint name to create.
   */
  name: string;

  /**
   * Body param: Who can discover the endpoint. `VISIBILITY_PRIVATE` restricts it to
   * the project; `VISIBILITY_INTERNAL` shares it with the organization.
   */
  visibility?: 'VISIBILITY_PRIVATE' | 'VISIBILITY_INTERNAL';
}

export interface EndpointRetrieveParams {
  /**
   * Project identifier.
   */
  projectId?: string;
}

export interface EndpointUpdateParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Query param: Fields to update. If not set, the fields populated are updated.
   */
  updateMask?: string;

  /**
   * Body param: Current endpoint version. The update is rejected if this value no
   * longer matches.
   */
  etag?: string;

  /**
   * Body param: Updated endpoint string.
   */
  name?: string;

  /**
   * Body param: Replacement live traffic split. Use an empty list to stop routing
   * live traffic.
   */
  trafficSplit?: Array<EndpointTrafficSplitEntry>;

  /**
   * Body param: Who can discover the endpoint. `VISIBILITY_PRIVATE` restricts it to
   * the project; `VISIBILITY_INTERNAL` shares it with the organization.
   */
  visibility?: 'VISIBILITY_PRIVATE' | 'VISIBILITY_INTERNAL';
}

export interface EndpointListParams extends CursorPaginationParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Query param: Filter expression using `name`, `created_at`, or `updated_at` with
   * comparison operators and AND/OR/NOT; timestamps must be RFC 3339 strings. `name`
   * supports substring matching with `:` and prefix/suffix wildcards with `*`, and
   * accepts a bare endpoint name or `<project_slug>/<endpoint_name>`.
   */
  filter?: string;

  /**
   * Query param: Sort field for the results. Supports `created_at` or `updated_at`,
   * optionally followed by `asc` or `desc`.
   */
  orderBy?: string;
}

export interface EndpointDeleteParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Query param: Etag for optimistic concurrency. If set, the delete is rejected if
   * the current etag does not match.
   */
  etag?: string;
}

export interface EndpointAnalyticsParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Query param: Restrict to a single deployment under this endpoint.
   */
  deploymentId?: string;

  /**
   * Query param: Exclusive end of the time range. Defaults to now if unset.
   */
  endTime?: string;

  /**
   * Query param: Time-series bucket duration, such as `1m`, `1h`, or `1d`. Defaults
   * to `1d`.
   */
  granularity?: string;

  /**
   * Query param: When true, include per-bucket time series in the response.
   */
  includeTimeSeries?: boolean;

  /**
   * Query param: Inclusive start of the time range. Defaults to 24 hours ago if
   * unset.
   */
  startTime?: string;
}

export interface EndpointListEventsParams extends CursorPaginationParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Query param: Deployment IDs whose events should be included. Every ID must
   * belong to the endpoint. Supplying this filter excludes endpoint-scoped events
   * unless `SOURCE_KIND_ENDPOINT` is also included in `sourceKinds`.
   */
  deploymentIds?: Array<string>;

  /**
   * Query param: Minimum severity. Omit to disable severity filtering.
   */
  minLevel?: 'LEVEL_DEBUG' | 'LEVEL_INFO' | 'LEVEL_WARN' | 'LEVEL_ERROR';

  /**
   * Query param: Return only events at or after this time.
   */
  since?: string;

  /**
   * Query param: Resource kinds whose events should be included. Omit to include
   * both endpoint- and deployment-scoped events.
   */
  sourceKinds?: Array<'SOURCE_KIND_ENDPOINT' | 'SOURCE_KIND_DEPLOYMENT'>;

  /**
   * Query param: ID of a subject associated with the event, such as a rollout.
   * Combined with other filters using AND.
   */
  subjectId?: string;

  /**
   * Query param: Event types to include, such as `deployment.scaled` or
   * `condition.set`. Combined with other filters using AND.
   */
  types?: Array<string>;

  /**
   * Query param: Return only events strictly before this time.
   */
  until?: string;
}

export interface EndpointListOrgScopedParams extends CursorPaginationParams {
  /**
   * Filter expression using `name`, `created_at`, or `updated_at` with comparison
   * operators and AND/OR/NOT; timestamps must be RFC 3339 strings. `name` supports
   * substring matching with `:` and prefix/suffix wildcards with `*`, and must be a
   * bare endpoint name.
   */
  filter?: string;

  /**
   * Sort field for the results. Supports `created_at` or `updated_at`, optionally
   * followed by `asc` or `desc`.
   */
  orderBy?: string;
}

Endpoints.PlacementProfiles = PlacementProfiles;
Endpoints.AbExperiments = AbExperiments;
Endpoints.ShadowExperiments = ShadowExperiments;
Endpoints.Rollouts = Rollouts;
Endpoints.Hardware = Hardware;
Endpoints.Adapters = Adapters;
Endpoints.Deployments = Deployments;

export declare namespace Endpoints {
  export {
    type AbMember as AbMember,
    type DeploymentAutoscaling as DeploymentAutoscaling,
    type DeploymentPlacementConfig as DeploymentPlacementConfig,
    type DeploymentStatus as DeploymentStatus,
    type Endpoint as Endpoint,
    type EndpointDeployment as EndpointDeployment,
    type EndpointDeploymentSummary as EndpointDeploymentSummary,
    type EndpointTrafficSplitEntry as EndpointTrafficSplitEntry,
    type ShadowAdaptiveKeyBasedSampling as ShadowAdaptiveKeyBasedSampling,
    type ShadowAdaptiveUniformSampling as ShadowAdaptiveUniformSampling,
    type ShadowEndpointSource as ShadowEndpointSource,
    type ShadowKeyBasedSampling as ShadowKeyBasedSampling,
    type ShadowSource as ShadowSource,
    type ShadowUniformSampling as ShadowUniformSampling,
    type EndpointDeleteResponse as EndpointDeleteResponse,
    type EndpointAnalyticsResponse as EndpointAnalyticsResponse,
    type EndpointListEventsResponse as EndpointListEventsResponse,
    type EndpointsCursorPagination as EndpointsCursorPagination,
    type EndpointListEventsResponsesCursorPagination as EndpointListEventsResponsesCursorPagination,
    type EndpointCreateParams as EndpointCreateParams,
    type EndpointRetrieveParams as EndpointRetrieveParams,
    type EndpointUpdateParams as EndpointUpdateParams,
    type EndpointListParams as EndpointListParams,
    type EndpointDeleteParams as EndpointDeleteParams,
    type EndpointAnalyticsParams as EndpointAnalyticsParams,
    type EndpointListEventsParams as EndpointListEventsParams,
    type EndpointListOrgScopedParams as EndpointListOrgScopedParams,
  };

  export {
    PlacementProfiles as PlacementProfiles,
    type PlacementProfile as PlacementProfile,
    type PlacementProfilesCursorPagination as PlacementProfilesCursorPagination,
    type PlacementProfileRetrieveParams as PlacementProfileRetrieveParams,
    type PlacementProfileListParams as PlacementProfileListParams,
  };

  export {
    AbExperiments as AbExperiments,
    type AbExperiment as AbExperiment,
    type AbExperimentDeleteResponse as AbExperimentDeleteResponse,
    type AbExperimentsCursorPagination as AbExperimentsCursorPagination,
    type AbExperimentCreateParams as AbExperimentCreateParams,
    type AbExperimentRetrieveParams as AbExperimentRetrieveParams,
    type AbExperimentUpdateParams as AbExperimentUpdateParams,
    type AbExperimentListParams as AbExperimentListParams,
    type AbExperimentDeleteParams as AbExperimentDeleteParams,
  };

  export {
    ShadowExperiments as ShadowExperiments,
    type ShadowExperiment as ShadowExperiment,
    type ShadowExperimentDeleteResponse as ShadowExperimentDeleteResponse,
    type ShadowExperimentsCursorPagination as ShadowExperimentsCursorPagination,
    type ShadowExperimentCreateParams as ShadowExperimentCreateParams,
    type ShadowExperimentRetrieveParams as ShadowExperimentRetrieveParams,
    type ShadowExperimentUpdateParams as ShadowExperimentUpdateParams,
    type ShadowExperimentListParams as ShadowExperimentListParams,
    type ShadowExperimentDeleteParams as ShadowExperimentDeleteParams,
  };

  export {
    Rollouts as Rollouts,
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

  export {
    Hardware as Hardware,
    type InferenceInstanceType as InferenceInstanceType,
    type HardwareListResponse as HardwareListResponse,
  };

  export {
    Adapters as Adapters,
    type AdapterCreateResponse as AdapterCreateResponse,
    type AdapterRetrieveResponse as AdapterRetrieveResponse,
    type AdapterUpdateResponse as AdapterUpdateResponse,
    type AdapterListResponse as AdapterListResponse,
    type AdapterDeleteResponse as AdapterDeleteResponse,
    type AdapterListResponsesCursorPagination as AdapterListResponsesCursorPagination,
    type AdapterCreateParams as AdapterCreateParams,
    type AdapterRetrieveParams as AdapterRetrieveParams,
    type AdapterUpdateParams as AdapterUpdateParams,
    type AdapterListParams as AdapterListParams,
    type AdapterDeleteParams as AdapterDeleteParams,
  };

  export {
    Deployments as Deployments,
    type DeploymentDeleteResponse as DeploymentDeleteResponse,
    type DeploymentCreateParams as DeploymentCreateParams,
    type DeploymentRetrieveParams as DeploymentRetrieveParams,
    type DeploymentUpdateParams as DeploymentUpdateParams,
    type DeploymentListParams as DeploymentListParams,
    type DeploymentDeleteParams as DeploymentDeleteParams,
  };
}
