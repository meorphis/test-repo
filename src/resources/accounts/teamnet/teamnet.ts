// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as VirtualNetworksAPI from 'cloudflare/resources/accounts/teamnet/virtual-networks';
import * as RoutesAPI from 'cloudflare/resources/accounts/teamnet/routes/routes';

export class Teamnet extends APIResource {
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
  virtualNetworks: VirtualNetworksAPI.VirtualNetworks = new VirtualNetworksAPI.VirtualNetworks(this._client);
}

export namespace Teamnet {
  export import Routes = RoutesAPI.Routes;
  export import RouteCreateResponse = RoutesAPI.RouteCreateResponse;
  export import RouteUpdateResponse = RoutesAPI.RouteUpdateResponse;
  export import RouteDeleteResponse = RoutesAPI.RouteDeleteResponse;
  export import RouteTunnelRouteListTunnelRoutesResponse = RoutesAPI.RouteTunnelRouteListTunnelRoutesResponse;
  export import RouteTunnelRouteListTunnelRoutesResponsesPage = RoutesAPI.RouteTunnelRouteListTunnelRoutesResponsesPage;
  export import RouteCreateParams = RoutesAPI.RouteCreateParams;
  export import RouteUpdateParams = RoutesAPI.RouteUpdateParams;
  export import RouteTunnelRouteListTunnelRoutesParams = RoutesAPI.RouteTunnelRouteListTunnelRoutesParams;
  export import VirtualNetworks = VirtualNetworksAPI.VirtualNetworks;
  export import VirtualNetworkUpdateResponse = VirtualNetworksAPI.VirtualNetworkUpdateResponse;
  export import VirtualNetworkDeleteResponse = VirtualNetworksAPI.VirtualNetworkDeleteResponse;
  export import VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkResponse = VirtualNetworksAPI.VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkResponse;
  export import VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse = VirtualNetworksAPI.VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse;
  export import VirtualNetworkUpdateParams = VirtualNetworksAPI.VirtualNetworkUpdateParams;
  export import VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkParams = VirtualNetworksAPI.VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkParams;
  export import VirtualNetworkTunnelVirtualNetworkListVirtualNetworksParams = VirtualNetworksAPI.VirtualNetworkTunnelVirtualNetworkListVirtualNetworksParams;
}
