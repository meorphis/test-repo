// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SmartRoutingsAPI from 'cloudflare/resources/zones/argos/smart-routings';

export class SmartRoutings extends APIResource {
  /**
   * Get Argo Smart Routing setting
   */
  argoSmartRoutingGetArgoSmartRoutingSetting(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SmartRoutingArgoSmartRoutingGetArgoSmartRoutingSettingResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/argo/smart_routing`, options);
  }

  /**
   * Updates enablement of Argo Smart Routing.
   */
  argoSmartRoutingPatchArgoSmartRoutingSetting(
    zoneIdentifier: string,
    body: SmartRoutingArgoSmartRoutingPatchArgoSmartRoutingSettingParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SmartRoutingArgoSmartRoutingPatchArgoSmartRoutingSettingResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/argo/smart_routing`, { body, ...options });
  }
}

export interface SmartRoutingArgoSmartRoutingGetArgoSmartRoutingSettingResponse {
  errors?: Array<SmartRoutingArgoSmartRoutingGetArgoSmartRoutingSettingResponse.Error>;

  messages?: Array<SmartRoutingArgoSmartRoutingGetArgoSmartRoutingSettingResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SmartRoutingArgoSmartRoutingGetArgoSmartRoutingSettingResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface SmartRoutingArgoSmartRoutingPatchArgoSmartRoutingSettingResponse {
  errors?: Array<SmartRoutingArgoSmartRoutingPatchArgoSmartRoutingSettingResponse.Error>;

  messages?: Array<SmartRoutingArgoSmartRoutingPatchArgoSmartRoutingSettingResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SmartRoutingArgoSmartRoutingPatchArgoSmartRoutingSettingResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface SmartRoutingArgoSmartRoutingPatchArgoSmartRoutingSettingParams {
  /**
   * Enables Argo Smart Routing.
   */
  value: 'on' | 'off';
}

export namespace SmartRoutings {
  export import SmartRoutingArgoSmartRoutingGetArgoSmartRoutingSettingResponse = SmartRoutingsAPI.SmartRoutingArgoSmartRoutingGetArgoSmartRoutingSettingResponse;
  export import SmartRoutingArgoSmartRoutingPatchArgoSmartRoutingSettingResponse = SmartRoutingsAPI.SmartRoutingArgoSmartRoutingPatchArgoSmartRoutingSettingResponse;
  export import SmartRoutingArgoSmartRoutingPatchArgoSmartRoutingSettingParams = SmartRoutingsAPI.SmartRoutingArgoSmartRoutingPatchArgoSmartRoutingSettingParams;
}
