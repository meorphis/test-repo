// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as BrowserFamiliesAPI from 'cloudflare/resources/radar/http/tops/browser-families';
import * as BrowsersAPI from 'cloudflare/resources/radar/http/tops/browsers';
import * as AsesAPI from 'cloudflare/resources/radar/http/tops/ases/ases';
import * as LocationsAPI from 'cloudflare/resources/radar/http/tops/locations/locations';

export class Tops extends APIResource {
  ases: AsesAPI.Ases = new AsesAPI.Ases(this._client);
  browserFamilies: BrowserFamiliesAPI.BrowserFamilies = new BrowserFamiliesAPI.BrowserFamilies(this._client);
  browsers: BrowsersAPI.Browsers = new BrowsersAPI.Browsers(this._client);
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
}

export namespace Tops {
  export import Ases = AsesAPI.Ases;
  export import AseListResponse = AsesAPI.AseListResponse;
  export import AseListParams = AsesAPI.AseListParams;
  export import BrowserFamilies = BrowserFamiliesAPI.BrowserFamilies;
  export import BrowserFamilyListResponse = BrowserFamiliesAPI.BrowserFamilyListResponse;
  export import BrowserFamilyListParams = BrowserFamiliesAPI.BrowserFamilyListParams;
  export import Browsers = BrowsersAPI.Browsers;
  export import BrowserListResponse = BrowsersAPI.BrowserListResponse;
  export import BrowserListParams = BrowsersAPI.BrowserListParams;
  export import Locations = LocationsAPI.Locations;
  export import LocationListResponse = LocationsAPI.LocationListResponse;
  export import LocationListParams = LocationsAPI.LocationListParams;
}
