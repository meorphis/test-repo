// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as DNSAPI from 'cloudflare/resources/accounts/intel/dns';
import * as DomainHistoriesAPI from 'cloudflare/resources/accounts/intel/domain-histories';
import * as IPsAPI from 'cloudflare/resources/accounts/intel/ips';
import * as MiscategorizationsAPI from 'cloudflare/resources/accounts/intel/miscategorizations';
import * as SinkholesAPI from 'cloudflare/resources/accounts/intel/sinkholes';
import * as WhoisAPI from 'cloudflare/resources/accounts/intel/whois';
import * as ASNsAPI from 'cloudflare/resources/accounts/intel/asns/asns';
import * as DomainsAPI from 'cloudflare/resources/accounts/intel/domains/domains';
import * as IndicatorFeedsAPI from 'cloudflare/resources/accounts/intel/indicator-feeds/indicator-feeds';

export class Intel extends APIResource {
  asns: ASNsAPI.ASNs = new ASNsAPI.ASNs(this._client);
  dns: DNSAPI.DNS = new DNSAPI.DNS(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  domainHistories: DomainHistoriesAPI.DomainHistories = new DomainHistoriesAPI.DomainHistories(this._client);
  indicatorFeeds: IndicatorFeedsAPI.IndicatorFeeds = new IndicatorFeedsAPI.IndicatorFeeds(this._client);
  ips: IPsAPI.IPs = new IPsAPI.IPs(this._client);
  miscategorizations: MiscategorizationsAPI.Miscategorizations = new MiscategorizationsAPI.Miscategorizations(
    this._client,
  );
  sinkholes: SinkholesAPI.Sinkholes = new SinkholesAPI.Sinkholes(this._client);
  whois: WhoisAPI.Whois = new WhoisAPI.Whois(this._client);
}

export namespace Intel {
  export import ASNs = ASNsAPI.ASNs;
  export import ASNRetrieveResponse = ASNsAPI.ASNRetrieveResponse;
  export import DNS = DNSAPI.DNS;
  export import DNSPassiveDNSByIPGetPassiveDNSByIPResponse = DNSAPI.DNSPassiveDNSByIPGetPassiveDNSByIPResponse;
  export import DNSPassiveDNSByIPGetPassiveDNSByIPParams = DNSAPI.DNSPassiveDNSByIPGetPassiveDNSByIPParams;
  export import Domains = DomainsAPI.Domains;
  export import DomainDomainIntelligenceGetDomainDetailsResponse = DomainsAPI.DomainDomainIntelligenceGetDomainDetailsResponse;
  export import DomainDomainIntelligenceGetDomainDetailsParams = DomainsAPI.DomainDomainIntelligenceGetDomainDetailsParams;
  export import DomainHistories = DomainHistoriesAPI.DomainHistories;
  export import DomainHistoryListResponse = DomainHistoriesAPI.DomainHistoryListResponse;
  export import DomainHistoryListParams = DomainHistoriesAPI.DomainHistoryListParams;
  export import IndicatorFeeds = IndicatorFeedsAPI.IndicatorFeeds;
  export import IPs = IPsAPI.IPs;
  export import IPIPIntelligenceGetIPOverviewResponse = IPsAPI.IPIPIntelligenceGetIPOverviewResponse;
  export import IPIPIntelligenceGetIPOverviewParams = IPsAPI.IPIPIntelligenceGetIPOverviewParams;
  export import Miscategorizations = MiscategorizationsAPI.Miscategorizations;
  export import MiscategorizationMiscategorizationCreateMiscategorizationResponse = MiscategorizationsAPI.MiscategorizationMiscategorizationCreateMiscategorizationResponse;
  export import MiscategorizationMiscategorizationCreateMiscategorizationParams = MiscategorizationsAPI.MiscategorizationMiscategorizationCreateMiscategorizationParams;
  export import Sinkholes = SinkholesAPI.Sinkholes;
  export import SinkholeListResponse = SinkholesAPI.SinkholeListResponse;
  export import Whois = WhoisAPI.Whois;
  export import WhoisWhoisRecordGetWhoisRecordResponse = WhoisAPI.WhoisWhoisRecordGetWhoisRecordResponse;
  export import WhoisWhoisRecordGetWhoisRecordParams = WhoisAPI.WhoisWhoisRecordGetWhoisRecordParams;
}
