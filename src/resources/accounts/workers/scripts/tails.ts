// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TailsAPI from 'cloudflare/resources/accounts/workers/scripts/tails';

export class Tails extends APIResource {
  /**
   * Deletes a tail from a Worker.
   */
  delete(
    accountIdentifier: string,
    scriptName: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TailDeleteResponse> {
    return this._client.delete(
      `/accounts/${accountIdentifier}/workers/scripts/${scriptName}/tails/${id}`,
      options,
    );
  }

  /**
   * Get list of tails currently deployed on a Worker.
   */
  workerTailLogsListTails(
    accountIdentifier: string,
    scriptName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TailWorkerTailLogsListTailsResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/workers/scripts/${scriptName}/tails`, options);
  }

  /**
   * Starts a tail that receives logs and exception from a Worker.
   */
  workerTailLogsStartTail(
    accountIdentifier: string,
    scriptName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TailWorkerTailLogsStartTailResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/workers/scripts/${scriptName}/tails`, options);
  }
}

export interface TailDeleteResponse {
  errors: Array<TailDeleteResponse.Error>;

  messages: Array<TailDeleteResponse.Message>;

  result: unknown | Array<unknown> | string;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export namespace TailDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface TailWorkerTailLogsListTailsResponse {
  errors?: Array<TailWorkerTailLogsListTailsResponse.Error>;

  messages?: Array<TailWorkerTailLogsListTailsResponse.Message>;

  result?: TailWorkerTailLogsListTailsResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TailWorkerTailLogsListTailsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    id?: unknown;

    expires_at?: unknown;

    url?: unknown;
  }
}

export interface TailWorkerTailLogsStartTailResponse {
  errors?: Array<TailWorkerTailLogsStartTailResponse.Error>;

  messages?: Array<TailWorkerTailLogsStartTailResponse.Message>;

  result?: TailWorkerTailLogsStartTailResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TailWorkerTailLogsStartTailResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    id?: unknown;

    expires_at?: unknown;

    url?: unknown;
  }
}

export namespace Tails {
  export import TailDeleteResponse = TailsAPI.TailDeleteResponse;
  export import TailWorkerTailLogsListTailsResponse = TailsAPI.TailWorkerTailLogsListTailsResponse;
  export import TailWorkerTailLogsStartTailResponse = TailsAPI.TailWorkerTailLogsStartTailResponse;
}
