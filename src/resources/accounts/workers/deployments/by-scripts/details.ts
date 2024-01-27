// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DetailsAPI from 'cloudflare/resources/accounts/workers/deployments/by-scripts/details';

export class Details extends APIResource {
  /**
   * Get Deployment Detail
   */
  retrieve(
    accountIdentifier: string,
    scriptIdentifier: string,
    deploymentIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DetailRetrieveResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/workers/deployments/by-script/${scriptIdentifier}/detail/${deploymentIdentifier}`,
      options,
    );
  }
}

export interface DetailRetrieveResponse {
  id?: string;

  errors?: Array<DetailRetrieveResponse.Error>;

  messages?: Array<DetailRetrieveResponse.Message>;

  metadata?: unknown;

  number?: number;

  resources?: unknown;

  result?: unknown | Array<unknown> | string;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DetailRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export namespace Details {
  export import DetailRetrieveResponse = DetailsAPI.DetailRetrieveResponse;
}
