// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as EdgesAPI from 'cloudflare/resources/zones/logpushes/edges';
import * as JobsAPI from 'cloudflare/resources/zones/logpushes/jobs';
import * as DatasetsAPI from 'cloudflare/resources/zones/logpushes/datasets/datasets';
import * as OwnershipsAPI from 'cloudflare/resources/zones/logpushes/ownerships/ownerships';
import * as ValidatesAPI from 'cloudflare/resources/zones/logpushes/validates/validates';

export class Logpushes extends APIResource {
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  edges: EdgesAPI.Edges = new EdgesAPI.Edges(this._client);
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
  ownerships: OwnershipsAPI.Ownerships = new OwnershipsAPI.Ownerships(this._client);
  validates: ValidatesAPI.Validates = new ValidatesAPI.Validates(this._client);
}

export namespace Logpushes {
  export import Datasets = DatasetsAPI.Datasets;
  export import Edges = EdgesAPI.Edges;
  export import EdgeGetZonesZoneIdentifierLogpushEdgeJobsResponse = EdgesAPI.EdgeGetZonesZoneIdentifierLogpushEdgeJobsResponse;
  export import EdgePostZonesZoneIdentifierLogpushEdgeJobsResponse = EdgesAPI.EdgePostZonesZoneIdentifierLogpushEdgeJobsResponse;
  export import EdgePostZonesZoneIdentifierLogpushEdgeJobsParams = EdgesAPI.EdgePostZonesZoneIdentifierLogpushEdgeJobsParams;
  export import Jobs = JobsAPI.Jobs;
  export import JobRetrieveResponse = JobsAPI.JobRetrieveResponse;
  export import JobUpdateResponse = JobsAPI.JobUpdateResponse;
  export import JobDeleteResponse = JobsAPI.JobDeleteResponse;
  export import JobGetZonesZoneIdentifierLogpushJobsResponse = JobsAPI.JobGetZonesZoneIdentifierLogpushJobsResponse;
  export import JobPostZonesZoneIdentifierLogpushJobsResponse = JobsAPI.JobPostZonesZoneIdentifierLogpushJobsResponse;
  export import JobUpdateParams = JobsAPI.JobUpdateParams;
  export import JobPostZonesZoneIdentifierLogpushJobsParams = JobsAPI.JobPostZonesZoneIdentifierLogpushJobsParams;
  export import Ownerships = OwnershipsAPI.Ownerships;
  export import OwnershipPostZonesZoneIdentifierLogpushOwnershipResponse = OwnershipsAPI.OwnershipPostZonesZoneIdentifierLogpushOwnershipResponse;
  export import OwnershipPostZonesZoneIdentifierLogpushOwnershipParams = OwnershipsAPI.OwnershipPostZonesZoneIdentifierLogpushOwnershipParams;
  export import Validates = ValidatesAPI.Validates;
}
