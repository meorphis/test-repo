// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { type Response } from 'cloudflare/_shims/index';
import * as ScriptsAPI from 'cloudflare/resources/zones/workers/scripts/scripts';
import * as BindingsAPI from 'cloudflare/resources/zones/workers/scripts/bindings';

export class Scripts extends APIResource {
  bindings: BindingsAPI.Bindings = new BindingsAPI.Bindings(this._client);

  /**
   * Fetch raw script content for your worker. Note this is the original script
   * content, not JSON encoded.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/zones/${zoneIdentifier}/workers/script`, {
      ...options,
      __binaryResponse: true,
    });
  }

  /**
   * Delete your Worker. This call has no response body on a successful delete.
   */
  delete(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/zones/${zoneIdentifier}/workers/script`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Upload a worker, or a new version of a worker.
   */
  workerScriptDeprecatedUploadWorker(
    zoneIdentifier: string,
    body: ScriptWorkerScriptDeprecatedUploadWorkerParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptWorkerScriptDeprecatedUploadWorkerResponse> {
    return this._client.put(`/zones/${zoneIdentifier}/workers/script`, options);
  }
}

export interface ScriptWorkerScriptDeprecatedUploadWorkerResponse {
  errors?: Array<ScriptWorkerScriptDeprecatedUploadWorkerResponse.Error>;

  messages?: Array<ScriptWorkerScriptDeprecatedUploadWorkerResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ScriptWorkerScriptDeprecatedUploadWorkerResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface ScriptWorkerScriptDeprecatedUploadWorkerParams {}

export namespace Scripts {
  export import ScriptWorkerScriptDeprecatedUploadWorkerResponse = ScriptsAPI.ScriptWorkerScriptDeprecatedUploadWorkerResponse;
  export import ScriptWorkerScriptDeprecatedUploadWorkerParams = ScriptsAPI.ScriptWorkerScriptDeprecatedUploadWorkerParams;
  export import Bindings = BindingsAPI.Bindings;
  export import BindingListResponse = BindingsAPI.BindingListResponse;
}
