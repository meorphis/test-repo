// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ConfigAPI from 'cloudflare/resources/zones/settings/zaraz/config';
import * as ConfigHistoryAPI from 'cloudflare/resources/zones/settings/zaraz/config-history';
import * as DefaultAPI from 'cloudflare/resources/zones/settings/zaraz/default';
import * as ExportAPI from 'cloudflare/resources/zones/settings/zaraz/export';
import * as HistoryAPI from 'cloudflare/resources/zones/settings/zaraz/history';
import * as PublishAPI from 'cloudflare/resources/zones/settings/zaraz/publish';

export class Zaraz extends APIResource {
  config: ConfigAPI.Config = new ConfigAPI.Config(this._client);
  default: DefaultAPI.Default = new DefaultAPI.Default(this._client);
  export: ExportAPI.Export = new ExportAPI.Export(this._client);
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
  configHistory: ConfigHistoryAPI.ConfigHistory = new ConfigHistoryAPI.ConfigHistory(this._client);
  publish: PublishAPI.Publish = new PublishAPI.Publish(this._client);
}

export namespace Zaraz {
  export import Config = ConfigAPI.Config;
  export import ZarazConfigResponse = ConfigAPI.ZarazConfigResponse;
  export import ConfigUpdateParams = ConfigAPI.ConfigUpdateParams;
  export import Default = DefaultAPI.Default;
  export import Export = ExportAPI.Export;
  export import ExportRetrieveResponse = ExportAPI.ExportRetrieveResponse;
  export import History = HistoryAPI.History;
  export import HistoryListResponse = HistoryAPI.HistoryListResponse;
  export import HistoryUpdateParams = HistoryAPI.HistoryUpdateParams;
  export import HistoryListParams = HistoryAPI.HistoryListParams;
  export import ConfigHistory = ConfigHistoryAPI.ConfigHistory;
  export import ConfigHistoryRetrieveResponse = ConfigHistoryAPI.ConfigHistoryRetrieveResponse;
  export import ConfigHistoryRetrieveParams = ConfigHistoryAPI.ConfigHistoryRetrieveParams;
  export import Publish = PublishAPI.Publish;
  export import PublishCreateResponse = PublishAPI.PublishCreateResponse;
  export import PublishCreateParams = PublishAPI.PublishCreateParams;
}
