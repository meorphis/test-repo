// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PagesProjectsAPI from 'cloudflare/resources/accounts/pages-projects';

export class PagesProjects extends APIResource {
  /**
   * Purge all cached build artifacts for a Pages project
   */
  purgeBuildCache(
    accountIdentifier: string,
    projectName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.post(
      `/accounts/${accountIdentifier}/pages/projects/${projectName}/purge_build_cache`,
      options,
    );
  }
}

export type PagesProjectPurgeBuildCacheResponse = unknown;

export namespace PagesProjects {
  export import PagesProjectPurgeBuildCacheResponse = PagesProjectsAPI.PagesProjectPurgeBuildCacheResponse;
}
