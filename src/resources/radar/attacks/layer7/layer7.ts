// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as HTTPMethodsAPI from 'cloudflare/resources/radar/attacks/layer7/http-methods';
import * as HTTPVersionsAPI from 'cloudflare/resources/radar/attacks/layer7/http-versions';
import * as IndustriesAPI from 'cloudflare/resources/radar/attacks/layer7/industries';
import * as IPVersionsAPI from 'cloudflare/resources/radar/attacks/layer7/ip-versions';
import * as ManagedRulesAPI from 'cloudflare/resources/radar/attacks/layer7/managed-rules';
import * as MitigationProductsAPI from 'cloudflare/resources/radar/attacks/layer7/mitigation-products';
import * as TimeseriesAPI from 'cloudflare/resources/radar/attacks/layer7/timeseries';
import * as TimeseriesGroupsAPI from 'cloudflare/resources/radar/attacks/layer7/timeseries-groups';
import * as VerticalsAPI from 'cloudflare/resources/radar/attacks/layer7/verticals';
import * as SummariesAPI from 'cloudflare/resources/radar/attacks/layer7/summaries/summaries';
import * as TopsAPI from 'cloudflare/resources/radar/attacks/layer7/tops/tops';

export class Layer7 extends APIResource {
  summaries: SummariesAPI.Summaries = new SummariesAPI.Summaries(this._client);
  mitigationProducts: MitigationProductsAPI.MitigationProducts = new MitigationProductsAPI.MitigationProducts(
    this._client,
  );
  httpMethods: HTTPMethodsAPI.HTTPMethods = new HTTPMethodsAPI.HTTPMethods(this._client);
  httpVersions: HTTPVersionsAPI.HTTPVersions = new HTTPVersionsAPI.HTTPVersions(this._client);
  industries: IndustriesAPI.Industries = new IndustriesAPI.Industries(this._client);
  ipVersions: IPVersionsAPI.IPVersions = new IPVersionsAPI.IPVersions(this._client);
  managedRules: ManagedRulesAPI.ManagedRules = new ManagedRulesAPI.ManagedRules(this._client);
  verticals: VerticalsAPI.Verticals = new VerticalsAPI.Verticals(this._client);
  timeseries: TimeseriesAPI.Timeseries = new TimeseriesAPI.Timeseries(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
  tops: TopsAPI.Tops = new TopsAPI.Tops(this._client);
}

export namespace Layer7 {
  export import Summaries = SummariesAPI.Summaries;
  export import SummaryListResponse = SummariesAPI.SummaryListResponse;
  export import SummaryListParams = SummariesAPI.SummaryListParams;
  export import MitigationProducts = MitigationProductsAPI.MitigationProducts;
  export import MitigationProductListResponse = MitigationProductsAPI.MitigationProductListResponse;
  export import MitigationProductListTimeseriesGroupsResponse = MitigationProductsAPI.MitigationProductListTimeseriesGroupsResponse;
  export import MitigationProductListParams = MitigationProductsAPI.MitigationProductListParams;
  export import MitigationProductListTimeseriesGroupsParams = MitigationProductsAPI.MitigationProductListTimeseriesGroupsParams;
  export import HTTPMethods = HTTPMethodsAPI.HTTPMethods;
  export import HTTPMethodListTimeseriesGroupsResponse = HTTPMethodsAPI.HTTPMethodListTimeseriesGroupsResponse;
  export import HTTPMethodListTimeseriesGroupsParams = HTTPMethodsAPI.HTTPMethodListTimeseriesGroupsParams;
  export import HTTPVersions = HTTPVersionsAPI.HTTPVersions;
  export import HTTPVersionListTimeseriesGroupsResponse = HTTPVersionsAPI.HTTPVersionListTimeseriesGroupsResponse;
  export import HTTPVersionListTimeseriesGroupsParams = HTTPVersionsAPI.HTTPVersionListTimeseriesGroupsParams;
  export import Industries = IndustriesAPI.Industries;
  export import IndustryListTimeseriesGroupsResponse = IndustriesAPI.IndustryListTimeseriesGroupsResponse;
  export import IndustryListTopsResponse = IndustriesAPI.IndustryListTopsResponse;
  export import IndustryListTimeseriesGroupsParams = IndustriesAPI.IndustryListTimeseriesGroupsParams;
  export import IndustryListTopsParams = IndustriesAPI.IndustryListTopsParams;
  export import IPVersions = IPVersionsAPI.IPVersions;
  export import IPVersionListTimeseriesGroupsResponse = IPVersionsAPI.IPVersionListTimeseriesGroupsResponse;
  export import IPVersionListTimeseriesGroupsParams = IPVersionsAPI.IPVersionListTimeseriesGroupsParams;
  export import ManagedRules = ManagedRulesAPI.ManagedRules;
  export import ManagedRuleListTimeseriesGroupsResponse = ManagedRulesAPI.ManagedRuleListTimeseriesGroupsResponse;
  export import ManagedRuleListTimeseriesGroupsParams = ManagedRulesAPI.ManagedRuleListTimeseriesGroupsParams;
  export import Verticals = VerticalsAPI.Verticals;
  export import VerticalListTimeseriesGroupsResponse = VerticalsAPI.VerticalListTimeseriesGroupsResponse;
  export import VerticalListTopsResponse = VerticalsAPI.VerticalListTopsResponse;
  export import VerticalListTimeseriesGroupsParams = VerticalsAPI.VerticalListTimeseriesGroupsParams;
  export import VerticalListTopsParams = VerticalsAPI.VerticalListTopsParams;
  export import Timeseries = TimeseriesAPI.Timeseries;
  export import TimeseryListResponse = TimeseriesAPI.TimeseryListResponse;
  export import TimeseryListParams = TimeseriesAPI.TimeseryListParams;
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
  export import TimeseriesGroupListResponse = TimeseriesGroupsAPI.TimeseriesGroupListResponse;
  export import TimeseriesGroupListParams = TimeseriesGroupsAPI.TimeseriesGroupListParams;
  export import Tops = TopsAPI.Tops;
}
