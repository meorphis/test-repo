// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AvailableAlertsAPI from 'cloudflare/resources/accounts/alerting/v3/available-alerts';

export class AvailableAlerts extends APIResource {
  /**
   * Gets a list of all alert types for which an account is eligible.
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<AvailableAlertListResponse> {
    return this._client.get(`/accounts/${accountId}/alerting/v3/available_alerts`, options);
  }
}

export interface AvailableAlertListResponse {
  errors?: Array<AvailableAlertListResponse.Error>;

  messages?: Array<AvailableAlertListResponse.Message>;

  result?: unknown;

  result_info?: AvailableAlertListResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AvailableAlertListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface ResultInfo {
    /**
     * Total number of results for the requested service
     */
    count?: number;

    /**
     * Current page within paginated list of results
     */
    page?: number;

    /**
     * Number of results per page of results
     */
    per_page?: number;

    /**
     * Total results available without any search parameters
     */
    total_count?: number;
  }
}

export namespace AvailableAlerts {
  export import AvailableAlertListResponse = AvailableAlertsAPI.AvailableAlertListResponse;
}
