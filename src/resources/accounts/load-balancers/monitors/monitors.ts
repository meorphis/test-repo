// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as MonitorsAPI from 'cloudflare/resources/accounts/load-balancers/monitors/monitors';
import * as PreviewsAPI from 'cloudflare/resources/accounts/load-balancers/monitors/previews';
import * as ReferencesAPI from 'cloudflare/resources/accounts/load-balancers/monitors/references';

export class Monitors extends APIResource {
  previews: PreviewsAPI.Previews = new PreviewsAPI.Previews(this._client);
  references: ReferencesAPI.References = new ReferencesAPI.References(this._client);

  /**
   * List a single configured monitor for an account.
   */
  retrieve(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Monitor> {
    return this._client.get(`/accounts/${accountIdentifier}/load_balancers/monitors/${identifier}`, options);
  }

  /**
   * Modify a configured monitor.
   */
  update(
    accountIdentifier: string,
    identifier: string,
    body: MonitorUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Monitor> {
    return this._client.put(`/accounts/${accountIdentifier}/load_balancers/monitors/${identifier}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a configured monitor.
   */
  delete(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MonitorDeleteResponse> {
    return this._client.delete(
      `/accounts/${accountIdentifier}/load_balancers/monitors/${identifier}`,
      options,
    );
  }

  /**
   * Create a configured monitor.
   */
  accountLoadBalancerMonitorsCreateMonitor(
    accountIdentifier: string,
    body: MonitorAccountLoadBalancerMonitorsCreateMonitorParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Monitor> {
    return this._client.post(`/accounts/${accountIdentifier}/load_balancers/monitors`, { body, ...options });
  }

  /**
   * List configured monitors for an account.
   */
  accountLoadBalancerMonitorsListMonitors(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MonitorAccountLoadBalancerMonitorsListMonitorsResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/load_balancers/monitors`, options);
  }

  /**
   * Apply changes to an existing monitor, overwriting the supplied properties.
   */
  patch(
    accountIdentifier: string,
    identifier: string,
    body: MonitorPatchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Monitor> {
    return this._client.patch(`/accounts/${accountIdentifier}/load_balancers/monitors/${identifier}`, {
      body,
      ...options,
    });
  }
}

export interface Monitor {
  errors?: Array<Monitor.Error>;

  messages?: Array<Monitor.Message>;

  result?: Monitor.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace Monitor {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    id?: string;

    /**
     * Do not validate the certificate when monitor use HTTPS. This parameter is
     * currently only valid for HTTP and HTTPS monitors.
     */
    allow_insecure?: boolean;

    /**
     * To be marked unhealthy the monitored origin must fail this healthcheck N
     * consecutive times.
     */
    consecutive_down?: number;

    /**
     * To be marked healthy the monitored origin must pass this healthcheck N
     * consecutive times.
     */
    consecutive_up?: number;

    created_on?: string;

    /**
     * Object description.
     */
    description?: string;

    /**
     * A case-insensitive sub-string to look for in the response body. If this string
     * is not found, the origin will be marked as unhealthy. This parameter is only
     * valid for HTTP and HTTPS monitors.
     */
    expected_body?: string;

    /**
     * The expected HTTP response code or code range of the health check. This
     * parameter is only valid for HTTP and HTTPS monitors.
     */
    expected_codes?: string;

    /**
     * Follow redirects if returned by the origin. This parameter is only valid for
     * HTTP and HTTPS monitors.
     */
    follow_redirects?: boolean;

    /**
     * The HTTP request headers to send in the health check. It is recommended you set
     * a Host header by default. The User-Agent header cannot be overridden. This
     * parameter is only valid for HTTP and HTTPS monitors.
     */
    header?: unknown;

    /**
     * The interval between each health check. Shorter intervals may improve failover
     * time, but will increase load on the origins as we check from multiple locations.
     */
    interval?: number;

    /**
     * The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS
     * based checks and 'connection_established' for TCP based health checks.
     */
    method?: string;

    modified_on?: string;

    /**
     * The endpoint path you want to conduct a health check against. This parameter is
     * only valid for HTTP and HTTPS monitors.
     */
    path?: string;

    /**
     * The port number to connect to for the health check. Required for TCP, UDP, and
     * SMTP checks. HTTP and HTTPS checks should only define the port when using a
     * non-standard port (HTTP: default 80, HTTPS: default 443).
     */
    port?: number;

    /**
     * Assign this monitor to emulate the specified zone while probing. This parameter
     * is only valid for HTTP and HTTPS monitors.
     */
    probe_zone?: string;

    /**
     * The number of retries to attempt in case of a timeout before marking the origin
     * as unhealthy. Retries are attempted immediately.
     */
    retries?: number;

    /**
     * The timeout (in seconds) before marking the health check as failed.
     */
    timeout?: number;

    /**
     * The protocol to use for the health check. Currently supported protocols are
     * 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'.
     */
    type?: 'http' | 'https' | 'tcp' | 'udp_icmp' | 'icmp_ping' | 'smtp';
  }
}

export interface MonitorDeleteResponse {
  errors?: Array<MonitorDeleteResponse.Error>;

  messages?: Array<MonitorDeleteResponse.Message>;

  result?: MonitorDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace MonitorDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    id?: string;
  }
}

export interface MonitorAccountLoadBalancerMonitorsListMonitorsResponse {
  errors?: Array<MonitorAccountLoadBalancerMonitorsListMonitorsResponse.Error>;

  messages?: Array<MonitorAccountLoadBalancerMonitorsListMonitorsResponse.Message>;

  result?: Array<MonitorAccountLoadBalancerMonitorsListMonitorsResponse.Result>;

  result_info?: MonitorAccountLoadBalancerMonitorsListMonitorsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace MonitorAccountLoadBalancerMonitorsListMonitorsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    id?: string;

    /**
     * Do not validate the certificate when monitor use HTTPS. This parameter is
     * currently only valid for HTTP and HTTPS monitors.
     */
    allow_insecure?: boolean;

    /**
     * To be marked unhealthy the monitored origin must fail this healthcheck N
     * consecutive times.
     */
    consecutive_down?: number;

    /**
     * To be marked healthy the monitored origin must pass this healthcheck N
     * consecutive times.
     */
    consecutive_up?: number;

    created_on?: string;

    /**
     * Object description.
     */
    description?: string;

    /**
     * A case-insensitive sub-string to look for in the response body. If this string
     * is not found, the origin will be marked as unhealthy. This parameter is only
     * valid for HTTP and HTTPS monitors.
     */
    expected_body?: string;

    /**
     * The expected HTTP response code or code range of the health check. This
     * parameter is only valid for HTTP and HTTPS monitors.
     */
    expected_codes?: string;

    /**
     * Follow redirects if returned by the origin. This parameter is only valid for
     * HTTP and HTTPS monitors.
     */
    follow_redirects?: boolean;

    /**
     * The HTTP request headers to send in the health check. It is recommended you set
     * a Host header by default. The User-Agent header cannot be overridden. This
     * parameter is only valid for HTTP and HTTPS monitors.
     */
    header?: unknown;

    /**
     * The interval between each health check. Shorter intervals may improve failover
     * time, but will increase load on the origins as we check from multiple locations.
     */
    interval?: number;

    /**
     * The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS
     * based checks and 'connection_established' for TCP based health checks.
     */
    method?: string;

    modified_on?: string;

    /**
     * The endpoint path you want to conduct a health check against. This parameter is
     * only valid for HTTP and HTTPS monitors.
     */
    path?: string;

    /**
     * The port number to connect to for the health check. Required for TCP, UDP, and
     * SMTP checks. HTTP and HTTPS checks should only define the port when using a
     * non-standard port (HTTP: default 80, HTTPS: default 443).
     */
    port?: number;

    /**
     * Assign this monitor to emulate the specified zone while probing. This parameter
     * is only valid for HTTP and HTTPS monitors.
     */
    probe_zone?: string;

    /**
     * The number of retries to attempt in case of a timeout before marking the origin
     * as unhealthy. Retries are attempted immediately.
     */
    retries?: number;

    /**
     * The timeout (in seconds) before marking the health check as failed.
     */
    timeout?: number;

    /**
     * The protocol to use for the health check. Currently supported protocols are
     * 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'.
     */
    type?: 'http' | 'https' | 'tcp' | 'udp_icmp' | 'icmp_ping' | 'smtp';
  }

  export interface ResultInfo {
    /**
     * Total number of results for the requested service
     */
    count?: number;

    /**
     * Current page within paginated list of results
     */
    page?: number;

    /**
     * Number of results per page of results
     */
    per_page?: number;

    /**
     * Total results available without any search parameters
     */
    total_count?: number;
  }
}

export interface MonitorUpdateParams {
  /**
   * Do not validate the certificate when monitor use HTTPS. This parameter is
   * currently only valid for HTTP and HTTPS monitors.
   */
  allow_insecure?: boolean;

