// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class Usage extends APIResource {}

export interface BillingUsageLineItem {
  /**
   * Resource identifiers for attribution, varying by product.
   */
  attributes: { [key: string]: string };

  /**
   * Total cost for this line item in USD as a decimal string.
   */
  cost: string;

  /**
   * Rate-determining dimensions (varies by product). Passthrough from Metronome
   * pricing group values.
   */
  pricing_dimensions: { [key: string]: string };

  /**
   * Metronome product name (e.g. 'Serverless Inference - Input Tokens').
   */
  product_name: string;

  /**
   * Total usage for the window in the product's native unit (GPU-hours, tokens, ...)
   * as a decimal string.
   */
  quantity: string;

  /**
   * Per-unit price in USD as a decimal string.
   */
  unit_price: string;
}

export interface BillingUsageReport {
  /**
   * Billing month (YYYY-MM).
   */
  billing_period: string;

  currency: 'USD';

  /**
   * Time windows containing usage line items.
   */
  data: Array<BillingUsageWindow>;

  /**
   * Start of the earliest time window with usage in the month (UTC, ISO 8601); null
   * when the month has no usage.
   */
  earliest_window_start: string | null;

  /**
   * Exclusive end of the latest time window with usage in the month (UTC, ISO 8601);
   * null when the month has no usage. Describes the whole month, not the current
   * page.
   */
  latest_window_end: string | null;

  /**
   * Opaque cursor for the next page; null when this is the last page.
   */
  next_cursor: string | null;

  object: 'list';

  /**
   * ID of the organization the report belongs to.
   */
  organization_id: string;
}

export interface BillingUsageWindow {
  /**
   * Day this window covers (UTC, YYYY-MM-DD). Present for both granularities.
   */
  date: string;

  /**
   * Window end (UTC, ISO 8601), exclusive. Start of the next day (daily) or hour
   * (hourly).
   */
  end_time: string;

  /**
   * Usage line items in this time window.
   */
  line_items: Array<BillingUsageLineItem>;

  /**
   * Window start (UTC, ISO 8601). Start of the day (daily) or hour (hourly).
   */
  start_time: string;
}

export declare namespace Usage {
  export {
    type BillingUsageLineItem as BillingUsageLineItem,
    type BillingUsageReport as BillingUsageReport,
    type BillingUsageWindow as BillingUsageWindow,
  };
}
