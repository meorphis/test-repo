// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SslRecommendersAPI from 'cloudflare/resources/zones/settings/ssl-recommenders';

export class SslRecommenders extends APIResource {
  /**
   * Enrollment in the SSL/TLS Recommender service which tries to detect and
   * recommend (by sending periodic emails) the most secure SSL/TLS setting your
   * origin servers support.
   */
  update(
    zoneIdentifier: string,
    body: SslRecommenderUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SslRecommenderUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/ssl_recommender`, { body, ...options });
  }

  /**
   * Enrollment in the SSL/TLS Recommender service which tries to detect and
   * recommend (by sending periodic emails) the most secure SSL/TLS setting your
   * origin servers support.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<SslRecommenderListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/ssl_recommender`, options);
  }
}

export interface SslRecommenderUpdateResponse {
  errors?: Array<SslRecommenderUpdateResponse.Error>;

  messages?: Array<SslRecommenderUpdateResponse.Message>;

  result?: SslRecommenderUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace SslRecommenderUpdateResponse {
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
     * Enrollment value for SSL/TLS Recommender.
     */
    id?: 'ssl_recommender';

    /**
     * ssl-recommender enrollment setting.
     */
    enabled?: boolean;
  }
}

export interface SslRecommenderListResponse {
  errors?: Array<SslRecommenderListResponse.Error>;

  messages?: Array<SslRecommenderListResponse.Message>;

  result?: SslRecommenderListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace SslRecommenderListResponse {
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
     * Enrollment value for SSL/TLS Recommender.
     */
    id?: 'ssl_recommender';

    /**
     * ssl-recommender enrollment setting.
     */
    enabled?: boolean;
  }
}

export interface SslRecommenderUpdateParams {
  value: SslRecommenderUpdateParams.Value;
}

export namespace SslRecommenderUpdateParams {
  export interface Value {
    /**
     * Enrollment value for SSL/TLS Recommender.
     */
    id?: 'ssl_recommender';

    /**
     * ssl-recommender enrollment setting.
     */
    enabled?: boolean;
  }
}

export namespace SslRecommenders {
  export import SslRecommenderUpdateResponse = SslRecommendersAPI.SslRecommenderUpdateResponse;
  export import SslRecommenderListResponse = SslRecommendersAPI.SslRecommenderListResponse;
  export import SslRecommenderUpdateParams = SslRecommendersAPI.SslRecommenderUpdateParams;
}
