// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import { type Response } from 'cloudflare/_shims/index';
import * as SnippetsAPI from 'cloudflare/resources/zones/snippets';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class Snippets extends APIResource {
  /**
   * Snippet
   */
  retrieve(
    zoneIdentifier: string,
    snippetName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SnippetRetrieveResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/snippets/${snippetName}`, options);
  }

  /**
   * Put Snippet
   */
  update(
    zoneIdentifier: string,
    snippetName: string,
    body?: SnippetUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SnippetUpdateResponse>;
  update(
    zoneIdentifier: string,
    snippetName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SnippetUpdateResponse>;
  update(
    zoneIdentifier: string,
    snippetName: string,
    body: SnippetUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SnippetUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(zoneIdentifier, snippetName, {}, body);
    }
    return this._client.put(
      `/zones/${zoneIdentifier}/snippets/${snippetName}`,
      multipartFormRequestOptions({ body, ...options }),
    );
  }

  /**
   * All Snippets
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<SnippetListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/snippets`, options);
  }

  /**
   * Delete Snippet
   */
  delete(
    zoneIdentifier: string,
    snippetName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SnippetDeleteResponse> {
    return this._client.delete(`/zones/${zoneIdentifier}/snippets/${snippetName}`, options);
  }

  /**
   * Snippet Content
   */
  content(
    zoneIdentifier: string,
    snippetName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.get(`/zones/${zoneIdentifier}/snippets/${snippetName}/content`, {
      ...options,
      __binaryResponse: true,
    });
  }
}

export interface SnippetRetrieveResponse {
  errors?: Array<SnippetRetrieveResponse.Error>;

  messages?: Array<SnippetRetrieveResponse.Message>;

  /**
   * Snippet Information
   */
  result?: SnippetRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SnippetRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Snippet Information
   */
  export interface Result {
    /**
     * Creation time of the snippet
     */
    created_on?: string;

    /**
     * Modification time of the snippet
     */
    modified_on?: string;

    /**
     * Snippet identifying name
     */
    snippet_name?: string;
  }
}

export interface SnippetUpdateResponse {
  errors?: Array<SnippetUpdateResponse.Error>;

  messages?: Array<SnippetUpdateResponse.Message>;

  /**
   * Snippet Information
   */
  result?: SnippetUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SnippetUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Snippet Information
   */
  export interface Result {
    /**
     * Creation time of the snippet
     */
    created_on?: string;

    /**
     * Modification time of the snippet
     */
    modified_on?: string;

    /**
     * Snippet identifying name
     */
    snippet_name?: string;
  }
}

export interface SnippetListResponse {
  errors?: Array<SnippetListResponse.Error>;

  messages?: Array<SnippetListResponse.Message>;

  /**
   * List of all zone snippets
   */
  result?: Array<SnippetListResponse.Result>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SnippetListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Snippet Information
   */
  export interface Result {
    /**
     * Creation time of the snippet
     */
    created_on?: string;

    /**
     * Modification time of the snippet
     */
    modified_on?: string;

    /**
     * Snippet identifying name
     */
    snippet_name?: string;
  }
}

export interface SnippetDeleteResponse {
  errors: Array<SnippetDeleteResponse.Error>;

  messages: Array<SnippetDeleteResponse.Message>;

  result: unknown | Array<unknown> | string;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export namespace SnippetDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface SnippetUpdateParams {
  /**
   * Content files of uploaded snippet
   */
  files?: string;

  metadata?: SnippetUpdateParams.Metadata;
}

export namespace SnippetUpdateParams {
  export interface Metadata {
    /**
     * Main module name of uploaded snippet
     */
    main_module?: string;
  }
}

export namespace Snippets {
  export import SnippetRetrieveResponse = SnippetsAPI.SnippetRetrieveResponse;
  export import SnippetUpdateResponse = SnippetsAPI.SnippetUpdateResponse;
  export import SnippetListResponse = SnippetsAPI.SnippetListResponse;
  export import SnippetDeleteResponse = SnippetsAPI.SnippetDeleteResponse;
  export import SnippetUpdateParams = SnippetsAPI.SnippetUpdateParams;
}
