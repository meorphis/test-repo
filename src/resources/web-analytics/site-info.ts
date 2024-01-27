// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as SiteInfoAPI from 'cloudflare/resources/web-analytics/site-info';
import { Page } from 'cloudflare/pagination';

export class SiteInfo extends APIResource {
  /**
   * Retrieves a Web Analytics site.
   */
  retrieve(
    accountIdentifier: string,
    siteIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SiteInfoRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/rum/site_info/${siteIdentifier}`, options);
  }

  /**
   * Updates an existing Web Analytics site.
   */
  update(
    accountIdentifier: string,
    siteIdentifier: string,
    body: SiteInfoUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SiteInfoUpdateResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/rum/site_info/${siteIdentifier}`, {
      body,
      ...options,
    });
  }

  /**
   * Lists all Web Analytics sites of an account.
   */
  list(
    accountIdentifier: string,
    query?: SiteInfoListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SiteInfoListResponsesPage, SiteInfoListResponse>;
  list(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SiteInfoListResponsesPage, SiteInfoListResponse>;
  list(
    accountIdentifier: string,
    query: SiteInfoListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<SiteInfoListResponsesPage, SiteInfoListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/accounts/${accountIdentifier}/rum/site_info/list`,
      SiteInfoListResponsesPage,
      { query, ...options },
    );
  }

  /**
   * Deletes an existing Web Analytics site.
   */
  delete(
    accountIdentifier: string,
    siteIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SiteInfoDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/rum/site_info/${siteIdentifier}`, options);
  }
}

export class SiteInfoListResponsesPage extends Page<SiteInfoListResponse> {}

export interface SiteInfoRetrieveResponse {
  errors?: Array<SiteInfoRetrieveResponse.Error>;

  messages?: Array<SiteInfoRetrieveResponse.Message>;

  result?: SiteInfoRetrieveResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: boolean;
}

export namespace SiteInfoRetrieveResponse {
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

export interface SiteInfoUpdateResponse {
  errors?: Array<SiteInfoUpdateResponse.Error>;

  messages?: Array<SiteInfoUpdateResponse.Message>;

  result?: SiteInfoUpdateResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: boolean;
}

export namespace SiteInfoUpdateResponse {
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

export interface SiteInfoListResponse {
  /**
   * If enabled, the JavaScript snippet is automatically injected for orange-clouded
   * sites.
   */
  auto_install?: boolean;

  created?: string;

  /**
   * A list of rules.
   */
  rules?: Array<SiteInfoListResponse.Rule>;

  ruleset?: SiteInfoListResponse.Ruleset;

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

export namespace SiteInfoListResponse {
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

export interface SiteInfoDeleteResponse {
  errors?: Array<SiteInfoDeleteResponse.Error>;

  messages?: Array<SiteInfoDeleteResponse.Message>;

  result?: SiteInfoDeleteResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: boolean;
}

export namespace SiteInfoDeleteResponse {
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
     * The Web Analytics site identifier.
     */
    site_tag?: string;
  }
}

export interface SiteInfoUpdateParams {
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

export interface SiteInfoListParams {
  /**
   * The property used to sort the list of results.
   */
  order_by?: 'host' | 'created';

  /**
   * Current page within the paginated list of results.
   */
  page?: number;

  /**
   * Number of items to return per page of results.
   */
  per_page?: number;
}

export namespace SiteInfo {
  export import SiteInfoRetrieveResponse = SiteInfoAPI.SiteInfoRetrieveResponse;
  export import SiteInfoUpdateResponse = SiteInfoAPI.SiteInfoUpdateResponse;
  export import SiteInfoListResponse = SiteInfoAPI.SiteInfoListResponse;
  export import SiteInfoDeleteResponse = SiteInfoAPI.SiteInfoDeleteResponse;
  export import SiteInfoListResponsesPage = SiteInfoAPI.SiteInfoListResponsesPage;
  export import SiteInfoUpdateParams = SiteInfoAPI.SiteInfoUpdateParams;
  export import SiteInfoListParams = SiteInfoAPI.SiteInfoListParams;
}
