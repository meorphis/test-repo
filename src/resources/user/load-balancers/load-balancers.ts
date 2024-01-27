// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as PreviewsAPI from 'cloudflare/resources/user/load-balancers/previews';
import * as MonitorsAPI from 'cloudflare/resources/user/load-balancers/monitors/monitors';
import * as PoolsAPI from 'cloudflare/resources/user/load-balancers/pools/pools';

export class LoadBalancers extends APIResource {
  monitors: MonitorsAPI.Monitors = new MonitorsAPI.Monitors(this._client);
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);
  previews: PreviewsAPI.Previews = new PreviewsAPI.Previews(this._client);
}

export namespace LoadBalancers {
  export import Monitors = MonitorsAPI.Monitors;
  export import MonitorDeleteResponse = MonitorsAPI.MonitorDeleteResponse;
  export import MonitorLoadBalancerMonitorsListMonitorsResponse = MonitorsAPI.MonitorLoadBalancerMonitorsListMonitorsResponse;
  export import MonitorUpdateParams = MonitorsAPI.MonitorUpdateParams;
  export import MonitorLoadBalancerMonitorsCreateMonitorParams = MonitorsAPI.MonitorLoadBalancerMonitorsCreateMonitorParams;
  export import MonitorPatchParams = MonitorsAPI.MonitorPatchParams;
  export import Pools = PoolsAPI.Pools;
  export import PoolDeleteResponse = PoolsAPI.PoolDeleteResponse;
  export import PoolLoadBalancerPoolsListPoolsResponse = PoolsAPI.PoolLoadBalancerPoolsListPoolsResponse;
  export import PoolLoadBalancerPoolsPatchPoolsResponse = PoolsAPI.PoolLoadBalancerPoolsPatchPoolsResponse;
  export import PoolUpdateParams = PoolsAPI.PoolUpdateParams;
  export import PoolLoadBalancerPoolsCreatePoolParams = PoolsAPI.PoolLoadBalancerPoolsCreatePoolParams;
  export import PoolLoadBalancerPoolsListPoolsParams = PoolsAPI.PoolLoadBalancerPoolsListPoolsParams;
  export import PoolLoadBalancerPoolsPatchPoolsParams = PoolsAPI.PoolLoadBalancerPoolsPatchPoolsParams;
  export import PoolPatchParams = PoolsAPI.PoolPatchParams;
  export import Previews = PreviewsAPI.Previews;
  export import PreviewRetrieveResponse = PreviewsAPI.PreviewRetrieveResponse;
}
