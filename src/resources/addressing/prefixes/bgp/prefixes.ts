// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PrefixesAPI from 'cloudflare/resources/addressing/prefixes/bgp/prefixes';

export class Prefixes extends APIResource {
  /**
   * Retrieve a single BGP Prefix according to its identifier
   */
  retrieve(
    accountIdentifier: string,
    prefixIdentifier: string,
    bgpPrefixIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefixRetrieveResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/addressing/prefixes/${prefixIdentifier}/bgp/prefixes/${bgpPrefixIdentifier}`,
      options,
    );
  }

  /**
   * Update the properties of a BGP Prefix, such as the on demand advertisement
   * status (advertised or withdrawn).
   */
  update(
    accountIdentifier: string,
    prefixIdentifier: string,
    bgpPrefixIdentifier: string,
    body: PrefixUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefixUpdateResponse> {
    return this._client.patch(
      `/accounts/${accountIdentifier}/addressing/prefixes/${prefixIdentifier}/bgp/prefixes/${bgpPrefixIdentifier}`,
      { body, ...options },
    );
  }

  /**
   * List all BGP Prefixes within the specified IP Prefix. BGP Prefixes are used to
   * control which specific subnets are advertised to the Internet. It is possible to
   * advertise subnets more specific than an IP Prefix by creating more specific BGP
   * Prefixes.
   */
  list(
    accountIdentifier: string,
    prefixIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefixListResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/addressing/prefixes/${prefixIdentifier}/bgp/prefixes`,
      options,
    );
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
     * Autonomous System Number (ASN) the prefix will be advertised under.
     */
    asn?: number | null;

    bgp_signal_opts?: Result.BgpSignalOpts;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    cidr?: string;

    created_at?: string;

    modified_at?: string;

    on_demand?: Result.OnDemand;
  }

  export namespace Result {
    export interface BgpSignalOpts {
      /**
       * Whether control of advertisement of the prefix to the Internet is enabled to be
       * performed via BGP signal
       */
      enabled?: boolean;

      /**
       * Last time BGP signaling control was toggled. This field is null if BGP signaling
       * has never been enabled.
       */
      modified_at?: string | null;
    }

    export interface OnDemand {
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
     * Autonomous System Number (ASN) the prefix will be advertised under.
     */
    asn?: number | null;

    bgp_signal_opts?: Result.BgpSignalOpts;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    cidr?: string;

    created_at?: string;

    modified_at?: string;

    on_demand?: Result.OnDemand;
  }

  export namespace Result {
    export interface BgpSignalOpts {
      /**
       * Whether control of advertisement of the prefix to the Internet is enabled to be
       * performed via BGP signal
       */
      enabled?: boolean;

      /**
       * Last time BGP signaling control was toggled. This field is null if BGP signaling
       * has never been enabled.
       */
      modified_at?: string | null;
    }

    export interface OnDemand {
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
}

export interface PrefixListResponse {
  errors?: Array<PrefixListResponse.Error>;

  messages?: Array<PrefixListResponse.Message>;

  result?: Array<PrefixListResponse.Result>;

  result_info?: PrefixListResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PrefixListResponse {
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
     * Autonomous System Number (ASN) the prefix will be advertised under.
     */
    asn?: number | null;

    bgp_signal_opts?: Result.BgpSignalOpts;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    cidr?: string;

    created_at?: string;

    modified_at?: string;

    on_demand?: Result.OnDemand;
  }

  export namespace Result {
    export interface BgpSignalOpts {
      /**
       * Whether control of advertisement of the prefix to the Internet is enabled to be
       * performed via BGP signal
       */
      enabled?: boolean;

      /**
       * Last time BGP signaling control was toggled. This field is null if BGP signaling
       * has never been enabled.
       */
      modified_at?: string | null;
    }

    export interface OnDemand {
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
  on_demand?: PrefixUpdateParams.OnDemand;
}

export namespace PrefixUpdateParams {
  export interface OnDemand {
    advertised?: boolean;
  }
}

export namespace Prefixes {
  export import PrefixRetrieveResponse = PrefixesAPI.PrefixRetrieveResponse;
  export import PrefixUpdateResponse = PrefixesAPI.PrefixUpdateResponse;
  export import PrefixListResponse = PrefixesAPI.PrefixListResponse;
  export import PrefixUpdateParams = PrefixesAPI.PrefixUpdateParams;
}
