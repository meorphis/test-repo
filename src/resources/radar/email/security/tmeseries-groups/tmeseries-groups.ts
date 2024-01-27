// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ThreatCategoriesAPI from 'cloudflare/resources/radar/email/security/tmeseries-groups/threat-categories';

export class TmeseriesGroups extends APIResource {
  threatCategories: ThreatCategoriesAPI.ThreatCategories = new ThreatCategoriesAPI.ThreatCategories(
    this._client,
  );
}

export namespace TmeseriesGroups {
  export import ThreatCategories = ThreatCategoriesAPI.ThreatCategories;
  export import ThreatCategoryListResponse = ThreatCategoriesAPI.ThreatCategoryListResponse;
  export import ThreatCategoryListParams = ThreatCategoriesAPI.ThreatCategoryListParams;
}
