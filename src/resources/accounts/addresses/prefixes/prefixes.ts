// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PrefixesAPI from 'cloudflare/resources/accounts/addresses/prefixes/prefixes';
import * as DelegationsAPI from 'cloudflare/resources/accounts/addresses/prefixes/delegations';
import * as BgpsAPI from 'cloudflare/resources/accounts/addresses/prefixes/bgps/bgps';

export class Prefixes extends APIResource {
  bgps: BgpsAPI.Bgps = new BgpsAPI.Bgps(this._client);
  delegations: DelegationsAPI.Delegations = new DelegationsAPI.Delegations(this._client);

  /**
   * List a particular prefix owned by the account.
   */
  retrieve(
    accountIdentifier: string,
    prefixIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefixRetrieveResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/addressing/prefixes/${prefixIdentifier}`,
      options,
    );
  }

  /**
   * Modify the description for a prefix owned by the account.
   */
  update(
    accountIdentifier: string,
    prefixIdentifier: string,
    body: PrefixUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefixUpdateResponse> {
    return this._client.patch(`/accounts/${accountIdentifier}/addressing/prefixes/${prefixIdentifier}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete an unapproved prefix owned by the account.
   */
  delete(
    accountIdentifier: string,
    prefixIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefixDeleteResponse> {
    return this._client.delete(
      `/accounts/${accountIdentifier}/addressing/prefixes/${prefixIdentifier}`,
      options,
    );
  }

  /**
   * Add a new prefix under the account.
   */
  ipAddressManagementPrefixesAddPrefix(
    accountIdentifier: string,
    body: PrefixIPAddressManagementPrefixesAddPrefixParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefixIPAddressManagementPrefixesAddPrefixResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/addressing/prefixes`, { body, ...options });
  }

  /**
   * List all prefixes owned by the account.
   */
  ipAddressManagementPrefixesListPrefixes(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefixIPAddressManagementPrefixesListPrefixesResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/addressing/prefixes`, options);
  }
}

export interface PrefixRetrieveResponse {
  errors?: Array<PrefixRetrieveResponse.Error>;

  messages?: Array<PrefixRetrieveResponse.Message>;

  result?: PrefixRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PrefixRetrieveResponse {
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
     * Identifier
     */
    account_id?: string;

    /**
     * Prefix advertisement status to the Internet. This field is only not 'null' if on
     * demand is enabled.
     */
    advertised?: boolean | null;

    /**
     * Last time the advertisement status was changed. This field is only not 'null' if
     * on demand is enabled.
     */
    advertised_modified_at?: string | null;

    /**
     * Approval state of the prefix (P = pending, V = active).
     */
    approved?: string;

    /**
     * Autonomous System Number (ASN) the prefix will be advertised under.
     */
    asn?: number | null;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    cidr?: string;

    created_at?: string;

    /**
     * Description of the prefix.
     */
    description?: string;

    /**
     * Identifier for the uploaded LOA document.
     */
    loa_document_id?: string | null;

    modified_at?: string;

    /**
     * Whether advertisement of the prefix to the Internet may be dynamically enabled
     * or disabled.
     */
    on_demand_enabled?: boolean;

    /**
     * Whether advertisement status of the prefix is locked, meaning it cannot be
     * changed.
     */
    on_demand_locked?: boolean;
  }
}

export interface PrefixUpdateResponse {
  errors?: Array<PrefixUpdateResponse.Error>;

  messages?: Array<PrefixUpdateResponse.Message>;

  result?: PrefixUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PrefixUpdateResponse {
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
     * Identifier
     */
    account_id?: string;

    /**
     * Prefix advertisement status to the Internet. This field is only not 'null' if on
     * demand is enabled.
     */
    advertised?: boolean | null;

    /**
     * Last time the advertisement status was changed. This field is only not 'null' if
     * on demand is enabled.
     */
    advertised_modified_at?: string | null;

    /**
     * Approval state of the prefix (P = pending, V = active).
     */
    approved?: string;

    /**
     * Autonomous System Number (ASN) the prefix will be advertised under.
     */
    asn?: number | null;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    cidr?: string;

    created_at?: string;

    /**
     * Description of the prefix.
     */
    description?: string;

    /**
     * Identifier for the uploaded LOA document.
     */
    loa_document_id?: string | null;

    modified_at?: string;

    /**
     * Whether advertisement of the prefix to the Internet may be dynamically enabled
     * or disabled.
     */
    on_demand_enabled?: boolean;

    /**
     * Whether advertisement status of the prefix is locked, meaning it cannot be
     * changed.
     */
    on_demand_locked?: boolean;
  }
}

export interface PrefixDeleteResponse {
  errors?: Array<PrefixDeleteResponse.Error>;

  messages?: Array<PrefixDeleteResponse.Message>;

  result?: Array<unknown> | null;

