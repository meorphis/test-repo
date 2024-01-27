// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RecommendationsAPI from 'cloudflare/resources/zones/ssls/recommendations';

export class Recommendations extends APIResource {
  /**
   * Retrieve the SSL/TLS Recommender's recommendation for a zone.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<RecommendationListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/ssl/recommendation`, options);
  }
}

export interface RecommendationListResponse {
  errors?: Array<RecommendationListResponse.Error>;

  messages?: Array<RecommendationListResponse.Message>;

  result?: RecommendationListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RecommendationListResponse {
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
     * Identifier of a recommedation result.
     */
    id?: string;

    modified_on?: string;

    value?: 'flexible' | 'full' | 'strict';
  }
}

export namespace Recommendations {
  export import RecommendationListResponse = RecommendationsAPI.RecommendationListResponse;
}
