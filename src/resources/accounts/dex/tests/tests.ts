// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as TestsAPI from 'cloudflare/resources/accounts/dex/tests/tests';
import * as UniqueDevicesAPI from 'cloudflare/resources/accounts/dex/tests/unique-devices';

export class Tests extends APIResource {
  uniqueDevices: UniqueDevicesAPI.UniqueDevices = new UniqueDevicesAPI.UniqueDevices(this._client);

  /**
   * List DEX tests
   */
  list(
    accountIdentifier: string,
    query?: TestListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TestListResponse>;
  list(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<TestListResponse>;
  list(
    accountIdentifier: string,
    query: TestListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TestListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountIdentifier, {}, query);
    }
    return this._client.get(`/accounts/${accountIdentifier}/dex/tests`, { query, ...options });
  }
}

export interface TestListResponse {
  errors?: Array<TestListResponse.Error>;

  messages?: Array<TestListResponse.Message>;

  result?: TestListResponse.Result;

  result_info?: TestListResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TestListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    overviewMetrics: Result.OverviewMetrics;

    /**
     * array of test results objects.
     */
    tests: Array<Result.Test>;
  }

  export namespace Result {
    export interface OverviewMetrics {
      /**
       * number of tests.
       */
      testsTotal: number;

      /**
       * percentage availability for all traceroutes results in response
       */
      avgTracerouteAvailabilityPct?: number | null;
    }

    export interface Test {
      /**
       * API Resource UUID tag.
       */
      id: string;

      /**
       * date the test was created.
       */
      created: string;

      /**
       * the test description defined during configuration
       */
      description: string;

      /**
       * if true, then the test will run on targeted devices. Else, the test will not
       * run.
       */
      enabled: boolean;

      host: string;

      /**
       * The interval at which the synthetic application test is set to run.
       */
      interval: string;

      /**
       * test type, http or traceroute
       */
      kind: 'http' | 'traceroute';

      /**
       * name given to this test
       */
      name: string;

      updated: string;

      httpResults?: Test.HTTPResults | null;

      httpResultsByColo?: Array<Test.HTTPResultsByColo>;

      /**
       * for HTTP, the method to use when running the test
       */
      method?: string;

      tracerouteResults?: Test.TracerouteResults | null;

      tracerouteResultsByColo?: Array<Test.TracerouteResultsByColo>;
    }

    export namespace Test {
      export interface HTTPResults {
        resourceFetchTime: HTTPResults.ResourceFetchTime;
      }

      export namespace HTTPResults {
        export interface ResourceFetchTime {
          history: Array<ResourceFetchTime.History>;

          avgMs?: number | null;

          overTime?: ResourceFetchTime.OverTime | null;
        }

        export namespace ResourceFetchTime {
          export interface History {
            timePeriod: History.TimePeriod;

            avgMs?: number | null;

            deltaPct?: number | null;
          }

          export namespace History {
            export interface TimePeriod {
              units: 'hours' | 'days' | 'testRuns';

              value: number;
            }
          }

          export interface OverTime {
            timePeriod: OverTime.TimePeriod;

            values: Array<OverTime.Value>;
          }

          export namespace OverTime {
            export interface TimePeriod {
              units: 'hours' | 'days' | 'testRuns';

              value: number;
            }

            export interface Value {
              avgMs: number;

              timestamp: string;
            }
          }
        }
      }

      export interface HTTPResultsByColo {
        /**
         * Cloudflare colo
         */
        colo: string;

        resourceFetchTime: HTTPResultsByColo.ResourceFetchTime;
      }

      export namespace HTTPResultsByColo {
        export interface ResourceFetchTime {
          history: Array<ResourceFetchTime.History>;

          avgMs?: number | null;

          overTime?: ResourceFetchTime.OverTime | null;
        }

        export namespace ResourceFetchTime {
          export interface History {
            timePeriod: History.TimePeriod;

            avgMs?: number | null;

            deltaPct?: number | null;
          }

          export namespace History {
            export interface TimePeriod {
              units: 'hours' | 'days' | 'testRuns';

              value: number;
            }
          }

          export interface OverTime {
            timePeriod: OverTime.TimePeriod;

            values: Array<OverTime.Value>;
          }

          export namespace OverTime {
            export interface TimePeriod {
              units: 'hours' | 'days' | 'testRuns';

              value: number;
            }

            export interface Value {
              avgMs: number;

              timestamp: string;
            }
          }
        }
      }

      export interface TracerouteResults {
        roundTripTime: TracerouteResults.RoundTripTime;
      }

      export namespace TracerouteResults {
        export interface RoundTripTime {
          history: Array<RoundTripTime.History>;

          avgMs?: number | null;

          overTime?: RoundTripTime.OverTime | null;
        }

        export namespace RoundTripTime {
          export interface History {
            timePeriod: History.TimePeriod;

            avgMs?: number | null;

            deltaPct?: number | null;
          }

          export namespace History {
            export interface TimePeriod {
              units: 'hours' | 'days' | 'testRuns';

              value: number;
            }
          }

          export interface OverTime {
            timePeriod: OverTime.TimePeriod;

            values: Array<OverTime.Value>;
          }

          export namespace OverTime {
            export interface TimePeriod {
              units: 'hours' | 'days' | 'testRuns';

              value: number;
            }

            export interface Value {
              avgMs: number;

              timestamp: string;
            }
          }
        }
      }

      export interface TracerouteResultsByColo {
        /**
         * Cloudflare colo
         */
        colo: string;

        roundTripTime: TracerouteResultsByColo.RoundTripTime;
      }

      export namespace TracerouteResultsByColo {
        export interface RoundTripTime {
          history: Array<RoundTripTime.History>;

          avgMs?: number | null;

          overTime?: RoundTripTime.OverTime | null;
        }

        export namespace RoundTripTime {
          export interface History {
            timePeriod: History.TimePeriod;

            avgMs?: number | null;

            deltaPct?: number | null;
          }

          export namespace History {
            export interface TimePeriod {
              units: 'hours' | 'days' | 'testRuns';

              value: number;
            }
          }

          export interface OverTime {
            timePeriod: OverTime.TimePeriod;

            values: Array<OverTime.Value>;
          }

          export namespace OverTime {
            export interface TimePeriod {
              units: 'hours' | 'days' | 'testRuns';

              value: number;
            }

            export interface Value {
              avgMs: number;

              timestamp: string;
            }
          }
        }
      }
    }
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

export interface TestListParams {
  /**
   * Optionally filter result stats to a Cloudflare colo. Cannot be used in
   * combination with deviceId param.
   */
  colo?: string;

  /**
   * Optionally filter result stats to a specific device(s). Cannot be used in
   * combination with colo param.
   */
  deviceId?: Array<string>;

  /**
   * Page number of paginated results
   */
  page?: number;

  /**
   * Number of items per page
   */
  per_page?: number;

  /**
   * Optionally filter results by test name
   */
  testName?: string;
}

export namespace Tests {
  export import TestListResponse = TestsAPI.TestListResponse;
  export import TestListParams = TestsAPI.TestListParams;
  export import UniqueDevices = UniqueDevicesAPI.UniqueDevices;
  export import UniqueDeviceListResponse = UniqueDevicesAPI.UniqueDeviceListResponse;
  export import UniqueDeviceListParams = UniqueDevicesAPI.UniqueDeviceListParams;
}
