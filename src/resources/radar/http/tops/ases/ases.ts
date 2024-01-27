// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as AsesAPI from 'cloudflare/resources/radar/http/tops/ases/ases';
import * as BotClassesAPI from 'cloudflare/resources/radar/http/tops/ases/bot-classes';
import * as DeviceTypesAPI from 'cloudflare/resources/radar/http/tops/ases/device-types';
import * as HTTPProtocolsAPI from 'cloudflare/resources/radar/http/tops/ases/http-protocols';
import * as HTTPVersionsAPI from 'cloudflare/resources/radar/http/tops/ases/http-versions';
import * as IPVersionsAPI from 'cloudflare/resources/radar/http/tops/ases/ip-versions';
import * as OsAPI from 'cloudflare/resources/radar/http/tops/ases/os';
import * as TlsVersionsAPI from 'cloudflare/resources/radar/http/tops/ases/tls-versions';

export class Ases extends APIResource {
  botClasses: BotClassesAPI.BotClasses = new BotClassesAPI.BotClasses(this._client);
  deviceTypes: DeviceTypesAPI.DeviceTypes = new DeviceTypesAPI.DeviceTypes(this._client);
  httpProtocols: HTTPProtocolsAPI.HTTPProtocols = new HTTPProtocolsAPI.HTTPProtocols(this._client);
  httpVersions: HTTPVersionsAPI.HTTPVersions = new HTTPVersionsAPI.HTTPVersions(this._client);
  ipVersions: IPVersionsAPI.IPVersions = new IPVersionsAPI.IPVersions(this._client);
  os: OsAPI.Os = new OsAPI.Os(this._client);
  tlsVersions: TlsVersionsAPI.TlsVersions = new TlsVersionsAPI.TlsVersions(this._client);

  /**
   * Get the top autonomous systems by HTTP traffic. Values are a percentage out of
   * the total traffic.
   */
  list(query?: AseListParams, options?: Core.RequestOptions): Core.APIPromise<AseListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AseListResponse>;
  list(
    query: AseListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AseListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/radar/http/top/ases', { query, ...options });
  }
}

export interface AseListResponse {
  result: AseListResponse.Result;

  success: boolean;
}

export namespace AseListResponse {
  export interface Result {
    meta: Result.Meta;

    top_0: Array<Result.Top0>;
  }

  export namespace Result {
    export interface Meta {
      dateRange: Array<Meta.DateRange>;

      lastUpdated: string;

      confidenceInfo?: Meta.ConfidenceInfo;
    }

    export namespace Meta {
      export interface DateRange {
        /**
         * Adjusted end of date range.
         */
        endTime: string;

        /**
         * Adjusted start of date range.
         */
        startTime: string;
      }

      export interface ConfidenceInfo {
        annotations?: Array<ConfidenceInfo.Annotation>;

        level?: number;
      }

      export namespace ConfidenceInfo {
        export interface Annotation {
          dataSource: string;

          description: string;

          eventType: string;

          isInstantaneous: unknown;

          endTime?: string;

          linkedUrl?: string;

          startTime?: string;
        }
      }
    }

    export interface Top0 {
      clientASN: number;

      clientASName: string;

      value: string;
    }
  }
}

export interface AseListParams {
  /**
   * Array of comma separated list of ASNs, start with `-` to exclude from results.
   * For example, `-174, 3356` excludes results from AS174, but includes results from
   * AS3356.
   */
  asn?: Array<string>;

  /**
   * Filter for bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * For example, use `7d` and `7dControl` to compare this week with the previous
   * week. Use this parameter or set specific start and end dates (`dateStart` and
   * `dateEnd` parameters).
   */
  dateRange?: Array<
    | '1d'
    | '2d'
    | '7d'
    | '14d'
    | '28d'
    | '12w'
    | '24w'
    | '52w'
    | '1dControl'
    | '2dControl'
    | '7dControl'
    | '14dControl'
    | '28dControl'
    | '12wControl'
    | '24wControl'
  >;

  /**
   * Array of datetimes to filter the start of a series.
   */
  dateStart?: Array<string>;

  /**
   * Filter for device type.
   */
  deviceType?: Array<'DESKTOP' | 'MOBILE' | 'OTHER'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for http protocol.
   */
  httpProtocol?: Array<'HTTP' | 'HTTPS'>;

  /**
   * Filter for http version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Array of comma separated list of locations (alpha-2 country codes). Start with
   * `-` to exclude from results. For example, `-US,PT` excludes results from the US,
   * but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Filter for os name.
   */
  os?: Array<'WINDOWS' | 'MACOSX' | 'IOS' | 'ANDROID' | 'CHROMEOS' | 'LINUX' | 'SMART_TV'>;

  /**
   * Filter for tls version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3' | 'TLSvQUIC'>;
}

export namespace Ases {
  export import AseListResponse = AsesAPI.AseListResponse;
  export import AseListParams = AsesAPI.AseListParams;
  export import BotClasses = BotClassesAPI.BotClasses;
  export import BotClassRetrieveResponse = BotClassesAPI.BotClassRetrieveResponse;
  export import BotClassRetrieveParams = BotClassesAPI.BotClassRetrieveParams;
  export import DeviceTypes = DeviceTypesAPI.DeviceTypes;
  export import DeviceTypeRetrieveResponse = DeviceTypesAPI.DeviceTypeRetrieveResponse;
  export import DeviceTypeRetrieveParams = DeviceTypesAPI.DeviceTypeRetrieveParams;
  export import HTTPProtocols = HTTPProtocolsAPI.HTTPProtocols;
  export import HTTPProtocolRetrieveResponse = HTTPProtocolsAPI.HTTPProtocolRetrieveResponse;
  export import HTTPProtocolRetrieveParams = HTTPProtocolsAPI.HTTPProtocolRetrieveParams;
  export import HTTPVersions = HTTPVersionsAPI.HTTPVersions;
  export import HTTPVersionRetrieveResponse = HTTPVersionsAPI.HTTPVersionRetrieveResponse;
  export import HTTPVersionRetrieveParams = HTTPVersionsAPI.HTTPVersionRetrieveParams;
  export import IPVersions = IPVersionsAPI.IPVersions;
  export import IPVersionRetrieveResponse = IPVersionsAPI.IPVersionRetrieveResponse;
  export import IPVersionRetrieveParams = IPVersionsAPI.IPVersionRetrieveParams;
  export import Os = OsAPI.Os;
  export import ORetrieveResponse = OsAPI.ORetrieveResponse;
  export import ORetrieveParams = OsAPI.ORetrieveParams;
  export import TlsVersions = TlsVersionsAPI.TlsVersions;
  export import TlsVersionRetrieveResponse = TlsVersionsAPI.TlsVersionRetrieveResponse;
  export import TlsVersionRetrieveParams = TlsVersionsAPI.TlsVersionRetrieveParams;
}
