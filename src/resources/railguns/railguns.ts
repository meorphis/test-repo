// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as RailgunsAPI from 'cloudflare/resources/railguns/railguns';
import * as ZonesAPI from 'cloudflare/resources/railguns/zones';
import { Page } from 'cloudflare/pagination';

export class Railguns extends APIResource {
  zones: ZonesAPI.Zones = new ZonesAPI.Zones(this._client);

  /**
   * Railgun details
   */
  retrieve(identifier: string, options?: Core.RequestOptions): Core.APIPromise<RailgunRetrieveResponse> {
    return this._client.get(`/railguns/${identifier}`, options);
  }

  /**
   * Enable or disable a Railgun for all zones connected to it.
   */
  update(
    identifier: string,
    body: RailgunUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RailgunUpdateResponse> {
    return this._client.patch(`/railguns/${identifier}`, { body, ...options });
  }

  /**
   * Disable and delete a Railgun. This will immediately disable that Railgun for any
   * connected zones.
   */
  delete(identifier: string, options?: Core.RequestOptions): Core.APIPromise<RailgunDeleteResponse> {
    return this._client.delete(`/railguns/${identifier}`, options);
  }

  /**
   * Create Railgun
   */
  railgunCreateRailgun(
    body: RailgunRailgunCreateRailgunParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RailgunRailgunCreateRailgunResponse> {
    return this._client.post('/railguns', { body, ...options });
  }

  /**
   * List, search, sort and filter your Railguns.
   */
  railgunListRailguns(
    query?: RailgunRailgunListRailgunsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RailgunRailgunListRailgunsResponsesPage, RailgunRailgunListRailgunsResponse>;
  railgunListRailguns(
    options?: Core.RequestOptions,
  ): Core.PagePromise<RailgunRailgunListRailgunsResponsesPage, RailgunRailgunListRailgunsResponse>;
  railgunListRailguns(
    query: RailgunRailgunListRailgunsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<RailgunRailgunListRailgunsResponsesPage, RailgunRailgunListRailgunsResponse> {
    if (isRequestOptions(query)) {
      return this.railgunListRailguns({}, query);
    }
    return this._client.getAPIList('/railguns', RailgunRailgunListRailgunsResponsesPage, {
      query,
      ...options,
    });
  }
}

export class RailgunRailgunListRailgunsResponsesPage extends Page<RailgunRailgunListRailgunsResponse> {}

export interface RailgunRetrieveResponse {
  errors?: Array<RailgunRetrieveResponse.Error>;

  messages?: Array<RailgunRetrieveResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RailgunRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface RailgunUpdateResponse {
  errors?: Array<RailgunUpdateResponse.Error>;

  messages?: Array<RailgunUpdateResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RailgunUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface RailgunDeleteResponse {
  errors?: Array<RailgunDeleteResponse.Error>;

  messages?: Array<RailgunDeleteResponse.Message>;

  result?: RailgunDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RailgunDeleteResponse {
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
     * Railgun identifier tag.
     */
    id?: string;
  }
}

export interface RailgunRailgunCreateRailgunResponse {
  errors?: Array<RailgunRailgunCreateRailgunResponse.Error>;

  messages?: Array<RailgunRailgunCreateRailgunResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RailgunRailgunCreateRailgunResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface RailgunRailgunListRailgunsResponse {
  /**
   * Railgun identifier tag.
   */
  id: string;

  /**
   * When the Railgun was activated.
   */
  activated_on: string;

  activation_key: string;

  /**
   * The build identifier for the Railgun receiver.
   */
  build: string;

  /**
   * When the Railgun was created.
   */
  created_on: string;

  /**
   * Flag to determine if the Railgun is accepting connections.
   */
  enabled: boolean;

  /**
   * When the Railgun was last modified.
   */
  modified_on: string;

  /**
   * Readable identifier of the Railgun.
   */
  name: string;

  /**
   * The revision of the Railgun receiver.
   */
  revision: string;

  /**
   * Status of the Railgun.
   */
  status: 'initializing' | 'active';

  /**
   * The version of the Railgun receiver.
   */
  version: string;

  /**
   * The number of zones using this Railgun.
   */
  zones_connected: number;

  /**
   * Defined when the Railgun version is out of date from the latest release from
   * Cloudflare.
   */
  upgrade_info?: RailgunRailgunListRailgunsResponse.UpgradeInfo;
}

export namespace RailgunRailgunListRailgunsResponse {
  /**
   * Defined when the Railgun version is out of date from the latest release from
   * Cloudflare.
   */
  export interface UpgradeInfo {
    /**
     * An HTTP link to download the latest Railgun binary.
     */
    download_link?: string;

    /**
     * Latest version of the Railgun receiver available to install.
     */
    latest_version?: string;
  }
}

export interface RailgunUpdateParams {
  /**
   * Flag to determine if the Railgun is accepting connections.
   */
  enabled: boolean;
}

export interface RailgunRailgunCreateRailgunParams {
  /**
   * Readable identifier of the Railgun.
   */
  name: string;
}

export interface RailgunRailgunListRailgunsParams {
  /**
   * Sort Railguns in ascending or descending order.
   */
  direction?: 'asc' | 'desc';

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Number of items per page.
   */
  per_page?: number;
}

export namespace Railguns {
  export import RailgunRetrieveResponse = RailgunsAPI.RailgunRetrieveResponse;
  export import RailgunUpdateResponse = RailgunsAPI.RailgunUpdateResponse;
  export import RailgunDeleteResponse = RailgunsAPI.RailgunDeleteResponse;
  export import RailgunRailgunCreateRailgunResponse = RailgunsAPI.RailgunRailgunCreateRailgunResponse;
  export import RailgunRailgunListRailgunsResponse = RailgunsAPI.RailgunRailgunListRailgunsResponse;
  export import RailgunRailgunListRailgunsResponsesPage = RailgunsAPI.RailgunRailgunListRailgunsResponsesPage;
  export import RailgunUpdateParams = RailgunsAPI.RailgunUpdateParams;
  export import RailgunRailgunCreateRailgunParams = RailgunsAPI.RailgunRailgunCreateRailgunParams;
  export import RailgunRailgunListRailgunsParams = RailgunsAPI.RailgunRailgunListRailgunsParams;
  export import Zones = ZonesAPI.Zones;
  export import ZoneListResponse = ZonesAPI.ZoneListResponse;
}
