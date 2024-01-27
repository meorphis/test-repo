// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as DNSFirewallsAPI from 'cloudflare/resources/accounts/dns-firewalls/dns-firewalls';
import * as DNSAnalyticsAPI from 'cloudflare/resources/accounts/dns-firewalls/dns-analytics/dns-analytics';
import { Page } from 'cloudflare/pagination';

export class DNSFirewalls extends APIResource {
  dnsAnalytics: DNSAnalyticsAPI.DNSAnalytics = new DNSAnalyticsAPI.DNSAnalytics(this._client);

  /**
   * Show a single configured DNS Firewall cluster for an account.
   */
  retrieve(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSFirewallRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/dns_firewall/${identifier}`, options);
  }

  /**
   * Modify a DNS Firewall Cluster configuration.
   */
  update(
    accountIdentifier: string,
    identifier: string,
    body: DNSFirewallUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSFirewallUpdateResponse> {
    return this._client.patch(`/accounts/${accountIdentifier}/dns_firewall/${identifier}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a configured DNS Firewall Cluster.
   */
  delete(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSFirewallDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/dns_firewall/${identifier}`, options);
  }

  /**
   * Create a configured DNS Firewall Cluster.
   */
  dnsFirewallCreateDNSFirewallCluster(
    accountIdentifier: string,
    body: DNSFirewallDNSFirewallCreateDNSFirewallClusterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSFirewallDNSFirewallCreateDNSFirewallClusterResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/dns_firewall`, { body, ...options });
  }

