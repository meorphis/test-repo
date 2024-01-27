// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as DomainsAPI from 'cloudflare/resources/accounts/workers/domains';

export class Domains extends APIResource {
  /**
   * Gets a Worker domain.
   */
  retrieve(
    accountIdentifier: unknown,
    domainIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/workers/domains/${domainIdentifier}`, options);
  }

  /**
   * Detaches a Worker from a zone and hostname.
   */
  delete(
    accountIdentifier: unknown,
    domainIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.delete(`/accounts/${accountIdentifier}/workers/domains/${domainIdentifier}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Attaches a Worker to a zone and hostname.
   */
  workerDomainAttachToDomain(
    accountIdentifier: unknown,
    body: DomainWorkerDomainAttachToDomainParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainWorkerDomainAttachToDomainResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/workers/domains`, { body, ...options });
  }

  /**
   * Lists all Worker Domains for an account.
   */
  workerDomainListDomains(
    accountIdentifier: unknown,
    query?: DomainWorkerDomainListDomainsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainWorkerDomainListDomainsResponse>;
  workerDomainListDomains(
    accountIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainWorkerDomainListDomainsResponse>;
  workerDomainListDomains(
    accountIdentifier: unknown,
    query: DomainWorkerDomainListDomainsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainWorkerDomainListDomainsResponse> {
    if (isRequestOptions(query)) {
      return this.workerDomainListDomains(accountIdentifier, {}, query);
    }
    return this._client.get(`/accounts/${accountIdentifier}/workers/domains`, { query, ...options });
  }
}

export interface DomainRetrieveResponse {
  errors?: Array<DomainRetrieveResponse.Error>;

  messages?: Array<DomainRetrieveResponse.Message>;

  result?: DomainRetrieveResponse.Result;

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

  export interface Result {
    /**
     * Identifer of the Worker Domain.
     */
    id?: unknown;

    /**
     * Worker environment associated with the zone and hostname.
     */
    environment?: string;

    /**
     * Hostname of the Worker Domain.
     */
    hostname?: string;

    /**
     * Worker service associated with the zone and hostname.
     */
    service?: string;

    /**
     * Identifier of the zone.
     */
    zone_id?: unknown;

    /**
     * Name of the zone.
     */
    zone_name?: string;
  }
}

export interface DomainWorkerDomainAttachToDomainResponse {
  errors?: Array<DomainWorkerDomainAttachToDomainResponse.Error>;

  messages?: Array<DomainWorkerDomainAttachToDomainResponse.Message>;

  result?: DomainWorkerDomainAttachToDomainResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DomainWorkerDomainAttachToDomainResponse {
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
     * Identifer of the Worker Domain.
     */
    id?: unknown;

    /**
     * Worker environment associated with the zone and hostname.
     */
    environment?: string;

    /**
     * Hostname of the Worker Domain.
     */
    hostname?: string;

    /**
     * Worker service associated with the zone and hostname.
     */
    service?: string;

    /**
     * Identifier of the zone.
     */
    zone_id?: unknown;

    /**
     * Name of the zone.
     */
    zone_name?: string;
  }
}

export interface DomainWorkerDomainListDomainsResponse {
  errors?: Array<DomainWorkerDomainListDomainsResponse.Error>;

  messages?: Array<DomainWorkerDomainListDomainsResponse.Message>;

  result?: Array<DomainWorkerDomainListDomainsResponse.Result>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DomainWorkerDomainListDomainsResponse {
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
     * Identifer of the Worker Domain.
     */
    id?: unknown;

    /**
     * Worker environment associated with the zone and hostname.
     */
    environment?: string;

    /**
     * Hostname of the Worker Domain.
     */
    hostname?: string;

    /**
     * Worker service associated with the zone and hostname.
     */
    service?: string;

    /**
     * Identifier of the zone.
     */
    zone_id?: unknown;

    /**
     * Name of the zone.
     */
    zone_name?: string;
  }
}

export interface DomainWorkerDomainAttachToDomainParams {
  /**
   * Worker environment associated with the zone and hostname.
   */
  environment: string;

  /**
   * Hostname of the Worker Domain.
   */
  hostname: string;

  /**
   * Worker service associated with the zone and hostname.
   */
  service: string;

  /**
   * Identifier of the zone.
   */
  zone_id: unknown;
}

export interface DomainWorkerDomainListDomainsParams {
  /**
   * Worker environment associated with the zone and hostname.
   */
  environment?: string;

  /**
   * Hostname of the Worker Domain.
   */
  hostname?: string;

  /**
   * Worker service associated with the zone and hostname.
   */
  service?: string;

  /**
   * Identifier of the zone.
   */
  zone_identifier?: unknown;

  /**
   * Name of the zone.
   */
  zone_name?: string;
}

export namespace Domains {
  export import DomainRetrieveResponse = DomainsAPI.DomainRetrieveResponse;
  export import DomainWorkerDomainAttachToDomainResponse = DomainsAPI.DomainWorkerDomainAttachToDomainResponse;
  export import DomainWorkerDomainListDomainsResponse = DomainsAPI.DomainWorkerDomainListDomainsResponse;
  export import DomainWorkerDomainAttachToDomainParams = DomainsAPI.DomainWorkerDomainAttachToDomainParams;
  export import DomainWorkerDomainListDomainsParams = DomainsAPI.DomainWorkerDomainListDomainsParams;
}
