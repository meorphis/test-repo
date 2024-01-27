// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SubdomainsAPI from 'cloudflare/resources/accounts/workers/subdomains';

export class Subdomains extends APIResource {
  /**
   * Creates a Workers subdomain for an account.
   */
  workerSubdomainCreateSubdomain(
    accountIdentifier: string,
    body: SubdomainWorkerSubdomainCreateSubdomainParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubdomainWorkerSubdomainCreateSubdomainResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/workers/subdomain`, { body, ...options });
  }

  /**
   * Returns a Workers subdomain for an account.
   */
  workerSubdomainGetSubdomain(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubdomainWorkerSubdomainGetSubdomainResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/workers/subdomain`, options);
  }
}

export interface SubdomainWorkerSubdomainCreateSubdomainResponse {
  errors?: Array<SubdomainWorkerSubdomainCreateSubdomainResponse.Error>;

  messages?: Array<SubdomainWorkerSubdomainCreateSubdomainResponse.Message>;

  result?: SubdomainWorkerSubdomainCreateSubdomainResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SubdomainWorkerSubdomainCreateSubdomainResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    name?: unknown;
  }
}

export interface SubdomainWorkerSubdomainGetSubdomainResponse {
  errors?: Array<SubdomainWorkerSubdomainGetSubdomainResponse.Error>;

  messages?: Array<SubdomainWorkerSubdomainGetSubdomainResponse.Message>;

  result?: SubdomainWorkerSubdomainGetSubdomainResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SubdomainWorkerSubdomainGetSubdomainResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    name?: unknown;
  }
}

export type SubdomainWorkerSubdomainCreateSubdomainParams = unknown;

export namespace Subdomains {
  export import SubdomainWorkerSubdomainCreateSubdomainResponse = SubdomainsAPI.SubdomainWorkerSubdomainCreateSubdomainResponse;
  export import SubdomainWorkerSubdomainGetSubdomainResponse = SubdomainsAPI.SubdomainWorkerSubdomainGetSubdomainResponse;
  export import SubdomainWorkerSubdomainCreateSubdomainParams = SubdomainsAPI.SubdomainWorkerSubdomainCreateSubdomainParams;
}
