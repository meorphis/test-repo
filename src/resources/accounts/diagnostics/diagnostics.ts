// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as TraceroutesAPI from 'cloudflare/resources/accounts/diagnostics/traceroutes';

export class Diagnostics extends APIResource {
  traceroutes: TraceroutesAPI.Traceroutes = new TraceroutesAPI.Traceroutes(this._client);
}

export namespace Diagnostics {
  export import Traceroutes = TraceroutesAPI.Traceroutes;
  export import TracerouteDiagnosticsTracerouteResponse = TraceroutesAPI.TracerouteDiagnosticsTracerouteResponse;
  export import TracerouteDiagnosticsTracerouteParams = TraceroutesAPI.TracerouteDiagnosticsTracerouteParams;
}
