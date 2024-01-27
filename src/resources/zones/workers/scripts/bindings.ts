// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BindingsAPI from 'cloudflare/resources/zones/workers/scripts/bindings';

export class Bindings extends APIResource {
  /**
   * List the bindings for a Workers script.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<BindingListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/workers/script/bindings`, options);
  }
}

export interface BindingListResponse {
  errors?: Array<BindingListResponse.Error>;

  messages?: Array<BindingListResponse.Message>;

  result?: Array<
    BindingListResponse.AvYbsl2uKvNamespaceBinding | BindingListResponse.AvYbsl2uWasmModuleBinding
  >;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace BindingListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface AvYbsl2uKvNamespaceBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Namespace identifier tag.
     */
    namespace_id: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'kv_namespace';
  }

  export interface AvYbsl2uWasmModuleBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'wasm_module';
  }
}

export namespace Bindings {
  export import BindingListResponse = BindingsAPI.BindingListResponse;
}
