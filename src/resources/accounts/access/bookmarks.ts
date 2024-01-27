// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BookmarksAPI from 'cloudflare/resources/accounts/access/bookmarks';

export class Bookmarks extends APIResource {
  /**
   * Create a new Bookmark application.
   */
  create(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BookmarkCreateResponse> {
    return this._client.post(`/accounts/${identifier}/access/bookmarks/${uuid}`, options);
  }

  /**
   * Fetches a single Bookmark application.
   */
  retrieve(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BookmarkRetrieveResponse> {
    return this._client.get(`/accounts/${identifier}/access/bookmarks/${uuid}`, options);
  }

  /**
   * Updates a configured Bookmark application.
   */
  update(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BookmarkUpdateResponse> {
    return this._client.put(`/accounts/${identifier}/access/bookmarks/${uuid}`, options);
  }

  /**
   * Deletes a Bookmark application.
   */
  delete(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BookmarkDeleteResponse> {
    return this._client.delete(`/accounts/${identifier}/access/bookmarks/${uuid}`, options);
  }

  /**
   * Lists Bookmark applications.
   */
  accessBookmarkApplicationsDeprecatedListBookmarkApplications(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponse> {
    return this._client.get(`/accounts/${identifier}/access/bookmarks`, options);
  }
}

export interface BookmarkCreateResponse {
  errors?: Array<BookmarkCreateResponse.Error>;

  messages?: Array<BookmarkCreateResponse.Message>;

  result?: BookmarkCreateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace BookmarkCreateResponse {
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
     * The unique identifier for the Bookmark application.
     */
    id?: unknown;

    /**
     * Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    created_at?: string;

    /**
     * The domain of the Bookmark application.
     */
    domain?: string;

    /**
     * The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * The name of the Bookmark application.
     */
    name?: string;

    updated_at?: string;
  }
}

export interface BookmarkRetrieveResponse {
  errors?: Array<BookmarkRetrieveResponse.Error>;

  messages?: Array<BookmarkRetrieveResponse.Message>;

  result?: BookmarkRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace BookmarkRetrieveResponse {
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
     * The unique identifier for the Bookmark application.
     */
    id?: unknown;

    /**
     * Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    created_at?: string;

    /**
     * The domain of the Bookmark application.
     */
    domain?: string;

    /**
     * The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * The name of the Bookmark application.
     */
    name?: string;

    updated_at?: string;
  }
}

export interface BookmarkUpdateResponse {
  errors?: Array<BookmarkUpdateResponse.Error>;

  messages?: Array<BookmarkUpdateResponse.Message>;

  result?: BookmarkUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace BookmarkUpdateResponse {
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
     * The unique identifier for the Bookmark application.
     */
    id?: unknown;

    /**
     * Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    created_at?: string;

    /**
     * The domain of the Bookmark application.
     */
    domain?: string;

    /**
     * The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * The name of the Bookmark application.
     */
    name?: string;

    updated_at?: string;
  }
}

export interface BookmarkDeleteResponse {
  errors?: Array<BookmarkDeleteResponse.Error>;

  messages?: Array<BookmarkDeleteResponse.Message>;

  result?: BookmarkDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace BookmarkDeleteResponse {
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
     * UUID
     */
    id?: string;
  }
}

export interface BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponse {
  errors?: Array<BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponse.Error>;

  messages?: Array<BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponse.Message>;

  result?: Array<BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponse.Result>;

  result_info?: BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponse {
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
     * The unique identifier for the Bookmark application.
     */
    id?: unknown;

    /**
     * Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    created_at?: string;

    /**
     * The domain of the Bookmark application.
     */
    domain?: string;

    /**
     * The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * The name of the Bookmark application.
     */
    name?: string;

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

export namespace Bookmarks {
  export import BookmarkCreateResponse = BookmarksAPI.BookmarkCreateResponse;
  export import BookmarkRetrieveResponse = BookmarksAPI.BookmarkRetrieveResponse;
  export import BookmarkUpdateResponse = BookmarksAPI.BookmarkUpdateResponse;
  export import BookmarkDeleteResponse = BookmarksAPI.BookmarkDeleteResponse;
  export import BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponse = BookmarksAPI.BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponse;
}
