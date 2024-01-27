// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AttacksAPI from 'cloudflare/resources/radar/attacks/layer3/attacks';
import * as IndustriesAPI from 'cloudflare/resources/radar/attacks/layer3/industries';
import * as TimeseriesAPI from 'cloudflare/resources/radar/attacks/layer3/timeseries';
import * as VerticalsAPI from 'cloudflare/resources/radar/attacks/layer3/verticals';
import * as LocationsAPI from 'cloudflare/resources/radar/attacks/layer3/locations/locations';
import * as SummariesAPI from 'cloudflare/resources/radar/attacks/layer3/summaries/summaries';
import * as TimeseriesGroupsAPI from 'cloudflare/resources/radar/attacks/layer3/timeseries-groups/timeseries-groups';

export class Layer3 extends APIResource {
  attacks: AttacksAPI.Attacks = new AttacksAPI.Attacks(this._client);
  industries: IndustriesAPI.Industries = new IndustriesAPI.Industries(this._client);
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
  verticals: VerticalsAPI.Verticals = new VerticalsAPI.Verticals(this._client);
  summaries: SummariesAPI.Summaries = new SummariesAPI.Summaries(this._client);
  timeseries: TimeseriesAPI.Timeseries = new TimeseriesAPI.Timeseries(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
}

export namespace Layer3 {
  export import Attacks = AttacksAPI.Attacks;
  export import AttackListResponse = AttacksAPI.AttackListResponse;
  export import AttackListParams = AttacksAPI.AttackListParams;
  export import Industries = IndustriesAPI.Industries;
  export import IndustryListResponse = IndustriesAPI.IndustryListResponse;
  export import IndustryListParams = IndustriesAPI.IndustryListParams;
  export import Locations = LocationsAPI.Locations;
  export import Verticals = VerticalsAPI.Verticals;
  export import VerticalListResponse = VerticalsAPI.VerticalListResponse;
  export import VerticalListParams = VerticalsAPI.VerticalListParams;
  export import Summaries = SummariesAPI.Summaries;
  export import SummaryListResponse = SummariesAPI.SummaryListResponse;
  export import SummaryListParams = SummariesAPI.SummaryListParams;
  export import Timeseries = TimeseriesAPI.Timeseries;
  export import TimeseryListResponse = TimeseriesAPI.TimeseryListResponse;
  export import TimeseryListParams = TimeseriesAPI.TimeseryListParams;
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
  export import TimeseriesGroupListResponse = TimeseriesGroupsAPI.TimeseriesGroupListResponse;
  export import TimeseriesGroupListParams = TimeseriesGroupsAPI.TimeseriesGroupListParams;
}
