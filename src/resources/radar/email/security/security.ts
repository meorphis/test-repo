// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ArcSummaryAPI from 'cloudflare/resources/radar/email/security/arc-summary';
import * as ArcTimeseriesAPI from 'cloudflare/resources/radar/email/security/arc-timeseries';
import * as DkimSummaryAPI from 'cloudflare/resources/radar/email/security/dkim-summary';
import * as DkimTimeseriesAPI from 'cloudflare/resources/radar/email/security/dkim-timeseries';
import * as DmarcSummaryAPI from 'cloudflare/resources/radar/email/security/dmarc-summary';
import * as DmarcTimeseriesAPI from 'cloudflare/resources/radar/email/security/dmarc-timeseries';
import * as MaliciousSummaryAPI from 'cloudflare/resources/radar/email/security/malicious-summary';
import * as MaliciousTimeseriesAPI from 'cloudflare/resources/radar/email/security/malicious-timeseries';
import * as SpamSummaryAPI from 'cloudflare/resources/radar/email/security/spam-summary';
import * as SpamTimeseriesAPI from 'cloudflare/resources/radar/email/security/spam-timeseries';
import * as SpfSummaryAPI from 'cloudflare/resources/radar/email/security/spf-summary';
import * as SpfTimeseriesAPI from 'cloudflare/resources/radar/email/security/spf-timeseries';
import * as ThreatCategorySummaryAPI from 'cloudflare/resources/radar/email/security/threat-category-summary';
import * as TmeseriesGroupsAPI from 'cloudflare/resources/radar/email/security/tmeseries-groups/tmeseries-groups';
import * as TopAPI from 'cloudflare/resources/radar/email/security/top/top';

export class Security extends APIResource {
  arcSummary: ArcSummaryAPI.ArcSummary = new ArcSummaryAPI.ArcSummary(this._client);
  dkimSummary: DkimSummaryAPI.DkimSummary = new DkimSummaryAPI.DkimSummary(this._client);
  dmarcSummary: DmarcSummaryAPI.DmarcSummary = new DmarcSummaryAPI.DmarcSummary(this._client);
  maliciousSummary: MaliciousSummaryAPI.MaliciousSummary = new MaliciousSummaryAPI.MaliciousSummary(
    this._client,
  );
  spamSummary: SpamSummaryAPI.SpamSummary = new SpamSummaryAPI.SpamSummary(this._client);
  spfSummary: SpfSummaryAPI.SpfSummary = new SpfSummaryAPI.SpfSummary(this._client);
  threatCategorySummary: ThreatCategorySummaryAPI.ThreatCategorySummary =
    new ThreatCategorySummaryAPI.ThreatCategorySummary(this._client);
  arcTimeseries: ArcTimeseriesAPI.ArcTimeseries = new ArcTimeseriesAPI.ArcTimeseries(this._client);
  dkimTimeseries: DkimTimeseriesAPI.DkimTimeseries = new DkimTimeseriesAPI.DkimTimeseries(this._client);
  dmarcTimeseries: DmarcTimeseriesAPI.DmarcTimeseries = new DmarcTimeseriesAPI.DmarcTimeseries(this._client);
  maliciousTimeseries: MaliciousTimeseriesAPI.MaliciousTimeseries =
    new MaliciousTimeseriesAPI.MaliciousTimeseries(this._client);
  spamTimeseries: SpamTimeseriesAPI.SpamTimeseries = new SpamTimeseriesAPI.SpamTimeseries(this._client);
  spfTimeseries: SpfTimeseriesAPI.SpfTimeseries = new SpfTimeseriesAPI.SpfTimeseries(this._client);
  tmeseriesGroups: TmeseriesGroupsAPI.TmeseriesGroups = new TmeseriesGroupsAPI.TmeseriesGroups(this._client);
  top: TopAPI.Top = new TopAPI.Top(this._client);
}

