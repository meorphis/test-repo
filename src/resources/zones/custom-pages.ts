// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CustomPagesAPI from 'cloudflare/resources/zones/custom-pages';

export class CustomPages extends APIResource {
  /**
   * Fetches the details of a custom page.
   */
  retrieve(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomPageRetrieveResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/custom_pages/${identifier}`, options);
  }

  /**
   * Updates the configuration of an existing custom page.
   */
  update(
    zoneIdentifier: string,
    identifier: string,
    body: CustomPageUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomPageUpdateResponse> {
    return this._client.put(`/zones/${zoneIdentifier}/custom_pages/${identifier}`, { body, ...options });
  }

  /**
   * Fetches all the custom pages at the zone level.
   */
  customPagesForAZoneListCustomPages(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomPageCustomPagesForAZoneListCustomPagesResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/custom_pages`, options);
  }
}

export interface CustomPageRetrieveResponse {
  errors?: Array<CustomPageRetrieveResponse.Error>;

  messages?: Array<CustomPageRetrieveResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CustomPageRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface CustomPageUpdateResponse {
  errors?: Array<CustomPageUpdateResponse.Error>;

  messages?: Array<CustomPageUpdateResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CustomPageUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface CustomPageCustomPagesForAZoneListCustomPagesResponse {
  errors?: Array<CustomPageCustomPagesForAZoneListCustomPagesResponse.Error>;

  messages?: Array<CustomPageCustomPagesForAZoneListCustomPagesResponse.Message>;

  result?: Array<unknown>;

  result_info?: CustomPageCustomPagesForAZoneListCustomPagesResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CustomPageCustomPagesForAZoneListCustomPagesResponse {
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

export interface CustomPageUpdateParams {
  /**
   * The custom page state.
   */
  state: 'default' | 'customized';

  /**
   * The URL associated with the custom page.
   */
  url: string;
}

export namespace CustomPages {
  export import CustomPageRetrieveResponse = CustomPagesAPI.CustomPageRetrieveResponse;
  export import CustomPageUpdateResponse = CustomPagesAPI.CustomPageUpdateResponse;
  export import CustomPageCustomPagesForAZoneListCustomPagesResponse = CustomPagesAPI.CustomPageCustomPagesForAZoneListCustomPagesResponse;
  export import CustomPageUpdateParams = CustomPagesAPI.CustomPageUpdateParams;
}
