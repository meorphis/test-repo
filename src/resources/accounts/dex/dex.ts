// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ColosAPI from 'cloudflare/resources/accounts/dex/colos';
import * as FleetStatusDevicesAPI from 'cloudflare/resources/accounts/dex/fleet-status-devices';
import * as FleetStatusLiveAPI from 'cloudflare/resources/accounts/dex/fleet-status-live';
import * as FleetStatusOverTimeAPI from 'cloudflare/resources/accounts/dex/fleet-status-over-time';
import * as HTTPTestsAPI from 'cloudflare/resources/accounts/dex/http-tests/http-tests';
import * as TestsAPI from 'cloudflare/resources/accounts/dex/tests/tests';
import * as TracerouteTestResultsAPI from 'cloudflare/resources/accounts/dex/traceroute-test-results/traceroute-test-results';
import * as TracerouteTestsAPI from 'cloudflare/resources/accounts/dex/traceroute-tests/traceroute-tests';

export class Dex extends APIResource {
  colos: ColosAPI.Colos = new ColosAPI.Colos(this._client);
  fleetStatusDevices: FleetStatusDevicesAPI.FleetStatusDevices = new FleetStatusDevicesAPI.FleetStatusDevices(
    this._client,
  );
  fleetStatusLive: FleetStatusLiveAPI.FleetStatusLive = new FleetStatusLiveAPI.FleetStatusLive(this._client);
  fleetStatusOverTime: FleetStatusOverTimeAPI.FleetStatusOverTime =
    new FleetStatusOverTimeAPI.FleetStatusOverTime(this._client);
  httpTests: HTTPTestsAPI.HTTPTests = new HTTPTestsAPI.HTTPTests(this._client);
  tests: TestsAPI.Tests = new TestsAPI.Tests(this._client);
  tracerouteTestResults: TracerouteTestResultsAPI.TracerouteTestResults =
    new TracerouteTestResultsAPI.TracerouteTestResults(this._client);
  tracerouteTests: TracerouteTestsAPI.TracerouteTests = new TracerouteTestsAPI.TracerouteTests(this._client);
}

export namespace Dex {
  export import Colos = ColosAPI.Colos;
  export import ColoListResponse = ColosAPI.ColoListResponse;
  export import ColoListParams = ColosAPI.ColoListParams;
  export import FleetStatusDevices = FleetStatusDevicesAPI.FleetStatusDevices;
  export import FleetStatusDeviceListResponse = FleetStatusDevicesAPI.FleetStatusDeviceListResponse;
  export import FleetStatusDeviceListResponsesPage = FleetStatusDevicesAPI.FleetStatusDeviceListResponsesPage;
  export import FleetStatusDeviceListParams = FleetStatusDevicesAPI.FleetStatusDeviceListParams;
  export import FleetStatusLive = FleetStatusLiveAPI.FleetStatusLive;
  export import FleetStatusLiveListResponse = FleetStatusLiveAPI.FleetStatusLiveListResponse;
  export import FleetStatusLiveListParams = FleetStatusLiveAPI.FleetStatusLiveListParams;
  export import FleetStatusOverTime = FleetStatusOverTimeAPI.FleetStatusOverTime;
  export import FleetStatusOverTimeListParams = FleetStatusOverTimeAPI.FleetStatusOverTimeListParams;
  export import HTTPTests = HTTPTestsAPI.HTTPTests;
  export import HTTPTestRetrieveResponse = HTTPTestsAPI.HTTPTestRetrieveResponse;
  export import HTTPTestRetrieveParams = HTTPTestsAPI.HTTPTestRetrieveParams;
  export import Tests = TestsAPI.Tests;
  export import TestListResponse = TestsAPI.TestListResponse;
  export import TestListParams = TestsAPI.TestListParams;
  export import TracerouteTestResults = TracerouteTestResultsAPI.TracerouteTestResults;
  export import TracerouteTests = TracerouteTestsAPI.TracerouteTests;
  export import TracerouteTestRetrieveResponse = TracerouteTestsAPI.TracerouteTestRetrieveResponse;
  export import TracerouteTestPercentilesResponse = TracerouteTestsAPI.TracerouteTestPercentilesResponse;
  export import TracerouteTestRetrieveParams = TracerouteTestsAPI.TracerouteTestRetrieveParams;
  export import TracerouteTestPercentilesParams = TracerouteTestsAPI.TracerouteTestPercentilesParams;
}