export namespace Security {
  export import ArcSummary = ArcSummaryAPI.ArcSummary;
  export import ArcSummaryListResponse = ArcSummaryAPI.ArcSummaryListResponse;
  export import ArcSummaryListParams = ArcSummaryAPI.ArcSummaryListParams;
  export import DkimSummary = DkimSummaryAPI.DkimSummary;
  export import DkimSummaryListResponse = DkimSummaryAPI.DkimSummaryListResponse;
  export import DkimSummaryListParams = DkimSummaryAPI.DkimSummaryListParams;
  export import DmarcSummary = DmarcSummaryAPI.DmarcSummary;
  export import DmarcSummaryListResponse = DmarcSummaryAPI.DmarcSummaryListResponse;
  export import DmarcSummaryListParams = DmarcSummaryAPI.DmarcSummaryListParams;
  export import MaliciousSummary = MaliciousSummaryAPI.MaliciousSummary;
  export import MaliciousSummaryListResponse = MaliciousSummaryAPI.MaliciousSummaryListResponse;
  export import MaliciousSummaryListParams = MaliciousSummaryAPI.MaliciousSummaryListParams;
  export import SpamSummary = SpamSummaryAPI.SpamSummary;
  export import SpamSummaryListResponse = SpamSummaryAPI.SpamSummaryListResponse;
  export import SpamSummaryListParams = SpamSummaryAPI.SpamSummaryListParams;
  export import SpfSummary = SpfSummaryAPI.SpfSummary;
  export import SpfSummaryListResponse = SpfSummaryAPI.SpfSummaryListResponse;
  export import SpfSummaryListParams = SpfSummaryAPI.SpfSummaryListParams;
  export import ThreatCategorySummary = ThreatCategorySummaryAPI.ThreatCategorySummary;
  export import ThreatCategorySummaryListResponse = ThreatCategorySummaryAPI.ThreatCategorySummaryListResponse;
  export import ThreatCategorySummaryListParams = ThreatCategorySummaryAPI.ThreatCategorySummaryListParams;
  export import ArcTimeseries = ArcTimeseriesAPI.ArcTimeseries;
  export import ArcTimeseryListResponse = ArcTimeseriesAPI.ArcTimeseryListResponse;
  export import ArcTimeseryListParams = ArcTimeseriesAPI.ArcTimeseryListParams;
  export import DkimTimeseries = DkimTimeseriesAPI.DkimTimeseries;
  export import DkimTimeseryListResponse = DkimTimeseriesAPI.DkimTimeseryListResponse;
  export import DkimTimeseryListParams = DkimTimeseriesAPI.DkimTimeseryListParams;
  export import DmarcTimeseries = DmarcTimeseriesAPI.DmarcTimeseries;
  export import DmarcTimeseryListResponse = DmarcTimeseriesAPI.DmarcTimeseryListResponse;
  export import DmarcTimeseryListParams = DmarcTimeseriesAPI.DmarcTimeseryListParams;
  export import MaliciousTimeseries = MaliciousTimeseriesAPI.MaliciousTimeseries;
  export import MaliciousTimeseryListResponse = MaliciousTimeseriesAPI.MaliciousTimeseryListResponse;
  export import MaliciousTimeseryListParams = MaliciousTimeseriesAPI.MaliciousTimeseryListParams;
  export import SpamTimeseries = SpamTimeseriesAPI.SpamTimeseries;
  export import SpamTimeseryListResponse = SpamTimeseriesAPI.SpamTimeseryListResponse;
  export import SpamTimeseryListParams = SpamTimeseriesAPI.SpamTimeseryListParams;
  export import SpfTimeseries = SpfTimeseriesAPI.SpfTimeseries;
  export import SpfTimeseryListResponse = SpfTimeseriesAPI.SpfTimeseryListResponse;
  export import SpfTimeseryListParams = SpfTimeseriesAPI.SpfTimeseryListParams;
  export import TmeseriesGroups = TmeseriesGroupsAPI.TmeseriesGroups;
  export import Top = TopAPI.Top;
}
