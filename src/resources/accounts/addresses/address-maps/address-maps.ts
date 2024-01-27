// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AddressMapsAPI from 'cloudflare/resources/accounts/addresses/address-maps/address-maps';
import * as AccountsAPI from 'cloudflare/resources/accounts/addresses/address-maps/accounts';
import * as IPsAPI from 'cloudflare/resources/accounts/addresses/address-maps/ips';
import * as ZonesAPI from 'cloudflare/resources/accounts/addresses/address-maps/zones';

export class AddressMaps extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  ips: IPsAPI.IPs = new IPsAPI.IPs(this._client);
  zones: ZonesAPI.Zones = new ZonesAPI.Zones(this._client);

  /**
   * Create a new address map under the account.
   */
  create(
    accountIdentifier: string,
    body: AddressMapCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressMapCreateResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/addressing/address_maps`, { body, ...options });
  }

  /**
   * Show a particular address map owned by the account.
   */
  retrieve(
    accountIdentifier: string,
    addressMapIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressMapRetrieveResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/addressing/address_maps/${addressMapIdentifier}`,
      options,
    );
  }

  /**
   * Modify properties of an address map owned by the account.
   */
  update(
    accountIdentifier: string,
    addressMapIdentifier: string,
    body: AddressMapUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressMapUpdateResponse> {
    return this._client.patch(
      `/accounts/${accountIdentifier}/addressing/address_maps/${addressMapIdentifier}`,
      { body, ...options },
    );
  }

  /**
   * List all address maps owned by the account.
   */
  list(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<AddressMapListResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/addressing/address_maps`, options);
  }

  /**
   * Delete a particular address map owned by the account. An Address Map must be
   * disabled before it can be deleted.
   */
  delete(
    accountIdentifier: string,
    addressMapIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressMapDeleteResponse> {
    return this._client.delete(
      `/accounts/${accountIdentifier}/addressing/address_maps/${addressMapIdentifier}`,
      options,
    );
  }
}

export interface AddressMapCreateResponse {
  errors?: Array<AddressMapCreateResponse.Error>;

  messages?: Array<AddressMapCreateResponse.Message>;

  result?: AddressMapCreateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AddressMapCreateResponse {
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
     * If set to false, then the Address Map cannot be deleted via API. This is true
     * for Cloudflare-managed maps.
     */
    can_delete?: boolean;

    /**
     * If set to false, then the IPs on the Address Map cannot be modified via the API.
     * This is true for Cloudflare-managed maps.
     */
    can_modify_ips?: boolean;

    created_at?: string;

    /**
     * If you have legacy TLS clients which do not send the TLS server name indicator,
     * then you can specify one default SNI on the map. If Cloudflare receives a TLS
     * handshake from a client without an SNI, it will respond with the default SNI on
     * those IPs. The default SNI can be any valid zone or subdomain owned by the
     * account.
     */
    default_sni?: string | null;

    /**
     * An optional description field which may be used to describe the types of IPs or
     * zones on the map.
     */
    description?: string | null;

    /**
     * Whether the Address Map is enabled or not. Cloudflare's DNS will not respond
     * with IP addresses on an Address Map until the map is enabled.
     */
    enabled?: boolean | null;

    /**
     * The set of IPs on the Address Map.
     */
    ips?: Array<Result.IP>;

    /**
     * Zones and Accounts which will be assigned IPs on this Address Map. A zone
     * membership will take priority over an account membership.
     */
    memberships?: Array<Result.Membership>;

    modified_at?: string;
  }

  export namespace Result {
    export interface IP {
      created_at?: string;

      /**
       * An IPv4 or IPv6 address.
       */
      ip?: string;
    }

    export interface Membership {
      /**
       * Controls whether the membership can be deleted via the API or not.
       */
      can_delete?: boolean;

      created_at?: string;

      /**
       * Identifier
       */
      identifier?: string;

      /**
       * The type of the membership.
       */
      kind?: 'zone' | 'account';
    }
  }
}

export interface AddressMapRetrieveResponse {
  errors?: Array<AddressMapRetrieveResponse.Error>;

  messages?: Array<AddressMapRetrieveResponse.Message>;

  result?: AddressMapRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AddressMapRetrieveResponse {
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
     * If set to false, then the Address Map cannot be deleted via API. This is true
     * for Cloudflare-managed maps.
     */
    can_delete?: boolean;

    /**
     * If set to false, then the IPs on the Address Map cannot be modified via the API.
     * This is true for Cloudflare-managed maps.
     */
    can_modify_ips?: boolean;

    created_at?: string;

    /**
     * If you have legacy TLS clients which do not send the TLS server name indicator,
     * then you can specify one default SNI on the map. If Cloudflare receives a TLS
     * handshake from a client without an SNI, it will respond with the default SNI on
     * those IPs. The default SNI can be any valid zone or subdomain owned by the
     * account.
     */
    default_sni?: string | null;

    /**
     * An optional description field which may be used to describe the types of IPs or
     * zones on the map.
     */
    description?: string | null;

    /**
     * Whether the Address Map is enabled or not. Cloudflare's DNS will not respond
     * with IP addresses on an Address Map until the map is enabled.
     */
    enabled?: boolean | null;

    /**
     * The set of IPs on the Address Map.
     */
    ips?: Array<Result.IP>;

    /**
     * Zones and Accounts which will be assigned IPs on this Address Map. A zone
     * membership will take priority over an account membership.
     */
    memberships?: Array<Result.Membership>;

    modified_at?: string;
  }

  export namespace Result {
    export interface IP {
      created_at?: string;

      /**
       * An IPv4 or IPv6 address.
       */
      ip?: string;
    }

    export interface Membership {
      /**
       * Controls whether the membership can be deleted via the API or not.
       */
      can_delete?: boolean;

      created_at?: string;

      /**
       * Identifier
       */
      identifier?: string;

      /**
       * The type of the membership.
       */
      kind?: 'zone' | 'account';
    }
  }
}

export interface AddressMapUpdateResponse {
  errors?: Array<AddressMapUpdateResponse.Error>;

  messages?: Array<AddressMapUpdateResponse.Message>;

  result?: AddressMapUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AddressMapUpdateResponse {
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
     * If set to false, then the Address Map cannot be deleted via API. This is true
     * for Cloudflare-managed maps.
     */
    can_delete?: boolean;

    /**
     * If set to false, then the IPs on the Address Map cannot be modified via the API.
     * This is true for Cloudflare-managed maps.
     */
    can_modify_ips?: boolean;

    created_at?: string;

    /**
     * If you have legacy TLS clients which do not send the TLS server name indicator,
     * then you can specify one default SNI on the map. If Cloudflare receives a TLS
     * handshake from a client without an SNI, it will respond with the default SNI on
     * those IPs. The default SNI can be any valid zone or subdomain owned by the
     * account.
     */
    default_sni?: string | null;

    /**
     * An optional description field which may be used to describe the types of IPs or
     * zones on the map.
     */
    description?: string | null;

    /**
     * Whether the Address Map is enabled or not. Cloudflare's DNS will not respond
     * with IP addresses on an Address Map until the map is enabled.
     */
    enabled?: boolean | null;

    modified_at?: string;
  }
}

export interface AddressMapListResponse {
  errors?: Array<AddressMapListResponse.Error>;

  messages?: Array<AddressMapListResponse.Message>;

  result?: Array<AddressMapListResponse.Result>;

  result_info?: AddressMapListResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AddressMapListResponse {
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
     * If set to false, then the Address Map cannot be deleted via API. This is true
     * for Cloudflare-managed maps.
     */
    can_delete?: boolean;

    /**
     * If set to false, then the IPs on the Address Map cannot be modified via the API.
     * This is true for Cloudflare-managed maps.
     */
    can_modify_ips?: boolean;

    created_at?: string;

    /**
     * If you have legacy TLS clients which do not send the TLS server name indicator,
     * then you can specify one default SNI on the map. If Cloudflare receives a TLS
     * handshake from a client without an SNI, it will respond with the default SNI on
     * those IPs. The default SNI can be any valid zone or subdomain owned by the
     * account.
     */
    default_sni?: string | null;

    /**
     * An optional description field which may be used to describe the types of IPs or
     * zones on the map.
     */
    description?: string | null;

    /**
     * Whether the Address Map is enabled or not. Cloudflare's DNS will not respond
     * with IP addresses on an Address Map until the map is enabled.
     */
    enabled?: boolean | null;

    modified_at?: string;
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

export interface AddressMapDeleteResponse {
  errors?: Array<AddressMapDeleteResponse.Error>;

  messages?: Array<AddressMapDeleteResponse.Message>;

  result?: Array<unknown> | null;

  result_info?: AddressMapDeleteResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AddressMapDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
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

export interface AddressMapCreateParams {
  /**
   * An optional description field which may be used to describe the types of IPs or
   * zones on the map.
   */
  description?: string | null;

  /**
   * Whether the Address Map is enabled or not. Cloudflare's DNS will not respond
   * with IP addresses on an Address Map until the map is enabled.
   */
  enabled?: boolean | null;
}

export interface AddressMapUpdateParams {
  /**
   * If you have legacy TLS clients which do not send the TLS server name indicator,
   * then you can specify one default SNI on the map. If Cloudflare receives a TLS
   * handshake from a client without an SNI, it will respond with the default SNI on
   * those IPs. The default SNI can be any valid zone or subdomain owned by the
   * account.
   */
  default_sni?: string | null;

  /**
   * An optional description field which may be used to describe the types of IPs or
   * zones on the map.
   */
  description?: string | null;

  /**
   * Whether the Address Map is enabled or not. Cloudflare's DNS will not respond
   * with IP addresses on an Address Map until the map is enabled.
   */
  enabled?: boolean | null;
}

export namespace AddressMaps {
  export import AddressMapCreateResponse = AddressMapsAPI.AddressMapCreateResponse;
  export import AddressMapRetrieveResponse = AddressMapsAPI.AddressMapRetrieveResponse;
  export import AddressMapUpdateResponse = AddressMapsAPI.AddressMapUpdateResponse;
  export import AddressMapListResponse = AddressMapsAPI.AddressMapListResponse;
  export import AddressMapDeleteResponse = AddressMapsAPI.AddressMapDeleteResponse;
  export import AddressMapCreateParams = AddressMapsAPI.AddressMapCreateParams;
  export import AddressMapUpdateParams = AddressMapsAPI.AddressMapUpdateParams;
  export import Accounts = AccountsAPI.Accounts;
  export import AccountUpdateResponse = AccountsAPI.AccountUpdateResponse;
  export import AccountDeleteResponse = AccountsAPI.AccountDeleteResponse;
  export import IPs = IPsAPI.IPs;
  export import IPUpdateResponse = IPsAPI.IPUpdateResponse;
  export import IPDeleteResponse = IPsAPI.IPDeleteResponse;
  export import Zones = ZonesAPI.Zones;
  export import ZoneUpdateResponse = ZonesAPI.ZoneUpdateResponse;
  export import ZoneDeleteResponse = ZonesAPI.ZoneDeleteResponse;
}
