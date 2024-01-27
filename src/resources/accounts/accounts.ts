// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as AccountsAPI from 'cloudflare/resources/accounts/accounts';
import * as AIAPI from 'cloudflare/resources/accounts/ai';
import * as CustomPagesAPI from 'cloudflare/resources/accounts/custom-pages';
import * as MembersAPI from 'cloudflare/resources/accounts/members';
import * as PagesProjectsAPI from 'cloudflare/resources/accounts/pages-projects';
import * as RolesAPI from 'cloudflare/resources/accounts/roles';
import * as SubscriptionsAPI from 'cloudflare/resources/accounts/subscriptions';
import * as VectorizeIndexesAPI from 'cloudflare/resources/accounts/vectorize-indexes';
import * as WarpConnectorAPI from 'cloudflare/resources/accounts/warp-connector';
import * as AccessAPI from 'cloudflare/resources/accounts/access/access';
import * as AddressesAPI from 'cloudflare/resources/accounts/addresses/addresses';
import * as AddressingAPI from 'cloudflare/resources/accounts/addressing/addressing';
import * as AlertingAPI from 'cloudflare/resources/accounts/alerting/alerting';
import * as BillingsAPI from 'cloudflare/resources/accounts/billings/billings';
import * as BrandProtectionsAPI from 'cloudflare/resources/accounts/brand-protections/brand-protections';
import * as CfdTunnelsAPI from 'cloudflare/resources/accounts/cfd-tunnels/cfd-tunnels';
import * as ChallengesAPI from 'cloudflare/resources/accounts/challenges/challenges';
import * as CustomNsAPI from 'cloudflare/resources/accounts/custom-ns/custom-ns';
import * as D1API from 'cloudflare/resources/accounts/d1/d1';
import * as DevicesAPI from 'cloudflare/resources/accounts/devices/devices';
import * as DexAPI from 'cloudflare/resources/accounts/dex/dex';
import * as DiagnosticsAPI from 'cloudflare/resources/accounts/diagnostics/diagnostics';
import * as DlpAPI from 'cloudflare/resources/accounts/dlp/dlp';
import * as DNSFirewallsAPI from 'cloudflare/resources/accounts/dns-firewalls/dns-firewalls';
import * as EmailsAPI from 'cloudflare/resources/accounts/emails/emails';
import * as FirewallsAPI from 'cloudflare/resources/accounts/firewalls/firewalls';
import * as GatewayAPI from 'cloudflare/resources/accounts/gateway/gateway';
import * as HyperdriveAPI from 'cloudflare/resources/accounts/hyperdrive/hyperdrive';
import * as ImagesAPI from 'cloudflare/resources/accounts/images/images';
import * as IntelAPI from 'cloudflare/resources/accounts/intel/intel';
import * as LoadBalancersAPI from 'cloudflare/resources/accounts/load-balancers/load-balancers';
import * as LogpushesAPI from 'cloudflare/resources/accounts/logpushes/logpushes';
import * as LogsAPI from 'cloudflare/resources/accounts/logs/logs';
import * as MagicAPI from 'cloudflare/resources/accounts/magic/magic';
import * as MnmsAPI from 'cloudflare/resources/accounts/mnms/mnms';
import * as MtlsCertificatesAPI from 'cloudflare/resources/accounts/mtls-certificates/mtls-certificates';
import * as PagesAPI from 'cloudflare/resources/accounts/pages/pages';
import * as PcapsAPI from 'cloudflare/resources/accounts/pcaps/pcaps';
import * as R2API from 'cloudflare/resources/accounts/r2/r2';
import * as RailgunsAPI from 'cloudflare/resources/accounts/railguns/railguns';
import * as RegistrarAPI from 'cloudflare/resources/accounts/registrar/registrar';
import * as RequestTracersAPI from 'cloudflare/resources/accounts/request-tracers/request-tracers';
import * as RulesAPI from 'cloudflare/resources/accounts/rules/rules';
import * as RulesetsAPI from 'cloudflare/resources/accounts/rulesets/rulesets';
import * as RumAPI from 'cloudflare/resources/accounts/rum/rum';
import * as SecondaryDNSAPI from 'cloudflare/resources/accounts/secondary-dns/secondary-dns';
import * as StoragesAPI from 'cloudflare/resources/accounts/storages/storages';
import * as StreamsAPI from 'cloudflare/resources/accounts/streams/streams';
import * as TeamnetAPI from 'cloudflare/resources/accounts/teamnet/teamnet';
import * as TunnelsAPI from 'cloudflare/resources/accounts/tunnels/tunnels';
import * as UrlscannerAPI from 'cloudflare/resources/accounts/urlscanner/urlscanner';
import * as WorkersAPI from 'cloudflare/resources/accounts/workers/workers';
import * as ZerotrustAPI from 'cloudflare/resources/accounts/zerotrust/zerotrust';
import { Page } from 'cloudflare/pagination';

