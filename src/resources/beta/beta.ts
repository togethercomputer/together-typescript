// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ClustersAPI from './clusters/clusters';
import {
  Cluster,
  ClusterCreateParams,
  ClusterDeleteResponse,
  ClusterListParams,
  ClusterListRegionsResponse,
  ClusterListResponse,
  ClusterUpdateParams,
  Clusters,
} from './clusters/clusters';
import * as EndpointsAPI from './endpoints/endpoints';
import {
  AbMember,
  DeploymentAutoscaling,
  DeploymentMetrics,
  DeploymentPlacementConfig,
  DeploymentStatus,
  Endpoint,
  EndpointAnalyticsParams,
  EndpointAnalyticsResponse,
  EndpointCreateParams,
  EndpointDeleteParams,
  EndpointDeleteResponse,
  EndpointDeployment,
  EndpointDeploymentSummary,
  EndpointListEventsParams,
  EndpointListEventsResponse,
  EndpointListEventsResponsesCursorPagination,
  EndpointListOrgScopedParams,
  EndpointListParams,
  EndpointRetrieveParams,
  EndpointTrafficSplitEntry,
  EndpointUpdateParams,
  Endpoints,
  EndpointsCursorPagination,
  ErrorMetrics,
  LatencyMetrics,
  MetricsTimeRange,
  RequestMetrics,
  ResourceUtilization,
  RuntimeInfo,
  ScalingMetric,
  ScalingPolicy,
  ScalingRules,
  ShadowAdaptiveKeyBasedSampling,
  ShadowAdaptiveKeyBasedSamplingResponse,
  ShadowAdaptiveUniformSampling,
  ShadowAdaptiveUniformSamplingResponse,
  ShadowEndpointSource,
  ShadowEndpointSourceResponse,
  ShadowKeyBasedSampling,
  ShadowKeyBasedSamplingResponse,
  ShadowSource,
  ShadowSourceResponse,
  ShadowUniformSampling,
  ShadowUniformSamplingResponse,
  ThroughputMetrics,
  TimeSeriesDataPoint,
  TokenMetrics,
} from './endpoints/endpoints';
import * as JigAPI from './jig/jig';
import {
  ContainerDeploymentStatus,
  Deployment,
  DeploymentLogs,
  Jig,
  JigDeployParams,
  JigDestroyResponse,
  JigListResponse,
  JigRetrieveLogsParams,
  JigUpdateParams,
} from './jig/jig';
import * as ModelsAPI from './models/models';
import {
  Model,
  ModelCreateParams,
  ModelDeleteParams,
  ModelDeleteResponse,
  ModelDtypeCount,
  ModelListFilesParams,
  ModelListFilesResponse,
  ModelListOrgScopedParams,
  ModelListParams,
  ModelListRevisionsParams,
  ModelListRevisionsResponse,
  ModelListSupportedParams,
  ModelParameters,
  ModelRetrieveParams,
  ModelUpdateParams,
  ModelWeights,
  Models,
  ModelsCursorPagination,
  SupportedModel,
  SupportedModelDeploymentProfile,
  SupportedModelPerformanceBenchmarks,
  SupportedModelsCursorPagination,
} from './models/models';
import * as OrganizationAPI from './organization/organization';
import { Organization } from './organization/organization';

export class Beta extends APIResource {
  organization: OrganizationAPI.Organization = new OrganizationAPI.Organization(this._client);
  endpoints: EndpointsAPI.Endpoints = new EndpointsAPI.Endpoints(this._client);
  models: ModelsAPI.Models = new ModelsAPI.Models(this._client);
  jig: JigAPI.Jig = new JigAPI.Jig(this._client);
  clusters: ClustersAPI.Clusters = new ClustersAPI.Clusters(this._client);
}

Beta.Organization = Organization;
Beta.Endpoints = Endpoints;
Beta.Models = Models;
Beta.Jig = Jig;
Beta.Clusters = Clusters;

export declare namespace Beta {
  export { Organization as Organization };

