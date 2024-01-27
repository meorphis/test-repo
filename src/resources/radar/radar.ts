// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AnnotationsAPI from 'cloudflare/resources/radar/annotations/annotations';
import * as As112API from 'cloudflare/resources/radar/as112/as112';
import * as AttacksAPI from 'cloudflare/resources/radar/attacks/attacks';
import * as BgpsAPI from 'cloudflare/resources/radar/bgps/bgps';
import * as ConnectionTamperingsAPI from 'cloudflare/resources/radar/connection-tamperings/connection-tamperings';
import * as DatasetsAPI from 'cloudflare/resources/radar/datasets/datasets';
import * as DNSAPI from 'cloudflare/resources/radar/dns/dns';
import * as EmailAPI from 'cloudflare/resources/radar/email/email';
import * as EntitiesAPI from 'cloudflare/resources/radar/entities/entities';
import * as HTTPAPI from 'cloudflare/resources/radar/http/http';
import * as NetflowsAPI from 'cloudflare/resources/radar/netflows/netflows';
import * as QualityAPI from 'cloudflare/resources/radar/quality/quality';
import * as RankingAPI from 'cloudflare/resources/radar/ranking/ranking';
import * as SearchesAPI from 'cloudflare/resources/radar/searches/searches';
import * as TrafficAnomaliesAPI from 'cloudflare/resources/radar/traffic-anomalies/traffic-anomalies';
import * as VerifiedBotsAPI from 'cloudflare/resources/radar/verified-bots/verified-bots';

export class Radar extends APIResource {
  as112: As112API.As112 = new As112API.As112(this._client);
  quality: QualityAPI.Quality = new QualityAPI.Quality(this._client);
  trafficAnomalies: TrafficAnomaliesAPI.TrafficAnomalies = new TrafficAnomaliesAPI.TrafficAnomalies(
    this._client,
  );
  annotations: AnnotationsAPI.Annotations = new AnnotationsAPI.Annotations(this._client);
  attacks: AttacksAPI.Attacks = new AttacksAPI.Attacks(this._client);
  bgps: BgpsAPI.Bgps = new BgpsAPI.Bgps(this._client);
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  dns: DNSAPI.DNS = new DNSAPI.DNS(this._client);
  email: EmailAPI.Email = new EmailAPI.Email(this._client);
  entities: EntitiesAPI.Entities = new EntitiesAPI.Entities(this._client);
  http: HTTPAPI.HTTP = new HTTPAPI.HTTP(this._client);
  netflows: NetflowsAPI.Netflows = new NetflowsAPI.Netflows(this._client);
  ranking: RankingAPI.Ranking = new RankingAPI.Ranking(this._client);
  searches: SearchesAPI.Searches = new SearchesAPI.Searches(this._client);
  verifiedBots: VerifiedBotsAPI.VerifiedBots = new VerifiedBotsAPI.VerifiedBots(this._client);
  connectionTamperings: ConnectionTamperingsAPI.ConnectionTamperings =
    new ConnectionTamperingsAPI.ConnectionTamperings(this._client);
}

export namespace Radar {
  export import As112 = As112API.As112;
  export import Quality = QualityAPI.Quality;
  export import TrafficAnomalies = TrafficAnomaliesAPI.TrafficAnomalies;
  export import TrafficAnomalyListResponse = TrafficAnomaliesAPI.TrafficAnomalyListResponse;
  export import TrafficAnomalyListParams = TrafficAnomaliesAPI.TrafficAnomalyListParams;
  export import Annotations = AnnotationsAPI.Annotations;
  export import Attacks = AttacksAPI.Attacks;
  export import Bgps = BgpsAPI.Bgps;
  export import Datasets = DatasetsAPI.Datasets;
  export import DatasetRetrieveResponse = DatasetsAPI.DatasetRetrieveResponse;
  export import DatasetListResponse = DatasetsAPI.DatasetListResponse;
  export import DatasetRetrieveParams = DatasetsAPI.DatasetRetrieveParams;
  export import DatasetListParams = DatasetsAPI.DatasetListParams;
  export import DNS = DNSAPI.DNS;
  export import Email = EmailAPI.Email;
  export import Entities = EntitiesAPI.Entities;
  export import HTTP = HTTPAPI.HTTP;
  export import Netflows = NetflowsAPI.Netflows;
  export import Ranking = RankingAPI.Ranking;
  export import Searches = SearchesAPI.Searches;
  export import VerifiedBots = VerifiedBotsAPI.VerifiedBots;
  export import ConnectionTamperings = ConnectionTamperingsAPI.ConnectionTamperings;
}
