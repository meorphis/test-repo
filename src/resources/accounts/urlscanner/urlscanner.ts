// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as HarAPI from 'cloudflare/resources/accounts/urlscanner/har';
import * as ScanAPI from 'cloudflare/resources/accounts/urlscanner/scan';
import * as ScreenshotAPI from 'cloudflare/resources/accounts/urlscanner/screenshot';

export class Urlscanner extends APIResource {
  scan: ScanAPI.Scan = new ScanAPI.Scan(this._client);
  har: HarAPI.Har = new HarAPI.Har(this._client);
  screenshot: ScreenshotAPI.Screenshot = new ScreenshotAPI.Screenshot(this._client);
}

export namespace Urlscanner {
  export import Scan = ScanAPI.Scan;
  export import ScanCreateResponse = ScanAPI.ScanCreateResponse;
  export import ScanRetrieveResponse = ScanAPI.ScanRetrieveResponse;
  export import ScanListResponse = ScanAPI.ScanListResponse;
  export import ScanCreateParams = ScanAPI.ScanCreateParams;
  export import ScanListParams = ScanAPI.ScanListParams;
  export import Har = HarAPI.Har;
  export import HarRetrieveResponse = HarAPI.HarRetrieveResponse;
  export import Screenshot = ScreenshotAPI.Screenshot;
  export import ScreenshotRetrieveParams = ScreenshotAPI.ScreenshotRetrieveParams;
}
