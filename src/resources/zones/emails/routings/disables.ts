// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DisablesAPI from 'cloudflare/resources/zones/emails/routings/disables';

export class Disables extends APIResource {
  /**
   * Disable your Email Routing zone. Also removes additional MX records previously
   * required for Email Routing to work.
   */
  emailRoutingSettingsDisableEmailRouting(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DisableEmailRoutingSettingsDisableEmailRoutingResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/email/routing/disable`, options);
  }
}

export interface DisableEmailRoutingSettingsDisableEmailRoutingResponse {
  errors?: Array<DisableEmailRoutingSettingsDisableEmailRoutingResponse.Error>;

  messages?: Array<DisableEmailRoutingSettingsDisableEmailRoutingResponse.Message>;

  result?: DisableEmailRoutingSettingsDisableEmailRoutingResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DisableEmailRoutingSettingsDisableEmailRoutingResponse {
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

export namespace Disables {
  export import DisableEmailRoutingSettingsDisableEmailRoutingResponse = DisablesAPI.DisableEmailRoutingSettingsDisableEmailRoutingResponse;
}