export class Accounts extends APIResource {
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);
  billings: BillingsAPI.Billings = new BillingsAPI.Billings(this._client);
  brandProtections: BrandProtectionsAPI.BrandProtections = new BrandProtectionsAPI.BrandProtections(
    this._client,
  );
  cfdTunnels: CfdTunnelsAPI.CfdTunnels = new CfdTunnelsAPI.CfdTunnels(this._client);
  customPages: CustomPagesAPI.CustomPages = new CustomPagesAPI.CustomPages(this._client);
  diagnostics: DiagnosticsAPI.Diagnostics = new DiagnosticsAPI.Diagnostics(this._client);
  dlp: DlpAPI.Dlp = new DlpAPI.Dlp(this._client);
  dnsFirewalls: DNSFirewallsAPI.DNSFirewalls = new DNSFirewallsAPI.DNSFirewalls(this._client);
  emails: EmailsAPI.Emails = new EmailsAPI.Emails(this._client);
  firewalls: FirewallsAPI.Firewalls = new FirewallsAPI.Firewalls(this._client);
  images: ImagesAPI.Images = new ImagesAPI.Images(this._client);
  intel: IntelAPI.Intel = new IntelAPI.Intel(this._client);
  loadBalancers: LoadBalancersAPI.LoadBalancers = new LoadBalancersAPI.LoadBalancers(this._client);
  logpushes: LogpushesAPI.Logpushes = new LogpushesAPI.Logpushes(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
  magic: MagicAPI.Magic = new MagicAPI.Magic(this._client);
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  mnms: MnmsAPI.Mnms = new MnmsAPI.Mnms(this._client);
  mtlsCertificates: MtlsCertificatesAPI.MtlsCertificates = new MtlsCertificatesAPI.MtlsCertificates(
    this._client,
  );
  pages: PagesAPI.Pages = new PagesAPI.Pages(this._client);
  pcaps: PcapsAPI.Pcaps = new PcapsAPI.Pcaps(this._client);
  r2: R2API.R2 = new R2API.R2(this._client);
  railguns: RailgunsAPI.Railguns = new RailgunsAPI.Railguns(this._client);
  registrar: RegistrarAPI.Registrar = new RegistrarAPI.Registrar(this._client);
  requestTracers: RequestTracersAPI.RequestTracers = new RequestTracersAPI.RequestTracers(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  secondaryDNS: SecondaryDNSAPI.SecondaryDNS = new SecondaryDNSAPI.SecondaryDNS(this._client);
  storages: StoragesAPI.Storages = new StoragesAPI.Storages(this._client);
  streams: StreamsAPI.Streams = new StreamsAPI.Streams(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  teamnet: TeamnetAPI.Teamnet = new TeamnetAPI.Teamnet(this._client);
  tunnels: TunnelsAPI.Tunnels = new TunnelsAPI.Tunnels(this._client);
  workers: WorkersAPI.Workers = new WorkersAPI.Workers(this._client);
  gateway: GatewayAPI.Gateway = new GatewayAPI.Gateway(this._client);
  rulesets: RulesetsAPI.Rulesets = new RulesetsAPI.Rulesets(this._client);
  access: AccessAPI.Access = new AccessAPI.Access(this._client);
  alerting: AlertingAPI.Alerting = new AlertingAPI.Alerting(this._client);
  customNs: CustomNsAPI.CustomNs = new CustomNsAPI.CustomNs(this._client);
  devices: DevicesAPI.Devices = new DevicesAPI.Devices(this._client);
  addressing: AddressingAPI.Addressing = new AddressingAPI.Addressing(this._client);
  ai: AIAPI.AI = new AIAPI.AI(this._client);
  challenges: ChallengesAPI.Challenges = new ChallengesAPI.Challenges(this._client);
  d1: D1API.D1 = new D1API.D1(this._client);
  dex: DexAPI.Dex = new DexAPI.Dex(this._client);
  hyperdrive: HyperdriveAPI.Hyperdrive = new HyperdriveAPI.Hyperdrive(this._client);
  pagesProjects: PagesProjectsAPI.PagesProjects = new PagesProjectsAPI.PagesProjects(this._client);
  rum: RumAPI.Rum = new RumAPI.Rum(this._client);
  vectorizeIndexes: VectorizeIndexesAPI.VectorizeIndexes = new VectorizeIndexesAPI.VectorizeIndexes(
    this._client,
  );
  warpConnector: WarpConnectorAPI.WarpConnector = new WarpConnectorAPI.WarpConnector(this._client);
  zerotrust: ZerotrustAPI.Zerotrust = new ZerotrustAPI.Zerotrust(this._client);
  urlscanner: UrlscannerAPI.Urlscanner = new UrlscannerAPI.Urlscanner(this._client);

  /**
   * Get information about a specific account that you are a member of.
   */
  retrieve(identifier: unknown, options?: Core.RequestOptions): Core.APIPromise<AccountRetrieveResponse> {
    return this._client.get(`/accounts/${identifier}`, options);
  }

  /**
   * Update an existing account.
   */
  update(
    identifier: unknown,
    body: AccountUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountUpdateResponse> {
    return this._client.put(`/accounts/${identifier}`, { body, ...options });
  }

  /**
   * List all accounts you have ownership or verified access to.
   */
  accountsListAccounts(
    query?: AccountAccountsListAccountsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountAccountsListAccountsResponsesPage, AccountAccountsListAccountsResponse>;
  accountsListAccounts(
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountAccountsListAccountsResponsesPage, AccountAccountsListAccountsResponse>;
  accountsListAccounts(
    query: AccountAccountsListAccountsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountAccountsListAccountsResponsesPage, AccountAccountsListAccountsResponse> {
    if (isRequestOptions(query)) {
      return this.accountsListAccounts({}, query);
    }
    return this._client.getAPIList('/accounts', AccountAccountsListAccountsResponsesPage, {
      query,
      ...options,
    });
  }
}

export class AccountAccountsListAccountsResponsesPage extends Page<AccountAccountsListAccountsResponse> {}

export interface AccountRetrieveResponse {
  errors?: Array<AccountRetrieveResponse.Error>;

  messages?: Array<AccountRetrieveResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AccountRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface AccountUpdateResponse {
  errors?: Array<AccountUpdateResponse.Error>;

  messages?: Array<AccountUpdateResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AccountUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export type AccountAccountsListAccountsResponse = unknown;

export interface AccountUpdateParams {
  /**
   * Account name
   */
  name: string;

  /**
   * Account settings
   */
  settings?: AccountUpdateParams.Settings;
}

export namespace AccountUpdateParams {
  /**
   * Account settings
   */
  export interface Settings {
    /**
     * Specifies the default nameservers to be used for new zones added to this
     * account.
     *
     * - `cloudflare.standard` for Cloudflare-branded nameservers
     * - `custom.account` for account custom nameservers
     * - `custom.tenant` for tenant custom nameservers
     *
     * See
     * [Custom Nameservers](https://developers.cloudflare.com/dns/additional-options/custom-nameservers/)
     * for more information.
     */
    default_nameservers?: 'cloudflare.standard' | 'custom.account' | 'custom.tenant';

    /**
     * Indicates whether membership in this account requires that Two-Factor
     * Authentication is enabled
     */
    enforce_twofactor?: boolean;

    /**
     * Indicates whether new zones should use the account-level custom nameservers by
     * default
     */
    use_account_custom_ns_by_default?: boolean;
  }
}

export interface AccountAccountsListAccountsParams {
  /**
   * Direction to order results.
   */
  direction?: 'asc' | 'desc';

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Maximum number of results per page.
   */
  per_page?: number;
}

export namespace Accounts {
  export import AccountRetrieveResponse = AccountsAPI.AccountRetrieveResponse;
  export import AccountUpdateResponse = AccountsAPI.AccountUpdateResponse;
  export import AccountAccountsListAccountsResponse = AccountsAPI.AccountAccountsListAccountsResponse;
  export import AccountAccountsListAccountsResponsesPage = AccountsAPI.AccountAccountsListAccountsResponsesPage;
  export import AccountUpdateParams = AccountsAPI.AccountUpdateParams;
  export import AccountAccountsListAccountsParams = AccountsAPI.AccountAccountsListAccountsParams;
  export import Addresses = AddressesAPI.Addresses;
  export import Billings = BillingsAPI.Billings;
  export import BrandProtections = BrandProtectionsAPI.BrandProtections;
  export import CfdTunnels = CfdTunnelsAPI.CfdTunnels;
  export import CfdTunnelRetrieveResponse = CfdTunnelsAPI.CfdTunnelRetrieveResponse;
  export import CfdTunnelUpdateResponse = CfdTunnelsAPI.CfdTunnelUpdateResponse;
  export import CfdTunnelDeleteResponse = CfdTunnelsAPI.CfdTunnelDeleteResponse;
  export import CfdTunnelCloudflareTunnelCreateACloudflareTunnelResponse = CfdTunnelsAPI.CfdTunnelCloudflareTunnelCreateACloudflareTunnelResponse;
  export import CfdTunnelCloudflareTunnelListCloudflareTunnelsResponse = CfdTunnelsAPI.CfdTunnelCloudflareTunnelListCloudflareTunnelsResponse;
  export import CfdTunnelCloudflareTunnelListCloudflareTunnelsResponsesPage = CfdTunnelsAPI.CfdTunnelCloudflareTunnelListCloudflareTunnelsResponsesPage;
  export import CfdTunnelUpdateParams = CfdTunnelsAPI.CfdTunnelUpdateParams;
  export import CfdTunnelDeleteParams = CfdTunnelsAPI.CfdTunnelDeleteParams;
  export import CfdTunnelCloudflareTunnelCreateACloudflareTunnelParams = CfdTunnelsAPI.CfdTunnelCloudflareTunnelCreateACloudflareTunnelParams;
  export import CfdTunnelCloudflareTunnelListCloudflareTunnelsParams = CfdTunnelsAPI.CfdTunnelCloudflareTunnelListCloudflareTunnelsParams;
  export import CustomPages = CustomPagesAPI.CustomPages;
  export import CustomPageRetrieveResponse = CustomPagesAPI.CustomPageRetrieveResponse;
  export import CustomPageUpdateResponse = CustomPagesAPI.CustomPageUpdateResponse;
  export import CustomPageCustomPagesForAnAccountListCustomPagesResponse = CustomPagesAPI.CustomPageCustomPagesForAnAccountListCustomPagesResponse;
  export import CustomPageUpdateParams = CustomPagesAPI.CustomPageUpdateParams;
  export import Diagnostics = DiagnosticsAPI.Diagnostics;
  export import Dlp = DlpAPI.Dlp;
  export import DNSFirewalls = DNSFirewallsAPI.DNSFirewalls;
  export import DNSFirewallRetrieveResponse = DNSFirewallsAPI.DNSFirewallRetrieveResponse;
  export import DNSFirewallUpdateResponse = DNSFirewallsAPI.DNSFirewallUpdateResponse;
  export import DNSFirewallDeleteResponse = DNSFirewallsAPI.DNSFirewallDeleteResponse;
  export import DNSFirewallDNSFirewallCreateDNSFirewallClusterResponse = DNSFirewallsAPI.DNSFirewallDNSFirewallCreateDNSFirewallClusterResponse;
  export import DNSFirewallDNSFirewallListDNSFirewallClustersResponse = DNSFirewallsAPI.DNSFirewallDNSFirewallListDNSFirewallClustersResponse;
  export import DNSFirewallDNSFirewallListDNSFirewallClustersResponsesPage = DNSFirewallsAPI.DNSFirewallDNSFirewallListDNSFirewallClustersResponsesPage;
  export import DNSFirewallUpdateParams = DNSFirewallsAPI.DNSFirewallUpdateParams;
  export import DNSFirewallDNSFirewallCreateDNSFirewallClusterParams = DNSFirewallsAPI.DNSFirewallDNSFirewallCreateDNSFirewallClusterParams;
  export import DNSFirewallDNSFirewallListDNSFirewallClustersParams = DNSFirewallsAPI.DNSFirewallDNSFirewallListDNSFirewallClustersParams;
  export import Emails = EmailsAPI.Emails;
  export import Firewalls = FirewallsAPI.Firewalls;
  export import Images = ImagesAPI.Images;
  export import Intel = IntelAPI.Intel;
  export import LoadBalancers = LoadBalancersAPI.LoadBalancers;
  export import Logpushes = LogpushesAPI.Logpushes;
  export import Logs = LogsAPI.Logs;
  export import Magic = MagicAPI.Magic;
  export import Members = MembersAPI.Members;
  export import MemberRetrieveResponse = MembersAPI.MemberRetrieveResponse;
  export import MemberUpdateResponse = MembersAPI.MemberUpdateResponse;
  export import MemberDeleteResponse = MembersAPI.MemberDeleteResponse;
  export import MemberAccountMembersAddMemberResponse = MembersAPI.MemberAccountMembersAddMemberResponse;
  export import MemberAccountMembersListMembersResponse = MembersAPI.MemberAccountMembersListMembersResponse;
  export import MemberAccountMembersListMembersResponsesPage = MembersAPI.MemberAccountMembersListMembersResponsesPage;
  export import MemberUpdateParams = MembersAPI.MemberUpdateParams;
  export import MemberAccountMembersAddMemberParams = MembersAPI.MemberAccountMembersAddMemberParams;
  export import MemberAccountMembersListMembersParams = MembersAPI.MemberAccountMembersListMembersParams;
  export import Mnms = MnmsAPI.Mnms;
  export import MtlsCertificates = MtlsCertificatesAPI.MtlsCertificates;
  export import MtlsCertificateRetrieveResponse = MtlsCertificatesAPI.MtlsCertificateRetrieveResponse;
  export import MtlsCertificateDeleteResponse = MtlsCertificatesAPI.MtlsCertificateDeleteResponse;
  export import MtlsCertificateMTlsCertificateManagementListMTlsCertificatesResponse = MtlsCertificatesAPI.MtlsCertificateMTlsCertificateManagementListMTlsCertificatesResponse;
  export import MtlsCertificateMTlsCertificateManagementUploadMTlsCertificateResponse = MtlsCertificatesAPI.MtlsCertificateMTlsCertificateManagementUploadMTlsCertificateResponse;
  export import MtlsCertificateMTlsCertificateManagementUploadMTlsCertificateParams = MtlsCertificatesAPI.MtlsCertificateMTlsCertificateManagementUploadMTlsCertificateParams;
  export import Pages = PagesAPI.Pages;
  export import Pcaps = PcapsAPI.Pcaps;
  export import PcapRetrieveResponse = PcapsAPI.PcapRetrieveResponse;
  export import PcapMagicPcapCollectionCreatePcapRequestResponse = PcapsAPI.PcapMagicPcapCollectionCreatePcapRequestResponse;
  export import PcapMagicPcapCollectionListPacketCaptureRequestsResponse = PcapsAPI.PcapMagicPcapCollectionListPacketCaptureRequestsResponse;
  export import PcapMagicPcapCollectionCreatePcapRequestParams = PcapsAPI.PcapMagicPcapCollectionCreatePcapRequestParams;
  export import R2 = R2API.R2;
  export import Railguns = RailgunsAPI.Railguns;
  export import RailgunRetrieveResponse = RailgunsAPI.RailgunRetrieveResponse;
  export import RailgunUpdateResponse = RailgunsAPI.RailgunUpdateResponse;
  export import RailgunDeleteResponse = RailgunsAPI.RailgunDeleteResponse;
  export import RailgunAccountRailgunsCreateRailgunResponse = RailgunsAPI.RailgunAccountRailgunsCreateRailgunResponse;
  export import RailgunAccountRailgunsListRailgunsResponse = RailgunsAPI.RailgunAccountRailgunsListRailgunsResponse;
  export import RailgunAccountRailgunsListRailgunsResponsesPage = RailgunsAPI.RailgunAccountRailgunsListRailgunsResponsesPage;
  export import RailgunUpdateParams = RailgunsAPI.RailgunUpdateParams;
  export import RailgunAccountRailgunsCreateRailgunParams = RailgunsAPI.RailgunAccountRailgunsCreateRailgunParams;
  export import RailgunAccountRailgunsListRailgunsParams = RailgunsAPI.RailgunAccountRailgunsListRailgunsParams;
  export import Registrar = RegistrarAPI.Registrar;
  export import RequestTracers = RequestTracersAPI.RequestTracers;
  export import Roles = RolesAPI.Roles;
  export import RoleRetrieveResponse = RolesAPI.RoleRetrieveResponse;
  export import RoleAccountRolesListRolesResponse = RolesAPI.RoleAccountRolesListRolesResponse;
  export import Rules = RulesAPI.Rules;
  export import SecondaryDNS = SecondaryDNSAPI.SecondaryDNS;
  export import Storages = StoragesAPI.Storages;
  export import Streams = StreamsAPI.Streams;
  export import StreamRetrieveResponse = StreamsAPI.StreamRetrieveResponse;
  export import StreamUpdateResponse = StreamsAPI.StreamUpdateResponse;
  export import StreamStreamVideosListVideosResponse = StreamsAPI.StreamStreamVideosListVideosResponse;
  export import StreamUpdateParams = StreamsAPI.StreamUpdateParams;
  export import StreamStreamVideosInitiateVideoUploadsUsingTusParams = StreamsAPI.StreamStreamVideosInitiateVideoUploadsUsingTusParams;
  export import StreamStreamVideosListVideosParams = StreamsAPI.StreamStreamVideosListVideosParams;
  export import Subscriptions = SubscriptionsAPI.Subscriptions;
  export import SubscriptionUpdateResponse = SubscriptionsAPI.SubscriptionUpdateResponse;
  export import SubscriptionDeleteResponse = SubscriptionsAPI.SubscriptionDeleteResponse;
  export import SubscriptionAccountSubscriptionsCreateSubscriptionResponse = SubscriptionsAPI.SubscriptionAccountSubscriptionsCreateSubscriptionResponse;
  export import SubscriptionAccountSubscriptionsListSubscriptionsResponse = SubscriptionsAPI.SubscriptionAccountSubscriptionsListSubscriptionsResponse;
  export import SubscriptionUpdateParams = SubscriptionsAPI.SubscriptionUpdateParams;
  export import SubscriptionAccountSubscriptionsCreateSubscriptionParams = SubscriptionsAPI.SubscriptionAccountSubscriptionsCreateSubscriptionParams;
  export import Teamnet = TeamnetAPI.Teamnet;
  export import Tunnels = TunnelsAPI.Tunnels;
  export import TunnelRetrieveResponse = TunnelsAPI.TunnelRetrieveResponse;
  export import TunnelDeleteResponse = TunnelsAPI.TunnelDeleteResponse;
  export import TunnelArgoTunnelCreateAnArgoTunnelResponse = TunnelsAPI.TunnelArgoTunnelCreateAnArgoTunnelResponse;
  export import TunnelArgoTunnelListArgoTunnelsResponse = TunnelsAPI.TunnelArgoTunnelListArgoTunnelsResponse;
  export import TunnelArgoTunnelListArgoTunnelsResponsesPage = TunnelsAPI.TunnelArgoTunnelListArgoTunnelsResponsesPage;
  export import TunnelDeleteParams = TunnelsAPI.TunnelDeleteParams;
  export import TunnelArgoTunnelCreateAnArgoTunnelParams = TunnelsAPI.TunnelArgoTunnelCreateAnArgoTunnelParams;
  export import TunnelArgoTunnelListArgoTunnelsParams = TunnelsAPI.TunnelArgoTunnelListArgoTunnelsParams;
  export import Workers = WorkersAPI.Workers;
  export import Gateway = GatewayAPI.Gateway;
  export import GatewayZeroTrustAccountsCreateZeroTrustAccountResponse = GatewayAPI.GatewayZeroTrustAccountsCreateZeroTrustAccountResponse;
  export import GatewayZeroTrustAccountsGetZeroTrustAccountInformationResponse = GatewayAPI.GatewayZeroTrustAccountsGetZeroTrustAccountInformationResponse;
  export import GatewayZeroTrustAccountsCreateZeroTrustAccountParams = GatewayAPI.GatewayZeroTrustAccountsCreateZeroTrustAccountParams;
  export import Rulesets = RulesetsAPI.Rulesets;
  export import RulesetRetrieveResponse = RulesetsAPI.RulesetRetrieveResponse;
  export import RulesetUpdateResponse = RulesetsAPI.RulesetUpdateResponse;
  export import RulesetAccountRulesetsCreateAnAccountRulesetResponse = RulesetsAPI.RulesetAccountRulesetsCreateAnAccountRulesetResponse;
  export import RulesetAccountRulesetsListAccountRulesetsResponse = RulesetsAPI.RulesetAccountRulesetsListAccountRulesetsResponse;
  export import RulesetUpdateParams = RulesetsAPI.RulesetUpdateParams;
  export import RulesetAccountRulesetsCreateAnAccountRulesetParams = RulesetsAPI.RulesetAccountRulesetsCreateAnAccountRulesetParams;
  export import Access = AccessAPI.Access;
  export import Alerting = AlertingAPI.Alerting;
  export import CustomNs = CustomNsAPI.CustomNs;
  export import CustomNDeleteResponse = CustomNsAPI.CustomNDeleteResponse;
  export import CustomNAccountLevelCustomNameserversAddAccountCustomNameserverResponse = CustomNsAPI.CustomNAccountLevelCustomNameserversAddAccountCustomNameserverResponse;
  export import CustomNAccountLevelCustomNameserversListAccountCustomNameserversResponse = CustomNsAPI.CustomNAccountLevelCustomNameserversListAccountCustomNameserversResponse;
  export import CustomNAccountLevelCustomNameserversAddAccountCustomNameserverParams = CustomNsAPI.CustomNAccountLevelCustomNameserversAddAccountCustomNameserverParams;
  export import Devices = DevicesAPI.Devices;
  export import DeviceRetrieveResponse = DevicesAPI.DeviceRetrieveResponse;
  export import DeviceDevicesListDevicesResponse = DevicesAPI.DeviceDevicesListDevicesResponse;
  export import Addressing = AddressingAPI.Addressing;
  export import AI = AIAPI.AI;
  export import AIRunResponse = AIAPI.AIRunResponse;
  export import AIRunParams = AIAPI.AIRunParams;
  export import Challenges = ChallengesAPI.Challenges;
  export import D1 = D1API.D1;
  export import Dex = DexAPI.Dex;
  export import Hyperdrive = HyperdriveAPI.Hyperdrive;
  export import PagesProjects = PagesProjectsAPI.PagesProjects;
  export import PagesProjectPurgeBuildCacheResponse = PagesProjectsAPI.PagesProjectPurgeBuildCacheResponse;
  export import Rum = RumAPI.Rum;
  export import VectorizeIndexes = VectorizeIndexesAPI.VectorizeIndexes;
  export import VectorizeIndexCreateResponse = VectorizeIndexesAPI.VectorizeIndexCreateResponse;
  export import VectorizeIndexRetrieveResponse = VectorizeIndexesAPI.VectorizeIndexRetrieveResponse;
  export import VectorizeIndexUpdateResponse = VectorizeIndexesAPI.VectorizeIndexUpdateResponse;
  export import VectorizeIndexListResponse = VectorizeIndexesAPI.VectorizeIndexListResponse;
  export import VectorizeIndexDeleteResponse = VectorizeIndexesAPI.VectorizeIndexDeleteResponse;
  export import VectorizeIndexInsertResponse = VectorizeIndexesAPI.VectorizeIndexInsertResponse;
  export import VectorizeIndexQueryResponse = VectorizeIndexesAPI.VectorizeIndexQueryResponse;
  export import VectorizeIndexUpsertResponse = VectorizeIndexesAPI.VectorizeIndexUpsertResponse;
  export import VectorizeIndexCreateParams = VectorizeIndexesAPI.VectorizeIndexCreateParams;
  export import VectorizeIndexUpdateParams = VectorizeIndexesAPI.VectorizeIndexUpdateParams;
  export import VectorizeIndexInsertParams = VectorizeIndexesAPI.VectorizeIndexInsertParams;
  export import VectorizeIndexQueryParams = VectorizeIndexesAPI.VectorizeIndexQueryParams;
  export import VectorizeIndexUpsertParams = VectorizeIndexesAPI.VectorizeIndexUpsertParams;
  export import WarpConnector = WarpConnectorAPI.WarpConnector;
  export import WarpConnectorCreateResponse = WarpConnectorAPI.WarpConnectorCreateResponse;
  export import WarpConnectorRetrieveResponse = WarpConnectorAPI.WarpConnectorRetrieveResponse;
  export import WarpConnectorUpdateResponse = WarpConnectorAPI.WarpConnectorUpdateResponse;
  export import WarpConnectorListResponse = WarpConnectorAPI.WarpConnectorListResponse;
  export import WarpConnectorDeleteResponse = WarpConnectorAPI.WarpConnectorDeleteResponse;
  export import WarpConnectorTokenResponse = WarpConnectorAPI.WarpConnectorTokenResponse;
  export import WarpConnectorListResponsesPage = WarpConnectorAPI.WarpConnectorListResponsesPage;
  export import WarpConnectorCreateParams = WarpConnectorAPI.WarpConnectorCreateParams;
  export import WarpConnectorUpdateParams = WarpConnectorAPI.WarpConnectorUpdateParams;
  export import WarpConnectorListParams = WarpConnectorAPI.WarpConnectorListParams;
  export import WarpConnectorDeleteParams = WarpConnectorAPI.WarpConnectorDeleteParams;
  export import Zerotrust = ZerotrustAPI.Zerotrust;
  export import Urlscanner = UrlscannerAPI.Urlscanner;
}
