// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TagsAPI from 'cloudflare/resources/accounts/access/tags';

export class Tags extends APIResource {
  /**
   * Create a tag
   */
  createTag(
    identifier: string,
    body: TagCreateTagParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TagCreateTagResponse> {
    return this._client.post(`/accounts/${identifier}/access/tags`, { body, ...options });
  }

  /**
   * Delete a tag
   */
  deleteTag(
    identifier: string,
    name: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TagDeleteTagResponse> {
    return this._client.delete(`/accounts/${identifier}/access/tags/${name}`, options);
  }

  /**
   * Get a tag
   */
  getTag(
    identifier: string,
    name: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TagGetTagResponse> {
    return this._client.get(`/accounts/${identifier}/access/tags/${name}`, options);
  }

  /**
   * List tags
   */
  listTags(identifier: string, options?: Core.RequestOptions): Core.APIPromise<TagListTagsResponse> {
    return this._client.get(`/accounts/${identifier}/access/tags`, options);
  }

  /**
   * Update a tag
   */
  updateTag(
    identifier: string,
    params: TagUpdateTagParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TagUpdateTagResponse> {
    const { path_name, body_name, ...body } = params;
    return this._client.put(`/accounts/${identifier}/access/tags/${path_name}`, {
      body: { name: body_name, ...body },
      ...options,
    });
  }
}

export interface TagCreateTagResponse {
  errors?: Array<TagCreateTagResponse.Error>;

  messages?: Array<TagCreateTagResponse.Message>;

  /**
   * A tag
   */
  result?: TagCreateTagResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TagCreateTagResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * A tag
   */
  export interface Result {
    /**
     * The name of the tag
     */
    name: string;

    /**
     * The number of applications that have this tag
     */
    app_count?: number;

    created_at?: string;

    updated_at?: string;
  }
}

export interface TagDeleteTagResponse {
  errors?: Array<TagDeleteTagResponse.Error>;

  messages?: Array<TagDeleteTagResponse.Message>;

  result?: TagDeleteTagResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TagDeleteTagResponse {
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
     * The name of the tag
     */
    name?: string;
  }
}

export interface TagGetTagResponse {
  errors?: Array<TagGetTagResponse.Error>;

  messages?: Array<TagGetTagResponse.Message>;

  /**
   * A tag
   */
  result?: TagGetTagResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TagGetTagResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * A tag
   */
  export interface Result {
    /**
     * The name of the tag
     */
    name: string;

    /**
     * The number of applications that have this tag
     */
    app_count?: number;

    created_at?: string;

    updated_at?: string;
  }
}

export interface TagListTagsResponse {
  errors?: Array<TagListTagsResponse.Error>;

  messages?: Array<TagListTagsResponse.Message>;

  result?: Array<TagListTagsResponse.Result>;

  result_info?: TagListTagsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TagListTagsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * A tag
   */
  export interface Result {
    /**
     * The name of the tag
     */
    name: string;

    /**
     * The number of applications that have this tag
     */
    app_count?: number;

    created_at?: string;

    updated_at?: string;
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

export interface TagUpdateTagResponse {
  errors?: Array<TagUpdateTagResponse.Error>;

  messages?: Array<TagUpdateTagResponse.Message>;

  /**
   * A tag
   */
  result?: TagUpdateTagResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TagUpdateTagResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * A tag
   */
  export interface Result {
    /**
     * The name of the tag
     */
    name: string;

    /**
     * The number of applications that have this tag
     */
    app_count?: number;

    created_at?: string;

    updated_at?: string;
  }
}

export interface TagCreateTagParams {
  /**
   * The name of the tag
   */
  name: string;
}

export interface TagUpdateTagParams {
  /**
   * Path param: The name of the tag
   */
  path_name: string;

  /**
   * Body param: The name of the tag
   */
  body_name: string;
}

export namespace Tags {
  export import TagCreateTagResponse = TagsAPI.TagCreateTagResponse;
  export import TagDeleteTagResponse = TagsAPI.TagDeleteTagResponse;
  export import TagGetTagResponse = TagsAPI.TagGetTagResponse;
  export import TagListTagsResponse = TagsAPI.TagListTagsResponse;
  export import TagUpdateTagResponse = TagsAPI.TagUpdateTagResponse;
  export import TagCreateTagParams = TagsAPI.TagCreateTagParams;
  export import TagUpdateTagParams = TagsAPI.TagUpdateTagParams;
}
