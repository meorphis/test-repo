// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as LocationsAPI from 'cloudflare/resources/radar/as112/tops/locations/locations';

export class Tops extends APIResource {
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
}

export namespace Tops {
  export import Locations = LocationsAPI.Locations;
  export import LocationListResponse = LocationsAPI.LocationListResponse;
  export import LocationListParams = LocationsAPI.LocationListParams;
}
