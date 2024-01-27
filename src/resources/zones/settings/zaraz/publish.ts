// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PublishAPI from 'cloudflare/resources/zones/settings/zaraz/publish';

export class Publish extends APIResource {
  /**
   * Publish current Zaraz preview configuration for a zone.
   */
  create(
    zoneIdentifier: string,
    body: PublishCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PublishCreateResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/settings/zaraz/v2/publish`, { body, ...options });
  }
}

export interface PublishCreateResponse {
  errors?: Array<PublishCreateResponse.Error>;

  messages?: Array<PublishCreateResponse.Message>;

  result?: string;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace PublishCreateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export type PublishCreateParams = string;

export namespace Publish {
  export import PublishCreateResponse = PublishAPI.PublishCreateResponse;
  export import PublishCreateParams = PublishAPI.PublishCreateParams;
}