  export {
    Endpoints as Endpoints,
    type AbMember as AbMember,
    type DeploymentAutoscaling as DeploymentAutoscaling,
    type DeploymentMetrics as DeploymentMetrics,
    type DeploymentPlacementConfig as DeploymentPlacementConfig,
    type DeploymentStatus as DeploymentStatus,
    type Endpoint as Endpoint,
    type EndpointDeployment as EndpointDeployment,
    type EndpointDeploymentSummary as EndpointDeploymentSummary,
    type EndpointTrafficSplitEntry as EndpointTrafficSplitEntry,
    type ErrorMetrics as ErrorMetrics,
    type LatencyMetrics as LatencyMetrics,
    type MetricsTimeRange as MetricsTimeRange,
    type RequestMetrics as RequestMetrics,
    type ResourceUtilization as ResourceUtilization,
    type RuntimeInfo as RuntimeInfo,
    type ScalingMetric as ScalingMetric,
    type ScalingPolicy as ScalingPolicy,
    type ScalingRules as ScalingRules,
    type ShadowAdaptiveKeyBasedSampling as ShadowAdaptiveKeyBasedSampling,
    type ShadowAdaptiveKeyBasedSamplingResponse as ShadowAdaptiveKeyBasedSamplingResponse,
    type ShadowAdaptiveUniformSampling as ShadowAdaptiveUniformSampling,
    type ShadowAdaptiveUniformSamplingResponse as ShadowAdaptiveUniformSamplingResponse,
    type ShadowEndpointSource as ShadowEndpointSource,
    type ShadowEndpointSourceResponse as ShadowEndpointSourceResponse,
    type ShadowKeyBasedSampling as ShadowKeyBasedSampling,
    type ShadowKeyBasedSamplingResponse as ShadowKeyBasedSamplingResponse,
    type ShadowSource as ShadowSource,
    type ShadowSourceResponse as ShadowSourceResponse,
    type ShadowUniformSampling as ShadowUniformSampling,
    type ShadowUniformSamplingResponse as ShadowUniformSamplingResponse,
    type ThroughputMetrics as ThroughputMetrics,
    type TimeSeriesDataPoint as TimeSeriesDataPoint,
    type TokenMetrics as TokenMetrics,
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
    Models as Models,
    type Model as Model,
    type ModelDtypeCount as ModelDtypeCount,
    type ModelParameters as ModelParameters,
    type ModelWeights as ModelWeights,
    type SupportedModel as SupportedModel,
    type SupportedModelDeploymentProfile as SupportedModelDeploymentProfile,
    type SupportedModelPerformanceBenchmarks as SupportedModelPerformanceBenchmarks,
    type ModelDeleteResponse as ModelDeleteResponse,
    type ModelListFilesResponse as ModelListFilesResponse,
    type ModelListRevisionsResponse as ModelListRevisionsResponse,
    type ModelsCursorPagination as ModelsCursorPagination,
    type SupportedModelsCursorPagination as SupportedModelsCursorPagination,
    type ModelCreateParams as ModelCreateParams,
    type ModelRetrieveParams as ModelRetrieveParams,
    type ModelUpdateParams as ModelUpdateParams,
    type ModelListParams as ModelListParams,
    type ModelDeleteParams as ModelDeleteParams,
    type ModelListFilesParams as ModelListFilesParams,
    type ModelListOrgScopedParams as ModelListOrgScopedParams,
    type ModelListRevisionsParams as ModelListRevisionsParams,
    type ModelListSupportedParams as ModelListSupportedParams,
  };

  export {
    Jig as Jig,
    type ContainerDeploymentStatus as ContainerDeploymentStatus,
    type Deployment as Deployment,
    type DeploymentLogs as DeploymentLogs,
    type JigListResponse as JigListResponse,
    type JigDestroyResponse as JigDestroyResponse,
    type JigUpdateParams as JigUpdateParams,
    type JigDeployParams as JigDeployParams,
    type JigRetrieveLogsParams as JigRetrieveLogsParams,
  };

  export {
    Clusters as Clusters,
    type Cluster as Cluster,
    type ClusterListResponse as ClusterListResponse,
    type ClusterDeleteResponse as ClusterDeleteResponse,
    type ClusterListRegionsResponse as ClusterListRegionsResponse,
    type ClusterCreateParams as ClusterCreateParams,
    type ClusterUpdateParams as ClusterUpdateParams,
    type ClusterListParams as ClusterListParams,
  };
}
