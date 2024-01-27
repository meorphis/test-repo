// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as AddressesAPI from 'cloudflare/resources/accounts/emails/routings/addresses';
import { Page } from 'cloudflare/pagination';

export class Addresses extends APIResource {
  /**
   * Gets information for a specific destination email already created.
   */
  retrieve(
    accountIdentifier: string,
    destinationAddressIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressRetrieveResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/email/routing/addresses/${destinationAddressIdentifier}`,
      options,
    );
  }

  /**
   * Deletes a specific destination address.
   */
  delete(
    accountIdentifier: string,
    destinationAddressIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressDeleteResponse> {
    return this._client.delete(
      `/accounts/${accountIdentifier}/email/routing/addresses/${destinationAddressIdentifier}`,
      options,
    );
  }

  /**
   * Create a destination address to forward your emails to. Destination addresses
   * need to be verified before they can be used.
   */
  emailRoutingDestinationAddressesCreateADestinationAddress(
    accountIdentifier: string,
    body: AddressEmailRoutingDestinationAddressesCreateADestinationAddressParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressEmailRoutingDestinationAddressesCreateADestinationAddressResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/email/routing/addresses`, { body, ...options });
  }

  /**
   * Lists existing destination addresses.
   */
  emailRoutingDestinationAddressesListDestinationAddresses(
    accountIdentifier: string,
    query?: AddressEmailRoutingDestinationAddressesListDestinationAddressesParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    AddressEmailRoutingDestinationAddressesListDestinationAddressesResponsesPage,
    AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse
  >;
  emailRoutingDestinationAddressesListDestinationAddresses(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    AddressEmailRoutingDestinationAddressesListDestinationAddressesResponsesPage,
    AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse
  >;
  emailRoutingDestinationAddressesListDestinationAddresses(
    accountIdentifier: string,
    query: AddressEmailRoutingDestinationAddressesListDestinationAddressesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    AddressEmailRoutingDestinationAddressesListDestinationAddressesResponsesPage,
    AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse
  > {
    if (isRequestOptions(query)) {
      return this.emailRoutingDestinationAddressesListDestinationAddresses(accountIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/accounts/${accountIdentifier}/email/routing/addresses`,
      AddressEmailRoutingDestinationAddressesListDestinationAddressesResponsesPage,
      { query, ...options },
    );
  }
}

export class AddressEmailRoutingDestinationAddressesListDestinationAddressesResponsesPage extends Page<AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse> {}

export interface AddressRetrieveResponse {
  errors?: Array<AddressRetrieveResponse.Error>;

  messages?: Array<AddressRetrieveResponse.Message>;

  result?: AddressRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AddressRetrieveResponse {
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
     * The date and time the destination address has been created.
     */
    created?: string;

    /**
     * The contact email address of the user.
     */
    email?: string;

    /**
     * The date and time the destination address was last modified.
     */
    modified?: string;

    /**
     * Destination address identifier.
     */
    tag?: string;

    /**
     * The date and time the destination address has been verified. Null means not
     * verified yet.
     */
    verified?: string;
  }
}

export interface AddressDeleteResponse {
  errors?: Array<AddressDeleteResponse.Error>;

  messages?: Array<AddressDeleteResponse.Message>;

  result?: AddressDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AddressDeleteResponse {
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
     * The date and time the destination address has been created.
     */
    created?: string;

    /**
     * The contact email address of the user.
     */
    email?: string;

    /**
     * The date and time the destination address was last modified.
     */
    modified?: string;

    /**
     * Destination address identifier.
     */
    tag?: string;

    /**
     * The date and time the destination address has been verified. Null means not
     * verified yet.
     */
    verified?: string;
  }
}

export interface AddressEmailRoutingDestinationAddressesCreateADestinationAddressResponse {
  errors?: Array<AddressEmailRoutingDestinationAddressesCreateADestinationAddressResponse.Error>;

  messages?: Array<AddressEmailRoutingDestinationAddressesCreateADestinationAddressResponse.Message>;

  result?: AddressEmailRoutingDestinationAddressesCreateADestinationAddressResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AddressEmailRoutingDestinationAddressesCreateADestinationAddressResponse {
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
     * The date and time the destination address has been created.
     */
    created?: string;

    /**
     * The contact email address of the user.
     */
    email?: string;

    /**
     * The date and time the destination address was last modified.
     */
    modified?: string;

    /**
     * Destination address identifier.
     */
    tag?: string;

    /**
     * The date and time the destination address has been verified. Null means not
     * verified yet.
     */
    verified?: string;
  }
}

export interface AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse {
  /**
   * The date and time the destination address has been created.
   */
  created?: string;

  /**
   * The contact email address of the user.
   */
  email?: string;

  /**
   * The date and time the destination address was last modified.
   */
  modified?: string;

  /**
   * Destination address identifier.
   */
  tag?: string;

  /**
   * The date and time the destination address has been verified. Null means not
   * verified yet.
   */
  verified?: string;
}

export interface AddressEmailRoutingDestinationAddressesCreateADestinationAddressParams {
  /**
   * The contact email address of the user.
   */
  email: string;
}

export interface AddressEmailRoutingDestinationAddressesListDestinationAddressesParams {
  /**
   * Sorts results in an ascending or descending order.
   */
  direction?: 'asc' | 'desc';

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Maximum number of results per page.
   */
  per_page?: number;

  /**
   * Filter by verified destination addresses.
   */
  verified?: true | false;
}

export namespace Addresses {
  export import AddressRetrieveResponse = AddressesAPI.AddressRetrieveResponse;
  export import AddressDeleteResponse = AddressesAPI.AddressDeleteResponse;
  export import AddressEmailRoutingDestinationAddressesCreateADestinationAddressResponse = AddressesAPI.AddressEmailRoutingDestinationAddressesCreateADestinationAddressResponse;
  export import AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse = AddressesAPI.AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse;
  export import AddressEmailRoutingDestinationAddressesListDestinationAddressesResponsesPage = AddressesAPI.AddressEmailRoutingDestinationAddressesListDestinationAddressesResponsesPage;
  export import AddressEmailRoutingDestinationAddressesCreateADestinationAddressParams = AddressesAPI.AddressEmailRoutingDestinationAddressesCreateADestinationAddressParams;
  export import AddressEmailRoutingDestinationAddressesListDestinationAddressesParams = AddressesAPI.AddressEmailRoutingDestinationAddressesListDestinationAddressesParams;
}
