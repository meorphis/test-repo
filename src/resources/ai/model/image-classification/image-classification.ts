// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as Resnet50API from 'cloudflare/resources/ai/model/image-classification/resnet-50';

export class ImageClassification extends APIResource {
  resnet50: Resnet50API.Resnet50 = new Resnet50API.Resnet50(this._client);
}

export namespace ImageClassification {
  export import Resnet50 = Resnet50API.Resnet50;
  export import Resnet50RunResponse = Resnet50API.Resnet50RunResponse;
  export import Resnet50RunParams = Resnet50API.Resnet50RunParams;
}
