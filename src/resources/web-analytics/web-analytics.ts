// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as RulesAPI from 'cloudflare/resources/web-analytics/rules';
import * as SiteInfoAPI from 'cloudflare/resources/web-analytics/site-info';

export class WebAnalytics extends APIResource {
  siteInfo: SiteInfoAPI.SiteInfo = new SiteInfoAPI.SiteInfo(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

export namespace WebAnalytics {
  export import SiteInfo = SiteInfoAPI.SiteInfo;
  export import SiteInfoRetrieveResponse = SiteInfoAPI.SiteInfoRetrieveResponse;
  export import SiteInfoUpdateResponse = SiteInfoAPI.SiteInfoUpdateResponse;
  export import SiteInfoListResponse = SiteInfoAPI.SiteInfoListResponse;
  export import SiteInfoDeleteResponse = SiteInfoAPI.SiteInfoDeleteResponse;
  export import SiteInfoListResponsesPage = SiteInfoAPI.SiteInfoListResponsesPage;
  export import SiteInfoUpdateParams = SiteInfoAPI.SiteInfoUpdateParams;
  export import SiteInfoListParams = SiteInfoAPI.SiteInfoListParams;
  export import Rules = RulesAPI.Rules;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleListResponse = RulesAPI.RuleListResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
}
