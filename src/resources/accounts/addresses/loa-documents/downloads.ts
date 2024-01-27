// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DownloadsAPI from 'cloudflare/resources/accounts/addresses/loa-documents/downloads';

export class Downloads extends APIResource {
  /**
   * Download specified LOA document under the account.
   */
  list(
    accountIdentifier: string,
    loaDocumentIdentifier: string | null,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.get(
      `/accounts/${accountIdentifier}/addressing/loa_documents/${loaDocumentIdentifier}/download`,
      options,
    );
  }
}

export type DownloadListResponse = unknown;

export namespace Downloads {
  export import DownloadListResponse = DownloadsAPI.DownloadListResponse;
}
