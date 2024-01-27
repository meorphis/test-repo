// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as DomainsAPI from 'cloudflare/resources/radar/ranking/domains';
import * as TimeseriesGroupsAPI from 'cloudflare/resources/radar/ranking/timeseries-groups';
import * as TopsAPI from 'cloudflare/resources/radar/ranking/tops';

export class Ranking extends APIResource {
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
  tops: TopsAPI.Tops = new TopsAPI.Tops(this._client);
}

export namespace Ranking {
  export import Domains = DomainsAPI.Domains;
  export import DomainRetrieveResponse = DomainsAPI.DomainRetrieveResponse;
  export import DomainRetrieveParams = DomainsAPI.DomainRetrieveParams;
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
  export import TimeseriesGroupListResponse = TimeseriesGroupsAPI.TimeseriesGroupListResponse;
  export import TimeseriesGroupListParams = TimeseriesGroupsAPI.TimeseriesGroupListParams;
  export import Tops = TopsAPI.Tops;
  export import TopListResponse = TopsAPI.TopListResponse;
  export import TopListParams = TopsAPI.TopListParams;
}
