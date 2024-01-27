// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ServerSideExcludesAPI from 'cloudflare/resources/zones/settings/server-side-excludes';

export class ServerSideExcludes extends APIResource {
  /**
   * If there is sensitive content on your website that you want visible to real
   * visitors, but that you want to hide from suspicious visitors, all you have to do
   * is wrap the content with Cloudflare SSE tags. Wrap any content that you want to
   * be excluded from suspicious visitors in the following SSE tags:
   * <!--sse--><!--/sse-->. For example: <!--sse--> Bad visitors won't see my phone
   * number, 555-555-5555 <!--/sse-->. Note: SSE only will work with HTML. If you
   * have HTML minification enabled, you won't see the SSE tags in your HTML source
   * when it's served through Cloudflare. SSE will still function in this case, as
   * Cloudflare's HTML minification and SSE functionality occur on-the-fly as the
   * resource moves through our network to the visitor's computer.
   * (https://support.cloudflare.com/hc/en-us/articles/200170036).
   */
  update(
    zoneIdentifier: string,
    body: ServerSideExcludeUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServerSideExcludeUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/server_side_exclude`, { body, ...options });
  }

  /**
   * If there is sensitive content on your website that you want visible to real
   * visitors, but that you want to hide from suspicious visitors, all you have to do
   * is wrap the content with Cloudflare SSE tags. Wrap any content that you want to
   * be excluded from suspicious visitors in the following SSE tags:
   * <!--sse--><!--/sse-->. For example: <!--sse--> Bad visitors won't see my phone
   * number, 555-555-5555 <!--/sse-->. Note: SSE only will work with HTML. If you
   * have HTML minification enabled, you won't see the SSE tags in your HTML source
   * when it's served through Cloudflare. SSE will still function in this case, as
   * Cloudflare's HTML minification and SSE functionality occur on-the-fly as the
   * resource moves through our network to the visitor's computer.
   * (https://support.cloudflare.com/hc/en-us/articles/200170036).
   */
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServerSideExcludeListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/server_side_exclude`, options);
  }
}

export interface ServerSideExcludeUpdateResponse {
  errors?: Array<ServerSideExcludeUpdateResponse.Error>;

  messages?: Array<ServerSideExcludeUpdateResponse.Message>;

  /**
   * If there is sensitive content on your website that you want visible to real
   * visitors, but that you want to hide from suspicious visitors, all you have to do
   * is wrap the content with Cloudflare SSE tags. Wrap any content that you want to
   * be excluded from suspicious visitors in the following SSE tags:
   * <!--sse--><!--/sse-->. For example: <!--sse--> Bad visitors won't see my phone
   * number, 555-555-5555 <!--/sse-->. Note: SSE only will work with HTML. If you
   * have HTML minification enabled, you won't see the SSE tags in your HTML source
   * when it's served through Cloudflare. SSE will still function in this case, as
   * Cloudflare's HTML minification and SSE functionality occur on-the-fly as the
   * resource moves through our network to the visitor's computer.
   * (https://support.cloudflare.com/hc/en-us/articles/200170036).
   */
  result?: ServerSideExcludeUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace ServerSideExcludeUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * If there is sensitive content on your website that you want visible to real
   * visitors, but that you want to hide from suspicious visitors, all you have to do
   * is wrap the content with Cloudflare SSE tags. Wrap any content that you want to
   * be excluded from suspicious visitors in the following SSE tags:
   * <!--sse--><!--/sse-->. For example: <!--sse--> Bad visitors won't see my phone
   * number, 555-555-5555 <!--/sse-->. Note: SSE only will work with HTML. If you
   * have HTML minification enabled, you won't see the SSE tags in your HTML source
   * when it's served through Cloudflare. SSE will still function in this case, as
   * Cloudflare's HTML minification and SSE functionality occur on-the-fly as the
   * resource moves through our network to the visitor's computer.
   * (https://support.cloudflare.com/hc/en-us/articles/200170036).
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'server_side_exclude';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }
}

export interface ServerSideExcludeListResponse {
  errors?: Array<ServerSideExcludeListResponse.Error>;

  messages?: Array<ServerSideExcludeListResponse.Message>;

  /**
   * If there is sensitive content on your website that you want visible to real
   * visitors, but that you want to hide from suspicious visitors, all you have to do
   * is wrap the content with Cloudflare SSE tags. Wrap any content that you want to
   * be excluded from suspicious visitors in the following SSE tags:
   * <!--sse--><!--/sse-->. For example: <!--sse--> Bad visitors won't see my phone
   * number, 555-555-5555 <!--/sse-->. Note: SSE only will work with HTML. If you
   * have HTML minification enabled, you won't see the SSE tags in your HTML source
   * when it's served through Cloudflare. SSE will still function in this case, as
   * Cloudflare's HTML minification and SSE functionality occur on-the-fly as the
   * resource moves through our network to the visitor's computer.
   * (https://support.cloudflare.com/hc/en-us/articles/200170036).
   */
  result?: ServerSideExcludeListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace ServerSideExcludeListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * If there is sensitive content on your website that you want visible to real
   * visitors, but that you want to hide from suspicious visitors, all you have to do
   * is wrap the content with Cloudflare SSE tags. Wrap any content that you want to
   * be excluded from suspicious visitors in the following SSE tags:
   * <!--sse--><!--/sse-->. For example: <!--sse--> Bad visitors won't see my phone
   * number, 555-555-5555 <!--/sse-->. Note: SSE only will work with HTML. If you
   * have HTML minification enabled, you won't see the SSE tags in your HTML source
   * when it's served through Cloudflare. SSE will still function in this case, as
   * Cloudflare's HTML minification and SSE functionality occur on-the-fly as the
   * resource moves through our network to the visitor's computer.
   * (https://support.cloudflare.com/hc/en-us/articles/200170036).
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'server_side_exclude';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }
}

export interface ServerSideExcludeUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace ServerSideExcludes {
  export import ServerSideExcludeUpdateResponse = ServerSideExcludesAPI.ServerSideExcludeUpdateResponse;
  export import ServerSideExcludeListResponse = ServerSideExcludesAPI.ServerSideExcludeListResponse;
  export import ServerSideExcludeUpdateParams = ServerSideExcludesAPI.ServerSideExcludeUpdateParams;
}
