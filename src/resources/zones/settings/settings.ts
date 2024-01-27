// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/zones/settings/settings';
import * as AdvancedDdosAPI from 'cloudflare/resources/zones/settings/advanced-ddos';
import * as AlwaysOnlinesAPI from 'cloudflare/resources/zones/settings/always-onlines';
import * as AlwaysUseHTTPsAPI from 'cloudflare/resources/zones/settings/always-use-https';
import * as AutomaticHTTPsRewritesAPI from 'cloudflare/resources/zones/settings/automatic-https-rewrites';
import * as AutomaticPlatformOptimizationsAPI from 'cloudflare/resources/zones/settings/automatic-platform-optimizations';
import * as BrotliAPI from 'cloudflare/resources/zones/settings/brotli';
import * as BrowserCacheTtlsAPI from 'cloudflare/resources/zones/settings/browser-cache-ttls';
import * as BrowserChecksAPI from 'cloudflare/resources/zones/settings/browser-checks';
import * as CacheLevelsAPI from 'cloudflare/resources/zones/settings/cache-levels';
import * as ChallengeTtlsAPI from 'cloudflare/resources/zones/settings/challenge-ttls';
import * as CiphersAPI from 'cloudflare/resources/zones/settings/ciphers';
import * as DevelopmentModesAPI from 'cloudflare/resources/zones/settings/development-modes';
import * as EarlyHintsAPI from 'cloudflare/resources/zones/settings/early-hints';
import * as EmailObfuscationsAPI from 'cloudflare/resources/zones/settings/email-obfuscations';
import * as FontsAPI from 'cloudflare/resources/zones/settings/fonts';
import * as H2PrioritizationsAPI from 'cloudflare/resources/zones/settings/h2-prioritizations';
import * as HotlinkProtectionsAPI from 'cloudflare/resources/zones/settings/hotlink-protections';
import * as Http2sAPI from 'cloudflare/resources/zones/settings/http2s';
import * as Http3sAPI from 'cloudflare/resources/zones/settings/http3s';
import * as ImageResizingsAPI from 'cloudflare/resources/zones/settings/image-resizings';
import * as IPGeolocationsAPI from 'cloudflare/resources/zones/settings/ip-geolocations';
import * as Ipv6sAPI from 'cloudflare/resources/zones/settings/ipv6s';
import * as MinTlsVersionsAPI from 'cloudflare/resources/zones/settings/min-tls-versions';
import * as MinifiesAPI from 'cloudflare/resources/zones/settings/minifies';
import * as MiragesAPI from 'cloudflare/resources/zones/settings/mirages';
import * as MobileRedirectsAPI from 'cloudflare/resources/zones/settings/mobile-redirects';
import * as NelsAPI from 'cloudflare/resources/zones/settings/nels';
import * as OpportunisticEncryptionsAPI from 'cloudflare/resources/zones/settings/opportunistic-encryptions';
import * as OpportunisticOnionsAPI from 'cloudflare/resources/zones/settings/opportunistic-onions';
import * as OrangeToOrangesAPI from 'cloudflare/resources/zones/settings/orange-to-oranges';
import * as OriginErrorPagePassThrusAPI from 'cloudflare/resources/zones/settings/origin-error-page-pass-thrus';
import * as OriginMaxHTTPVersionsAPI from 'cloudflare/resources/zones/settings/origin-max-http-versions';
import * as PolishesAPI from 'cloudflare/resources/zones/settings/polishes';
import * as PrefetchPreloadsAPI from 'cloudflare/resources/zones/settings/prefetch-preloads';
import * as ProxyReadTimeoutsAPI from 'cloudflare/resources/zones/settings/proxy-read-timeouts';
import * as PseudoIpv4sAPI from 'cloudflare/resources/zones/settings/pseudo-ipv4s';
import * as ResponseBufferingsAPI from 'cloudflare/resources/zones/settings/response-bufferings';
import * as RocketLoadersAPI from 'cloudflare/resources/zones/settings/rocket-loaders';
import * as SecurityHeadersAPI from 'cloudflare/resources/zones/settings/security-headers';
import * as SecurityLevelsAPI from 'cloudflare/resources/zones/settings/security-levels';
import * as ServerSideExcludesAPI from 'cloudflare/resources/zones/settings/server-side-excludes';
import * as SortQueryStringForCachesAPI from 'cloudflare/resources/zones/settings/sort-query-string-for-caches';
import * as SslRecommendersAPI from 'cloudflare/resources/zones/settings/ssl-recommenders';
import * as SslsAPI from 'cloudflare/resources/zones/settings/ssls';
import * as Tls1_3sAPI from 'cloudflare/resources/zones/settings/tls-1-3s';
import * as TlsClientAuthsAPI from 'cloudflare/resources/zones/settings/tls-client-auths';
import * as TrueClientIPHeadersAPI from 'cloudflare/resources/zones/settings/true-client-ip-headers';
import * as WafsAPI from 'cloudflare/resources/zones/settings/wafs';
import * as WebpsAPI from 'cloudflare/resources/zones/settings/webps';
import * as WebsocketsAPI from 'cloudflare/resources/zones/settings/websockets';
import * as ZeroRttsAPI from 'cloudflare/resources/zones/settings/zero-rtts';
import * as ZarazAPI from 'cloudflare/resources/zones/settings/zaraz/zaraz';

export class Settings extends APIResource {
  zeroRtts: ZeroRttsAPI.ZeroRtts = new ZeroRttsAPI.ZeroRtts(this._client);
  advancedDdos: AdvancedDdosAPI.AdvancedDdos = new AdvancedDdosAPI.AdvancedDdos(this._client);
  alwaysOnlines: AlwaysOnlinesAPI.AlwaysOnlines = new AlwaysOnlinesAPI.AlwaysOnlines(this._client);
  alwaysUseHTTPs: AlwaysUseHTTPsAPI.AlwaysUseHTTPs = new AlwaysUseHTTPsAPI.AlwaysUseHTTPs(this._client);
  automaticHTTPsRewrites: AutomaticHTTPsRewritesAPI.AutomaticHTTPsRewrites =
    new AutomaticHTTPsRewritesAPI.AutomaticHTTPsRewrites(this._client);
  automaticPlatformOptimizations: AutomaticPlatformOptimizationsAPI.AutomaticPlatformOptimizations =
    new AutomaticPlatformOptimizationsAPI.AutomaticPlatformOptimizations(this._client);
  brotli: BrotliAPI.Brotli = new BrotliAPI.Brotli(this._client);
  browserCacheTtls: BrowserCacheTtlsAPI.BrowserCacheTtls = new BrowserCacheTtlsAPI.BrowserCacheTtls(
    this._client,
  );
  browserChecks: BrowserChecksAPI.BrowserChecks = new BrowserChecksAPI.BrowserChecks(this._client);
  cacheLevels: CacheLevelsAPI.CacheLevels = new CacheLevelsAPI.CacheLevels(this._client);
  challengeTtls: ChallengeTtlsAPI.ChallengeTtls = new ChallengeTtlsAPI.ChallengeTtls(this._client);
  ciphers: CiphersAPI.Ciphers = new CiphersAPI.Ciphers(this._client);
  developmentModes: DevelopmentModesAPI.DevelopmentModes = new DevelopmentModesAPI.DevelopmentModes(
    this._client,
  );
  earlyHints: EarlyHintsAPI.EarlyHints = new EarlyHintsAPI.EarlyHints(this._client);
  emailObfuscations: EmailObfuscationsAPI.EmailObfuscations = new EmailObfuscationsAPI.EmailObfuscations(
    this._client,
  );
  h2Prioritizations: H2PrioritizationsAPI.H2Prioritizations = new H2PrioritizationsAPI.H2Prioritizations(
    this._client,
  );
  hotlinkProtections: HotlinkProtectionsAPI.HotlinkProtections = new HotlinkProtectionsAPI.HotlinkProtections(
    this._client,
  );
  http2s: Http2sAPI.Http2s = new Http2sAPI.Http2s(this._client);
  http3s: Http3sAPI.Http3s = new Http3sAPI.Http3s(this._client);
  imageResizings: ImageResizingsAPI.ImageResizings = new ImageResizingsAPI.ImageResizings(this._client);
  ipGeolocations: IPGeolocationsAPI.IPGeolocations = new IPGeolocationsAPI.IPGeolocations(this._client);
  ipv6s: Ipv6sAPI.Ipv6s = new Ipv6sAPI.Ipv6s(this._client);
  minTlsVersions: MinTlsVersionsAPI.MinTlsVersions = new MinTlsVersionsAPI.MinTlsVersions(this._client);
  minifies: MinifiesAPI.Minifies = new MinifiesAPI.Minifies(this._client);
  mirages: MiragesAPI.Mirages = new MiragesAPI.Mirages(this._client);
  mobileRedirects: MobileRedirectsAPI.MobileRedirects = new MobileRedirectsAPI.MobileRedirects(this._client);
  nels: NelsAPI.Nels = new NelsAPI.Nels(this._client);
  opportunisticEncryptions: OpportunisticEncryptionsAPI.OpportunisticEncryptions =
    new OpportunisticEncryptionsAPI.OpportunisticEncryptions(this._client);
  opportunisticOnions: OpportunisticOnionsAPI.OpportunisticOnions =
    new OpportunisticOnionsAPI.OpportunisticOnions(this._client);
  orangeToOranges: OrangeToOrangesAPI.OrangeToOranges = new OrangeToOrangesAPI.OrangeToOranges(this._client);
  originErrorPagePassThrus: OriginErrorPagePassThrusAPI.OriginErrorPagePassThrus =
    new OriginErrorPagePassThrusAPI.OriginErrorPagePassThrus(this._client);
  originMaxHTTPVersions: OriginMaxHTTPVersionsAPI.OriginMaxHTTPVersions =
    new OriginMaxHTTPVersionsAPI.OriginMaxHTTPVersions(this._client);
  polishes: PolishesAPI.Polishes = new PolishesAPI.Polishes(this._client);
  prefetchPreloads: PrefetchPreloadsAPI.PrefetchPreloads = new PrefetchPreloadsAPI.PrefetchPreloads(
    this._client,
  );
  proxyReadTimeouts: ProxyReadTimeoutsAPI.ProxyReadTimeouts = new ProxyReadTimeoutsAPI.ProxyReadTimeouts(
    this._client,
  );
  pseudoIpv4s: PseudoIpv4sAPI.PseudoIpv4s = new PseudoIpv4sAPI.PseudoIpv4s(this._client);
  responseBufferings: ResponseBufferingsAPI.ResponseBufferings = new ResponseBufferingsAPI.ResponseBufferings(
    this._client,
  );
  rocketLoaders: RocketLoadersAPI.RocketLoaders = new RocketLoadersAPI.RocketLoaders(this._client);
  securityHeaders: SecurityHeadersAPI.SecurityHeaders = new SecurityHeadersAPI.SecurityHeaders(this._client);
  securityLevels: SecurityLevelsAPI.SecurityLevels = new SecurityLevelsAPI.SecurityLevels(this._client);
  serverSideExcludes: ServerSideExcludesAPI.ServerSideExcludes = new ServerSideExcludesAPI.ServerSideExcludes(
    this._client,
  );
  sortQueryStringForCaches: SortQueryStringForCachesAPI.SortQueryStringForCaches =
    new SortQueryStringForCachesAPI.SortQueryStringForCaches(this._client);
  ssls: SslsAPI.Ssls = new SslsAPI.Ssls(this._client);
  sslRecommenders: SslRecommendersAPI.SslRecommenders = new SslRecommendersAPI.SslRecommenders(this._client);
  tls1_3s: Tls1_3sAPI.Tls1_3s = new Tls1_3sAPI.Tls1_3s(this._client);
  tlsClientAuths: TlsClientAuthsAPI.TlsClientAuths = new TlsClientAuthsAPI.TlsClientAuths(this._client);
  trueClientIPHeaders: TrueClientIPHeadersAPI.TrueClientIPHeaders =
    new TrueClientIPHeadersAPI.TrueClientIPHeaders(this._client);
  wafs: WafsAPI.Wafs = new WafsAPI.Wafs(this._client);
  webps: WebpsAPI.Webps = new WebpsAPI.Webps(this._client);
  websockets: WebsocketsAPI.Websockets = new WebsocketsAPI.Websockets(this._client);
  fonts: FontsAPI.Fonts = new FontsAPI.Fonts(this._client);
  zaraz: ZarazAPI.Zaraz = new ZarazAPI.Zaraz(this._client);

