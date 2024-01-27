// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as IPsAPI from 'cloudflare/resources/radar/entities/ips';
import * as LocationsAPI from 'cloudflare/resources/radar/entities/locations';
import * as ASNsAPI from 'cloudflare/resources/radar/entities/asns/asns';

export class Entities extends APIResource {
  asns: ASNsAPI.ASNs = new ASNsAPI.ASNs(this._client);
  ips: IPsAPI.IPs = new IPsAPI.IPs(this._client);
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
}

export namespace Entities {
  export import ASNs = ASNsAPI.ASNs;
  export import ASNRetrieveResponse = ASNsAPI.ASNRetrieveResponse;
  export import ASNListResponse = ASNsAPI.ASNListResponse;
  export import ASNRetrieveParams = ASNsAPI.ASNRetrieveParams;
  export import ASNListParams = ASNsAPI.ASNListParams;
  export import IPs = IPsAPI.IPs;
  export import IPListResponse = IPsAPI.IPListResponse;
  export import IPListParams = IPsAPI.IPListParams;
  export import Locations = LocationsAPI.Locations;
  export import LocationRetrieveResponse = LocationsAPI.LocationRetrieveResponse;
  export import LocationListResponse = LocationsAPI.LocationListResponse;
  export import LocationRetrieveParams = LocationsAPI.LocationRetrieveParams;
  export import LocationListParams = LocationsAPI.LocationListParams;
}
