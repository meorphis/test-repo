// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DomainsAPI from 'cloudflare/resources/accounts/registrar/domains';

export class Domains extends APIResource {
  /**
   * Show individual domain.
   */
  retrieve(
    accountIdentifier: string,
    domainName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/registrar/domains/${domainName}`, options);
  }

  /**
   * Update individual domain.
   */
  update(
    accountIdentifier: string,
    domainName: string,
    body: DomainUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainUpdateResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/registrar/domains/${domainName}`, {
      body,
      ...options,
    });
  }

  /**
   * List domains handled by Registrar.
   */
  list(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RegistrarAPIDomainResponseCollection> {
    return this._client.get(`/accounts/${accountIdentifier}/registrar/domains`, options);
  }
}

export interface RegistrarAPIDomainResponseCollection {
  errors?: Array<RegistrarAPIDomainResponseCollection.Error>;

  messages?: Array<RegistrarAPIDomainResponseCollection.Message>;

  result?: Array<RegistrarAPIDomainResponseCollection.Result>;

  result_info?: RegistrarAPIDomainResponseCollection.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RegistrarAPIDomainResponseCollection {
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
     * Domain identifier.
     */
    id?: string;

    /**
     * Shows if a domain is available for transferring into Cloudflare Registrar.
     */
    available?: boolean;

    /**
     * Indicates if the domain can be registered as a new domain.
     */
    can_register?: boolean;

    /**
     * Shows time of creation.
     */
    created_at?: string;

    /**
     * Shows name of current registrar.
     */
    current_registrar?: string;

    /**
     * Shows when domain name registration expires.
     */
    expires_at?: string;

    /**
     * Shows whether a registrar lock is in place for a domain.
     */
    locked?: boolean;

    registrant_contact?: Result.RegistrantContact;

    /**
     * A comma-separated list of registry status codes. A full list of status codes can
     * be found at
     * [EPP Status Codes](https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en).
     */
    registry_statuses?: string;

    /**
     * Whether a particular TLD is currently supported by Cloudflare Registrar. Refer
     * to [TLD Policies](https://www.cloudflare.com/tld-policies/) for a list of
     * supported TLDs.
     */
    supported_tld?: boolean;

    /**
     * Statuses for domain transfers into Cloudflare Registrar.
     */
    transfer_in?: Result.TransferIn;

    /**
     * Last updated.
     */
    updated_at?: string;
  }

  export namespace Result {
    export interface RegistrantContact {
      /**
       * Address.
       */
      address: string;

      /**
       * City.
       */
      city: string;

      /**
       * The country in which the user lives.
       */
      country: string | null;

      /**
       * User's first name
       */
      first_name: string | null;

      /**
       * User's last name
       */
      last_name: string | null;

      /**
       * Name of organization.
       */
      organization: string;

      /**
       * User's telephone number
       */
      phone: string | null;

      /**
       * State.
       */
      state: string;

      /**
       * The zipcode or postal code where the user lives.
       */
      zip: string | null;

      /**
       * Contact Identifier.
       */
      id?: string;

      /**
       * Optional address line for unit, floor, suite, etc.
       */
      address2?: string;

      /**
       * The contact email address of the user.
       */
      email?: string;

      /**
       * Contact fax number.
       */
      fax?: string;
    }

    /**
     * Statuses for domain transfers into Cloudflare Registrar.
     */
    export interface TransferIn {
      /**
       * Form of authorization has been accepted by the registrant.
       */
      accept_foa?: unknown;

      /**
       * Shows transfer status with the registry.
       */
      approve_transfer?: unknown;

      /**
       * Indicates if cancellation is still possible.
       */
      can_cancel_transfer?: boolean;

      /**
       * Privacy guards are disabled at the foreign registrar.
       */
      disable_privacy?: unknown;

      /**
       * Auth code has been entered and verified.
       */
      enter_auth_code?: unknown;

      /**
       * Domain is unlocked at the foreign registrar.
       */
      unlock_domain?: unknown;
    }
  }

  export interface ResultInfo {
    /**
     * Total number of results for the requested service
     */
    count?: number;

    /**
     * Current page within paginated list of results
     */
    page?: number;

    /**
     * Number of results per page of results
     */
    per_page?: number;

    /**
     * Total results available without any search parameters
     */
    total_count?: number;
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

export interface DomainUpdateParams {
  /**
   * Auto-renew controls whether subscription is automatically renewed upon domain
   * expiration.
   */
  auto_renew?: boolean;

  /**
   * Shows whether a registrar lock is in place for a domain.
   */
  locked?: boolean;

  /**
   * Privacy option controls redacting WHOIS information.
   */
  privacy?: boolean;
}

export namespace Domains {
  export import RegistrarAPIDomainResponseCollection = DomainsAPI.RegistrarAPIDomainResponseCollection;
  export import DomainRetrieveResponse = DomainsAPI.DomainRetrieveResponse;
  export import DomainUpdateResponse = DomainsAPI.DomainUpdateResponse;
  export import DomainUpdateParams = DomainsAPI.DomainUpdateParams;
}
