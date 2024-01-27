// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OrdersAPI from 'cloudflare/resources/zones/ssls/certificate-packs/orders';

export class Orders extends APIResource {
  /**
   * For a given zone, order an advanced certificate pack.
   */
  certificatePacksOrderAdvancedCertificateManagerCertificatePack(
    zoneIdentifier: string,
    body: OrderCertificatePacksOrderAdvancedCertificateManagerCertificatePackParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrderCertificatePacksOrderAdvancedCertificateManagerCertificatePackResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/ssl/certificate_packs/order`, { body, ...options });
  }
}

export interface OrderCertificatePacksOrderAdvancedCertificateManagerCertificatePackResponse {
  errors?: Array<OrderCertificatePacksOrderAdvancedCertificateManagerCertificatePackResponse.Error>;

  messages?: Array<OrderCertificatePacksOrderAdvancedCertificateManagerCertificatePackResponse.Message>;

  result?: OrderCertificatePacksOrderAdvancedCertificateManagerCertificatePackResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace OrderCertificatePacksOrderAdvancedCertificateManagerCertificatePackResponse {
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
     * Identifier
     */
    id?: string;

    /**
     * Certificate Authority selected for the order. For information on any certificate
     * authority specific details or restrictions
     * [see this page for more details.](https://developers.cloudflare.com/ssl/reference/certificate-authorities)
     */
    certificate_authority?: 'google' | 'lets_encrypt';

    /**
     * Whether or not to add Cloudflare Branding for the order. This will add
     * sni.cloudflaressl.com as the Common Name if set true.
     */
    cloudflare_branding?: boolean;

    /**
     * Comma separated list of valid host names for the certificate packs. Must contain
     * the zone apex, may not contain more than 50 hosts, and may not be empty.
     */
    hosts?: Array<string>;

    /**
     * Status of certificate pack.
     */
    status?:
      | 'initializing'
      | 'pending_validation'
      | 'deleted'
      | 'pending_issuance'
      | 'pending_deployment'
      | 'pending_deletion'
      | 'pending_expiration'
      | 'expired'
      | 'active'
      | 'initializing_timed_out'
      | 'validation_timed_out'
      | 'issuance_timed_out'
      | 'deployment_timed_out'
      | 'deletion_timed_out'
      | 'pending_cleanup'
      | 'staging_deployment'
      | 'staging_active'
      | 'deactivating'
      | 'inactive'
      | 'backup_issued'
      | 'holding_deployment';

    /**
     * Type of certificate pack.
     */
    type?: 'advanced';

    /**
     * Validation Method selected for the order.
     */
    validation_method?: 'txt' | 'http' | 'email';

    /**
     * Validity Days selected for the order.
     */
    validity_days?: 14 | 30 | 90 | 365;
  }
}

export interface OrderCertificatePacksOrderAdvancedCertificateManagerCertificatePackParams {
  /**
   * Certificate Authority selected for the order. For information on any certificate
   * authority specific details or restrictions
   * [see this page for more details.](https://developers.cloudflare.com/ssl/reference/certificate-authorities)
   */
  certificate_authority: 'google' | 'lets_encrypt';

  /**
   * Comma separated list of valid host names for the certificate packs. Must contain
   * the zone apex, may not contain more than 50 hosts, and may not be empty.
   */
  hosts: Array<string>;

  /**
   * Type of certificate pack.
   */
  type: 'advanced';

  /**
   * Validation Method selected for the order.
   */
  validation_method: 'txt' | 'http' | 'email';

  /**
   * Validity Days selected for the order.
   */
  validity_days: 14 | 30 | 90 | 365;

  /**
   * Whether or not to add Cloudflare Branding for the order. This will add
   * sni.cloudflaressl.com as the Common Name if set true.
   */
  cloudflare_branding?: boolean;
}

export namespace Orders {
  export import OrderCertificatePacksOrderAdvancedCertificateManagerCertificatePackResponse = OrdersAPI.OrderCertificatePacksOrderAdvancedCertificateManagerCertificatePackResponse;
  export import OrderCertificatePacksOrderAdvancedCertificateManagerCertificatePackParams = OrdersAPI.OrderCertificatePacksOrderAdvancedCertificateManagerCertificatePackParams;
}
