// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as PackagesAPI from 'cloudflare/resources/zones/firewalls/wafs/packages/packages';
import * as GroupsAPI from 'cloudflare/resources/zones/firewalls/wafs/packages/groups';
import * as RulesAPI from 'cloudflare/resources/zones/firewalls/wafs/packages/rules';

export class Packages extends APIResource {
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);

  /**
   * Fetches the details of a WAF package.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  retrieve(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PackageRetrieveResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/firewall/waf/packages/${identifier}`, options);
  }

  /**
   * Updates a WAF package. You can update the sensitivity and the action of an
   * anomaly detection WAF package.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  update(
    zoneIdentifier: string,
    identifier: string,
    body: PackageUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PackageUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/firewall/waf/packages/${identifier}`, {
      body,
      ...options,
    });
  }

  /**
   * Fetches WAF packages for a zone.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  wafPackagesListWafPackages(
    zoneIdentifier: string,
    query?: PackageWafPackagesListWafPackagesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PackageWafPackagesListWafPackagesResponse>;
  wafPackagesListWafPackages(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PackageWafPackagesListWafPackagesResponse>;
  wafPackagesListWafPackages(
    zoneIdentifier: string,
    query: PackageWafPackagesListWafPackagesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PackageWafPackagesListWafPackagesResponse> {
    if (isRequestOptions(query)) {
      return this.wafPackagesListWafPackages(zoneIdentifier, {}, query);
    }
    return this._client.get(`/zones/${zoneIdentifier}/firewall/waf/packages`, { query, ...options });
  }
}

export type PackageRetrieveResponse =
  | PackageRetrieveResponse.DZw70ubTAPIResponseSingle
  | PackageRetrieveResponse.Result;

export namespace PackageRetrieveResponse {
  export interface DZw70ubTAPIResponseSingle {
    errors?: Array<DZw70ubTAPIResponseSingle.Error>;

    messages?: Array<DZw70ubTAPIResponseSingle.Message>;

    result?: unknown | string | null;

    /**
     * Whether the API call was successful
     */
    success?: true;
  }

  export namespace DZw70ubTAPIResponseSingle {
    export interface Error {
      code: number;

      message: string;
    }

    export interface Message {
      code: number;

      message: string;
    }
  }

  export interface Result {
    result?: unknown;
  }
}

export interface PackageUpdateResponse {
  result?: PackageUpdateResponse.Result;
}

export namespace PackageUpdateResponse {
  export interface Result {
    /**
     * The unique identifier of a WAF package.
     */
    id: string;

    /**
     * The default action performed by the rules in the WAF package.
     */
    action_mode: 'simulate' | 'block' | 'challenge';

    /**
     * A summary of the purpose/function of the WAF package.
     */
    description: string;

    /**
     * When a WAF package uses anomaly detection, each rule is given a score when
     * triggered. If the total score of all triggered rules exceeds the sensitivity
     * defined on the WAF package, the action defined on the package will be taken.
     */
    detection_mode: string;

    /**
     * The name of the WAF package.
     */
    name: string;

    /**
     * The sensitivity of the WAF package.
     */
    sensitivity: 'high' | 'medium' | 'low' | 'off';

    /**
     * Identifier
     */
    zone_id: string;

    /**
     * When set to `active`, indicates that the WAF package will be applied to the
     * zone.
     */
    status?: 'active';
  }
}

export type PackageWafPackagesListWafPackagesResponse =
  | PackageWafPackagesListWafPackagesResponse.DZw70ubTAPIResponseCollection
  | PackageWafPackagesListWafPackagesResponse.Result;

export namespace PackageWafPackagesListWafPackagesResponse {
  export interface DZw70ubTAPIResponseCollection {
    errors?: Array<DZw70ubTAPIResponseCollection.Error>;

    messages?: Array<DZw70ubTAPIResponseCollection.Message>;

    result?: Array<unknown> | null;

    result_info?: DZw70ubTAPIResponseCollection.ResultInfo;

    /**
     * Whether the API call was successful
     */
    success?: true;
  }

  export namespace DZw70ubTAPIResponseCollection {
    export interface Error {
      code: number;

      message: string;
    }

    export interface Message {
      code: number;

      message: string;
    }

    export interface ResultInfo {
      /**
       * Total number of results for the requested service
       */
      count?: number;

      /**
       * Current page within paginated list of results
       */
      page?: number;

      /**
       * Number of results per page of results
       */
      per_page?: number;

      /**
       * Total results available without any search parameters
       */
      total_count?: number;
    }
  }

  export interface Result {
    result?: Array<Result.DZw70ubTPackageDefinition | Result.DZw70ubTAnomalyPackage>;
  }

