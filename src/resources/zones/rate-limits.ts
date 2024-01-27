// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as RateLimitsAPI from 'cloudflare/resources/zones/rate-limits';
import { Page } from 'cloudflare/pagination';

export class RateLimits extends APIResource {
  /**
   * Creates a new rate limit for a zone. Refer to the object definition for a list
   * of required attributes.
   */
  create(
    zoneIdentifier: string,
    body: RateLimitCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RateLimitCreateResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/rate_limits`, { body, ...options });
  }

  /**
   * Fetches the details of a rate limit.
   */
  retrieve(
    zoneIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RateLimitRetrieveResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/rate_limits/${id}`, options);
  }

  /**
   * Updates an existing rate limit.
   */
  update(
    zoneIdentifier: string,
    id: string,
    body: RateLimitUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RateLimitUpdateResponse> {
    return this._client.put(`/zones/${zoneIdentifier}/rate_limits/${id}`, { body, ...options });
  }

  /**
   * Fetches the rate limits for a zone.
   */
  list(
    zoneIdentifier: string,
    query?: RateLimitListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RateLimitListResponsesPage, RateLimitListResponse>;
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RateLimitListResponsesPage, RateLimitListResponse>;
  list(
    zoneIdentifier: string,
    query: RateLimitListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<RateLimitListResponsesPage, RateLimitListResponse> {
    if (isRequestOptions(query)) {
      return this.list(zoneIdentifier, {}, query);
    }
    return this._client.getAPIList(`/zones/${zoneIdentifier}/rate_limits`, RateLimitListResponsesPage, {
      query,
      ...options,
    });
  }

  /**
   * Deletes an existing rate limit.
   */
  delete(
    zoneIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RateLimitDeleteResponse> {
    return this._client.delete(`/zones/${zoneIdentifier}/rate_limits/${id}`, options);
  }
}

export class RateLimitListResponsesPage extends Page<RateLimitListResponse> {}

export interface RateLimitCreateResponse {
  errors?: Array<RateLimitCreateResponse.Error>;

  messages?: Array<RateLimitCreateResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RateLimitCreateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface RateLimitRetrieveResponse {
  errors?: Array<RateLimitRetrieveResponse.Error>;

  messages?: Array<RateLimitRetrieveResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RateLimitRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface RateLimitUpdateResponse {
  errors?: Array<RateLimitUpdateResponse.Error>;

  messages?: Array<RateLimitUpdateResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RateLimitUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface RateLimitListResponse {
  /**
   * The unique identifier of the rate limit.
   */
  id?: string;

  /**
   * The action to perform when the threshold of matched traffic within the
   * configured period is exceeded.
   */
  action?: RateLimitListResponse.Action;

  /**
   * Criteria specifying when the current rate limit should be bypassed. You can
   * specify that the rate limit should not apply to one or more URLs.
   */
  bypass?: Array<RateLimitListResponse.Bypass>;

  /**
   * An informative summary of the rate limit. This value is sanitized and any tags
   * will be removed.
   */
  description?: string;

  /**
   * When true, indicates that the rate limit is currently disabled.
   */
  disabled?: boolean;

  /**
   * Determines which traffic the rate limit counts towards the threshold.
   */
  match?: RateLimitListResponse.Match;

  /**
   * The time in seconds (an integer value) to count matching traffic. If the count
   * exceeds the configured threshold within this period, Cloudflare will perform the
   * configured action.
   */
  period?: number;

  /**
   * The threshold that will trigger the configured mitigation action. Configure this
   * value along with the `period` property to establish a threshold per period.
   */
  threshold?: number;
}

export namespace RateLimitListResponse {
  /**
   * The action to perform when the threshold of matched traffic within the
   * configured period is exceeded.
   */
  export interface Action {
    /**
     * The action to perform.
     */
    mode?: 'simulate' | 'ban' | 'challenge' | 'js_challenge' | 'managed_challenge';

    /**
     * A custom content type and reponse to return when the threshold is exceeded. The
     * custom response configured in this object will override the custom error for the
     * zone. This object is optional. Notes: If you omit this object, Cloudflare will
     * use the default HTML error page. If "mode" is "challenge", "managed_challenge",
     * or "js_challenge", Cloudflare will use the zone challenge pages and you should
     * not provide the "response" object.
     */
    response?: Action.Response;

    /**
     * The time in seconds during which Cloudflare will perform the mitigation action.
     * Must be an integer value greater than or equal to the period. Notes: If "mode"
     * is "challenge", "managed_challenge", or "js_challenge", Cloudflare will use the
     * zone's Challenge Passage time and you should not provide this value.
     */
    timeout?: number;
  }

  export namespace Action {
    /**
     * A custom content type and reponse to return when the threshold is exceeded. The
     * custom response configured in this object will override the custom error for the
     * zone. This object is optional. Notes: If you omit this object, Cloudflare will
     * use the default HTML error page. If "mode" is "challenge", "managed_challenge",
     * or "js_challenge", Cloudflare will use the zone challenge pages and you should
     * not provide the "response" object.
     */
    export interface Response {
      /**
       * The response body to return. The value must conform to the configured content
       * type.
       */
      body?: string;

      /**
       * The content type of the body. Must be one of the following: `text/plain`,
       * `text/xml`, or `application/json`.
       */
      content_type?: string;
    }
  }

  export interface Bypass {
    name?: 'url';

    /**
     * The URL to bypass.
     */
    value?: string;
  }

  /**
   * Determines which traffic the rate limit counts towards the threshold.
   */
  export interface Match {
    headers?: Array<Match.Header>;

    request?: Match.Request;

    response?: Match.Response;
  }

  export namespace Match {
    export interface Header {
      /**
       * The name of the response header to match.
       */
      name?: string;

      /**
       * The operator used when matching: `eq` means "equal" and `ne` means "not equal".
       */
      op?: 'eq' | 'ne';

      /**
       * The value of the response header, which must match exactly.
       */
      value?: string;
    }

    export interface Request {
      /**
       * The HTTP methods to match. You can specify a subset (for example,
       * `['POST','PUT']`) or all methods (`['_ALL_']`). This field is optional when
       * creating a rate limit.
       */
      methods?: Array<'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | '_ALL_'>;

      /**
       * The HTTP schemes to match. You can specify one scheme (`['HTTPS']`), both
       * schemes (`['HTTP','HTTPS']`), or all schemes (`['_ALL_']`). This field is
       * optional.
       */
      schemes?: Array<string>;

      /**
       * The URL pattern to match, composed of a host and a path such as
       * `example.org/path*`. Normalization is applied before the pattern is matched. `*`
       * wildcards are expanded to match applicable traffic. Query strings are not
       * matched. Set the value to `*` to match all traffic to your zone.
       */
      url?: string;
    }

    export interface Response {
      /**
       * When true, only the uncached traffic served from your origin servers will count
       * towards rate limiting. In this case, any cached traffic served by Cloudflare
       * will not count towards rate limiting. This field is optional. Notes: This field
       * is deprecated. Instead, use response headers and set "origin_traffic" to "false"
       * to avoid legacy behaviour interacting with the "response_headers" property.
       */
      origin_traffic?: boolean;
    }
  }
}

export interface RateLimitDeleteResponse {
  errors?: Array<RateLimitDeleteResponse.Error>;

  messages?: Array<RateLimitDeleteResponse.Message>;

  result?: RateLimitDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RateLimitDeleteResponse {
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
     * The unique identifier of the rate limit.
     */
    id?: string;
  }
}

export type RateLimitCreateParams = unknown;

export type RateLimitUpdateParams = unknown;

export interface RateLimitListParams {
  /**
   * The page number of paginated results.
   */
  page?: number;

  /**
   * The maximum number of results per page. You can only set the value to `1` or to
   * a multiple of 5 such as `5`, `10`, `15`, or `20`.
   */
  per_page?: number;
}

export namespace RateLimits {
  export import RateLimitCreateResponse = RateLimitsAPI.RateLimitCreateResponse;
  export import RateLimitRetrieveResponse = RateLimitsAPI.RateLimitRetrieveResponse;
  export import RateLimitUpdateResponse = RateLimitsAPI.RateLimitUpdateResponse;
  export import RateLimitListResponse = RateLimitsAPI.RateLimitListResponse;
  export import RateLimitDeleteResponse = RateLimitsAPI.RateLimitDeleteResponse;
  export import RateLimitListResponsesPage = RateLimitsAPI.RateLimitListResponsesPage;
  export import RateLimitCreateParams = RateLimitsAPI.RateLimitCreateParams;
  export import RateLimitUpdateParams = RateLimitsAPI.RateLimitUpdateParams;
  export import RateLimitListParams = RateLimitsAPI.RateLimitListParams;
}
