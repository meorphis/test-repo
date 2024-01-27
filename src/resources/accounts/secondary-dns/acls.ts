// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ACLsAPI from 'cloudflare/resources/accounts/secondary-dns/acls';

export class ACLs extends APIResource {
  /**
   * Get ACL.
   */
  retrieve(
    accountIdentifier: unknown,
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACLRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/secondary_dns/acls/${identifier}`, options);
  }

  /**
   * Modify ACL.
   */
  update(
    accountIdentifier: unknown,
    identifier: unknown,
    body: ACLUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACLUpdateResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/secondary_dns/acls/${identifier}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete ACL.
   */
  delete(
    accountIdentifier: unknown,
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACLDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/secondary_dns/acls/${identifier}`, options);
  }

  /**
   * Create ACL.
   */
  secondaryDNSACLCreateACL(
    accountIdentifier: unknown,
    body: ACLSecondaryDNSACLCreateACLParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACLSecondaryDNSACLCreateACLResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/secondary_dns/acls`, { body, ...options });
  }

  /**
   * List ACLs.
   */
  secondaryDNSACLListACLs(
    accountIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACLSecondaryDNSACLListACLsResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/secondary_dns/acls`, options);
  }
}

export interface ACLRetrieveResponse {
  errors?: Array<ACLRetrieveResponse.Error>;

  messages?: Array<ACLRetrieveResponse.Message>;

  result?: ACLRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ACLRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    id: unknown;

    /**
     * Allowed IPv4/IPv6 address range of primary or secondary nameservers. This will
     * be applied for the entire account. The IP range is used to allow additional
     * NOTIFY IPs for secondary zones and IPs Cloudflare allows AXFR/IXFR requests from
     * for primary zones. CIDRs are limited to a maximum of /24 for IPv4 and /64 for
     * IPv6 respectively.
     */
    ip_range: string;

    /**
     * The name of the acl.
     */
    name: string;
  }
}

export interface ACLUpdateResponse {
  errors?: Array<ACLUpdateResponse.Error>;

  messages?: Array<ACLUpdateResponse.Message>;

  result?: ACLUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ACLUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    id: unknown;

    /**
     * Allowed IPv4/IPv6 address range of primary or secondary nameservers. This will
     * be applied for the entire account. The IP range is used to allow additional
     * NOTIFY IPs for secondary zones and IPs Cloudflare allows AXFR/IXFR requests from
     * for primary zones. CIDRs are limited to a maximum of /24 for IPv4 and /64 for
     * IPv6 respectively.
     */
    ip_range: string;

    /**
     * The name of the acl.
     */
    name: string;
  }
}

export interface ACLDeleteResponse {
  errors?: Array<ACLDeleteResponse.Error>;

  messages?: Array<ACLDeleteResponse.Message>;

  result?: ACLDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ACLDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    id?: unknown;
  }
}

export interface ACLSecondaryDNSACLCreateACLResponse {
  errors?: Array<ACLSecondaryDNSACLCreateACLResponse.Error>;

  messages?: Array<ACLSecondaryDNSACLCreateACLResponse.Message>;

  result?: ACLSecondaryDNSACLCreateACLResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ACLSecondaryDNSACLCreateACLResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    id: unknown;

    /**
     * Allowed IPv4/IPv6 address range of primary or secondary nameservers. This will
     * be applied for the entire account. The IP range is used to allow additional
     * NOTIFY IPs for secondary zones and IPs Cloudflare allows AXFR/IXFR requests from
     * for primary zones. CIDRs are limited to a maximum of /24 for IPv4 and /64 for
     * IPv6 respectively.
     */
    ip_range: string;

    /**
     * The name of the acl.
     */
    name: string;
  }
}

export interface ACLSecondaryDNSACLListACLsResponse {
  errors?: Array<ACLSecondaryDNSACLListACLsResponse.Error>;

  messages?: Array<ACLSecondaryDNSACLListACLsResponse.Message>;

  result?: Array<ACLSecondaryDNSACLListACLsResponse.Result>;

  result_info?: ACLSecondaryDNSACLListACLsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ACLSecondaryDNSACLListACLsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    id: unknown;

    /**
     * Allowed IPv4/IPv6 address range of primary or secondary nameservers. This will
     * be applied for the entire account. The IP range is used to allow additional
     * NOTIFY IPs for secondary zones and IPs Cloudflare allows AXFR/IXFR requests from
     * for primary zones. CIDRs are limited to a maximum of /24 for IPv4 and /64 for
     * IPv6 respectively.
     */
    ip_range: string;

    /**
     * The name of the acl.
     */
    name: string;
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

export interface ACLUpdateParams {
  /**
   * Allowed IPv4/IPv6 address range of primary or secondary nameservers. This will
   * be applied for the entire account. The IP range is used to allow additional
   * NOTIFY IPs for secondary zones and IPs Cloudflare allows AXFR/IXFR requests from
   * for primary zones. CIDRs are limited to a maximum of /24 for IPv4 and /64 for
   * IPv6 respectively.
   */
  ip_range: string;

  /**
   * The name of the acl.
   */
  name: string;
}

export type ACLSecondaryDNSACLCreateACLParams = unknown;

export namespace ACLs {
  export import ACLRetrieveResponse = ACLsAPI.ACLRetrieveResponse;
  export import ACLUpdateResponse = ACLsAPI.ACLUpdateResponse;
  export import ACLDeleteResponse = ACLsAPI.ACLDeleteResponse;
  export import ACLSecondaryDNSACLCreateACLResponse = ACLsAPI.ACLSecondaryDNSACLCreateACLResponse;
  export import ACLSecondaryDNSACLListACLsResponse = ACLsAPI.ACLSecondaryDNSACLListACLsResponse;
  export import ACLUpdateParams = ACLsAPI.ACLUpdateParams;
  export import ACLSecondaryDNSACLCreateACLParams = ACLsAPI.ACLSecondaryDNSACLCreateACLParams;
}
