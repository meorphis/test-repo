// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as BgeBaseEnV1_5API from 'cloudflare/resources/ai/model/text-embeddings/bge-base-en-v1-5';
import * as BgeLargeEnV1_5API from 'cloudflare/resources/ai/model/text-embeddings/bge-large-en-v1-5';
import * as BgeSmallEnV1_5API from 'cloudflare/resources/ai/model/text-embeddings/bge-small-en-v1-5';

export class TextEmbeddings extends APIResource {
  bgeSmallEnV1_5: BgeSmallEnV1_5API.BgeSmallEnV1_5 = new BgeSmallEnV1_5API.BgeSmallEnV1_5(this._client);
  bgeBaseEnV1_5: BgeBaseEnV1_5API.BgeBaseEnV1_5 = new BgeBaseEnV1_5API.BgeBaseEnV1_5(this._client);
  bgeLargeEnV1_5: BgeLargeEnV1_5API.BgeLargeEnV1_5 = new BgeLargeEnV1_5API.BgeLargeEnV1_5(this._client);
}

export namespace TextEmbeddings {
  export import BgeSmallEnV1_5 = BgeSmallEnV1_5API.BgeSmallEnV1_5;
  export import BgeSmallEnV1_5RunResponse = BgeSmallEnV1_5API.BgeSmallEnV1_5RunResponse;
  export import BgeSmallEnV1_5RunParams = BgeSmallEnV1_5API.BgeSmallEnV1_5RunParams;
  export import BgeBaseEnV1_5 = BgeBaseEnV1_5API.BgeBaseEnV1_5;
  export import BgeBaseEnV1_5RunResponse = BgeBaseEnV1_5API.BgeBaseEnV1_5RunResponse;
  export import BgeBaseEnV1_5RunParams = BgeBaseEnV1_5API.BgeBaseEnV1_5RunParams;
  export import BgeLargeEnV1_5 = BgeLargeEnV1_5API.BgeLargeEnV1_5;
  export import BgeLargeEnV1_5RunResponse = BgeLargeEnV1_5API.BgeLargeEnV1_5RunResponse;
  export import BgeLargeEnV1_5RunParams = BgeLargeEnV1_5API.BgeLargeEnV1_5RunParams;
}
