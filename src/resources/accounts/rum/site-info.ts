// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SiteInfoAPI from 'cloudflare/resources/accounts/rum/site-info';

export class SiteInfo extends APIResource {
  /**
   * Creates a new Web Analytics site.
   */
  create(
    accountIdentifier: string,
    body: SiteInfoCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SiteInfoCreateResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/rum/site_info`, { body, ...options });
  }
}

export interface SiteInfoCreateResponse {
  errors?: Array<SiteInfoCreateResponse.Error>;

  messages?: Array<SiteInfoCreateResponse.Message>;

  result?: SiteInfoCreateResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: boolean;
}

export namespace SiteInfoCreateResponse {
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
     * If enabled, the JavaScript snippet is automatically injected for orange-clouded
     * sites.
     */
    auto_install?: boolean;

    created?: string;

    /**
     * A list of rules.
     */
    rules?: Array<Result.Rule>;

    ruleset?: Result.Ruleset;

    /**
     * The Web Analytics site identifier.
     */
    site_tag?: string;

    /**
     * The Web Analytics site token.
     */
    site_token?: string;

    /**
     * Encoded JavaScript snippet.
     */
    snippet?: string;
  }

  export namespace Result {
    export interface Rule {
      /**
       * The Web Analytics rule identifier.
       */
      id?: string;

      created?: string;

      /**
       * The hostname the rule will be applied to.
       */
      host?: string;

      /**
       * Whether the rule includes or excludes traffic from being measured.
       */
      inclusive?: boolean;

      /**
       * Whether the rule is paused or not.
       */
      is_paused?: boolean;

      /**
       * The paths the rule will be applied to.
       */
      paths?: Array<string>;

      priority?: number;
    }

    export interface Ruleset {
      /**
       * The Web Analytics ruleset identifier.
       */
      id?: string;

      /**
       * Whether the ruleset is enabled.
       */
      enabled?: boolean;

      zone_name?: string;

      /**
       * The zone identifier.
       */
      zone_tag?: string;
    }
  }
}

export interface SiteInfoCreateParams {
  /**
   * If enabled, the JavaScript snippet is automatically injected for orange-clouded
   * sites.
   */
  auto_install?: boolean;

  /**
   * The hostname to use for gray-clouded sites.
   */
  host?: string;

  /**
   * The zone identifier.
   */
  zone_tag?: string;
}

export namespace SiteInfo {
  export import SiteInfoCreateResponse = SiteInfoAPI.SiteInfoCreateResponse;
  export import SiteInfoCreateParams = SiteInfoAPI.SiteInfoCreateParams;
}
