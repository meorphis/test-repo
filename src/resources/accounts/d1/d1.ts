// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as DatabasesAPI from 'cloudflare/resources/accounts/d1/databases';

export class D1 extends APIResource {
  databases: DatabasesAPI.Databases = new DatabasesAPI.Databases(this._client);
}

export namespace D1 {
  export import Databases = DatabasesAPI.Databases;
  export import DatabaseCreateResponse = DatabasesAPI.DatabaseCreateResponse;
  export import DatabaseRetrieveResponse = DatabasesAPI.DatabaseRetrieveResponse;
  export import DatabaseListResponse = DatabasesAPI.DatabaseListResponse;
  export import DatabaseDeleteResponse = DatabasesAPI.DatabaseDeleteResponse;
  export import DatabaseQueryResponse = DatabasesAPI.DatabaseQueryResponse;
  export import DatabaseCreateParams = DatabasesAPI.DatabaseCreateParams;
  export import DatabaseListParams = DatabasesAPI.DatabaseListParams;
  export import DatabaseQueryParams = DatabasesAPI.DatabaseQueryParams;
}
