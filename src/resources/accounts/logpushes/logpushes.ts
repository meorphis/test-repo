// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as JobsAPI from 'cloudflare/resources/accounts/logpushes/jobs';
import * as DatasetsAPI from 'cloudflare/resources/accounts/logpushes/datasets/datasets';
import * as OwnershipsAPI from 'cloudflare/resources/accounts/logpushes/ownerships/ownerships';
import * as ValidatesAPI from 'cloudflare/resources/accounts/logpushes/validates/validates';

export class Logpushes extends APIResource {
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
  ownerships: OwnershipsAPI.Ownerships = new OwnershipsAPI.Ownerships(this._client);
  validates: ValidatesAPI.Validates = new ValidatesAPI.Validates(this._client);
}

export namespace Logpushes {
  export import Datasets = DatasetsAPI.Datasets;
  export import Jobs = JobsAPI.Jobs;
  export import JobRetrieveResponse = JobsAPI.JobRetrieveResponse;
  export import JobUpdateResponse = JobsAPI.JobUpdateResponse;
  export import JobDeleteResponse = JobsAPI.JobDeleteResponse;
  export import JobGetAccountsAccountIdentifierLogpushJobsResponse = JobsAPI.JobGetAccountsAccountIdentifierLogpushJobsResponse;
  export import JobPostAccountsAccountIdentifierLogpushJobsResponse = JobsAPI.JobPostAccountsAccountIdentifierLogpushJobsResponse;
  export import JobUpdateParams = JobsAPI.JobUpdateParams;
  export import JobPostAccountsAccountIdentifierLogpushJobsParams = JobsAPI.JobPostAccountsAccountIdentifierLogpushJobsParams;
  export import Ownerships = OwnershipsAPI.Ownerships;
  export import OwnershipPostAccountsAccountIdentifierLogpushOwnershipResponse = OwnershipsAPI.OwnershipPostAccountsAccountIdentifierLogpushOwnershipResponse;
  export import OwnershipPostAccountsAccountIdentifierLogpushOwnershipParams = OwnershipsAPI.OwnershipPostAccountsAccountIdentifierLogpushOwnershipParams;
  export import Validates = ValidatesAPI.Validates;
}
