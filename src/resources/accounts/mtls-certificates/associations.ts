// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AssociationsAPI from 'cloudflare/resources/accounts/mtls-certificates/associations';

export class Associations extends APIResource {
  /**
   * Lists all active associations between the certificate and Cloudflare services.
   */
  mTlsCertificateManagementListMTlsCertificateAssociations(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssociationMTlsCertificateManagementListMTlsCertificateAssociationsResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/mtls_certificates/${identifier}/associations`,
      options,
    );
  }
}

export interface AssociationMTlsCertificateManagementListMTlsCertificateAssociationsResponse {
  errors?: Array<AssociationMTlsCertificateManagementListMTlsCertificateAssociationsResponse.Error>;

  messages?: Array<AssociationMTlsCertificateManagementListMTlsCertificateAssociationsResponse.Message>;

  result?: Array<AssociationMTlsCertificateManagementListMTlsCertificateAssociationsResponse.Result>;

  result_info?: AssociationMTlsCertificateManagementListMTlsCertificateAssociationsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AssociationMTlsCertificateManagementListMTlsCertificateAssociationsResponse {
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
     * The service using the certificate.
     */
    service?: string;

    /**
     * Certificate deployment status for the given service.
     */
    status?: string;
  }

  export interface ResultInfo {
    /**
     * Total number of results for the requested service
     */
    count?: number;

    /**
     * Current page within paginated list of results
     */
    page?: number;

    /**
     * Number of results per page of results
     */
    per_page?: number;

    /**
     * Total results available without any search parameters
     */
    total_count?: number;
  }
}

export namespace Associations {
  export import AssociationMTlsCertificateManagementListMTlsCertificateAssociationsResponse = AssociationsAPI.AssociationMTlsCertificateManagementListMTlsCertificateAssociationsResponse;
}
