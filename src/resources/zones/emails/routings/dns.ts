// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DNSAPI from 'cloudflare/resources/zones/emails/routings/dns';

export class DNS extends APIResource {
  /**
   * Show the DNS records needed to configure your Email Routing zone.
   */
  emailRoutingSettingsEmailRoutingDNSSettings(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSEmailRoutingSettingsEmailRoutingDNSSettingsResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/email/routing/dns`, options);
  }
}

export interface DNSEmailRoutingSettingsEmailRoutingDNSSettingsResponse {
  errors?: Array<DNSEmailRoutingSettingsEmailRoutingDNSSettingsResponse.Error>;

  messages?: Array<DNSEmailRoutingSettingsEmailRoutingDNSSettingsResponse.Message>;

  result?: Array<DNSEmailRoutingSettingsEmailRoutingDNSSettingsResponse.Result>;

  result_info?: DNSEmailRoutingSettingsEmailRoutingDNSSettingsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DNSEmailRoutingSettingsEmailRoutingDNSSettingsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * List of records needed to enable an Email Routing zone.
   */
  export interface Result {
    /**
     * DNS record content.
     */
    content?: string;

    /**
     * DNS record name (or @ for the zone apex).
     */
    name?: string;

    /**
     * Required for MX, SRV and URI records. Unused by other record types. Records with
     * lower priorities are preferred.
     */
    priority?: number;

    /**
     * Time to live, in seconds, of the DNS record. Must be between 60 and 86400, or 1
     * for 'automatic'.
     */
    ttl?: number | 1;

    /**
     * DNS record type.
     */
    type?:
      | 'A'
      | 'AAAA'
      | 'CNAME'
      | 'HTTPS'
      | 'TXT'
      | 'SRV'
      | 'LOC'
      | 'MX'
      | 'NS'
      | 'CERT'
      | 'DNSKEY'
      | 'DS'
      | 'NAPTR'
      | 'SMIMEA'
      | 'SSHFP'
      | 'SVCB'
      | 'TLSA'
      | 'URI';
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

export namespace DNS {
  export import DNSEmailRoutingSettingsEmailRoutingDNSSettingsResponse = DNSAPI.DNSEmailRoutingSettingsEmailRoutingDNSSettingsResponse;
}
