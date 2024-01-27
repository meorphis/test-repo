// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as BotClassesAPI from 'cloudflare/resources/radar/http/summaries/bot-classes';
import * as DeviceTypesAPI from 'cloudflare/resources/radar/http/summaries/device-types';
import * as HTTPProtocolsAPI from 'cloudflare/resources/radar/http/summaries/http-protocols';
import * as HTTPVersionsAPI from 'cloudflare/resources/radar/http/summaries/http-versions';
import * as IPVersionsAPI from 'cloudflare/resources/radar/http/summaries/ip-versions';
import * as OsAPI from 'cloudflare/resources/radar/http/summaries/os';
import * as TlsVersionsAPI from 'cloudflare/resources/radar/http/summaries/tls-versions';

export class Summaries extends APIResource {
  botClasses: BotClassesAPI.BotClasses = new BotClassesAPI.BotClasses(this._client);
  deviceTypes: DeviceTypesAPI.DeviceTypes = new DeviceTypesAPI.DeviceTypes(this._client);
  httpProtocols: HTTPProtocolsAPI.HTTPProtocols = new HTTPProtocolsAPI.HTTPProtocols(this._client);
  httpVersions: HTTPVersionsAPI.HTTPVersions = new HTTPVersionsAPI.HTTPVersions(this._client);
  ipVersions: IPVersionsAPI.IPVersions = new IPVersionsAPI.IPVersions(this._client);
  os: OsAPI.Os = new OsAPI.Os(this._client);
  tlsVersions: TlsVersionsAPI.TlsVersions = new TlsVersionsAPI.TlsVersions(this._client);
}

export namespace Summaries {
  export import BotClasses = BotClassesAPI.BotClasses;
  export import BotClassListResponse = BotClassesAPI.BotClassListResponse;
  export import BotClassListParams = BotClassesAPI.BotClassListParams;
  export import DeviceTypes = DeviceTypesAPI.DeviceTypes;
  export import DeviceTypeListResponse = DeviceTypesAPI.DeviceTypeListResponse;
  export import DeviceTypeListParams = DeviceTypesAPI.DeviceTypeListParams;
  export import HTTPProtocols = HTTPProtocolsAPI.HTTPProtocols;
  export import HTTPProtocolListResponse = HTTPProtocolsAPI.HTTPProtocolListResponse;
  export import HTTPProtocolListParams = HTTPProtocolsAPI.HTTPProtocolListParams;
  export import HTTPVersions = HTTPVersionsAPI.HTTPVersions;
  export import HTTPVersionListResponse = HTTPVersionsAPI.HTTPVersionListResponse;
  export import HTTPVersionListParams = HTTPVersionsAPI.HTTPVersionListParams;
  export import IPVersions = IPVersionsAPI.IPVersions;
  export import IPVersionListResponse = IPVersionsAPI.IPVersionListResponse;
  export import IPVersionListParams = IPVersionsAPI.IPVersionListParams;
  export import Os = OsAPI.Os;
  export import OListResponse = OsAPI.OListResponse;
  export import OListParams = OsAPI.OListParams;
  export import TlsVersions = TlsVersionsAPI.TlsVersions;
  export import TlsVersionListResponse = TlsVersionsAPI.TlsVersionListResponse;
  export import TlsVersionListParams = TlsVersionsAPI.TlsVersionListParams;
}
