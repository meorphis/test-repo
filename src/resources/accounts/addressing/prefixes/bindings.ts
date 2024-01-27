// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as BindingsAPI from 'cloudflare/resources/accounts/addressing/prefixes/bindings';

export class Bindings extends APIResource {
  /**
   * Creates a new Service Binding, routing traffic to IPs within the given CIDR to a
   * service running on Cloudflare's network. **Note:** This API may only be used on
   * prefixes currently configured with a Magic Transit service binding, and only
   * allows creating service bindings for the Cloudflare CDN or Cloudflare Spectrum.
   */
  create(
    accountIdentifier: string,
    prefixIdentifier: string,
    body?: BindingCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BindingCreateResponse>;
  create(
    accountIdentifier: string,
    prefixIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BindingCreateResponse>;
  create(
    accountIdentifier: string,
    prefixIdentifier: string,
    body: BindingCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BindingCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create(accountIdentifier, prefixIdentifier, {}, body);
    }
    return this._client.post(
      `/accounts/${accountIdentifier}/addressing/prefixes/${prefixIdentifier}/bindings`,
      { body, ...options },
    );
  }

  /**
   * Fetch a single Service Binding
   */
  retrieve(
    accountIdentifier: string,
    prefixIdentifier: string,
    bindingIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BindingRetrieveResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/addressing/prefixes/${prefixIdentifier}/bindings/${bindingIdentifier}`,
      options,
    );
  }

  /**
   * List the Cloudflare services this prefix is currently bound to. Traffic sent to
   * an address within an IP prefix will be routed to the Cloudflare service of the
   * most-specific Service Binding matching the address. **Example:** binding
   * `192.0.2.0/24` to Cloudflare Magic Transit and `192.0.2.1/32` to the Cloudflare
   * CDN would route traffic for `192.0.2.1` to the CDN, and traffic for all other
   * IPs in the prefix to Cloudflare Magic Transit.
   */
  list(
    accountIdentifier: string,
    prefixIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BindingListResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/addressing/prefixes/${prefixIdentifier}/bindings`,
      options,
    );
  }

  /**
   * Delete a Service Binding
   */
  delete(
    accountIdentifier: string,
    prefixIdentifier: string,
    bindingIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BindingDeleteResponse> {
    return this._client.delete(
      `/accounts/${accountIdentifier}/addressing/prefixes/${prefixIdentifier}/bindings/${bindingIdentifier}`,
      options,
    );
  }
}

export interface BindingCreateResponse {
  errors?: Array<BindingCreateResponse.Error>;

  messages?: Array<BindingCreateResponse.Message>;

  result?: BindingCreateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace BindingCreateResponse {
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
     * Identifier
     */
    id?: string;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    cidr?: string;

    /**
     * Status of a Service Binding's deployment to the Cloudflare network
     */
    provisioning?: Result.Provisioning;

    /**
     * Identifier
     */
    service_id?: string;

    /**
     * Name of a service running on the Cloudflare network
     */
    service_name?: string;
  }

  export namespace Result {
    /**
     * Status of a Service Binding's deployment to the Cloudflare network
     */
    export interface Provisioning {
      /**
       * When a binding has been deployed to a majority of Cloudflare datacenters, the
       * binding will become active and can be used with its associated service.
       */
      state?: 'provisioning' | 'active';
    }
  }
}

export interface BindingRetrieveResponse {
  errors?: Array<BindingRetrieveResponse.Error>;

  messages?: Array<BindingRetrieveResponse.Message>;

  result?: BindingRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace BindingRetrieveResponse {
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
     * Identifier
     */
    id?: string;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    cidr?: string;

    /**
     * Status of a Service Binding's deployment to the Cloudflare network
     */
    provisioning?: Result.Provisioning;

    /**
     * Identifier
     */
    service_id?: string;

    /**
     * Name of a service running on the Cloudflare network
     */
    service_name?: string;
  }

  export namespace Result {
    /**
     * Status of a Service Binding's deployment to the Cloudflare network
     */
    export interface Provisioning {
      /**
       * When a binding has been deployed to a majority of Cloudflare datacenters, the
       * binding will become active and can be used with its associated service.
       */
      state?: 'provisioning' | 'active';
    }
  }
}

export interface BindingListResponse {
  errors?: Array<BindingListResponse.Error>;

  messages?: Array<BindingListResponse.Message>;

  result?: Array<BindingListResponse.Result>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace BindingListResponse {
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
     * Identifier
     */
    id?: string;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    cidr?: string;

    /**
     * Status of a Service Binding's deployment to the Cloudflare network
     */
    provisioning?: Result.Provisioning;

    /**
     * Identifier
     */
    service_id?: string;

    /**
     * Name of a service running on the Cloudflare network
     */
    service_name?: string;
  }

  export namespace Result {
    /**
     * Status of a Service Binding's deployment to the Cloudflare network
     */
    export interface Provisioning {
      /**
       * When a binding has been deployed to a majority of Cloudflare datacenters, the
       * binding will become active and can be used with its associated service.
       */
      state?: 'provisioning' | 'active';
    }
  }
}

export interface BindingDeleteResponse {
  errors: Array<BindingDeleteResponse.Error>;

  messages: Array<BindingDeleteResponse.Message>;

  result: unknown | Array<unknown> | string;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export namespace BindingDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface BindingCreateParams {
  /**
   * IP Prefix in Classless Inter-Domain Routing format.
   */
  cidr?: string;

  /**
   * Identifier
   */
  service_id?: string;
}

export namespace Bindings {
  export import BindingCreateResponse = BindingsAPI.BindingCreateResponse;
  export import BindingRetrieveResponse = BindingsAPI.BindingRetrieveResponse;
  export import BindingListResponse = BindingsAPI.BindingListResponse;
  export import BindingDeleteResponse = BindingsAPI.BindingDeleteResponse;
  export import BindingCreateParams = BindingsAPI.BindingCreateParams;
}
