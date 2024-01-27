// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as EnablesAPI from 'cloudflare/resources/zones/emails/routings/enables';

export class Enables extends APIResource {
  /**
   * Enable you Email Routing zone. Add and lock the necessary MX and SPF records.
   */
  emailRoutingSettingsEnableEmailRouting(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EnableEmailRoutingSettingsEnableEmailRoutingResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/email/routing/enable`, options);
  }
}

export interface EnableEmailRoutingSettingsEnableEmailRoutingResponse {
  errors?: Array<EnableEmailRoutingSettingsEnableEmailRoutingResponse.Error>;

  messages?: Array<EnableEmailRoutingSettingsEnableEmailRoutingResponse.Message>;

  result?: EnableEmailRoutingSettingsEnableEmailRoutingResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace EnableEmailRoutingSettingsEnableEmailRoutingResponse {
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
     * The date and time the settings have been created.
     */
    created?: string;

    /**
     * State of the zone settings for Email Routing.
     */
    enabled?: true | false;

    /**
     * The date and time the settings have been modified.
     */
    modified?: string;

    /**
     * Domain of your zone.
     */
    name?: string;

    /**
     * Flag to check if the user skipped the configuration wizard.
     */
    skip_wizard?: true | false;

    /**
     * Show the state of your account, and the type or configuration error.
     */
    status?: 'ready' | 'unconfigured' | 'misconfigured' | 'misconfigured/locked' | 'unlocked';

    /**
     * Email Routing settings identifier.
     */
    tag?: string;
  }
}

export namespace Enables {
  export import EnableEmailRoutingSettingsEnableEmailRoutingResponse = EnablesAPI.EnableEmailRoutingSettingsEnableEmailRoutingResponse;
}