  /**
   * To be marked unhealthy the monitored origin must fail this healthcheck N
   * consecutive times.
   */
  consecutive_down?: number;

  /**
   * To be marked healthy the monitored origin must pass this healthcheck N
   * consecutive times.
   */
  consecutive_up?: number;

  /**
   * Object description.
   */
  description?: string;

  /**
   * A case-insensitive sub-string to look for in the response body. If this string
   * is not found, the origin will be marked as unhealthy. This parameter is only
   * valid for HTTP and HTTPS monitors.
   */
  expected_body?: string;

  /**
   * The expected HTTP response code or code range of the health check. This
   * parameter is only valid for HTTP and HTTPS monitors.
   */
  expected_codes?: string;

  /**
   * Follow redirects if returned by the origin. This parameter is only valid for
   * HTTP and HTTPS monitors.
   */
  follow_redirects?: boolean;

  /**
   * The HTTP request headers to send in the health check. It is recommended you set
   * a Host header by default. The User-Agent header cannot be overridden. This
   * parameter is only valid for HTTP and HTTPS monitors.
   */
  header?: unknown;

  /**
   * The interval between each health check. Shorter intervals may improve failover
   * time, but will increase load on the origins as we check from multiple locations.
   */
  interval?: number;

  /**
   * The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS
   * based checks and 'connection_established' for TCP based health checks.
   */
  method?: string;

