// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ScansAPI from 'cloudflare/resources/zones/dns-records/scans';

export class Scans extends APIResource {
  /**
   * Scan for common DNS records on your domain and automatically add them to your
   * zone. Useful if you haven't updated your nameservers yet.
   */
  dnsRecordsForAZoneScanDNSRecords(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScanDNSRecordsForAZoneScanDNSRecordsResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/dns_records/scan`, options);
  }
}

export interface ScanDNSRecordsForAZoneScanDNSRecordsResponse {
  errors?: Array<ScanDNSRecordsForAZoneScanDNSRecordsResponse.Error>;

  messages?: Array<ScanDNSRecordsForAZoneScanDNSRecordsResponse.Message>;

  result?: ScanDNSRecordsForAZoneScanDNSRecordsResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;

  timing?: ScanDNSRecordsForAZoneScanDNSRecordsResponse.Timing;
}

export namespace ScanDNSRecordsForAZoneScanDNSRecordsResponse {
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
     * Number of DNS records added.
     */
    recs_added?: number;

    /**
     * Total number of DNS records parsed.
     */
    total_records_parsed?: number;
  }

  export interface Timing {
    /**
     * When the file parsing ended.
     */
    end_time?: string;

    /**
     * Processing time of the file in seconds.
     */
    process_time?: number;

    /**
     * When the file parsing started.
     */
    start_time?: string;
  }
}

export namespace Scans {
  export import ScanDNSRecordsForAZoneScanDNSRecordsResponse = ScansAPI.ScanDNSRecordsForAZoneScanDNSRecordsResponse;
}
