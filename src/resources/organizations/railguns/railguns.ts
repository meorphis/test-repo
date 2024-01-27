// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as RailgunsAPI from 'cloudflare/resources/organizations/railguns/railguns';
import * as ZonesAPI from 'cloudflare/resources/organizations/railguns/zones';
import { Page } from 'cloudflare/pagination';

export class Railguns extends APIResource {
  zones: ZonesAPI.Zones = new ZonesAPI.Zones(this._client);

  /**
   * Railgun details
   */
  retrieve(
    organizationIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RailgunRetrieveResponse> {
    return this._client.get(`/organizations/${organizationIdentifier}/railguns/${identifier}`, options);
  }

  /**
   * Enable or disable a Railgun for all zones connected to it.
   */
  update(
    organizationIdentifier: string,
    identifier: string,
    body: RailgunUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RailgunUpdateResponse> {
    return this._client.patch(`/organizations/${organizationIdentifier}/railguns/${identifier}`, {
      body,
      ...options,
    });
  }

  /**
   * Disable and delete a Railgun. This will immediately disable the Railgun for any
   * connected zones.
   */
  delete(
    organizationIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RailgunDeleteResponse> {
    return this._client.delete(`/organizations/${organizationIdentifier}/railguns/${identifier}`, options);
  }

  /**
   * Create Railgun
   */
  organizationRailgunCreateRailgun(
    organizationIdentifier: string,
    body: RailgunOrganizationRailgunCreateRailgunParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RailgunOrganizationRailgunCreateRailgunResponse> {
    return this._client.post(`/organizations/${organizationIdentifier}/railguns`, { body, ...options });
  }

  /**
   * List, search, sort and filter your Railguns.
   */
  organizationRailgunListRailguns(
    organizationIdentifier: string,
    query?: RailgunOrganizationRailgunListRailgunsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    RailgunOrganizationRailgunListRailgunsResponsesPage,
    RailgunOrganizationRailgunListRailgunsResponse
  >;
  organizationRailgunListRailguns(
    organizationIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    RailgunOrganizationRailgunListRailgunsResponsesPage,
    RailgunOrganizationRailgunListRailgunsResponse
  >;
  organizationRailgunListRailguns(
    organizationIdentifier: string,
    query: RailgunOrganizationRailgunListRailgunsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    RailgunOrganizationRailgunListRailgunsResponsesPage,
    RailgunOrganizationRailgunListRailgunsResponse
  > {
    if (isRequestOptions(query)) {
      return this.organizationRailgunListRailguns(organizationIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/organizations/${organizationIdentifier}/railguns`,
      RailgunOrganizationRailgunListRailgunsResponsesPage,
      { query, ...options },
    );
  }
}

export class RailgunOrganizationRailgunListRailgunsResponsesPage extends Page<RailgunOrganizationRailgunListRailgunsResponse> {}

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

export interface RailgunOrganizationRailgunCreateRailgunResponse {
  errors?: Array<RailgunOrganizationRailgunCreateRailgunResponse.Error>;

  messages?: Array<RailgunOrganizationRailgunCreateRailgunResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RailgunOrganizationRailgunCreateRailgunResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface RailgunOrganizationRailgunListRailgunsResponse {
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
  upgrade_info?: RailgunOrganizationRailgunListRailgunsResponse.UpgradeInfo;
}

export namespace RailgunOrganizationRailgunListRailgunsResponse {
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

export interface RailgunOrganizationRailgunCreateRailgunParams {
  /**
   * Readable identifier of the Railgun.
   */
  name: string;
}

export interface RailgunOrganizationRailgunListRailgunsParams {
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
  export import RailgunOrganizationRailgunCreateRailgunResponse = RailgunsAPI.RailgunOrganizationRailgunCreateRailgunResponse;
  export import RailgunOrganizationRailgunListRailgunsResponse = RailgunsAPI.RailgunOrganizationRailgunListRailgunsResponse;
  export import RailgunOrganizationRailgunListRailgunsResponsesPage = RailgunsAPI.RailgunOrganizationRailgunListRailgunsResponsesPage;
  export import RailgunUpdateParams = RailgunsAPI.RailgunUpdateParams;
  export import RailgunOrganizationRailgunCreateRailgunParams = RailgunsAPI.RailgunOrganizationRailgunCreateRailgunParams;
  export import RailgunOrganizationRailgunListRailgunsParams = RailgunsAPI.RailgunOrganizationRailgunListRailgunsParams;
  export import Zones = ZonesAPI.Zones;
  export import ZoneListResponse = ZonesAPI.ZoneListResponse;
}
