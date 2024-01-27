// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as HarAPI from 'cloudflare/resources/accounts/urlscanner/har';

export class Har extends APIResource {
  /**
   * Get a URL scan's HAR file. See HAR spec at
   * http://www.softwareishard.com/blog/har-12-spec/.
   */
  retrieve(
    accountId: string,
    scanId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HarRetrieveResponse> {
    return this._client.get(`/accounts/${accountId}/urlscanner/scan/${scanId}/har`, options);
  }
}

export interface HarRetrieveResponse {
  errors: Array<HarRetrieveResponse.Error>;

  messages: Array<HarRetrieveResponse.Message>;

  result: HarRetrieveResponse.Result;

  /**
   * Whether search request was successful or not
   */
  success: boolean;
}

export namespace HarRetrieveResponse {
  export interface Error {
    message: string;
  }

  export interface Message {
    message: string;
  }

  export interface Result {
    har: Result.Har;
  }

  export namespace Result {
    export interface Har {
      log: Har.Log;
    }

    export namespace Har {
      export interface Log {
        creator: Log.Creator;

        entries: Array<Log.Entry>;

        pages: Array<Log.Page>;

        version: string;
      }

      export namespace Log {
        export interface Creator {
          comment: string;

          name: string;

          version: string;
        }

        export interface Entry {
          _initialPriority: string;

          _initiator_type: string;

          _priority: string;

          _requestId: string;

          _requestTime: number;

          _resourceType: string;

          cache: unknown;

          connection: string;

          pageref: string;

          request: Entry.Request;

          response: Entry.Response;

          serverIPAddress: string;

          startedDateTime: string;

          time: number;
        }

        export namespace Entry {
          export interface Request {
            bodySize: number;

            headers: Array<Request.Header>;

            headersSize: number;

            httpVersion: string;

            method: string;

            url: string;
          }

          export namespace Request {
            export interface Header {
              name: string;

              value: string;
            }
          }

          export interface Response {
            _transferSize: number;

            bodySize: number;

            content: Response.Content;

            headers: Array<Response.Header>;

            headersSize: number;

            httpVersion: string;

            redirectURL: string;

            status: number;

            statusText: string;
          }

          export namespace Response {
            export interface Content {
              mimeType: string;

              size: number;

              compression?: number;
            }

            export interface Header {
              name: string;

              value: string;
            }
          }
        }

        export interface Page {
          id: string;

          pageTimings: Page.PageTimings;

          startedDateTime: string;

          title: string;
        }

        export namespace Page {
          export interface PageTimings {
            onContentLoad: number;

            onLoad: number;
          }
        }
      }
    }
  }
}

export namespace Har {
  export import HarRetrieveResponse = HarAPI.HarRetrieveResponse;
}
