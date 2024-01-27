// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CategoriesAPI from 'cloudflare/resources/accounts/gateway/categories';

export class Categories extends APIResource {
  /**
   * Fetches a list of all categories.
   */
  zeroTrustGatewayCategoriesListCategories(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryZeroTrustGatewayCategoriesListCategoriesResponse> {
    return this._client.get(`/accounts/${accountId}/gateway/categories`, options);
  }
}

export interface CategoryZeroTrustGatewayCategoriesListCategoriesResponse {
  errors?: Array<CategoryZeroTrustGatewayCategoriesListCategoriesResponse.Error>;

  messages?: Array<CategoryZeroTrustGatewayCategoriesListCategoriesResponse.Message>;

  result?: Array<CategoryZeroTrustGatewayCategoriesListCategoriesResponse.Result>;

  result_info?: CategoryZeroTrustGatewayCategoriesListCategoriesResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CategoryZeroTrustGatewayCategoriesListCategoriesResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * The identifier for this category. There is only one category per ID.
     */
    id?: number;

    /**
     * True if the category is in beta and subject to change.
     */
    beta?: boolean;

    /**
     * Which account types are allowed to create policies based on this category.
     * `blocked` categories are blocked unconditionally for all accounts.
     * `removalPending` categories can be removed from policies but not added.
     * `noBlock` categories cannot be blocked.
     */
    class?: 'free' | 'premium' | 'blocked' | 'removalPending' | 'noBlock';

    /**
     * A short summary of domains in the category.
     */
    description?: string;

    /**
     * The name of the category.
     */
    name?: string;

    /**
     * All subcategories for this category.
     */
    subcategories?: Array<Result.Subcategory>;
  }

  export namespace Result {
    export interface Subcategory {
      /**
       * The identifier for this category. There is only one category per ID.
       */
      id?: number;

      /**
       * True if the category is in beta and subject to change.
       */
      beta?: boolean;

      /**
       * Which account types are allowed to create policies based on this category.
       * `blocked` categories are blocked unconditionally for all accounts.
       * `removalPending` categories can be removed from policies but not added.
       * `noBlock` categories cannot be blocked.
       */
      class?: 'free' | 'premium' | 'blocked' | 'removalPending' | 'noBlock';

      /**
       * A short summary of domains in the category.
       */
      description?: string;

      /**
       * The name of the category.
       */
      name?: string;
    }
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

export namespace Categories {
  export import CategoryZeroTrustGatewayCategoriesListCategoriesResponse = CategoriesAPI.CategoryZeroTrustGatewayCategoriesListCategoriesResponse;
}
