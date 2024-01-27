// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as HistoryAPI from 'cloudflare/resources/alerting/v3/history';
import * as PoliciesAPI from 'cloudflare/resources/alerting/v3/policies';
import * as DestinationsAPI from 'cloudflare/resources/alerting/v3/destinations/destinations';

export class V3 extends APIResource {
  destinations: DestinationsAPI.Destinations = new DestinationsAPI.Destinations(this._client);
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
}

export namespace V3 {
  export import Destinations = DestinationsAPI.Destinations;
  export import History = HistoryAPI.History;
  export import HistoryListResponse = HistoryAPI.HistoryListResponse;
  export import HistoryListResponsesPage = HistoryAPI.HistoryListResponsesPage;
  export import HistoryListParams = HistoryAPI.HistoryListParams;
  export import Policies = PoliciesAPI.Policies;
  export import PolicyCreateResponse = PoliciesAPI.PolicyCreateResponse;
  export import PolicyRetrieveResponse = PoliciesAPI.PolicyRetrieveResponse;
  export import PolicyUpdateResponse = PoliciesAPI.PolicyUpdateResponse;
  export import PolicyListResponse = PoliciesAPI.PolicyListResponse;
  export import PolicyDeleteResponse = PoliciesAPI.PolicyDeleteResponse;
  export import PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export import PolicyUpdateParams = PoliciesAPI.PolicyUpdateParams;
}
