// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as HistoriesAPI from 'cloudflare/resources/user/billings/histories';
import { Page } from 'cloudflare/pagination';

export class Histories extends APIResource {
  /**
   * Accesses your billing history object.
   */
  userBillingHistoryBillingHistoryDetails(
    query?: HistoryUserBillingHistoryBillingHistoryDetailsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    HistoryUserBillingHistoryBillingHistoryDetailsResponsesPage,
    HistoryUserBillingHistoryBillingHistoryDetailsResponse
  >;
  userBillingHistoryBillingHistoryDetails(
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    HistoryUserBillingHistoryBillingHistoryDetailsResponsesPage,
    HistoryUserBillingHistoryBillingHistoryDetailsResponse
  >;
  userBillingHistoryBillingHistoryDetails(
    query: HistoryUserBillingHistoryBillingHistoryDetailsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    HistoryUserBillingHistoryBillingHistoryDetailsResponsesPage,
    HistoryUserBillingHistoryBillingHistoryDetailsResponse
  > {
    if (isRequestOptions(query)) {
      return this.userBillingHistoryBillingHistoryDetails({}, query);
    }
    return this._client.getAPIList(
      '/user/billing/history',
      HistoryUserBillingHistoryBillingHistoryDetailsResponsesPage,
      { query, ...options },
    );
  }
}

export class HistoryUserBillingHistoryBillingHistoryDetailsResponsesPage extends Page<HistoryUserBillingHistoryBillingHistoryDetailsResponse> {}

export interface HistoryUserBillingHistoryBillingHistoryDetailsResponse {
  /**
   * Billing item identifier tag.
   */
  id: string;

  /**
   * The billing item action.
   */
  action: string;

  /**
   * The amount associated with this billing item.
   */
  amount: number;

  /**
   * The monetary unit in which pricing information is displayed.
   */
  currency: string;

  /**
   * The billing item description.
   */
  description: string;

  /**
   * When the billing item was created.
   */
  occurred_at: string;

  /**
   * The billing item type.
   */
  type: string;

  zone: HistoryUserBillingHistoryBillingHistoryDetailsResponse.Zone;
}

export namespace HistoryUserBillingHistoryBillingHistoryDetailsResponse {
  export interface Zone {
    name?: unknown;
  }
}

export interface HistoryUserBillingHistoryBillingHistoryDetailsParams {
  /**
   * Field to order billing history by.
   */
  order?: 'type' | 'occured_at' | 'action';

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Number of items per page.
   */
  per_page?: number;
}

export namespace Histories {
  export import HistoryUserBillingHistoryBillingHistoryDetailsResponse = HistoriesAPI.HistoryUserBillingHistoryBillingHistoryDetailsResponse;
  export import HistoryUserBillingHistoryBillingHistoryDetailsResponsesPage = HistoriesAPI.HistoryUserBillingHistoryBillingHistoryDetailsResponsesPage;
  export import HistoryUserBillingHistoryBillingHistoryDetailsParams = HistoriesAPI.HistoryUserBillingHistoryBillingHistoryDetailsParams;
}
