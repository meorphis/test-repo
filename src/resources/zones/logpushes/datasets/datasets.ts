// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as FieldsAPI from 'cloudflare/resources/zones/logpushes/datasets/fields';
import * as JobsAPI from 'cloudflare/resources/zones/logpushes/datasets/jobs';

export class Datasets extends APIResource {
  fields: FieldsAPI.Fields = new FieldsAPI.Fields(this._client);
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
}

export namespace Datasets {
  export import Fields = FieldsAPI.Fields;
  export import FieldGetZonesZoneIdentifierLogpushDatasetsDatasetFieldsResponse = FieldsAPI.FieldGetZonesZoneIdentifierLogpushDatasetsDatasetFieldsResponse;
  export import Jobs = JobsAPI.Jobs;
  export import JobGetZonesZoneIdentifierLogpushDatasetsDatasetJobsResponse = JobsAPI.JobGetZonesZoneIdentifierLogpushDatasetsDatasetJobsResponse;
}