  export namespace Result {
    export interface DZw70ubTPackageDefinition {
      /**
       * The unique identifier of a WAF package.
       */
      id: string;

      /**
       * A summary of the purpose/function of the WAF package.
       */
      description: string;

      /**
       * The mode that defines how rules within the package are evaluated during the
       * course of a request. When a package uses anomaly detection mode (`anomaly`
       * value), each rule is given a score when triggered. If the total score of all
       * triggered rules exceeds the sensitivity defined in the WAF package, the action
       * configured in the package will be performed. Traditional detection mode
       * (`traditional` value) will decide the action to take when it is triggered by the
       * request. If multiple rules are triggered, the action providing the highest
       * protection will be applied (for example, a 'block' action will win over a
       * 'challenge' action).
       */
      detection_mode: 'anomaly' | 'traditional';

      /**
       * The name of the WAF package.
       */
      name: string;

      /**
       * Identifier
       */
      zone_id: string;

      /**
       * When set to `active`, indicates that the WAF package will be applied to the
       * zone.
       */
      status?: 'active';
    }

    export interface DZw70ubTAnomalyPackage {
      /**
       * The unique identifier of a WAF package.
       */
      id: string;

      /**
       * The default action performed by the rules in the WAF package.
       */
      action_mode: 'simulate' | 'block' | 'challenge';

      /**
       * A summary of the purpose/function of the WAF package.
       */
      description: string;

      /**
       * When a WAF package uses anomaly detection, each rule is given a score when
       * triggered. If the total score of all triggered rules exceeds the sensitivity
       * defined on the WAF package, the action defined on the package will be taken.
       */
      detection_mode: string;

      /**
       * The name of the WAF package.
       */
      name: string;

      /**
       * The sensitivity of the WAF package.
       */
      sensitivity: 'high' | 'medium' | 'low' | 'off';

      /**
       * Identifier
       */
      zone_id: string;

      /**
       * When set to `active`, indicates that the WAF package will be applied to the
       * zone.
       */
      status?: 'active';
    }
  }
}

export interface PackageUpdateParams {
  /**
   * The default action performed by the rules in the WAF package.
   */
  action_mode?: 'simulate' | 'block' | 'challenge';

  /**
   * The sensitivity of the WAF package.
   */
  sensitivity?: 'high' | 'medium' | 'low' | 'off';
}

export interface PackageWafPackagesListWafPackagesParams {
  /**
   * The direction used to sort returned packages.
   */
  direction?: 'asc' | 'desc';

  /**
   * When set to `all`, all the search requirements must match. When set to `any`,
   * only one of the search requirements has to match.
   */
  match?: 'any' | 'all';

  /**
   * The field used to sort returned packages.
   */
  order?: 'name';

  /**
   * The page number of paginated results.
   */
  page?: number;

  /**
   * The number of packages per page.
   */
  per_page?: number;
}

export namespace Packages {
  export import PackageRetrieveResponse = PackagesAPI.PackageRetrieveResponse;
  export import PackageUpdateResponse = PackagesAPI.PackageUpdateResponse;
  export import PackageWafPackagesListWafPackagesResponse = PackagesAPI.PackageWafPackagesListWafPackagesResponse;
  export import PackageUpdateParams = PackagesAPI.PackageUpdateParams;
  export import PackageWafPackagesListWafPackagesParams = PackagesAPI.PackageWafPackagesListWafPackagesParams;
  export import Groups = GroupsAPI.Groups;
  export import GroupRetrieveResponse = GroupsAPI.GroupRetrieveResponse;
  export import GroupUpdateResponse = GroupsAPI.GroupUpdateResponse;
  export import GroupWafRuleGroupsListWafRuleGroupsResponse = GroupsAPI.GroupWafRuleGroupsListWafRuleGroupsResponse;
  export import GroupWafRuleGroupsListWafRuleGroupsResponsesPage = GroupsAPI.GroupWafRuleGroupsListWafRuleGroupsResponsesPage;
  export import GroupUpdateParams = GroupsAPI.GroupUpdateParams;
  export import GroupWafRuleGroupsListWafRuleGroupsParams = GroupsAPI.GroupWafRuleGroupsListWafRuleGroupsParams;
  export import Rules = RulesAPI.Rules;
  export import RuleRetrieveResponse = RulesAPI.RuleRetrieveResponse;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleWafRulesListWafRulesResponse = RulesAPI.RuleWafRulesListWafRulesResponse;
  export import RuleWafRulesListWafRulesResponsesPage = RulesAPI.RuleWafRulesListWafRulesResponsesPage;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleWafRulesListWafRulesParams = RulesAPI.RuleWafRulesListWafRulesParams;
}
