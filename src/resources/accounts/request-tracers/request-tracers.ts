// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as TracesAPI from 'cloudflare/resources/accounts/request-tracers/traces';

export class RequestTracers extends APIResource {
  traces: TracesAPI.Traces = new TracesAPI.Traces(this._client);
}

export namespace RequestTracers {
  export import Traces = TracesAPI.Traces;
}