  /**
   * The endpoint path you want to conduct a health check against. This parameter is
   * only valid for HTTP and HTTPS monitors.
   */
  path?: string;

  /**
   * The port number to connect to for the health check. Required for TCP, UDP, and
   * SMTP checks. HTTP and HTTPS checks should only define the port when using a
   * non-standard port (HTTP: default 80, HTTPS: default 443).
   */
  port?: number;

  /**
   * Assign this monitor to emulate the specified zone while probing. This parameter
   * is only valid for HTTP and HTTPS monitors.
   */
  probe_zone?: string;

  /**
   * The number of retries to attempt in case of a timeout before marking the origin
   * as unhealthy. Retries are attempted immediately.
   */
  retries?: number;

  /**
   * The timeout (in seconds) before marking the health check as failed.
   */
  timeout?: number;

  /**
   * The protocol to use for the health check. Currently supported protocols are
   * 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'.
   */
  type?: 'http' | 'https' | 'tcp' | 'udp_icmp' | 'icmp_ping' | 'smtp';
}

export interface MonitorAccountLoadBalancerMonitorsCreateMonitorParams {
  /**
   * Do not validate the certificate when monitor use HTTPS. This parameter is
   * currently only valid for HTTP and HTTPS monitors.
   */
  allow_insecure?: boolean;

  /**
   * To be marked unhealthy the monitored origin must fail this healthcheck N
   * consecutive times.
   */
  consecutive_down?: number;

  /**
   * To be marked healthy the monitored origin must pass this healthcheck N
   * consecutive times.
   */
  consecutive_up?: number;

  /**
   * Object description.
   */
  description?: string;

  /**
   * A case-insensitive sub-string to look for in the response body. If this string
   * is not found, the origin will be marked as unhealthy. This parameter is only
   * valid for HTTP and HTTPS monitors.
   */
  expected_body?: string;

  /**
   * The expected HTTP response code or code range of the health check. This
   * parameter is only valid for HTTP and HTTPS monitors.
   */
  expected_codes?: string;

  /**
   * Follow redirects if returned by the origin. This parameter is only valid for
   * HTTP and HTTPS monitors.
   */
  follow_redirects?: boolean;

  /**
   * The HTTP request headers to send in the health check. It is recommended you set
   * a Host header by default. The User-Agent header cannot be overridden. This
   * parameter is only valid for HTTP and HTTPS monitors.
   */
  header?: unknown;

  /**
   * The interval between each health check. Shorter intervals may improve failover
   * time, but will increase load on the origins as we check from multiple locations.
   */
  interval?: number;

  /**
   * The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS
   * based checks and 'connection_established' for TCP based health checks.
   */
  method?: string;

  /**
   * The endpoint path you want to conduct a health check against. This parameter is
   * only valid for HTTP and HTTPS monitors.
   */
  path?: string;

  /**
   * The port number to connect to for the health check. Required for TCP, UDP, and
   * SMTP checks. HTTP and HTTPS checks should only define the port when using a
   * non-standard port (HTTP: default 80, HTTPS: default 443).
   */
  port?: number;

  /**
   * Assign this monitor to emulate the specified zone while probing. This parameter
   * is only valid for HTTP and HTTPS monitors.
   */
  probe_zone?: string;

