// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as Resnet50API from 'cloudflare/resources/ai/model/image-classification/resnet-50';

export class Resnet50 extends APIResource {
  /**
   * Execute @cf/microsoft/resnet-50 model.
   */
  run(
    accountIdentifier: string,
    body?: Resnet50RunParams | null | undefined,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Resnet50RunResponse> {
    return this._client.post(`/apiv4/accounts/${accountIdentifier}/ai/run/@cf/microsoft/resnet-50`, options);
  }
}

export type Resnet50RunResponse = Array<Resnet50RunResponse.Resnet50RunResponseItem>;

export namespace Resnet50RunResponse {
  export interface Resnet50RunResponseItem {
    label?: string;

    score?: number;
  }
}

export interface Resnet50RunParams {}

export namespace Resnet50 {
  export import Resnet50RunResponse = Resnet50API.Resnet50RunResponse;
  export import Resnet50RunParams = Resnet50API.Resnet50RunParams;
}
