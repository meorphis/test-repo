// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AdvertisementsAPI from 'cloudflare/resources/accounts/mnms/rules/advertisements';

export class Advertisements extends APIResource {
  /**
   * Update advertisement for rule.
   */
  magicNetworkMonitoringRulesUpdateAdvertisementForRule(
    accountIdentifier: unknown,
    ruleIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdvertisementMagicNetworkMonitoringRulesUpdateAdvertisementForRuleResponse> {
    return this._client.patch(
      `/accounts/${accountIdentifier}/mnm/rules/${ruleIdentifier}/advertisement`,
      options,
    );
  }
}

export interface AdvertisementMagicNetworkMonitoringRulesUpdateAdvertisementForRuleResponse {
  errors?: Array<AdvertisementMagicNetworkMonitoringRulesUpdateAdvertisementForRuleResponse.Error>;

  messages?: Array<AdvertisementMagicNetworkMonitoringRulesUpdateAdvertisementForRuleResponse.Message>;

  result?: AdvertisementMagicNetworkMonitoringRulesUpdateAdvertisementForRuleResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AdvertisementMagicNetworkMonitoringRulesUpdateAdvertisementForRuleResponse {
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
     * Toggle on if you would like Cloudflare to automatically advertise the IP
     * Prefixes within the rule via Magic Transit when the rule is triggered. Only
     * available for users of Magic Transit.
     */
    automatic_advertisement: boolean | null;
  }
}

export namespace Advertisements {
  export import AdvertisementMagicNetworkMonitoringRulesUpdateAdvertisementForRuleResponse = AdvertisementsAPI.AdvertisementMagicNetworkMonitoringRulesUpdateAdvertisementForRuleResponse;
}
