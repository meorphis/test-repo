// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as DirectUploadsAPI from 'cloudflare/resources/accounts/images/v2s/direct-uploads';

export class V2s extends APIResource {
  directUploads: DirectUploadsAPI.DirectUploads = new DirectUploadsAPI.DirectUploads(this._client);
}

export namespace V2s {
  export import DirectUploads = DirectUploadsAPI.DirectUploads;
  export import DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Response = DirectUploadsAPI.DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Response;
  export import DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Params = DirectUploadsAPI.DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Params;
}
