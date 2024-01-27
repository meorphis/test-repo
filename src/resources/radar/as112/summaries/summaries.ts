// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as DnssecsAPI from 'cloudflare/resources/radar/as112/summaries/dnssecs';
import * as EdnsAPI from 'cloudflare/resources/radar/as112/summaries/edns';
import * as IPVersionsAPI from 'cloudflare/resources/radar/as112/summaries/ip-versions';
import * as ProtocolsAPI from 'cloudflare/resources/radar/as112/summaries/protocols';
import * as QueryTypesAPI from 'cloudflare/resources/radar/as112/summaries/query-types';
import * as ResponseCodesAPI from 'cloudflare/resources/radar/as112/summaries/response-codes';

export class Summaries extends APIResource {
  dnssecs: DnssecsAPI.Dnssecs = new DnssecsAPI.Dnssecs(this._client);
  edns: EdnsAPI.Edns = new EdnsAPI.Edns(this._client);
  ipVersions: IPVersionsAPI.IPVersions = new IPVersionsAPI.IPVersions(this._client);
  protocols: ProtocolsAPI.Protocols = new ProtocolsAPI.Protocols(this._client);
  queryTypes: QueryTypesAPI.QueryTypes = new QueryTypesAPI.QueryTypes(this._client);
  responseCodes: ResponseCodesAPI.ResponseCodes = new ResponseCodesAPI.ResponseCodes(this._client);
}

export namespace Summaries {
  export import Dnssecs = DnssecsAPI.Dnssecs;
  export import DnssecListResponse = DnssecsAPI.DnssecListResponse;
  export import DnssecListParams = DnssecsAPI.DnssecListParams;
  export import Edns = EdnsAPI.Edns;
  export import EdnListResponse = EdnsAPI.EdnListResponse;
  export import EdnListParams = EdnsAPI.EdnListParams;
  export import IPVersions = IPVersionsAPI.IPVersions;
  export import IPVersionListResponse = IPVersionsAPI.IPVersionListResponse;
  export import IPVersionListParams = IPVersionsAPI.IPVersionListParams;
  export import Protocols = ProtocolsAPI.Protocols;
  export import ProtocolListResponse = ProtocolsAPI.ProtocolListResponse;
  export import ProtocolListParams = ProtocolsAPI.ProtocolListParams;
  export import QueryTypes = QueryTypesAPI.QueryTypes;
  export import QueryTypeListResponse = QueryTypesAPI.QueryTypeListResponse;
  export import QueryTypeListParams = QueryTypesAPI.QueryTypeListParams;
  export import ResponseCodes = ResponseCodesAPI.ResponseCodes;
  export import ResponseCodeListResponse = ResponseCodesAPI.ResponseCodeListResponse;
  export import ResponseCodeListParams = ResponseCodesAPI.ResponseCodeListParams;
}
