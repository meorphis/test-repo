// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ByBotClassAPI from 'cloudflare/resources/radar/http/timeseries-groups/by-bot-class';
import * as ByBrowserAPI from 'cloudflare/resources/radar/http/timeseries-groups/by-browser';
import * as ByBrowserFamilyAPI from 'cloudflare/resources/radar/http/timeseries-groups/by-browser-family';
import * as ByDeviceTypeAPI from 'cloudflare/resources/radar/http/timeseries-groups/by-device-type';
import * as ByHTTPProtocolAPI from 'cloudflare/resources/radar/http/timeseries-groups/by-http-protocol';
import * as ByHTTPVersionAPI from 'cloudflare/resources/radar/http/timeseries-groups/by-http-version';
import * as ByIPVersionAPI from 'cloudflare/resources/radar/http/timeseries-groups/by-ip-version';
import * as ByOsAPI from 'cloudflare/resources/radar/http/timeseries-groups/by-os';
import * as ByTlsVersionAPI from 'cloudflare/resources/radar/http/timeseries-groups/by-tls-version';

export class TimeseriesGroups extends APIResource {
  byBotClass: ByBotClassAPI.ByBotClass = new ByBotClassAPI.ByBotClass(this._client);
  byBrowser: ByBrowserAPI.ByBrowser = new ByBrowserAPI.ByBrowser(this._client);
  byBrowserFamily: ByBrowserFamilyAPI.ByBrowserFamily = new ByBrowserFamilyAPI.ByBrowserFamily(this._client);
  byDeviceType: ByDeviceTypeAPI.ByDeviceType = new ByDeviceTypeAPI.ByDeviceType(this._client);
  byHTTPProtocol: ByHTTPProtocolAPI.ByHTTPProtocol = new ByHTTPProtocolAPI.ByHTTPProtocol(this._client);
  byHTTPVersion: ByHTTPVersionAPI.ByHTTPVersion = new ByHTTPVersionAPI.ByHTTPVersion(this._client);
  byIPVersion: ByIPVersionAPI.ByIPVersion = new ByIPVersionAPI.ByIPVersion(this._client);
  byOs: ByOsAPI.ByOs = new ByOsAPI.ByOs(this._client);
  byTlsVersion: ByTlsVersionAPI.ByTlsVersion = new ByTlsVersionAPI.ByTlsVersion(this._client);
}

export namespace TimeseriesGroups {
  export import ByBotClass = ByBotClassAPI.ByBotClass;
  export import ByBotClassListResponse = ByBotClassAPI.ByBotClassListResponse;
  export import ByBotClassListParams = ByBotClassAPI.ByBotClassListParams;
  export import ByBrowser = ByBrowserAPI.ByBrowser;
  export import ByBrowserListResponse = ByBrowserAPI.ByBrowserListResponse;
  export import ByBrowserListParams = ByBrowserAPI.ByBrowserListParams;
  export import ByBrowserFamily = ByBrowserFamilyAPI.ByBrowserFamily;
  export import ByBrowserFamilyListResponse = ByBrowserFamilyAPI.ByBrowserFamilyListResponse;
  export import ByBrowserFamilyListParams = ByBrowserFamilyAPI.ByBrowserFamilyListParams;
  export import ByDeviceType = ByDeviceTypeAPI.ByDeviceType;
  export import ByDeviceTypeListResponse = ByDeviceTypeAPI.ByDeviceTypeListResponse;
  export import ByDeviceTypeListParams = ByDeviceTypeAPI.ByDeviceTypeListParams;
  export import ByHTTPProtocol = ByHTTPProtocolAPI.ByHTTPProtocol;
  export import ByHTTPProtocolListResponse = ByHTTPProtocolAPI.ByHTTPProtocolListResponse;
  export import ByHTTPProtocolListParams = ByHTTPProtocolAPI.ByHTTPProtocolListParams;
  export import ByHTTPVersion = ByHTTPVersionAPI.ByHTTPVersion;
  export import ByHTTPVersionListResponse = ByHTTPVersionAPI.ByHTTPVersionListResponse;
  export import ByHTTPVersionListParams = ByHTTPVersionAPI.ByHTTPVersionListParams;
  export import ByIPVersion = ByIPVersionAPI.ByIPVersion;
  export import ByIPVersionListResponse = ByIPVersionAPI.ByIPVersionListResponse;
  export import ByIPVersionListParams = ByIPVersionAPI.ByIPVersionListParams;
  export import ByOs = ByOsAPI.ByOs;
  export import ByOListResponse = ByOsAPI.ByOListResponse;
  export import ByOListParams = ByOsAPI.ByOListParams;
  export import ByTlsVersion = ByTlsVersionAPI.ByTlsVersion;
  export import ByTlsVersionListResponse = ByTlsVersionAPI.ByTlsVersionListResponse;
  export import ByTlsVersionListParams = ByTlsVersionAPI.ByTlsVersionListParams;
}
