// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as OriginsAPI from 'cloudflare/resources/zones/logpushes/validates/origins';
import * as DestinationsAPI from 'cloudflare/resources/zones/logpushes/validates/destinations/destinations';

export class Validates extends APIResource {
  destinations: DestinationsAPI.Destinations = new DestinationsAPI.Destinations(this._client);
  origins: OriginsAPI.Origins = new OriginsAPI.Origins(this._client);
}

export namespace Validates {
  export import Destinations = DestinationsAPI.Destinations;
  export import Origins = OriginsAPI.Origins;
  export import OriginPostZonesZoneIdentifierLogpushValidateOriginResponse = OriginsAPI.OriginPostZonesZoneIdentifierLogpushValidateOriginResponse;
  export import OriginPostZonesZoneIdentifierLogpushValidateOriginParams = OriginsAPI.OriginPostZonesZoneIdentifierLogpushValidateOriginParams;
}
