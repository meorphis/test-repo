// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TsigsAPI from 'cloudflare/resources/accounts/secondary-dns/tsigs';

export class Tsigs extends APIResource {
  /**
   * Get TSIG.
   */
  retrieve(
    accountIdentifier: unknown,
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TsigRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/secondary_dns/tsigs/${identifier}`, options);
  }

  /**
   * Modify TSIG.
   */
  update(
    accountIdentifier: unknown,
    identifier: unknown,
    body: TsigUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TsigUpdateResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/secondary_dns/tsigs/${identifier}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete TSIG.
   */
  delete(
    accountIdentifier: unknown,
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TsigDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/secondary_dns/tsigs/${identifier}`, options);
  }

  /**
   * Create TSIG.
   */
  secondaryDNSTsigCreateTsig(
    accountIdentifier: unknown,
    body: TsigSecondaryDNSTsigCreateTsigParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TsigSecondaryDNSTsigCreateTsigResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/secondary_dns/tsigs`, { body, ...options });
  }

  /**
   * List TSIGs.
   */
  secondaryDNSTsigListTsiGs(
    accountIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TsigSecondaryDNSTsigListTsiGsResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/secondary_dns/tsigs`, options);
  }
}

export interface TsigRetrieveResponse {
  errors?: Array<TsigRetrieveResponse.Error>;

  messages?: Array<TsigRetrieveResponse.Message>;

  result?: TsigRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TsigRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    id: unknown;

    /**
     * TSIG algorithm.
     */
    algo: string;

    /**
     * TSIG key name.
     */
    name: string;

    /**
     * TSIG secret.
     */
    secret: string;
  }
}

export interface TsigUpdateResponse {
  errors?: Array<TsigUpdateResponse.Error>;

  messages?: Array<TsigUpdateResponse.Message>;

  result?: TsigUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TsigUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    id: unknown;

    /**
     * TSIG algorithm.
     */
    algo: string;

    /**
     * TSIG key name.
     */
    name: string;

    /**
     * TSIG secret.
     */
    secret: string;
  }
}

export interface TsigDeleteResponse {
  errors?: Array<TsigDeleteResponse.Error>;

  messages?: Array<TsigDeleteResponse.Message>;

  result?: TsigDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TsigDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    id?: unknown;
  }
}

export interface TsigSecondaryDNSTsigCreateTsigResponse {
  errors?: Array<TsigSecondaryDNSTsigCreateTsigResponse.Error>;

  messages?: Array<TsigSecondaryDNSTsigCreateTsigResponse.Message>;

  result?: TsigSecondaryDNSTsigCreateTsigResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TsigSecondaryDNSTsigCreateTsigResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    id: unknown;

    /**
     * TSIG algorithm.
     */
    algo: string;

    /**
     * TSIG key name.
     */
    name: string;

    /**
     * TSIG secret.
     */
    secret: string;
  }
}

export interface TsigSecondaryDNSTsigListTsiGsResponse {
  errors?: Array<TsigSecondaryDNSTsigListTsiGsResponse.Error>;

  messages?: Array<TsigSecondaryDNSTsigListTsiGsResponse.Message>;

  result?: Array<TsigSecondaryDNSTsigListTsiGsResponse.Result>;

  result_info?: TsigSecondaryDNSTsigListTsiGsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TsigSecondaryDNSTsigListTsiGsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    id: unknown;

    /**
     * TSIG algorithm.
     */
    algo: string;

    /**
     * TSIG key name.
     */
    name: string;

    /**
     * TSIG secret.
     */
    secret: string;
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

export interface TsigUpdateParams {
  /**
   * TSIG algorithm.
   */
  algo: string;

  /**
   * TSIG key name.
   */
  name: string;

  /**
   * TSIG secret.
   */
  secret: string;
}

export interface TsigSecondaryDNSTsigCreateTsigParams {
  /**
   * TSIG algorithm.
   */
  algo: string;

  /**
   * TSIG key name.
   */
  name: string;

  /**
   * TSIG secret.
   */
  secret: string;
}

export namespace Tsigs {
  export import TsigRetrieveResponse = TsigsAPI.TsigRetrieveResponse;
  export import TsigUpdateResponse = TsigsAPI.TsigUpdateResponse;
  export import TsigDeleteResponse = TsigsAPI.TsigDeleteResponse;
  export import TsigSecondaryDNSTsigCreateTsigResponse = TsigsAPI.TsigSecondaryDNSTsigCreateTsigResponse;
  export import TsigSecondaryDNSTsigListTsiGsResponse = TsigsAPI.TsigSecondaryDNSTsigListTsiGsResponse;
  export import TsigUpdateParams = TsigsAPI.TsigUpdateParams;
  export import TsigSecondaryDNSTsigCreateTsigParams = TsigsAPI.TsigSecondaryDNSTsigCreateTsigParams;
}
