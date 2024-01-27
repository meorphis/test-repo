// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ByScriptsAPI from 'cloudflare/resources/accounts/workers/deployments/by-scripts/by-scripts';
import * as DetailsAPI from 'cloudflare/resources/accounts/workers/deployments/by-scripts/details';

export class ByScripts extends APIResource {
  details: DetailsAPI.Details = new DetailsAPI.Details(this._client);

  /**
   * List Deployments
   */
  workerDeploymentsListDeployments(
    accountIdentifier: string,
    scriptIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ByScriptWorkerDeploymentsListDeploymentsResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/workers/deployments/by-script/${scriptIdentifier}`,
      options,
    );
  }
}

export interface ByScriptWorkerDeploymentsListDeploymentsResponse {
  errors?: Array<ByScriptWorkerDeploymentsListDeploymentsResponse.Error>;

  items?: Array<unknown>;

  latest?: unknown;

  messages?: Array<ByScriptWorkerDeploymentsListDeploymentsResponse.Message>;

  result?: unknown | Array<unknown> | string;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ByScriptWorkerDeploymentsListDeploymentsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export namespace ByScripts {
  export import ByScriptWorkerDeploymentsListDeploymentsResponse = ByScriptsAPI.ByScriptWorkerDeploymentsListDeploymentsResponse;
  export import Details = DetailsAPI.Details;
  export import DetailRetrieveResponse = DetailsAPI.DetailRetrieveResponse;
}
