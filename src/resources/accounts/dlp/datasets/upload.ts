// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UploadAPI from 'cloudflare/resources/accounts/dlp/datasets/upload';
import * as DatasetsAPI from 'cloudflare/resources/accounts/dlp/datasets/datasets';

export class Upload extends APIResource {
  /**
   * Prepare to upload a new version of a dataset.
   */
  prepare(
    accountIdentifier: string,
    datasetId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetsAPI.DlpDatasetNewVersionResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/dlp/datasets/${datasetId}/upload`, options);
  }

  /**
   * Upload a new version of a dataset.
   */
  upload(
    accountIdentifier: string,
    datasetId: string,
    version: number,
    body: UploadUploadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetsAPI.DlpDatasetResponse> {
    return this._client.post(
      `/accounts/${accountIdentifier}/dlp/datasets/${datasetId}/upload/${version}`,
      options,
    );
  }
}

export interface UploadUploadParams {}

export namespace Upload {
  export import UploadUploadParams = UploadAPI.UploadUploadParams;
}
