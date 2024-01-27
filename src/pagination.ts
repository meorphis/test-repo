// File generated from our OpenAPI spec by Stainless.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface PageResponse<Item> {
  result: Array<Item>;

  result_info: PageResponse.ResultInfo;
}

export namespace PageResponse {
  export interface ResultInfo {
    count?: unknown;

    page?: unknown;

    per_page?: unknown;

    total_count?: unknown;
  }
}

export interface PageParams {
  page?: number;
}

export class Page<Item> extends AbstractPage<Item> implements PageResponse<Item> {
  result: Array<Item>;

  result_info: PageResponse.ResultInfo;

  constructor(client: APIClient, response: Response, body: PageResponse<Item>, options: FinalRequestOptions) {
    super(client, response, body, options);

    this.result = body.result || [];
    this.result_info = body.result_info || {};
  }

  getPaginatedItems(): Item[] {
    return this.result ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const query = this.options.query as PageParams;
    const currentPage = query?.page ?? 1;

    return { params: { page: currentPage + 1 } };
  }
}
