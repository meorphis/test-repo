// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as RailgunsAPI from 'cloudflare/resources/accounts/railguns/railguns';
import * as ConnectionsAPI from 'cloudflare/resources/accounts/railguns/connections';
import { Page } from 'cloudflare/pagination';

export class Railguns extends APIResource {
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);

  /**
   * Railgun details
   */
  retrieve(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RailgunRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/railguns/${identifier}`, options);
  }

  /**
   * Update a Railgun.
   */
  update(
    accountIdentifier: string,
    identifier: string,
    body: RailgunUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RailgunUpdateResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/railguns/${identifier}`, { body, ...options });
  }

  /**
   * Disable and delete a Railgun. This will immediately disable the Railgun for any
   * connected zones.
   */
  delete(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RailgunDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/railguns/${identifier}`, options);
  }

  /**
   * Create Railgun
   */
  accountRailgunsCreateRailgun(
    accountIdentifier: string,
    body: RailgunAccountRailgunsCreateRailgunParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RailgunAccountRailgunsCreateRailgunResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/railguns`, { body, ...options });
  }

  /**
   * List, search, sort and filter your Railguns.
   */
  accountRailgunsListRailguns(
    accountIdentifier: string,
    query?: RailgunAccountRailgunsListRailgunsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    RailgunAccountRailgunsListRailgunsResponsesPage,
    RailgunAccountRailgunsListRailgunsResponse
  >;
  accountRailgunsListRailguns(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    RailgunAccountRailgunsListRailgunsResponsesPage,
    RailgunAccountRailgunsListRailgunsResponse
  >;
  accountRailgunsListRailguns(
    accountIdentifier: string,
    query: RailgunAccountRailgunsListRailgunsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    RailgunAccountRailgunsListRailgunsResponsesPage,
    RailgunAccountRailgunsListRailgunsResponse
  > {
    if (isRequestOptions(query)) {
      return this.accountRailgunsListRailguns(accountIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/accounts/${accountIdentifier}/railguns`,
      RailgunAccountRailgunsListRailgunsResponsesPage,
      { query, ...options },
    );
  }
}

export class RailgunAccountRailgunsListRailgunsResponsesPage extends Page<RailgunAccountRailgunsListRailgunsResponse> {}

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

export interface RailgunAccountRailgunsCreateRailgunResponse {
  errors?: Array<RailgunAccountRailgunsCreateRailgunResponse.Error>;

  messages?: Array<RailgunAccountRailgunsCreateRailgunResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RailgunAccountRailgunsCreateRailgunResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface RailgunAccountRailgunsListRailgunsResponse {
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
  upgrade_info?: RailgunAccountRailgunsListRailgunsResponse.UpgradeInfo;
}

export namespace RailgunAccountRailgunsListRailgunsResponse {
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

  /**
   * Readable identifier of the Railgun.
   */
  name: string;

  /**
   * Defined when the Railgun version is out of date from the latest release from
   * Cloudflare.
   */
  upgrade_info?: RailgunUpdateParams.UpgradeInfo;
}

export namespace RailgunUpdateParams {
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

export interface RailgunAccountRailgunsCreateRailgunParams {
  /**
   * Readable identifier of the Railgun.
   */
  name: string;
}

export interface RailgunAccountRailgunsListRailgunsParams {
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
  export import RailgunAccountRailgunsCreateRailgunResponse = RailgunsAPI.RailgunAccountRailgunsCreateRailgunResponse;
  export import RailgunAccountRailgunsListRailgunsResponse = RailgunsAPI.RailgunAccountRailgunsListRailgunsResponse;
  export import RailgunAccountRailgunsListRailgunsResponsesPage = RailgunsAPI.RailgunAccountRailgunsListRailgunsResponsesPage;
  export import RailgunUpdateParams = RailgunsAPI.RailgunUpdateParams;
  export import RailgunAccountRailgunsCreateRailgunParams = RailgunsAPI.RailgunAccountRailgunsCreateRailgunParams;
  export import RailgunAccountRailgunsListRailgunsParams = RailgunsAPI.RailgunAccountRailgunsListRailgunsParams;
  export import Connections = ConnectionsAPI.Connections;
  export import ConnectionRetrieveResponse = ConnectionsAPI.ConnectionRetrieveResponse;
  export import ConnectionUpdateResponse = ConnectionsAPI.ConnectionUpdateResponse;
  export import ConnectionDeleteResponse = ConnectionsAPI.ConnectionDeleteResponse;
  export import ConnectionRailgunConnectionsCreateConnectionResponse = ConnectionsAPI.ConnectionRailgunConnectionsCreateConnectionResponse;
  export import ConnectionRailgunConnectionsListConnectionsResponse = ConnectionsAPI.ConnectionRailgunConnectionsListConnectionsResponse;
  export import ConnectionRailgunConnectionsListConnectionsResponsesPage = ConnectionsAPI.ConnectionRailgunConnectionsListConnectionsResponsesPage;
  export import ConnectionUpdateParams = ConnectionsAPI.ConnectionUpdateParams;
  export import ConnectionRailgunConnectionsCreateConnectionParams = ConnectionsAPI.ConnectionRailgunConnectionsCreateConnectionParams;
  export import ConnectionRailgunConnectionsListConnectionsParams = ConnectionsAPI.ConnectionRailgunConnectionsListConnectionsParams;
}
