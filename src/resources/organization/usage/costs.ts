// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as UsageAPI from './usage';
import { BillingUsageWindowsCursorPagination } from './usage';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';

export class BaseCosts extends APIResource {
  static override readonly _key: readonly ['organization', 'usage', 'costs'] = Object.freeze([
    'organization',
    'usage',
    'costs',
  ] as const);

  /**
   * Returns an organization's billing usage for a month as cost-annotated line items
   * grouped into time windows. Finalized windows are returned through the end of
   * yesterday at daily granularity, or the last completed hour at hourly granularity
   * (UTC).
   */
  list(
    query: CostListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BillingUsageWindowsCursorPagination, UsageAPI.BillingUsageWindow> {
    return this._client.getAPIList('/v1/billing/usage', CursorPagination<UsageAPI.BillingUsageWindow>, {
      query,
      ...options,
    });
  }
}
export class Costs extends BaseCosts {}

export interface CostListParams extends CursorPaginationParams {
  /**
   * Time window size for rows. 'hour' returns ~24x more rows than 'day'.
   */
  granularity?: 'day' | 'hour';

  /**
   * Billing month in YYYY-MM format. Defaults to the current month, which returns
   * data through yesterday (daily) or the last completed hour (hourly).
   */
  month?: string;

  /**
   * Organization to report on. Usage is always reported for the organization that
   * owns the API key, so this is optional; supplying an ID that is not that
   * organization returns 403.
   */
  organization_id?: string;
}

export declare namespace Costs {
  export { type CostListParams as CostListParams };
}

export { type BillingUsageWindowsCursorPagination };