  /**
   * The number of retries to attempt in case of a timeout before marking the origin
   * as unhealthy. Retries are attempted immediately.
   */
  retries?: number;

  /**
   * The timeout (in seconds) before marking the health check as failed.
   */
  timeout?: number;

  /**
   * The protocol to use for the health check. Currently supported protocols are
   * 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'.
   */
  type?: 'http' | 'https' | 'tcp' | 'udp_icmp' | 'icmp_ping' | 'smtp';
}

export interface MonitorPatchParams {
  /**
   * Do not validate the certificate when monitor use HTTPS. This parameter is
   * currently only valid for HTTP and HTTPS monitors.
   */
  allow_insecure?: boolean;

  /**
   * To be marked unhealthy the monitored origin must fail this healthcheck N
   * consecutive times.
   */
  consecutive_down?: number;

  /**
   * To be marked healthy the monitored origin must pass this healthcheck N
   * consecutive times.
   */
  consecutive_up?: number;

  /**
   * Object description.
   */
  description?: string;

  /**
   * A case-insensitive sub-string to look for in the response body. If this string
   * is not found, the origin will be marked as unhealthy. This parameter is only
   * valid for HTTP and HTTPS monitors.
   */
  expected_body?: string;

  /**
   * The expected HTTP response code or code range of the health check. This
   * parameter is only valid for HTTP and HTTPS monitors.
   */
  expected_codes?: string;

  /**
   * Follow redirects if returned by the origin. This parameter is only valid for
   * HTTP and HTTPS monitors.
   */
  follow_redirects?: boolean;

  /**
   * The HTTP request headers to send in the health check. It is recommended you set
   * a Host header by default. The User-Agent header cannot be overridden. This
   * parameter is only valid for HTTP and HTTPS monitors.
   */
  header?: unknown;

  /**
   * The interval between each health check. Shorter intervals may improve failover
   * time, but will increase load on the origins as we check from multiple locations.
   */
  interval?: number;

  /**
   * The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS
   * based checks and 'connection_established' for TCP based health checks.
   */
  method?: string;

  /**
   * The endpoint path you want to conduct a health check against. This parameter is
   * only valid for HTTP and HTTPS monitors.
   */
  path?: string;

  /**
   * The port number to connect to for the health check. Required for TCP, UDP, and
   * SMTP checks. HTTP and HTTPS checks should only define the port when using a
   * non-standard port (HTTP: default 80, HTTPS: default 443).
   */
  port?: number;

  /**
   * Assign this monitor to emulate the specified zone while probing. This parameter
   * is only valid for HTTP and HTTPS monitors.
   */
  probe_zone?: string;

  /**
   * The number of retries to attempt in case of a timeout before marking the origin
   * as unhealthy. Retries are attempted immediately.
   */
  retries?: number;

  /**
   * The timeout (in seconds) before marking the health check as failed.
   */
  timeout?: number;

  /**
   * The protocol to use for the health check. Currently supported protocols are
   * 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'.
   */
  type?: 'http' | 'https' | 'tcp' | 'udp_icmp' | 'icmp_ping' | 'smtp';
}

export namespace Monitors {
  export import Monitor = MonitorsAPI.Monitor;
  export import MonitorDeleteResponse = MonitorsAPI.MonitorDeleteResponse;
  export import MonitorAccountLoadBalancerMonitorsListMonitorsResponse = MonitorsAPI.MonitorAccountLoadBalancerMonitorsListMonitorsResponse;
  export import MonitorUpdateParams = MonitorsAPI.MonitorUpdateParams;
  export import MonitorAccountLoadBalancerMonitorsCreateMonitorParams = MonitorsAPI.MonitorAccountLoadBalancerMonitorsCreateMonitorParams;
  export import MonitorPatchParams = MonitorsAPI.MonitorPatchParams;
  export import Previews = PreviewsAPI.Previews;
  export import PreviewAccountLoadBalancerMonitorsPreviewMonitorResponse = PreviewsAPI.PreviewAccountLoadBalancerMonitorsPreviewMonitorResponse;
  export import PreviewAccountLoadBalancerMonitorsPreviewMonitorParams = PreviewsAPI.PreviewAccountLoadBalancerMonitorsPreviewMonitorParams;
  export import References = ReferencesAPI.References;
  export import ReferenceAccountLoadBalancerMonitorsListMonitorReferencesResponse = ReferencesAPI.ReferenceAccountLoadBalancerMonitorsListMonitorReferencesResponse;
}
