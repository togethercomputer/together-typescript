// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsageAPI from './usage/usage';
import {
  BaseUsage,
  BillingUsageLineItem,
  BillingUsageReport,
  BillingUsageWindow,
  Usage,
} from './usage/usage';

export class BaseOrganization extends APIResource {
  static override readonly _key: readonly ['organization'] = Object.freeze(['organization'] as const);
}
export class Organization extends BaseOrganization {
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
}

Organization.Usage = Usage;
Organization.BaseUsage = BaseUsage;

export declare namespace Organization {
  export {
    Usage as Usage,
    BaseUsage as BaseUsage,
    type BillingUsageLineItem as BillingUsageLineItem,
    type BillingUsageReport as BillingUsageReport,
    type BillingUsageWindow as BillingUsageWindow,
  };
}
