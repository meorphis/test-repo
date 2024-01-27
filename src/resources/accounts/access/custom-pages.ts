// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CustomPagesAPI from 'cloudflare/resources/accounts/access/custom-pages';

export class CustomPages extends APIResource {
  /**
   * Create a custom page
   */
  create(
    identifier: string,
    body: CustomPageCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomPageCreateResponse> {
    return this._client.post(`/accounts/${identifier}/access/custom_pages`, { body, ...options });
  }

  /**
   * List custom pages
   */
  list(identifier: string, options?: Core.RequestOptions): Core.APIPromise<CustomPageListResponse> {
    return this._client.get(`/accounts/${identifier}/access/custom_pages`, options);
  }

  /**
   * Delete a custom page
   */
  delete(
    identifier: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomPageDeleteResponse> {
    return this._client.delete(`/accounts/${identifier}/access/custom_pages/${uuid}`, options);
  }

  /**
   * Fetches a custom page and also returns its HTML.
   */
  retrieveCustomPage(
    identifier: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomPageRetrieveCustomPageResponse> {
    return this._client.get(`/accounts/${identifier}/access/custom_pages/${uuid}`, options);
  }

  /**
   * Update a custom page
   */
  updateCustomPage(
    identifier: string,
    uuid: string,
    body: CustomPageUpdateCustomPageParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomPageUpdateCustomPageResponse> {
    return this._client.put(`/accounts/${identifier}/access/custom_pages/${uuid}`, { body, ...options });
  }
}

export interface CustomPageCreateResponse {
  errors?: Array<CustomPageCreateResponse.Error>;

  messages?: Array<CustomPageCreateResponse.Message>;

  result?: CustomPageCreateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CustomPageCreateResponse {
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
     * Custom page name.
     */
    name: string;

    /**
     * Custom page type.
     */
    type: 'identity_denied' | 'forbidden';

    /**
     * Number of apps the custom page is assigned to.
     */
    app_count?: number;

    created_at?: string;

    /**
     * UUID
     */
    uid?: string;

    updated_at?: string;
  }
}

export interface CustomPageListResponse {
  errors?: Array<CustomPageListResponse.Error>;

  messages?: Array<CustomPageListResponse.Message>;

  result?: Array<CustomPageListResponse.Result>;

  result_info?: CustomPageListResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CustomPageListResponse {
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
     * Custom page name.
     */
    name: string;

    /**
     * Custom page type.
     */
    type: 'identity_denied' | 'forbidden';

    /**
     * Number of apps the custom page is assigned to.
     */
    app_count?: number;

    created_at?: string;

    /**
     * UUID
     */
    uid?: string;

    updated_at?: string;
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

export interface CustomPageDeleteResponse {
  errors?: Array<CustomPageDeleteResponse.Error>;

  messages?: Array<CustomPageDeleteResponse.Message>;

  result?: CustomPageDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CustomPageDeleteResponse {
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
     * UUID
     */
    id?: string;
  }
}

export interface CustomPageRetrieveCustomPageResponse {
  errors?: Array<CustomPageRetrieveCustomPageResponse.Error>;

  messages?: Array<CustomPageRetrieveCustomPageResponse.Message>;

  result?: CustomPageRetrieveCustomPageResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CustomPageRetrieveCustomPageResponse {
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
     * Custom page HTML.
     */
    custom_html: string;

    /**
     * Custom page name.
     */
    name: string;

    /**
     * Custom page type.
     */
    type: 'identity_denied' | 'forbidden';

    /**
     * Number of apps the custom page is assigned to.
     */
    app_count?: number;

    created_at?: string;

    /**
     * UUID
     */
    uid?: string;

    updated_at?: string;
  }
}

export interface CustomPageUpdateCustomPageResponse {
  errors?: Array<CustomPageUpdateCustomPageResponse.Error>;

  messages?: Array<CustomPageUpdateCustomPageResponse.Message>;

  result?: CustomPageUpdateCustomPageResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CustomPageUpdateCustomPageResponse {
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
     * Custom page name.
     */
    name: string;

    /**
     * Custom page type.
     */
    type: 'identity_denied' | 'forbidden';

    /**
     * Number of apps the custom page is assigned to.
     */
    app_count?: number;

    created_at?: string;

    /**
     * UUID
     */
    uid?: string;

    updated_at?: string;
  }
}

export interface CustomPageCreateParams {
  /**
   * Custom page HTML.
   */
  custom_html: string;

  /**
   * Custom page name.
   */
  name: string;

  /**
   * Custom page type.
   */
  type: 'identity_denied' | 'forbidden';

  /**
   * Number of apps the custom page is assigned to.
   */
  app_count?: number;
}

export interface CustomPageUpdateCustomPageParams {
  /**
   * Custom page HTML.
   */
  custom_html: string;

  /**
   * Custom page name.
   */
  name: string;

  /**
   * Custom page type.
   */
  type: 'identity_denied' | 'forbidden';

  /**
   * Number of apps the custom page is assigned to.
   */
  app_count?: number;
}

export namespace CustomPages {
  export import CustomPageCreateResponse = CustomPagesAPI.CustomPageCreateResponse;
  export import CustomPageListResponse = CustomPagesAPI.CustomPageListResponse;
  export import CustomPageDeleteResponse = CustomPagesAPI.CustomPageDeleteResponse;
  export import CustomPageRetrieveCustomPageResponse = CustomPagesAPI.CustomPageRetrieveCustomPageResponse;
  export import CustomPageUpdateCustomPageResponse = CustomPagesAPI.CustomPageUpdateCustomPageResponse;
  export import CustomPageCreateParams = CustomPagesAPI.CustomPageCreateParams;
  export import CustomPageUpdateCustomPageParams = CustomPagesAPI.CustomPageUpdateCustomPageParams;
}
