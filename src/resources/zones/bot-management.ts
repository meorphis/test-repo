// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as BotManagementAPI from 'cloudflare/resources/zones/bot-management';

export class BotManagement extends APIResource {
  /**
   * Retrieve a zone's Bot Management Config
   */
  retrieve(
    zoneIdentifier: string,
    params?: BotManagementRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BotManagementRetrieveResponse>;
  retrieve(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BotManagementRetrieveResponse>;
  retrieve(
    zoneIdentifier: string,
    params: BotManagementRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BotManagementRetrieveResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(zoneIdentifier, {}, params);
    }
    const { 'Cloudflare-Version': cloudflareVersion } = params;
    return this._client.get(`/zones/${zoneIdentifier}/bot_management`, {
      ...options,
      headers: { 'Cloudflare-Version': cloudflareVersion?.toString() || '', ...options?.headers },
    });
  }

  /**
   * Updates the Bot Management configuration for a zone.
   *
   * This API is used to update:
   *
   * - **Bot Fight Mode**
   * - **Super Bot Fight Mode**
   * - **Bot Management for Enterprise**
   *
   * See [Bot Plans](https://developers.cloudflare.com/bots/plans/) for more
   * information on the different plans
   */
  update(
    zoneIdentifier: string,
    params: BotManagementUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BotManagementUpdateResponse> {
    const { 'Cloudflare-Version': cloudflareVersion, ...body } = params;
    return this._client.put(`/zones/${zoneIdentifier}/bot_management`, {
      body,
      ...options,
      headers: { 'Cloudflare-Version': cloudflareVersion?.toString() || '', ...options?.headers },
    });
  }
}

export interface BotManagementRetrieveResponse {
  errors?: Array<BotManagementRetrieveResponse.Error>;

  messages?: Array<BotManagementRetrieveResponse.Message>;

  result?:
    | BotManagementRetrieveResponse.Esic0axpBotFightModeConfig
    | BotManagementRetrieveResponse.Esic0axpSbfmDefinitelyConfig
    | BotManagementRetrieveResponse.Esic0axpSbfmLikelyConfig
    | BotManagementRetrieveResponse.Esic0axpBmSubscriptionConfig;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace BotManagementRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Esic0axpBotFightModeConfig {
    /**
     * Use lightweight, invisible JavaScript detections to improve Bot Management.
     * [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).
     */
    enable_js?: boolean;

    /**
     * Whether to enable Bot Fight Mode.
     */
    fight_mode?: boolean;

    /**
     * A read-only field that indicates whether the zone currently is running the
     * latest ML model.
     */
    using_latest_model?: boolean;
  }

  export interface Esic0axpSbfmDefinitelyConfig {
    /**
     * Use lightweight, invisible JavaScript detections to improve Bot Management.
     * [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).
     */
    enable_js?: boolean;

    /**
     * Whether to optimize Super Bot Fight Mode protections for Wordpress.
     */
    optimize_wordpress?: boolean;

    /**
     * Super Bot Fight Mode (SBFM) action to take on definitely automated requests.
     */
    sbfm_definitely_automated?: 'allow' | 'block' | 'managed_challenge';

    /**
     * Super Bot Fight Mode (SBFM) to enable static resource protection. Enable if
     * static resources on your application need bot protection. Note: Static resource
     * protection can also result in legitimate traffic being blocked.
     */
    sbfm_static_resource_protection?: boolean;

    /**
     * Super Bot Fight Mode (SBFM) action to take on verified bots requests.
     */
    sbfm_verified_bots?: 'allow' | 'block';

    /**
     * A read-only field that indicates whether the zone currently is running the
     * latest ML model.
     */
    using_latest_model?: boolean;
  }

  export interface Esic0axpSbfmLikelyConfig {
    /**
     * Use lightweight, invisible JavaScript detections to improve Bot Management.
     * [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).
     */
    enable_js?: boolean;

    /**
     * Whether to optimize Super Bot Fight Mode protections for Wordpress.
     */
    optimize_wordpress?: boolean;

    /**
     * Super Bot Fight Mode (SBFM) action to take on definitely automated requests.
     */
    sbfm_definitely_automated?: 'allow' | 'block' | 'managed_challenge';

    /**
     * Super Bot Fight Mode (SBFM) action to take on likely automated requests.
     */
    sbfm_likely_automated?: 'allow' | 'block' | 'managed_challenge';

    /**
     * Super Bot Fight Mode (SBFM) to enable static resource protection. Enable if
     * static resources on your application need bot protection. Note: Static resource
     * protection can also result in legitimate traffic being blocked.
     */
    sbfm_static_resource_protection?: boolean;

    /**
     * Super Bot Fight Mode (SBFM) action to take on verified bots requests.
     */
    sbfm_verified_bots?: 'allow' | 'block';

    /**
     * A read-only field that indicates whether the zone currently is running the
     * latest ML model.
     */
    using_latest_model?: boolean;
  }

  export interface Esic0axpBmSubscriptionConfig {
    /**
     * Automatically update to the newest bot detection models created by Cloudflare as
     * they are released.
     * [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes)
     */
    auto_update_model?: boolean;

    /**
     * Use lightweight, invisible JavaScript detections to improve Bot Management.
     * [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).
     */
    enable_js?: boolean;

    /**
     * Whether to disable tracking the highest bot score for a session in the Bot
     * Management cookie.
     */
    suppress_session_score?: boolean;

    /**
     * A read-only field that indicates whether the zone currently is running the
     * latest ML model.
     */
    using_latest_model?: boolean;
  }
}

export interface BotManagementUpdateResponse {
  errors?: Array<BotManagementUpdateResponse.Error>;

  messages?: Array<BotManagementUpdateResponse.Message>;

  result?:
    | BotManagementUpdateResponse.Esic0axpBotFightModeConfig
    | BotManagementUpdateResponse.Esic0axpSbfmDefinitelyConfig
    | BotManagementUpdateResponse.Esic0axpSbfmLikelyConfig
    | BotManagementUpdateResponse.Esic0axpBmSubscriptionConfig;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace BotManagementUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Esic0axpBotFightModeConfig {
    /**
     * Use lightweight, invisible JavaScript detections to improve Bot Management.
     * [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).
     */
    enable_js?: boolean;

    /**
     * Whether to enable Bot Fight Mode.
     */
    fight_mode?: boolean;

    /**
     * A read-only field that indicates whether the zone currently is running the
     * latest ML model.
     */
    using_latest_model?: boolean;
  }

  export interface Esic0axpSbfmDefinitelyConfig {
    /**
     * Use lightweight, invisible JavaScript detections to improve Bot Management.
     * [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).
     */
    enable_js?: boolean;

    /**
     * Whether to optimize Super Bot Fight Mode protections for Wordpress.
     */
    optimize_wordpress?: boolean;

    /**
     * Super Bot Fight Mode (SBFM) action to take on definitely automated requests.
     */
    sbfm_definitely_automated?: 'allow' | 'block' | 'managed_challenge';

    /**
     * Super Bot Fight Mode (SBFM) to enable static resource protection. Enable if
     * static resources on your application need bot protection. Note: Static resource
     * protection can also result in legitimate traffic being blocked.
     */
    sbfm_static_resource_protection?: boolean;

    /**
     * Super Bot Fight Mode (SBFM) action to take on verified bots requests.
     */
    sbfm_verified_bots?: 'allow' | 'block';

    /**
     * A read-only field that indicates whether the zone currently is running the
     * latest ML model.
     */
    using_latest_model?: boolean;
  }

  export interface Esic0axpSbfmLikelyConfig {
    /**
     * Use lightweight, invisible JavaScript detections to improve Bot Management.
     * [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).
     */
    enable_js?: boolean;

    /**
     * Whether to optimize Super Bot Fight Mode protections for Wordpress.
     */
    optimize_wordpress?: boolean;

    /**
     * Super Bot Fight Mode (SBFM) action to take on definitely automated requests.
     */
    sbfm_definitely_automated?: 'allow' | 'block' | 'managed_challenge';

    /**
     * Super Bot Fight Mode (SBFM) action to take on likely automated requests.
     */
    sbfm_likely_automated?: 'allow' | 'block' | 'managed_challenge';

    /**
     * Super Bot Fight Mode (SBFM) to enable static resource protection. Enable if
     * static resources on your application need bot protection. Note: Static resource
     * protection can also result in legitimate traffic being blocked.
     */
    sbfm_static_resource_protection?: boolean;

    /**
     * Super Bot Fight Mode (SBFM) action to take on verified bots requests.
     */
    sbfm_verified_bots?: 'allow' | 'block';

    /**
     * A read-only field that indicates whether the zone currently is running the
     * latest ML model.
     */
    using_latest_model?: boolean;
  }

  export interface Esic0axpBmSubscriptionConfig {
    /**
     * Automatically update to the newest bot detection models created by Cloudflare as
     * they are released.
     * [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes)
     */
    auto_update_model?: boolean;

    /**
     * Use lightweight, invisible JavaScript detections to improve Bot Management.
     * [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).
     */
    enable_js?: boolean;

    /**
     * Whether to disable tracking the highest bot score for a session in the Bot
     * Management cookie.
     */
    suppress_session_score?: boolean;

    /**
     * A read-only field that indicates whether the zone currently is running the
     * latest ML model.
     */
    using_latest_model?: boolean;
  }
}

export interface BotManagementRetrieveParams {
  /**
   * Header used to control which version of the API to use. Note: Only the 2.0.0
   * version is documented. The older 1.0.0 version is deprecated and will soon be
   * removed.
   */
  'Cloudflare-Version'?: '2.0.0' | '1.0.0';
}

export type BotManagementUpdateParams =
  | BotManagementUpdateParams.Esic0axpBotFightModeConfig
  | BotManagementUpdateParams.Esic0axpSbfmDefinitelyConfig
  | BotManagementUpdateParams.Esic0axpSbfmLikelyConfig
  | BotManagementUpdateParams.Esic0axpBmSubscriptionConfig;

export namespace BotManagementUpdateParams {
  export interface Esic0axpBotFightModeConfig {
    /**
     * Body param: Use lightweight, invisible JavaScript detections to improve Bot
     * Management.
     * [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).
     */
    enable_js?: boolean;

    /**
     * Body param: Whether to enable Bot Fight Mode.
     */
    fight_mode?: boolean;

    /**
     * Header param: Header used to control which version of the API to use. Note: Only
     * the 2.0.0 version is documented. The older 1.0.0 version is deprecated and will
     * soon be removed.
     */
    'Cloudflare-Version'?: '2.0.0' | '1.0.0';
  }

  export interface Esic0axpSbfmDefinitelyConfig {
    /**
     * Body param: Use lightweight, invisible JavaScript detections to improve Bot
     * Management.
     * [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).
     */
    enable_js?: boolean;

    /**
     * Body param: Whether to optimize Super Bot Fight Mode protections for Wordpress.
     */
    optimize_wordpress?: boolean;

    /**
     * Body param: Super Bot Fight Mode (SBFM) action to take on definitely automated
     * requests.
     */
    sbfm_definitely_automated?: 'allow' | 'block' | 'managed_challenge';

    /**
     * Body param: Super Bot Fight Mode (SBFM) to enable static resource protection.
     * Enable if static resources on your application need bot protection. Note: Static
     * resource protection can also result in legitimate traffic being blocked.
     */
    sbfm_static_resource_protection?: boolean;

    /**
     * Body param: Super Bot Fight Mode (SBFM) action to take on verified bots
     * requests.
     */
    sbfm_verified_bots?: 'allow' | 'block';

    /**
     * Header param: Header used to control which version of the API to use. Note: Only
     * the 2.0.0 version is documented. The older 1.0.0 version is deprecated and will
     * soon be removed.
     */
    'Cloudflare-Version'?: '2.0.0' | '1.0.0';
  }

  export interface Esic0axpSbfmLikelyConfig {
    /**
     * Body param: Use lightweight, invisible JavaScript detections to improve Bot
     * Management.
     * [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).
     */
    enable_js?: boolean;

    /**
     * Body param: Whether to optimize Super Bot Fight Mode protections for Wordpress.
     */
    optimize_wordpress?: boolean;

    /**
     * Body param: Super Bot Fight Mode (SBFM) action to take on definitely automated
     * requests.
     */
    sbfm_definitely_automated?: 'allow' | 'block' | 'managed_challenge';

    /**
     * Body param: Super Bot Fight Mode (SBFM) action to take on likely automated
     * requests.
     */
    sbfm_likely_automated?: 'allow' | 'block' | 'managed_challenge';

    /**
     * Body param: Super Bot Fight Mode (SBFM) to enable static resource protection.
     * Enable if static resources on your application need bot protection. Note: Static
     * resource protection can also result in legitimate traffic being blocked.
     */
    sbfm_static_resource_protection?: boolean;

    /**
     * Body param: Super Bot Fight Mode (SBFM) action to take on verified bots
     * requests.
     */
    sbfm_verified_bots?: 'allow' | 'block';

    /**
     * Header param: Header used to control which version of the API to use. Note: Only
     * the 2.0.0 version is documented. The older 1.0.0 version is deprecated and will
     * soon be removed.
     */
    'Cloudflare-Version'?: '2.0.0' | '1.0.0';
  }

  export interface Esic0axpBmSubscriptionConfig {
    /**
     * Body param: Automatically update to the newest bot detection models created by
     * Cloudflare as they are released.
     * [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes)
     */
    auto_update_model?: boolean;

    /**
     * Body param: Use lightweight, invisible JavaScript detections to improve Bot
     * Management.
     * [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).
     */
    enable_js?: boolean;

    /**
     * Body param: Whether to disable tracking the highest bot score for a session in
     * the Bot Management cookie.
     */
    suppress_session_score?: boolean;

    /**
     * Header param: Header used to control which version of the API to use. Note: Only
     * the 2.0.0 version is documented. The older 1.0.0 version is deprecated and will
     * soon be removed.
     */
    'Cloudflare-Version'?: '2.0.0' | '1.0.0';
  }
}

export namespace BotManagement {
  export import BotManagementRetrieveResponse = BotManagementAPI.BotManagementRetrieveResponse;
  export import BotManagementUpdateResponse = BotManagementAPI.BotManagementUpdateResponse;
  export import BotManagementRetrieveParams = BotManagementAPI.BotManagementRetrieveParams;
  export import BotManagementUpdateParams = BotManagementAPI.BotManagementUpdateParams;
}
