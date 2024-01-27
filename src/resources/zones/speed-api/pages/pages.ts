// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PagesAPI from 'cloudflare/resources/zones/speed-api/pages/pages';
import * as TestsAPI from 'cloudflare/resources/zones/speed-api/pages/tests';

export class Pages extends APIResource {
  tests: TestsAPI.Tests = new TestsAPI.Tests(this._client);

  /**
   * Lists all webpages which have been tested.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<PageListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/speed_api/pages`, options);
  }

  /**
   * Lists the core web vital metrics trend over time for a specific page.
   */
  trend(
    zoneIdentifier: string,
    url: string,
    query: PageTrendParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageTrendResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/speed_api/pages/${url}/trend`, { query, ...options });
  }
}

export interface PageListResponse {
  errors?: Array<PageListResponse.Error>;

  messages?: Array<PageListResponse.Message>;

  result?: Array<PageListResponse.Result>;

  /**
   * Whether the API call was successful.
   */
  success?: boolean;
}

export namespace PageListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * A test region with a label.
     */
    region?: Result.Region;

    /**
     * The frequency of the test.
     */
    scheduleFrequency?: 'DAILY' | 'WEEKLY';

    tests?: Array<Result.Test>;

    /**
     * A URL.
     */
    url?: string;
  }

  export namespace Result {
    /**
     * A test region with a label.
     */
    export interface Region {
      label?: string;

      /**
       * A test region.
       */
      value?:
        | 'asia-east1'
        | 'asia-northeast1'
        | 'asia-northeast2'
        | 'asia-south1'
        | 'asia-southeast1'
        | 'australia-southeast1'
        | 'europe-north1'
        | 'europe-southwest1'
        | 'europe-west1'
        | 'europe-west2'
        | 'europe-west3'
        | 'europe-west4'
        | 'europe-west8'
        | 'europe-west9'
        | 'me-west1'
        | 'southamerica-east1'
        | 'us-central1'
        | 'us-east1'
        | 'us-east4'
        | 'us-south1'
        | 'us-west1';
    }

    export interface Test {
      /**
       * UUID
       */
      id?: string;

      date?: string;

      /**
       * The Lighthouse report.
       */
      desktopReport?: Test.DesktopReport;

      /**
       * The Lighthouse report.
       */
      mobileReport?: Test.MobileReport;

      /**
       * A test region with a label.
       */
      region?: Test.Region;

      /**
       * The frequency of the test.
       */
      scheduleFrequency?: 'DAILY' | 'WEEKLY';

      /**
       * A URL.
       */
      url?: string;
    }

    export namespace Test {
      /**
       * The Lighthouse report.
       */
      export interface DesktopReport {
        /**
         * Cumulative Layout Shift.
         */
        cls?: number;

        /**
         * The type of device.
         */
        deviceType?: 'DESKTOP' | 'MOBILE';

        error?: DesktopReport.Error;

        /**
         * First Contentful Paint.
         */
        fcp?: number;

        /**
         * The URL to the full Lighthouse JSON report.
         */
        jsonReportUrl?: string;

        /**
         * Largest Contentful Paint.
         */
        lcp?: number;

        /**
         * The Lighthouse performance score.
         */
        performanceScore?: number;

        /**
         * Speed Index.
         */
        si?: number;

        /**
         * The state of the Lighthouse report.
         */
        state?: 'RUNNING' | 'COMPLETE' | 'FAILED';

        /**
         * Total Blocking Time.
         */
        tbt?: number;

        /**
         * Time To First Byte.
         */
        ttfb?: number;

        /**
         * Time To Interactive.
         */
        tti?: number;
      }

      export namespace DesktopReport {
        export interface Error {
          /**
           * The error code of the Lighthouse result.
           */
          code?: 'NOT_REACHABLE' | 'DNS_FAILURE' | 'NOT_HTML' | 'LIGHTHOUSE_TIMEOUT' | 'UNKNOWN';

          /**
           * Detailed error message.
           */
          detail?: string;

          /**
           * The final URL displayed to the user.
           */
          finalDisplayedUrl?: string;
        }
      }

      /**
       * The Lighthouse report.
       */
      export interface MobileReport {
        /**
         * Cumulative Layout Shift.
         */
        cls?: number;

        /**
         * The type of device.
         */
        deviceType?: 'DESKTOP' | 'MOBILE';

        error?: MobileReport.Error;

        /**
         * First Contentful Paint.
         */
        fcp?: number;

        /**
         * The URL to the full Lighthouse JSON report.
         */
        jsonReportUrl?: string;

        /**
         * Largest Contentful Paint.
         */
        lcp?: number;

        /**
         * The Lighthouse performance score.
         */
        performanceScore?: number;

        /**
         * Speed Index.
         */
        si?: number;

        /**
         * The state of the Lighthouse report.
         */
        state?: 'RUNNING' | 'COMPLETE' | 'FAILED';

        /**
         * Total Blocking Time.
         */
        tbt?: number;

        /**
         * Time To First Byte.
         */
        ttfb?: number;

        /**
         * Time To Interactive.
         */
        tti?: number;
      }

      export namespace MobileReport {
        export interface Error {
          /**
           * The error code of the Lighthouse result.
           */
          code?: 'NOT_REACHABLE' | 'DNS_FAILURE' | 'NOT_HTML' | 'LIGHTHOUSE_TIMEOUT' | 'UNKNOWN';

          /**
           * Detailed error message.
           */
          detail?: string;

          /**
           * The final URL displayed to the user.
           */
          finalDisplayedUrl?: string;
        }
      }

      /**
       * A test region with a label.
       */
      export interface Region {
        label?: string;

        /**
         * A test region.
         */
        value?:
          | 'asia-east1'
          | 'asia-northeast1'
          | 'asia-northeast2'
          | 'asia-south1'
          | 'asia-southeast1'
          | 'australia-southeast1'
          | 'europe-north1'
          | 'europe-southwest1'
          | 'europe-west1'
          | 'europe-west2'
          | 'europe-west3'
          | 'europe-west4'
          | 'europe-west8'
          | 'europe-west9'
          | 'me-west1'
          | 'southamerica-east1'
          | 'us-central1'
          | 'us-east1'
          | 'us-east4'
          | 'us-south1'
          | 'us-west1';
      }
    }
  }
}

export interface PageTrendResponse {
  errors?: Array<PageTrendResponse.Error>;

  messages?: Array<PageTrendResponse.Message>;

  result?: PageTrendResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: boolean;
}

export namespace PageTrendResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * Cumulative Layout Shift trend.
     */
    cls?: Array<number | null>;

    /**
     * First Contentful Paint trend.
     */
    fcp?: Array<number | null>;

    /**
     * Largest Contentful Paint trend.
     */
    lcp?: Array<number | null>;

    /**
     * The Lighthouse score trend.
     */
    performanceScore?: Array<number | null>;

    /**
     * Speed Index trend.
     */
    si?: Array<number | null>;

    /**
     * Total Blocking Time trend.
     */
    tbt?: Array<number | null>;

    /**
     * Time To First Byte trend.
     */
    ttfb?: Array<number | null>;

    /**
     * Time To Interactive trend.
     */
    tti?: Array<number | null>;
  }
}

export interface PageTrendParams {
  /**
   * The type of device.
   */
  deviceType: 'DESKTOP' | 'MOBILE';

  /**
   * A comma-separated list of metrics to include in the results.
   */
  metrics: string;

  /**
   * A test region.
   */
  region:
    | 'asia-east1'
    | 'asia-northeast1'
    | 'asia-northeast2'
    | 'asia-south1'
    | 'asia-southeast1'
    | 'australia-southeast1'
    | 'europe-north1'
    | 'europe-southwest1'
    | 'europe-west1'
    | 'europe-west2'
    | 'europe-west3'
    | 'europe-west4'
    | 'europe-west8'
    | 'europe-west9'
    | 'me-west1'
    | 'southamerica-east1'
    | 'us-central1'
    | 'us-east1'
    | 'us-east4'
    | 'us-south1'
    | 'us-west1';

  /**
   * The timezone of the start and end timestamps.
   */
  tz: string;
}

export namespace Pages {
  export import PageListResponse = PagesAPI.PageListResponse;
  export import PageTrendResponse = PagesAPI.PageTrendResponse;
  export import PageTrendParams = PagesAPI.PageTrendParams;
  export import Tests = TestsAPI.Tests;
  export import TestCreateResponse = TestsAPI.TestCreateResponse;
  export import TestRetrieveResponse = TestsAPI.TestRetrieveResponse;
  export import TestListResponse = TestsAPI.TestListResponse;
  export import TestDeleteResponse = TestsAPI.TestDeleteResponse;
  export import TestCreateParams = TestsAPI.TestCreateParams;
  export import TestListParams = TestsAPI.TestListParams;
  export import TestDeleteParams = TestsAPI.TestDeleteParams;
}
