// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DexTestsAPI from 'cloudflare/resources/accounts/devices/dex-tests';

export class DexTests extends APIResource {
  /**
   * Fetch a single DEX test.
   */
  retrieve(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DexTestRetrieveResponse> {
    return this._client.get(`/accounts/${identifier}/devices/dex_tests/${uuid}`, options);
  }

  /**
   * Update a DEX test.
   */
  update(
    identifier: unknown,
    uuid: string,
    body: DexTestUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DexTestUpdateResponse> {
    return this._client.put(`/accounts/${identifier}/devices/dex_tests/${uuid}`, { body, ...options });
  }

  /**
   * Delete a Device DEX test. Returns the remaining device dex tests for the
   * account.
   */
  delete(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DexTestDeleteResponse> {
    return this._client.delete(`/accounts/${identifier}/devices/dex_tests/${uuid}`, options);
  }

  /**
   * Create a DEX test.
   */
  deviceDexTestCreateDeviceDexTest(
    identifier: unknown,
    body: DexTestDeviceDexTestCreateDeviceDexTestParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DexTestDeviceDexTestCreateDeviceDexTestResponse> {
    return this._client.post(`/accounts/${identifier}/devices/dex_tests`, { body, ...options });
  }

  /**
   * Fetch all DEX tests.
   */
  deviceDexTestDetails(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DexTestDeviceDexTestDetailsResponse> {
    return this._client.get(`/accounts/${identifier}/devices/dex_tests`, options);
  }
}

export interface DexTestRetrieveResponse {
  errors?: Array<DexTestRetrieveResponse.Error>;

  messages?: Array<DexTestRetrieveResponse.Message>;

  result?: DexTestRetrieveResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace DexTestRetrieveResponse {
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
     * The configuration object which contains the details for the WARP client to
     * conduct the test.
     */
    data: Result.Data;

    /**
     * Determines whether or not the test is active.
     */
    enabled: boolean;

    /**
     * How often the test will run.
     */
    interval: string;

    /**
     * The name of the DEX test. Must be unique.
     */
    name: string;

    /**
     * Additional details about the test.
     */
    description?: string;
  }

  export namespace Result {
    /**
     * The configuration object which contains the details for the WARP client to
     * conduct the test.
     */
    export interface Data {
      /**
       * The desired endpoint to test.
       */
      host?: string;

      /**
       * The type of test.
       */
      kind?: string;

      /**
       * The HTTP request method type.
       */
      method?: string;
    }
  }
}

export interface DexTestUpdateResponse {
  errors?: Array<DexTestUpdateResponse.Error>;

  messages?: Array<DexTestUpdateResponse.Message>;

  result?: DexTestUpdateResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace DexTestUpdateResponse {
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
     * The configuration object which contains the details for the WARP client to
     * conduct the test.
     */
    data: Result.Data;

    /**
     * Determines whether or not the test is active.
     */
    enabled: boolean;

    /**
     * How often the test will run.
     */
    interval: string;

    /**
     * The name of the DEX test. Must be unique.
     */
    name: string;

    /**
     * Additional details about the test.
     */
    description?: string;
  }

  export namespace Result {
    /**
     * The configuration object which contains the details for the WARP client to
     * conduct the test.
     */
    export interface Data {
      /**
       * The desired endpoint to test.
       */
      host?: string;

      /**
       * The type of test.
       */
      kind?: string;

      /**
       * The HTTP request method type.
       */
      method?: string;
    }
  }
}

export interface DexTestDeleteResponse {
  errors?: Array<DexTestDeleteResponse.Error>;

  messages?: Array<DexTestDeleteResponse.Message>;

  result?: Array<DexTestDeleteResponse.Result>;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace DexTestDeleteResponse {
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
     * The configuration object which contains the details for the WARP client to
     * conduct the test.
     */
    data: Result.Data;

    /**
     * Determines whether or not the test is active.
     */
    enabled: boolean;

    /**
     * How often the test will run.
     */
    interval: string;

    /**
     * The name of the DEX test. Must be unique.
     */
    name: string;

    /**
     * Additional details about the test.
     */
    description?: string;
  }

  export namespace Result {
    /**
     * The configuration object which contains the details for the WARP client to
     * conduct the test.
     */
    export interface Data {
      /**
       * The desired endpoint to test.
       */
      host?: string;

      /**
       * The type of test.
       */
      kind?: string;

      /**
       * The HTTP request method type.
       */
      method?: string;
    }
  }
}

export interface DexTestDeviceDexTestCreateDeviceDexTestResponse {
  errors?: Array<DexTestDeviceDexTestCreateDeviceDexTestResponse.Error>;

  messages?: Array<DexTestDeviceDexTestCreateDeviceDexTestResponse.Message>;

  result?: DexTestDeviceDexTestCreateDeviceDexTestResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace DexTestDeviceDexTestCreateDeviceDexTestResponse {
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
     * The configuration object which contains the details for the WARP client to
     * conduct the test.
     */
    data: Result.Data;

    /**
     * Determines whether or not the test is active.
     */
    enabled: boolean;

    /**
     * How often the test will run.
     */
    interval: string;

    /**
     * The name of the DEX test. Must be unique.
     */
    name: string;

    /**
     * Additional details about the test.
     */
    description?: string;
  }

  export namespace Result {
    /**
     * The configuration object which contains the details for the WARP client to
     * conduct the test.
     */
    export interface Data {
      /**
       * The desired endpoint to test.
       */
      host?: string;

      /**
       * The type of test.
       */
      kind?: string;

      /**
       * The HTTP request method type.
       */
      method?: string;
    }
  }
}

export interface DexTestDeviceDexTestDetailsResponse {
  errors?: Array<DexTestDeviceDexTestDetailsResponse.Error>;

  messages?: Array<DexTestDeviceDexTestDetailsResponse.Message>;

  result?: Array<DexTestDeviceDexTestDetailsResponse.Result>;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace DexTestDeviceDexTestDetailsResponse {
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
     * The configuration object which contains the details for the WARP client to
     * conduct the test.
     */
    data: Result.Data;

    /**
     * Determines whether or not the test is active.
     */
    enabled: boolean;

    /**
     * How often the test will run.
     */
    interval: string;

    /**
     * The name of the DEX test. Must be unique.
     */
    name: string;

    /**
     * Additional details about the test.
     */
    description?: string;
  }

  export namespace Result {
    /**
     * The configuration object which contains the details for the WARP client to
     * conduct the test.
     */
    export interface Data {
      /**
       * The desired endpoint to test.
       */
      host?: string;

      /**
       * The type of test.
       */
      kind?: string;

      /**
       * The HTTP request method type.
       */
      method?: string;
    }
  }
}

export interface DexTestUpdateParams {
  /**
   * The configuration object which contains the details for the WARP client to
   * conduct the test.
   */
  data: DexTestUpdateParams.Data;

  /**
   * Determines whether or not the test is active.
   */
  enabled: boolean;

  /**
   * How often the test will run.
   */
  interval: string;

  /**
   * The name of the DEX test. Must be unique.
   */
  name: string;

  /**
   * Additional details about the test.
   */
  description?: string;
}

export namespace DexTestUpdateParams {
  /**
   * The configuration object which contains the details for the WARP client to
   * conduct the test.
   */
  export interface Data {
    /**
     * The desired endpoint to test.
     */
    host?: string;

    /**
     * The type of test.
     */
    kind?: string;

    /**
     * The HTTP request method type.
     */
    method?: string;
  }
}

export interface DexTestDeviceDexTestCreateDeviceDexTestParams {
  /**
   * The configuration object which contains the details for the WARP client to
   * conduct the test.
   */
  data: DexTestDeviceDexTestCreateDeviceDexTestParams.Data;

  /**
   * Determines whether or not the test is active.
   */
  enabled: boolean;

  /**
   * How often the test will run.
   */
  interval: string;

  /**
   * The name of the DEX test. Must be unique.
   */
  name: string;

  /**
   * Additional details about the test.
   */
  description?: string;
}

export namespace DexTestDeviceDexTestCreateDeviceDexTestParams {
  /**
   * The configuration object which contains the details for the WARP client to
   * conduct the test.
   */
  export interface Data {
    /**
     * The desired endpoint to test.
     */
    host?: string;

    /**
     * The type of test.
     */
    kind?: string;

    /**
     * The HTTP request method type.
     */
    method?: string;
  }
}

export namespace DexTests {
  export import DexTestRetrieveResponse = DexTestsAPI.DexTestRetrieveResponse;
  export import DexTestUpdateResponse = DexTestsAPI.DexTestUpdateResponse;
  export import DexTestDeleteResponse = DexTestsAPI.DexTestDeleteResponse;
  export import DexTestDeviceDexTestCreateDeviceDexTestResponse = DexTestsAPI.DexTestDeviceDexTestCreateDeviceDexTestResponse;
  export import DexTestDeviceDexTestDetailsResponse = DexTestsAPI.DexTestDeviceDexTestDetailsResponse;
  export import DexTestUpdateParams = DexTestsAPI.DexTestUpdateParams;
  export import DexTestDeviceDexTestCreateDeviceDexTestParams = DexTestsAPI.DexTestDeviceDexTestCreateDeviceDexTestParams;
}
