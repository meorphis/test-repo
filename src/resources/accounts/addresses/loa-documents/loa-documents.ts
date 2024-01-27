// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as LoaDocumentsAPI from 'cloudflare/resources/accounts/addresses/loa-documents/loa-documents';
import * as DownloadsAPI from 'cloudflare/resources/accounts/addresses/loa-documents/downloads';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class LoaDocuments extends APIResource {
  downloads: DownloadsAPI.Downloads = new DownloadsAPI.Downloads(this._client);

  /**
   * Submit LOA document (pdf format) under the account.
   */
  ipAddressManagementPrefixesUploadLoaDocument(
    accountIdentifier: string,
    body: LoaDocumentIPAddressManagementPrefixesUploadLoaDocumentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoaDocumentIPAddressManagementPrefixesUploadLoaDocumentResponse> {
    return this._client.post(
      `/accounts/${accountIdentifier}/addressing/loa_documents`,
      multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export interface LoaDocumentIPAddressManagementPrefixesUploadLoaDocumentResponse {
  errors?: Array<LoaDocumentIPAddressManagementPrefixesUploadLoaDocumentResponse.Error>;

  messages?: Array<LoaDocumentIPAddressManagementPrefixesUploadLoaDocumentResponse.Message>;

  result?: LoaDocumentIPAddressManagementPrefixesUploadLoaDocumentResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace LoaDocumentIPAddressManagementPrefixesUploadLoaDocumentResponse {
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
     * Name of LOA document.
     */
    filename?: string;
  }
}

export interface LoaDocumentIPAddressManagementPrefixesUploadLoaDocumentParams {
  /**
   * LOA document to upload.
   */
  loa_document: string;
}

export namespace LoaDocuments {
  export import LoaDocumentIPAddressManagementPrefixesUploadLoaDocumentResponse = LoaDocumentsAPI.LoaDocumentIPAddressManagementPrefixesUploadLoaDocumentResponse;
  export import LoaDocumentIPAddressManagementPrefixesUploadLoaDocumentParams = LoaDocumentsAPI.LoaDocumentIPAddressManagementPrefixesUploadLoaDocumentParams;
  export import Downloads = DownloadsAPI.Downloads;
  export import DownloadListResponse = DownloadsAPI.DownloadListResponse;
}
