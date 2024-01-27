// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as GroupsAPI from 'cloudflare/resources/zones/firewalls/wafs/packages/groups';
import { Page } from 'cloudflare/pagination';

export class Groups extends APIResource {
  /**
   * Fetches the details of a WAF rule group.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  retrieve(
    zoneIdentifier: string,
    packageIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupRetrieveResponse> {
    return this._client.get(
      `/zones/${zoneIdentifier}/firewall/waf/packages/${packageIdentifier}/groups/${identifier}`,
      options,
    );
  }

  /**
   * Updates a WAF rule group. You can update the state (`mode` parameter) of a rule
   * group.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  update(
    zoneIdentifier: string,
    packageIdentifier: string,
    identifier: string,
    body: GroupUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupUpdateResponse> {
    return this._client.patch(
      `/zones/${zoneIdentifier}/firewall/waf/packages/${packageIdentifier}/groups/${identifier}`,
      { body, ...options },
    );
  }

  /**
   * Fetches the WAF rule groups in a WAF package.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  wafRuleGroupsListWafRuleGroups(
    zoneIdentifier: string,
    packageIdentifier: string,
    query?: GroupWafRuleGroupsListWafRuleGroupsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    GroupWafRuleGroupsListWafRuleGroupsResponsesPage,
    GroupWafRuleGroupsListWafRuleGroupsResponse
  >;
  wafRuleGroupsListWafRuleGroups(
    zoneIdentifier: string,
    packageIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    GroupWafRuleGroupsListWafRuleGroupsResponsesPage,
    GroupWafRuleGroupsListWafRuleGroupsResponse
  >;
  wafRuleGroupsListWafRuleGroups(
    zoneIdentifier: string,
    packageIdentifier: string,
    query: GroupWafRuleGroupsListWafRuleGroupsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    GroupWafRuleGroupsListWafRuleGroupsResponsesPage,
    GroupWafRuleGroupsListWafRuleGroupsResponse
  > {
    if (isRequestOptions(query)) {
      return this.wafRuleGroupsListWafRuleGroups(zoneIdentifier, packageIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneIdentifier}/firewall/waf/packages/${packageIdentifier}/groups`,
      GroupWafRuleGroupsListWafRuleGroupsResponsesPage,
      { query, ...options },
    );
  }
}

export class GroupWafRuleGroupsListWafRuleGroupsResponsesPage extends Page<GroupWafRuleGroupsListWafRuleGroupsResponse> {}

export interface GroupRetrieveResponse {
  errors?: Array<GroupRetrieveResponse.Error>;

  messages?: Array<GroupRetrieveResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace GroupRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface GroupUpdateResponse {
  errors?: Array<GroupUpdateResponse.Error>;

  messages?: Array<GroupUpdateResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace GroupUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface GroupWafRuleGroupsListWafRuleGroupsResponse {
  /**
   * The unique identifier of the rule group.
   */
  id: string;

  /**
   * An informative summary of what the rule group does.
   */
  description: string | null;

  /**
   * The state of the rules contained in the rule group. When `on`, the rules in the
   * group are configurable/usable.
   */
  mode: 'on' | 'off';

  /**
   * The name of the rule group.
   */
  name: string;

  /**
   * The number of rules in the current rule group.
   */
  rules_count: number;

  /**
   * The available states for the rule group.
   */
  allowed_modes?: Array<'on' | 'off'>;

  /**
   * The number of rules within the group that have been modified from their default
   * configuration.
   */
  modified_rules_count?: number;

  /**
   * The unique identifier of a WAF package.
   */
  package_id?: string;
}

export interface GroupUpdateParams {
  /**
   * The state of the rules contained in the rule group. When `on`, the rules in the
   * group are configurable/usable.
   */
  mode?: 'on' | 'off';
}

export interface GroupWafRuleGroupsListWafRuleGroupsParams {
  /**
   * The direction used to sort returned rule groups.
   */
  direction?: 'asc' | 'desc';

  /**
   * When set to `all`, all the search requirements must match. When set to `any`,
   * only one of the search requirements has to match.
   */
  match?: 'any' | 'all';

  /**
   * The state of the rules contained in the rule group. When `on`, the rules in the
   * group are configurable/usable.
   */
  mode?: 'on' | 'off';

  /**
   * The field used to sort returned rule groups.
   */
  order?: 'mode' | 'rules_count';

  /**
   * The page number of paginated results.
   */
  page?: number;

  /**
   * The number of rule groups per page.
   */
  per_page?: number;
}

export namespace Groups {
  export import GroupRetrieveResponse = GroupsAPI.GroupRetrieveResponse;
  export import GroupUpdateResponse = GroupsAPI.GroupUpdateResponse;
  export import GroupWafRuleGroupsListWafRuleGroupsResponse = GroupsAPI.GroupWafRuleGroupsListWafRuleGroupsResponse;
  export import GroupWafRuleGroupsListWafRuleGroupsResponsesPage = GroupsAPI.GroupWafRuleGroupsListWafRuleGroupsResponsesPage;
  export import GroupUpdateParams = GroupsAPI.GroupUpdateParams;
  export import GroupWafRuleGroupsListWafRuleGroupsParams = GroupsAPI.GroupWafRuleGroupsListWafRuleGroupsParams;
}
