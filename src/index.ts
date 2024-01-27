// File generated from our OpenAPI spec by Stainless.

import * as Core from './core';
import * as Errors from './error';
import { type Agent } from './_shims/index';
import * as Uploads from './uploads';
import * as qs from 'qs';
import * as API from 'cloudflare/resources/index';

export interface ClientOptions {
  /**
   * Defaults to process.env['CLOUDFLARE_API_EMAIL'].
   */
  apiEmail?: string | undefined;

  /**
   * Defaults to process.env['CLOUDFLARE_API_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Defaults to process.env['CLOUDFLARE_API_TOKEN'].
   */
  apiToken?: string | undefined;

  /**
   * Defaults to process.env['CLOUDFLARE_USER_SERVICE_KEY'].
   */
  userServiceKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['CLOUDFLARE_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/** API Client for interfacing with the Cloudflare API. */
export class Cloudflare extends Core.APIClient {
  apiEmail: string;
  apiKey: string;
  apiToken: string;
  userServiceKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Cloudflare API.
   *
   * @param {string | undefined} [opts.apiEmail=process.env['CLOUDFLARE_API_EMAIL'] ?? undefined]
   * @param {string | undefined} [opts.apiKey=process.env['CLOUDFLARE_API_KEY'] ?? undefined]
   * @param {string | undefined} [opts.apiToken=process.env['CLOUDFLARE_API_TOKEN'] ?? undefined]
   * @param {string | undefined} [opts.userServiceKey=process.env['CLOUDFLARE_USER_SERVICE_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['CLOUDFLARE_BASE_URL'] ?? https://api.cloudflare.com/client/v4] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('CLOUDFLARE_BASE_URL'),
    apiEmail = Core.readEnv('CLOUDFLARE_API_EMAIL'),
    apiKey = Core.readEnv('CLOUDFLARE_API_KEY'),
    apiToken = Core.readEnv('CLOUDFLARE_API_TOKEN'),
    userServiceKey = Core.readEnv('CLOUDFLARE_USER_SERVICE_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiEmail === undefined) {
      throw new Errors.CloudflareError(
        "The CLOUDFLARE_API_EMAIL environment variable is missing or empty; either provide it, or instantiate the Cloudflare client with an apiEmail option, like new Cloudflare({ apiEmail: 'dev@cloudflare.com' }).",
      );
    }
    if (apiKey === undefined) {
      throw new Errors.CloudflareError(
        "The CLOUDFLARE_API_KEY environment variable is missing or empty; either provide it, or instantiate the Cloudflare client with an apiKey option, like new Cloudflare({ apiKey: 'my-cloudflare-api-key' }).",
      );
    }
    if (apiToken === undefined) {
      throw new Errors.CloudflareError(
        "The CLOUDFLARE_API_TOKEN environment variable is missing or empty; either provide it, or instantiate the Cloudflare client with an apiToken option, like new Cloudflare({ apiToken: 'my-cloudflare-api-token' }).",
      );
    }
    if (userServiceKey === undefined) {
      throw new Errors.CloudflareError(
        "The CLOUDFLARE_USER_SERVICE_KEY environment variable is missing or empty; either provide it, or instantiate the Cloudflare client with an userServiceKey option, like new Cloudflare({ userServiceKey: 'my-cloudflare-user-service-key' }).",
      );
    }

    const options: ClientOptions = {
      apiEmail,
      apiKey,
      apiToken,
      userServiceKey,
      ...opts,
      baseURL: baseURL || `https://api.cloudflare.com/client/v4`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });
    this._options = options;

    this.apiEmail = apiEmail;
    this.apiKey = apiKey;
    this.apiToken = apiToken;
    this.userServiceKey = userServiceKey;
  }

  accounts: API.Accounts = new API.Accounts(this);
  certificates: API.Certificates = new API.Certificates(this);
  ips: API.IPs = new API.IPs(this);
  memberships: API.Memberships = new API.Memberships(this);
  organizations: API.Organizations = new API.Organizations(this);
  radar: API.Radar = new API.Radar(this);
  railguns: API.Railguns = new API.Railguns(this);
  user: API.User = new API.User(this);
  zones: API.Zones = new API.Zones(this);
  ai: API.AI = new API.AI(this);
  alerting: API.Alerting = new API.Alerting(this);
  addressing: API.Addressing = new API.Addressing(this);
  hyperdriveConfigs: API.HyperdriveConfigs = new API.HyperdriveConfigs(this);
  imagesV2s: API.ImagesV2s = new API.ImagesV2s(this);
  intel: API.Intel = new API.Intel(this);
  webAnalytics: API.WebAnalytics = new API.WebAnalytics(this);
  stream: API.Stream = new API.Stream(this);
  filters: API.Filters = new API.Filters(this);
  firewallRules: API.FirewallRules = new API.FirewallRules(this);
  healthchecks: API.Healthchecks = new API.Healthchecks(this);
  hostnames: API.Hostnames = new API.Hostnames(this);
  pagerules: API.Pagerules = new API.Pagerules(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    const apiEmailAuth = this.apiEmailAuth(opts);
    const apiKeyAuth = this.apiKeyAuth(opts);
    const apiTokenAuth = this.apiTokenAuth(opts);
    const userServiceKeyAuth = this.userServiceKeyAuth(opts);
    return {};
  }

  protected apiEmailAuth(opts: Core.FinalRequestOptions): Core.Headers {
    return { 'X-Auth-Email': this.apiEmail };
  }

  protected apiKeyAuth(opts: Core.FinalRequestOptions): Core.Headers {
    return { 'X-Auth-Key': this.apiKey };
  }

  protected apiTokenAuth(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.apiToken}` };
  }

  protected userServiceKeyAuth(opts: Core.FinalRequestOptions): Core.Headers {
    return { 'X-Auth-User-Service-Key': this.userServiceKey };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static Cloudflare = this;

  static CloudflareError = Errors.CloudflareError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;
}

export const {
  CloudflareError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Cloudflare {
  // Helper functions
  export import toFile = Uploads.toFile;
  export import fileFromPath = Uploads.fileFromPath;

  export import RequestOptions = Core.RequestOptions;

  export import Accounts = API.Accounts;
  export import AccountRetrieveResponse = API.AccountRetrieveResponse;
  export import AccountUpdateResponse = API.AccountUpdateResponse;
  export import AccountAccountsListAccountsResponse = API.AccountAccountsListAccountsResponse;
  export import AccountAccountsListAccountsResponsesPage = API.AccountAccountsListAccountsResponsesPage;
  export import AccountUpdateParams = API.AccountUpdateParams;
  export import AccountAccountsListAccountsParams = API.AccountAccountsListAccountsParams;

  export import Certificates = API.Certificates;
  export import CertificateCreateResponse = API.CertificateCreateResponse;
  export import CertificateRetrieveResponse = API.CertificateRetrieveResponse;
  export import CertificateListResponse = API.CertificateListResponse;
  export import CertificateDeleteResponse = API.CertificateDeleteResponse;
  export import CertificateCreateParams = API.CertificateCreateParams;

  export import IPs = API.IPs;
  export import IPListResponse = API.IPListResponse;
  export import IPListParams = API.IPListParams;

  export import Memberships = API.Memberships;
  export import MembershipRetrieveResponse = API.MembershipRetrieveResponse;
  export import MembershipUpdateResponse = API.MembershipUpdateResponse;
  export import MembershipDeleteResponse = API.MembershipDeleteResponse;
  export import MembershipUserSAccountMembershipsListMembershipsResponse = API.MembershipUserSAccountMembershipsListMembershipsResponse;
  export import MembershipUserSAccountMembershipsListMembershipsResponsesPage = API.MembershipUserSAccountMembershipsListMembershipsResponsesPage;
  export import MembershipUpdateParams = API.MembershipUpdateParams;
  export import MembershipUserSAccountMembershipsListMembershipsParams = API.MembershipUserSAccountMembershipsListMembershipsParams;

  export import Organizations = API.Organizations;
  export import OrganizationRetrieveResponse = API.OrganizationRetrieveResponse;
  export import OrganizationUpdateResponse = API.OrganizationUpdateResponse;
  export import OrganizationUpdateParams = API.OrganizationUpdateParams;

  export import Radar = API.Radar;

  export import Railguns = API.Railguns;
  export import RailgunRetrieveResponse = API.RailgunRetrieveResponse;
  export import RailgunUpdateResponse = API.RailgunUpdateResponse;
  export import RailgunDeleteResponse = API.RailgunDeleteResponse;
  export import RailgunRailgunCreateRailgunResponse = API.RailgunRailgunCreateRailgunResponse;
  export import RailgunRailgunListRailgunsResponse = API.RailgunRailgunListRailgunsResponse;
  export import RailgunRailgunListRailgunsResponsesPage = API.RailgunRailgunListRailgunsResponsesPage;
  export import RailgunUpdateParams = API.RailgunUpdateParams;
  export import RailgunRailgunCreateRailgunParams = API.RailgunRailgunCreateRailgunParams;
  export import RailgunRailgunListRailgunsParams = API.RailgunRailgunListRailgunsParams;

  export import User = API.User;
  export import UserUserEditUserResponse = API.UserUserEditUserResponse;
  export import UserUserUserDetailsResponse = API.UserUserUserDetailsResponse;
  export import UserUserEditUserParams = API.UserUserEditUserParams;

  export import Zones = API.Zones;
  export import ZoneCreateResponse = API.ZoneCreateResponse;
  export import ZoneRetrieveResponse = API.ZoneRetrieveResponse;
  export import ZoneUpdateResponse = API.ZoneUpdateResponse;
  export import ZoneListResponse = API.ZoneListResponse;
  export import ZoneDeleteResponse = API.ZoneDeleteResponse;
  export import ZoneListResponsesPage = API.ZoneListResponsesPage;
  export import ZoneCreateParams = API.ZoneCreateParams;
  export import ZoneUpdateParams = API.ZoneUpdateParams;
  export import ZoneListParams = API.ZoneListParams;

  export import AI = API.AI;
  export import AIRunResponse = API.AIRunResponse;
  export import AIRunParams = API.AIRunParams;

  export import Alerting = API.Alerting;

  export import Addressing = API.Addressing;

  export import HyperdriveConfigs = API.HyperdriveConfigs;
  export import HyperdriveConfigRetrieveResponse = API.HyperdriveConfigRetrieveResponse;
  export import HyperdriveConfigUpdateResponse = API.HyperdriveConfigUpdateResponse;
  export import HyperdriveConfigDeleteResponse = API.HyperdriveConfigDeleteResponse;
  export import HyperdriveConfigUpdateParams = API.HyperdriveConfigUpdateParams;

  export import ImagesV2s = API.ImagesV2s;
  export import ImagesImagesListResponseV2 = API.ImagesImagesListResponseV2;
  export import ImagesV2ListParams = API.ImagesV2ListParams;

  export import Intel = API.Intel;

  export import WebAnalytics = API.WebAnalytics;

  export import Stream = API.Stream;

  export import Filters = API.Filters;
  export import FilterDeleteResponse = API.FilterDeleteResponse;
  export import FilterDeleteParams = API.FilterDeleteParams;

  export import FirewallRules = API.FirewallRules;
  export import FirewallRuleUpdateResponse = API.FirewallRuleUpdateResponse;
  export import FirewallRuleDeleteResponse = API.FirewallRuleDeleteResponse;
  export import FirewallRuleUpdateParams = API.FirewallRuleUpdateParams;
  export import FirewallRuleDeleteParams = API.FirewallRuleDeleteParams;

  export import Healthchecks = API.Healthchecks;
  export import HealthcheckUpdateParams = API.HealthcheckUpdateParams;

  export import Hostnames = API.Hostnames;

  export import Pagerules = API.Pagerules;
  export import PageruleUpdateParams = API.PageruleUpdateParams;

  export import HyperdriveHyperdriveWithIdentifier = API.HyperdriveHyperdriveWithIdentifier;
  export import VectorizeCreateIndexResponse = API.VectorizeCreateIndexResponse;
  export import WaitingRoomSettingsResponse = API.WaitingRoomSettingsResponse;
}

export default Cloudflare;
