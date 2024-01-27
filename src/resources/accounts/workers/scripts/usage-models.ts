// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UsageModelsAPI from 'cloudflare/resources/accounts/workers/scripts/usage-models';

export class UsageModels extends APIResource {
  /**
   * Fetches the Usage Model for a given Worker.
   */
  workerScriptFetchUsageModel(
    accountIdentifier: string,
    scriptName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UsageModelWorkerScriptFetchUsageModelResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/workers/scripts/${scriptName}/usage-model`,
      options,
    );
  }

  /**
   * Updates the Usage Model for a given Worker. Requires a Workers Paid
   * subscription.
   */
  workerScriptUpdateUsageModel(
    accountIdentifier: string,
    scriptName: string,
    body: UsageModelWorkerScriptUpdateUsageModelParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UsageModelWorkerScriptUpdateUsageModelResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/workers/scripts/${scriptName}/usage-model`, {
      body,
      ...options,
    });
  }
}

export interface UsageModelWorkerScriptFetchUsageModelResponse {
  errors?: Array<UsageModelWorkerScriptFetchUsageModelResponse.Error>;

  messages?: Array<UsageModelWorkerScriptFetchUsageModelResponse.Message>;

  result?: UsageModelWorkerScriptFetchUsageModelResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace UsageModelWorkerScriptFetchUsageModelResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    usage_model?: unknown;
  }
}

export interface UsageModelWorkerScriptUpdateUsageModelResponse {
  errors?: Array<UsageModelWorkerScriptUpdateUsageModelResponse.Error>;

  messages?: Array<UsageModelWorkerScriptUpdateUsageModelResponse.Message>;

  result?: UsageModelWorkerScriptUpdateUsageModelResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace UsageModelWorkerScriptUpdateUsageModelResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    usage_model?: unknown;
  }
}

export type UsageModelWorkerScriptUpdateUsageModelParams = unknown;

export namespace UsageModels {
  export import UsageModelWorkerScriptFetchUsageModelResponse = UsageModelsAPI.UsageModelWorkerScriptFetchUsageModelResponse;
  export import UsageModelWorkerScriptUpdateUsageModelResponse = UsageModelsAPI.UsageModelWorkerScriptUpdateUsageModelResponse;
  export import UsageModelWorkerScriptUpdateUsageModelParams = UsageModelsAPI.UsageModelWorkerScriptUpdateUsageModelParams;
}
