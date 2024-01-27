// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as PreviewsAPI from 'cloudflare/resources/accounts/load-balancers/previews';
import * as RegionsAPI from 'cloudflare/resources/accounts/load-balancers/regions';
import * as SearchesAPI from 'cloudflare/resources/accounts/load-balancers/searches';
import * as MonitorsAPI from 'cloudflare/resources/accounts/load-balancers/monitors/monitors';
import * as PoolsAPI from 'cloudflare/resources/accounts/load-balancers/pools/pools';

export class LoadBalancers extends APIResource {
  monitors: MonitorsAPI.Monitors = new MonitorsAPI.Monitors(this._client);
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);
  previews: PreviewsAPI.Previews = new PreviewsAPI.Previews(this._client);
  regions: RegionsAPI.Regions = new RegionsAPI.Regions(this._client);
  searches: SearchesAPI.Searches = new SearchesAPI.Searches(this._client);
}

export namespace LoadBalancers {
  export import Monitors = MonitorsAPI.Monitors;
  export import Monitor = MonitorsAPI.Monitor;
  export import MonitorDeleteResponse = MonitorsAPI.MonitorDeleteResponse;
  export import MonitorAccountLoadBalancerMonitorsListMonitorsResponse = MonitorsAPI.MonitorAccountLoadBalancerMonitorsListMonitorsResponse;
  export import MonitorUpdateParams = MonitorsAPI.MonitorUpdateParams;
  export import MonitorAccountLoadBalancerMonitorsCreateMonitorParams = MonitorsAPI.MonitorAccountLoadBalancerMonitorsCreateMonitorParams;
  export import MonitorPatchParams = MonitorsAPI.MonitorPatchParams;
  export import Pools = PoolsAPI.Pools;
  export import Pool = PoolsAPI.Pool;
  export import PoolDeleteResponse = PoolsAPI.PoolDeleteResponse;
  export import PoolAccountLoadBalancerPoolsListPoolsResponse = PoolsAPI.PoolAccountLoadBalancerPoolsListPoolsResponse;
  export import PoolAccountLoadBalancerPoolsPatchPoolsResponse = PoolsAPI.PoolAccountLoadBalancerPoolsPatchPoolsResponse;
  export import PoolUpdateParams = PoolsAPI.PoolUpdateParams;
  export import PoolAccountLoadBalancerPoolsCreatePoolParams = PoolsAPI.PoolAccountLoadBalancerPoolsCreatePoolParams;
  export import PoolAccountLoadBalancerPoolsListPoolsParams = PoolsAPI.PoolAccountLoadBalancerPoolsListPoolsParams;
  export import PoolAccountLoadBalancerPoolsPatchPoolsParams = PoolsAPI.PoolAccountLoadBalancerPoolsPatchPoolsParams;
  export import PoolPatchParams = PoolsAPI.PoolPatchParams;
  export import Previews = PreviewsAPI.Previews;
  export import PreviewRetrieveResponse = PreviewsAPI.PreviewRetrieveResponse;
  export import Regions = RegionsAPI.Regions;
  export import RegionRetrieveResponse = RegionsAPI.RegionRetrieveResponse;
  export import RegionLoadBalancerRegionsListRegionsResponse = RegionsAPI.RegionLoadBalancerRegionsListRegionsResponse;
  export import RegionLoadBalancerRegionsListRegionsParams = RegionsAPI.RegionLoadBalancerRegionsListRegionsParams;
  export import Searches = SearchesAPI.Searches;
  export import SearchListResponse = SearchesAPI.SearchListResponse;
  export import SearchListParams = SearchesAPI.SearchListParams;
}
