// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SchedulesAPI from 'cloudflare/resources/accounts/workers/scripts/schedules';

export class Schedules extends APIResource {
  /**
   * Fetches Cron Triggers for a Worker.
   */
  workerCronTriggerGetCronTriggers(
    accountIdentifier: string,
    scriptName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduleWorkerCronTriggerGetCronTriggersResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/workers/scripts/${scriptName}/schedules`,
      options,
    );
  }

  /**
   * Updates Cron Triggers for a Worker.
   */
  workerCronTriggerUpdateCronTriggers(
    accountIdentifier: string,
    scriptName: string,
    body: ScheduleWorkerCronTriggerUpdateCronTriggersParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduleWorkerCronTriggerUpdateCronTriggersResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/workers/scripts/${scriptName}/schedules`, {
      body,
      ...options,
    });
  }
}

export interface ScheduleWorkerCronTriggerGetCronTriggersResponse {
  errors?: Array<ScheduleWorkerCronTriggerGetCronTriggersResponse.Error>;

  messages?: Array<ScheduleWorkerCronTriggerGetCronTriggersResponse.Message>;

  result?: ScheduleWorkerCronTriggerGetCronTriggersResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ScheduleWorkerCronTriggerGetCronTriggersResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    schedules?: Array<Result.Schedule>;
  }

  export namespace Result {
    export interface Schedule {
      created_on?: unknown;

      cron?: unknown;

      modified_on?: unknown;
    }
  }
}

export interface ScheduleWorkerCronTriggerUpdateCronTriggersResponse {
  errors?: Array<ScheduleWorkerCronTriggerUpdateCronTriggersResponse.Error>;

  messages?: Array<ScheduleWorkerCronTriggerUpdateCronTriggersResponse.Message>;

  result?: ScheduleWorkerCronTriggerUpdateCronTriggersResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ScheduleWorkerCronTriggerUpdateCronTriggersResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    schedules?: Array<Result.Schedule>;
  }

  export namespace Result {
    export interface Schedule {
      created_on?: unknown;

      cron?: unknown;

      modified_on?: unknown;
    }
  }
}

export type ScheduleWorkerCronTriggerUpdateCronTriggersParams = unknown;

export namespace Schedules {
  export import ScheduleWorkerCronTriggerGetCronTriggersResponse = SchedulesAPI.ScheduleWorkerCronTriggerGetCronTriggersResponse;
  export import ScheduleWorkerCronTriggerUpdateCronTriggersResponse = SchedulesAPI.ScheduleWorkerCronTriggerUpdateCronTriggersResponse;
  export import ScheduleWorkerCronTriggerUpdateCronTriggersParams = SchedulesAPI.ScheduleWorkerCronTriggerUpdateCronTriggersParams;
}