  /**
   * List configured DNS Firewall clusters for an account.
   */
  dnsFirewallListDNSFirewallClusters(
    accountIdentifier: string,
    query?: DNSFirewallDNSFirewallListDNSFirewallClustersParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    DNSFirewallDNSFirewallListDNSFirewallClustersResponsesPage,
    DNSFirewallDNSFirewallListDNSFirewallClustersResponse
  >;
  dnsFirewallListDNSFirewallClusters(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    DNSFirewallDNSFirewallListDNSFirewallClustersResponsesPage,
    DNSFirewallDNSFirewallListDNSFirewallClustersResponse
  >;
  dnsFirewallListDNSFirewallClusters(
    accountIdentifier: string,
    query: DNSFirewallDNSFirewallListDNSFirewallClustersParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    DNSFirewallDNSFirewallListDNSFirewallClustersResponsesPage,
    DNSFirewallDNSFirewallListDNSFirewallClustersResponse
  > {
    if (isRequestOptions(query)) {
      return this.dnsFirewallListDNSFirewallClusters(accountIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/accounts/${accountIdentifier}/dns_firewall`,
      DNSFirewallDNSFirewallListDNSFirewallClustersResponsesPage,
      { query, ...options },
    );
  }
}

export class DNSFirewallDNSFirewallListDNSFirewallClustersResponsesPage extends Page<DNSFirewallDNSFirewallListDNSFirewallClustersResponse> {}

export interface DNSFirewallRetrieveResponse {
  errors?: Array<DNSFirewallRetrieveResponse.Error>;

  messages?: Array<DNSFirewallRetrieveResponse.Message>;

  result?: DNSFirewallRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DNSFirewallRetrieveResponse {
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

    /**
     * Deprecate the response to ANY requests.
     */
    deprecate_any_requests: boolean;

    dns_firewall_ips: Array<string | string>;

    /**
     * Forward client IP (resolver) subnet if no EDNS Client Subnet is sent.
     */
    ecs_fallback: boolean;

    /**
     * Maximum DNS Cache TTL.
     */
    maximum_cache_ttl: number;

    /**
     * Minimum DNS Cache TTL.
     */
    minimum_cache_ttl: number;

    /**
     * Last modification of DNS Firewall cluster.
     */
    modified_on: string;

    /**
     * DNS Firewall Cluster Name.
     */
    name: string;

    upstream_ips: Array<string | string>;

    /**
     * Attack mitigation settings.
     */
    attack_mitigation?: Result.AttackMitigation | null;

    /**
     * Negative DNS Cache TTL.
     */
    negative_cache_ttl?: number | null;

    /**
     * Deprecated alias for "upstream_ips".
     */
    origin_ips?: unknown;

    /**
     * Ratelimit in queries per second per datacenter (applies to DNS queries sent to
     * the upstream nameservers configured on the cluster).
     */
    ratelimit?: number | null;

    /**
     * Number of retries for fetching DNS responses from upstream nameservers (not
     * counting the initial attempt).
     */
    retries?: number;
  }

  export namespace Result {
    /**
     * Attack mitigation settings.
     */
    export interface AttackMitigation {
      /**
       * When enabled, random-prefix attacks are automatically mitigated and the upstream
       * DNS servers protected.
       */
      enabled?: boolean;

      /**
       * Deprecated alias for "only_when_upstream_unhealthy".
       */
      only_when_origin_unhealthy?: unknown;

      /**
       * Only mitigate attacks when upstream servers seem unhealthy.
       */
      only_when_upstream_unhealthy?: boolean;
    }
  }
}

export interface DNSFirewallUpdateResponse {
  errors?: Array<DNSFirewallUpdateResponse.Error>;

  messages?: Array<DNSFirewallUpdateResponse.Message>;

  result?: DNSFirewallUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DNSFirewallUpdateResponse {
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

    /**
     * Deprecate the response to ANY requests.
     */
    deprecate_any_requests: boolean;

    dns_firewall_ips: Array<string | string>;

    /**
     * Forward client IP (resolver) subnet if no EDNS Client Subnet is sent.
     */
    ecs_fallback: boolean;

    /**
     * Maximum DNS Cache TTL.
     */
    maximum_cache_ttl: number;

    /**
     * Minimum DNS Cache TTL.
     */
    minimum_cache_ttl: number;

    /**
     * Last modification of DNS Firewall cluster.
     */
    modified_on: string;

    /**
     * DNS Firewall Cluster Name.
     */
    name: string;

    upstream_ips: Array<string | string>;

    /**
     * Attack mitigation settings.
     */
    attack_mitigation?: Result.AttackMitigation | null;

    /**
     * Negative DNS Cache TTL.
     */
    negative_cache_ttl?: number | null;

    /**
     * Deprecated alias for "upstream_ips".
     */
    origin_ips?: unknown;

    /**
     * Ratelimit in queries per second per datacenter (applies to DNS queries sent to
     * the upstream nameservers configured on the cluster).
     */
    ratelimit?: number | null;

    /**
     * Number of retries for fetching DNS responses from upstream nameservers (not
     * counting the initial attempt).
     */
    retries?: number;
  }

  export namespace Result {
    /**
     * Attack mitigation settings.
     */
    export interface AttackMitigation {
      /**
       * When enabled, random-prefix attacks are automatically mitigated and the upstream
       * DNS servers protected.
       */
      enabled?: boolean;

      /**
       * Deprecated alias for "only_when_upstream_unhealthy".
       */
      only_when_origin_unhealthy?: unknown;

      /**
       * Only mitigate attacks when upstream servers seem unhealthy.
       */
      only_when_upstream_unhealthy?: boolean;
    }
  }
}

export interface DNSFirewallDeleteResponse {
  errors?: Array<DNSFirewallDeleteResponse.Error>;

  messages?: Array<DNSFirewallDeleteResponse.Message>;

  result?: DNSFirewallDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DNSFirewallDeleteResponse {
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
  }
}

export interface DNSFirewallDNSFirewallCreateDNSFirewallClusterResponse {
  errors?: Array<DNSFirewallDNSFirewallCreateDNSFirewallClusterResponse.Error>;

  messages?: Array<DNSFirewallDNSFirewallCreateDNSFirewallClusterResponse.Message>;

  result?: DNSFirewallDNSFirewallCreateDNSFirewallClusterResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DNSFirewallDNSFirewallCreateDNSFirewallClusterResponse {
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

    /**
     * Deprecate the response to ANY requests.
     */
    deprecate_any_requests: boolean;

    dns_firewall_ips: Array<string | string>;

    /**
     * Forward client IP (resolver) subnet if no EDNS Client Subnet is sent.
     */
    ecs_fallback: boolean;

    /**
     * Maximum DNS Cache TTL.
     */
    maximum_cache_ttl: number;

    /**
     * Minimum DNS Cache TTL.
     */
    minimum_cache_ttl: number;

    /**
     * Last modification of DNS Firewall cluster.
     */
    modified_on: string;

    /**
     * DNS Firewall Cluster Name.
     */
    name: string;

    upstream_ips: Array<string | string>;

    /**
     * Attack mitigation settings.
     */
    attack_mitigation?: Result.AttackMitigation | null;

    /**
     * Negative DNS Cache TTL.
     */
    negative_cache_ttl?: number | null;

    /**
     * Deprecated alias for "upstream_ips".
     */
    origin_ips?: unknown;

    /**
     * Ratelimit in queries per second per datacenter (applies to DNS queries sent to
     * the upstream nameservers configured on the cluster).
     */
    ratelimit?: number | null;

    /**
     * Number of retries for fetching DNS responses from upstream nameservers (not
     * counting the initial attempt).
     */
    retries?: number;
  }

  export namespace Result {
    /**
     * Attack mitigation settings.
     */
    export interface AttackMitigation {
      /**
       * When enabled, random-prefix attacks are automatically mitigated and the upstream
       * DNS servers protected.
       */
      enabled?: boolean;

      /**
       * Deprecated alias for "only_when_upstream_unhealthy".
       */
      only_when_origin_unhealthy?: unknown;

      /**
       * Only mitigate attacks when upstream servers seem unhealthy.
       */
      only_when_upstream_unhealthy?: boolean;
    }
  }
}

export interface DNSFirewallDNSFirewallListDNSFirewallClustersResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * Deprecate the response to ANY requests.
   */
  deprecate_any_requests: boolean;

  dns_firewall_ips: Array<string | string>;

  /**
   * Forward client IP (resolver) subnet if no EDNS Client Subnet is sent.
   */
  ecs_fallback: boolean;

  /**
   * Maximum DNS Cache TTL.
   */
  maximum_cache_ttl: number;

  /**
   * Minimum DNS Cache TTL.
   */
  minimum_cache_ttl: number;

  /**
   * Last modification of DNS Firewall cluster.
   */
  modified_on: string;

  /**
   * DNS Firewall Cluster Name.
   */
  name: string;

  upstream_ips: Array<string | string>;

  /**
   * Attack mitigation settings.
   */
  attack_mitigation?: DNSFirewallDNSFirewallListDNSFirewallClustersResponse.AttackMitigation | null;

  /**
   * Negative DNS Cache TTL.
   */
  negative_cache_ttl?: number | null;

  /**
   * Deprecated alias for "upstream_ips".
   */
  origin_ips?: unknown;

  /**
   * Ratelimit in queries per second per datacenter (applies to DNS queries sent to
   * the upstream nameservers configured on the cluster).
   */
  ratelimit?: number | null;

  /**
   * Number of retries for fetching DNS responses from upstream nameservers (not
   * counting the initial attempt).
   */
  retries?: number;
}

export namespace DNSFirewallDNSFirewallListDNSFirewallClustersResponse {
  /**
   * Attack mitigation settings.
   */
  export interface AttackMitigation {
    /**
     * When enabled, random-prefix attacks are automatically mitigated and the upstream
     * DNS servers protected.
     */
    enabled?: boolean;

    /**
     * Deprecated alias for "only_when_upstream_unhealthy".
     */
    only_when_origin_unhealthy?: unknown;

    /**
     * Only mitigate attacks when upstream servers seem unhealthy.
     */
    only_when_upstream_unhealthy?: boolean;
  }
}

export interface DNSFirewallUpdateParams {
  /**
   * Deprecate the response to ANY requests.
   */
  deprecate_any_requests: boolean;

  dns_firewall_ips: Array<string | string>;

  /**
   * Forward client IP (resolver) subnet if no EDNS Client Subnet is sent.
   */
  ecs_fallback: boolean;

  /**
   * Maximum DNS Cache TTL.
   */
  maximum_cache_ttl: number;

  /**
   * Minimum DNS Cache TTL.
   */
  minimum_cache_ttl: number;

  /**
   * DNS Firewall Cluster Name.
   */
  name: string;

  upstream_ips: Array<string | string>;

  /**
   * Attack mitigation settings.
   */
  attack_mitigation?: DNSFirewallUpdateParams.AttackMitigation | null;

  /**
   * Negative DNS Cache TTL.
   */
  negative_cache_ttl?: number | null;

  /**
   * Deprecated alias for "upstream_ips".
   */
  origin_ips?: unknown;

  /**
   * Ratelimit in queries per second per datacenter (applies to DNS queries sent to
   * the upstream nameservers configured on the cluster).
   */
  ratelimit?: number | null;

  /**
   * Number of retries for fetching DNS responses from upstream nameservers (not
   * counting the initial attempt).
   */
  retries?: number;
}

export namespace DNSFirewallUpdateParams {
  /**
   * Attack mitigation settings.
   */
  export interface AttackMitigation {
    /**
     * When enabled, random-prefix attacks are automatically mitigated and the upstream
     * DNS servers protected.
     */
    enabled?: boolean;

    /**
     * Deprecated alias for "only_when_upstream_unhealthy".
     */
    only_when_origin_unhealthy?: unknown;

    /**
     * Only mitigate attacks when upstream servers seem unhealthy.
     */
    only_when_upstream_unhealthy?: boolean;
  }
}

export interface DNSFirewallDNSFirewallCreateDNSFirewallClusterParams {
  /**
   * DNS Firewall Cluster Name.
   */
  name: string;

  upstream_ips: Array<string | string>;

  /**
   * Attack mitigation settings.
   */
  attack_mitigation?: DNSFirewallDNSFirewallCreateDNSFirewallClusterParams.AttackMitigation | null;

  /**
   * Deprecate the response to ANY requests.
   */
  deprecate_any_requests?: boolean;

  /**
   * Forward client IP (resolver) subnet if no EDNS Client Subnet is sent.
   */
  ecs_fallback?: boolean;

  /**
   * Maximum DNS Cache TTL.
   */
  maximum_cache_ttl?: number;

  /**
   * Minimum DNS Cache TTL.
   */
  minimum_cache_ttl?: number;

  /**
   * Negative DNS Cache TTL.
   */
  negative_cache_ttl?: number | null;

  /**
   * Deprecated alias for "upstream_ips".
   */
  origin_ips?: unknown;

  /**
   * Ratelimit in queries per second per datacenter (applies to DNS queries sent to
   * the upstream nameservers configured on the cluster).
   */
  ratelimit?: number | null;

  /**
   * Number of retries for fetching DNS responses from upstream nameservers (not
   * counting the initial attempt).
   */
  retries?: number;
}

export namespace DNSFirewallDNSFirewallCreateDNSFirewallClusterParams {
  /**
   * Attack mitigation settings.
   */
  export interface AttackMitigation {
    /**
     * When enabled, random-prefix attacks are automatically mitigated and the upstream
     * DNS servers protected.
     */
    enabled?: boolean;

    /**
     * Deprecated alias for "only_when_upstream_unhealthy".
     */
    only_when_origin_unhealthy?: unknown;

    /**
     * Only mitigate attacks when upstream servers seem unhealthy.
     */
    only_when_upstream_unhealthy?: boolean;
  }
}

export interface DNSFirewallDNSFirewallListDNSFirewallClustersParams {
  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Number of clusters per page.
   */
  per_page?: number;
}

export namespace DNSFirewalls {
  export import DNSFirewallRetrieveResponse = DNSFirewallsAPI.DNSFirewallRetrieveResponse;
  export import DNSFirewallUpdateResponse = DNSFirewallsAPI.DNSFirewallUpdateResponse;
  export import DNSFirewallDeleteResponse = DNSFirewallsAPI.DNSFirewallDeleteResponse;
  export import DNSFirewallDNSFirewallCreateDNSFirewallClusterResponse = DNSFirewallsAPI.DNSFirewallDNSFirewallCreateDNSFirewallClusterResponse;
  export import DNSFirewallDNSFirewallListDNSFirewallClustersResponse = DNSFirewallsAPI.DNSFirewallDNSFirewallListDNSFirewallClustersResponse;
  export import DNSFirewallDNSFirewallListDNSFirewallClustersResponsesPage = DNSFirewallsAPI.DNSFirewallDNSFirewallListDNSFirewallClustersResponsesPage;
  export import DNSFirewallUpdateParams = DNSFirewallsAPI.DNSFirewallUpdateParams;
  export import DNSFirewallDNSFirewallCreateDNSFirewallClusterParams = DNSFirewallsAPI.DNSFirewallDNSFirewallCreateDNSFirewallClusterParams;
  export import DNSFirewallDNSFirewallListDNSFirewallClustersParams = DNSFirewallsAPI.DNSFirewallDNSFirewallListDNSFirewallClustersParams;
  export import DNSAnalytics = DNSAnalyticsAPI.DNSAnalytics;
}
