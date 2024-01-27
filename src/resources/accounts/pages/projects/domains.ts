// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DomainsAPI from 'cloudflare/resources/accounts/pages/projects/domains';

export class Domains extends APIResource {
  /**
   * Fetch a single domain.
   */
  retrieve(
    accountIdentifier: string,
    projectName: string,
    domainName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainRetrieveResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/pages/projects/${projectName}/domains/${domainName}`,
      options,
    );
  }

  /**
   * Retry the validation status of a single domain.
   */
  update(
    accountIdentifier: string,
    projectName: string,
    domainName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainUpdateResponse> {
    return this._client.patch(
      `/accounts/${accountIdentifier}/pages/projects/${projectName}/domains/${domainName}`,
      options,
    );
  }

  /**
   * Delete a Pages project's domain.
   */
  delete(
    accountIdentifier: string,
    projectName: string,
    domainName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.delete(
      `/accounts/${accountIdentifier}/pages/projects/${projectName}/domains/${domainName}`,
      options,
    );
  }

  /**
   * Add a new domain for the Pages project.
   */
  pagesDomainsAddDomain(
    accountIdentifier: string,
    projectName: string,
    body: DomainPagesDomainsAddDomainParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainPagesDomainsAddDomainResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/pages/projects/${projectName}/domains`, {
      body,
      ...options,
    });
  }

  /**
   * Fetch a list of all domains associated with a Pages project.
   */
  pagesDomainsGetDomains(
    accountIdentifier: string,
    projectName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainPagesDomainsGetDomainsResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/pages/projects/${projectName}/domains`, options);
  }
}

export interface DomainRetrieveResponse {
  errors?: Array<DomainRetrieveResponse.Error>;

  messages?: Array<DomainRetrieveResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DomainRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface DomainUpdateResponse {
  errors?: Array<DomainUpdateResponse.Error>;

  messages?: Array<DomainUpdateResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DomainUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export type DomainDeleteResponse = unknown;

export interface DomainPagesDomainsAddDomainResponse {
  errors?: Array<DomainPagesDomainsAddDomainResponse.Error>;

  messages?: Array<DomainPagesDomainsAddDomainResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DomainPagesDomainsAddDomainResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface DomainPagesDomainsGetDomainsResponse {
  errors?: Array<DomainPagesDomainsGetDomainsResponse.Error>;

  messages?: Array<DomainPagesDomainsGetDomainsResponse.Message>;

  result?: Array<unknown>;

  result_info?: DomainPagesDomainsGetDomainsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DomainPagesDomainsGetDomainsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface ResultInfo {
    count?: unknown;

    page?: unknown;

    per_page?: unknown;

    total_count?: unknown;
  }
}

export type DomainPagesDomainsAddDomainParams = unknown;

export namespace Domains {
  export import DomainRetrieveResponse = DomainsAPI.DomainRetrieveResponse;
  export import DomainUpdateResponse = DomainsAPI.DomainUpdateResponse;
  export import DomainDeleteResponse = DomainsAPI.DomainDeleteResponse;
  export import DomainPagesDomainsAddDomainResponse = DomainsAPI.DomainPagesDomainsAddDomainResponse;
  export import DomainPagesDomainsGetDomainsResponse = DomainsAPI.DomainPagesDomainsGetDomainsResponse;
  export import DomainPagesDomainsAddDomainParams = DomainsAPI.DomainPagesDomainsAddDomainParams;
}
