// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as ConnectionsAPI from 'cloudflare/resources/accounts/railguns/connections';
import { Page } from 'cloudflare/pagination';

export class Connections extends APIResource {
  /**
   * Get a connection by ID.
   */
  retrieve(
    accountIdentifier: string,
    railgunIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionRetrieveResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/railguns/${railgunIdentifier}/connections/${identifier}`,
      options,
    );
  }

  /**
   * Enable or disable a connection.
   */
  update(
    accountIdentifier: string,
    railgunIdentifier: string,
    identifier: string,
    body: ConnectionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionUpdateResponse> {
    return this._client.put(
      `/accounts/${accountIdentifier}/railguns/${railgunIdentifier}/connections/${identifier}`,
      { body, ...options },
    );
  }

  /**
   * Disable and remove the connection to a zone.
   */
  delete(
    accountIdentifier: string,
    railgunIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionDeleteResponse> {
    return this._client.delete(
      `/accounts/${accountIdentifier}/railguns/${railgunIdentifier}/connections/${identifier}`,
      options,
    );
  }

  /**
   * Associates a zone to the Railgun.
   */
  railgunConnectionsCreateConnection(
    accountIdentifier: string,
    railgunIdentifier: string,
    body: ConnectionRailgunConnectionsCreateConnectionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionRailgunConnectionsCreateConnectionResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/railguns/${railgunIdentifier}/connections`, {
      body,
      ...options,
    });
  }

  /**
   * List connections associated with the Railgun.
   */
  railgunConnectionsListConnections(
    accountIdentifier: string,
    railgunIdentifier: string,
    query?: ConnectionRailgunConnectionsListConnectionsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    ConnectionRailgunConnectionsListConnectionsResponsesPage,
    ConnectionRailgunConnectionsListConnectionsResponse
  >;
  railgunConnectionsListConnections(
    accountIdentifier: string,
    railgunIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    ConnectionRailgunConnectionsListConnectionsResponsesPage,
    ConnectionRailgunConnectionsListConnectionsResponse
  >;
  railgunConnectionsListConnections(
    accountIdentifier: string,
    railgunIdentifier: string,
    query: ConnectionRailgunConnectionsListConnectionsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    ConnectionRailgunConnectionsListConnectionsResponsesPage,
    ConnectionRailgunConnectionsListConnectionsResponse
  > {
    if (isRequestOptions(query)) {
      return this.railgunConnectionsListConnections(accountIdentifier, railgunIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/accounts/${accountIdentifier}/railguns/${railgunIdentifier}/connections`,
      ConnectionRailgunConnectionsListConnectionsResponsesPage,
      { query, ...options },
    );
  }
}

export class ConnectionRailgunConnectionsListConnectionsResponsesPage extends Page<ConnectionRailgunConnectionsListConnectionsResponse> {}

export interface ConnectionRetrieveResponse {
  errors?: Array<ConnectionRetrieveResponse.Error>;

  messages?: Array<ConnectionRetrieveResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ConnectionRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface ConnectionUpdateResponse {
  errors?: Array<ConnectionUpdateResponse.Error>;

  messages?: Array<ConnectionUpdateResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ConnectionUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface ConnectionDeleteResponse {
  errors?: Array<ConnectionDeleteResponse.Error>;

  messages?: Array<ConnectionDeleteResponse.Message>;

  result?: ConnectionDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ConnectionDeleteResponse {
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
     * Connection identifier tag.
     */
    id?: string;
  }
}

export interface ConnectionRailgunConnectionsCreateConnectionResponse {
  errors?: Array<ConnectionRailgunConnectionsCreateConnectionResponse.Error>;

  messages?: Array<ConnectionRailgunConnectionsCreateConnectionResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ConnectionRailgunConnectionsCreateConnectionResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface ConnectionRailgunConnectionsListConnectionsResponse {
  /**
   * Connection identifier tag.
   */
  id: string;

  /**
   * A value indicating whether the connection is enabled or not.
   */
  enabled: boolean;

  zone: ConnectionRailgunConnectionsListConnectionsResponse.Zone;

  /**
   * When the connection was created.
   */
  created_on?: string;

  /**
   * When the connection was last modified.
   */
  modified_on?: string;
}

export namespace ConnectionRailgunConnectionsListConnectionsResponse {
  export interface Zone {
    /**
     * Identifier
     */
    id?: string;

    /**
     * The domain name
     */
    name?: string;
  }
}

export interface ConnectionUpdateParams {
  /**
   * A value indicating whether the connection is enabled or not.
   */
  enabled: boolean;

  zone: ConnectionUpdateParams.Zone;
}

export namespace ConnectionUpdateParams {
  export interface Zone {}
}

export interface ConnectionRailgunConnectionsCreateConnectionParams {
  zone: ConnectionRailgunConnectionsCreateConnectionParams.Zone;

  /**
   * A value indicating whether the connection is enabled or not.
   */
  enabled?: boolean;
}

export namespace ConnectionRailgunConnectionsCreateConnectionParams {
  export interface Zone {}
}

export interface ConnectionRailgunConnectionsListConnectionsParams {
  /**
   * A value indicating whether the connection is enabled or not.
   */
  enabled?: boolean;

  /**
   * Requested page within paginated list of results.
   */
  page?: number;

  /**
   * Maximum number of results requested.
   */
  per_page?: number;
}

export namespace Connections {
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
