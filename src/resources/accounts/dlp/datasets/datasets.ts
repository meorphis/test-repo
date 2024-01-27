// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DatasetsAPI from 'cloudflare/resources/accounts/dlp/datasets/datasets';
import * as UploadAPI from 'cloudflare/resources/accounts/dlp/datasets/upload';

export class Datasets extends APIResource {
  upload: UploadAPI.Upload = new UploadAPI.Upload(this._client);

  /**
   * Create a new dataset.
   */
  create(
    accountIdentifier: string,
    body: DatasetCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DlpDatasetCreationResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/dlp/datasets`, { body, ...options });
  }

  /**
   * Fetch a specific dataset with information about available versions.
   */
  retrieve(
    accountIdentifier: string,
    datasetId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DlpDatasetResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/dlp/datasets/${datasetId}`, options);
  }

  /**
   * Update details about a dataset.
   */
  update(
    accountIdentifier: string,
    datasetId: string,
    body: DatasetUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DlpDatasetResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/dlp/datasets/${datasetId}`, { body, ...options });
  }

  /**
   * Fetch all datasets with information about available versions.
   */
  list(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<DlpDatasetArrayResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/dlp/datasets`, options);
  }

  /**
   * Delete a dataset.
   *
   * This deletes all versions of the dataset.
   */
  delete(accountIdentifier: string, datasetId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/accounts/${accountIdentifier}/dlp/datasets/${datasetId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface DlpDatasetArrayResponse {
  errors?: Array<DlpDatasetArrayResponse.Error>;

  messages?: Array<DlpDatasetArrayResponse.Message>;

  result?: Array<DlpDatasetArrayResponse.Result>;

  result_info?: DlpDatasetArrayResponse.ResultInfo;

  success?: boolean;
}

export namespace DlpDatasetArrayResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    id: string;

    created_at: string;

    name: string;

    num_cells: number;

    secret: boolean;

    status: 'empty' | 'uploading' | 'failed' | 'complete';

    updated_at: string;

    uploads: Array<Result.Upload>;

    description?: string | null;
  }

  export namespace Result {
    export interface Upload {
      num_cells: number;

      status: 'empty' | 'uploading' | 'failed' | 'complete';

      version: number;
    }
  }

  export interface ResultInfo {
    /**
     * total number of pages
     */
    count: number;

    /**
     * current page
     */
    page: number;

    /**
     * number of items per page
     */
    per_page: number;

    /**
     * total number of items
     */
    total_count: number;
  }
}

export interface DlpDatasetCreationResponse {
  errors?: Array<DlpDatasetCreationResponse.Error>;

  messages?: Array<DlpDatasetCreationResponse.Message>;

  result?: DlpDatasetCreationResponse.Result;

  result_info?: DlpDatasetCreationResponse.ResultInfo;

  success?: boolean;
}

export namespace DlpDatasetCreationResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    dataset: Result.Dataset;

    max_cells: number;

    /**
     * The version to use when uploading the dataset.
     */
    version: number;

    /**
     * The secret to use for Exact Data Match datasets. This is not present in Custom
     * Wordlists.
     */
    secret?: string;
  }

  export namespace Result {
    export interface Dataset {
      id: string;

      created_at: string;

      name: string;

      num_cells: number;

      secret: boolean;

      status: 'empty' | 'uploading' | 'failed' | 'complete';

      updated_at: string;

      uploads: Array<Dataset.Upload>;

      description?: string | null;
    }

    export namespace Dataset {
      export interface Upload {
        num_cells: number;

        status: 'empty' | 'uploading' | 'failed' | 'complete';

        version: number;
      }
    }
  }

  export interface ResultInfo {
    /**
     * total number of pages
     */
    count: number;

    /**
     * current page
     */
    page: number;

    /**
     * number of items per page
     */
    per_page: number;

    /**
     * total number of items
     */
    total_count: number;
  }
}

export interface DlpDatasetNewVersionResponse {
  errors?: Array<DlpDatasetNewVersionResponse.Error>;

  messages?: Array<DlpDatasetNewVersionResponse.Message>;

  result?: DlpDatasetNewVersionResponse.Result;

  result_info?: DlpDatasetNewVersionResponse.ResultInfo;

  success?: boolean;
}

export namespace DlpDatasetNewVersionResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    max_cells: number;

    version: number;

    secret?: string;
  }

  export interface ResultInfo {
    /**
     * total number of pages
     */
    count: number;

    /**
     * current page
     */
    page: number;

    /**
     * number of items per page
     */
    per_page: number;

    /**
     * total number of items
     */
    total_count: number;
  }
}

export interface DlpDatasetResponse {
  errors?: Array<DlpDatasetResponse.Error>;

  messages?: Array<DlpDatasetResponse.Message>;

  result?: DlpDatasetResponse.Result;

  result_info?: DlpDatasetResponse.ResultInfo;

  success?: boolean;
}

export namespace DlpDatasetResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    id: string;

    created_at: string;

    name: string;

    num_cells: number;

    secret: boolean;

    status: 'empty' | 'uploading' | 'failed' | 'complete';

    updated_at: string;

    uploads: Array<Result.Upload>;

    description?: string | null;
  }

  export namespace Result {
    export interface Upload {
      num_cells: number;

      status: 'empty' | 'uploading' | 'failed' | 'complete';

      version: number;
    }
  }

  export interface ResultInfo {
    /**
     * total number of pages
     */
    count: number;

    /**
     * current page
     */
    page: number;

    /**
     * number of items per page
     */
    per_page: number;

    /**
     * total number of items
     */
    total_count: number;
  }
}

export interface DatasetCreateParams {
  name: string;

  description?: string | null;

  /**
   * Generate a secret dataset.
   *
   * If true, the response will include a secret to use with the EDM encoder. If
   * false, the response has no secret and the dataset is uploaded in plaintext.
   */
  secret?: boolean;
}

export interface DatasetUpdateParams {
  description?: string | null;

  name?: string | null;
}

export namespace Datasets {
  export import DlpDatasetArrayResponse = DatasetsAPI.DlpDatasetArrayResponse;
  export import DlpDatasetCreationResponse = DatasetsAPI.DlpDatasetCreationResponse;
  export import DlpDatasetNewVersionResponse = DatasetsAPI.DlpDatasetNewVersionResponse;
  export import DlpDatasetResponse = DatasetsAPI.DlpDatasetResponse;
  export import DatasetCreateParams = DatasetsAPI.DatasetCreateParams;
  export import DatasetUpdateParams = DatasetsAPI.DatasetUpdateParams;
  export import Upload = UploadAPI.Upload;
  export import UploadUploadParams = UploadAPI.UploadUploadParams;
}
