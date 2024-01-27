// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as PayloadLogsAPI from 'cloudflare/resources/accounts/dlp/payload-logs';
import * as DatasetsAPI from 'cloudflare/resources/accounts/dlp/datasets/datasets';
import * as PatternsAPI from 'cloudflare/resources/accounts/dlp/patterns/patterns';
import * as ProfilesAPI from 'cloudflare/resources/accounts/dlp/profiles/profiles';

export class Dlp extends APIResource {
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  patterns: PatternsAPI.Patterns = new PatternsAPI.Patterns(this._client);
  payloadLogs: PayloadLogsAPI.PayloadLogs = new PayloadLogsAPI.PayloadLogs(this._client);
  profiles: ProfilesAPI.Profiles = new ProfilesAPI.Profiles(this._client);
}

export namespace Dlp {
  export import Datasets = DatasetsAPI.Datasets;
  export import DlpDatasetArrayResponse = DatasetsAPI.DlpDatasetArrayResponse;
  export import DlpDatasetCreationResponse = DatasetsAPI.DlpDatasetCreationResponse;
  export import DlpDatasetNewVersionResponse = DatasetsAPI.DlpDatasetNewVersionResponse;
  export import DlpDatasetResponse = DatasetsAPI.DlpDatasetResponse;
  export import DatasetCreateParams = DatasetsAPI.DatasetCreateParams;
  export import DatasetUpdateParams = DatasetsAPI.DatasetUpdateParams;
  export import Patterns = PatternsAPI.Patterns;
  export import PayloadLogs = PayloadLogsAPI.PayloadLogs;
  export import PayloadLogDlpPayloadLogSettingsGetSettingsResponse = PayloadLogsAPI.PayloadLogDlpPayloadLogSettingsGetSettingsResponse;
  export import PayloadLogDlpPayloadLogSettingsUpdateSettingsResponse = PayloadLogsAPI.PayloadLogDlpPayloadLogSettingsUpdateSettingsResponse;
  export import PayloadLogDlpPayloadLogSettingsUpdateSettingsParams = PayloadLogsAPI.PayloadLogDlpPayloadLogSettingsUpdateSettingsParams;
  export import Profiles = ProfilesAPI.Profiles;
  export import ProfileRetrieveResponse = ProfilesAPI.ProfileRetrieveResponse;
  export import ProfileListResponse = ProfilesAPI.ProfileListResponse;
}
