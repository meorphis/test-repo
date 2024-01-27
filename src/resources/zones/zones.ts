// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as ZonesAPI from 'cloudflare/resources/zones/zones';
import * as ActivationChecksAPI from 'cloudflare/resources/zones/activation-checks';
import * as AvailablePlansAPI from 'cloudflare/resources/zones/available-plans';
import * as AvailableRatePlansAPI from 'cloudflare/resources/zones/available-rate-plans';
import * as BotManagementAPI from 'cloudflare/resources/zones/bot-management';
import * as CacheAPI from 'cloudflare/resources/zones/cache';
import * as ClientCertificatesAPI from 'cloudflare/resources/zones/client-certificates';
import * as CustomNsAPI from 'cloudflare/resources/zones/custom-ns';
import * as CustomPagesAPI from 'cloudflare/resources/zones/custom-pages';
import * as DcvDelegationsAPI from 'cloudflare/resources/zones/dcv-delegations';
import * as DnssecsAPI from 'cloudflare/resources/zones/dnssecs';
import * as FiltersAPI from 'cloudflare/resources/zones/filters';
import * as HoldsAPI from 'cloudflare/resources/zones/holds';
import * as KeylessCertificatesAPI from 'cloudflare/resources/zones/keyless-certificates';
import * as LoadBalancersAPI from 'cloudflare/resources/zones/load-balancers';
import * as ManagedHeadersAPI from 'cloudflare/resources/zones/managed-headers';
import * as PurgeCachesAPI from 'cloudflare/resources/zones/purge-caches';
import * as RateLimitsAPI from 'cloudflare/resources/zones/rate-limits';
import * as SnippetsAPI from 'cloudflare/resources/zones/snippets';
import * as SnippetsRulesAPI from 'cloudflare/resources/zones/snippets-rules';
import * as SubscriptionsAPI from 'cloudflare/resources/zones/subscriptions';
import * as URLNormalizationsAPI from 'cloudflare/resources/zones/url-normalizations';
import * as AccessesAPI from 'cloudflare/resources/zones/accesses/accesses';
import * as AcmsAPI from 'cloudflare/resources/zones/acms/acms';
import * as AnalyticsAPI from 'cloudflare/resources/zones/analytics/analytics';
import * as APIGatewayAPI from 'cloudflare/resources/zones/api-gateway/api-gateway';
import * as ArgosAPI from 'cloudflare/resources/zones/argos/argos';
import * as CachesAPI from 'cloudflare/resources/zones/caches/caches';
import * as CertificateAuthoritiesAPI from 'cloudflare/resources/zones/certificate-authorities/certificate-authorities';
import * as CustomCertificatesAPI from 'cloudflare/resources/zones/custom-certificates/custom-certificates';
import * as CustomHostnamesAPI from 'cloudflare/resources/zones/custom-hostnames/custom-hostnames';
import * as DNSAnalyticsAPI from 'cloudflare/resources/zones/dns-analytics/dns-analytics';
import * as DNSRecordsAPI from 'cloudflare/resources/zones/dns-records/dns-records';
import * as EmailsAPI from 'cloudflare/resources/zones/emails/emails';
import * as FirewallsAPI from 'cloudflare/resources/zones/firewalls/firewalls';
import * as HealthchecksAPI from 'cloudflare/resources/zones/healthchecks/healthchecks';
import * as LogpushesAPI from 'cloudflare/resources/zones/logpushes/logpushes';
import * as LogsAPI from 'cloudflare/resources/zones/logs/logs';
import * as OriginTlsClientAuthsAPI from 'cloudflare/resources/zones/origin-tls-client-auths/origin-tls-client-auths';
import * as PageShieldAPI from 'cloudflare/resources/zones/page-shield/page-shield';
import * as PagerulesAPI from 'cloudflare/resources/zones/pagerules/pagerules';
import * as RailgunsAPI from 'cloudflare/resources/zones/railguns/railguns';
import * as RulesetsAPI from 'cloudflare/resources/zones/rulesets/rulesets';
import * as SecondaryDNSAPI from 'cloudflare/resources/zones/secondary-dns/secondary-dns';
import * as SettingsAPI from 'cloudflare/resources/zones/settings/settings';
import * as SpectrumsAPI from 'cloudflare/resources/zones/spectrums/spectrums';
import * as SpeedAPIAPI from 'cloudflare/resources/zones/speed-api/speed-api';
import * as SslsAPI from 'cloudflare/resources/zones/ssls/ssls';
import * as WaitingRoomsAPI from 'cloudflare/resources/zones/waiting-rooms/waiting-rooms';
import * as Web3sAPI from 'cloudflare/resources/zones/web3s/web3s';
import * as WorkersAPI from 'cloudflare/resources/zones/workers/workers';
import * as ZarazsAPI from 'cloudflare/resources/zones/zarazs/zarazs';
import { Page } from 'cloudflare/pagination';

