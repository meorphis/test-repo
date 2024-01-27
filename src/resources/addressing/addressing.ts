// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as PrefixesAPI from 'cloudflare/resources/addressing/prefixes/prefixes';

export class Addressing extends APIResource {
  prefixes: PrefixesAPI.Prefixes = new PrefixesAPI.Prefixes(this._client);
}

export namespace Addressing {
  export import Prefixes = PrefixesAPI.Prefixes;
}