  result_info?: PrefixDeleteResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PrefixDeleteResponse {
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

export interface PrefixIPAddressManagementPrefixesAddPrefixResponse {
  errors?: Array<PrefixIPAddressManagementPrefixesAddPrefixResponse.Error>;

  messages?: Array<PrefixIPAddressManagementPrefixesAddPrefixResponse.Message>;

  result?: PrefixIPAddressManagementPrefixesAddPrefixResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PrefixIPAddressManagementPrefixesAddPrefixResponse {
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
     * Identifier
     */
    account_id?: string;

    /**
     * Prefix advertisement status to the Internet. This field is only not 'null' if on
     * demand is enabled.
     */
    advertised?: boolean | null;

    /**
     * Last time the advertisement status was changed. This field is only not 'null' if
     * on demand is enabled.
     */
    advertised_modified_at?: string | null;

    /**
     * Approval state of the prefix (P = pending, V = active).
     */
    approved?: string;

    /**
     * Autonomous System Number (ASN) the prefix will be advertised under.
     */
    asn?: number | null;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    cidr?: string;

    created_at?: string;

    /**
     * Description of the prefix.
     */
    description?: string;

    /**
     * Identifier for the uploaded LOA document.
     */
    loa_document_id?: string | null;

    modified_at?: string;

    /**
     * Whether advertisement of the prefix to the Internet may be dynamically enabled
     * or disabled.
     */
    on_demand_enabled?: boolean;

    /**
     * Whether advertisement status of the prefix is locked, meaning it cannot be
     * changed.
     */
    on_demand_locked?: boolean;
  }
}

export interface PrefixIPAddressManagementPrefixesListPrefixesResponse {
  errors?: Array<PrefixIPAddressManagementPrefixesListPrefixesResponse.Error>;

  messages?: Array<PrefixIPAddressManagementPrefixesListPrefixesResponse.Message>;

  result?: Array<PrefixIPAddressManagementPrefixesListPrefixesResponse.Result>;

  result_info?: PrefixIPAddressManagementPrefixesListPrefixesResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PrefixIPAddressManagementPrefixesListPrefixesResponse {
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
     * Identifier
     */
    account_id?: string;

    /**
     * Prefix advertisement status to the Internet. This field is only not 'null' if on
     * demand is enabled.
     */
    advertised?: boolean | null;

    /**
     * Last time the advertisement status was changed. This field is only not 'null' if
     * on demand is enabled.
     */
    advertised_modified_at?: string | null;

    /**
     * Approval state of the prefix (P = pending, V = active).
     */
    approved?: string;

    /**
     * Autonomous System Number (ASN) the prefix will be advertised under.
     */
    asn?: number | null;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    cidr?: string;

    created_at?: string;

    /**
     * Description of the prefix.
     */
    description?: string;

    /**
     * Identifier for the uploaded LOA document.
     */
    loa_document_id?: string | null;

    modified_at?: string;

    /**
     * Whether advertisement of the prefix to the Internet may be dynamically enabled
     * or disabled.
     */
    on_demand_enabled?: boolean;

    /**
     * Whether advertisement status of the prefix is locked, meaning it cannot be
     * changed.
     */
    on_demand_locked?: boolean;
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

export interface PrefixUpdateParams {
  /**
   * Description of the prefix.
   */
  description: string;
}

export interface PrefixIPAddressManagementPrefixesAddPrefixParams {
  /**
   * Autonomous System Number (ASN) the prefix will be advertised under.
   */
  asn: number | null;

  /**
   * IP Prefix in Classless Inter-Domain Routing format.
   */
  cidr: string;

  /**
   * Identifier for the uploaded LOA document.
   */
  loa_document_id: string | null;
}

export namespace Prefixes {
  export import PrefixRetrieveResponse = PrefixesAPI.PrefixRetrieveResponse;
  export import PrefixUpdateResponse = PrefixesAPI.PrefixUpdateResponse;
  export import PrefixDeleteResponse = PrefixesAPI.PrefixDeleteResponse;
  export import PrefixIPAddressManagementPrefixesAddPrefixResponse = PrefixesAPI.PrefixIPAddressManagementPrefixesAddPrefixResponse;
  export import PrefixIPAddressManagementPrefixesListPrefixesResponse = PrefixesAPI.PrefixIPAddressManagementPrefixesListPrefixesResponse;
  export import PrefixUpdateParams = PrefixesAPI.PrefixUpdateParams;
  export import PrefixIPAddressManagementPrefixesAddPrefixParams = PrefixesAPI.PrefixIPAddressManagementPrefixesAddPrefixParams;
  export import Bgps = BgpsAPI.Bgps;
  export import Delegations = DelegationsAPI.Delegations;
  export import DelegationDeleteResponse = DelegationsAPI.DelegationDeleteResponse;
  export import DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationResponse = DelegationsAPI.DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationResponse;
  export import DelegationIPAddressManagementPrefixDelegationListPrefixDelegationsResponse = DelegationsAPI.DelegationIPAddressManagementPrefixDelegationListPrefixDelegationsResponse;
  export import DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationParams = DelegationsAPI.DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationParams;
}