export class Zones extends APIResource {
  loadBalancers: LoadBalancersAPI.LoadBalancers = new LoadBalancersAPI.LoadBalancers(this._client);
  accesses: AccessesAPI.Accesses = new AccessesAPI.Accesses(this._client);
  dnsAnalytics: DNSAnalyticsAPI.DNSAnalytics = new DNSAnalyticsAPI.DNSAnalytics(this._client);
  purgeCaches: PurgeCachesAPI.PurgeCaches = new PurgeCachesAPI.PurgeCaches(this._client);
  ssls: SslsAPI.Ssls = new SslsAPI.Ssls(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  acms: AcmsAPI.Acms = new AcmsAPI.Acms(this._client);
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  argos: ArgosAPI.Argos = new ArgosAPI.Argos(this._client);
  availablePlans: AvailablePlansAPI.AvailablePlans = new AvailablePlansAPI.AvailablePlans(this._client);
  availableRatePlans: AvailableRatePlansAPI.AvailableRatePlans = new AvailableRatePlansAPI.AvailableRatePlans(
    this._client,
  );
  caches: CachesAPI.Caches = new CachesAPI.Caches(this._client);
  certificateAuthorities: CertificateAuthoritiesAPI.CertificateAuthorities =
    new CertificateAuthoritiesAPI.CertificateAuthorities(this._client);
  clientCertificates: ClientCertificatesAPI.ClientCertificates = new ClientCertificatesAPI.ClientCertificates(
    this._client,
  );
  customCertificates: CustomCertificatesAPI.CustomCertificates = new CustomCertificatesAPI.CustomCertificates(
    this._client,
  );
  customHostnames: CustomHostnamesAPI.CustomHostnames = new CustomHostnamesAPI.CustomHostnames(this._client);
  customNs: CustomNsAPI.CustomNs = new CustomNsAPI.CustomNs(this._client);
  customPages: CustomPagesAPI.CustomPages = new CustomPagesAPI.CustomPages(this._client);
  dnsRecords: DNSRecordsAPI.DNSRecords = new DNSRecordsAPI.DNSRecords(this._client);
  dnssecs: DnssecsAPI.Dnssecs = new DnssecsAPI.Dnssecs(this._client);
  emails: EmailsAPI.Emails = new EmailsAPI.Emails(this._client);
  filters: FiltersAPI.Filters = new FiltersAPI.Filters(this._client);
  firewalls: FirewallsAPI.Firewalls = new FirewallsAPI.Firewalls(this._client);
  healthchecks: HealthchecksAPI.Healthchecks = new HealthchecksAPI.Healthchecks(this._client);
  keylessCertificates: KeylessCertificatesAPI.KeylessCertificates =
    new KeylessCertificatesAPI.KeylessCertificates(this._client);
  logpushes: LogpushesAPI.Logpushes = new LogpushesAPI.Logpushes(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
  originTlsClientAuths: OriginTlsClientAuthsAPI.OriginTlsClientAuths =
    new OriginTlsClientAuthsAPI.OriginTlsClientAuths(this._client);
  pagerules: PagerulesAPI.Pagerules = new PagerulesAPI.Pagerules(this._client);
  railguns: RailgunsAPI.Railguns = new RailgunsAPI.Railguns(this._client);
  rateLimits: RateLimitsAPI.RateLimits = new RateLimitsAPI.RateLimits(this._client);
  secondaryDNS: SecondaryDNSAPI.SecondaryDNS = new SecondaryDNSAPI.SecondaryDNS(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  waitingRooms: WaitingRoomsAPI.WaitingRooms = new WaitingRoomsAPI.WaitingRooms(this._client);
  web3s: Web3sAPI.Web3s = new Web3sAPI.Web3s(this._client);
  workers: WorkersAPI.Workers = new WorkersAPI.Workers(this._client);
  activationChecks: ActivationChecksAPI.ActivationChecks = new ActivationChecksAPI.ActivationChecks(
    this._client,
  );
  apiGateway: APIGatewayAPI.APIGateway = new APIGatewayAPI.APIGateway(this._client);
  managedHeaders: ManagedHeadersAPI.ManagedHeaders = new ManagedHeadersAPI.ManagedHeaders(this._client);
  rulesets: RulesetsAPI.Rulesets = new RulesetsAPI.Rulesets(this._client);
  urlNormalizations: URLNormalizationsAPI.URLNormalizations = new URLNormalizationsAPI.URLNormalizations(
    this._client,
  );
  spectrums: SpectrumsAPI.Spectrums = new SpectrumsAPI.Spectrums(this._client);
  holds: HoldsAPI.Holds = new HoldsAPI.Holds(this._client);
  pageShield: PageShieldAPI.PageShield = new PageShieldAPI.PageShield(this._client);
  botManagement: BotManagementAPI.BotManagement = new BotManagementAPI.BotManagement(this._client);
  cache: CacheAPI.Cache = new CacheAPI.Cache(this._client);
  dcvDelegations: DcvDelegationsAPI.DcvDelegations = new DcvDelegationsAPI.DcvDelegations(this._client);
  zarazs: ZarazsAPI.Zarazs = new ZarazsAPI.Zarazs(this._client);
  snippets: SnippetsAPI.Snippets = new SnippetsAPI.Snippets(this._client);
  snippetsRules: SnippetsRulesAPI.SnippetsRules = new SnippetsRulesAPI.SnippetsRules(this._client);
  speedAPI: SpeedAPIAPI.SpeedAPI = new SpeedAPIAPI.SpeedAPI(this._client);

  /**
   * Create Zone
   */
  create(body: ZoneCreateParams, options?: Core.RequestOptions): Core.APIPromise<ZoneCreateResponse> {
    return this._client.post('/zones', { body, ...options });
  }

  /**
   * Zone Details
   */
  retrieve(identifier: string, options?: Core.RequestOptions): Core.APIPromise<ZoneRetrieveResponse> {
    return this._client.get(`/zones/${identifier}`, options);
  }

  /**
   * Edits a zone. Only one zone property can be changed at a time.
   */
  update(
    identifier: string,
    body: ZoneUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZoneUpdateResponse> {
    return this._client.patch(`/zones/${identifier}`, { body, ...options });
  }

  /**
   * Lists, searches, sorts, and filters your zones.
   */
  list(
    query?: ZoneListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ZoneListResponsesPage, ZoneListResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<ZoneListResponsesPage, ZoneListResponse>;
  list(
    query: ZoneListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ZoneListResponsesPage, ZoneListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/zones', ZoneListResponsesPage, { query, ...options });
  }

  /**
   * Deletes an existing zone.
   */
  delete(identifier: string, options?: Core.RequestOptions): Core.APIPromise<ZoneDeleteResponse> {
    return this._client.delete(`/zones/${identifier}`, options);
  }
}

export class ZoneListResponsesPage extends Page<ZoneListResponse> {}

export interface ZoneCreateResponse {
  errors?: Array<ZoneCreateResponse.Error>;

  messages?: Array<ZoneCreateResponse.Message>;

  result?: ZoneCreateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace ZoneCreateResponse {
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
     * Identifier
     */
    id: string;

    /**
     * The account the zone belongs to
     */
    account: Result.Account;

    /**
     * The last time proof of ownership was detected and the zone was made active
     */
    activated_on: string | null;

    /**
     * When the zone was created
     */
    created_on: string;

    /**
     * The interval (in seconds) from when development mode expires (positive integer)
     * or last expired (negative integer) for the domain. If development mode has never
     * been enabled, this value is 0.
     */
    development_mode: number;

    /**
     * Metadata about the zone
     */
    meta: Result.Meta;

    /**
     * When the zone was last modified
     */
    modified_on: string;

    /**
     * The domain name
     */
    name: string;

    /**
     * DNS host at the time of switching to Cloudflare
     */
    original_dnshost: string | null;

    /**
     * Original name servers before moving to Cloudflare Notes: Is this only available
     * for full zones?
     */
    original_name_servers: Array<string> | null;

    /**
     * Registrar for the domain at the time of switching to Cloudflare
     */
    original_registrar: string | null;

    /**
     * The owner of the zone
     */
    owner: Result.Owner;

    /**
     * An array of domains used for custom name servers. This is only available for
     * Business and Enterprise plans.
     */
    vanity_name_servers?: Array<string>;
  }

  export namespace Result {
    /**
     * The account the zone belongs to
     */
    export interface Account {
      /**
       * Identifier
       */
      id?: string;

      /**
       * The name of the account
       */
      name?: string;
    }

    /**
     * Metadata about the zone
     */
    export interface Meta {
      /**
       * The zone is only configured for CDN
       */
      cdn_only?: boolean;

      /**
       * Number of Custom Certificates the zone can have
       */
      custom_certificate_quota?: number;

      /**
       * The zone is only configured for DNS
       */
      dns_only?: boolean;

      /**
       * The zone is setup with Foundation DNS
       */
      foundation_dns?: boolean;

      /**
       * Number of Page Rules a zone can have
       */
      page_rule_quota?: number;

      /**
       * The zone has been flagged for phishing
       */
      phishing_detected?: boolean;

      step?: number;
    }

    /**
     * The owner of the zone
     */
    export interface Owner {
      /**
       * Identifier
       */
      id?: string;

      /**
       * Name of the owner
       */
      name?: string;

      /**
       * The type of owner
       */
      type?: string;
    }
  }
}

export interface ZoneRetrieveResponse {
  errors?: Array<ZoneRetrieveResponse.Error>;

  messages?: Array<ZoneRetrieveResponse.Message>;

  result?: ZoneRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace ZoneRetrieveResponse {
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
     * Identifier
     */
    id: string;

    /**
     * The account the zone belongs to
     */
    account: Result.Account;

    /**
     * The last time proof of ownership was detected and the zone was made active
     */
    activated_on: string | null;

    /**
     * When the zone was created
     */
    created_on: string;

    /**
     * The interval (in seconds) from when development mode expires (positive integer)
     * or last expired (negative integer) for the domain. If development mode has never
     * been enabled, this value is 0.
     */
    development_mode: number;

    /**
     * Metadata about the zone
     */
    meta: Result.Meta;

    /**
     * When the zone was last modified
     */
    modified_on: string;

    /**
     * The domain name
     */
    name: string;

    /**
     * DNS host at the time of switching to Cloudflare
     */
    original_dnshost: string | null;

    /**
     * Original name servers before moving to Cloudflare Notes: Is this only available
     * for full zones?
     */
    original_name_servers: Array<string> | null;

    /**
     * Registrar for the domain at the time of switching to Cloudflare
     */
    original_registrar: string | null;

    /**
     * The owner of the zone
     */
    owner: Result.Owner;

    /**
     * An array of domains used for custom name servers. This is only available for
     * Business and Enterprise plans.
     */
    vanity_name_servers?: Array<string>;
  }

  export namespace Result {
    /**
     * The account the zone belongs to
     */
    export interface Account {
      /**
       * Identifier
       */
      id?: string;

      /**
       * The name of the account
       */
      name?: string;
    }

    /**
     * Metadata about the zone
     */
    export interface Meta {
      /**
       * The zone is only configured for CDN
       */
      cdn_only?: boolean;

      /**
       * Number of Custom Certificates the zone can have
       */
      custom_certificate_quota?: number;

      /**
       * The zone is only configured for DNS
       */
      dns_only?: boolean;

      /**
       * The zone is setup with Foundation DNS
       */
      foundation_dns?: boolean;

      /**
       * Number of Page Rules a zone can have
       */
      page_rule_quota?: number;

      /**
       * The zone has been flagged for phishing
       */
      phishing_detected?: boolean;

      step?: number;
    }

    /**
     * The owner of the zone
     */
    export interface Owner {
      /**
       * Identifier
       */
      id?: string;

      /**
       * Name of the owner
       */
      name?: string;

      /**
       * The type of owner
       */
      type?: string;
    }
  }
}

export interface ZoneUpdateResponse {
  errors?: Array<ZoneUpdateResponse.Error>;

  messages?: Array<ZoneUpdateResponse.Message>;

  result?: ZoneUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace ZoneUpdateResponse {
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
     * Identifier
     */
    id: string;

    /**
     * The account the zone belongs to
     */
    account: Result.Account;

    /**
     * The last time proof of ownership was detected and the zone was made active
     */
    activated_on: string | null;

    /**
     * When the zone was created
     */
    created_on: string;

    /**
     * The interval (in seconds) from when development mode expires (positive integer)
     * or last expired (negative integer) for the domain. If development mode has never
     * been enabled, this value is 0.
     */
    development_mode: number;

    /**
     * Metadata about the zone
     */
    meta: Result.Meta;

    /**
     * When the zone was last modified
     */
    modified_on: string;

    /**
     * The domain name
     */
    name: string;

    /**
     * DNS host at the time of switching to Cloudflare
     */
    original_dnshost: string | null;

    /**
     * Original name servers before moving to Cloudflare Notes: Is this only available
     * for full zones?
     */
    original_name_servers: Array<string> | null;

    /**
     * Registrar for the domain at the time of switching to Cloudflare
     */
    original_registrar: string | null;

    /**
     * The owner of the zone
     */
    owner: Result.Owner;

    /**
     * An array of domains used for custom name servers. This is only available for
     * Business and Enterprise plans.
     */
    vanity_name_servers?: Array<string>;
  }

  export namespace Result {
    /**
     * The account the zone belongs to
     */
    export interface Account {
      /**
       * Identifier
       */
      id?: string;

      /**
       * The name of the account
       */
      name?: string;
    }

    /**
     * Metadata about the zone
     */
    export interface Meta {
      /**
       * The zone is only configured for CDN
       */
      cdn_only?: boolean;

      /**
       * Number of Custom Certificates the zone can have
       */
      custom_certificate_quota?: number;

      /**
       * The zone is only configured for DNS
       */
      dns_only?: boolean;

      /**
       * The zone is setup with Foundation DNS
       */
      foundation_dns?: boolean;

      /**
       * Number of Page Rules a zone can have
       */
      page_rule_quota?: number;

      /**
       * The zone has been flagged for phishing
       */
      phishing_detected?: boolean;

      step?: number;
    }

    /**
     * The owner of the zone
     */
    export interface Owner {
      /**
       * Identifier
       */
      id?: string;

      /**
       * Name of the owner
       */
      name?: string;

      /**
       * The type of owner
       */
      type?: string;
    }
  }
}

export interface ZoneListResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * The account the zone belongs to
   */
  account: ZoneListResponse.Account;

  /**
   * The last time proof of ownership was detected and the zone was made active
   */
  activated_on: string | null;

  /**
   * When the zone was created
   */
  created_on: string;

  /**
   * The interval (in seconds) from when development mode expires (positive integer)
   * or last expired (negative integer) for the domain. If development mode has never
   * been enabled, this value is 0.
   */
  development_mode: number;

  /**
   * Metadata about the zone
   */
  meta: ZoneListResponse.Meta;

  /**
   * When the zone was last modified
   */
  modified_on: string;

  /**
   * The domain name
   */
  name: string;

  /**
   * DNS host at the time of switching to Cloudflare
   */
  original_dnshost: string | null;

  /**
   * Original name servers before moving to Cloudflare Notes: Is this only available
   * for full zones?
   */
  original_name_servers: Array<string> | null;

  /**
   * Registrar for the domain at the time of switching to Cloudflare
   */
  original_registrar: string | null;

  /**
   * The owner of the zone
   */
  owner: ZoneListResponse.Owner;

  /**
   * An array of domains used for custom name servers. This is only available for
   * Business and Enterprise plans.
   */
  vanity_name_servers?: Array<string>;
}

export namespace ZoneListResponse {
  /**
   * The account the zone belongs to
   */
  export interface Account {
    /**
     * Identifier
     */
    id?: string;

    /**
     * The name of the account
     */
    name?: string;
  }

  /**
   * Metadata about the zone
   */
  export interface Meta {
    /**
     * The zone is only configured for CDN
     */
    cdn_only?: boolean;

    /**
     * Number of Custom Certificates the zone can have
     */
    custom_certificate_quota?: number;

    /**
     * The zone is only configured for DNS
     */
    dns_only?: boolean;

    /**
     * The zone is setup with Foundation DNS
     */
    foundation_dns?: boolean;

    /**
     * Number of Page Rules a zone can have
     */
    page_rule_quota?: number;

    /**
     * The zone has been flagged for phishing
     */
    phishing_detected?: boolean;

    step?: number;
  }

  /**
   * The owner of the zone
   */
  export interface Owner {
    /**
     * Identifier
     */
    id?: string;

    /**
     * Name of the owner
     */
    name?: string;

    /**
     * The type of owner
     */
    type?: string;
  }
}

export interface ZoneDeleteResponse {
  errors?: Array<ZoneDeleteResponse.Error>;

  messages?: Array<ZoneDeleteResponse.Message>;

  result?: ZoneDeleteResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace ZoneDeleteResponse {
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
     * Identifier
     */
    id: string;
  }
}

export interface ZoneCreateParams {
  account: ZoneCreateParams.Account;

  /**
   * The domain name
   */
  name: string;

  /**
   * A full zone implies that DNS is hosted with Cloudflare. A partial zone is
   * typically a partner-hosted zone or a CNAME setup.
   */
  type?: 'full' | 'partial' | 'secondary';
}

export namespace ZoneCreateParams {
  export interface Account {
    /**
     * Identifier
     */
    id?: string;
  }
}

export interface ZoneUpdateParams {
  /**
   * (Deprecated) Please use the `/zones/{identifier}/subscription` API to update a
   * zone's plan. Changing this value will create/cancel associated subscriptions. To
   * view available plans for this zone, see Zone Plans.
   */
  plan?: ZoneUpdateParams.Plan;

  /**
   * A full zone implies that DNS is hosted with Cloudflare. A partial zone is
   * typically a partner-hosted zone or a CNAME setup. This parameter is only
   * available to Enterprise customers or if it has been explicitly enabled on a
   * zone.
   */
  type?: 'full' | 'partial' | 'secondary';

  /**
   * An array of domains used for custom name servers. This is only available for
   * Business and Enterprise plans.
   */
  vanity_name_servers?: Array<string>;
}

export namespace ZoneUpdateParams {
  /**
   * (Deprecated) Please use the `/zones/{identifier}/subscription` API to update a
   * zone's plan. Changing this value will create/cancel associated subscriptions. To
   * view available plans for this zone, see Zone Plans.
   */
  export interface Plan {
    /**
     * Identifier
     */
    id?: string;
  }
}

export interface ZoneListParams {
  account?: ZoneListParams.Account;

  /**
   * Direction to order zones.
   */
  direction?: 'asc' | 'desc';

  /**
   * Whether to match all search requirements or at least one (any).
   */
  match?: 'any' | 'all';

  /**
   * A domain name. Optional filter operators can be provided to extend refine the
   * search:
   *
   * - `equal` (default)
   * - `not_equal`
   * - `starts_with`
   * - `ends_with`
   * - `contains`
   * - `starts_with_case_sensitive`
   * - `ends_with_case_sensitive`
   * - `contains_case_sensitive`
   */
  name?: string;

  /**
   * Field to order zones by.
   */
  order?: 'name' | 'status' | 'account.id' | 'account.name';

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Number of zones per page.
   */
  per_page?: number;

  /**
   * A zone status
   */
  status?: 'initializing' | 'pending' | 'active' | 'moved';
}

export namespace ZoneListParams {
  export interface Account {
    /**
     * An account ID
     */
    id?: string;

    /**
     * An account Name. Optional filter operators can be provided to extend refine the
     * search:
     *
     * - `equal` (default)
     * - `not_equal`
     * - `starts_with`
     * - `ends_with`
     * - `contains`
     * - `starts_with_case_sensitive`
     * - `ends_with_case_sensitive`
     * - `contains_case_sensitive`
     */
    name?: string;
  }
}

export namespace Zones {
  export import ZoneCreateResponse = ZonesAPI.ZoneCreateResponse;
  export import ZoneRetrieveResponse = ZonesAPI.ZoneRetrieveResponse;
  export import ZoneUpdateResponse = ZonesAPI.ZoneUpdateResponse;
  export import ZoneListResponse = ZonesAPI.ZoneListResponse;
  export import ZoneDeleteResponse = ZonesAPI.ZoneDeleteResponse;
  export import ZoneListResponsesPage = ZonesAPI.ZoneListResponsesPage;
  export import ZoneCreateParams = ZonesAPI.ZoneCreateParams;
  export import ZoneUpdateParams = ZonesAPI.ZoneUpdateParams;
  export import ZoneListParams = ZonesAPI.ZoneListParams;
  export import LoadBalancers = LoadBalancersAPI.LoadBalancers;
  export import LoadBalancer = LoadBalancersAPI.LoadBalancer;
  export import LoadBalancerListResponse = LoadBalancersAPI.LoadBalancerListResponse;
  export import LoadBalancerDeleteResponse = LoadBalancersAPI.LoadBalancerDeleteResponse;
  export import LoadBalancerCreateParams = LoadBalancersAPI.LoadBalancerCreateParams;
  export import LoadBalancerUpdateParams = LoadBalancersAPI.LoadBalancerUpdateParams;
  export import LoadBalancerPatchParams = LoadBalancersAPI.LoadBalancerPatchParams;
  export import Accesses = AccessesAPI.Accesses;
  export import DNSAnalytics = DNSAnalyticsAPI.DNSAnalytics;
  export import PurgeCaches = PurgeCachesAPI.PurgeCaches;
  export import PurgeCachZonePurgeResponse = PurgeCachesAPI.PurgeCachZonePurgeResponse;
  export import PurgeCachZonePurgeParams = PurgeCachesAPI.PurgeCachZonePurgeParams;
  export import Ssls = SslsAPI.Ssls;
  export import Subscriptions = SubscriptionsAPI.Subscriptions;
  export import SubscriptionZoneSubscriptionCreateZoneSubscriptionResponse = SubscriptionsAPI.SubscriptionZoneSubscriptionCreateZoneSubscriptionResponse;
  export import SubscriptionZoneSubscriptionUpdateZoneSubscriptionResponse = SubscriptionsAPI.SubscriptionZoneSubscriptionUpdateZoneSubscriptionResponse;
  export import SubscriptionZoneSubscriptionZoneSubscriptionDetailsResponse = SubscriptionsAPI.SubscriptionZoneSubscriptionZoneSubscriptionDetailsResponse;
  export import SubscriptionZoneSubscriptionCreateZoneSubscriptionParams = SubscriptionsAPI.SubscriptionZoneSubscriptionCreateZoneSubscriptionParams;
  export import SubscriptionZoneSubscriptionUpdateZoneSubscriptionParams = SubscriptionsAPI.SubscriptionZoneSubscriptionUpdateZoneSubscriptionParams;
  export import Acms = AcmsAPI.Acms;
  export import Analytics = AnalyticsAPI.Analytics;
  export import Argos = ArgosAPI.Argos;
  export import AvailablePlans = AvailablePlansAPI.AvailablePlans;
  export import AvailablePlanRetrieveResponse = AvailablePlansAPI.AvailablePlanRetrieveResponse;
  export import AvailablePlanListResponse = AvailablePlansAPI.AvailablePlanListResponse;
  export import AvailableRatePlans = AvailableRatePlansAPI.AvailableRatePlans;
  export import AvailableRatePlanZoneRatePlanListAvailableRatePlansResponse = AvailableRatePlansAPI.AvailableRatePlanZoneRatePlanListAvailableRatePlansResponse;
  export import Caches = CachesAPI.Caches;
  export import CertificateAuthorities = CertificateAuthoritiesAPI.CertificateAuthorities;
  export import ClientCertificates = ClientCertificatesAPI.ClientCertificates;
  export import ClientCertificateRetrieveResponse = ClientCertificatesAPI.ClientCertificateRetrieveResponse;
  export import ClientCertificateUpdateResponse = ClientCertificatesAPI.ClientCertificateUpdateResponse;
  export import ClientCertificateDeleteResponse = ClientCertificatesAPI.ClientCertificateDeleteResponse;
  export import ClientCertificateClientCertificateForAZoneCreateClientCertificateResponse = ClientCertificatesAPI.ClientCertificateClientCertificateForAZoneCreateClientCertificateResponse;
  export import ClientCertificateClientCertificateForAZoneListClientCertificatesResponse = ClientCertificatesAPI.ClientCertificateClientCertificateForAZoneListClientCertificatesResponse;
  export import ClientCertificateClientCertificateForAZoneListClientCertificatesResponsesPage = ClientCertificatesAPI.ClientCertificateClientCertificateForAZoneListClientCertificatesResponsesPage;
  export import ClientCertificateClientCertificateForAZoneCreateClientCertificateParams = ClientCertificatesAPI.ClientCertificateClientCertificateForAZoneCreateClientCertificateParams;
  export import ClientCertificateClientCertificateForAZoneListClientCertificatesParams = ClientCertificatesAPI.ClientCertificateClientCertificateForAZoneListClientCertificatesParams;
  export import CustomCertificates = CustomCertificatesAPI.CustomCertificates;
  export import CustomCertificateRetrieveResponse = CustomCertificatesAPI.CustomCertificateRetrieveResponse;
  export import CustomCertificateUpdateResponse = CustomCertificatesAPI.CustomCertificateUpdateResponse;
  export import CustomCertificateDeleteResponse = CustomCertificatesAPI.CustomCertificateDeleteResponse;
  export import CustomCertificateCustomSslForAZoneCreateSslConfigurationResponse = CustomCertificatesAPI.CustomCertificateCustomSslForAZoneCreateSslConfigurationResponse;
  export import CustomCertificateCustomSslForAZoneListSslConfigurationsResponse = CustomCertificatesAPI.CustomCertificateCustomSslForAZoneListSslConfigurationsResponse;
  export import CustomCertificateCustomSslForAZoneListSslConfigurationsResponsesPage = CustomCertificatesAPI.CustomCertificateCustomSslForAZoneListSslConfigurationsResponsesPage;
  export import CustomCertificateUpdateParams = CustomCertificatesAPI.CustomCertificateUpdateParams;
  export import CustomCertificateCustomSslForAZoneCreateSslConfigurationParams = CustomCertificatesAPI.CustomCertificateCustomSslForAZoneCreateSslConfigurationParams;
  export import CustomCertificateCustomSslForAZoneListSslConfigurationsParams = CustomCertificatesAPI.CustomCertificateCustomSslForAZoneListSslConfigurationsParams;
  export import CustomHostnames = CustomHostnamesAPI.CustomHostnames;
  export import CustomHostnameRetrieveResponse = CustomHostnamesAPI.CustomHostnameRetrieveResponse;
  export import CustomHostnameUpdateResponse = CustomHostnamesAPI.CustomHostnameUpdateResponse;
  export import CustomHostnameDeleteResponse = CustomHostnamesAPI.CustomHostnameDeleteResponse;
  export import CustomHostnameCustomHostnameForAZoneCreateCustomHostnameResponse = CustomHostnamesAPI.CustomHostnameCustomHostnameForAZoneCreateCustomHostnameResponse;
  export import CustomHostnameCustomHostnameForAZoneListCustomHostnamesResponse = CustomHostnamesAPI.CustomHostnameCustomHostnameForAZoneListCustomHostnamesResponse;
  export import CustomHostnameCustomHostnameForAZoneListCustomHostnamesResponsesPage = CustomHostnamesAPI.CustomHostnameCustomHostnameForAZoneListCustomHostnamesResponsesPage;
  export import CustomHostnameUpdateParams = CustomHostnamesAPI.CustomHostnameUpdateParams;
  export import CustomHostnameCustomHostnameForAZoneCreateCustomHostnameParams = CustomHostnamesAPI.CustomHostnameCustomHostnameForAZoneCreateCustomHostnameParams;
  export import CustomHostnameCustomHostnameForAZoneListCustomHostnamesParams = CustomHostnamesAPI.CustomHostnameCustomHostnameForAZoneListCustomHostnamesParams;
  export import CustomNs = CustomNsAPI.CustomNs;
  export import CustomNAccountLevelCustomNameserversUsageForAZoneGetAccountCustomNameserverRelatedZoneMetadataResponse = CustomNsAPI.CustomNAccountLevelCustomNameserversUsageForAZoneGetAccountCustomNameserverRelatedZoneMetadataResponse;
  export import CustomNAccountLevelCustomNameserversUsageForAZoneSetAccountCustomNameserverRelatedZoneMetadataResponse = CustomNsAPI.CustomNAccountLevelCustomNameserversUsageForAZoneSetAccountCustomNameserverRelatedZoneMetadataResponse;
  export import CustomNAccountLevelCustomNameserversUsageForAZoneSetAccountCustomNameserverRelatedZoneMetadataParams = CustomNsAPI.CustomNAccountLevelCustomNameserversUsageForAZoneSetAccountCustomNameserverRelatedZoneMetadataParams;
  export import CustomPages = CustomPagesAPI.CustomPages;
  export import CustomPageRetrieveResponse = CustomPagesAPI.CustomPageRetrieveResponse;
  export import CustomPageUpdateResponse = CustomPagesAPI.CustomPageUpdateResponse;
  export import CustomPageCustomPagesForAZoneListCustomPagesResponse = CustomPagesAPI.CustomPageCustomPagesForAZoneListCustomPagesResponse;
  export import CustomPageUpdateParams = CustomPagesAPI.CustomPageUpdateParams;
  export import DNSRecords = DNSRecordsAPI.DNSRecords;
  export import DNSRecord = DNSRecordsAPI.DNSRecord;
  export import DNSRecordDeleteResponse = DNSRecordsAPI.DNSRecordDeleteResponse;
  export import DNSRecordDNSRecordsForAZoneListDNSRecordsResponse = DNSRecordsAPI.DNSRecordDNSRecordsForAZoneListDNSRecordsResponse;
  export import DNSRecordDNSRecordsForAZoneListDNSRecordsResponsesPage = DNSRecordsAPI.DNSRecordDNSRecordsForAZoneListDNSRecordsResponsesPage;
  export import DNSRecordUpdateParams = DNSRecordsAPI.DNSRecordUpdateParams;
  export import DNSRecordDNSRecordsForAZoneCreateDNSRecordParams = DNSRecordsAPI.DNSRecordDNSRecordsForAZoneCreateDNSRecordParams;
  export import DNSRecordDNSRecordsForAZoneListDNSRecordsParams = DNSRecordsAPI.DNSRecordDNSRecordsForAZoneListDNSRecordsParams;
  export import DNSRecordPatchParams = DNSRecordsAPI.DNSRecordPatchParams;
  export import Dnssecs = DnssecsAPI.Dnssecs;
  export import DnssecRetrieveResponse = DnssecsAPI.DnssecRetrieveResponse;
  export import DnssecUpdateResponse = DnssecsAPI.DnssecUpdateResponse;
  export import DnssecDeleteResponse = DnssecsAPI.DnssecDeleteResponse;
  export import DnssecUpdateParams = DnssecsAPI.DnssecUpdateParams;
  export import Emails = EmailsAPI.Emails;
  export import Filters = FiltersAPI.Filters;
  export import FilterRetrieveResponse = FiltersAPI.FilterRetrieveResponse;
  export import FilterUpdateResponse = FiltersAPI.FilterUpdateResponse;
  export import FilterDeleteResponse = FiltersAPI.FilterDeleteResponse;
  export import FilterFiltersCreateFiltersResponse = FiltersAPI.FilterFiltersCreateFiltersResponse;
  export import FilterFiltersListFiltersResponse = FiltersAPI.FilterFiltersListFiltersResponse;
  export import FilterFiltersUpdateFiltersResponse = FiltersAPI.FilterFiltersUpdateFiltersResponse;
  export import FilterFiltersListFiltersResponsesPage = FiltersAPI.FilterFiltersListFiltersResponsesPage;
  export import FilterUpdateParams = FiltersAPI.FilterUpdateParams;
  export import FilterFiltersCreateFiltersParams = FiltersAPI.FilterFiltersCreateFiltersParams;
  export import FilterFiltersListFiltersParams = FiltersAPI.FilterFiltersListFiltersParams;
  export import FilterFiltersUpdateFiltersParams = FiltersAPI.FilterFiltersUpdateFiltersParams;
  export import Firewalls = FirewallsAPI.Firewalls;
  export import Healthchecks = HealthchecksAPI.Healthchecks;
  export import HealthchecksSingleResponse = HealthchecksAPI.HealthchecksSingleResponse;
  export import HealthcheckDeleteResponse = HealthchecksAPI.HealthcheckDeleteResponse;
  export import HealthcheckHealthChecksListHealthChecksResponse = HealthchecksAPI.HealthcheckHealthChecksListHealthChecksResponse;
  export import HealthcheckUpdateParams = HealthchecksAPI.HealthcheckUpdateParams;
  export import HealthcheckHealthChecksCreateHealthCheckParams = HealthchecksAPI.HealthcheckHealthChecksCreateHealthCheckParams;
  export import KeylessCertificates = KeylessCertificatesAPI.KeylessCertificates;
  export import KeylessCertificateRetrieveResponse = KeylessCertificatesAPI.KeylessCertificateRetrieveResponse;
  export import KeylessCertificateUpdateResponse = KeylessCertificatesAPI.KeylessCertificateUpdateResponse;
  export import KeylessCertificateDeleteResponse = KeylessCertificatesAPI.KeylessCertificateDeleteResponse;
  export import KeylessCertificateKeylessSslForAZoneCreateKeylessSslConfigurationResponse = KeylessCertificatesAPI.KeylessCertificateKeylessSslForAZoneCreateKeylessSslConfigurationResponse;
  export import KeylessCertificateKeylessSslForAZoneListKeylessSslConfigurationsResponse = KeylessCertificatesAPI.KeylessCertificateKeylessSslForAZoneListKeylessSslConfigurationsResponse;
  export import KeylessCertificateUpdateParams = KeylessCertificatesAPI.KeylessCertificateUpdateParams;
  export import KeylessCertificateKeylessSslForAZoneCreateKeylessSslConfigurationParams = KeylessCertificatesAPI.KeylessCertificateKeylessSslForAZoneCreateKeylessSslConfigurationParams;
  export import Logpushes = LogpushesAPI.Logpushes;
  export import Logs = LogsAPI.Logs;
  export import OriginTlsClientAuths = OriginTlsClientAuthsAPI.OriginTlsClientAuths;
  export import OriginTlsClientAuthRetrieveResponse = OriginTlsClientAuthsAPI.OriginTlsClientAuthRetrieveResponse;
  export import OriginTlsClientAuthDeleteResponse = OriginTlsClientAuthsAPI.OriginTlsClientAuthDeleteResponse;
  export import OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsListCertificatesResponse = OriginTlsClientAuthsAPI.OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsListCertificatesResponse;
  export import OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsUploadCertificateResponse = OriginTlsClientAuthsAPI.OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsUploadCertificateResponse;
  export import OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsUploadCertificateParams = OriginTlsClientAuthsAPI.OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsUploadCertificateParams;
  export import Pagerules = PagerulesAPI.Pagerules;
  export import PageruleResponseSingle = PagerulesAPI.PageruleResponseSingle;
  export import PageruleDeleteResponse = PagerulesAPI.PageruleDeleteResponse;
  export import PagerulePageRulesListPageRulesResponse = PagerulesAPI.PagerulePageRulesListPageRulesResponse;
  export import PageruleUpdateParams = PagerulesAPI.PageruleUpdateParams;
  export import PagerulePageRulesCreateAPageRuleParams = PagerulesAPI.PagerulePageRulesCreateAPageRuleParams;
  export import PagerulePageRulesListPageRulesParams = PagerulesAPI.PagerulePageRulesListPageRulesParams;
  export import Railguns = RailgunsAPI.Railguns;
  export import RailgunRetrieveResponse = RailgunsAPI.RailgunRetrieveResponse;
  export import RailgunUpdateResponse = RailgunsAPI.RailgunUpdateResponse;
  export import RailgunRailgunConnectionsForAZoneListAvailableRailgunsResponse = RailgunsAPI.RailgunRailgunConnectionsForAZoneListAvailableRailgunsResponse;
  export import RailgunUpdateParams = RailgunsAPI.RailgunUpdateParams;
  export import RateLimits = RateLimitsAPI.RateLimits;
  export import RateLimitCreateResponse = RateLimitsAPI.RateLimitCreateResponse;
  export import RateLimitRetrieveResponse = RateLimitsAPI.RateLimitRetrieveResponse;
  export import RateLimitUpdateResponse = RateLimitsAPI.RateLimitUpdateResponse;
  export import RateLimitListResponse = RateLimitsAPI.RateLimitListResponse;
  export import RateLimitDeleteResponse = RateLimitsAPI.RateLimitDeleteResponse;
  export import RateLimitListResponsesPage = RateLimitsAPI.RateLimitListResponsesPage;
  export import RateLimitCreateParams = RateLimitsAPI.RateLimitCreateParams;
  export import RateLimitUpdateParams = RateLimitsAPI.RateLimitUpdateParams;
  export import RateLimitListParams = RateLimitsAPI.RateLimitListParams;
  export import SecondaryDNS = SecondaryDNSAPI.SecondaryDNS;
  export import Settings = SettingsAPI.Settings;
  export import SettingListResponse = SettingsAPI.SettingListResponse;
  export import SettingEditResponse = SettingsAPI.SettingEditResponse;
  export import SettingEditParams = SettingsAPI.SettingEditParams;
  export import WaitingRooms = WaitingRoomsAPI.WaitingRooms;
  export import SingleWaitingRoomResponse = WaitingRoomsAPI.SingleWaitingRoomResponse;
  export import WaitingRoomDeleteResponse = WaitingRoomsAPI.WaitingRoomDeleteResponse;
  export import WaitingRoomWaitingRoomListWaitingRoomsResponse = WaitingRoomsAPI.WaitingRoomWaitingRoomListWaitingRoomsResponse;
  export import WaitingRoomUpdateParams = WaitingRoomsAPI.WaitingRoomUpdateParams;
  export import WaitingRoomPatchParams = WaitingRoomsAPI.WaitingRoomPatchParams;
  export import WaitingRoomWaitingRoomCreateWaitingRoomParams = WaitingRoomsAPI.WaitingRoomWaitingRoomCreateWaitingRoomParams;
  export import Web3s = Web3sAPI.Web3s;
  export import Workers = WorkersAPI.Workers;
  export import ActivationChecks = ActivationChecksAPI.ActivationChecks;
  export import ActivationCheckPutZonesZoneIDActivationCheckResponse = ActivationChecksAPI.ActivationCheckPutZonesZoneIDActivationCheckResponse;
  export import APIGateway = APIGatewayAPI.APIGateway;
  export import ManagedHeaders = ManagedHeadersAPI.ManagedHeaders;
  export import ManagedHeaderListResponse = ManagedHeadersAPI.ManagedHeaderListResponse;
  export import ManagedHeaderManagedTransformsUpdateStatusOfManagedTransformsResponse = ManagedHeadersAPI.ManagedHeaderManagedTransformsUpdateStatusOfManagedTransformsResponse;
  export import ManagedHeaderManagedTransformsUpdateStatusOfManagedTransformsParams = ManagedHeadersAPI.ManagedHeaderManagedTransformsUpdateStatusOfManagedTransformsParams;
  export import Rulesets = RulesetsAPI.Rulesets;
  export import RulesetRetrieveResponse = RulesetsAPI.RulesetRetrieveResponse;
  export import RulesetUpdateResponse = RulesetsAPI.RulesetUpdateResponse;
  export import RulesetZoneRulesetsCreateAZoneRulesetResponse = RulesetsAPI.RulesetZoneRulesetsCreateAZoneRulesetResponse;
  export import RulesetZoneRulesetsListZoneRulesetsResponse = RulesetsAPI.RulesetZoneRulesetsListZoneRulesetsResponse;
  export import RulesetUpdateParams = RulesetsAPI.RulesetUpdateParams;
  export import RulesetZoneRulesetsCreateAZoneRulesetParams = RulesetsAPI.RulesetZoneRulesetsCreateAZoneRulesetParams;
  export import URLNormalizations = URLNormalizationsAPI.URLNormalizations;
  export import URLNormalizationURLNormalizationGetURLNormalizationSettingsResponse = URLNormalizationsAPI.URLNormalizationURLNormalizationGetURLNormalizationSettingsResponse;
  export import URLNormalizationURLNormalizationUpdateURLNormalizationSettingsResponse = URLNormalizationsAPI.URLNormalizationURLNormalizationUpdateURLNormalizationSettingsResponse;
  export import URLNormalizationURLNormalizationUpdateURLNormalizationSettingsParams = URLNormalizationsAPI.URLNormalizationURLNormalizationUpdateURLNormalizationSettingsParams;
  export import Spectrums = SpectrumsAPI.Spectrums;
  export import Holds = HoldsAPI.Holds;
  export import HoldCreateResponse = HoldsAPI.HoldCreateResponse;
  export import HoldRetrieveResponse = HoldsAPI.HoldRetrieveResponse;
  export import HoldDeleteResponse = HoldsAPI.HoldDeleteResponse;
  export import HoldCreateParams = HoldsAPI.HoldCreateParams;
  export import HoldDeleteParams = HoldsAPI.HoldDeleteParams;
  export import PageShield = PageShieldAPI.PageShield;
  export import PageShieldListResponse = PageShieldAPI.PageShieldListResponse;
  export import PageShieldPageShieldUpdatePageShieldSettingsResponse = PageShieldAPI.PageShieldPageShieldUpdatePageShieldSettingsResponse;
  export import PageShieldPageShieldUpdatePageShieldSettingsParams = PageShieldAPI.PageShieldPageShieldUpdatePageShieldSettingsParams;
  export import BotManagement = BotManagementAPI.BotManagement;
  export import BotManagementRetrieveResponse = BotManagementAPI.BotManagementRetrieveResponse;
  export import BotManagementUpdateResponse = BotManagementAPI.BotManagementUpdateResponse;
  export import BotManagementRetrieveParams = BotManagementAPI.BotManagementRetrieveParams;
  export import BotManagementUpdateParams = BotManagementAPI.BotManagementUpdateParams;
  export import Cache = CacheAPI.Cache;
  export import CacheGetCacheReserveClearResponse = CacheAPI.CacheGetCacheReserveClearResponse;
  export import CacheGetOriginPostQuantumEncryptionResponse = CacheAPI.CacheGetOriginPostQuantumEncryptionResponse;
  export import CacheGetRegionalTieredCacheResponse = CacheAPI.CacheGetRegionalTieredCacheResponse;
  export import CachePatchRegionalTieredCacheResponse = CacheAPI.CachePatchRegionalTieredCacheResponse;
  export import CachePostCacheReserveClearResponse = CacheAPI.CachePostCacheReserveClearResponse;
  export import CachePutOriginPostQuantumEncryptionResponse = CacheAPI.CachePutOriginPostQuantumEncryptionResponse;
  export import CachePatchRegionalTieredCacheParams = CacheAPI.CachePatchRegionalTieredCacheParams;
  export import CachePutOriginPostQuantumEncryptionParams = CacheAPI.CachePutOriginPostQuantumEncryptionParams;
  export import DcvDelegations = DcvDelegationsAPI.DcvDelegations;
  export import DcvDelegationUuidResponse = DcvDelegationsAPI.DcvDelegationUuidResponse;
  export import Zarazs = ZarazsAPI.Zarazs;
  export import Snippets = SnippetsAPI.Snippets;
  export import SnippetRetrieveResponse = SnippetsAPI.SnippetRetrieveResponse;
  export import SnippetUpdateResponse = SnippetsAPI.SnippetUpdateResponse;
  export import SnippetListResponse = SnippetsAPI.SnippetListResponse;
  export import SnippetDeleteResponse = SnippetsAPI.SnippetDeleteResponse;
  export import SnippetUpdateParams = SnippetsAPI.SnippetUpdateParams;
  export import SnippetsRules = SnippetsRulesAPI.SnippetsRules;
  export import SnippetsRuleUpdateResponse = SnippetsRulesAPI.SnippetsRuleUpdateResponse;
  export import SnippetsRuleListResponse = SnippetsRulesAPI.SnippetsRuleListResponse;
  export import SnippetsRuleUpdateParams = SnippetsRulesAPI.SnippetsRuleUpdateParams;
  export import SpeedAPI = SpeedAPIAPI.SpeedAPI;
  export import SpeedAPIAvailabilitiesResponse = SpeedAPIAPI.SpeedAPIAvailabilitiesResponse;
}
