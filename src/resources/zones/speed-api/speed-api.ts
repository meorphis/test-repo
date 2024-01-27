// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SpeedAPIAPI from 'cloudflare/resources/zones/speed-api/speed-api';
import * as ScheduleAPI from 'cloudflare/resources/zones/speed-api/schedule';
import * as PagesAPI from 'cloudflare/resources/zones/speed-api/pages/pages';

export class SpeedAPI extends APIResource {
  pages: PagesAPI.Pages = new PagesAPI.Pages(this._client);
  schedule: ScheduleAPI.Schedule = new ScheduleAPI.Schedule(this._client);

  /**
   * Retrieves quota for all plans, as well as the current zone quota.
   */
  availabilities(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedAPIAvailabilitiesResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/speed_api/availabilities`, options);
  }
}

export interface SpeedAPIAvailabilitiesResponse {
  errors?: Array<SpeedAPIAvailabilitiesResponse.Error>;

  messages?: Array<SpeedAPIAvailabilitiesResponse.Message>;

  result?: SpeedAPIAvailabilitiesResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: boolean;
}

export namespace SpeedAPIAvailabilitiesResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    quota?: Result.Quota;

    regions?: Array<Result.Region>;

    regionsPerPlan?: unknown;
  }

  export namespace Result {
    export interface Quota {
      /**
       * Cloudflare plan.
       */
      plan?: string;

      /**
       * The number of tests available per plan.
       */
      quotasPerPlan?: unknown;

      /**
       * The number of remaining schedules available.
       */
      remainingSchedules?: number;

      /**
       * The number of remaining tests available.
       */
      remainingTests?: number;

      /**
       * The number of schedules available per plan.
       */
      scheduleQuotasPerPlan?: unknown;
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

export namespace SpeedAPI {
  export import SpeedAPIAvailabilitiesResponse = SpeedAPIAPI.SpeedAPIAvailabilitiesResponse;
  export import Pages = PagesAPI.Pages;
  export import PageListResponse = PagesAPI.PageListResponse;
  export import PageTrendResponse = PagesAPI.PageTrendResponse;
  export import PageTrendParams = PagesAPI.PageTrendParams;
  export import Schedule = ScheduleAPI.Schedule;
  export import ScheduleCreateResponse = ScheduleAPI.ScheduleCreateResponse;
  export import ScheduleRetrieveResponse = ScheduleAPI.ScheduleRetrieveResponse;
  export import ScheduleDeleteResponse = ScheduleAPI.ScheduleDeleteResponse;
  export import ScheduleCreateParams = ScheduleAPI.ScheduleCreateParams;
  export import ScheduleRetrieveParams = ScheduleAPI.ScheduleRetrieveParams;
  export import ScheduleDeleteParams = ScheduleAPI.ScheduleDeleteParams;
}
