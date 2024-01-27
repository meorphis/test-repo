// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ManagementAPI from 'cloudflare/resources/accounts/cfd-tunnels/management';

export class Management extends APIResource {
  /**
   * Gets a management token used to access the management resources (i.e. Streaming
   * Logs) of a tunnel.
   */
  list(
    accountIdentifier: string,
    tunnelId: string,
    body: ManagementListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ManagementListResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/cfd_tunnel/${tunnelId}/management`, {
      body,
      ...options,
    });
  }
}

export interface ManagementListResponse {
  errors?: Array<ManagementListResponse.Error>;

  messages?: Array<ManagementListResponse.Message>;

  result?: string;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ManagementListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface ManagementListParams {
  resources: Array<'logs'>;
}

export namespace Management {
  export import ManagementListResponse = ManagementAPI.ManagementListResponse;
  export import ManagementListParams = ManagementAPI.ManagementListParams;
}
