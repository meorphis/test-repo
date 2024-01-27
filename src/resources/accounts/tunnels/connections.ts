// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConnectionsAPI from 'cloudflare/resources/accounts/tunnels/connections';

export class Connections extends APIResource {
  /**
   * Removes connections that are in a disconnected or pending reconnect state. We
   * recommend running this command after shutting down a tunnel.
   */
  delete(
    accountIdentifier: string,
    tunnelId: string,
    body: ConnectionDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/tunnels/${tunnelId}/connections`, {
      body,
      ...options,
    });
  }
}

export interface ConnectionDeleteResponse {
  errors?: Array<ConnectionDeleteResponse.Error>;

  messages?: Array<ConnectionDeleteResponse.Message>;

  result?: unknown;

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
}

export type ConnectionDeleteParams = unknown;

export namespace Connections {
  export import ConnectionDeleteResponse = ConnectionsAPI.ConnectionDeleteResponse;
  export import ConnectionDeleteParams = ConnectionsAPI.ConnectionDeleteParams;
}
