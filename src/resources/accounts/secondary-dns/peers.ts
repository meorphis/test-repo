// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PeersAPI from 'cloudflare/resources/accounts/secondary-dns/peers';

export class Peers extends APIResource {
  /**
   * Get Peer.
   */
  retrieve(
    accountIdentifier: unknown,
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PeerRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/secondary_dns/peers/${identifier}`, options);
  }

  /**
   * Modify Peer.
   */
  update(
    accountIdentifier: unknown,
    identifier: unknown,
    body: PeerUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PeerUpdateResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/secondary_dns/peers/${identifier}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete Peer.
   */
  delete(
    accountIdentifier: unknown,
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PeerDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/secondary_dns/peers/${identifier}`, options);
  }

  /**
   * Create Peer.
   */
  secondaryDNSPeerCreatePeer(
    accountIdentifier: unknown,
    body: PeerSecondaryDNSPeerCreatePeerParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PeerSecondaryDNSPeerCreatePeerResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/secondary_dns/peers`, { body, ...options });
  }

  /**
   * List Peers.
   */
  secondaryDNSPeerListPeers(
    accountIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PeerSecondaryDNSPeerListPeersResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/secondary_dns/peers`, options);
  }
}

export interface PeerRetrieveResponse {
  errors?: Array<PeerRetrieveResponse.Error>;

  messages?: Array<PeerRetrieveResponse.Message>;

  result?: PeerRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PeerRetrieveResponse {
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
     * The name of the peer.
     */
    name: string;

    /**
     * IPv4/IPv6 address of primary or secondary nameserver, depending on what zone
     * this peer is linked to. For primary zones this IP defines the IP of the
     * secondary nameserver Cloudflare will NOTIFY upon zone changes. For secondary
     * zones this IP defines the IP of the primary nameserver Cloudflare will send
     * AXFR/IXFR requests to.
     */
    ip?: string;

    /**
     * Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary
     * zones.
     */
    ixfr_enable?: boolean;

    /**
     * DNS port of primary or secondary nameserver, depending on what zone this peer is
     * linked to.
     */
    port?: number;

    /**
     * TSIG authentication will be used for zone transfer if configured.
     */
    tsig_id?: string;
  }
}

export interface PeerUpdateResponse {
  errors?: Array<PeerUpdateResponse.Error>;

  messages?: Array<PeerUpdateResponse.Message>;

  result?: PeerUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PeerUpdateResponse {
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
     * The name of the peer.
     */
    name: string;

    /**
     * IPv4/IPv6 address of primary or secondary nameserver, depending on what zone
     * this peer is linked to. For primary zones this IP defines the IP of the
     * secondary nameserver Cloudflare will NOTIFY upon zone changes. For secondary
     * zones this IP defines the IP of the primary nameserver Cloudflare will send
     * AXFR/IXFR requests to.
     */
    ip?: string;

    /**
     * Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary
     * zones.
     */
    ixfr_enable?: boolean;

    /**
     * DNS port of primary or secondary nameserver, depending on what zone this peer is
     * linked to.
     */
    port?: number;

    /**
     * TSIG authentication will be used for zone transfer if configured.
     */
    tsig_id?: string;
  }
}

export interface PeerDeleteResponse {
  errors?: Array<PeerDeleteResponse.Error>;

  messages?: Array<PeerDeleteResponse.Message>;

  result?: PeerDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PeerDeleteResponse {
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

export interface PeerSecondaryDNSPeerCreatePeerResponse {
  errors?: Array<PeerSecondaryDNSPeerCreatePeerResponse.Error>;

  messages?: Array<PeerSecondaryDNSPeerCreatePeerResponse.Message>;

  result?: PeerSecondaryDNSPeerCreatePeerResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PeerSecondaryDNSPeerCreatePeerResponse {
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
     * The name of the peer.
     */
    name: string;

    /**
     * IPv4/IPv6 address of primary or secondary nameserver, depending on what zone
     * this peer is linked to. For primary zones this IP defines the IP of the
     * secondary nameserver Cloudflare will NOTIFY upon zone changes. For secondary
     * zones this IP defines the IP of the primary nameserver Cloudflare will send
     * AXFR/IXFR requests to.
     */
    ip?: string;

    /**
     * Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary
     * zones.
     */
    ixfr_enable?: boolean;

    /**
     * DNS port of primary or secondary nameserver, depending on what zone this peer is
     * linked to.
     */
    port?: number;

    /**
     * TSIG authentication will be used for zone transfer if configured.
     */
    tsig_id?: string;
  }
}

export interface PeerSecondaryDNSPeerListPeersResponse {
  errors?: Array<PeerSecondaryDNSPeerListPeersResponse.Error>;

  messages?: Array<PeerSecondaryDNSPeerListPeersResponse.Message>;

  result?: Array<PeerSecondaryDNSPeerListPeersResponse.Result>;

  result_info?: PeerSecondaryDNSPeerListPeersResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PeerSecondaryDNSPeerListPeersResponse {
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
     * The name of the peer.
     */
    name: string;

    /**
     * IPv4/IPv6 address of primary or secondary nameserver, depending on what zone
     * this peer is linked to. For primary zones this IP defines the IP of the
     * secondary nameserver Cloudflare will NOTIFY upon zone changes. For secondary
     * zones this IP defines the IP of the primary nameserver Cloudflare will send
     * AXFR/IXFR requests to.
     */
    ip?: string;

    /**
     * Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary
     * zones.
     */
    ixfr_enable?: boolean;

    /**
     * DNS port of primary or secondary nameserver, depending on what zone this peer is
     * linked to.
     */
    port?: number;

    /**
     * TSIG authentication will be used for zone transfer if configured.
     */
    tsig_id?: string;
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

export interface PeerUpdateParams {
  /**
   * The name of the peer.
   */
  name: string;

  /**
   * IPv4/IPv6 address of primary or secondary nameserver, depending on what zone
   * this peer is linked to. For primary zones this IP defines the IP of the
   * secondary nameserver Cloudflare will NOTIFY upon zone changes. For secondary
   * zones this IP defines the IP of the primary nameserver Cloudflare will send
   * AXFR/IXFR requests to.
   */
  ip?: string;

  /**
   * Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary
   * zones.
   */
  ixfr_enable?: boolean;

  /**
   * DNS port of primary or secondary nameserver, depending on what zone this peer is
   * linked to.
   */
  port?: number;

  /**
   * TSIG authentication will be used for zone transfer if configured.
   */
  tsig_id?: string;
}

export type PeerSecondaryDNSPeerCreatePeerParams = unknown;

export namespace Peers {
  export import PeerRetrieveResponse = PeersAPI.PeerRetrieveResponse;
  export import PeerUpdateResponse = PeersAPI.PeerUpdateResponse;
  export import PeerDeleteResponse = PeersAPI.PeerDeleteResponse;
  export import PeerSecondaryDNSPeerCreatePeerResponse = PeersAPI.PeerSecondaryDNSPeerCreatePeerResponse;
  export import PeerSecondaryDNSPeerListPeersResponse = PeersAPI.PeerSecondaryDNSPeerListPeersResponse;
  export import PeerUpdateParams = PeersAPI.PeerUpdateParams;
  export import PeerSecondaryDNSPeerCreatePeerParams = PeersAPI.PeerSecondaryDNSPeerCreatePeerParams;
}
