// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as QuotasAPI from 'cloudflare/resources/zones/ssls/certificate-packs/quotas';

export class Quotas extends APIResource {
  /**
   * For a given zone, list certificate pack quotas.
   */
  certificatePacksGetCertificatePackQuotas(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QuotaCertificatePacksGetCertificatePackQuotasResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/ssl/certificate_packs/quota`, options);
  }
}

export interface QuotaCertificatePacksGetCertificatePackQuotasResponse {
  errors?: Array<QuotaCertificatePacksGetCertificatePackQuotasResponse.Error>;

  messages?: Array<QuotaCertificatePacksGetCertificatePackQuotasResponse.Message>;

  result?: QuotaCertificatePacksGetCertificatePackQuotasResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace QuotaCertificatePacksGetCertificatePackQuotasResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    advanced?: Result.Advanced;
  }

  export namespace Result {
    export interface Advanced {
      /**
       * Quantity Allocated.
       */
      allocated?: number;

      /**
       * Quantity Used.
       */
      used?: number;
    }
  }
}

export namespace Quotas {
  export import QuotaCertificatePacksGetCertificatePackQuotasResponse = QuotasAPI.QuotaCertificatePacksGetCertificatePackQuotasResponse;
}
