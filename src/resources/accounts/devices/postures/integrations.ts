// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IntegrationsAPI from 'cloudflare/resources/accounts/devices/postures/integrations';

export class Integrations extends APIResource {
  /**
   * Fetches details for a single device posture integration.
   */
  retrieve(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntegrationRetrieveResponse> {
    return this._client.get(`/accounts/${identifier}/devices/posture/integration/${uuid}`, options);
  }

  /**
   * Updates a configured device posture integration.
   */
  update(
    identifier: unknown,
    uuid: string,
    body: IntegrationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntegrationUpdateResponse> {
    return this._client.patch(`/accounts/${identifier}/devices/posture/integration/${uuid}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a configured device posture integration.
   */
  delete(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntegrationDeleteResponse> {
    return this._client.delete(`/accounts/${identifier}/devices/posture/integration/${uuid}`, options);
  }

  /**
   * Create a new device posture integration.
   */
  devicePostureIntegrationsCreateDevicePostureIntegration(
    identifier: unknown,
    body: IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationResponse> {
    return this._client.post(`/accounts/${identifier}/devices/posture/integration`, { body, ...options });
  }

  /**
   * Fetches the list of device posture integrations for an account.
   */
  devicePostureIntegrationsListDevicePostureIntegrations(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntegrationDevicePostureIntegrationsListDevicePostureIntegrationsResponse> {
    return this._client.get(`/accounts/${identifier}/devices/posture/integration`, options);
  }
}

export interface IntegrationRetrieveResponse {
  errors?: Array<IntegrationRetrieveResponse.Error>;

  messages?: Array<IntegrationRetrieveResponse.Message>;

  result?: IntegrationRetrieveResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace IntegrationRetrieveResponse {
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
     * API UUID.
     */
    id?: string;

    /**
     * The configuration object containing third-party integration information.
     */
    config?: Result.Config;

    /**
     * The interval between each posture check with the third-party API. Use `m` for
     * minutes (e.g. `5m`) and `h` for hours (e.g. `12h`).
     */
    interval?: string;

    /**
     * The name of the device posture integration.
     */
    name?: string;

    /**
     * The type of device posture integration.
     */
    type?:
      | 'workspace_one'
      | 'crowdstrike_s2s'
      | 'uptycs'
      | 'intune'
      | 'kolide'
      | 'tanium'
      | 'sentinelone_s2s';
  }

  export namespace Result {
    /**
     * The configuration object containing third-party integration information.
     */
    export interface Config {
      /**
       * The Workspace One API URL provided in the Workspace One Admin Dashboard.
       */
      api_url: string;

      /**
       * The Workspace One Authorization URL depending on your region.
       */
      auth_url: string;

      /**
       * The Workspace One client ID provided in the Workspace One Admin Dashboard.
       */
      client_id: string;
    }
  }
}

export interface IntegrationUpdateResponse {
  errors?: Array<IntegrationUpdateResponse.Error>;

  messages?: Array<IntegrationUpdateResponse.Message>;

  result?: IntegrationUpdateResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace IntegrationUpdateResponse {
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
     * API UUID.
     */
    id?: string;

    /**
     * The configuration object containing third-party integration information.
     */
    config?: Result.Config;

    /**
     * The interval between each posture check with the third-party API. Use `m` for
     * minutes (e.g. `5m`) and `h` for hours (e.g. `12h`).
     */
    interval?: string;

    /**
     * The name of the device posture integration.
     */
    name?: string;

    /**
     * The type of device posture integration.
     */
    type?:
      | 'workspace_one'
      | 'crowdstrike_s2s'
      | 'uptycs'
      | 'intune'
      | 'kolide'
      | 'tanium'
      | 'sentinelone_s2s';
  }

  export namespace Result {
    /**
     * The configuration object containing third-party integration information.
     */
    export interface Config {
      /**
       * The Workspace One API URL provided in the Workspace One Admin Dashboard.
       */
      api_url: string;

      /**
       * The Workspace One Authorization URL depending on your region.
       */
      auth_url: string;

      /**
       * The Workspace One client ID provided in the Workspace One Admin Dashboard.
       */
      client_id: string;
    }
  }
}

export interface IntegrationDeleteResponse {
  errors?: Array<IntegrationDeleteResponse.Error>;

  messages?: Array<IntegrationDeleteResponse.Message>;

  result?: unknown | null;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace IntegrationDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationResponse {
  errors?: Array<IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationResponse.Error>;

  messages?: Array<IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationResponse.Message>;

  result?: IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationResponse {
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
     * API UUID.
     */
    id?: string;

    /**
     * The configuration object containing third-party integration information.
     */
    config?: Result.Config;

    /**
     * The interval between each posture check with the third-party API. Use `m` for
     * minutes (e.g. `5m`) and `h` for hours (e.g. `12h`).
     */
    interval?: string;

    /**
     * The name of the device posture integration.
     */
    name?: string;

    /**
     * The type of device posture integration.
     */
    type?:
      | 'workspace_one'
      | 'crowdstrike_s2s'
      | 'uptycs'
      | 'intune'
      | 'kolide'
      | 'tanium'
      | 'sentinelone_s2s';
  }

  export namespace Result {
    /**
     * The configuration object containing third-party integration information.
     */
    export interface Config {
      /**
       * The Workspace One API URL provided in the Workspace One Admin Dashboard.
       */
      api_url: string;

      /**
       * The Workspace One Authorization URL depending on your region.
       */
      auth_url: string;

      /**
       * The Workspace One client ID provided in the Workspace One Admin Dashboard.
       */
      client_id: string;
    }
  }
}

export interface IntegrationDevicePostureIntegrationsListDevicePostureIntegrationsResponse {
  errors?: Array<IntegrationDevicePostureIntegrationsListDevicePostureIntegrationsResponse.Error>;

  messages?: Array<IntegrationDevicePostureIntegrationsListDevicePostureIntegrationsResponse.Message>;

  result?: Array<IntegrationDevicePostureIntegrationsListDevicePostureIntegrationsResponse.Result>;

  result_info?: IntegrationDevicePostureIntegrationsListDevicePostureIntegrationsResponse.ResultInfo;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace IntegrationDevicePostureIntegrationsListDevicePostureIntegrationsResponse {
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
     * API UUID.
     */
    id?: string;

    /**
     * The configuration object containing third-party integration information.
     */
    config?: Result.Config;

    /**
     * The interval between each posture check with the third-party API. Use `m` for
     * minutes (e.g. `5m`) and `h` for hours (e.g. `12h`).
     */
    interval?: string;

    /**
     * The name of the device posture integration.
     */
    name?: string;

    /**
     * The type of device posture integration.
     */
    type?:
      | 'workspace_one'
      | 'crowdstrike_s2s'
      | 'uptycs'
      | 'intune'
      | 'kolide'
      | 'tanium'
      | 'sentinelone_s2s';
  }

  export namespace Result {
    /**
     * The configuration object containing third-party integration information.
     */
    export interface Config {
      /**
       * The Workspace One API URL provided in the Workspace One Admin Dashboard.
       */
      api_url: string;

      /**
       * The Workspace One Authorization URL depending on your region.
       */
      auth_url: string;

      /**
       * The Workspace One client ID provided in the Workspace One Admin Dashboard.
       */
      client_id: string;
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

export interface IntegrationUpdateParams {
  /**
   * The configuration object containing third-party integration information.
   */
  config?:
    | IntegrationUpdateParams.ZR7Sv6YhWorkspaceOneConfigRequest
    | IntegrationUpdateParams.ZR7Sv6YhCrowdstrikeConfigRequest
    | IntegrationUpdateParams.ZR7Sv6YhUptycsConfigRequest
    | IntegrationUpdateParams.ZR7Sv6YhIntuneConfigRequest
    | IntegrationUpdateParams.ZR7Sv6YhKolideConfigRequest
    | IntegrationUpdateParams.ZR7Sv6YhTaniumConfigRequest
    | IntegrationUpdateParams.ZR7Sv6YhSentineloneS2sConfigRequest;

  /**
   * The interval between each posture check with the third-party API. Use `m` for
   * minutes (e.g. `5m`) and `h` for hours (e.g. `12h`).
   */
  interval?: string;

  /**
   * The name of the device posture integration.
   */
  name?: string;

  /**
   * The type of device posture integration.
   */
  type?: 'workspace_one' | 'crowdstrike_s2s' | 'uptycs' | 'intune' | 'kolide' | 'tanium' | 'sentinelone_s2s';
}

export namespace IntegrationUpdateParams {
  export interface ZR7Sv6YhWorkspaceOneConfigRequest {
    /**
     * The Workspace One API URL provided in the Workspace One Admin Dashboard.
     */
    api_url: string;

    /**
     * The Workspace One Authorization URL depending on your region.
     */
    auth_url: string;

    /**
     * The Workspace One client ID provided in the Workspace One Admin Dashboard.
     */
    client_id: string;

    /**
     * The Workspace One client secret provided in the Workspace One Admin Dashboard.
     */
    client_secret: string;
  }

  export interface ZR7Sv6YhCrowdstrikeConfigRequest {
    /**
     * The Crowdstrike API URL.
     */
    api_url: string;

    /**
     * The Crowdstrike client ID.
     */
    client_id: string;

    /**
     * The Crowdstrike client secret.
     */
    client_secret: string;

    /**
     * The Crowdstrike customer ID.
     */
    customer_id: string;
  }

  export interface ZR7Sv6YhUptycsConfigRequest {
    /**
     * The Uptycs API URL.
     */
    api_url: string;

    /**
     * The Uptycs client secret.
     */
    client_key: string;

    /**
     * The Uptycs client secret.
     */
    client_secret: string;

    /**
     * The Uptycs customer ID.
     */
    customer_id: string;
  }

  export interface ZR7Sv6YhIntuneConfigRequest {
    /**
     * The Intune client ID.
     */
    client_id: string;

    /**
     * The Intune client secret.
     */
    client_secret: string;

    /**
     * The Intune customer ID.
     */
    customer_id: string;
  }

  export interface ZR7Sv6YhKolideConfigRequest {
    /**
     * The Kolide client ID.
     */
    client_id: string;

    /**
     * The Kolide client secret.
     */
    client_secret: string;
  }

  export interface ZR7Sv6YhTaniumConfigRequest {
    /**
     * The Tanium API URL.
     */
    api_url: string;

    /**
     * The Tanium client secret.
     */
    client_secret: string;

    /**
     * If present, this id will be passed in the `CF-Access-Client-ID` header when
     * hitting the `api_url`
     */
    access_client_id?: string;

    /**
     * If present, this secret will be passed in the `CF-Access-Client-Secret` header
     * when hitting the `api_url`
     */
    access_client_secret?: string;
  }

  export interface ZR7Sv6YhSentineloneS2sConfigRequest {
    /**
     * The SentinelOne S2S API URL.
     */
    api_url: string;

    /**
     * The SentinelOne S2S client secret.
     */
    client_secret: string;
  }
}

export interface IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationParams {
  /**
   * The configuration object containing third-party integration information.
   */
  config:
    | IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationParams.ZR7Sv6YhWorkspaceOneConfigRequest
    | IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationParams.ZR7Sv6YhCrowdstrikeConfigRequest
    | IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationParams.ZR7Sv6YhUptycsConfigRequest
    | IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationParams.ZR7Sv6YhIntuneConfigRequest
    | IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationParams.ZR7Sv6YhKolideConfigRequest
    | IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationParams.ZR7Sv6YhTaniumConfigRequest
    | IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationParams.ZR7Sv6YhSentineloneS2sConfigRequest;

  /**
   * The interval between each posture check with the third-party API. Use `m` for
   * minutes (e.g. `5m`) and `h` for hours (e.g. `12h`).
   */
  interval: string;

  /**
   * The name of the device posture integration.
   */
  name: string;

  /**
   * The type of device posture integration.
   */
  type: 'workspace_one' | 'crowdstrike_s2s' | 'uptycs' | 'intune' | 'kolide' | 'tanium' | 'sentinelone_s2s';
}

export namespace IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationParams {
  export interface ZR7Sv6YhWorkspaceOneConfigRequest {
    /**
     * The Workspace One API URL provided in the Workspace One Admin Dashboard.
     */
    api_url: string;

    /**
     * The Workspace One Authorization URL depending on your region.
     */
    auth_url: string;

    /**
     * The Workspace One client ID provided in the Workspace One Admin Dashboard.
     */
    client_id: string;

    /**
     * The Workspace One client secret provided in the Workspace One Admin Dashboard.
     */
    client_secret: string;
  }

  export interface ZR7Sv6YhCrowdstrikeConfigRequest {
    /**
     * The Crowdstrike API URL.
     */
    api_url: string;

    /**
     * The Crowdstrike client ID.
     */
    client_id: string;

    /**
     * The Crowdstrike client secret.
     */
    client_secret: string;

    /**
     * The Crowdstrike customer ID.
     */
    customer_id: string;
  }

  export interface ZR7Sv6YhUptycsConfigRequest {
    /**
     * The Uptycs API URL.
     */
    api_url: string;

    /**
     * The Uptycs client secret.
     */
    client_key: string;

    /**
     * The Uptycs client secret.
     */
    client_secret: string;

    /**
     * The Uptycs customer ID.
     */
    customer_id: string;
  }

  export interface ZR7Sv6YhIntuneConfigRequest {
    /**
     * The Intune client ID.
     */
    client_id: string;

    /**
     * The Intune client secret.
     */
    client_secret: string;

    /**
     * The Intune customer ID.
     */
    customer_id: string;
  }

  export interface ZR7Sv6YhKolideConfigRequest {
    /**
     * The Kolide client ID.
     */
    client_id: string;

    /**
     * The Kolide client secret.
     */
    client_secret: string;
  }

  export interface ZR7Sv6YhTaniumConfigRequest {
    /**
     * The Tanium API URL.
     */
    api_url: string;

    /**
     * The Tanium client secret.
     */
    client_secret: string;

    /**
     * If present, this id will be passed in the `CF-Access-Client-ID` header when
     * hitting the `api_url`
     */
    access_client_id?: string;

    /**
     * If present, this secret will be passed in the `CF-Access-Client-Secret` header
     * when hitting the `api_url`
     */
    access_client_secret?: string;
  }

  export interface ZR7Sv6YhSentineloneS2sConfigRequest {
    /**
     * The SentinelOne S2S API URL.
     */
    api_url: string;

    /**
     * The SentinelOne S2S client secret.
     */
    client_secret: string;
  }
}

export namespace Integrations {
  export import IntegrationRetrieveResponse = IntegrationsAPI.IntegrationRetrieveResponse;
  export import IntegrationUpdateResponse = IntegrationsAPI.IntegrationUpdateResponse;
  export import IntegrationDeleteResponse = IntegrationsAPI.IntegrationDeleteResponse;
  export import IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationResponse = IntegrationsAPI.IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationResponse;
  export import IntegrationDevicePostureIntegrationsListDevicePostureIntegrationsResponse = IntegrationsAPI.IntegrationDevicePostureIntegrationsListDevicePostureIntegrationsResponse;
  export import IntegrationUpdateParams = IntegrationsAPI.IntegrationUpdateParams;
  export import IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationParams = IntegrationsAPI.IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationParams;
}
