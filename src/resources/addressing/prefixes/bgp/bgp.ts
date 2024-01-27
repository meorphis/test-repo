// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as PrefixesAPI from 'cloudflare/resources/addressing/prefixes/bgp/prefixes';

export class Bgp extends APIResource {
  prefixes: PrefixesAPI.Prefixes = new PrefixesAPI.Prefixes(this._client);
}

export namespace Bgp {
  export import Prefixes = PrefixesAPI.Prefixes;
  export import PrefixRetrieveResponse = PrefixesAPI.PrefixRetrieveResponse;
  export import PrefixUpdateResponse = PrefixesAPI.PrefixUpdateResponse;
  export import PrefixListResponse = PrefixesAPI.PrefixListResponse;
  export import PrefixUpdateParams = PrefixesAPI.PrefixUpdateParams;
}
