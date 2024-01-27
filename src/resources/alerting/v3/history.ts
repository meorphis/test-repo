// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as HistoryAPI from 'cloudflare/resources/alerting/v3/history';
import { Page } from 'cloudflare/pagination';

export class History extends APIResource {
  /**
   * Gets a list of history records for notifications sent to an account. The records
   * are displayed for last `x` number of days based on the zone plan (free = 30, pro
   * = 30, biz = 30, ent = 90).
   */
  list(
    accountId: string,
    query?: HistoryListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<HistoryListResponsesPage, HistoryListResponse>;
  list(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<HistoryListResponsesPage, HistoryListResponse>;
  list(
    accountId: string,
    query: HistoryListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<HistoryListResponsesPage, HistoryListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountId, {}, query);
    }
    return this._client.getAPIList(`/accounts/${accountId}/alerting/v3/history`, HistoryListResponsesPage, {
      query,
      ...options,
    });
  }
}

export class HistoryListResponsesPage extends Page<HistoryListResponse> {}

export interface HistoryListResponse {
  /**
   * UUID
   */
  id?: string;

  /**
   * Message body included in the notification sent.
   */
  alert_body?: string;

  /**
   * Type of notification that has been dispatched.
   */
  alert_type?: string;

  /**
   * Description of the notification policy (if present).
   */
  description?: string;

  /**
   * The mechanism to which the notification has been dispatched.
   */
  mechanism?: string;

  /**
   * The type of mechanism to which the notification has been dispatched. This can be
   * email/pagerduty/webhook based on the mechanism configured.
   */
  mechanism_type?: 'email' | 'pagerduty' | 'webhook';

  /**
   * Name of the policy.
   */
  name?: string;

  /**
   * The unique identifier of a notification policy
   */
  policy_id?: string;

  /**
   * Timestamp of when the notification was dispatched in ISO 8601 format.
   */
  sent?: string;
}

export interface HistoryListParams {
  /**
   * Limit the returned results to history records older than the specified date.
   * This must be a timestamp that conforms to RFC3339.
   */
  before?: string;

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Number of items per page.
   */
  per_page?: number;

  /**
   * Limit the returned results to history records newer than the specified date.
   * This must be a timestamp that conforms to RFC3339.
   */
  since?: string;
}

export namespace History {
  export import HistoryListResponse = HistoryAPI.HistoryListResponse;
  export import HistoryListResponsesPage = HistoryAPI.HistoryListResponsesPage;
  export import HistoryListParams = HistoryAPI.HistoryListParams;
}
