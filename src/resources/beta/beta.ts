// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JigAPI from './jig/jig';
import {
  BaseJig,
  ContainerDeploymentStatus,
  Deployment,
  DeploymentLogs,
  DeploymentRevision,
  DeploymentRevisionEvent,
  DeploymentRevisionEventList,
  Jig,
  JigDeployParams,
  JigDestroyResponse,
  JigListResponse,
  JigListRevisionsParams,
  JigRetrieveLogsParams,
  JigRetrieveRevisionParams,
  JigRollbackParams,
  JigUpdateParams,
} from './jig/jig';

export class BaseBeta extends APIResource {
  static override readonly _key: readonly ['beta'] = Object.freeze(['beta'] as const);
}
export class Beta extends BaseBeta {
  jig: JigAPI.Jig = new JigAPI.Jig(this._client);
}

Beta.Jig = Jig;
Beta.BaseJig = BaseJig;

export declare namespace Beta {
  export {
    Jig as Jig,
    BaseJig as BaseJig,
    type ContainerDeploymentStatus as ContainerDeploymentStatus,
    type Deployment as Deployment,
    type DeploymentLogs as DeploymentLogs,
    type DeploymentRevision as DeploymentRevision,
    type DeploymentRevisionEvent as DeploymentRevisionEvent,
    type DeploymentRevisionEventList as DeploymentRevisionEventList,
    type JigListResponse as JigListResponse,
    type JigDestroyResponse as JigDestroyResponse,
    type JigUpdateParams as JigUpdateParams,
    type JigDeployParams as JigDeployParams,
    type JigListRevisionsParams as JigListRevisionsParams,
    type JigRetrieveLogsParams as JigRetrieveLogsParams,
    type JigRetrieveRevisionParams as JigRetrieveRevisionParams,
    type JigRollbackParams as JigRollbackParams,
  };
}
