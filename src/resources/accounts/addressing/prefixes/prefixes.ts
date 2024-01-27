// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as BindingsAPI from 'cloudflare/resources/accounts/addressing/prefixes/bindings';

export class Prefixes extends APIResource {
  bindings: BindingsAPI.Bindings = new BindingsAPI.Bindings(this._client);
}

export namespace Prefixes {
  export import Bindings = BindingsAPI.Bindings;
  export import BindingCreateResponse = BindingsAPI.BindingCreateResponse;
  export import BindingRetrieveResponse = BindingsAPI.BindingRetrieveResponse;
  export import BindingListResponse = BindingsAPI.BindingListResponse;
  export import BindingDeleteResponse = BindingsAPI.BindingDeleteResponse;
  export import BindingCreateParams = BindingsAPI.BindingCreateParams;
}
