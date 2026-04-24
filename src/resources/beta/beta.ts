// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ClustersAPI from './clusters/clusters';
import { Cluster, ClusterCreateParams, ClusterDeleteResponse, ClusterListRegionsResponse, ClusterListResponse, ClusterUpdateParams, Clusters } from './clusters/clusters';
import * as JigAPI from './jig/jig';
import { Deployment, DeploymentLogs, Jig, JigDeployParams, JigDestroyResponse, JigListResponse, JigRetrieveLogsParams, JigUpdateParams } from './jig/jig';

export class Beta extends APIResource {
  jig: JigAPI.Jig = new JigAPI.Jig(this._client);
  clusters: ClustersAPI.Clusters = new ClustersAPI.Clusters(this._client);
}

Beta.Jig = Jig;
Beta.Clusters = Clusters;

export declare namespace Beta {
  export {
    Jig as Jig,
    type Deployment as Deployment,
    type DeploymentLogs as DeploymentLogs,
    type JigListResponse as JigListResponse,
    type JigDestroyResponse as JigDestroyResponse,
    type JigUpdateParams as JigUpdateParams,
    type JigDeployParams as JigDeployParams,
    type JigRetrieveLogsParams as JigRetrieveLogsParams
  };

  export {
    Clusters as Clusters,
    type Cluster as Cluster,
    type ClusterListResponse as ClusterListResponse,
    type ClusterDeleteResponse as ClusterDeleteResponse,
    type ClusterListRegionsResponse as ClusterListRegionsResponse,
    type ClusterCreateParams as ClusterCreateParams,
    type ClusterUpdateParams as ClusterUpdateParams
  };
}
