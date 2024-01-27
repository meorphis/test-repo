// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PageShieldAPI from 'cloudflare/resources/zones/page-shield/page-shield';
import * as ConnectionsAPI from 'cloudflare/resources/zones/page-shield/connections';
import * as PoliciesAPI from 'cloudflare/resources/zones/page-shield/policies';
import * as ScriptsAPI from 'cloudflare/resources/zones/page-shield/scripts';

export class PageShield extends APIResource {
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  scripts: ScriptsAPI.Scripts = new ScriptsAPI.Scripts(this._client);
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);

  /**
   * Fetches the Page Shield settings.
   */
  list(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<PageShieldListResponse> {
    return this._client.get(`/zones/${zoneId}/page_shield`, options);
  }

  /**
   * Updates Page Shield settings.
   */
  pageShieldUpdatePageShieldSettings(
    zoneId: string,
    body: PageShieldPageShieldUpdatePageShieldSettingsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageShieldPageShieldUpdatePageShieldSettingsResponse> {
    return this._client.put(`/zones/${zoneId}/page_shield`, { body, ...options });
  }
}

export interface PageShieldListResponse {
  errors?: Array<PageShieldListResponse.Error>;

  messages?: Array<PageShieldListResponse.Message>;

  result?: PageShieldListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PageShieldListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * When true, indicates that Page Shield is enabled.
     */
    enabled?: boolean;

    /**
     * The timestamp of when Page Shield was last updated.
     */
    updated_at?: string;

    /**
     * When true, CSP reports will be sent to
     * https://csp-reporting.cloudflare.com/cdn-cgi/script_monitor/report
     */
    use_cloudflare_reporting_endpoint?: boolean;

    /**
     * When true, the paths associated with connections URLs will also be analyzed.
     */
    use_connection_url_path?: boolean;
  }
}

export interface PageShieldPageShieldUpdatePageShieldSettingsResponse {
  errors?: Array<PageShieldPageShieldUpdatePageShieldSettingsResponse.Error>;

  messages?: Array<PageShieldPageShieldUpdatePageShieldSettingsResponse.Message>;

  result?: PageShieldPageShieldUpdatePageShieldSettingsResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PageShieldPageShieldUpdatePageShieldSettingsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * When true, indicates that Page Shield is enabled.
     */
    enabled?: boolean;

    /**
     * The timestamp of when Page Shield was last updated.
     */
    updated_at?: string;

    /**
     * When true, CSP reports will be sent to
     * https://csp-reporting.cloudflare.com/cdn-cgi/script_monitor/report
     */
    use_cloudflare_reporting_endpoint?: boolean;

    /**
     * When true, the paths associated with connections URLs will also be analyzed.
     */
    use_connection_url_path?: boolean;
  }
}

export interface PageShieldPageShieldUpdatePageShieldSettingsParams {
  /**
   * When true, indicates that Page Shield is enabled.
   */
  enabled?: boolean;

  /**
   * When true, CSP reports will be sent to
   * https://csp-reporting.cloudflare.com/cdn-cgi/script_monitor/report
   */
  use_cloudflare_reporting_endpoint?: boolean;

  /**
   * When true, the paths associated with connections URLs will also be analyzed.
   */
  use_connection_url_path?: boolean;
}

export namespace PageShield {
  export import PageShieldListResponse = PageShieldAPI.PageShieldListResponse;
  export import PageShieldPageShieldUpdatePageShieldSettingsResponse = PageShieldAPI.PageShieldPageShieldUpdatePageShieldSettingsResponse;
  export import PageShieldPageShieldUpdatePageShieldSettingsParams = PageShieldAPI.PageShieldPageShieldUpdatePageShieldSettingsParams;
  export import Connections = ConnectionsAPI.Connections;
  export import ConnectionRetrieveResponse = ConnectionsAPI.ConnectionRetrieveResponse;
  export import ConnectionPageShieldListPageShieldConnectionsResponse = ConnectionsAPI.ConnectionPageShieldListPageShieldConnectionsResponse;
  export import ConnectionPageShieldListPageShieldConnectionsParams = ConnectionsAPI.ConnectionPageShieldListPageShieldConnectionsParams;
  export import Scripts = ScriptsAPI.Scripts;
  export import ScriptRetrieveResponse = ScriptsAPI.ScriptRetrieveResponse;
  export import ScriptPageShieldListPageShieldScriptsResponse = ScriptsAPI.ScriptPageShieldListPageShieldScriptsResponse;
  export import ScriptPageShieldListPageShieldScriptsParams = ScriptsAPI.ScriptPageShieldListPageShieldScriptsParams;
  export import Policies = PoliciesAPI.Policies;
  export import PolicyCreateResponse = PoliciesAPI.PolicyCreateResponse;
  export import PolicyRetrieveResponse = PoliciesAPI.PolicyRetrieveResponse;
  export import PolicyUpdateResponse = PoliciesAPI.PolicyUpdateResponse;
  export import PolicyListResponse = PoliciesAPI.PolicyListResponse;
  export import PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export import PolicyUpdateParams = PoliciesAPI.PolicyUpdateParams;
}
