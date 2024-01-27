// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as DnssecAPI from 'cloudflare/resources/radar/as112/timeseries-groups/dnssec';
import * as EdnsAPI from 'cloudflare/resources/radar/as112/timeseries-groups/edns';
import * as IPVersionAPI from 'cloudflare/resources/radar/as112/timeseries-groups/ip-version';
import * as ProtocolAPI from 'cloudflare/resources/radar/as112/timeseries-groups/protocol';
import * as QueryTypeAPI from 'cloudflare/resources/radar/as112/timeseries-groups/query-type';
import * as ResponseCodesAPI from 'cloudflare/resources/radar/as112/timeseries-groups/response-codes';

export class TimeseriesGroups extends APIResource {
  dnssec: DnssecAPI.Dnssec = new DnssecAPI.Dnssec(this._client);
  edns: EdnsAPI.Edns = new EdnsAPI.Edns(this._client);
  ipVersion: IPVersionAPI.IPVersion = new IPVersionAPI.IPVersion(this._client);
  protocol: ProtocolAPI.Protocol = new ProtocolAPI.Protocol(this._client);
  queryType: QueryTypeAPI.QueryType = new QueryTypeAPI.QueryType(this._client);
  responseCodes: ResponseCodesAPI.ResponseCodes = new ResponseCodesAPI.ResponseCodes(this._client);
}

export namespace TimeseriesGroups {
  export import Dnssec = DnssecAPI.Dnssec;
  export import DnssecRetrieveResponse = DnssecAPI.DnssecRetrieveResponse;
  export import DnssecRetrieveParams = DnssecAPI.DnssecRetrieveParams;
  export import Edns = EdnsAPI.Edns;
  export import EdnRetrieveResponse = EdnsAPI.EdnRetrieveResponse;
  export import EdnRetrieveParams = EdnsAPI.EdnRetrieveParams;
  export import IPVersion = IPVersionAPI.IPVersion;
  export import IPVersionRetrieveResponse = IPVersionAPI.IPVersionRetrieveResponse;
  export import IPVersionRetrieveParams = IPVersionAPI.IPVersionRetrieveParams;
  export import Protocol = ProtocolAPI.Protocol;
  export import ProtocolRetrieveResponse = ProtocolAPI.ProtocolRetrieveResponse;
  export import ProtocolRetrieveParams = ProtocolAPI.ProtocolRetrieveParams;
  export import QueryType = QueryTypeAPI.QueryType;
  export import QueryTypeRetrieveResponse = QueryTypeAPI.QueryTypeRetrieveResponse;
  export import QueryTypeRetrieveParams = QueryTypeAPI.QueryTypeRetrieveParams;
  export import ResponseCodes = ResponseCodesAPI.ResponseCodes;
  export import ResponseCodeRetrieveResponse = ResponseCodesAPI.ResponseCodeRetrieveResponse;
  export import ResponseCodeRetrieveParams = ResponseCodesAPI.ResponseCodeRetrieveParams;
}
