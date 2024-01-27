// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AttacksAPI from 'cloudflare/resources/radar/attacks/layer7/tops/attacks';
import * as AsesAPI from 'cloudflare/resources/radar/attacks/layer7/tops/ases/ases';
import * as LocationsAPI from 'cloudflare/resources/radar/attacks/layer7/tops/locations/locations';

export class Tops extends APIResource {
  ases: AsesAPI.Ases = new AsesAPI.Ases(this._client);
  attacks: AttacksAPI.Attacks = new AttacksAPI.Attacks(this._client);
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
}

export namespace Tops {
  export import Ases = AsesAPI.Ases;
  export import Attacks = AttacksAPI.Attacks;
  export import AttackListResponse = AttacksAPI.AttackListResponse;
  export import AttackListParams = AttacksAPI.AttackListParams;
  export import Locations = LocationsAPI.Locations;
}
