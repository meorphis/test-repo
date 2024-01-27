// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import { type Response } from 'cloudflare/_shims/index';
import * as ScreenshotAPI from 'cloudflare/resources/accounts/urlscanner/screenshot';

export class Screenshot extends APIResource {
  /**
   * Get scan's screenshot by resolution (desktop/mobile/tablet).
   */
  retrieve(
    accountId: string,
    scanId: string,
    query?: ScreenshotRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response>;
  retrieve(accountId: string, scanId: string, options?: Core.RequestOptions): Core.APIPromise<Response>;
  retrieve(
    accountId: string,
    scanId: string,
    query: ScreenshotRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    if (isRequestOptions(query)) {
      return this.retrieve(accountId, scanId, {}, query);
    }
    return this._client.get(`/accounts/${accountId}/urlscanner/scan/${scanId}/screenshot`, {
      query,
      ...options,
      __binaryResponse: true,
    });
  }
}

export interface ScreenshotRetrieveParams {
  /**
   * Target device type
   */
  resolution?: 'desktop' | 'mobile' | 'tablet';
}

export namespace Screenshot {
  export import ScreenshotRetrieveParams = ScreenshotAPI.ScreenshotRetrieveParams;
}
