// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as HostnamesAPI from 'cloudflare/resources/zones/web3s/hostnames/hostnames';
import * as IpfsUniversalPathsAPI from 'cloudflare/resources/zones/web3s/hostnames/ipfs-universal-paths/ipfs-universal-paths';

export class Hostnames extends APIResource {
  ipfsUniversalPaths: IpfsUniversalPathsAPI.IpfsUniversalPaths = new IpfsUniversalPathsAPI.IpfsUniversalPaths(
    this._client,
  );

  /**
   * Web3 Hostname Details
   */
  retrieve(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameRetrieveResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/web3/hostnames/${identifier}`, options);
  }

  /**
   * Edit Web3 Hostname
   */
  update(
    zoneIdentifier: string,
    identifier: string,
    body: HostnameUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/web3/hostnames/${identifier}`, { body, ...options });
  }

  /**
   * Delete Web3 Hostname
   */
  delete(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameDeleteResponse> {
    return this._client.delete(`/zones/${zoneIdentifier}/web3/hostnames/${identifier}`, options);
  }

  /**
   * Create Web3 Hostname
   */
  web3HostnameCreateWeb3Hostname(
    zoneIdentifier: string,
    body: HostnameWeb3HostnameCreateWeb3HostnameParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameWeb3HostnameCreateWeb3HostnameResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/web3/hostnames`, { body, ...options });
  }

  /**
   * List Web3 Hostnames
   */
  web3HostnameListWeb3Hostnames(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameWeb3HostnameListWeb3HostnamesResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/web3/hostnames`, options);
  }
}

export interface HostnameRetrieveResponse {
  errors?: Array<HostnameRetrieveResponse.Error>;

  messages?: Array<HostnameRetrieveResponse.Message>;

  result?: HostnameRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace HostnameRetrieveResponse {
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

    created_on?: string;

    /**
     * An optional description of the hostname.
     */
    description?: string;

    /**
     * DNSLink value used if the target is ipfs.
     */
    dnslink?: string;

    modified_on?: string;

    /**
     * The hostname that will point to the target gateway via CNAME.
     */
    name?: string;

    /**
     * Status of the hostname's activation.
     */
    status?: 'active' | 'pending' | 'deleting' | 'error';

    /**
     * Target gateway of the hostname.
     */
    target?: 'ethereum' | 'ipfs' | 'ipfs_universal_path' | 'polygon';
  }
}

export interface HostnameUpdateResponse {
  errors?: Array<HostnameUpdateResponse.Error>;

  messages?: Array<HostnameUpdateResponse.Message>;

  result?: HostnameUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace HostnameUpdateResponse {
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

    created_on?: string;

    /**
     * An optional description of the hostname.
     */
    description?: string;

    /**
     * DNSLink value used if the target is ipfs.
     */
    dnslink?: string;

    modified_on?: string;

    /**
     * The hostname that will point to the target gateway via CNAME.
     */
    name?: string;

    /**
     * Status of the hostname's activation.
     */
    status?: 'active' | 'pending' | 'deleting' | 'error';

    /**
     * Target gateway of the hostname.
     */
    target?: 'ethereum' | 'ipfs' | 'ipfs_universal_path' | 'polygon';
  }
}

export interface HostnameDeleteResponse {
  errors?: Array<HostnameDeleteResponse.Error>;

  messages?: Array<HostnameDeleteResponse.Message>;

  result?: HostnameDeleteResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace HostnameDeleteResponse {
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
    id: string;
  }
}

export interface HostnameWeb3HostnameCreateWeb3HostnameResponse {
  errors?: Array<HostnameWeb3HostnameCreateWeb3HostnameResponse.Error>;

  messages?: Array<HostnameWeb3HostnameCreateWeb3HostnameResponse.Message>;

  result?: HostnameWeb3HostnameCreateWeb3HostnameResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace HostnameWeb3HostnameCreateWeb3HostnameResponse {
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

    created_on?: string;

    /**
     * An optional description of the hostname.
     */
    description?: string;

    /**
     * DNSLink value used if the target is ipfs.
     */
    dnslink?: string;

    modified_on?: string;

    /**
     * The hostname that will point to the target gateway via CNAME.
     */
    name?: string;

    /**
     * Status of the hostname's activation.
     */
    status?: 'active' | 'pending' | 'deleting' | 'error';

    /**
     * Target gateway of the hostname.
     */
    target?: 'ethereum' | 'ipfs' | 'ipfs_universal_path' | 'polygon';
  }
}

export interface HostnameWeb3HostnameListWeb3HostnamesResponse {
  errors?: Array<HostnameWeb3HostnameListWeb3HostnamesResponse.Error>;

  messages?: Array<HostnameWeb3HostnameListWeb3HostnamesResponse.Message>;

  result?: Array<HostnameWeb3HostnameListWeb3HostnamesResponse.Result>;

  result_info?: HostnameWeb3HostnameListWeb3HostnamesResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace HostnameWeb3HostnameListWeb3HostnamesResponse {
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

    created_on?: string;

    /**
     * An optional description of the hostname.
     */
    description?: string;

    /**
     * DNSLink value used if the target is ipfs.
     */
    dnslink?: string;

    modified_on?: string;

    /**
     * The hostname that will point to the target gateway via CNAME.
     */
    name?: string;

    /**
     * Status of the hostname's activation.
     */
    status?: 'active' | 'pending' | 'deleting' | 'error';

    /**
     * Target gateway of the hostname.
     */
    target?: 'ethereum' | 'ipfs' | 'ipfs_universal_path' | 'polygon';
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

export interface HostnameUpdateParams {
  /**
   * An optional description of the hostname.
   */
  description?: string;

  /**
   * DNSLink value used if the target is ipfs.
   */
  dnslink?: string;
}

export interface HostnameWeb3HostnameCreateWeb3HostnameParams {
  /**
   * Target gateway of the hostname.
   */
  target: 'ethereum' | 'ipfs' | 'ipfs_universal_path' | 'polygon';

  /**
   * An optional description of the hostname.
   */
  description?: string;

  /**
   * DNSLink value used if the target is ipfs.
   */
  dnslink?: string;
}

export namespace Hostnames {
  export import HostnameRetrieveResponse = HostnamesAPI.HostnameRetrieveResponse;
  export import HostnameUpdateResponse = HostnamesAPI.HostnameUpdateResponse;
  export import HostnameDeleteResponse = HostnamesAPI.HostnameDeleteResponse;
  export import HostnameWeb3HostnameCreateWeb3HostnameResponse = HostnamesAPI.HostnameWeb3HostnameCreateWeb3HostnameResponse;
  export import HostnameWeb3HostnameListWeb3HostnamesResponse = HostnamesAPI.HostnameWeb3HostnameListWeb3HostnamesResponse;
  export import HostnameUpdateParams = HostnamesAPI.HostnameUpdateParams;
  export import HostnameWeb3HostnameCreateWeb3HostnameParams = HostnamesAPI.HostnameWeb3HostnameCreateWeb3HostnameParams;
  export import IpfsUniversalPaths = IpfsUniversalPathsAPI.IpfsUniversalPaths;
}
