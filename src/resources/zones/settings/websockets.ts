// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WebsocketsAPI from 'cloudflare/resources/zones/settings/websockets';

export class Websockets extends APIResource {
  /**
   * Changes Websockets setting. For more information about Websockets, please refer
   * to
   * [Using Cloudflare with WebSockets](https://support.cloudflare.com/hc/en-us/articles/200169466-Using-Cloudflare-with-WebSockets).
   */
  update(
    zoneIdentifier: string,
    body: WebsocketUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebsocketUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/websockets`, { body, ...options });
  }

  /**
   * Gets Websockets setting. For more information about Websockets, please refer to
   * [Using Cloudflare with WebSockets](https://support.cloudflare.com/hc/en-us/articles/200169466-Using-Cloudflare-with-WebSockets).
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<WebsocketListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/websockets`, options);
  }
}

export interface WebsocketUpdateResponse {
  errors?: Array<WebsocketUpdateResponse.Error>;

  messages?: Array<WebsocketUpdateResponse.Message>;

  /**
   * WebSockets are open connections sustained between the client and the origin
   * server. Inside a WebSockets connection, the client and the origin can pass data
   * back and forth without having to reestablish sessions. This makes exchanging
   * data within a WebSockets connection fast. WebSockets are often used for
   * real-time applications such as live chat and gaming. For more information refer
   * to
   * [Can I use Cloudflare with Websockets](https://support.cloudflare.com/hc/en-us/articles/200169466-Can-I-use-Cloudflare-with-WebSockets-).
   */
  result?: WebsocketUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace WebsocketUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * WebSockets are open connections sustained between the client and the origin
   * server. Inside a WebSockets connection, the client and the origin can pass data
   * back and forth without having to reestablish sessions. This makes exchanging
   * data within a WebSockets connection fast. WebSockets are often used for
   * real-time applications such as live chat and gaming. For more information refer
   * to
   * [Can I use Cloudflare with Websockets](https://support.cloudflare.com/hc/en-us/articles/200169466-Can-I-use-Cloudflare-with-WebSockets-).
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'websockets';

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
    value?: 'off' | 'on';
  }
}

export interface WebsocketListResponse {
  errors?: Array<WebsocketListResponse.Error>;

  messages?: Array<WebsocketListResponse.Message>;

  /**
   * WebSockets are open connections sustained between the client and the origin
   * server. Inside a WebSockets connection, the client and the origin can pass data
   * back and forth without having to reestablish sessions. This makes exchanging
   * data within a WebSockets connection fast. WebSockets are often used for
   * real-time applications such as live chat and gaming. For more information refer
   * to
   * [Can I use Cloudflare with Websockets](https://support.cloudflare.com/hc/en-us/articles/200169466-Can-I-use-Cloudflare-with-WebSockets-).
   */
  result?: WebsocketListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace WebsocketListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * WebSockets are open connections sustained between the client and the origin
   * server. Inside a WebSockets connection, the client and the origin can pass data
   * back and forth without having to reestablish sessions. This makes exchanging
   * data within a WebSockets connection fast. WebSockets are often used for
   * real-time applications such as live chat and gaming. For more information refer
   * to
   * [Can I use Cloudflare with Websockets](https://support.cloudflare.com/hc/en-us/articles/200169466-Can-I-use-Cloudflare-with-WebSockets-).
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'websockets';

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
    value?: 'off' | 'on';
  }
}

export interface WebsocketUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'off' | 'on';
}

export namespace Websockets {
  export import WebsocketUpdateResponse = WebsocketsAPI.WebsocketUpdateResponse;
  export import WebsocketListResponse = WebsocketsAPI.WebsocketListResponse;
  export import WebsocketUpdateParams = WebsocketsAPI.WebsocketUpdateParams;
}
