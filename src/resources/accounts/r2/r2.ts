// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as BucketsAPI from 'cloudflare/resources/accounts/r2/buckets';

export class R2 extends APIResource {
  buckets: BucketsAPI.Buckets = new BucketsAPI.Buckets(this._client);
}

export namespace R2 {
  export import Buckets = BucketsAPI.Buckets;
  export import BucketRetrieveResponse = BucketsAPI.BucketRetrieveResponse;
  export import BucketDeleteResponse = BucketsAPI.BucketDeleteResponse;
  export import BucketR2BucketCreateBucketResponse = BucketsAPI.BucketR2BucketCreateBucketResponse;
  export import BucketR2BucketListBucketsResponse = BucketsAPI.BucketR2BucketListBucketsResponse;
  export import BucketR2BucketCreateBucketParams = BucketsAPI.BucketR2BucketCreateBucketParams;
  export import BucketR2BucketListBucketsParams = BucketsAPI.BucketR2BucketListBucketsParams;
}
