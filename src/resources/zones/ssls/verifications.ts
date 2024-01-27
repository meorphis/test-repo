// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as VerificationsAPI from 'cloudflare/resources/zones/ssls/verifications';

export class Verifications extends APIResource {
  /**
   * Edit SSL validation method for a certificate pack. A PATCH request will request
   * an immediate validation check on any certificate, and return the updated status.
   * If a validation method is provided, the validation will be immediately attempted
   * using that method.
   */
  update(
    zoneIdentifier: string,
    certPackUuid: string,
    body: VerificationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VerificationUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/ssl/verification/${certPackUuid}`, {
      body,
      ...options,
    });
  }

  /**
   * Get SSL Verification Info for a Zone.
   */
  sslVerificationSslVerificationDetails(
    zoneIdentifier: string,
    query?: VerificationSslVerificationSslVerificationDetailsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VerificationSslVerificationSslVerificationDetailsResponse>;
  sslVerificationSslVerificationDetails(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VerificationSslVerificationSslVerificationDetailsResponse>;
  sslVerificationSslVerificationDetails(
    zoneIdentifier: string,
    query: VerificationSslVerificationSslVerificationDetailsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<VerificationSslVerificationSslVerificationDetailsResponse> {
    if (isRequestOptions(query)) {
      return this.sslVerificationSslVerificationDetails(zoneIdentifier, {}, query);
    }
    return this._client.get(`/zones/${zoneIdentifier}/ssl/verification`, { query, ...options });
  }
}

export interface VerificationUpdateResponse {
  errors?: Array<VerificationUpdateResponse.Error>;

  messages?: Array<VerificationUpdateResponse.Message>;

  result?: VerificationUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace VerificationUpdateResponse {
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
     * Result status.
     */
    status?: string;

    /**
     * Desired validation method.
     */
    validation_method?: 'http' | 'cname' | 'txt' | 'email';
  }
}

export interface VerificationSslVerificationSslVerificationDetailsResponse {
  result?: Array<VerificationSslVerificationSslVerificationDetailsResponse.Result>;
}

export namespace VerificationSslVerificationSslVerificationDetailsResponse {
  export interface Result {
    /**
     * Current status of certificate.
     */
    certificate_status:
      | 'initializing'
      | 'authorizing'
      | 'active'
      | 'expired'
      | 'issuing'
      | 'timing_out'
      | 'pending_deployment';

    /**
     * Certificate Authority is manually reviewing the order.
     */
    brand_check?: boolean;

    /**
     * Certificate Pack UUID.
     */
    cert_pack_uuid?: string;

    /**
     * Certificate's signature algorithm.
     */
    signature?: 'ECDSAWithSHA256' | 'SHA1WithRSA' | 'SHA256WithRSA';

    /**
     * Validation method in use for a certificate pack order.
     */
    validation_method?: 'http' | 'cname' | 'txt';

    /**
     * Certificate's required verification information.
     */
    verification_info?: Result.VerificationInfo;

    /**
     * Status of the required verification information, omitted if verification status
     * is unknown.
     */
    verification_status?: boolean;

    /**
     * Method of verification.
     */
    verification_type?: 'cname' | 'meta tag';
  }

  export namespace Result {
    /**
     * Certificate's required verification information.
     */
    export interface VerificationInfo {
      /**
       * Name of CNAME record.
       */
      record_name?: 'record_name' | 'http_url' | 'cname' | 'txt_name';

      /**
       * Target of CNAME record.
       */
      record_target?: 'record_value' | 'http_body' | 'cname_target' | 'txt_value';
    }
  }
}

export interface VerificationUpdateParams {
  /**
   * Desired validation method.
   */
  validation_method: 'http' | 'cname' | 'txt' | 'email';
}

export interface VerificationSslVerificationSslVerificationDetailsParams {
  /**
   * Immediately retry SSL Verification.
   */
  retry?: true;
}

export namespace Verifications {
  export import VerificationUpdateResponse = VerificationsAPI.VerificationUpdateResponse;
  export import VerificationSslVerificationSslVerificationDetailsResponse = VerificationsAPI.VerificationSslVerificationSslVerificationDetailsResponse;
  export import VerificationUpdateParams = VerificationsAPI.VerificationUpdateParams;
  export import VerificationSslVerificationSslVerificationDetailsParams = VerificationsAPI.VerificationSslVerificationSslVerificationDetailsParams;
}
