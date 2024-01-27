// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as DNSRecordsAPI from 'cloudflare/resources/zones/dns-records/dns-records';
import * as ExportsAPI from 'cloudflare/resources/zones/dns-records/exports';
import * as ImportsAPI from 'cloudflare/resources/zones/dns-records/imports';
import * as ScansAPI from 'cloudflare/resources/zones/dns-records/scans';
import { Page } from 'cloudflare/pagination';

export class DNSRecords extends APIResource {
  exports: ExportsAPI.Exports = new ExportsAPI.Exports(this._client);
  imports: ImportsAPI.Imports = new ImportsAPI.Imports(this._client);
  scans: ScansAPI.Scans = new ScansAPI.Scans(this._client);

  /**
   * DNS Record Details
   */
  retrieve(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSRecord> {
    return this._client.get(`/zones/${zoneIdentifier}/dns_records/${identifier}`, options);
  }

  /**
   * Update an existing DNS record.
   *
   * Notes:
   *
   * - A/AAAA records cannot exist on the same name as CNAME records.
   * - NS records cannot exist on the same name as any other record type.
   * - Domain names are always represented in Punycode, even if Unicode characters
   *   were used when creating the record.
   */
  update(
    zoneIdentifier: string,
    identifier: string,
    body: DNSRecordUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSRecord> {
    return this._client.put(`/zones/${zoneIdentifier}/dns_records/${identifier}`, { body, ...options });
  }

  /**
   * Delete DNS Record
   */
  delete(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSRecordDeleteResponse> {
    return this._client.delete(`/zones/${zoneIdentifier}/dns_records/${identifier}`, options);
  }

  /**
   * Create a new DNS record for a zone.
   *
   * Notes:
   *
   * - A/AAAA records cannot exist on the same name as CNAME records.
   * - NS records cannot exist on the same name as any other record type.
   * - Domain names are always represented in Punycode, even if Unicode characters
   *   were used when creating the record.
   */
  dnsRecordsForAZoneCreateDNSRecord(
    zoneIdentifier: string,
    body: DNSRecordDNSRecordsForAZoneCreateDNSRecordParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSRecord> {
    return this._client.post(`/zones/${zoneIdentifier}/dns_records`, { body, ...options });
  }

  /**
   * List, search, sort, and filter a zones' DNS records.
   */
  dnsRecordsForAZoneListDNSRecords(
    zoneIdentifier: string,
    query?: DNSRecordDNSRecordsForAZoneListDNSRecordsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    DNSRecordDNSRecordsForAZoneListDNSRecordsResponsesPage,
    DNSRecordDNSRecordsForAZoneListDNSRecordsResponse
  >;
  dnsRecordsForAZoneListDNSRecords(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    DNSRecordDNSRecordsForAZoneListDNSRecordsResponsesPage,
    DNSRecordDNSRecordsForAZoneListDNSRecordsResponse
  >;
  dnsRecordsForAZoneListDNSRecords(
    zoneIdentifier: string,
    query: DNSRecordDNSRecordsForAZoneListDNSRecordsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    DNSRecordDNSRecordsForAZoneListDNSRecordsResponsesPage,
    DNSRecordDNSRecordsForAZoneListDNSRecordsResponse
  > {
    if (isRequestOptions(query)) {
      return this.dnsRecordsForAZoneListDNSRecords(zoneIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneIdentifier}/dns_records`,
      DNSRecordDNSRecordsForAZoneListDNSRecordsResponsesPage,
      { query, ...options },
    );
  }

  /**
   * Patch DNS Record
   */
  patch(
    zoneIdentifier: string,
    identifier: string,
    body: DNSRecordPatchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSRecord> {
    return this._client.patch(`/zones/${zoneIdentifier}/dns_records/${identifier}`, { body, ...options });
  }
}

export class DNSRecordDNSRecordsForAZoneListDNSRecordsResponsesPage extends Page<DNSRecordDNSRecordsForAZoneListDNSRecordsResponse> {}

export interface DNSRecord {
  errors?: Array<DNSRecord.Error>;

  messages?: Array<DNSRecord.Message>;

  result?:
    | DNSRecord.MpBuiT95ARecord
    | DNSRecord.MpBuiT95AaaaRecord
    | DNSRecord.MpBuiT95CaaRecord
    | DNSRecord.MpBuiT95CertRecord
    | DNSRecord.MpBuiT95CnameRecord
    | DNSRecord.MpBuiT95DnskeyRecord
    | DNSRecord.MpBuiT95DsRecord
    | DNSRecord.MpBuiT95HTTPsRecord
    | DNSRecord.MpBuiT95LocRecord
    | DNSRecord.MpBuiT95MxRecord
    | DNSRecord.MpBuiT95NaptrRecord
    | DNSRecord.MpBuiT95NsRecord
    | DNSRecord.MpBuiT95PtrRecord
    | DNSRecord.MpBuiT95SmimeaRecord
    | DNSRecord.MpBuiT95SrvRecord
    | DNSRecord.MpBuiT95SshfpRecord
    | DNSRecord.MpBuiT95SvcbRecord
    | DNSRecord.MpBuiT95TlsaRecord
    | DNSRecord.MpBuiT95TxtRecord
    | DNSRecord.MpBuiT95UriRecord;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DNSRecord {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface MpBuiT95ARecord {
    /**
     * A valid IPv4 address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'A';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95ARecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95ARecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95AaaaRecord {
    /**
     * A valid IPv6 address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'AAAA';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95AaaaRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95AaaaRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95CaaRecord {
    /**
     * Components of a CAA record.
     */
    data: MpBuiT95CaaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CAA';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted CAA content. See 'data' to set CAA properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95CaaRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95CaaRecord {
    /**
     * Components of a CAA record.
     */
    export interface Data {
      /**
       * Flags for the CAA record.
       */
      flags?: number;

      /**
       * Name of the property controlled by this record (e.g.: issue, issuewild, iodef).
       */
      tag?: string;

      /**
       * Value of the record. This field's semantics depend on the chosen tag.
       */
      value?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95CertRecord {
    /**
     * Components of a CERT record.
     */
    data: MpBuiT95CertRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CERT';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted CERT content. See 'data' to set CERT properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95CertRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95CertRecord {
    /**
     * Components of a CERT record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Certificate.
       */
      certificate?: string;

      /**
       * Key Tag.
       */
      key_tag?: number;

      /**
       * Type.
       */
      type?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95CnameRecord {
    /**
     * A valid hostname. Must not match the record's name.
     */
    content: unknown;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CNAME';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95CnameRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95CnameRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95DnskeyRecord {
    /**
     * Components of a DNSKEY record.
     */
    data: MpBuiT95DnskeyRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'DNSKEY';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted DNSKEY content. See 'data' to set DNSKEY properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95DnskeyRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95DnskeyRecord {
    /**
     * Components of a DNSKEY record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Flags.
       */
      flags?: number;

      /**
       * Protocol.
       */
      protocol?: number;

      /**
       * Public Key.
       */
      public_key?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95DsRecord {
    /**
     * Components of a DS record.
     */
    data: MpBuiT95DsRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'DS';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted DS content. See 'data' to set DS properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95DsRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95DsRecord {
    /**
     * Components of a DS record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Digest.
       */
      digest?: string;

      /**
       * Digest Type.
       */
      digest_type?: number;

      /**
       * Key Tag.
       */
      key_tag?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95HTTPsRecord {
    /**
     * Components of a HTTPS record.
     */
    data: MpBuiT95HTTPsRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'HTTPS';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted HTTPS content. See 'data' to set HTTPS properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95HTTPsRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95HTTPsRecord {
    /**
     * Components of a HTTPS record.
     */
    export interface Data {
      /**
       * priority.
       */
      priority?: number;

      /**
       * target.
       */
      target?: string;

      /**
       * value.
       */
      value?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95LocRecord {
    /**
     * Components of a LOC record.
     */
    data: MpBuiT95LocRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'LOC';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted LOC content. See 'data' to set LOC properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95LocRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95LocRecord {
    /**
     * Components of a LOC record.
     */
    export interface Data {
      /**
       * Altitude of location in meters.
       */
      altitude?: number;

      /**
       * Degrees of latitude.
       */
      lat_degrees?: number;

      /**
       * Latitude direction.
       */
      lat_direction?: 'N' | 'S';

      /**
       * Minutes of latitude.
       */
      lat_minutes?: number;

      /**
       * Seconds of latitude.
       */
      lat_seconds?: number;

      /**
       * Degrees of longitude.
       */
      long_degrees?: number;

      /**
       * Longitude direction.
       */
      long_direction?: 'E' | 'W';

      /**
       * Minutes of longitude.
       */
      long_minutes?: number;

      /**
       * Seconds of longitude.
       */
      long_seconds?: number;

      /**
       * Horizontal precision of location.
       */
      precision_horz?: number;

      /**
       * Vertical precision of location.
       */
      precision_vert?: number;

      /**
       * Size of location in meters.
       */
      size?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95MxRecord {
    /**
     * A valid mail server hostname.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Required for MX, SRV and URI records; unused by other record types. Records with
     * lower priorities are preferred.
     */
    priority: number;

    /**
     * Record type.
     */
    type: 'MX';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95MxRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95MxRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95NaptrRecord {
    /**
     * Components of a NAPTR record.
     */
    data: MpBuiT95NaptrRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'NAPTR';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted NAPTR content. See 'data' to set NAPTR properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95NaptrRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95NaptrRecord {
    /**
     * Components of a NAPTR record.
     */
    export interface Data {
      /**
       * Flags.
       */
      flags?: string;

      /**
       * Order.
       */
      order?: number;

      /**
       * Preference.
       */
      preference?: number;

      /**
       * Regex.
       */
      regex?: string;

      /**
       * Replacement.
       */
      replacement?: string;

      /**
       * Service.
       */
      service?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95NsRecord {
    /**
     * A valid name server host name.
     */
    content: unknown;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'NS';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95NsRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95NsRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95PtrRecord {
    /**
     * Domain name pointing to the address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'PTR';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95PtrRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95PtrRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95SmimeaRecord {
    /**
     * Components of a SMIMEA record.
     */
    data: MpBuiT95SmimeaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SMIMEA';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted SMIMEA content. See 'data' to set SMIMEA properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95SmimeaRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95SmimeaRecord {
    /**
     * Components of a SMIMEA record.
     */
    export interface Data {
      /**
       * Certificate.
       */
      certificate?: string;

      /**
       * Matching Type.
       */
      matching_type?: number;

      /**
       * Selector.
       */
      selector?: number;

      /**
       * Usage.
       */
      usage?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95SrvRecord {
    /**
     * Components of a SRV record.
     */
    data: MpBuiT95SrvRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode. For SRV records, the first
     * label is normally a service and the second a protocol name, each starting with
     * an underscore.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SRV';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Priority, weight, port, and SRV target. See 'data' for setting the individual
     * component values.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95SrvRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95SrvRecord {
    /**
     * Components of a SRV record.
     */
    export interface Data {
      /**
       * A valid hostname. Deprecated in favor of the regular 'name' outside the data
       * map. This data map field represents the remainder of the full 'name' after the
       * service and protocol.
       */
      name?: string;

      /**
       * The port of the service.
       */
      port?: number;

      /**
       * Required for MX, SRV and URI records; unused by other record types. Records with
       * lower priorities are preferred.
       */
      priority?: number;

      /**
       * A valid protocol, prefixed with an underscore. Deprecated in favor of the
       * regular 'name' outside the data map. This data map field normally represents the
       * second label of that 'name'.
       */
      proto?: string;

      /**
       * A service type, prefixed with an underscore. Deprecated in favor of the regular
       * 'name' outside the data map. This data map field normally represents the first
       * label of that 'name'.
       */
      service?: string;

      /**
       * A valid hostname.
       */
      target?: string;

      /**
       * The record weight.
       */
      weight?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95SshfpRecord {
    /**
     * Components of a SSHFP record.
     */
    data: MpBuiT95SshfpRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SSHFP';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted SSHFP content. See 'data' to set SSHFP properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95SshfpRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95SshfpRecord {
    /**
     * Components of a SSHFP record.
     */
    export interface Data {
      /**
       * algorithm.
       */
      algorithm?: number;

      /**
       * fingerprint.
       */
      fingerprint?: string;

      /**
       * type.
       */
      type?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95SvcbRecord {
    /**
     * Components of a SVCB record.
     */
    data: MpBuiT95SvcbRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SVCB';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted SVCB content. See 'data' to set SVCB properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95SvcbRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95SvcbRecord {
    /**
     * Components of a SVCB record.
     */
    export interface Data {
      /**
       * priority.
       */
      priority?: number;

      /**
       * target.
       */
      target?: string;

      /**
       * value.
       */
      value?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95TlsaRecord {
    /**
     * Components of a TLSA record.
     */
    data: MpBuiT95TlsaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'TLSA';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted TLSA content. See 'data' to set TLSA properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95TlsaRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95TlsaRecord {
    /**
     * Components of a TLSA record.
     */
    export interface Data {
      /**
       * certificate.
       */
      certificate?: string;

      /**
       * Matching Type.
       */
      matching_type?: number;

      /**
       * Selector.
       */
      selector?: number;

      /**
       * Usage.
       */
      usage?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95TxtRecord {
    /**
     * Text content for the record.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'TXT';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95TxtRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95TxtRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95UriRecord {
    /**
     * Components of a URI record.
     */
    data: MpBuiT95UriRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Required for MX, SRV and URI records; unused by other record types. Records with
     * lower priorities are preferred.
     */
    priority: number;

    /**
     * Record type.
     */
    type: 'URI';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted URI content. See 'data' to set URI properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95UriRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95UriRecord {
    /**
     * Components of a URI record.
     */
    export interface Data {
      /**
       * The record content.
       */
      content?: string;

      /**
       * The record weight.
       */
      weight?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }
}

export interface DNSRecordDeleteResponse {
  result?: DNSRecordDeleteResponse.Result;
}

export namespace DNSRecordDeleteResponse {
  export interface Result {
    /**
     * Identifier
     */
    id?: string;
  }
}

export type DNSRecordDNSRecordsForAZoneListDNSRecordsResponse =
  | DNSRecordDNSRecordsForAZoneListDNSRecordsResponse.MpBuiT95ARecord
  | DNSRecordDNSRecordsForAZoneListDNSRecordsResponse.MpBuiT95AaaaRecord
  | DNSRecordDNSRecordsForAZoneListDNSRecordsResponse.MpBuiT95CaaRecord
  | DNSRecordDNSRecordsForAZoneListDNSRecordsResponse.MpBuiT95CertRecord
  | DNSRecordDNSRecordsForAZoneListDNSRecordsResponse.MpBuiT95CnameRecord
  | DNSRecordDNSRecordsForAZoneListDNSRecordsResponse.MpBuiT95DnskeyRecord
  | DNSRecordDNSRecordsForAZoneListDNSRecordsResponse.MpBuiT95DsRecord
  | DNSRecordDNSRecordsForAZoneListDNSRecordsResponse.MpBuiT95HTTPsRecord
  | DNSRecordDNSRecordsForAZoneListDNSRecordsResponse.MpBuiT95LocRecord
  | DNSRecordDNSRecordsForAZoneListDNSRecordsResponse.MpBuiT95MxRecord
  | DNSRecordDNSRecordsForAZoneListDNSRecordsResponse.MpBuiT95NaptrRecord
  | DNSRecordDNSRecordsForAZoneListDNSRecordsResponse.MpBuiT95NsRecord
  | DNSRecordDNSRecordsForAZoneListDNSRecordsResponse.MpBuiT95PtrRecord
  | DNSRecordDNSRecordsForAZoneListDNSRecordsResponse.MpBuiT95SmimeaRecord
  | DNSRecordDNSRecordsForAZoneListDNSRecordsResponse.MpBuiT95SrvRecord
  | DNSRecordDNSRecordsForAZoneListDNSRecordsResponse.MpBuiT95SshfpRecord
  | DNSRecordDNSRecordsForAZoneListDNSRecordsResponse.MpBuiT95SvcbRecord
  | DNSRecordDNSRecordsForAZoneListDNSRecordsResponse.MpBuiT95TlsaRecord
  | DNSRecordDNSRecordsForAZoneListDNSRecordsResponse.MpBuiT95TxtRecord
  | DNSRecordDNSRecordsForAZoneListDNSRecordsResponse.MpBuiT95UriRecord;

export namespace DNSRecordDNSRecordsForAZoneListDNSRecordsResponse {
  export interface MpBuiT95ARecord {
    /**
     * A valid IPv4 address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'A';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95ARecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95ARecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95AaaaRecord {
    /**
     * A valid IPv6 address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'AAAA';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95AaaaRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95AaaaRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95CaaRecord {
    /**
     * Components of a CAA record.
     */
    data: MpBuiT95CaaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CAA';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted CAA content. See 'data' to set CAA properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95CaaRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95CaaRecord {
    /**
     * Components of a CAA record.
     */
    export interface Data {
      /**
       * Flags for the CAA record.
       */
      flags?: number;

      /**
       * Name of the property controlled by this record (e.g.: issue, issuewild, iodef).
       */
      tag?: string;

      /**
       * Value of the record. This field's semantics depend on the chosen tag.
       */
      value?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95CertRecord {
    /**
     * Components of a CERT record.
     */
    data: MpBuiT95CertRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CERT';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted CERT content. See 'data' to set CERT properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95CertRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95CertRecord {
    /**
     * Components of a CERT record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Certificate.
       */
      certificate?: string;

      /**
       * Key Tag.
       */
      key_tag?: number;

      /**
       * Type.
       */
      type?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95CnameRecord {
    /**
     * A valid hostname. Must not match the record's name.
     */
    content: unknown;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CNAME';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95CnameRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95CnameRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95DnskeyRecord {
    /**
     * Components of a DNSKEY record.
     */
    data: MpBuiT95DnskeyRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'DNSKEY';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted DNSKEY content. See 'data' to set DNSKEY properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95DnskeyRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95DnskeyRecord {
    /**
     * Components of a DNSKEY record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Flags.
       */
      flags?: number;

      /**
       * Protocol.
       */
      protocol?: number;

      /**
       * Public Key.
       */
      public_key?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95DsRecord {
    /**
     * Components of a DS record.
     */
    data: MpBuiT95DsRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'DS';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted DS content. See 'data' to set DS properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95DsRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95DsRecord {
    /**
     * Components of a DS record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Digest.
       */
      digest?: string;

      /**
       * Digest Type.
       */
      digest_type?: number;

      /**
       * Key Tag.
       */
      key_tag?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95HTTPsRecord {
    /**
     * Components of a HTTPS record.
     */
    data: MpBuiT95HTTPsRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'HTTPS';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted HTTPS content. See 'data' to set HTTPS properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95HTTPsRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95HTTPsRecord {
    /**
     * Components of a HTTPS record.
     */
    export interface Data {
      /**
       * priority.
       */
      priority?: number;

      /**
       * target.
       */
      target?: string;

      /**
       * value.
       */
      value?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95LocRecord {
    /**
     * Components of a LOC record.
     */
    data: MpBuiT95LocRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'LOC';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted LOC content. See 'data' to set LOC properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95LocRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95LocRecord {
    /**
     * Components of a LOC record.
     */
    export interface Data {
      /**
       * Altitude of location in meters.
       */
      altitude?: number;

      /**
       * Degrees of latitude.
       */
      lat_degrees?: number;

      /**
       * Latitude direction.
       */
      lat_direction?: 'N' | 'S';

      /**
       * Minutes of latitude.
       */
      lat_minutes?: number;

      /**
       * Seconds of latitude.
       */
      lat_seconds?: number;

      /**
       * Degrees of longitude.
       */
      long_degrees?: number;

      /**
       * Longitude direction.
       */
      long_direction?: 'E' | 'W';

      /**
       * Minutes of longitude.
       */
      long_minutes?: number;

      /**
       * Seconds of longitude.
       */
      long_seconds?: number;

      /**
       * Horizontal precision of location.
       */
      precision_horz?: number;

      /**
       * Vertical precision of location.
       */
      precision_vert?: number;

      /**
       * Size of location in meters.
       */
      size?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95MxRecord {
    /**
     * A valid mail server hostname.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Required for MX, SRV and URI records; unused by other record types. Records with
     * lower priorities are preferred.
     */
    priority: number;

    /**
     * Record type.
     */
    type: 'MX';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95MxRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95MxRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95NaptrRecord {
    /**
     * Components of a NAPTR record.
     */
    data: MpBuiT95NaptrRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'NAPTR';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted NAPTR content. See 'data' to set NAPTR properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95NaptrRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95NaptrRecord {
    /**
     * Components of a NAPTR record.
     */
    export interface Data {
      /**
       * Flags.
       */
      flags?: string;

      /**
       * Order.
       */
      order?: number;

      /**
       * Preference.
       */
      preference?: number;

      /**
       * Regex.
       */
      regex?: string;

      /**
       * Replacement.
       */
      replacement?: string;

      /**
       * Service.
       */
      service?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95NsRecord {
    /**
     * A valid name server host name.
     */
    content: unknown;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'NS';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95NsRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95NsRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95PtrRecord {
    /**
     * Domain name pointing to the address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'PTR';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95PtrRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95PtrRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95SmimeaRecord {
    /**
     * Components of a SMIMEA record.
     */
    data: MpBuiT95SmimeaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SMIMEA';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted SMIMEA content. See 'data' to set SMIMEA properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95SmimeaRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95SmimeaRecord {
    /**
     * Components of a SMIMEA record.
     */
    export interface Data {
      /**
       * Certificate.
       */
      certificate?: string;

      /**
       * Matching Type.
       */
      matching_type?: number;

      /**
       * Selector.
       */
      selector?: number;

      /**
       * Usage.
       */
      usage?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95SrvRecord {
    /**
     * Components of a SRV record.
     */
    data: MpBuiT95SrvRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode. For SRV records, the first
     * label is normally a service and the second a protocol name, each starting with
     * an underscore.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SRV';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Priority, weight, port, and SRV target. See 'data' for setting the individual
     * component values.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95SrvRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95SrvRecord {
    /**
     * Components of a SRV record.
     */
    export interface Data {
      /**
       * A valid hostname. Deprecated in favor of the regular 'name' outside the data
       * map. This data map field represents the remainder of the full 'name' after the
       * service and protocol.
       */
      name?: string;

      /**
       * The port of the service.
       */
      port?: number;

      /**
       * Required for MX, SRV and URI records; unused by other record types. Records with
       * lower priorities are preferred.
       */
      priority?: number;

      /**
       * A valid protocol, prefixed with an underscore. Deprecated in favor of the
       * regular 'name' outside the data map. This data map field normally represents the
       * second label of that 'name'.
       */
      proto?: string;

      /**
       * A service type, prefixed with an underscore. Deprecated in favor of the regular
       * 'name' outside the data map. This data map field normally represents the first
       * label of that 'name'.
       */
      service?: string;

      /**
       * A valid hostname.
       */
      target?: string;

      /**
       * The record weight.
       */
      weight?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95SshfpRecord {
    /**
     * Components of a SSHFP record.
     */
    data: MpBuiT95SshfpRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SSHFP';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted SSHFP content. See 'data' to set SSHFP properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95SshfpRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95SshfpRecord {
    /**
     * Components of a SSHFP record.
     */
    export interface Data {
      /**
       * algorithm.
       */
      algorithm?: number;

      /**
       * fingerprint.
       */
      fingerprint?: string;

      /**
       * type.
       */
      type?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95SvcbRecord {
    /**
     * Components of a SVCB record.
     */
    data: MpBuiT95SvcbRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SVCB';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted SVCB content. See 'data' to set SVCB properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95SvcbRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95SvcbRecord {
    /**
     * Components of a SVCB record.
     */
    export interface Data {
      /**
       * priority.
       */
      priority?: number;

      /**
       * target.
       */
      target?: string;

      /**
       * value.
       */
      value?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95TlsaRecord {
    /**
     * Components of a TLSA record.
     */
    data: MpBuiT95TlsaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'TLSA';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted TLSA content. See 'data' to set TLSA properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95TlsaRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95TlsaRecord {
    /**
     * Components of a TLSA record.
     */
    export interface Data {
      /**
       * certificate.
       */
      certificate?: string;

      /**
       * Matching Type.
       */
      matching_type?: number;

      /**
       * Selector.
       */
      selector?: number;

      /**
       * Usage.
       */
      usage?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95TxtRecord {
    /**
     * Text content for the record.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'TXT';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95TxtRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95TxtRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface MpBuiT95UriRecord {
    /**
     * Components of a URI record.
     */
    data: MpBuiT95UriRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Required for MX, SRV and URI records; unused by other record types. Records with
     * lower priorities are preferred.
     */
    priority: number;

    /**
     * Record type.
     */
    type: 'URI';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted URI content. See 'data' to set URI properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: MpBuiT95UriRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace MpBuiT95UriRecord {
    /**
     * Components of a URI record.
     */
    export interface Data {
      /**
       * The record content.
       */
      content?: string;

      /**
       * The record weight.
       */
      weight?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }
}

export type DNSRecordUpdateParams =
  | DNSRecordUpdateParams.MpBuiT95ARecord
  | DNSRecordUpdateParams.MpBuiT95AaaaRecord
  | DNSRecordUpdateParams.MpBuiT95CaaRecord
  | DNSRecordUpdateParams.MpBuiT95CertRecord
  | DNSRecordUpdateParams.MpBuiT95CnameRecord
  | DNSRecordUpdateParams.MpBuiT95DnskeyRecord
  | DNSRecordUpdateParams.MpBuiT95DsRecord
  | DNSRecordUpdateParams.MpBuiT95HTTPsRecord
  | DNSRecordUpdateParams.MpBuiT95LocRecord
  | DNSRecordUpdateParams.MpBuiT95MxRecord
  | DNSRecordUpdateParams.MpBuiT95NaptrRecord
  | DNSRecordUpdateParams.MpBuiT95NsRecord
  | DNSRecordUpdateParams.MpBuiT95PtrRecord
  | DNSRecordUpdateParams.MpBuiT95SmimeaRecord
  | DNSRecordUpdateParams.MpBuiT95SrvRecord
  | DNSRecordUpdateParams.MpBuiT95SshfpRecord
  | DNSRecordUpdateParams.MpBuiT95SvcbRecord
  | DNSRecordUpdateParams.MpBuiT95TlsaRecord
  | DNSRecordUpdateParams.MpBuiT95TxtRecord
  | DNSRecordUpdateParams.MpBuiT95UriRecord;

export namespace DNSRecordUpdateParams {
  export interface MpBuiT95ARecord {
    /**
     * A valid IPv4 address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'A';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export interface MpBuiT95AaaaRecord {
    /**
     * A valid IPv6 address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'AAAA';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export interface MpBuiT95CaaRecord {
    /**
     * Components of a CAA record.
     */
    data: DNSRecordUpdateParams.MpBuiT95CaaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CAA';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95CaaRecord {
    /**
     * Components of a CAA record.
     */
    export interface Data {
      /**
       * Flags for the CAA record.
       */
      flags?: number;

      /**
       * Name of the property controlled by this record (e.g.: issue, issuewild, iodef).
       */
      tag?: string;

      /**
       * Value of the record. This field's semantics depend on the chosen tag.
       */
      value?: string;
    }
  }

  export interface MpBuiT95CertRecord {
    /**
     * Components of a CERT record.
     */
    data: DNSRecordUpdateParams.MpBuiT95CertRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CERT';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95CertRecord {
    /**
     * Components of a CERT record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Certificate.
       */
      certificate?: string;

      /**
       * Key Tag.
       */
      key_tag?: number;

      /**
       * Type.
       */
      type?: number;
    }
  }

  export interface MpBuiT95CnameRecord {
    /**
     * A valid hostname. Must not match the record's name.
     */
    content: unknown;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CNAME';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export interface MpBuiT95DnskeyRecord {
    /**
     * Components of a DNSKEY record.
     */
    data: DNSRecordUpdateParams.MpBuiT95DnskeyRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'DNSKEY';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95DnskeyRecord {
    /**
     * Components of a DNSKEY record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Flags.
       */
      flags?: number;

      /**
       * Protocol.
       */
      protocol?: number;

      /**
       * Public Key.
       */
      public_key?: string;
    }
  }

  export interface MpBuiT95DsRecord {
    /**
     * Components of a DS record.
     */
    data: DNSRecordUpdateParams.MpBuiT95DsRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'DS';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95DsRecord {
    /**
     * Components of a DS record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Digest.
       */
      digest?: string;

      /**
       * Digest Type.
       */
      digest_type?: number;

      /**
       * Key Tag.
       */
      key_tag?: number;
    }
  }

  export interface MpBuiT95HTTPsRecord {
    /**
     * Components of a HTTPS record.
     */
    data: DNSRecordUpdateParams.MpBuiT95HTTPsRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'HTTPS';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95HTTPsRecord {
    /**
     * Components of a HTTPS record.
     */
    export interface Data {
      /**
       * priority.
       */
      priority?: number;

      /**
       * target.
       */
      target?: string;

      /**
       * value.
       */
      value?: string;
    }
  }

  export interface MpBuiT95LocRecord {
    /**
     * Components of a LOC record.
     */
    data: DNSRecordUpdateParams.MpBuiT95LocRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'LOC';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95LocRecord {
    /**
     * Components of a LOC record.
     */
    export interface Data {
      /**
       * Altitude of location in meters.
       */
      altitude?: number;

      /**
       * Degrees of latitude.
       */
      lat_degrees?: number;

      /**
       * Latitude direction.
       */
      lat_direction?: 'N' | 'S';

      /**
       * Minutes of latitude.
       */
      lat_minutes?: number;

      /**
       * Seconds of latitude.
       */
      lat_seconds?: number;

      /**
       * Degrees of longitude.
       */
      long_degrees?: number;

      /**
       * Longitude direction.
       */
      long_direction?: 'E' | 'W';

      /**
       * Minutes of longitude.
       */
      long_minutes?: number;

      /**
       * Seconds of longitude.
       */
      long_seconds?: number;

      /**
       * Horizontal precision of location.
       */
      precision_horz?: number;

      /**
       * Vertical precision of location.
       */
      precision_vert?: number;

      /**
       * Size of location in meters.
       */
      size?: number;
    }
  }

  export interface MpBuiT95MxRecord {
    /**
     * A valid mail server hostname.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Required for MX, SRV and URI records; unused by other record types. Records with
     * lower priorities are preferred.
     */
    priority: number;

    /**
     * Record type.
     */
    type: 'MX';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export interface MpBuiT95NaptrRecord {
    /**
     * Components of a NAPTR record.
     */
    data: DNSRecordUpdateParams.MpBuiT95NaptrRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'NAPTR';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95NaptrRecord {
    /**
     * Components of a NAPTR record.
     */
    export interface Data {
      /**
       * Flags.
       */
      flags?: string;

      /**
       * Order.
       */
      order?: number;

      /**
       * Preference.
       */
      preference?: number;

      /**
       * Regex.
       */
      regex?: string;

      /**
       * Replacement.
       */
      replacement?: string;

      /**
       * Service.
       */
      service?: string;
    }
  }

  export interface MpBuiT95NsRecord {
    /**
     * A valid name server host name.
     */
    content: unknown;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'NS';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export interface MpBuiT95PtrRecord {
    /**
     * Domain name pointing to the address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'PTR';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export interface MpBuiT95SmimeaRecord {
    /**
     * Components of a SMIMEA record.
     */
    data: DNSRecordUpdateParams.MpBuiT95SmimeaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SMIMEA';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95SmimeaRecord {
    /**
     * Components of a SMIMEA record.
     */
    export interface Data {
      /**
       * Certificate.
       */
      certificate?: string;

      /**
       * Matching Type.
       */
      matching_type?: number;

      /**
       * Selector.
       */
      selector?: number;

      /**
       * Usage.
       */
      usage?: number;
    }
  }

  export interface MpBuiT95SrvRecord {
    /**
     * Components of a SRV record.
     */
    data: DNSRecordUpdateParams.MpBuiT95SrvRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode. For SRV records, the first
     * label is normally a service and the second a protocol name, each starting with
     * an underscore.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SRV';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95SrvRecord {
    /**
     * Components of a SRV record.
     */
    export interface Data {
      /**
       * A valid hostname. Deprecated in favor of the regular 'name' outside the data
       * map. This data map field represents the remainder of the full 'name' after the
       * service and protocol.
       */
      name?: string;

      /**
       * The port of the service.
       */
      port?: number;

      /**
       * Required for MX, SRV and URI records; unused by other record types. Records with
       * lower priorities are preferred.
       */
      priority?: number;

      /**
       * A valid protocol, prefixed with an underscore. Deprecated in favor of the
       * regular 'name' outside the data map. This data map field normally represents the
       * second label of that 'name'.
       */
      proto?: string;

      /**
       * A service type, prefixed with an underscore. Deprecated in favor of the regular
       * 'name' outside the data map. This data map field normally represents the first
       * label of that 'name'.
       */
      service?: string;

      /**
       * A valid hostname.
       */
      target?: string;

      /**
       * The record weight.
       */
      weight?: number;
    }
  }

  export interface MpBuiT95SshfpRecord {
    /**
     * Components of a SSHFP record.
     */
    data: DNSRecordUpdateParams.MpBuiT95SshfpRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SSHFP';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95SshfpRecord {
    /**
     * Components of a SSHFP record.
     */
    export interface Data {
      /**
       * algorithm.
       */
      algorithm?: number;

      /**
       * fingerprint.
       */
      fingerprint?: string;

      /**
       * type.
       */
      type?: number;
    }
  }

  export interface MpBuiT95SvcbRecord {
    /**
     * Components of a SVCB record.
     */
    data: DNSRecordUpdateParams.MpBuiT95SvcbRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SVCB';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95SvcbRecord {
    /**
     * Components of a SVCB record.
     */
    export interface Data {
      /**
       * priority.
       */
      priority?: number;

      /**
       * target.
       */
      target?: string;

      /**
       * value.
       */
      value?: string;
    }
  }

  export interface MpBuiT95TlsaRecord {
    /**
     * Components of a TLSA record.
     */
    data: DNSRecordUpdateParams.MpBuiT95TlsaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'TLSA';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95TlsaRecord {
    /**
     * Components of a TLSA record.
     */
    export interface Data {
      /**
       * certificate.
       */
      certificate?: string;

      /**
       * Matching Type.
       */
      matching_type?: number;

      /**
       * Selector.
       */
      selector?: number;

      /**
       * Usage.
       */
      usage?: number;
    }
  }

  export interface MpBuiT95TxtRecord {
    /**
     * Text content for the record.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'TXT';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export interface MpBuiT95UriRecord {
    /**
     * Components of a URI record.
     */
    data: DNSRecordUpdateParams.MpBuiT95UriRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Required for MX, SRV and URI records; unused by other record types. Records with
     * lower priorities are preferred.
     */
    priority: number;

    /**
     * Record type.
     */
    type: 'URI';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95UriRecord {
    /**
     * Components of a URI record.
     */
    export interface Data {
      /**
       * The record content.
       */
      content?: string;

      /**
       * The record weight.
       */
      weight?: number;
    }
  }
}

export type DNSRecordDNSRecordsForAZoneCreateDNSRecordParams =
  | DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95ARecord
  | DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95AaaaRecord
  | DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95CaaRecord
  | DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95CertRecord
  | DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95CnameRecord
  | DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95DnskeyRecord
  | DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95DsRecord
  | DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95HTTPsRecord
  | DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95LocRecord
  | DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95MxRecord
  | DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95NaptrRecord
  | DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95NsRecord
  | DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95PtrRecord
  | DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95SmimeaRecord
  | DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95SrvRecord
  | DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95SshfpRecord
  | DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95SvcbRecord
  | DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95TlsaRecord
  | DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95TxtRecord
  | DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95UriRecord;

export namespace DNSRecordDNSRecordsForAZoneCreateDNSRecordParams {
  export interface MpBuiT95ARecord {
    /**
     * A valid IPv4 address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'A';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export interface MpBuiT95AaaaRecord {
    /**
     * A valid IPv6 address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'AAAA';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export interface MpBuiT95CaaRecord {
    /**
     * Components of a CAA record.
     */
    data: DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95CaaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CAA';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95CaaRecord {
    /**
     * Components of a CAA record.
     */
    export interface Data {
      /**
       * Flags for the CAA record.
       */
      flags?: number;

      /**
       * Name of the property controlled by this record (e.g.: issue, issuewild, iodef).
       */
      tag?: string;

      /**
       * Value of the record. This field's semantics depend on the chosen tag.
       */
      value?: string;
    }
  }

  export interface MpBuiT95CertRecord {
    /**
     * Components of a CERT record.
     */
    data: DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95CertRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CERT';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95CertRecord {
    /**
     * Components of a CERT record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Certificate.
       */
      certificate?: string;

      /**
       * Key Tag.
       */
      key_tag?: number;

      /**
       * Type.
       */
      type?: number;
    }
  }

  export interface MpBuiT95CnameRecord {
    /**
     * A valid hostname. Must not match the record's name.
     */
    content: unknown;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CNAME';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export interface MpBuiT95DnskeyRecord {
    /**
     * Components of a DNSKEY record.
     */
    data: DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95DnskeyRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'DNSKEY';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95DnskeyRecord {
    /**
     * Components of a DNSKEY record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Flags.
       */
      flags?: number;

      /**
       * Protocol.
       */
      protocol?: number;

      /**
       * Public Key.
       */
      public_key?: string;
    }
  }

  export interface MpBuiT95DsRecord {
    /**
     * Components of a DS record.
     */
    data: DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95DsRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'DS';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95DsRecord {
    /**
     * Components of a DS record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Digest.
       */
      digest?: string;

      /**
       * Digest Type.
       */
      digest_type?: number;

      /**
       * Key Tag.
       */
      key_tag?: number;
    }
  }

  export interface MpBuiT95HTTPsRecord {
    /**
     * Components of a HTTPS record.
     */
    data: DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95HTTPsRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'HTTPS';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95HTTPsRecord {
    /**
     * Components of a HTTPS record.
     */
    export interface Data {
      /**
       * priority.
       */
      priority?: number;

      /**
       * target.
       */
      target?: string;

      /**
       * value.
       */
      value?: string;
    }
  }

  export interface MpBuiT95LocRecord {
    /**
     * Components of a LOC record.
     */
    data: DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95LocRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'LOC';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95LocRecord {
    /**
     * Components of a LOC record.
     */
    export interface Data {
      /**
       * Altitude of location in meters.
       */
      altitude?: number;

      /**
       * Degrees of latitude.
       */
      lat_degrees?: number;

      /**
       * Latitude direction.
       */
      lat_direction?: 'N' | 'S';

      /**
       * Minutes of latitude.
       */
      lat_minutes?: number;

      /**
       * Seconds of latitude.
       */
      lat_seconds?: number;

      /**
       * Degrees of longitude.
       */
      long_degrees?: number;

      /**
       * Longitude direction.
       */
      long_direction?: 'E' | 'W';

      /**
       * Minutes of longitude.
       */
      long_minutes?: number;

      /**
       * Seconds of longitude.
       */
      long_seconds?: number;

      /**
       * Horizontal precision of location.
       */
      precision_horz?: number;

      /**
       * Vertical precision of location.
       */
      precision_vert?: number;

      /**
       * Size of location in meters.
       */
      size?: number;
    }
  }

  export interface MpBuiT95MxRecord {
    /**
     * A valid mail server hostname.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Required for MX, SRV and URI records; unused by other record types. Records with
     * lower priorities are preferred.
     */
    priority: number;

    /**
     * Record type.
     */
    type: 'MX';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export interface MpBuiT95NaptrRecord {
    /**
     * Components of a NAPTR record.
     */
    data: DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95NaptrRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'NAPTR';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95NaptrRecord {
    /**
     * Components of a NAPTR record.
     */
    export interface Data {
      /**
       * Flags.
       */
      flags?: string;

      /**
       * Order.
       */
      order?: number;

      /**
       * Preference.
       */
      preference?: number;

      /**
       * Regex.
       */
      regex?: string;

      /**
       * Replacement.
       */
      replacement?: string;

      /**
       * Service.
       */
      service?: string;
    }
  }

  export interface MpBuiT95NsRecord {
    /**
     * A valid name server host name.
     */
    content: unknown;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'NS';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export interface MpBuiT95PtrRecord {
    /**
     * Domain name pointing to the address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'PTR';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export interface MpBuiT95SmimeaRecord {
    /**
     * Components of a SMIMEA record.
     */
    data: DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95SmimeaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SMIMEA';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95SmimeaRecord {
    /**
     * Components of a SMIMEA record.
     */
    export interface Data {
      /**
       * Certificate.
       */
      certificate?: string;

      /**
       * Matching Type.
       */
      matching_type?: number;

      /**
       * Selector.
       */
      selector?: number;

      /**
       * Usage.
       */
      usage?: number;
    }
  }

  export interface MpBuiT95SrvRecord {
    /**
     * Components of a SRV record.
     */
    data: DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95SrvRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode. For SRV records, the first
     * label is normally a service and the second a protocol name, each starting with
     * an underscore.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SRV';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95SrvRecord {
    /**
     * Components of a SRV record.
     */
    export interface Data {
      /**
       * A valid hostname. Deprecated in favor of the regular 'name' outside the data
       * map. This data map field represents the remainder of the full 'name' after the
       * service and protocol.
       */
      name?: string;

      /**
       * The port of the service.
       */
      port?: number;

      /**
       * Required for MX, SRV and URI records; unused by other record types. Records with
       * lower priorities are preferred.
       */
      priority?: number;

      /**
       * A valid protocol, prefixed with an underscore. Deprecated in favor of the
       * regular 'name' outside the data map. This data map field normally represents the
       * second label of that 'name'.
       */
      proto?: string;

      /**
       * A service type, prefixed with an underscore. Deprecated in favor of the regular
       * 'name' outside the data map. This data map field normally represents the first
       * label of that 'name'.
       */
      service?: string;

      /**
       * A valid hostname.
       */
      target?: string;

      /**
       * The record weight.
       */
      weight?: number;
    }
  }

  export interface MpBuiT95SshfpRecord {
    /**
     * Components of a SSHFP record.
     */
    data: DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95SshfpRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SSHFP';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95SshfpRecord {
    /**
     * Components of a SSHFP record.
     */
    export interface Data {
      /**
       * algorithm.
       */
      algorithm?: number;

      /**
       * fingerprint.
       */
      fingerprint?: string;

      /**
       * type.
       */
      type?: number;
    }
  }

  export interface MpBuiT95SvcbRecord {
    /**
     * Components of a SVCB record.
     */
    data: DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95SvcbRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SVCB';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95SvcbRecord {
    /**
     * Components of a SVCB record.
     */
    export interface Data {
      /**
       * priority.
       */
      priority?: number;

      /**
       * target.
       */
      target?: string;

      /**
       * value.
       */
      value?: string;
    }
  }

  export interface MpBuiT95TlsaRecord {
    /**
     * Components of a TLSA record.
     */
    data: DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95TlsaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'TLSA';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95TlsaRecord {
    /**
     * Components of a TLSA record.
     */
    export interface Data {
      /**
       * certificate.
       */
      certificate?: string;

      /**
       * Matching Type.
       */
      matching_type?: number;

      /**
       * Selector.
       */
      selector?: number;

      /**
       * Usage.
       */
      usage?: number;
    }
  }

  export interface MpBuiT95TxtRecord {
    /**
     * Text content for the record.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'TXT';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export interface MpBuiT95UriRecord {
    /**
     * Components of a URI record.
     */
    data: DNSRecordDNSRecordsForAZoneCreateDNSRecordParams.MpBuiT95UriRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Required for MX, SRV and URI records; unused by other record types. Records with
     * lower priorities are preferred.
     */
    priority: number;

    /**
     * Record type.
     */
    type: 'URI';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95UriRecord {
    /**
     * Components of a URI record.
     */
    export interface Data {
      /**
       * The record content.
       */
      content?: string;

      /**
       * The record weight.
       */
      weight?: number;
    }
  }
}

export interface DNSRecordDNSRecordsForAZoneListDNSRecordsParams {
  comment?: DNSRecordDNSRecordsForAZoneListDNSRecordsParams.Comment;

  /**
   * DNS record content.
   */
  content?: string;

  /**
   * Direction to order DNS records in.
   */
  direction?: 'asc' | 'desc';

  /**
   * Whether to match all search requirements or at least one (any). If set to `all`,
   * acts like a logical AND between filters. If set to `any`, acts like a logical OR
   * instead. Note that the interaction between tag filters is controlled by the
   * `tag-match` parameter instead.
   */
  match?: 'any' | 'all';

  /**
   * DNS record name (or @ for the zone apex) in Punycode.
   */
  name?: string;

  /**
   * Field to order DNS records by.
   */
  order?: 'type' | 'name' | 'content' | 'ttl' | 'proxied';

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Number of DNS records per page.
   */
  per_page?: number;

  /**
   * Whether the record is receiving the performance and security benefits of
   * Cloudflare.
   */
  proxied?: boolean;

  /**
   * Allows searching in multiple properties of a DNS record simultaneously. This
   * parameter is intended for human users, not automation. Its exact behavior is
   * intentionally left unspecified and is subject to change in the future. This
   * parameter works independently of the `match` setting. For automated searches,
   * please use the other available parameters.
   */
  search?: string;

  tag?: DNSRecordDNSRecordsForAZoneListDNSRecordsParams.Tag;

  /**
   * Whether to match all tag search requirements or at least one (any). If set to
   * `all`, acts like a logical AND between tag filters. If set to `any`, acts like a
   * logical OR instead. Note that the regular `match` parameter is still used to
   * combine the resulting condition with other filters that aren't related to tags.
   */
  tag_match?: 'any' | 'all';

  /**
   * Record type.
   */
  type?:
    | 'A'
    | 'AAAA'
    | 'CAA'
    | 'CERT'
    | 'CNAME'
    | 'DNSKEY'
    | 'DS'
    | 'HTTPS'
    | 'LOC'
    | 'MX'
    | 'NAPTR'
    | 'NS'
    | 'PTR'
    | 'SMIMEA'
    | 'SRV'
    | 'SSHFP'
    | 'SVCB'
    | 'TLSA'
    | 'TXT'
    | 'URI';
}

export namespace DNSRecordDNSRecordsForAZoneListDNSRecordsParams {
  export interface Comment {
    /**
     * If this parameter is present, only records _without_ a comment are returned.
     */
    absent?: string;

    /**
     * Substring of the DNS record comment. Comment filters are case-insensitive.
     */
    contains?: string;

    /**
     * Suffix of the DNS record comment. Comment filters are case-insensitive.
     */
    endswith?: string;

    /**
     * Exact value of the DNS record comment. Comment filters are case-insensitive.
     */
    exact?: string;

    /**
     * If this parameter is present, only records _with_ a comment are returned.
     */
    present?: string;

    /**
     * Prefix of the DNS record comment. Comment filters are case-insensitive.
     */
    startswith?: string;
  }

  export interface Tag {
    /**
     * Name of a tag which must _not_ be present on the DNS record. Tag filters are
     * case-insensitive.
     */
    absent?: string;

    /**
     * A tag and value, of the form `<tag-name>:<tag-value>`. The API will only return
     * DNS records that have a tag named `<tag-name>` whose value contains
     * `<tag-value>`. Tag filters are case-insensitive.
     */
    contains?: string;

    /**
     * A tag and value, of the form `<tag-name>:<tag-value>`. The API will only return
     * DNS records that have a tag named `<tag-name>` whose value ends with
     * `<tag-value>`. Tag filters are case-insensitive.
     */
    endswith?: string;

    /**
     * A tag and value, of the form `<tag-name>:<tag-value>`. The API will only return
     * DNS records that have a tag named `<tag-name>` whose value is `<tag-value>`. Tag
     * filters are case-insensitive.
     */
    exact?: string;

    /**
     * Name of a tag which must be present on the DNS record. Tag filters are
     * case-insensitive.
     */
    present?: string;

    /**
     * A tag and value, of the form `<tag-name>:<tag-value>`. The API will only return
     * DNS records that have a tag named `<tag-name>` whose value starts with
     * `<tag-value>`. Tag filters are case-insensitive.
     */
    startswith?: string;
  }
}

export type DNSRecordPatchParams =
  | DNSRecordPatchParams.MpBuiT95ARecord
  | DNSRecordPatchParams.MpBuiT95AaaaRecord
  | DNSRecordPatchParams.MpBuiT95CaaRecord
  | DNSRecordPatchParams.MpBuiT95CertRecord
  | DNSRecordPatchParams.MpBuiT95CnameRecord
  | DNSRecordPatchParams.MpBuiT95DnskeyRecord
  | DNSRecordPatchParams.MpBuiT95DsRecord
  | DNSRecordPatchParams.MpBuiT95HTTPsRecord
  | DNSRecordPatchParams.MpBuiT95LocRecord
  | DNSRecordPatchParams.MpBuiT95MxRecord
  | DNSRecordPatchParams.MpBuiT95NaptrRecord
  | DNSRecordPatchParams.MpBuiT95NsRecord
  | DNSRecordPatchParams.MpBuiT95PtrRecord
  | DNSRecordPatchParams.MpBuiT95SmimeaRecord
  | DNSRecordPatchParams.MpBuiT95SrvRecord
  | DNSRecordPatchParams.MpBuiT95SshfpRecord
  | DNSRecordPatchParams.MpBuiT95SvcbRecord
  | DNSRecordPatchParams.MpBuiT95TlsaRecord
  | DNSRecordPatchParams.MpBuiT95TxtRecord
  | DNSRecordPatchParams.MpBuiT95UriRecord;

export namespace DNSRecordPatchParams {
  export interface MpBuiT95ARecord {
    /**
     * A valid IPv4 address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'A';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export interface MpBuiT95AaaaRecord {
    /**
     * A valid IPv6 address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'AAAA';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export interface MpBuiT95CaaRecord {
    /**
     * Components of a CAA record.
     */
    data: DNSRecordPatchParams.MpBuiT95CaaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CAA';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95CaaRecord {
    /**
     * Components of a CAA record.
     */
    export interface Data {
      /**
       * Flags for the CAA record.
       */
      flags?: number;

      /**
       * Name of the property controlled by this record (e.g.: issue, issuewild, iodef).
       */
      tag?: string;

      /**
       * Value of the record. This field's semantics depend on the chosen tag.
       */
      value?: string;
    }
  }

  export interface MpBuiT95CertRecord {
    /**
     * Components of a CERT record.
     */
    data: DNSRecordPatchParams.MpBuiT95CertRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CERT';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95CertRecord {
    /**
     * Components of a CERT record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Certificate.
       */
      certificate?: string;

      /**
       * Key Tag.
       */
      key_tag?: number;

      /**
       * Type.
       */
      type?: number;
    }
  }

  export interface MpBuiT95CnameRecord {
    /**
     * A valid hostname. Must not match the record's name.
     */
    content: unknown;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CNAME';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export interface MpBuiT95DnskeyRecord {
    /**
     * Components of a DNSKEY record.
     */
    data: DNSRecordPatchParams.MpBuiT95DnskeyRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'DNSKEY';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95DnskeyRecord {
    /**
     * Components of a DNSKEY record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Flags.
       */
      flags?: number;

      /**
       * Protocol.
       */
      protocol?: number;

      /**
       * Public Key.
       */
      public_key?: string;
    }
  }

  export interface MpBuiT95DsRecord {
    /**
     * Components of a DS record.
     */
    data: DNSRecordPatchParams.MpBuiT95DsRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'DS';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95DsRecord {
    /**
     * Components of a DS record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Digest.
       */
      digest?: string;

      /**
       * Digest Type.
       */
      digest_type?: number;

      /**
       * Key Tag.
       */
      key_tag?: number;
    }
  }

  export interface MpBuiT95HTTPsRecord {
    /**
     * Components of a HTTPS record.
     */
    data: DNSRecordPatchParams.MpBuiT95HTTPsRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'HTTPS';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95HTTPsRecord {
    /**
     * Components of a HTTPS record.
     */
    export interface Data {
      /**
       * priority.
       */
      priority?: number;

      /**
       * target.
       */
      target?: string;

      /**
       * value.
       */
      value?: string;
    }
  }

  export interface MpBuiT95LocRecord {
    /**
     * Components of a LOC record.
     */
    data: DNSRecordPatchParams.MpBuiT95LocRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'LOC';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95LocRecord {
    /**
     * Components of a LOC record.
     */
    export interface Data {
      /**
       * Altitude of location in meters.
       */
      altitude?: number;

      /**
       * Degrees of latitude.
       */
      lat_degrees?: number;

      /**
       * Latitude direction.
       */
      lat_direction?: 'N' | 'S';

      /**
       * Minutes of latitude.
       */
      lat_minutes?: number;

      /**
       * Seconds of latitude.
       */
      lat_seconds?: number;

      /**
       * Degrees of longitude.
       */
      long_degrees?: number;

      /**
       * Longitude direction.
       */
      long_direction?: 'E' | 'W';

      /**
       * Minutes of longitude.
       */
      long_minutes?: number;

      /**
       * Seconds of longitude.
       */
      long_seconds?: number;

      /**
       * Horizontal precision of location.
       */
      precision_horz?: number;

      /**
       * Vertical precision of location.
       */
      precision_vert?: number;

      /**
       * Size of location in meters.
       */
      size?: number;
    }
  }

  export interface MpBuiT95MxRecord {
    /**
     * A valid mail server hostname.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Required for MX, SRV and URI records; unused by other record types. Records with
     * lower priorities are preferred.
     */
    priority: number;

    /**
     * Record type.
     */
    type: 'MX';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export interface MpBuiT95NaptrRecord {
    /**
     * Components of a NAPTR record.
     */
    data: DNSRecordPatchParams.MpBuiT95NaptrRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'NAPTR';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95NaptrRecord {
    /**
     * Components of a NAPTR record.
     */
    export interface Data {
      /**
       * Flags.
       */
      flags?: string;

      /**
       * Order.
       */
      order?: number;

      /**
       * Preference.
       */
      preference?: number;

      /**
       * Regex.
       */
      regex?: string;

      /**
       * Replacement.
       */
      replacement?: string;

      /**
       * Service.
       */
      service?: string;
    }
  }

  export interface MpBuiT95NsRecord {
    /**
     * A valid name server host name.
     */
    content: unknown;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'NS';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export interface MpBuiT95PtrRecord {
    /**
     * Domain name pointing to the address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'PTR';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export interface MpBuiT95SmimeaRecord {
    /**
     * Components of a SMIMEA record.
     */
    data: DNSRecordPatchParams.MpBuiT95SmimeaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SMIMEA';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95SmimeaRecord {
    /**
     * Components of a SMIMEA record.
     */
    export interface Data {
      /**
       * Certificate.
       */
      certificate?: string;

      /**
       * Matching Type.
       */
      matching_type?: number;

      /**
       * Selector.
       */
      selector?: number;

      /**
       * Usage.
       */
      usage?: number;
    }
  }

  export interface MpBuiT95SrvRecord {
    /**
     * Components of a SRV record.
     */
    data: DNSRecordPatchParams.MpBuiT95SrvRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode. For SRV records, the first
     * label is normally a service and the second a protocol name, each starting with
     * an underscore.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SRV';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95SrvRecord {
    /**
     * Components of a SRV record.
     */
    export interface Data {
      /**
       * A valid hostname. Deprecated in favor of the regular 'name' outside the data
       * map. This data map field represents the remainder of the full 'name' after the
       * service and protocol.
       */
      name?: string;

      /**
       * The port of the service.
       */
      port?: number;

      /**
       * Required for MX, SRV and URI records; unused by other record types. Records with
       * lower priorities are preferred.
       */
      priority?: number;

      /**
       * A valid protocol, prefixed with an underscore. Deprecated in favor of the
       * regular 'name' outside the data map. This data map field normally represents the
       * second label of that 'name'.
       */
      proto?: string;

      /**
       * A service type, prefixed with an underscore. Deprecated in favor of the regular
       * 'name' outside the data map. This data map field normally represents the first
       * label of that 'name'.
       */
      service?: string;

      /**
       * A valid hostname.
       */
      target?: string;

      /**
       * The record weight.
       */
      weight?: number;
    }
  }

  export interface MpBuiT95SshfpRecord {
    /**
     * Components of a SSHFP record.
     */
    data: DNSRecordPatchParams.MpBuiT95SshfpRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SSHFP';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95SshfpRecord {
    /**
     * Components of a SSHFP record.
     */
    export interface Data {
      /**
       * algorithm.
       */
      algorithm?: number;

      /**
       * fingerprint.
       */
      fingerprint?: string;

      /**
       * type.
       */
      type?: number;
    }
  }

  export interface MpBuiT95SvcbRecord {
    /**
     * Components of a SVCB record.
     */
    data: DNSRecordPatchParams.MpBuiT95SvcbRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SVCB';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95SvcbRecord {
    /**
     * Components of a SVCB record.
     */
    export interface Data {
      /**
       * priority.
       */
      priority?: number;

      /**
       * target.
       */
      target?: string;

      /**
       * value.
       */
      value?: string;
    }
  }

  export interface MpBuiT95TlsaRecord {
    /**
     * Components of a TLSA record.
     */
    data: DNSRecordPatchParams.MpBuiT95TlsaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'TLSA';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95TlsaRecord {
    /**
     * Components of a TLSA record.
     */
    export interface Data {
      /**
       * certificate.
       */
      certificate?: string;

      /**
       * Matching Type.
       */
      matching_type?: number;

      /**
       * Selector.
       */
      selector?: number;

      /**
       * Usage.
       */
      usage?: number;
    }
  }

  export interface MpBuiT95TxtRecord {
    /**
     * Text content for the record.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'TXT';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export interface MpBuiT95UriRecord {
    /**
     * Components of a URI record.
     */
    data: DNSRecordPatchParams.MpBuiT95UriRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Required for MX, SRV and URI records; unused by other record types. Records with
     * lower priorities are preferred.
     */
    priority: number;

    /**
     * Record type.
     */
    type: 'URI';

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;
  }

  export namespace MpBuiT95UriRecord {
    /**
     * Components of a URI record.
     */
    export interface Data {
      /**
       * The record content.
       */
      content?: string;

      /**
       * The record weight.
       */
      weight?: number;
    }
  }
}

export namespace DNSRecords {
  export import DNSRecord = DNSRecordsAPI.DNSRecord;
  export import DNSRecordDeleteResponse = DNSRecordsAPI.DNSRecordDeleteResponse;
  export import DNSRecordDNSRecordsForAZoneListDNSRecordsResponse = DNSRecordsAPI.DNSRecordDNSRecordsForAZoneListDNSRecordsResponse;
  export import DNSRecordDNSRecordsForAZoneListDNSRecordsResponsesPage = DNSRecordsAPI.DNSRecordDNSRecordsForAZoneListDNSRecordsResponsesPage;
  export import DNSRecordUpdateParams = DNSRecordsAPI.DNSRecordUpdateParams;
  export import DNSRecordDNSRecordsForAZoneCreateDNSRecordParams = DNSRecordsAPI.DNSRecordDNSRecordsForAZoneCreateDNSRecordParams;
  export import DNSRecordDNSRecordsForAZoneListDNSRecordsParams = DNSRecordsAPI.DNSRecordDNSRecordsForAZoneListDNSRecordsParams;
  export import DNSRecordPatchParams = DNSRecordsAPI.DNSRecordPatchParams;
  export import Exports = ExportsAPI.Exports;
  export import ExportListResponse = ExportsAPI.ExportListResponse;
  export import Imports = ImportsAPI.Imports;
  export import ImportDNSRecordsForAZoneImportDNSRecordsResponse = ImportsAPI.ImportDNSRecordsForAZoneImportDNSRecordsResponse;
  export import ImportDNSRecordsForAZoneImportDNSRecordsParams = ImportsAPI.ImportDNSRecordsForAZoneImportDNSRecordsParams;
  export import Scans = ScansAPI.Scans;
  export import ScanDNSRecordsForAZoneScanDNSRecordsResponse = ScansAPI.ScanDNSRecordsForAZoneScanDNSRecordsResponse;
}
