// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as WidgetsAPI from 'cloudflare/resources/accounts/challenges/widgets';
import { Page } from 'cloudflare/pagination';

export class Widgets extends APIResource {
  /**
   * Lists challenge widgets.
   */
  create(
    accountIdentifier: string,
    params: WidgetCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WidgetCreateResponse> {
    const { direction, order, page, per_page, ...body } = params;
    return this._client.post(`/accounts/${accountIdentifier}/challenges/widgets`, {
      query: { direction, order, page, per_page },
      body,
      ...options,
    });
  }

  /**
   * Show a single challenge widget configuration.
   */
  retrieve(
    accountIdentifier: string,
    sitekey: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WidgetRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/challenges/widgets/${sitekey}`, options);
  }

  /**
   * Update the configuration of a widget.
   */
  update(
    accountIdentifier: string,
    sitekey: string,
    body: WidgetUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WidgetUpdateResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/challenges/widgets/${sitekey}`, {
      body,
      ...options,
    });
  }

  /**
   * Lists all turnstile widgets of an account.
   */
  list(
    accountIdentifier: string,
    query?: WidgetListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<WidgetListResponsesPage, WidgetListResponse>;
  list(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<WidgetListResponsesPage, WidgetListResponse>;
  list(
    accountIdentifier: string,
    query: WidgetListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<WidgetListResponsesPage, WidgetListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/accounts/${accountIdentifier}/challenges/widgets`,
      WidgetListResponsesPage,
      { query, ...options },
    );
  }

  /**
   * Destroy a Turnstile Widget.
   */
  delete(
    accountIdentifier: string,
    sitekey: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WidgetDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/challenges/widgets/${sitekey}`, options);
  }

  /**
   * Generate a new secret key for this widget. If `invalidate_immediately` is set to
   * `false`, the previous secret remains valid for 2 hours.
   *
   * Note that secrets cannot be rotated again during the grace period.
   */
  rotateSecret(
    accountIdentifier: string,
    sitekey: string,
    body: WidgetRotateSecretParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WidgetRotateSecretResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/challenges/widgets/${sitekey}/rotate_secret`, {
      body,
      ...options,
    });
  }
}

export class WidgetListResponsesPage extends Page<WidgetListResponse> {}

export interface WidgetCreateResponse {
  errors?: Array<WidgetCreateResponse.Error>;

  messages?: Array<WidgetCreateResponse.Message>;

  /**
   * A Turnstile widget's detailed configuration
   */
  result?: WidgetCreateResponse.Result;

  result_info?: WidgetCreateResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace WidgetCreateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * A Turnstile widget's detailed configuration
   */
  export interface Result {
    /**
     * If bot_fight_mode is set to `true`, Cloudflare issues computationally expensive
     * challenges in response to malicious bots (ENT only).
     */
    bot_fight_mode: boolean;

    /**
     * If Turnstile is embedded on a Cloudflare site and the widget should grant
     * challenge clearance, this setting can determine the clearance level to be set
     */
    clearance_level: 'no_clearance' | 'jschallenge' | 'managed' | 'interactive';

    /**
     * When the widget was created.
     */
    created_on: string;

    domains: Array<string>;

    /**
     * Widget Mode
     */
    mode: 'non-interactive' | 'invisible' | 'managed';

    /**
     * When the widget was modified.
     */
    modified_on: string;

    /**
     * Human readable widget name. Not unique. Cloudflare suggests that you set this to
     * a meaningful string to make it easier to identify your widget, and where it is
     * used.
     */
    name: string;

    /**
     * Do not show any Cloudflare branding on the widget (ENT only).
     */
    offlabel: boolean;

    /**
     * Region where this widget can be used.
     */
    region: 'world';

    /**
     * Secret key for this widget.
     */
    secret: string;

    /**
     * Widget item identifier tag.
     */
    sitekey: string;
  }

  export interface ResultInfo {
    /**
     * Total number of results for the requested service
     */
    count: number;

    /**
     * Current page within paginated list of results
     */
    page: number;

    /**
     * Number of results per page of results
     */
    per_page: number;

    /**
     * Total results available without any search parameters
     */
    total_count: number;
  }
}

export interface WidgetRetrieveResponse {
  errors?: Array<WidgetRetrieveResponse.Error>;

  messages?: Array<WidgetRetrieveResponse.Message>;

  /**
   * A Turnstile widget's detailed configuration
   */
  result?: WidgetRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace WidgetRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * A Turnstile widget's detailed configuration
   */
  export interface Result {
    /**
     * If bot_fight_mode is set to `true`, Cloudflare issues computationally expensive
     * challenges in response to malicious bots (ENT only).
     */
    bot_fight_mode: boolean;

    /**
     * If Turnstile is embedded on a Cloudflare site and the widget should grant
     * challenge clearance, this setting can determine the clearance level to be set
     */
    clearance_level: 'no_clearance' | 'jschallenge' | 'managed' | 'interactive';

    /**
     * When the widget was created.
     */
    created_on: string;

    domains: Array<string>;

    /**
     * Widget Mode
     */
    mode: 'non-interactive' | 'invisible' | 'managed';

    /**
     * When the widget was modified.
     */
    modified_on: string;

    /**
     * Human readable widget name. Not unique. Cloudflare suggests that you set this to
     * a meaningful string to make it easier to identify your widget, and where it is
     * used.
     */
    name: string;

    /**
     * Do not show any Cloudflare branding on the widget (ENT only).
     */
    offlabel: boolean;

    /**
     * Region where this widget can be used.
     */
    region: 'world';

    /**
     * Secret key for this widget.
     */
    secret: string;

    /**
     * Widget item identifier tag.
     */
    sitekey: string;
  }
}

export interface WidgetUpdateResponse {
  errors?: Array<WidgetUpdateResponse.Error>;

  messages?: Array<WidgetUpdateResponse.Message>;

  /**
   * A Turnstile widget's detailed configuration
   */
  result?: WidgetUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace WidgetUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * A Turnstile widget's detailed configuration
   */
  export interface Result {
    /**
     * If bot_fight_mode is set to `true`, Cloudflare issues computationally expensive
     * challenges in response to malicious bots (ENT only).
     */
    bot_fight_mode: boolean;

    /**
     * If Turnstile is embedded on a Cloudflare site and the widget should grant
     * challenge clearance, this setting can determine the clearance level to be set
     */
    clearance_level: 'no_clearance' | 'jschallenge' | 'managed' | 'interactive';

    /**
     * When the widget was created.
     */
    created_on: string;

    domains: Array<string>;

    /**
     * Widget Mode
     */
    mode: 'non-interactive' | 'invisible' | 'managed';

    /**
     * When the widget was modified.
     */
    modified_on: string;

    /**
     * Human readable widget name. Not unique. Cloudflare suggests that you set this to
     * a meaningful string to make it easier to identify your widget, and where it is
     * used.
     */
    name: string;

    /**
     * Do not show any Cloudflare branding on the widget (ENT only).
     */
    offlabel: boolean;

    /**
     * Region where this widget can be used.
     */
    region: 'world';

    /**
     * Secret key for this widget.
     */
    secret: string;

    /**
     * Widget item identifier tag.
     */
    sitekey: string;
  }
}

/**
 * A Turnstile Widgets configuration as it appears in listings
 */
export interface WidgetListResponse {
  /**
   * If bot_fight_mode is set to `true`, Cloudflare issues computationally expensive
   * challenges in response to malicious bots (ENT only).
   */
  bot_fight_mode: boolean;

  /**
   * If Turnstile is embedded on a Cloudflare site and the widget should grant
   * challenge clearance, this setting can determine the clearance level to be set
   */
  clearance_level: 'no_clearance' | 'jschallenge' | 'managed' | 'interactive';

  /**
   * When the widget was created.
   */
  created_on: string;

  domains: Array<string>;

  /**
   * Widget Mode
   */
  mode: 'non-interactive' | 'invisible' | 'managed';

  /**
   * When the widget was modified.
   */
  modified_on: string;

  /**
   * Human readable widget name. Not unique. Cloudflare suggests that you set this to
   * a meaningful string to make it easier to identify your widget, and where it is
   * used.
   */
  name: string;

  /**
   * Do not show any Cloudflare branding on the widget (ENT only).
   */
  offlabel: boolean;

  /**
   * Region where this widget can be used.
   */
  region: 'world';

  /**
   * Widget item identifier tag.
   */
  sitekey: string;
}

export interface WidgetDeleteResponse {
  errors?: Array<WidgetDeleteResponse.Error>;

  messages?: Array<WidgetDeleteResponse.Message>;

  /**
   * A Turnstile widget's detailed configuration
   */
  result?: WidgetDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace WidgetDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * A Turnstile widget's detailed configuration
   */
  export interface Result {
    /**
     * If bot_fight_mode is set to `true`, Cloudflare issues computationally expensive
     * challenges in response to malicious bots (ENT only).
     */
    bot_fight_mode: boolean;

    /**
     * If Turnstile is embedded on a Cloudflare site and the widget should grant
     * challenge clearance, this setting can determine the clearance level to be set
     */
    clearance_level: 'no_clearance' | 'jschallenge' | 'managed' | 'interactive';

    /**
     * When the widget was created.
     */
    created_on: string;

    domains: Array<string>;

    /**
     * Widget Mode
     */
    mode: 'non-interactive' | 'invisible' | 'managed';

    /**
     * When the widget was modified.
     */
    modified_on: string;

    /**
     * Human readable widget name. Not unique. Cloudflare suggests that you set this to
     * a meaningful string to make it easier to identify your widget, and where it is
     * used.
     */
    name: string;

    /**
     * Do not show any Cloudflare branding on the widget (ENT only).
     */
    offlabel: boolean;

    /**
     * Region where this widget can be used.
     */
    region: 'world';

    /**
     * Secret key for this widget.
     */
    secret: string;

    /**
     * Widget item identifier tag.
     */
    sitekey: string;
  }
}

export interface WidgetRotateSecretResponse {
  errors?: Array<WidgetRotateSecretResponse.Error>;

  messages?: Array<WidgetRotateSecretResponse.Message>;

  /**
   * A Turnstile widget's detailed configuration
   */
  result?: WidgetRotateSecretResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace WidgetRotateSecretResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * A Turnstile widget's detailed configuration
   */
  export interface Result {
    /**
     * If bot_fight_mode is set to `true`, Cloudflare issues computationally expensive
     * challenges in response to malicious bots (ENT only).
     */
    bot_fight_mode: boolean;

    /**
     * If Turnstile is embedded on a Cloudflare site and the widget should grant
     * challenge clearance, this setting can determine the clearance level to be set
     */
    clearance_level: 'no_clearance' | 'jschallenge' | 'managed' | 'interactive';

    /**
     * When the widget was created.
     */
    created_on: string;

    domains: Array<string>;

    /**
     * Widget Mode
     */
    mode: 'non-interactive' | 'invisible' | 'managed';

    /**
     * When the widget was modified.
     */
    modified_on: string;

    /**
     * Human readable widget name. Not unique. Cloudflare suggests that you set this to
     * a meaningful string to make it easier to identify your widget, and where it is
     * used.
     */
    name: string;

    /**
     * Do not show any Cloudflare branding on the widget (ENT only).
     */
    offlabel: boolean;

    /**
     * Region where this widget can be used.
     */
    region: 'world';

    /**
     * Secret key for this widget.
     */
    secret: string;

    /**
     * Widget item identifier tag.
     */
    sitekey: string;
  }
}

export interface WidgetCreateParams {
  /**
   * Body param:
   */
  domains: Array<string>;

  /**
   * Body param: Widget Mode
   */
  mode: 'non-interactive' | 'invisible' | 'managed';

  /**
   * Body param: Human readable widget name. Not unique. Cloudflare suggests that you
   * set this to a meaningful string to make it easier to identify your widget, and
   * where it is used.
   */
  name: string;

  /**
   * Query param: Direction to order widgets.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Field to order widgets by.
   */
  order?: 'id' | 'sitekey' | 'name' | 'created_on' | 'modified_on';

  /**
   * Query param: Page number of paginated results.
   */
  page?: number;

  /**
   * Query param: Number of items per page.
   */
  per_page?: number;

  /**
   * Body param: If bot_fight_mode is set to `true`, Cloudflare issues
   * computationally expensive challenges in response to malicious bots (ENT only).
   */
  bot_fight_mode?: boolean;

  /**
   * Body param: If Turnstile is embedded on a Cloudflare site and the widget should
   * grant challenge clearance, this setting can determine the clearance level to be
   * set
   */
  clearance_level?: 'no_clearance' | 'jschallenge' | 'managed' | 'interactive';

  /**
   * Body param: Do not show any Cloudflare branding on the widget (ENT only).
   */
  offlabel?: boolean;

  /**
   * Body param: Region where this widget can be used.
   */
  region?: 'world';
}

export interface WidgetUpdateParams {
  domains: Array<string>;

  /**
   * Widget Mode
   */
  mode: 'non-interactive' | 'invisible' | 'managed';

  /**
   * Human readable widget name. Not unique. Cloudflare suggests that you set this to
   * a meaningful string to make it easier to identify your widget, and where it is
   * used.
   */
  name: string;

  /**
   * If bot_fight_mode is set to `true`, Cloudflare issues computationally expensive
   * challenges in response to malicious bots (ENT only).
   */
  bot_fight_mode?: boolean;

  /**
   * If Turnstile is embedded on a Cloudflare site and the widget should grant
   * challenge clearance, this setting can determine the clearance level to be set
   */
  clearance_level?: 'no_clearance' | 'jschallenge' | 'managed' | 'interactive';

  /**
   * Do not show any Cloudflare branding on the widget (ENT only).
   */
  offlabel?: boolean;
}

export interface WidgetListParams {
  /**
   * Direction to order widgets.
   */
  direction?: 'asc' | 'desc';

  /**
   * Field to order widgets by.
   */
  order?: 'id' | 'sitekey' | 'name' | 'created_on' | 'modified_on';

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Number of items per page.
   */
  per_page?: number;
}

export interface WidgetRotateSecretParams {
  /**
   * If `invalidate_immediately` is set to `false`, the previous secret will remain
   * valid for two hours. Otherwise, the secret is immediately invalidated, and
   * requests using it will be rejected.
   */
  invalidate_immediately?: boolean;
}

export namespace Widgets {
  export import WidgetCreateResponse = WidgetsAPI.WidgetCreateResponse;
  export import WidgetRetrieveResponse = WidgetsAPI.WidgetRetrieveResponse;
  export import WidgetUpdateResponse = WidgetsAPI.WidgetUpdateResponse;
  export import WidgetListResponse = WidgetsAPI.WidgetListResponse;
  export import WidgetDeleteResponse = WidgetsAPI.WidgetDeleteResponse;
  export import WidgetRotateSecretResponse = WidgetsAPI.WidgetRotateSecretResponse;
  export import WidgetListResponsesPage = WidgetsAPI.WidgetListResponsesPage;
  export import WidgetCreateParams = WidgetsAPI.WidgetCreateParams;
  export import WidgetUpdateParams = WidgetsAPI.WidgetUpdateParams;
  export import WidgetListParams = WidgetsAPI.WidgetListParams;
  export import WidgetRotateSecretParams = WidgetsAPI.WidgetRotateSecretParams;
}
