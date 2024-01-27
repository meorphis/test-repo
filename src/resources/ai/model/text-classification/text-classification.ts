// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as DistilbertSst2Int8API from 'cloudflare/resources/ai/model/text-classification/distilbert-sst-2-int8';

export class TextClassification extends APIResource {
  distilbertSst2Int8: DistilbertSst2Int8API.DistilbertSst2Int8 = new DistilbertSst2Int8API.DistilbertSst2Int8(
    this._client,
  );
}

export namespace TextClassification {
  export import DistilbertSst2Int8 = DistilbertSst2Int8API.DistilbertSst2Int8;
  export import DistilbertSst2Int8RunResponse = DistilbertSst2Int8API.DistilbertSst2Int8RunResponse;
  export import DistilbertSst2Int8RunParams = DistilbertSst2Int8API.DistilbertSst2Int8RunParams;
}