  /**
   * Available settings for your user in relation to a zone.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<SettingListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings`, options);
  }

  /**
   * Edit settings for a zone.
   */
  edit(
    zoneIdentifier: string,
    body: SettingEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingEditResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings`, { body, ...options });
  }
}

export interface SettingListResponse {
  errors?: Array<SettingListResponse.Error>;

  messages?: Array<SettingListResponse.Message>;

  result?: Array<
    | SettingListResponse.Zones0rtt
    | SettingListResponse.ZonesAdvancedDdos
    | SettingListResponse.ZonesAlwaysOnline
    | SettingListResponse.ZonesAlwaysUseHTTPs
    | SettingListResponse.ZonesAutomaticHTTPsRewrites
    | SettingListResponse.ZonesBrotli
    | SettingListResponse.ZonesBrowserCacheTtl
    | SettingListResponse.ZonesBrowserCheck
    | SettingListResponse.ZonesCacheLevel
    | SettingListResponse.ZonesChallengeTtl
    | SettingListResponse.ZonesCiphers
    | SettingListResponse.ZonesCnameFlattening
    | SettingListResponse.ZonesDevelopmentMode
    | SettingListResponse.ZonesEarlyHints
    | SettingListResponse.ZonesEdgeCacheTtl
    | SettingListResponse.ZonesEmailObfuscation
    | SettingListResponse.ZonesH2Prioritization
    | SettingListResponse.ZonesHotlinkProtection
    | SettingListResponse.ZonesHttp2
    | SettingListResponse.ZonesHttp3
    | SettingListResponse.ZonesImageResizing
    | SettingListResponse.ZonesIPGeolocation
    | SettingListResponse.ZonesIpv6
    | SettingListResponse.ZonesMaxUpload
    | SettingListResponse.ZonesMinTlsVersion
    | SettingListResponse.ZonesMinify
    | SettingListResponse.ZonesMirage
    | SettingListResponse.ZonesMobileRedirect
    | SettingListResponse.ZonesNel
    | SettingListResponse.ZonesOpportunisticEncryption
    | SettingListResponse.ZonesOpportunisticOnion
    | SettingListResponse.ZonesOrangeToOrange
    | SettingListResponse.ZonesOriginErrorPagePassThru
    | SettingListResponse.ZonesOriginMaxHTTPVersion
    | SettingListResponse.ZonesPolish
    | SettingListResponse.ZonesPrefetchPreload
    | SettingListResponse.ZonesProxyReadTimeout
    | SettingListResponse.ZonesPseudoIpv4
    | SettingListResponse.ZonesResponseBuffering
    | SettingListResponse.ZonesRocketLoader
    | SettingListResponse.ZonesSchemasAutomaticPlatformOptimization
    | SettingListResponse.ZonesSecurityHeader
    | SettingListResponse.ZonesSecurityLevel
    | SettingListResponse.ZonesServerSideExclude
    | SettingListResponse.ZonesSha1Support
    | SettingListResponse.ZonesSortQueryStringForCache
    | SettingListResponse.ZonesSsl
    | SettingListResponse.ZonesSslRecommender
    | SettingListResponse.ZonesTls1_2Only
    | SettingListResponse.ZonesTls1_3
    | SettingListResponse.ZonesTlsClientAuth
    | SettingListResponse.ZonesTrueClientIPHeader
    | SettingListResponse.ZonesWaf
    | SettingListResponse.ZonesWebp
    | SettingListResponse.ZonesWebsockets
  >;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace SettingListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * 0-RTT session resumption enabled for this zone.
   */
  export interface Zones0rtt {
    /**
     * ID of the zone setting.
     */
    id?: '0rtt';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the 0-RTT setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Advanced protection from Distributed Denial of Service (DDoS) attacks on your
   * website. This is an uneditable value that is 'on' in the case of Business and
   * Enterprise zones.
   */
  export interface ZonesAdvancedDdos {
    /**
     * ID of the zone setting.
     */
    id?: 'advanced_ddos';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting. Notes: Defaults to on for Business+ plans
     */
    value?: 'on' | 'off';
  }

  /**
   * When enabled, Cloudflare serves limited copies of web pages available from the
   * [Internet Archive's Wayback Machine](https://archive.org/web/) if your server is
   * offline. Refer to
   * [Always Online](https://developers.cloudflare.com/cache/about/always-online) for
   * more information.
   */
  export interface ZonesAlwaysOnline {
    /**
     * ID of the zone setting.
     */
    id?: 'always_online';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Reply to all requests for URLs that use "http" with a 301 redirect to the
   * equivalent "https" URL. If you only want to redirect for a subset of requests,
   * consider creating an "Always use HTTPS" page rule.
   */
  export interface ZonesAlwaysUseHTTPs {
    /**
     * ID of the zone setting.
     */
    id?: 'always_use_https';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Enable the Automatic HTTPS Rewrites feature for this zone.
   */
  export interface ZonesAutomaticHTTPsRewrites {
    /**
     * ID of the zone setting.
     */
    id?: 'automatic_https_rewrites';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting. Notes: Default value depends on the zone's plan
     * level.
     */
    value?: 'on' | 'off';
  }

  /**
   * When the client requesting an asset supports the Brotli compression algorithm,
   * Cloudflare will serve a Brotli compressed version of the asset.
   */
  export interface ZonesBrotli {
    /**
     * ID of the zone setting.
     */
    id?: 'brotli';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'on';
  }

  /**
   * Browser Cache TTL (in seconds) specifies how long Cloudflare-cached resources
   * will remain on your visitors' computers. Cloudflare will honor any larger times
   * specified by your server.
   * (https://support.cloudflare.com/hc/en-us/articles/200168276).
   */
  export interface ZonesBrowserCacheTtl {
    /**
     * ID of the zone setting.
     */
    id?: 'browser_cache_ttl';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting. Notes: Setting a TTL of 0 is equivalent to selecting
     * `Respect Existing Headers`
     */
    value?:
      | 0
      | 30
      | 60
      | 120
      | 300
      | 1200
      | 1800
      | 3600
      | 7200
      | 10800
      | 14400
      | 18000
      | 28800
      | 43200
      | 57600
      | 72000
      | 86400
      | 172800
      | 259200
      | 345600
      | 432000
      | 691200
      | 1382400
      | 2073600
      | 2678400
      | 5356800
      | 16070400
      | 31536000;
  }

  /**
   * Browser Integrity Check is similar to Bad Behavior and looks for common HTTP
   * headers abused most commonly by spammers and denies access to your page. It will
   * also challenge visitors that do not have a user agent or a non standard user
   * agent (also commonly used by abuse bots, crawlers or visitors).
   * (https://support.cloudflare.com/hc/en-us/articles/200170086).
   */
  export interface ZonesBrowserCheck {
    /**
     * ID of the zone setting.
     */
    id?: 'browser_check';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Cache Level functions based off the setting level. The basic setting will cache
   * most static resources (i.e., css, images, and JavaScript). The simplified
   * setting will ignore the query string when delivering a cached resource. The
   * aggressive setting will cache all static resources, including ones with a query
   * string. (https://support.cloudflare.com/hc/en-us/articles/200168256).
   */
  export interface ZonesCacheLevel {
    /**
     * ID of the zone setting.
     */
    id?: 'cache_level';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'aggressive' | 'basic' | 'simplified';
  }

  /**
   * Specify how long a visitor is allowed access to your site after successfully
   * completing a challenge (such as a CAPTCHA). After the TTL has expired the
   * visitor will have to complete a new challenge. We recommend a 15 - 45 minute
   * setting and will attempt to honor any setting above 45 minutes.
   * (https://support.cloudflare.com/hc/en-us/articles/200170136).
   */
  export interface ZonesChallengeTtl {
    /**
     * ID of the zone setting.
     */
    id?: 'challenge_ttl';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?:
      | 300
      | 900
      | 1800
      | 2700
      | 3600
      | 7200
      | 10800
      | 14400
      | 28800
      | 57600
      | 86400
      | 604800
      | 2592000
      | 31536000;
  }

  /**
   * An allowlist of ciphers for TLS termination. These ciphers must be in the
   * BoringSSL format.
   */
  export interface ZonesCiphers {
    /**
     * ID of the zone setting.
     */
    id?: 'ciphers';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: Array<string>;
  }

  /**
   * Whether or not cname flattening is on.
   */
  export interface ZonesCnameFlattening {
    /**
     * How to flatten the cname destination.
     */
    id?: 'cname_flattening';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the cname flattening setting.
     */
    value?: 'flatten_at_root' | 'flatten_all';
  }

  /**
   * Development Mode temporarily allows you to enter development mode for your
   * websites if you need to make changes to your site. This will bypass Cloudflare's
   * accelerated cache and slow down your site, but is useful if you are making
   * changes to cacheable content (like images, css, or JavaScript) and would like to
   * see those changes right away. Once entered, development mode will last for 3
   * hours and then automatically toggle off.
   */
  export interface ZonesDevelopmentMode {
    /**
     * ID of the zone setting.
     */
    id?: 'development_mode';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting. Notes: The interval (in seconds) from when
     * development mode expires (positive integer) or last expired (negative integer)
     * for the domain. If development mode has never been enabled, this value is false.
     */
    time_remaining?: number;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * When enabled, Cloudflare will attempt to speed up overall page loads by serving
   * `103` responses with `Link` headers from the final response. Refer to
   * [Early Hints](https://developers.cloudflare.com/cache/about/early-hints) for
   * more information.
   */
  export interface ZonesEarlyHints {
    /**
     * ID of the zone setting.
     */
    id?: 'early_hints';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Time (in seconds) that a resource will be ensured to remain on Cloudflare's
   * cache servers.
   */
  export interface ZonesEdgeCacheTtl {
    /**
     * ID of the zone setting.
     */
    id?: 'edge_cache_ttl';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting. Notes: The minimum TTL available depends on the plan
     * level of the zone. (Enterprise = 30, Business = 1800, Pro = 3600, Free = 7200)
     */
    value?:
      | 30
      | 60
      | 300
      | 1200
      | 1800
      | 3600
      | 7200
      | 10800
      | 14400
      | 18000
      | 28800
      | 43200
      | 57600
      | 72000
      | 86400
      | 172800
      | 259200
      | 345600
      | 432000
      | 518400
      | 604800;
  }

  /**
   * Encrypt email adresses on your web page from bots, while keeping them visible to
   * humans. (https://support.cloudflare.com/hc/en-us/articles/200170016).
   */
  export interface ZonesEmailObfuscation {
    /**
     * ID of the zone setting.
     */
    id?: 'email_obfuscation';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * HTTP/2 Edge Prioritization optimises the delivery of resources served through
   * HTTP/2 to improve page load performance. It also supports fine control of
   * content delivery when used in conjunction with Workers.
   */
  export interface ZonesH2Prioritization {
    /**
     * ID of the zone setting.
     */
    id?: 'h2_prioritization';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off' | 'custom';
  }

  /**
   * When enabled, the Hotlink Protection option ensures that other sites cannot suck
   * up your bandwidth by building pages that use images hosted on your site. Anytime
   * a request for an image on your site hits Cloudflare, we check to ensure that
   * it's not another site requesting them. People will still be able to download and
   * view images from your page, but other sites won't be able to steal them for use
   * on their own pages.
   * (https://support.cloudflare.com/hc/en-us/articles/200170026).
   */
  export interface ZonesHotlinkProtection {
    /**
     * ID of the zone setting.
     */
    id?: 'hotlink_protection';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * HTTP2 enabled for this zone.
   */
  export interface ZonesHttp2 {
    /**
     * ID of the zone setting.
     */
    id?: 'http2';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the HTTP2 setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * HTTP3 enabled for this zone.
   */
  export interface ZonesHttp3 {
    /**
     * ID of the zone setting.
     */
    id?: 'http3';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the HTTP3 setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Image Resizing provides on-demand resizing, conversion and optimisation for
   * images served through Cloudflare's network. Refer to the
   * [Image Resizing documentation](https://developers.cloudflare.com/images/) for
   * more information.
   */
  export interface ZonesImageResizing {
    /**
     * ID of the zone setting.
     */
    id?: 'image_resizing';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Whether the feature is enabled, disabled, or enabled in `open proxy` mode.
     */
    value?: 'on' | 'off' | 'open';
  }

  /**
   * Enable IP Geolocation to have Cloudflare geolocate visitors to your website and
   * pass the country code to you.
   * (https://support.cloudflare.com/hc/en-us/articles/200168236).
   */
  export interface ZonesIPGeolocation {
    /**
     * ID of the zone setting.
     */
    id?: 'ip_geolocation';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Enable IPv6 on all subdomains that are Cloudflare enabled.
   * (https://support.cloudflare.com/hc/en-us/articles/200168586).
   */
  export interface ZonesIpv6 {
    /**
     * ID of the zone setting.
     */
    id?: 'ipv6';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'on';
  }

  /**
   * Maximum size of an allowable upload.
   */
  export interface ZonesMaxUpload {
    /**
     * identifier of the zone setting.
     */
    id?: 'max_upload';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting. Notes: The size depends on the plan level of the
     * zone. (Enterprise = 500, Business = 200, Pro = 100, Free = 100)
     */
    value?: 100 | 200 | 500;
  }

  /**
   * Only accepts HTTPS requests that use at least the TLS protocol version
   * specified. For example, if TLS 1.1 is selected, TLS 1.0 connections will be
   * rejected, while 1.1, 1.2, and 1.3 (if enabled) will be permitted.
   */
  export interface ZonesMinTlsVersion {
    /**
     * ID of the zone setting.
     */
    id?: 'min_tls_version';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: '1.0' | '1.1' | '1.2' | '1.3';
  }

  /**
   * Automatically minify certain assets for your website. Refer to
   * [Using Cloudflare Auto Minify](https://support.cloudflare.com/hc/en-us/articles/200168196)
   * for more information.
   */
  export interface ZonesMinify {
    /**
     * Zone setting identifier.
     */
    id?: 'minify';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: ZonesMinify.Value;
  }

  export namespace ZonesMinify {
    /**
     * Value of the zone setting.
     */
    export interface Value {
      /**
       * Automatically minify all CSS files for your website.
       */
      css?: 'on' | 'off';

      /**
       * Automatically minify all HTML files for your website.
       */
      html?: 'on' | 'off';

      /**
       * Automatically minify all JavaScript files for your website.
       */
      js?: 'on' | 'off';
    }
  }

  /**
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to
   * [our blog post](http://blog.cloudflare.com/mirage2-solving-mobile-speed) for
   * more information.
   */
  export interface ZonesMirage {
    /**
     * ID of the zone setting.
     */
    id?: 'mirage';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Automatically redirect visitors on mobile devices to a mobile-optimized
   * subdomain. Refer to
   * [Understanding Cloudflare Mobile Redirect](https://support.cloudflare.com/hc/articles/200168336)
   * for more information.
   */
  export interface ZonesMobileRedirect {
    /**
     * Identifier of the zone setting.
     */
    id?: 'mobile_redirect';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: ZonesMobileRedirect.Value;
  }

  export namespace ZonesMobileRedirect {
    /**
     * Value of the zone setting.
     */
    export interface Value {
      /**
       * Which subdomain prefix you wish to redirect visitors on mobile devices to
       * (subdomain must already exist).
       */
      mobile_subdomain?: string | null;

      /**
       * Whether or not mobile redirect is enabled.
       */
      status?: 'on' | 'off';

      /**
       * Whether to drop the current page path and redirect to the mobile subdomain URL
       * root, or keep the path and redirect to the same page on the mobile subdomain.
       */
      strip_uri?: boolean;
    }
  }

  /**
   * Enable Network Error Logging reporting on your zone. (Beta)
   */
  export interface ZonesNel {
    /**
     * Zone setting identifier.
     */
    id?: 'nel';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: ZonesNel.Value;
  }

  export namespace ZonesNel {
    /**
     * Value of the zone setting.
     */
    export interface Value {
      enabled?: boolean;
    }
  }

  /**
   * Enables the Opportunistic Encryption feature for a zone.
   */
  export interface ZonesOpportunisticEncryption {
    /**
     * ID of the zone setting.
     */
    id?: 'opportunistic_encryption';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting. Notes: Default value depends on the zone's plan
     * level.
     */
    value?: 'on' | 'off';
  }

  /**
   * Add an Alt-Svc header to all legitimate requests from Tor, allowing the
   * connection to use our onion services instead of exit nodes.
   */
  export interface ZonesOpportunisticOnion {
    /**
     * ID of the zone setting.
     */
    id?: 'opportunistic_onion';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting. Notes: Default value depends on the zone's plan
     * level.
     */
    value?: 'on' | 'off';
  }

  /**
   * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
   * on Cloudflare.
   */
  export interface ZonesOrangeToOrange {
    /**
     * ID of the zone setting.
     */
    id?: 'orange_to_orange';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Cloudflare will proxy customer error pages on any 502,504 errors on origin
   * server instead of showing a default Cloudflare error page. This does not apply
   * to 522 errors and is limited to Enterprise Zones.
   */
  export interface ZonesOriginErrorPagePassThru {
    /**
     * ID of the zone setting.
     */
    id?: 'origin_error_page_pass_thru';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  export interface ZonesOriginMaxHTTPVersion {
    /**
     * Identifier of the zone setting.
     */
    id: 'origin_max_http_version';

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Removes metadata and compresses your images for faster page load times. Basic
   * (Lossless): Reduce the size of PNG, JPEG, and GIF files - no impact on visual
   * quality. Basic + JPEG (Lossy): Further reduce the size of JPEG files for faster
   * image loading. Larger JPEGs are converted to progressive images, loading a
   * lower-resolution image first and ending in a higher-resolution version. Not
   * recommended for hi-res photography sites.
   */
  export interface ZonesPolish {
    /**
     * ID of the zone setting.
     */
    id?: 'polish';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'lossless' | 'lossy';
  }

  /**
   * Cloudflare will prefetch any URLs that are included in the response headers.
   * This is limited to Enterprise Zones.
   */
  export interface ZonesPrefetchPreload {
    /**
     * ID of the zone setting.
     */
    id?: 'prefetch_preload';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Maximum time between two read operations from origin.
   */
  export interface ZonesProxyReadTimeout {
    /**
     * ID of the zone setting.
     */
    id?: 'proxy_read_timeout';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting. Notes: Value must be between 1 and 6000
     */
    value?: number;
  }

  /**
   * The value set for the Pseudo IPv4 setting.
   */
  export interface ZonesPseudoIpv4 {
    /**
     * Value of the Pseudo IPv4 setting.
     */
    id?: 'pseudo_ipv4';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the Pseudo IPv4 setting.
     */
    value?: 'off' | 'add_header' | 'overwrite_header';
  }

  /**
   * Enables or disables buffering of responses from the proxied server. Cloudflare
   * may buffer the whole payload to deliver it at once to the client versus allowing
   * it to be delivered in chunks. By default, the proxied server streams directly
   * and is not buffered by Cloudflare. This is limited to Enterprise Zones.
   */
  export interface ZonesResponseBuffering {
    /**
     * ID of the zone setting.
     */
    id?: 'response_buffering';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Rocket Loader is a general-purpose asynchronous JavaScript optimisation that
   * prioritises rendering your content while loading your site's Javascript
   * asynchronously. Turning on Rocket Loader will immediately improve a web page's
   * rendering time sometimes measured as Time to First Paint (TTFP), and also the
   * `window.onload` time (assuming there is JavaScript on the page). This can have a
   * positive impact on your Google search ranking. When turned on, Rocket Loader
   * will automatically defer the loading of all Javascript referenced in your HTML,
   * with no configuration required. Refer to
   * [Understanding Rocket Loader](https://support.cloudflare.com/hc/articles/200168056)
   * for more information.
   */
  export interface ZonesRocketLoader {
    /**
     * ID of the zone setting.
     */
    id?: 'rocket_loader';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * [Automatic Platform Optimization for WordPress](https://developers.cloudflare.com/automatic-platform-optimization/)
   * serves your WordPress site from Cloudflare's edge network and caches third-party
   * fonts.
   */
  export interface ZonesSchemasAutomaticPlatformOptimization {
    /**
     * ID of the zone setting.
     */
    id?: 'automatic_platform_optimization';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    value?: ZonesSchemasAutomaticPlatformOptimization.Value;
  }

  export namespace ZonesSchemasAutomaticPlatformOptimization {
    export interface Value {
      /**
       * Indicates whether or not
       * [cache by device type](https://developers.cloudflare.com/automatic-platform-optimization/reference/cache-device-type/)
       * is enabled.
       */
      cache_by_device_type: boolean;

      /**
       * Indicates whether or not Cloudflare proxy is enabled.
       */
      cf: boolean;

      /**
       * Indicates whether or not Automatic Platform Optimization is enabled.
       */
      enabled: boolean;

      /**
       * An array of hostnames where Automatic Platform Optimization for WordPress is
       * activated.
       */
      hostnames: Array<string>;

      /**
       * Indicates whether or not site is powered by WordPress.
       */
      wordpress: boolean;

      /**
       * Indicates whether or not
       * [Cloudflare for WordPress plugin](https://wordpress.org/plugins/cloudflare/) is
       * installed.
       */
      wp_plugin: boolean;
    }
  }

  /**
   * Cloudflare security header for a zone.
   */
  export interface ZonesSecurityHeader {
    /**
     * ID of the zone's security header.
     */
    id?: 'security_header';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    value?: ZonesSecurityHeader.Value;
  }

  export namespace ZonesSecurityHeader {
    export interface Value {
      /**
       * Strict Transport Security.
       */
      strict_transport_security?: Value.StrictTransportSecurity;
    }

    export namespace Value {
      /**
       * Strict Transport Security.
       */
      export interface StrictTransportSecurity {
        /**
         * Whether or not strict transport security is enabled.
         */
        enabled?: boolean;

        /**
         * Include all subdomains for strict transport security.
         */
        include_subdomains?: boolean;

        /**
         * Max age in seconds of the strict transport security.
         */
        max_age?: number;

        /**
         * Whether or not to include 'X-Content-Type-Options: nosniff' header.
         */
        nosniff?: boolean;
      }
    }
  }

  /**
   * Choose the appropriate security profile for your website, which will
   * automatically adjust each of the security settings. If you choose to customize
   * an individual security setting, the profile will become Custom.
   * (https://support.cloudflare.com/hc/en-us/articles/200170056).
   */
  export interface ZonesSecurityLevel {
    /**
     * ID of the zone setting.
     */
    id?: 'security_level';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';
  }

  /**
   * If there is sensitive content on your website that you want visible to real
   * visitors, but that you want to hide from suspicious visitors, all you have to do
   * is wrap the content with Cloudflare SSE tags. Wrap any content that you want to
   * be excluded from suspicious visitors in the following SSE tags:
   * <!--sse--><!--/sse-->. For example: <!--sse--> Bad visitors won't see my phone
   * number, 555-555-5555 <!--/sse-->. Note: SSE only will work with HTML. If you
   * have HTML minification enabled, you won't see the SSE tags in your HTML source
   * when it's served through Cloudflare. SSE will still function in this case, as
   * Cloudflare's HTML minification and SSE functionality occur on-the-fly as the
   * resource moves through our network to the visitor's computer.
   * (https://support.cloudflare.com/hc/en-us/articles/200170036).
   */
  export interface ZonesServerSideExclude {
    /**
     * ID of the zone setting.
     */
    id?: 'server_side_exclude';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Allow SHA1 support.
   */
  export interface ZonesSha1Support {
    /**
     * Zone setting identifier.
     */
    id?: 'sha1_support';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'on';
  }

  /**
   * Cloudflare will treat files with the same query strings as the same file in
   * cache, regardless of the order of the query strings. This is limited to
   * Enterprise Zones.
   */
  export interface ZonesSortQueryStringForCache {
    /**
     * ID of the zone setting.
     */
    id?: 'sort_query_string_for_cache';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * SSL encrypts your visitor's connection and safeguards credit card numbers and
   * other personal data to and from your website. SSL can take up to 5 minutes to
   * fully activate. Requires Cloudflare active on your root domain or www domain.
   * Off: no SSL between the visitor and Cloudflare, and no SSL between Cloudflare
   * and your web server (all HTTP traffic). Flexible: SSL between the visitor and
   * Cloudflare -- visitor sees HTTPS on your site, but no SSL between Cloudflare and
   * your web server. You don't need to have an SSL cert on your web server, but your
   * vistors will still see the site as being HTTPS enabled. Full: SSL between the
   * visitor and Cloudflare -- visitor sees HTTPS on your site, and SSL between
   * Cloudflare and your web server. You'll need to have your own SSL cert or
   * self-signed cert at the very least. Full (Strict): SSL between the visitor and
   * Cloudflare -- visitor sees HTTPS on your site, and SSL between Cloudflare and
   * your web server. You'll need to have a valid SSL certificate installed on your
   * web server. This certificate must be signed by a certificate authority, have an
   * expiration date in the future, and respond for the request domain name
   * (hostname). (https://support.cloudflare.com/hc/en-us/articles/200170416).
   */
  export interface ZonesSsl {
    /**
     * ID of the zone setting.
     */
    id?: 'ssl';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting. Notes: Depends on the zone's plan level
     */
    value?: 'off' | 'flexible' | 'full' | 'strict';
  }

  export interface ZonesSslRecommender {
    /**
     * Enrollment value for SSL/TLS Recommender.
     */
    id?: 'ssl_recommender';

    /**
     * ssl-recommender enrollment setting.
     */
    enabled?: boolean;
  }

  /**
   * Only allows TLS1.2.
   */
  export interface ZonesTls1_2Only {
    /**
     * Zone setting identifier.
     */
    id?: 'tls_1_2_only';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'on';
  }

  /**
   * Enables Crypto TLS 1.3 feature for a zone.
   */
  export interface ZonesTls1_3 {
    /**
     * ID of the zone setting.
     */
    id?: 'tls_1_3';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting. Notes: Default value depends on the zone's plan
     * level.
     */
    value?: 'on' | 'off' | 'zrt';
  }

  /**
   * TLS Client Auth requires Cloudflare to connect to your origin server using a
   * client certificate (Enterprise Only).
   */
  export interface ZonesTlsClientAuth {
    /**
     * ID of the zone setting.
     */
    id?: 'tls_client_auth';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Allows customer to continue to use True Client IP (Akamai feature) in the
   * headers we send to the origin. This is limited to Enterprise Zones.
   */
  export interface ZonesTrueClientIPHeader {
    /**
     * ID of the zone setting.
     */
    id?: 'true_client_ip_header';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * The WAF examines HTTP requests to your website. It inspects both GET and POST
   * requests and applies rules to help filter out illegitimate traffic from
   * legitimate website visitors. The Cloudflare WAF inspects website addresses or
   * URLs to detect anything out of the ordinary. If the Cloudflare WAF determines
   * suspicious user behavior, then the WAF will 'challenge' the web visitor with a
   * page that asks them to submit a CAPTCHA successfully to continue their action.
   * If the challenge is failed, the action will be stopped. What this means is that
   * Cloudflare's WAF will block any traffic identified as illegitimate before it
   * reaches your origin web server.
   * (https://support.cloudflare.com/hc/en-us/articles/200172016).
   */
  export interface ZonesWaf {
    /**
     * ID of the zone setting.
     */
    id?: 'waf';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * When the client requesting the image supports the WebP image codec, and WebP
   * offers a performance advantage over the original image format, Cloudflare will
   * serve a WebP version of the original image.
   */
  export interface ZonesWebp {
    /**
     * ID of the zone setting.
     */
    id?: 'webp';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'on';
  }

  /**
   * WebSockets are open connections sustained between the client and the origin
   * server. Inside a WebSockets connection, the client and the origin can pass data
   * back and forth without having to reestablish sessions. This makes exchanging
   * data within a WebSockets connection fast. WebSockets are often used for
   * real-time applications such as live chat and gaming. For more information refer
   * to
   * [Can I use Cloudflare with Websockets](https://support.cloudflare.com/hc/en-us/articles/200169466-Can-I-use-Cloudflare-with-WebSockets-).
   */
  export interface ZonesWebsockets {
    /**
     * ID of the zone setting.
     */
    id?: 'websockets';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'on';
  }
}

export interface SettingEditResponse {
  errors?: Array<SettingEditResponse.Error>;

  messages?: Array<SettingEditResponse.Message>;

  result?: Array<
    | SettingEditResponse.Zones0rtt
    | SettingEditResponse.ZonesAdvancedDdos
    | SettingEditResponse.ZonesAlwaysOnline
    | SettingEditResponse.ZonesAlwaysUseHTTPs
    | SettingEditResponse.ZonesAutomaticHTTPsRewrites
    | SettingEditResponse.ZonesBrotli
    | SettingEditResponse.ZonesBrowserCacheTtl
    | SettingEditResponse.ZonesBrowserCheck
    | SettingEditResponse.ZonesCacheLevel
    | SettingEditResponse.ZonesChallengeTtl
    | SettingEditResponse.ZonesCiphers
    | SettingEditResponse.ZonesCnameFlattening
    | SettingEditResponse.ZonesDevelopmentMode
    | SettingEditResponse.ZonesEarlyHints
    | SettingEditResponse.ZonesEdgeCacheTtl
    | SettingEditResponse.ZonesEmailObfuscation
    | SettingEditResponse.ZonesH2Prioritization
    | SettingEditResponse.ZonesHotlinkProtection
    | SettingEditResponse.ZonesHttp2
    | SettingEditResponse.ZonesHttp3
    | SettingEditResponse.ZonesImageResizing
    | SettingEditResponse.ZonesIPGeolocation
    | SettingEditResponse.ZonesIpv6
    | SettingEditResponse.ZonesMaxUpload
    | SettingEditResponse.ZonesMinTlsVersion
    | SettingEditResponse.ZonesMinify
    | SettingEditResponse.ZonesMirage
    | SettingEditResponse.ZonesMobileRedirect
    | SettingEditResponse.ZonesNel
    | SettingEditResponse.ZonesOpportunisticEncryption
    | SettingEditResponse.ZonesOpportunisticOnion
    | SettingEditResponse.ZonesOrangeToOrange
    | SettingEditResponse.ZonesOriginErrorPagePassThru
    | SettingEditResponse.ZonesOriginMaxHTTPVersion
    | SettingEditResponse.ZonesPolish
    | SettingEditResponse.ZonesPrefetchPreload
    | SettingEditResponse.ZonesProxyReadTimeout
    | SettingEditResponse.ZonesPseudoIpv4
    | SettingEditResponse.ZonesResponseBuffering
    | SettingEditResponse.ZonesRocketLoader
    | SettingEditResponse.ZonesSchemasAutomaticPlatformOptimization
    | SettingEditResponse.ZonesSecurityHeader
    | SettingEditResponse.ZonesSecurityLevel
    | SettingEditResponse.ZonesServerSideExclude
    | SettingEditResponse.ZonesSha1Support
    | SettingEditResponse.ZonesSortQueryStringForCache
    | SettingEditResponse.ZonesSsl
    | SettingEditResponse.ZonesSslRecommender
    | SettingEditResponse.ZonesTls1_2Only
    | SettingEditResponse.ZonesTls1_3
    | SettingEditResponse.ZonesTlsClientAuth
    | SettingEditResponse.ZonesTrueClientIPHeader
    | SettingEditResponse.ZonesWaf
    | SettingEditResponse.ZonesWebp
    | SettingEditResponse.ZonesWebsockets
  >;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace SettingEditResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * 0-RTT session resumption enabled for this zone.
   */
  export interface Zones0rtt {
    /**
     * ID of the zone setting.
     */
    id?: '0rtt';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the 0-RTT setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Advanced protection from Distributed Denial of Service (DDoS) attacks on your
   * website. This is an uneditable value that is 'on' in the case of Business and
   * Enterprise zones.
   */
  export interface ZonesAdvancedDdos {
    /**
     * ID of the zone setting.
     */
    id?: 'advanced_ddos';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting. Notes: Defaults to on for Business+ plans
     */
    value?: 'on' | 'off';
  }

  /**
   * When enabled, Cloudflare serves limited copies of web pages available from the
   * [Internet Archive's Wayback Machine](https://archive.org/web/) if your server is
   * offline. Refer to
   * [Always Online](https://developers.cloudflare.com/cache/about/always-online) for
   * more information.
   */
  export interface ZonesAlwaysOnline {
    /**
     * ID of the zone setting.
     */
    id?: 'always_online';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Reply to all requests for URLs that use "http" with a 301 redirect to the
   * equivalent "https" URL. If you only want to redirect for a subset of requests,
   * consider creating an "Always use HTTPS" page rule.
   */
  export interface ZonesAlwaysUseHTTPs {
    /**
     * ID of the zone setting.
     */
    id?: 'always_use_https';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Enable the Automatic HTTPS Rewrites feature for this zone.
   */
  export interface ZonesAutomaticHTTPsRewrites {
    /**
     * ID of the zone setting.
     */
    id?: 'automatic_https_rewrites';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting. Notes: Default value depends on the zone's plan
     * level.
     */
    value?: 'on' | 'off';
  }

  /**
   * When the client requesting an asset supports the Brotli compression algorithm,
   * Cloudflare will serve a Brotli compressed version of the asset.
   */
  export interface ZonesBrotli {
    /**
     * ID of the zone setting.
     */
    id?: 'brotli';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'on';
  }

  /**
   * Browser Cache TTL (in seconds) specifies how long Cloudflare-cached resources
   * will remain on your visitors' computers. Cloudflare will honor any larger times
   * specified by your server.
   * (https://support.cloudflare.com/hc/en-us/articles/200168276).
   */
  export interface ZonesBrowserCacheTtl {
    /**
     * ID of the zone setting.
     */
    id?: 'browser_cache_ttl';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting. Notes: Setting a TTL of 0 is equivalent to selecting
     * `Respect Existing Headers`
     */
    value?:
      | 0
      | 30
      | 60
      | 120
      | 300
      | 1200
      | 1800
      | 3600
      | 7200
      | 10800
      | 14400
      | 18000
      | 28800
      | 43200
      | 57600
      | 72000
      | 86400
      | 172800
      | 259200
      | 345600
      | 432000
      | 691200
      | 1382400
      | 2073600
      | 2678400
      | 5356800
      | 16070400
      | 31536000;
  }

  /**
   * Browser Integrity Check is similar to Bad Behavior and looks for common HTTP
   * headers abused most commonly by spammers and denies access to your page. It will
   * also challenge visitors that do not have a user agent or a non standard user
   * agent (also commonly used by abuse bots, crawlers or visitors).
   * (https://support.cloudflare.com/hc/en-us/articles/200170086).
   */
  export interface ZonesBrowserCheck {
    /**
     * ID of the zone setting.
     */
    id?: 'browser_check';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Cache Level functions based off the setting level. The basic setting will cache
   * most static resources (i.e., css, images, and JavaScript). The simplified
   * setting will ignore the query string when delivering a cached resource. The
   * aggressive setting will cache all static resources, including ones with a query
   * string. (https://support.cloudflare.com/hc/en-us/articles/200168256).
   */
  export interface ZonesCacheLevel {
    /**
     * ID of the zone setting.
     */
    id?: 'cache_level';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'aggressive' | 'basic' | 'simplified';
  }

  /**
   * Specify how long a visitor is allowed access to your site after successfully
   * completing a challenge (such as a CAPTCHA). After the TTL has expired the
   * visitor will have to complete a new challenge. We recommend a 15 - 45 minute
   * setting and will attempt to honor any setting above 45 minutes.
   * (https://support.cloudflare.com/hc/en-us/articles/200170136).
   */
  export interface ZonesChallengeTtl {
    /**
     * ID of the zone setting.
     */
    id?: 'challenge_ttl';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?:
      | 300
      | 900
      | 1800
      | 2700
      | 3600
      | 7200
      | 10800
      | 14400
      | 28800
      | 57600
      | 86400
      | 604800
      | 2592000
      | 31536000;
  }

  /**
   * An allowlist of ciphers for TLS termination. These ciphers must be in the
   * BoringSSL format.
   */
  export interface ZonesCiphers {
    /**
     * ID of the zone setting.
     */
    id?: 'ciphers';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: Array<string>;
  }

  /**
   * Whether or not cname flattening is on.
   */
  export interface ZonesCnameFlattening {
    /**
     * How to flatten the cname destination.
     */
    id?: 'cname_flattening';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the cname flattening setting.
     */
    value?: 'flatten_at_root' | 'flatten_all';
  }

  /**
   * Development Mode temporarily allows you to enter development mode for your
   * websites if you need to make changes to your site. This will bypass Cloudflare's
   * accelerated cache and slow down your site, but is useful if you are making
   * changes to cacheable content (like images, css, or JavaScript) and would like to
   * see those changes right away. Once entered, development mode will last for 3
   * hours and then automatically toggle off.
   */
  export interface ZonesDevelopmentMode {
    /**
     * ID of the zone setting.
     */
    id?: 'development_mode';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting. Notes: The interval (in seconds) from when
     * development mode expires (positive integer) or last expired (negative integer)
     * for the domain. If development mode has never been enabled, this value is false.
     */
    time_remaining?: number;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * When enabled, Cloudflare will attempt to speed up overall page loads by serving
   * `103` responses with `Link` headers from the final response. Refer to
   * [Early Hints](https://developers.cloudflare.com/cache/about/early-hints) for
   * more information.
   */
  export interface ZonesEarlyHints {
    /**
     * ID of the zone setting.
     */
    id?: 'early_hints';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Time (in seconds) that a resource will be ensured to remain on Cloudflare's
   * cache servers.
   */
  export interface ZonesEdgeCacheTtl {
    /**
     * ID of the zone setting.
     */
    id?: 'edge_cache_ttl';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting. Notes: The minimum TTL available depends on the plan
     * level of the zone. (Enterprise = 30, Business = 1800, Pro = 3600, Free = 7200)
     */
    value?:
      | 30
      | 60
      | 300
      | 1200
      | 1800
      | 3600
      | 7200
      | 10800
      | 14400
      | 18000
      | 28800
      | 43200
      | 57600
      | 72000
      | 86400
      | 172800
      | 259200
      | 345600
      | 432000
      | 518400
      | 604800;
  }

  /**
   * Encrypt email adresses on your web page from bots, while keeping them visible to
   * humans. (https://support.cloudflare.com/hc/en-us/articles/200170016).
   */
  export interface ZonesEmailObfuscation {
    /**
     * ID of the zone setting.
     */
    id?: 'email_obfuscation';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * HTTP/2 Edge Prioritization optimises the delivery of resources served through
   * HTTP/2 to improve page load performance. It also supports fine control of
   * content delivery when used in conjunction with Workers.
   */
  export interface ZonesH2Prioritization {
    /**
     * ID of the zone setting.
     */
    id?: 'h2_prioritization';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off' | 'custom';
  }

  /**
   * When enabled, the Hotlink Protection option ensures that other sites cannot suck
   * up your bandwidth by building pages that use images hosted on your site. Anytime
   * a request for an image on your site hits Cloudflare, we check to ensure that
   * it's not another site requesting them. People will still be able to download and
   * view images from your page, but other sites won't be able to steal them for use
   * on their own pages.
   * (https://support.cloudflare.com/hc/en-us/articles/200170026).
   */
  export interface ZonesHotlinkProtection {
    /**
     * ID of the zone setting.
     */
    id?: 'hotlink_protection';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * HTTP2 enabled for this zone.
   */
  export interface ZonesHttp2 {
    /**
     * ID of the zone setting.
     */
    id?: 'http2';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the HTTP2 setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * HTTP3 enabled for this zone.
   */
  export interface ZonesHttp3 {
    /**
     * ID of the zone setting.
     */
    id?: 'http3';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the HTTP3 setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Image Resizing provides on-demand resizing, conversion and optimisation for
   * images served through Cloudflare's network. Refer to the
   * [Image Resizing documentation](https://developers.cloudflare.com/images/) for
   * more information.
   */
  export interface ZonesImageResizing {
    /**
     * ID of the zone setting.
     */
    id?: 'image_resizing';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Whether the feature is enabled, disabled, or enabled in `open proxy` mode.
     */
    value?: 'on' | 'off' | 'open';
  }

  /**
   * Enable IP Geolocation to have Cloudflare geolocate visitors to your website and
   * pass the country code to you.
   * (https://support.cloudflare.com/hc/en-us/articles/200168236).
   */
  export interface ZonesIPGeolocation {
    /**
     * ID of the zone setting.
     */
    id?: 'ip_geolocation';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Enable IPv6 on all subdomains that are Cloudflare enabled.
   * (https://support.cloudflare.com/hc/en-us/articles/200168586).
   */
  export interface ZonesIpv6 {
    /**
     * ID of the zone setting.
     */
    id?: 'ipv6';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'on';
  }

  /**
   * Maximum size of an allowable upload.
   */
  export interface ZonesMaxUpload {
    /**
     * identifier of the zone setting.
     */
    id?: 'max_upload';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting. Notes: The size depends on the plan level of the
     * zone. (Enterprise = 500, Business = 200, Pro = 100, Free = 100)
     */
    value?: 100 | 200 | 500;
  }

  /**
   * Only accepts HTTPS requests that use at least the TLS protocol version
   * specified. For example, if TLS 1.1 is selected, TLS 1.0 connections will be
   * rejected, while 1.1, 1.2, and 1.3 (if enabled) will be permitted.
   */
  export interface ZonesMinTlsVersion {
    /**
     * ID of the zone setting.
     */
    id?: 'min_tls_version';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: '1.0' | '1.1' | '1.2' | '1.3';
  }

  /**
   * Automatically minify certain assets for your website. Refer to
   * [Using Cloudflare Auto Minify](https://support.cloudflare.com/hc/en-us/articles/200168196)
   * for more information.
   */
  export interface ZonesMinify {
    /**
     * Zone setting identifier.
     */
    id?: 'minify';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: ZonesMinify.Value;
  }

  export namespace ZonesMinify {
    /**
     * Value of the zone setting.
     */
    export interface Value {
      /**
       * Automatically minify all CSS files for your website.
       */
      css?: 'on' | 'off';

      /**
       * Automatically minify all HTML files for your website.
       */
      html?: 'on' | 'off';

      /**
       * Automatically minify all JavaScript files for your website.
       */
      js?: 'on' | 'off';
    }
  }

  /**
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to
   * [our blog post](http://blog.cloudflare.com/mirage2-solving-mobile-speed) for
   * more information.
   */
  export interface ZonesMirage {
    /**
     * ID of the zone setting.
     */
    id?: 'mirage';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Automatically redirect visitors on mobile devices to a mobile-optimized
   * subdomain. Refer to
   * [Understanding Cloudflare Mobile Redirect](https://support.cloudflare.com/hc/articles/200168336)
   * for more information.
   */
  export interface ZonesMobileRedirect {
    /**
     * Identifier of the zone setting.
     */
    id?: 'mobile_redirect';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: ZonesMobileRedirect.Value;
  }

  export namespace ZonesMobileRedirect {
    /**
     * Value of the zone setting.
     */
    export interface Value {
      /**
       * Which subdomain prefix you wish to redirect visitors on mobile devices to
       * (subdomain must already exist).
       */
      mobile_subdomain?: string | null;

      /**
       * Whether or not mobile redirect is enabled.
       */
      status?: 'on' | 'off';

      /**
       * Whether to drop the current page path and redirect to the mobile subdomain URL
       * root, or keep the path and redirect to the same page on the mobile subdomain.
       */
      strip_uri?: boolean;
    }
  }

  /**
   * Enable Network Error Logging reporting on your zone. (Beta)
   */
  export interface ZonesNel {
    /**
     * Zone setting identifier.
     */
    id?: 'nel';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: ZonesNel.Value;
  }

  export namespace ZonesNel {
    /**
     * Value of the zone setting.
     */
    export interface Value {
      enabled?: boolean;
    }
  }

  /**
   * Enables the Opportunistic Encryption feature for a zone.
   */
  export interface ZonesOpportunisticEncryption {
    /**
     * ID of the zone setting.
     */
    id?: 'opportunistic_encryption';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting. Notes: Default value depends on the zone's plan
     * level.
     */
    value?: 'on' | 'off';
  }

  /**
   * Add an Alt-Svc header to all legitimate requests from Tor, allowing the
   * connection to use our onion services instead of exit nodes.
   */
  export interface ZonesOpportunisticOnion {
    /**
     * ID of the zone setting.
     */
    id?: 'opportunistic_onion';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting. Notes: Default value depends on the zone's plan
     * level.
     */
    value?: 'on' | 'off';
  }

  /**
   * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
   * on Cloudflare.
   */
  export interface ZonesOrangeToOrange {
    /**
     * ID of the zone setting.
     */
    id?: 'orange_to_orange';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Cloudflare will proxy customer error pages on any 502,504 errors on origin
   * server instead of showing a default Cloudflare error page. This does not apply
   * to 522 errors and is limited to Enterprise Zones.
   */
  export interface ZonesOriginErrorPagePassThru {
    /**
     * ID of the zone setting.
     */
    id?: 'origin_error_page_pass_thru';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  export interface ZonesOriginMaxHTTPVersion {
    /**
     * Identifier of the zone setting.
     */
    id: 'origin_max_http_version';

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }

  /**
   * Removes metadata and compresses your images for faster page load times. Basic
   * (Lossless): Reduce the size of PNG, JPEG, and GIF files - no impact on visual
   * quality. Basic + JPEG (Lossy): Further reduce the size of JPEG files for faster
   * image loading. Larger JPEGs are converted to progressive images, loading a
   * lower-resolution image first and ending in a higher-resolution version. Not
   * recommended for hi-res photography sites.
   */
  export interface ZonesPolish {
    /**
     * ID of the zone setting.
     */
    id?: 'polish';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'lossless' | 'lossy';
  }

  /**
   * Cloudflare will prefetch any URLs that are included in the response headers.
   * This is limited to Enterprise Zones.
   */
  export interface ZonesPrefetchPreload {
    /**
     * ID of the zone setting.
     */
    id?: 'prefetch_preload';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Maximum time between two read operations from origin.
   */
  export interface ZonesProxyReadTimeout {
    /**
     * ID of the zone setting.
     */
    id?: 'proxy_read_timeout';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting. Notes: Value must be between 1 and 6000
     */
    value?: number;
  }

  /**
   * The value set for the Pseudo IPv4 setting.
   */
  export interface ZonesPseudoIpv4 {
    /**
     * Value of the Pseudo IPv4 setting.
     */
    id?: 'pseudo_ipv4';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the Pseudo IPv4 setting.
     */
    value?: 'off' | 'add_header' | 'overwrite_header';
  }

  /**
   * Enables or disables buffering of responses from the proxied server. Cloudflare
   * may buffer the whole payload to deliver it at once to the client versus allowing
   * it to be delivered in chunks. By default, the proxied server streams directly
   * and is not buffered by Cloudflare. This is limited to Enterprise Zones.
   */
  export interface ZonesResponseBuffering {
    /**
     * ID of the zone setting.
     */
    id?: 'response_buffering';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Rocket Loader is a general-purpose asynchronous JavaScript optimisation that
   * prioritises rendering your content while loading your site's Javascript
   * asynchronously. Turning on Rocket Loader will immediately improve a web page's
   * rendering time sometimes measured as Time to First Paint (TTFP), and also the
   * `window.onload` time (assuming there is JavaScript on the page). This can have a
   * positive impact on your Google search ranking. When turned on, Rocket Loader
   * will automatically defer the loading of all Javascript referenced in your HTML,
   * with no configuration required. Refer to
   * [Understanding Rocket Loader](https://support.cloudflare.com/hc/articles/200168056)
   * for more information.
   */
  export interface ZonesRocketLoader {
    /**
     * ID of the zone setting.
     */
    id?: 'rocket_loader';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * [Automatic Platform Optimization for WordPress](https://developers.cloudflare.com/automatic-platform-optimization/)
   * serves your WordPress site from Cloudflare's edge network and caches third-party
   * fonts.
   */
  export interface ZonesSchemasAutomaticPlatformOptimization {
    /**
     * ID of the zone setting.
     */
    id?: 'automatic_platform_optimization';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    value?: ZonesSchemasAutomaticPlatformOptimization.Value;
  }

  export namespace ZonesSchemasAutomaticPlatformOptimization {
    export interface Value {
      /**
       * Indicates whether or not
       * [cache by device type](https://developers.cloudflare.com/automatic-platform-optimization/reference/cache-device-type/)
       * is enabled.
       */
      cache_by_device_type: boolean;

      /**
       * Indicates whether or not Cloudflare proxy is enabled.
       */
      cf: boolean;

      /**
       * Indicates whether or not Automatic Platform Optimization is enabled.
       */
      enabled: boolean;

      /**
       * An array of hostnames where Automatic Platform Optimization for WordPress is
       * activated.
       */
      hostnames: Array<string>;

      /**
       * Indicates whether or not site is powered by WordPress.
       */
      wordpress: boolean;

      /**
       * Indicates whether or not
       * [Cloudflare for WordPress plugin](https://wordpress.org/plugins/cloudflare/) is
       * installed.
       */
      wp_plugin: boolean;
    }
  }

  /**
   * Cloudflare security header for a zone.
   */
  export interface ZonesSecurityHeader {
    /**
     * ID of the zone's security header.
     */
    id?: 'security_header';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    value?: ZonesSecurityHeader.Value;
  }

  export namespace ZonesSecurityHeader {
    export interface Value {
      /**
       * Strict Transport Security.
       */
      strict_transport_security?: Value.StrictTransportSecurity;
    }

    export namespace Value {
      /**
       * Strict Transport Security.
       */
      export interface StrictTransportSecurity {
        /**
         * Whether or not strict transport security is enabled.
         */
        enabled?: boolean;

        /**
         * Include all subdomains for strict transport security.
         */
        include_subdomains?: boolean;

        /**
         * Max age in seconds of the strict transport security.
         */
        max_age?: number;

        /**
         * Whether or not to include 'X-Content-Type-Options: nosniff' header.
         */
        nosniff?: boolean;
      }
    }
  }

  /**
   * Choose the appropriate security profile for your website, which will
   * automatically adjust each of the security settings. If you choose to customize
   * an individual security setting, the profile will become Custom.
   * (https://support.cloudflare.com/hc/en-us/articles/200170056).
   */
  export interface ZonesSecurityLevel {
    /**
     * ID of the zone setting.
     */
    id?: 'security_level';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';
  }

  /**
   * If there is sensitive content on your website that you want visible to real
   * visitors, but that you want to hide from suspicious visitors, all you have to do
   * is wrap the content with Cloudflare SSE tags. Wrap any content that you want to
   * be excluded from suspicious visitors in the following SSE tags:
   * <!--sse--><!--/sse-->. For example: <!--sse--> Bad visitors won't see my phone
   * number, 555-555-5555 <!--/sse-->. Note: SSE only will work with HTML. If you
   * have HTML minification enabled, you won't see the SSE tags in your HTML source
   * when it's served through Cloudflare. SSE will still function in this case, as
   * Cloudflare's HTML minification and SSE functionality occur on-the-fly as the
   * resource moves through our network to the visitor's computer.
   * (https://support.cloudflare.com/hc/en-us/articles/200170036).
   */
  export interface ZonesServerSideExclude {
    /**
     * ID of the zone setting.
     */
    id?: 'server_side_exclude';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Allow SHA1 support.
   */
  export interface ZonesSha1Support {
    /**
     * Zone setting identifier.
     */
    id?: 'sha1_support';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'on';
  }

  /**
   * Cloudflare will treat files with the same query strings as the same file in
   * cache, regardless of the order of the query strings. This is limited to
   * Enterprise Zones.
   */
  export interface ZonesSortQueryStringForCache {
    /**
     * ID of the zone setting.
     */
    id?: 'sort_query_string_for_cache';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * SSL encrypts your visitor's connection and safeguards credit card numbers and
   * other personal data to and from your website. SSL can take up to 5 minutes to
   * fully activate. Requires Cloudflare active on your root domain or www domain.
   * Off: no SSL between the visitor and Cloudflare, and no SSL between Cloudflare
   * and your web server (all HTTP traffic). Flexible: SSL between the visitor and
   * Cloudflare -- visitor sees HTTPS on your site, but no SSL between Cloudflare and
   * your web server. You don't need to have an SSL cert on your web server, but your
   * vistors will still see the site as being HTTPS enabled. Full: SSL between the
   * visitor and Cloudflare -- visitor sees HTTPS on your site, and SSL between
   * Cloudflare and your web server. You'll need to have your own SSL cert or
   * self-signed cert at the very least. Full (Strict): SSL between the visitor and
   * Cloudflare -- visitor sees HTTPS on your site, and SSL between Cloudflare and
   * your web server. You'll need to have a valid SSL certificate installed on your
   * web server. This certificate must be signed by a certificate authority, have an
   * expiration date in the future, and respond for the request domain name
   * (hostname). (https://support.cloudflare.com/hc/en-us/articles/200170416).
   */
  export interface ZonesSsl {
    /**
     * ID of the zone setting.
     */
    id?: 'ssl';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting. Notes: Depends on the zone's plan level
     */
    value?: 'off' | 'flexible' | 'full' | 'strict';
  }

  export interface ZonesSslRecommender {
    /**
     * Enrollment value for SSL/TLS Recommender.
     */
    id?: 'ssl_recommender';

    /**
     * ssl-recommender enrollment setting.
     */
    enabled?: boolean;
  }

  /**
   * Only allows TLS1.2.
   */
  export interface ZonesTls1_2Only {
    /**
     * Zone setting identifier.
     */
    id?: 'tls_1_2_only';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'on';
  }

  /**
   * Enables Crypto TLS 1.3 feature for a zone.
   */
  export interface ZonesTls1_3 {
    /**
     * ID of the zone setting.
     */
    id?: 'tls_1_3';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting. Notes: Default value depends on the zone's plan
     * level.
     */
    value?: 'on' | 'off' | 'zrt';
  }

  /**
   * TLS Client Auth requires Cloudflare to connect to your origin server using a
   * client certificate (Enterprise Only).
   */
  export interface ZonesTlsClientAuth {
    /**
     * ID of the zone setting.
     */
    id?: 'tls_client_auth';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Allows customer to continue to use True Client IP (Akamai feature) in the
   * headers we send to the origin. This is limited to Enterprise Zones.
   */
  export interface ZonesTrueClientIPHeader {
    /**
     * ID of the zone setting.
     */
    id?: 'true_client_ip_header';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * The WAF examines HTTP requests to your website. It inspects both GET and POST
   * requests and applies rules to help filter out illegitimate traffic from
   * legitimate website visitors. The Cloudflare WAF inspects website addresses or
   * URLs to detect anything out of the ordinary. If the Cloudflare WAF determines
   * suspicious user behavior, then the WAF will 'challenge' the web visitor with a
   * page that asks them to submit a CAPTCHA successfully to continue their action.
   * If the challenge is failed, the action will be stopped. What this means is that
   * Cloudflare's WAF will block any traffic identified as illegitimate before it
   * reaches your origin web server.
   * (https://support.cloudflare.com/hc/en-us/articles/200172016).
   */
  export interface ZonesWaf {
    /**
     * ID of the zone setting.
     */
    id?: 'waf';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * When the client requesting the image supports the WebP image codec, and WebP
   * offers a performance advantage over the original image format, Cloudflare will
   * serve a WebP version of the original image.
   */
  export interface ZonesWebp {
    /**
     * ID of the zone setting.
     */
    id?: 'webp';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'on';
  }

  /**
   * WebSockets are open connections sustained between the client and the origin
   * server. Inside a WebSockets connection, the client and the origin can pass data
   * back and forth without having to reestablish sessions. This makes exchanging
   * data within a WebSockets connection fast. WebSockets are often used for
   * real-time applications such as live chat and gaming. For more information refer
   * to
   * [Can I use Cloudflare with Websockets](https://support.cloudflare.com/hc/en-us/articles/200169466-Can-I-use-Cloudflare-with-WebSockets-).
   */
  export interface ZonesWebsockets {
    /**
     * ID of the zone setting.
     */
    id?: 'websockets';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'on';
  }
}

export interface SettingEditParams {
  /**
   * One or more zone setting objects. Must contain an ID and a value.
   */
  items: Array<
    | SettingEditParams.Zones0rtt
    | SettingEditParams.ZonesAdvancedDdos
    | SettingEditParams.ZonesAlwaysOnline
    | SettingEditParams.ZonesAlwaysUseHTTPs
    | SettingEditParams.ZonesAutomaticHTTPsRewrites
    | SettingEditParams.ZonesBrotli
    | SettingEditParams.ZonesBrowserCacheTtl
    | SettingEditParams.ZonesBrowserCheck
    | SettingEditParams.ZonesCacheLevel
    | SettingEditParams.ZonesChallengeTtl
    | SettingEditParams.ZonesCiphers
    | SettingEditParams.ZonesCnameFlattening
    | SettingEditParams.ZonesDevelopmentMode
    | SettingEditParams.ZonesEarlyHints
    | SettingEditParams.ZonesEdgeCacheTtl
    | SettingEditParams.ZonesEmailObfuscation
    | SettingEditParams.ZonesH2Prioritization
    | SettingEditParams.ZonesHotlinkProtection
    | SettingEditParams.ZonesHttp2
    | SettingEditParams.ZonesHttp3
    | SettingEditParams.ZonesImageResizing
    | SettingEditParams.ZonesIPGeolocation
    | SettingEditParams.ZonesIpv6
    | SettingEditParams.ZonesMaxUpload
    | SettingEditParams.ZonesMinTlsVersion
    | SettingEditParams.ZonesMinify
    | SettingEditParams.ZonesMirage
    | SettingEditParams.ZonesMobileRedirect
    | SettingEditParams.ZonesNel
    | SettingEditParams.ZonesOpportunisticEncryption
    | SettingEditParams.ZonesOpportunisticOnion
    | SettingEditParams.ZonesOrangeToOrange
    | SettingEditParams.ZonesOriginErrorPagePassThru
    | SettingEditParams.ZonesOriginMaxHTTPVersion
    | SettingEditParams.ZonesPolish
    | SettingEditParams.ZonesPrefetchPreload
    | SettingEditParams.ZonesProxyReadTimeout
    | SettingEditParams.ZonesPseudoIpv4
    | SettingEditParams.ZonesResponseBuffering
    | SettingEditParams.ZonesRocketLoader
    | SettingEditParams.ZonesSchemasAutomaticPlatformOptimization
    | SettingEditParams.ZonesSecurityHeader
    | SettingEditParams.ZonesSecurityLevel
    | SettingEditParams.ZonesServerSideExclude
    | SettingEditParams.ZonesSha1Support
    | SettingEditParams.ZonesSortQueryStringForCache
    | SettingEditParams.ZonesSsl
    | SettingEditParams.ZonesSslRecommender
    | SettingEditParams.ZonesTls1_2Only
    | SettingEditParams.ZonesTls1_3
    | SettingEditParams.ZonesTlsClientAuth
    | SettingEditParams.ZonesTrueClientIPHeader
    | SettingEditParams.ZonesWaf
    | SettingEditParams.ZonesWebp
    | SettingEditParams.ZonesWebsockets
  >;
}

export namespace SettingEditParams {
  /**
   * 0-RTT session resumption enabled for this zone.
   */
  export interface Zones0rtt {
    /**
     * ID of the zone setting.
     */
    id?: '0rtt';

    /**
     * Value of the 0-RTT setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Advanced protection from Distributed Denial of Service (DDoS) attacks on your
   * website. This is an uneditable value that is 'on' in the case of Business and
   * Enterprise zones.
   */
  export interface ZonesAdvancedDdos {
    /**
     * ID of the zone setting.
     */
    id?: 'advanced_ddos';

    /**
     * Value of the zone setting. Notes: Defaults to on for Business+ plans
     */
    value?: 'on' | 'off';
  }

  /**
   * When enabled, Cloudflare serves limited copies of web pages available from the
   * [Internet Archive's Wayback Machine](https://archive.org/web/) if your server is
   * offline. Refer to
   * [Always Online](https://developers.cloudflare.com/cache/about/always-online) for
   * more information.
   */
  export interface ZonesAlwaysOnline {
    /**
     * ID of the zone setting.
     */
    id?: 'always_online';

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Reply to all requests for URLs that use "http" with a 301 redirect to the
   * equivalent "https" URL. If you only want to redirect for a subset of requests,
   * consider creating an "Always use HTTPS" page rule.
   */
  export interface ZonesAlwaysUseHTTPs {
    /**
     * ID of the zone setting.
     */
    id?: 'always_use_https';

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Enable the Automatic HTTPS Rewrites feature for this zone.
   */
  export interface ZonesAutomaticHTTPsRewrites {
    /**
     * ID of the zone setting.
     */
    id?: 'automatic_https_rewrites';

    /**
     * Value of the zone setting. Notes: Default value depends on the zone's plan
     * level.
     */
    value?: 'on' | 'off';
  }

  /**
   * When the client requesting an asset supports the Brotli compression algorithm,
   * Cloudflare will serve a Brotli compressed version of the asset.
   */
  export interface ZonesBrotli {
    /**
     * ID of the zone setting.
     */
    id?: 'brotli';

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'on';
  }

  /**
   * Browser Cache TTL (in seconds) specifies how long Cloudflare-cached resources
   * will remain on your visitors' computers. Cloudflare will honor any larger times
   * specified by your server.
   * (https://support.cloudflare.com/hc/en-us/articles/200168276).
   */
  export interface ZonesBrowserCacheTtl {
    /**
     * ID of the zone setting.
     */
    id?: 'browser_cache_ttl';

    /**
     * Value of the zone setting. Notes: Setting a TTL of 0 is equivalent to selecting
     * `Respect Existing Headers`
     */
    value?:
      | 0
      | 30
      | 60
      | 120
      | 300
      | 1200
      | 1800
      | 3600
      | 7200
      | 10800
      | 14400
      | 18000
      | 28800
      | 43200
      | 57600
      | 72000
      | 86400
      | 172800
      | 259200
      | 345600
      | 432000
      | 691200
      | 1382400
      | 2073600
      | 2678400
      | 5356800
      | 16070400
      | 31536000;
  }

  /**
   * Browser Integrity Check is similar to Bad Behavior and looks for common HTTP
   * headers abused most commonly by spammers and denies access to your page. It will
   * also challenge visitors that do not have a user agent or a non standard user
   * agent (also commonly used by abuse bots, crawlers or visitors).
   * (https://support.cloudflare.com/hc/en-us/articles/200170086).
   */
  export interface ZonesBrowserCheck {
    /**
     * ID of the zone setting.
     */
    id?: 'browser_check';

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Cache Level functions based off the setting level. The basic setting will cache
   * most static resources (i.e., css, images, and JavaScript). The simplified
   * setting will ignore the query string when delivering a cached resource. The
   * aggressive setting will cache all static resources, including ones with a query
   * string. (https://support.cloudflare.com/hc/en-us/articles/200168256).
   */
  export interface ZonesCacheLevel {
    /**
     * ID of the zone setting.
     */
    id?: 'cache_level';

    /**
     * Value of the zone setting.
     */
    value?: 'aggressive' | 'basic' | 'simplified';
  }

  /**
   * Specify how long a visitor is allowed access to your site after successfully
   * completing a challenge (such as a CAPTCHA). After the TTL has expired the
   * visitor will have to complete a new challenge. We recommend a 15 - 45 minute
   * setting and will attempt to honor any setting above 45 minutes.
   * (https://support.cloudflare.com/hc/en-us/articles/200170136).
   */
  export interface ZonesChallengeTtl {
    /**
     * ID of the zone setting.
     */
    id?: 'challenge_ttl';

    /**
     * Value of the zone setting.
     */
    value?:
      | 300
      | 900
      | 1800
      | 2700
      | 3600
      | 7200
      | 10800
      | 14400
      | 28800
      | 57600
      | 86400
      | 604800
      | 2592000
      | 31536000;
  }

  /**
   * An allowlist of ciphers for TLS termination. These ciphers must be in the
   * BoringSSL format.
   */
  export interface ZonesCiphers {
    /**
     * ID of the zone setting.
     */
    id?: 'ciphers';

    /**
     * Value of the zone setting.
     */
    value?: Array<string>;
  }

  /**
   * Whether or not cname flattening is on.
   */
  export interface ZonesCnameFlattening {
    /**
     * How to flatten the cname destination.
     */
    id?: 'cname_flattening';

    /**
     * Value of the cname flattening setting.
     */
    value?: 'flatten_at_root' | 'flatten_all';
  }

  /**
   * Development Mode temporarily allows you to enter development mode for your
   * websites if you need to make changes to your site. This will bypass Cloudflare's
   * accelerated cache and slow down your site, but is useful if you are making
   * changes to cacheable content (like images, css, or JavaScript) and would like to
   * see those changes right away. Once entered, development mode will last for 3
   * hours and then automatically toggle off.
   */
  export interface ZonesDevelopmentMode {
    /**
     * ID of the zone setting.
     */
    id?: 'development_mode';

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * When enabled, Cloudflare will attempt to speed up overall page loads by serving
   * `103` responses with `Link` headers from the final response. Refer to
   * [Early Hints](https://developers.cloudflare.com/cache/about/early-hints) for
   * more information.
   */
  export interface ZonesEarlyHints {
    /**
     * ID of the zone setting.
     */
    id?: 'early_hints';

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Time (in seconds) that a resource will be ensured to remain on Cloudflare's
   * cache servers.
   */
  export interface ZonesEdgeCacheTtl {
    /**
     * ID of the zone setting.
     */
    id?: 'edge_cache_ttl';

    /**
     * Value of the zone setting. Notes: The minimum TTL available depends on the plan
     * level of the zone. (Enterprise = 30, Business = 1800, Pro = 3600, Free = 7200)
     */
    value?:
      | 30
      | 60
      | 300
      | 1200
      | 1800
      | 3600
      | 7200
      | 10800
      | 14400
      | 18000
      | 28800
      | 43200
      | 57600
      | 72000
      | 86400
      | 172800
      | 259200
      | 345600
      | 432000
      | 518400
      | 604800;
  }

  /**
   * Encrypt email adresses on your web page from bots, while keeping them visible to
   * humans. (https://support.cloudflare.com/hc/en-us/articles/200170016).
   */
  export interface ZonesEmailObfuscation {
    /**
     * ID of the zone setting.
     */
    id?: 'email_obfuscation';

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * HTTP/2 Edge Prioritization optimises the delivery of resources served through
   * HTTP/2 to improve page load performance. It also supports fine control of
   * content delivery when used in conjunction with Workers.
   */
  export interface ZonesH2Prioritization {
    /**
     * ID of the zone setting.
     */
    id?: 'h2_prioritization';

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off' | 'custom';
  }

  /**
   * When enabled, the Hotlink Protection option ensures that other sites cannot suck
   * up your bandwidth by building pages that use images hosted on your site. Anytime
   * a request for an image on your site hits Cloudflare, we check to ensure that
   * it's not another site requesting them. People will still be able to download and
   * view images from your page, but other sites won't be able to steal them for use
   * on their own pages.
   * (https://support.cloudflare.com/hc/en-us/articles/200170026).
   */
  export interface ZonesHotlinkProtection {
    /**
     * ID of the zone setting.
     */
    id?: 'hotlink_protection';

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * HTTP2 enabled for this zone.
   */
  export interface ZonesHttp2 {
    /**
     * ID of the zone setting.
     */
    id?: 'http2';

    /**
     * Value of the HTTP2 setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * HTTP3 enabled for this zone.
   */
  export interface ZonesHttp3 {
    /**
     * ID of the zone setting.
     */
    id?: 'http3';

    /**
     * Value of the HTTP3 setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Image Resizing provides on-demand resizing, conversion and optimisation for
   * images served through Cloudflare's network. Refer to the
   * [Image Resizing documentation](https://developers.cloudflare.com/images/) for
   * more information.
   */
  export interface ZonesImageResizing {
    /**
     * ID of the zone setting.
     */
    id?: 'image_resizing';

    /**
     * Whether the feature is enabled, disabled, or enabled in `open proxy` mode.
     */
    value?: 'on' | 'off' | 'open';
  }

  /**
   * Enable IP Geolocation to have Cloudflare geolocate visitors to your website and
   * pass the country code to you.
   * (https://support.cloudflare.com/hc/en-us/articles/200168236).
   */
  export interface ZonesIPGeolocation {
    /**
     * ID of the zone setting.
     */
    id?: 'ip_geolocation';

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Enable IPv6 on all subdomains that are Cloudflare enabled.
   * (https://support.cloudflare.com/hc/en-us/articles/200168586).
   */
  export interface ZonesIpv6 {
    /**
     * ID of the zone setting.
     */
    id?: 'ipv6';

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'on';
  }

  /**
   * Maximum size of an allowable upload.
   */
  export interface ZonesMaxUpload {
    /**
     * identifier of the zone setting.
     */
    id?: 'max_upload';

    /**
     * Value of the zone setting. Notes: The size depends on the plan level of the
     * zone. (Enterprise = 500, Business = 200, Pro = 100, Free = 100)
     */
    value?: 100 | 200 | 500;
  }

  /**
   * Only accepts HTTPS requests that use at least the TLS protocol version
   * specified. For example, if TLS 1.1 is selected, TLS 1.0 connections will be
   * rejected, while 1.1, 1.2, and 1.3 (if enabled) will be permitted.
   */
  export interface ZonesMinTlsVersion {
    /**
     * ID of the zone setting.
     */
    id?: 'min_tls_version';

    /**
     * Value of the zone setting.
     */
    value?: '1.0' | '1.1' | '1.2' | '1.3';
  }

  /**
   * Automatically minify certain assets for your website. Refer to
   * [Using Cloudflare Auto Minify](https://support.cloudflare.com/hc/en-us/articles/200168196)
   * for more information.
   */
  export interface ZonesMinify {
    /**
     * Zone setting identifier.
     */
    id?: 'minify';

    /**
     * Value of the zone setting.
     */
    value?: ZonesMinify.Value;
  }

  export namespace ZonesMinify {
    /**
     * Value of the zone setting.
     */
    export interface Value {
      /**
       * Automatically minify all CSS files for your website.
       */
      css?: 'on' | 'off';

      /**
       * Automatically minify all HTML files for your website.
       */
      html?: 'on' | 'off';

      /**
       * Automatically minify all JavaScript files for your website.
       */
      js?: 'on' | 'off';
    }
  }

  /**
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to
   * [our blog post](http://blog.cloudflare.com/mirage2-solving-mobile-speed) for
   * more information.
   */
  export interface ZonesMirage {
    /**
     * ID of the zone setting.
     */
    id?: 'mirage';

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Automatically redirect visitors on mobile devices to a mobile-optimized
   * subdomain. Refer to
   * [Understanding Cloudflare Mobile Redirect](https://support.cloudflare.com/hc/articles/200168336)
   * for more information.
   */
  export interface ZonesMobileRedirect {
    /**
     * Identifier of the zone setting.
     */
    id?: 'mobile_redirect';

    /**
     * Value of the zone setting.
     */
    value?: ZonesMobileRedirect.Value;
  }

  export namespace ZonesMobileRedirect {
    /**
     * Value of the zone setting.
     */
    export interface Value {
      /**
       * Which subdomain prefix you wish to redirect visitors on mobile devices to
       * (subdomain must already exist).
       */
      mobile_subdomain?: string | null;

      /**
       * Whether or not mobile redirect is enabled.
       */
      status?: 'on' | 'off';

      /**
       * Whether to drop the current page path and redirect to the mobile subdomain URL
       * root, or keep the path and redirect to the same page on the mobile subdomain.
       */
      strip_uri?: boolean;
    }
  }

  /**
   * Enable Network Error Logging reporting on your zone. (Beta)
   */
  export interface ZonesNel {
    /**
     * Zone setting identifier.
     */
    id?: 'nel';

    /**
     * Value of the zone setting.
     */
    value?: ZonesNel.Value;
  }

  export namespace ZonesNel {
    /**
     * Value of the zone setting.
     */
    export interface Value {
      enabled?: boolean;
    }
  }

  /**
   * Enables the Opportunistic Encryption feature for a zone.
   */
  export interface ZonesOpportunisticEncryption {
    /**
     * ID of the zone setting.
     */
    id?: 'opportunistic_encryption';

    /**
     * Value of the zone setting. Notes: Default value depends on the zone's plan
     * level.
     */
    value?: 'on' | 'off';
  }

  /**
   * Add an Alt-Svc header to all legitimate requests from Tor, allowing the
   * connection to use our onion services instead of exit nodes.
   */
  export interface ZonesOpportunisticOnion {
    /**
     * ID of the zone setting.
     */
    id?: 'opportunistic_onion';

    /**
     * Value of the zone setting. Notes: Default value depends on the zone's plan
     * level.
     */
    value?: 'on' | 'off';
  }

  /**
   * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
   * on Cloudflare.
   */
  export interface ZonesOrangeToOrange {
    /**
     * ID of the zone setting.
     */
    id?: 'orange_to_orange';

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Cloudflare will proxy customer error pages on any 502,504 errors on origin
   * server instead of showing a default Cloudflare error page. This does not apply
   * to 522 errors and is limited to Enterprise Zones.
   */
  export interface ZonesOriginErrorPagePassThru {
    /**
     * ID of the zone setting.
     */
    id?: 'origin_error_page_pass_thru';

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  export interface ZonesOriginMaxHTTPVersion {
    /**
     * Identifier of the zone setting.
     */
    id: 'origin_max_http_version';
  }

  /**
   * Removes metadata and compresses your images for faster page load times. Basic
   * (Lossless): Reduce the size of PNG, JPEG, and GIF files - no impact on visual
   * quality. Basic + JPEG (Lossy): Further reduce the size of JPEG files for faster
   * image loading. Larger JPEGs are converted to progressive images, loading a
   * lower-resolution image first and ending in a higher-resolution version. Not
   * recommended for hi-res photography sites.
   */
  export interface ZonesPolish {
    /**
     * ID of the zone setting.
     */
    id?: 'polish';

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'lossless' | 'lossy';
  }

  /**
   * Cloudflare will prefetch any URLs that are included in the response headers.
   * This is limited to Enterprise Zones.
   */
  export interface ZonesPrefetchPreload {
    /**
     * ID of the zone setting.
     */
    id?: 'prefetch_preload';

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Maximum time between two read operations from origin.
   */
  export interface ZonesProxyReadTimeout {
    /**
     * ID of the zone setting.
     */
    id?: 'proxy_read_timeout';

    /**
     * Value of the zone setting. Notes: Value must be between 1 and 6000
     */
    value?: number;
  }

  /**
   * The value set for the Pseudo IPv4 setting.
   */
  export interface ZonesPseudoIpv4 {
    /**
     * Value of the Pseudo IPv4 setting.
     */
    id?: 'pseudo_ipv4';

    /**
     * Value of the Pseudo IPv4 setting.
     */
    value?: 'off' | 'add_header' | 'overwrite_header';
  }

  /**
   * Enables or disables buffering of responses from the proxied server. Cloudflare
   * may buffer the whole payload to deliver it at once to the client versus allowing
   * it to be delivered in chunks. By default, the proxied server streams directly
   * and is not buffered by Cloudflare. This is limited to Enterprise Zones.
   */
  export interface ZonesResponseBuffering {
    /**
     * ID of the zone setting.
     */
    id?: 'response_buffering';

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Rocket Loader is a general-purpose asynchronous JavaScript optimisation that
   * prioritises rendering your content while loading your site's Javascript
   * asynchronously. Turning on Rocket Loader will immediately improve a web page's
   * rendering time sometimes measured as Time to First Paint (TTFP), and also the
   * `window.onload` time (assuming there is JavaScript on the page). This can have a
   * positive impact on your Google search ranking. When turned on, Rocket Loader
   * will automatically defer the loading of all Javascript referenced in your HTML,
   * with no configuration required. Refer to
   * [Understanding Rocket Loader](https://support.cloudflare.com/hc/articles/200168056)
   * for more information.
   */
  export interface ZonesRocketLoader {
    /**
     * ID of the zone setting.
     */
    id?: 'rocket_loader';

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * [Automatic Platform Optimization for WordPress](https://developers.cloudflare.com/automatic-platform-optimization/)
   * serves your WordPress site from Cloudflare's edge network and caches third-party
   * fonts.
   */
  export interface ZonesSchemasAutomaticPlatformOptimization {
    /**
     * ID of the zone setting.
     */
    id?: 'automatic_platform_optimization';

    value?: ZonesSchemasAutomaticPlatformOptimization.Value;
  }

  export namespace ZonesSchemasAutomaticPlatformOptimization {
    export interface Value {
      /**
       * Indicates whether or not
       * [cache by device type](https://developers.cloudflare.com/automatic-platform-optimization/reference/cache-device-type/)
       * is enabled.
       */
      cache_by_device_type: boolean;

      /**
       * Indicates whether or not Cloudflare proxy is enabled.
       */
      cf: boolean;

      /**
       * Indicates whether or not Automatic Platform Optimization is enabled.
       */
      enabled: boolean;

      /**
       * An array of hostnames where Automatic Platform Optimization for WordPress is
       * activated.
       */
      hostnames: Array<string>;

      /**
       * Indicates whether or not site is powered by WordPress.
       */
      wordpress: boolean;

      /**
       * Indicates whether or not
       * [Cloudflare for WordPress plugin](https://wordpress.org/plugins/cloudflare/) is
       * installed.
       */
      wp_plugin: boolean;
    }
  }

  /**
   * Cloudflare security header for a zone.
   */
  export interface ZonesSecurityHeader {
    /**
     * ID of the zone's security header.
     */
    id?: 'security_header';

    value?: ZonesSecurityHeader.Value;
  }

  export namespace ZonesSecurityHeader {
    export interface Value {
      /**
       * Strict Transport Security.
       */
      strict_transport_security?: Value.StrictTransportSecurity;
    }

    export namespace Value {
      /**
       * Strict Transport Security.
       */
      export interface StrictTransportSecurity {
        /**
         * Whether or not strict transport security is enabled.
         */
        enabled?: boolean;

        /**
         * Include all subdomains for strict transport security.
         */
        include_subdomains?: boolean;

        /**
         * Max age in seconds of the strict transport security.
         */
        max_age?: number;

        /**
         * Whether or not to include 'X-Content-Type-Options: nosniff' header.
         */
        nosniff?: boolean;
      }
    }
  }

  /**
   * Choose the appropriate security profile for your website, which will
   * automatically adjust each of the security settings. If you choose to customize
   * an individual security setting, the profile will become Custom.
   * (https://support.cloudflare.com/hc/en-us/articles/200170056).
   */
  export interface ZonesSecurityLevel {
    /**
     * ID of the zone setting.
     */
    id?: 'security_level';

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';
  }

  /**
   * If there is sensitive content on your website that you want visible to real
   * visitors, but that you want to hide from suspicious visitors, all you have to do
   * is wrap the content with Cloudflare SSE tags. Wrap any content that you want to
   * be excluded from suspicious visitors in the following SSE tags:
   * <!--sse--><!--/sse-->. For example: <!--sse--> Bad visitors won't see my phone
   * number, 555-555-5555 <!--/sse-->. Note: SSE only will work with HTML. If you
   * have HTML minification enabled, you won't see the SSE tags in your HTML source
   * when it's served through Cloudflare. SSE will still function in this case, as
   * Cloudflare's HTML minification and SSE functionality occur on-the-fly as the
   * resource moves through our network to the visitor's computer.
   * (https://support.cloudflare.com/hc/en-us/articles/200170036).
   */
  export interface ZonesServerSideExclude {
    /**
     * ID of the zone setting.
     */
    id?: 'server_side_exclude';

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Allow SHA1 support.
   */
  export interface ZonesSha1Support {
    /**
     * Zone setting identifier.
     */
    id?: 'sha1_support';

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'on';
  }

  /**
   * Cloudflare will treat files with the same query strings as the same file in
   * cache, regardless of the order of the query strings. This is limited to
   * Enterprise Zones.
   */
  export interface ZonesSortQueryStringForCache {
    /**
     * ID of the zone setting.
     */
    id?: 'sort_query_string_for_cache';

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * SSL encrypts your visitor's connection and safeguards credit card numbers and
   * other personal data to and from your website. SSL can take up to 5 minutes to
   * fully activate. Requires Cloudflare active on your root domain or www domain.
   * Off: no SSL between the visitor and Cloudflare, and no SSL between Cloudflare
   * and your web server (all HTTP traffic). Flexible: SSL between the visitor and
   * Cloudflare -- visitor sees HTTPS on your site, but no SSL between Cloudflare and
   * your web server. You don't need to have an SSL cert on your web server, but your
   * vistors will still see the site as being HTTPS enabled. Full: SSL between the
   * visitor and Cloudflare -- visitor sees HTTPS on your site, and SSL between
   * Cloudflare and your web server. You'll need to have your own SSL cert or
   * self-signed cert at the very least. Full (Strict): SSL between the visitor and
   * Cloudflare -- visitor sees HTTPS on your site, and SSL between Cloudflare and
   * your web server. You'll need to have a valid SSL certificate installed on your
   * web server. This certificate must be signed by a certificate authority, have an
   * expiration date in the future, and respond for the request domain name
   * (hostname). (https://support.cloudflare.com/hc/en-us/articles/200170416).
   */
  export interface ZonesSsl {
    /**
     * ID of the zone setting.
     */
    id?: 'ssl';

    /**
     * Value of the zone setting. Notes: Depends on the zone's plan level
     */
    value?: 'off' | 'flexible' | 'full' | 'strict';
  }

  export interface ZonesSslRecommender {
    /**
     * Enrollment value for SSL/TLS Recommender.
     */
    id?: 'ssl_recommender';

    /**
     * ssl-recommender enrollment setting.
     */
    enabled?: boolean;
  }

  /**
   * Only allows TLS1.2.
   */
  export interface ZonesTls1_2Only {
    /**
     * Zone setting identifier.
     */
    id?: 'tls_1_2_only';

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'on';
  }

  /**
   * Enables Crypto TLS 1.3 feature for a zone.
   */
  export interface ZonesTls1_3 {
    /**
     * ID of the zone setting.
     */
    id?: 'tls_1_3';

    /**
     * Value of the zone setting. Notes: Default value depends on the zone's plan
     * level.
     */
    value?: 'on' | 'off' | 'zrt';
  }

  /**
   * TLS Client Auth requires Cloudflare to connect to your origin server using a
   * client certificate (Enterprise Only).
   */
  export interface ZonesTlsClientAuth {
    /**
     * ID of the zone setting.
     */
    id?: 'tls_client_auth';

    /**
     * value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * Allows customer to continue to use True Client IP (Akamai feature) in the
   * headers we send to the origin. This is limited to Enterprise Zones.
   */
  export interface ZonesTrueClientIPHeader {
    /**
     * ID of the zone setting.
     */
    id?: 'true_client_ip_header';

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * The WAF examines HTTP requests to your website. It inspects both GET and POST
   * requests and applies rules to help filter out illegitimate traffic from
   * legitimate website visitors. The Cloudflare WAF inspects website addresses or
   * URLs to detect anything out of the ordinary. If the Cloudflare WAF determines
   * suspicious user behavior, then the WAF will 'challenge' the web visitor with a
   * page that asks them to submit a CAPTCHA successfully to continue their action.
   * If the challenge is failed, the action will be stopped. What this means is that
   * Cloudflare's WAF will block any traffic identified as illegitimate before it
   * reaches your origin web server.
   * (https://support.cloudflare.com/hc/en-us/articles/200172016).
   */
  export interface ZonesWaf {
    /**
     * ID of the zone setting.
     */
    id?: 'waf';

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }

  /**
   * When the client requesting the image supports the WebP image codec, and WebP
   * offers a performance advantage over the original image format, Cloudflare will
   * serve a WebP version of the original image.
   */
  export interface ZonesWebp {
    /**
     * ID of the zone setting.
     */
    id?: 'webp';

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'on';
  }

  /**
   * WebSockets are open connections sustained between the client and the origin
   * server. Inside a WebSockets connection, the client and the origin can pass data
   * back and forth without having to reestablish sessions. This makes exchanging
   * data within a WebSockets connection fast. WebSockets are often used for
   * real-time applications such as live chat and gaming. For more information refer
   * to
   * [Can I use Cloudflare with Websockets](https://support.cloudflare.com/hc/en-us/articles/200169466-Can-I-use-Cloudflare-with-WebSockets-).
   */
  export interface ZonesWebsockets {
    /**
     * ID of the zone setting.
     */
    id?: 'websockets';

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'on';
  }
}

export namespace Settings {
  export import SettingListResponse = SettingsAPI.SettingListResponse;
  export import SettingEditResponse = SettingsAPI.SettingEditResponse;
  export import SettingEditParams = SettingsAPI.SettingEditParams;
  export import ZeroRtts = ZeroRttsAPI.ZeroRtts;
  export import ZeroRttListResponse = ZeroRttsAPI.ZeroRttListResponse;
  export import ZeroRttZoneSettingsChange0RttSessionResumptionSettingResponse = ZeroRttsAPI.ZeroRttZoneSettingsChange0RttSessionResumptionSettingResponse;
  export import ZeroRttZoneSettingsChange0RttSessionResumptionSettingParams = ZeroRttsAPI.ZeroRttZoneSettingsChange0RttSessionResumptionSettingParams;
  export import AdvancedDdos = AdvancedDdosAPI.AdvancedDdos;
  export import AdvancedDdoListResponse = AdvancedDdosAPI.AdvancedDdoListResponse;
  export import AlwaysOnlines = AlwaysOnlinesAPI.AlwaysOnlines;
  export import AlwaysOnlineUpdateResponse = AlwaysOnlinesAPI.AlwaysOnlineUpdateResponse;
  export import AlwaysOnlineListResponse = AlwaysOnlinesAPI.AlwaysOnlineListResponse;
  export import AlwaysOnlineUpdateParams = AlwaysOnlinesAPI.AlwaysOnlineUpdateParams;
  export import AlwaysUseHTTPs = AlwaysUseHTTPsAPI.AlwaysUseHTTPs;
  export import AlwaysUseHTTPUpdateResponse = AlwaysUseHTTPsAPI.AlwaysUseHTTPUpdateResponse;
  export import AlwaysUseHTTPListResponse = AlwaysUseHTTPsAPI.AlwaysUseHTTPListResponse;
  export import AlwaysUseHTTPUpdateParams = AlwaysUseHTTPsAPI.AlwaysUseHTTPUpdateParams;
  export import AutomaticHTTPsRewrites = AutomaticHTTPsRewritesAPI.AutomaticHTTPsRewrites;
  export import AutomaticHTTPsRewriteUpdateResponse = AutomaticHTTPsRewritesAPI.AutomaticHTTPsRewriteUpdateResponse;
  export import AutomaticHTTPsRewriteListResponse = AutomaticHTTPsRewritesAPI.AutomaticHTTPsRewriteListResponse;
  export import AutomaticHTTPsRewriteUpdateParams = AutomaticHTTPsRewritesAPI.AutomaticHTTPsRewriteUpdateParams;
  export import AutomaticPlatformOptimizations = AutomaticPlatformOptimizationsAPI.AutomaticPlatformOptimizations;
  export import AutomaticPlatformOptimizationUpdateResponse = AutomaticPlatformOptimizationsAPI.AutomaticPlatformOptimizationUpdateResponse;
  export import AutomaticPlatformOptimizationListResponse = AutomaticPlatformOptimizationsAPI.AutomaticPlatformOptimizationListResponse;
  export import AutomaticPlatformOptimizationUpdateParams = AutomaticPlatformOptimizationsAPI.AutomaticPlatformOptimizationUpdateParams;
  export import Brotli = BrotliAPI.Brotli;
  export import BrotliUpdateResponse = BrotliAPI.BrotliUpdateResponse;
  export import BrotliListResponse = BrotliAPI.BrotliListResponse;
  export import BrotliUpdateParams = BrotliAPI.BrotliUpdateParams;
  export import BrowserCacheTtls = BrowserCacheTtlsAPI.BrowserCacheTtls;
  export import BrowserCacheTtlUpdateResponse = BrowserCacheTtlsAPI.BrowserCacheTtlUpdateResponse;
  export import BrowserCacheTtlListResponse = BrowserCacheTtlsAPI.BrowserCacheTtlListResponse;
  export import BrowserCacheTtlUpdateParams = BrowserCacheTtlsAPI.BrowserCacheTtlUpdateParams;
  export import BrowserChecks = BrowserChecksAPI.BrowserChecks;
  export import BrowserCheckUpdateResponse = BrowserChecksAPI.BrowserCheckUpdateResponse;
  export import BrowserCheckListResponse = BrowserChecksAPI.BrowserCheckListResponse;
  export import BrowserCheckUpdateParams = BrowserChecksAPI.BrowserCheckUpdateParams;
  export import CacheLevels = CacheLevelsAPI.CacheLevels;
  export import CacheLevelUpdateResponse = CacheLevelsAPI.CacheLevelUpdateResponse;
  export import CacheLevelListResponse = CacheLevelsAPI.CacheLevelListResponse;
  export import CacheLevelUpdateParams = CacheLevelsAPI.CacheLevelUpdateParams;
  export import ChallengeTtls = ChallengeTtlsAPI.ChallengeTtls;
  export import ChallengeTtlUpdateResponse = ChallengeTtlsAPI.ChallengeTtlUpdateResponse;
  export import ChallengeTtlListResponse = ChallengeTtlsAPI.ChallengeTtlListResponse;
  export import ChallengeTtlUpdateParams = ChallengeTtlsAPI.ChallengeTtlUpdateParams;
  export import Ciphers = CiphersAPI.Ciphers;
  export import CipherUpdateResponse = CiphersAPI.CipherUpdateResponse;
  export import CipherListResponse = CiphersAPI.CipherListResponse;
  export import CipherUpdateParams = CiphersAPI.CipherUpdateParams;
  export import DevelopmentModes = DevelopmentModesAPI.DevelopmentModes;
  export import DevelopmentModeUpdateResponse = DevelopmentModesAPI.DevelopmentModeUpdateResponse;
  export import DevelopmentModeListResponse = DevelopmentModesAPI.DevelopmentModeListResponse;
  export import DevelopmentModeUpdateParams = DevelopmentModesAPI.DevelopmentModeUpdateParams;
  export import EarlyHints = EarlyHintsAPI.EarlyHints;
  export import EarlyHintUpdateResponse = EarlyHintsAPI.EarlyHintUpdateResponse;
  export import EarlyHintListResponse = EarlyHintsAPI.EarlyHintListResponse;
  export import EarlyHintUpdateParams = EarlyHintsAPI.EarlyHintUpdateParams;
  export import EmailObfuscations = EmailObfuscationsAPI.EmailObfuscations;
  export import EmailObfuscationUpdateResponse = EmailObfuscationsAPI.EmailObfuscationUpdateResponse;
  export import EmailObfuscationListResponse = EmailObfuscationsAPI.EmailObfuscationListResponse;
  export import EmailObfuscationUpdateParams = EmailObfuscationsAPI.EmailObfuscationUpdateParams;
  export import H2Prioritizations = H2PrioritizationsAPI.H2Prioritizations;
  export import H2PrioritizationUpdateResponse = H2PrioritizationsAPI.H2PrioritizationUpdateResponse;
  export import H2PrioritizationListResponse = H2PrioritizationsAPI.H2PrioritizationListResponse;
  export import H2PrioritizationUpdateParams = H2PrioritizationsAPI.H2PrioritizationUpdateParams;
  export import HotlinkProtections = HotlinkProtectionsAPI.HotlinkProtections;
  export import HotlinkProtectionUpdateResponse = HotlinkProtectionsAPI.HotlinkProtectionUpdateResponse;
  export import HotlinkProtectionListResponse = HotlinkProtectionsAPI.HotlinkProtectionListResponse;
  export import HotlinkProtectionUpdateParams = HotlinkProtectionsAPI.HotlinkProtectionUpdateParams;
  export import Http2s = Http2sAPI.Http2s;
  export import Http2UpdateResponse = Http2sAPI.Http2UpdateResponse;
  export import Http2ListResponse = Http2sAPI.Http2ListResponse;
  export import Http2UpdateParams = Http2sAPI.Http2UpdateParams;
  export import Http3s = Http3sAPI.Http3s;
  export import Http3UpdateResponse = Http3sAPI.Http3UpdateResponse;
  export import Http3ListResponse = Http3sAPI.Http3ListResponse;
  export import Http3UpdateParams = Http3sAPI.Http3UpdateParams;
  export import ImageResizings = ImageResizingsAPI.ImageResizings;
  export import ImageResizingUpdateResponse = ImageResizingsAPI.ImageResizingUpdateResponse;
  export import ImageResizingListResponse = ImageResizingsAPI.ImageResizingListResponse;
  export import ImageResizingUpdateParams = ImageResizingsAPI.ImageResizingUpdateParams;
  export import IPGeolocations = IPGeolocationsAPI.IPGeolocations;
  export import IPGeolocationUpdateResponse = IPGeolocationsAPI.IPGeolocationUpdateResponse;
  export import IPGeolocationListResponse = IPGeolocationsAPI.IPGeolocationListResponse;
  export import IPGeolocationUpdateParams = IPGeolocationsAPI.IPGeolocationUpdateParams;
  export import Ipv6s = Ipv6sAPI.Ipv6s;
  export import Ipv6UpdateResponse = Ipv6sAPI.Ipv6UpdateResponse;
  export import Ipv6ListResponse = Ipv6sAPI.Ipv6ListResponse;
  export import Ipv6UpdateParams = Ipv6sAPI.Ipv6UpdateParams;
  export import MinTlsVersions = MinTlsVersionsAPI.MinTlsVersions;
  export import MinTlsVersionUpdateResponse = MinTlsVersionsAPI.MinTlsVersionUpdateResponse;
  export import MinTlsVersionListResponse = MinTlsVersionsAPI.MinTlsVersionListResponse;
  export import MinTlsVersionUpdateParams = MinTlsVersionsAPI.MinTlsVersionUpdateParams;
  export import Minifies = MinifiesAPI.Minifies;
  export import MinifyUpdateResponse = MinifiesAPI.MinifyUpdateResponse;
  export import MinifyListResponse = MinifiesAPI.MinifyListResponse;
  export import MinifyUpdateParams = MinifiesAPI.MinifyUpdateParams;
  export import Mirages = MiragesAPI.Mirages;
  export import MirageUpdateResponse = MiragesAPI.MirageUpdateResponse;
  export import MirageListResponse = MiragesAPI.MirageListResponse;
  export import MirageUpdateParams = MiragesAPI.MirageUpdateParams;
  export import MobileRedirects = MobileRedirectsAPI.MobileRedirects;
  export import MobileRedirectUpdateResponse = MobileRedirectsAPI.MobileRedirectUpdateResponse;
  export import MobileRedirectListResponse = MobileRedirectsAPI.MobileRedirectListResponse;
  export import MobileRedirectUpdateParams = MobileRedirectsAPI.MobileRedirectUpdateParams;
  export import Nels = NelsAPI.Nels;
  export import NelUpdateResponse = NelsAPI.NelUpdateResponse;
  export import NelListResponse = NelsAPI.NelListResponse;
  export import NelUpdateParams = NelsAPI.NelUpdateParams;
  export import OpportunisticEncryptions = OpportunisticEncryptionsAPI.OpportunisticEncryptions;
  export import OpportunisticEncryptionUpdateResponse = OpportunisticEncryptionsAPI.OpportunisticEncryptionUpdateResponse;
  export import OpportunisticEncryptionListResponse = OpportunisticEncryptionsAPI.OpportunisticEncryptionListResponse;
  export import OpportunisticEncryptionUpdateParams = OpportunisticEncryptionsAPI.OpportunisticEncryptionUpdateParams;
  export import OpportunisticOnions = OpportunisticOnionsAPI.OpportunisticOnions;
  export import OpportunisticOnionUpdateResponse = OpportunisticOnionsAPI.OpportunisticOnionUpdateResponse;
  export import OpportunisticOnionListResponse = OpportunisticOnionsAPI.OpportunisticOnionListResponse;
  export import OpportunisticOnionUpdateParams = OpportunisticOnionsAPI.OpportunisticOnionUpdateParams;
  export import OrangeToOranges = OrangeToOrangesAPI.OrangeToOranges;
  export import OrangeToOrangeUpdateResponse = OrangeToOrangesAPI.OrangeToOrangeUpdateResponse;
  export import OrangeToOrangeListResponse = OrangeToOrangesAPI.OrangeToOrangeListResponse;
  export import OrangeToOrangeUpdateParams = OrangeToOrangesAPI.OrangeToOrangeUpdateParams;
  export import OriginErrorPagePassThrus = OriginErrorPagePassThrusAPI.OriginErrorPagePassThrus;
  export import OriginErrorPagePassThrusUpdateResponse = OriginErrorPagePassThrusAPI.OriginErrorPagePassThrusUpdateResponse;
  export import OriginErrorPagePassThrusListResponse = OriginErrorPagePassThrusAPI.OriginErrorPagePassThrusListResponse;
  export import OriginErrorPagePassThrusUpdateParams = OriginErrorPagePassThrusAPI.OriginErrorPagePassThrusUpdateParams;
  export import OriginMaxHTTPVersions = OriginMaxHTTPVersionsAPI.OriginMaxHTTPVersions;
  export import OriginMaxHTTPVersionUpdateResponse = OriginMaxHTTPVersionsAPI.OriginMaxHTTPVersionUpdateResponse;
  export import OriginMaxHTTPVersionListResponse = OriginMaxHTTPVersionsAPI.OriginMaxHTTPVersionListResponse;
  export import OriginMaxHTTPVersionUpdateParams = OriginMaxHTTPVersionsAPI.OriginMaxHTTPVersionUpdateParams;
  export import Polishes = PolishesAPI.Polishes;
  export import PolishUpdateResponse = PolishesAPI.PolishUpdateResponse;
  export import PolishListResponse = PolishesAPI.PolishListResponse;
  export import PolishUpdateParams = PolishesAPI.PolishUpdateParams;
  export import PrefetchPreloads = PrefetchPreloadsAPI.PrefetchPreloads;
  export import PrefetchPreloadUpdateResponse = PrefetchPreloadsAPI.PrefetchPreloadUpdateResponse;
  export import PrefetchPreloadListResponse = PrefetchPreloadsAPI.PrefetchPreloadListResponse;
  export import PrefetchPreloadUpdateParams = PrefetchPreloadsAPI.PrefetchPreloadUpdateParams;
  export import ProxyReadTimeouts = ProxyReadTimeoutsAPI.ProxyReadTimeouts;
  export import ProxyReadTimeoutUpdateResponse = ProxyReadTimeoutsAPI.ProxyReadTimeoutUpdateResponse;
  export import ProxyReadTimeoutListResponse = ProxyReadTimeoutsAPI.ProxyReadTimeoutListResponse;
  export import ProxyReadTimeoutUpdateParams = ProxyReadTimeoutsAPI.ProxyReadTimeoutUpdateParams;
  export import PseudoIpv4s = PseudoIpv4sAPI.PseudoIpv4s;
  export import PseudoIpv4UpdateResponse = PseudoIpv4sAPI.PseudoIpv4UpdateResponse;
  export import PseudoIpv4ListResponse = PseudoIpv4sAPI.PseudoIpv4ListResponse;
  export import PseudoIpv4UpdateParams = PseudoIpv4sAPI.PseudoIpv4UpdateParams;
  export import ResponseBufferings = ResponseBufferingsAPI.ResponseBufferings;
  export import ResponseBufferingUpdateResponse = ResponseBufferingsAPI.ResponseBufferingUpdateResponse;
  export import ResponseBufferingListResponse = ResponseBufferingsAPI.ResponseBufferingListResponse;
  export import ResponseBufferingUpdateParams = ResponseBufferingsAPI.ResponseBufferingUpdateParams;
  export import RocketLoaders = RocketLoadersAPI.RocketLoaders;
  export import RocketLoaderUpdateResponse = RocketLoadersAPI.RocketLoaderUpdateResponse;
  export import RocketLoaderListResponse = RocketLoadersAPI.RocketLoaderListResponse;
  export import RocketLoaderUpdateParams = RocketLoadersAPI.RocketLoaderUpdateParams;
  export import SecurityHeaders = SecurityHeadersAPI.SecurityHeaders;
  export import SecurityHeaderUpdateResponse = SecurityHeadersAPI.SecurityHeaderUpdateResponse;
  export import SecurityHeaderListResponse = SecurityHeadersAPI.SecurityHeaderListResponse;
  export import SecurityHeaderUpdateParams = SecurityHeadersAPI.SecurityHeaderUpdateParams;
  export import SecurityLevels = SecurityLevelsAPI.SecurityLevels;
  export import SecurityLevelUpdateResponse = SecurityLevelsAPI.SecurityLevelUpdateResponse;
  export import SecurityLevelListResponse = SecurityLevelsAPI.SecurityLevelListResponse;
  export import SecurityLevelUpdateParams = SecurityLevelsAPI.SecurityLevelUpdateParams;
  export import ServerSideExcludes = ServerSideExcludesAPI.ServerSideExcludes;
  export import ServerSideExcludeUpdateResponse = ServerSideExcludesAPI.ServerSideExcludeUpdateResponse;
  export import ServerSideExcludeListResponse = ServerSideExcludesAPI.ServerSideExcludeListResponse;
  export import ServerSideExcludeUpdateParams = ServerSideExcludesAPI.ServerSideExcludeUpdateParams;
  export import SortQueryStringForCaches = SortQueryStringForCachesAPI.SortQueryStringForCaches;
  export import SortQueryStringForCachUpdateResponse = SortQueryStringForCachesAPI.SortQueryStringForCachUpdateResponse;
  export import SortQueryStringForCachListResponse = SortQueryStringForCachesAPI.SortQueryStringForCachListResponse;
  export import SortQueryStringForCachUpdateParams = SortQueryStringForCachesAPI.SortQueryStringForCachUpdateParams;
  export import Ssls = SslsAPI.Ssls;
  export import SslUpdateResponse = SslsAPI.SslUpdateResponse;
  export import SslListResponse = SslsAPI.SslListResponse;
  export import SslUpdateParams = SslsAPI.SslUpdateParams;
  export import SslRecommenders = SslRecommendersAPI.SslRecommenders;
  export import SslRecommenderUpdateResponse = SslRecommendersAPI.SslRecommenderUpdateResponse;
  export import SslRecommenderListResponse = SslRecommendersAPI.SslRecommenderListResponse;
  export import SslRecommenderUpdateParams = SslRecommendersAPI.SslRecommenderUpdateParams;
  export import Tls1_3s = Tls1_3sAPI.Tls1_3s;
  export import Tls1_3UpdateResponse = Tls1_3sAPI.Tls1_3UpdateResponse;
  export import Tls1_3ListResponse = Tls1_3sAPI.Tls1_3ListResponse;
  export import Tls1_3UpdateParams = Tls1_3sAPI.Tls1_3UpdateParams;
  export import TlsClientAuths = TlsClientAuthsAPI.TlsClientAuths;
  export import TlsClientAuthUpdateResponse = TlsClientAuthsAPI.TlsClientAuthUpdateResponse;
  export import TlsClientAuthListResponse = TlsClientAuthsAPI.TlsClientAuthListResponse;
  export import TlsClientAuthUpdateParams = TlsClientAuthsAPI.TlsClientAuthUpdateParams;
  export import TrueClientIPHeaders = TrueClientIPHeadersAPI.TrueClientIPHeaders;
  export import TrueClientIPHeaderUpdateResponse = TrueClientIPHeadersAPI.TrueClientIPHeaderUpdateResponse;
  export import TrueClientIPHeaderListResponse = TrueClientIPHeadersAPI.TrueClientIPHeaderListResponse;
  export import TrueClientIPHeaderUpdateParams = TrueClientIPHeadersAPI.TrueClientIPHeaderUpdateParams;
  export import Wafs = WafsAPI.Wafs;
  export import WafUpdateResponse = WafsAPI.WafUpdateResponse;
  export import WafListResponse = WafsAPI.WafListResponse;
  export import WafUpdateParams = WafsAPI.WafUpdateParams;
  export import Webps = WebpsAPI.Webps;
  export import WebpUpdateResponse = WebpsAPI.WebpUpdateResponse;
  export import WebpListResponse = WebpsAPI.WebpListResponse;
  export import WebpUpdateParams = WebpsAPI.WebpUpdateParams;
  export import Websockets = WebsocketsAPI.Websockets;
  export import WebsocketUpdateResponse = WebsocketsAPI.WebsocketUpdateResponse;
  export import WebsocketListResponse = WebsocketsAPI.WebsocketListResponse;
  export import WebsocketUpdateParams = WebsocketsAPI.WebsocketUpdateParams;
  export import Fonts = FontsAPI.Fonts;
  export import CloudflareFonts = FontsAPI.CloudflareFonts;
  export import FontRetrieveResponse = FontsAPI.FontRetrieveResponse;
  export import FontUpdateResponse = FontsAPI.FontUpdateResponse;
  export import FontUpdateParams = FontsAPI.FontUpdateParams;
  export import Zaraz = ZarazAPI.Zaraz;
}
