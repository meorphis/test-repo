// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as VersionsAPI from 'cloudflare/resources/zones/rulesets/versions';

export class Versions extends APIResource {
  /**
   * Fetches a specific version of a zone ruleset.
   */
  retrieve(
    zoneId: string,
    rulesetId: string,
    rulesetVersion: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionRetrieveResponse> {
    return this._client.get(`/zones/${zoneId}/rulesets/${rulesetId}/versions/${rulesetVersion}`, options);
  }

  /**
   * Deletes an existing version of a zone ruleset.
   */
  delete(
    zoneId: string,
    rulesetId: string,
    rulesetVersion: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.delete(`/zones/${zoneId}/rulesets/${rulesetId}/versions/${rulesetVersion}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Fetches the versions of a zone ruleset.
   */
  zoneRulesetsListAZoneRulesetSVersions(
    zoneId: string,
    rulesetId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionZoneRulesetsListAZoneRulesetSVersionsResponse> {
    return this._client.get(`/zones/${zoneId}/rulesets/${rulesetId}/versions`, options);
  }
}

export interface VersionRetrieveResponse {
  errors?: unknown;

  /**
   * A list of warning messages.
   */
  messages?: Array<VersionRetrieveResponse.Message>;

  result?: VersionRetrieveResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace VersionRetrieveResponse {
  /**
   * A message.
   */
  export interface Message {
    /**
     * A text description of this message.
     */
    message: string;

    /**
     * A unique code for this message.
     */
    code?: number;

    /**
     * The source of this message.
     */
    source?: Message.Source;
  }

  export namespace Message {
    /**
     * The source of this message.
     */
    export interface Source {
      /**
       * A JSON pointer to the field that is the source of the message.
       */
      pointer: string;
    }
  }

  export interface Result {
    id?: unknown;

    /**
     * An informative description of the ruleset.
     */
    description?: string;

    /**
     * The kind of the ruleset.
     */
    kind?: 'managed' | 'custom' | 'root' | 'zone';

    /**
     * The timestamp of when the ruleset was last modified.
     */
    last_updated?: string;

    /**
     * The human-readable name of the ruleset.
     */
    name?: string;

    /**
     * The phase of the ruleset.
     */
    phase?:
      | 'ddos_l4'
      | 'ddos_l7'
      | 'http_config_settings'
      | 'http_custom_errors'
      | 'http_log_custom_fields'
      | 'http_ratelimit'
      | 'http_request_cache_settings'
      | 'http_request_dynamic_redirect'
      | 'http_request_firewall_custom'
      | 'http_request_firewall_managed'
      | 'http_request_late_transform'
      | 'http_request_origin'
      | 'http_request_redirect'
      | 'http_request_sanitize'
      | 'http_request_sbfm'
      | 'http_request_select_configuration'
      | 'http_request_transform'
      | 'http_response_compression'
      | 'http_response_firewall_managed'
      | 'http_response_headers_transform'
      | 'magic_transit'
      | 'magic_transit_ids_managed'
      | 'magic_transit_managed';

    /**
     * The list of rules in the ruleset.
     */
    rules?: Array<unknown>;

    /**
     * The version of the ruleset.
     */
    version?: string;
  }
}

export interface VersionZoneRulesetsListAZoneRulesetSVersionsResponse {
  errors?: unknown;

  /**
   * A list of warning messages.
   */
  messages?: Array<VersionZoneRulesetsListAZoneRulesetSVersionsResponse.Message>;

  /**
   * A list of rulesets. The returned information will not include the rules in each
   * ruleset.
   */
  result?: Array<VersionZoneRulesetsListAZoneRulesetSVersionsResponse.Result>;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace VersionZoneRulesetsListAZoneRulesetSVersionsResponse {
  /**
   * A message.
   */
  export interface Message {
    /**
     * A text description of this message.
     */
    message: string;

    /**
     * A unique code for this message.
     */
    code?: number;

    /**
     * The source of this message.
     */
    source?: Message.Source;
  }

  export namespace Message {
    /**
     * The source of this message.
     */
    export interface Source {
      /**
       * A JSON pointer to the field that is the source of the message.
       */
      pointer: string;
    }
  }

  export interface Result {
    id?: unknown;

    /**
     * An informative description of the ruleset.
     */
    description?: string;

    /**
     * The kind of the ruleset.
     */
    kind?: 'managed' | 'custom' | 'root' | 'zone';

    /**
     * The timestamp of when the ruleset was last modified.
     */
    last_updated?: string;

    /**
     * The human-readable name of the ruleset.
     */
    name?: string;

    /**
     * The phase of the ruleset.
     */
    phase?:
      | 'ddos_l4'
      | 'ddos_l7'
      | 'http_config_settings'
      | 'http_custom_errors'
      | 'http_log_custom_fields'
      | 'http_ratelimit'
      | 'http_request_cache_settings'
      | 'http_request_dynamic_redirect'
      | 'http_request_firewall_custom'
      | 'http_request_firewall_managed'
      | 'http_request_late_transform'
      | 'http_request_origin'
      | 'http_request_redirect'
      | 'http_request_sanitize'
      | 'http_request_sbfm'
      | 'http_request_select_configuration'
      | 'http_request_transform'
      | 'http_response_compression'
      | 'http_response_firewall_managed'
      | 'http_response_headers_transform'
      | 'magic_transit'
      | 'magic_transit_ids_managed'
      | 'magic_transit_managed';

    /**
     * The version of the ruleset.
     */
    version?: string;
  }
}

export namespace Versions {
  export import VersionRetrieveResponse = VersionsAPI.VersionRetrieveResponse;
  export import VersionZoneRulesetsListAZoneRulesetSVersionsResponse = VersionsAPI.VersionZoneRulesetsListAZoneRulesetSVersionsResponse;
}
