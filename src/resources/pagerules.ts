// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PagerulesAPI from 'cloudflare/resources/pagerules';
import * as PagerulesPagerulesAPI from 'cloudflare/resources/zones/pagerules/pagerules';

export class Pagerules extends APIResource {
  /**
   * Updates one or more fields of an existing Page Rule.
   */
  update(
    zoneIdentifier: string,
    identifier: string,
    body: PageruleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PagerulesPagerulesAPI.PageruleResponseSingle> {
    return this._client.patch(`/zones/${zoneIdentifier}/pagerules/${identifier}`, { body, ...options });
  }
}

export interface PageruleUpdateParams {
  /**
   * The set of actions to perform if the targets of this rule match the request.
   * Actions can redirect to another URL or override settings, but not both.
   */
  actions?: Array<PageruleUpdateParams.Action>;

  /**
   * The priority of the rule, used to define which Page Rule is processed over
   * another. A higher number indicates a higher priority. For example, if you have a
   * catch-all Page Rule (rule A: `/images/*`) but want a more specific Page Rule to
   * take precedence (rule B: `/images/special/*`), specify a higher priority for
   * rule B so it overrides rule A.
   */
  priority?: number;

  /**
   * The status of the Page Rule.
   */
  status?: 'active' | 'disabled';

  /**
   * The rule targets to evaluate on each request.
   */
  targets?: Array<PageruleUpdateParams.Target>;
}

export namespace PageruleUpdateParams {
  export interface Action {
    /**
     * The type of route.
     */
    name?: 'forward_url';

    value?: Action.Value;
  }

  export namespace Action {
    export interface Value {
      /**
       * The response type for the URL redirect.
       */
      type?: 'temporary' | 'permanent';

      /**
       * The URL to redirect the request to. Notes: ${num} refers to the position of '\*'
       * in the constraint value.
       */
      url?: string;
    }
  }

  /**
   * A request condition target.
   */
  export interface Target {
    /**
     * The constraint of a target.
     */
    constraint: Target.Constraint;

    /**
     * A target based on the URL of the request.
     */
    target: 'url';
  }

  export namespace Target {
    /**
     * The constraint of a target.
     */
    export interface Constraint {
      /**
       * The matches operator can use asterisks and pipes as wildcard and 'or' operators.
       */
      operator?: 'matches' | 'contains' | 'equals' | 'not_equal' | 'not_contain';

      /**
       * The URL pattern to match against the current request. The pattern may contain up
       * to four asterisks ('\*') as placeholders.
       */
      value?: string;
    }
  }
}

export namespace Pagerules {
  export import PageruleUpdateParams = PagerulesAPI.PageruleUpdateParams;
}
