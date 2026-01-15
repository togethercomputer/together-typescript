// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ClustersAPI from './clusters/clusters';
import {
  Cluster,
  ClusterCreateParams,
  ClusterDeleteResponse,
  ClusterListRegionsResponse,
  ClusterListResponse,
  ClusterUpdateParams,
  Clusters,
} from './clusters/clusters';

export class Beta extends APIResource {
  clusters: ClustersAPI.Clusters = new ClustersAPI.Clusters(this._client);
}

Beta.Clusters = Clusters;

export declare namespace Beta {
  export {
    Clusters as Clusters,
    type Cluster as Cluster,
    type ClusterListResponse as ClusterListResponse,
    type ClusterDeleteResponse as ClusterDeleteResponse,
    type ClusterListRegionsResponse as ClusterListRegionsResponse,
    type ClusterCreateParams as ClusterCreateParams,
    type ClusterUpdateParams as ClusterUpdateParams,
  };
}
