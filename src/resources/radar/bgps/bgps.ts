// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as HijacksEventsAPI from 'cloudflare/resources/radar/bgps/hijacks-events';
import * as TimeseriesAPI from 'cloudflare/resources/radar/bgps/timeseries';
import * as LeaksAPI from 'cloudflare/resources/radar/bgps/leaks/leaks';
import * as RoutesAPI from 'cloudflare/resources/radar/bgps/routes/routes';
import * as TopsAPI from 'cloudflare/resources/radar/bgps/tops/tops';

export class Bgps extends APIResource {
  leaks: LeaksAPI.Leaks = new LeaksAPI.Leaks(this._client);
  timeseries: TimeseriesAPI.Timeseries = new TimeseriesAPI.Timeseries(this._client);
  tops: TopsAPI.Tops = new TopsAPI.Tops(this._client);
  hijacksEvents: HijacksEventsAPI.HijacksEvents = new HijacksEventsAPI.HijacksEvents(this._client);
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
}

export namespace Bgps {
  export import Leaks = LeaksAPI.Leaks;
  export import Timeseries = TimeseriesAPI.Timeseries;
  export import TimeseryListResponse = TimeseriesAPI.TimeseryListResponse;
  export import TimeseryListParams = TimeseriesAPI.TimeseryListParams;
  export import Tops = TopsAPI.Tops;
  export import HijacksEvents = HijacksEventsAPI.HijacksEvents;
  export import HijacksEventListResponse = HijacksEventsAPI.HijacksEventListResponse;
  export import HijacksEventListParams = HijacksEventsAPI.HijacksEventListParams;
  export import Routes = RoutesAPI.Routes;
}
