// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as UsageAPI from './usage';
import { BillingUsageLineItem, BillingUsageReport, BillingUsageWindow, Usage } from './usage';

export class Organization extends APIResource {
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
}

Organization.Usage = Usage;

export declare namespace Organization {
  export {
    Usage as Usage,
    type BillingUsageLineItem as BillingUsageLineItem,
    type BillingUsageReport as BillingUsageReport,
    type BillingUsageWindow as BillingUsageWindow,
  };
}
