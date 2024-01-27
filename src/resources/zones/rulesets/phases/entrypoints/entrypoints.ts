// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as EntrypointsAPI from 'cloudflare/resources/zones/rulesets/phases/entrypoints/entrypoints';
import * as VersionsAPI from 'cloudflare/resources/zones/rulesets/phases/entrypoints/versions';

export class Entrypoints extends APIResource {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Fetches the latest version of the zone entry point ruleset for a given phase.
   */
  transformRulesListTransformRules(
    zoneId: string,
    rulesetPhase:
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
      | 'magic_transit_managed',
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntrypointTransformRulesListTransformRulesResponse> {
    return this._client.get(`/zones/${zoneId}/rulesets/phases/${rulesetPhase}/entrypoint`, options);
  }

  /**
   * Updates a zone entry point ruleset, creating a new version.
   */
  transformRulesUpdateTransformRules(
    zoneId: string,
    rulesetPhase:
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
      | 'magic_transit_managed',
    body: EntrypointTransformRulesUpdateTransformRulesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntrypointTransformRulesUpdateTransformRulesResponse> {
    return this._client.put(`/zones/${zoneId}/rulesets/phases/${rulesetPhase}/entrypoint`, {
      body,
      ...options,
    });
  }
}

export interface EntrypointTransformRulesListTransformRulesResponse {
  errors?: unknown;

  /**
   * A list of warning messages.
   */
  messages?: Array<EntrypointTransformRulesListTransformRulesResponse.Message>;

  result?: EntrypointTransformRulesListTransformRulesResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace EntrypointTransformRulesListTransformRulesResponse {
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

export interface EntrypointTransformRulesUpdateTransformRulesResponse {
  errors?: unknown;

  /**
   * A list of warning messages.
   */
  messages?: Array<EntrypointTransformRulesUpdateTransformRulesResponse.Message>;

  result?: EntrypointTransformRulesUpdateTransformRulesResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace EntrypointTransformRulesUpdateTransformRulesResponse {
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

export interface EntrypointTransformRulesUpdateTransformRulesParams {
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
  rules?: Array<
    | EntrypointTransformRulesUpdateTransformRulesParams.OexZd8xKBlockRule
    | EntrypointTransformRulesUpdateTransformRulesParams.OexZd8xKExecuteRule
    | EntrypointTransformRulesUpdateTransformRulesParams.OexZd8xKLogRule
    | EntrypointTransformRulesUpdateTransformRulesParams.OexZd8xKSkipRule
  >;
}

export namespace EntrypointTransformRulesUpdateTransformRulesParams {
  export interface OexZd8xKBlockRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    action?: 'block';

    action_parameters?: OexZd8xKBlockRule.ActionParameters;

    description?: unknown;

    enabled?: unknown;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: OexZd8xKBlockRule.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace OexZd8xKBlockRule {
    export interface ActionParameters {
      /**
       * The response to show when the block is applied.
       */
      response?: ActionParameters.Response;
    }

    export namespace ActionParameters {
      /**
       * The response to show when the block is applied.
       */
      export interface Response {
        /**
         * The content to return.
         */
        content: string;

        /**
         * The type of the content to return.
         */
        content_type: string;

        /**
         * The status code to return.
         */
        status_code: number;
      }
    }

    /**
     * An object configuring the rule's logging behavior.
     */
    export interface Logging {
      /**
       * Whether to generate a log when the rule matches.
       */
      enabled: boolean;
    }
  }

  export interface OexZd8xKExecuteRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    action?: 'execute';

    action_parameters?: OexZd8xKExecuteRule.ActionParameters;

    description?: unknown;

    enabled?: unknown;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: OexZd8xKExecuteRule.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace OexZd8xKExecuteRule {
    export interface ActionParameters {
      id: unknown;

      /**
       * The configuration to use for matched data logging.
       */
      matched_data?: ActionParameters.MatchedData;

      /**
       * A set of overrides to apply to the target ruleset.
       */
      overrides?: ActionParameters.Overrides;
    }

    export namespace ActionParameters {
      /**
       * The configuration to use for matched data logging.
       */
      export interface MatchedData {
        /**
         * The public key to encrypt matched data logs with.
         */
        public_key: string;
      }

      /**
       * A set of overrides to apply to the target ruleset.
       */
      export interface Overrides {
        action?: unknown;

        /**
         * A list of category-level overrides. This option has the second-highest
         * precedence after rule-level overrides.
         */
        categories?: Array<Overrides.Category>;

        enabled?: unknown;

        /**
         * A list of rule-level overrides. This option has the highest precedence.
         */
        rules?: Array<Overrides.Rule>;

        sensitivity_level?: unknown;
      }

      export namespace Overrides {
        /**
         * A category-level override
         */
        export interface Category {
          category: unknown;

          action?: unknown;

          enabled?: unknown;

          sensitivity_level?: unknown;
        }

        /**
         * A rule-level override
         */
        export interface Rule {
          id: unknown;

          action?: unknown;

          enabled?: unknown;

          /**
           * The score threshold to use for the rule.
           */
          score_threshold?: number;

          sensitivity_level?: unknown;
        }
      }
    }

    /**
     * An object configuring the rule's logging behavior.
     */
    export interface Logging {
      /**
       * Whether to generate a log when the rule matches.
       */
      enabled: boolean;
    }
  }

  export interface OexZd8xKLogRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    action?: 'log';

    action_parameters?: unknown;

    description?: unknown;

    enabled?: unknown;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: OexZd8xKLogRule.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace OexZd8xKLogRule {
    /**
     * An object configuring the rule's logging behavior.
     */
    export interface Logging {
      /**
       * Whether to generate a log when the rule matches.
       */
      enabled: boolean;
    }
  }

  export interface OexZd8xKSkipRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    action?: 'skip';

    action_parameters?: OexZd8xKSkipRule.ActionParameters;

    description?: unknown;

    enabled?: unknown;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: OexZd8xKSkipRule.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace OexZd8xKSkipRule {
    export interface ActionParameters {
      /**
       * A list of phases to skip the execution of. This option is incompatible with the
       * ruleset and rulesets options.
       */
      phases?: Array<unknown>;

      /**
       * A list of legacy security products to skip the execution of.
       */
      products?: Array<'bic' | 'hot' | 'rateLimit' | 'securityLevel' | 'uaBlock' | 'waf' | 'zoneLockdown'>;

      /**
       * A mapping of ruleset IDs to a list of rule IDs in that ruleset to skip the
       * execution of. This option is incompatible with the ruleset option.
       */
      rules?: unknown;

      /**
       * A ruleset to skip the execution of. This option is incompatible with the
       * rulesets, rules and phases options.
       */
      ruleset?: 'current';

      /**
       * A list of ruleset IDs to skip the execution of. This option is incompatible with
       * the ruleset and phases options.
       */
      rulesets?: Array<unknown>;
    }

    /**
     * An object configuring the rule's logging behavior.
     */
    export interface Logging {
      /**
       * Whether to generate a log when the rule matches.
       */
      enabled: boolean;
    }
  }
}

export namespace Entrypoints {
  export import EntrypointTransformRulesListTransformRulesResponse = EntrypointsAPI.EntrypointTransformRulesListTransformRulesResponse;
  export import EntrypointTransformRulesUpdateTransformRulesResponse = EntrypointsAPI.EntrypointTransformRulesUpdateTransformRulesResponse;
  export import EntrypointTransformRulesUpdateTransformRulesParams = EntrypointsAPI.EntrypointTransformRulesUpdateTransformRulesParams;
  export import Versions = VersionsAPI.Versions;
  export import VersionRetrieveResponse = VersionsAPI.VersionRetrieveResponse;
  export import VersionZoneRulesetsListAZoneEntryPointRulesetSVersionsResponse = VersionsAPI.VersionZoneRulesetsListAZoneEntryPointRulesetSVersionsResponse;
}
