// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SubmitsAPI from 'cloudflare/resources/accounts/brand-protections/submits';

export class Submits extends APIResource {
  /**
   * Submit suspicious URL for scanning
   */
  phishingURLScannerSubmitSuspiciousURLForScanning(
    accountIdentifier: string,
    body: SubmitPhishingURLScannerSubmitSuspiciousURLForScanningParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubmitPhishingURLScannerSubmitSuspiciousURLForScanningResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/brand-protection/submit`, { body, ...options });
  }
}

export interface SubmitPhishingURLScannerSubmitSuspiciousURLForScanningResponse {
  errors?: Array<SubmitPhishingURLScannerSubmitSuspiciousURLForScanningResponse.Error>;

  messages?: Array<SubmitPhishingURLScannerSubmitSuspiciousURLForScanningResponse.Message>;

  result?: SubmitPhishingURLScannerSubmitSuspiciousURLForScanningResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SubmitPhishingURLScannerSubmitSuspiciousURLForScanningResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * URLs that were excluded from scanning because their domain is in our no-scan
     * list.
     */
    excluded_urls?: Array<Result.ExcludedURL>;

    /**
     * URLs that were skipped because the same URL is currently being scanned
     */
    skipped_urls?: Array<Result.SkippedURL>;

    /**
     * URLs that were successfully submitted for scanning.
     */
    submitted_urls?: Array<Result.SubmittedURL>;
  }

  export namespace Result {
    export interface ExcludedURL {
      /**
       * URL that was excluded.
       */
      url?: string;
    }

    export interface SkippedURL {
      /**
       * URL that was skipped.
       */
      url?: string;

      /**
       * ID of the submission of that URL that is currently scanning.
       */
      url_id?: number;
    }

    export interface SubmittedURL {
      /**
       * URL that was submitted.
       */
      url?: string;

      /**
       * ID assigned to this URL submission. Used to retrieve scanning results.
       */
      url_id?: number;
    }
  }
}

export interface SubmitPhishingURLScannerSubmitSuspiciousURLForScanningParams {
  /**
   * URL(s) to filter submissions results by
   */
  url?: string;
}

export namespace Submits {
  export import SubmitPhishingURLScannerSubmitSuspiciousURLForScanningResponse = SubmitsAPI.SubmitPhishingURLScannerSubmitSuspiciousURLForScanningResponse;
  export import SubmitPhishingURLScannerSubmitSuspiciousURLForScanningParams = SubmitsAPI.SubmitPhishingURLScannerSubmitSuspiciousURLForScanningParams;
}
