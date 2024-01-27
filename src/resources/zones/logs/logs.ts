// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as RayidsAPI from 'cloudflare/resources/zones/logs/rayids';
import * as ControlsAPI from 'cloudflare/resources/zones/logs/controls/controls';
import * as ReceivedsAPI from 'cloudflare/resources/zones/logs/receiveds/receiveds';

export class Logs extends APIResource {
  controls: ControlsAPI.Controls = new ControlsAPI.Controls(this._client);
  rayids: RayidsAPI.Rayids = new RayidsAPI.Rayids(this._client);
  receiveds: ReceivedsAPI.Receiveds = new ReceivedsAPI.Receiveds(this._client);
}

export namespace Logs {
  export import Controls = ControlsAPI.Controls;
  export import Rayids = RayidsAPI.Rayids;
  export import RayidRetrieveResponse = RayidsAPI.RayidRetrieveResponse;
  export import RayidRetrieveParams = RayidsAPI.RayidRetrieveParams;
  export import Receiveds = ReceivedsAPI.Receiveds;
  export import ReceivedReceivedGetLogsReceivedResponse = ReceivedsAPI.ReceivedReceivedGetLogsReceivedResponse;
  export import ReceivedReceivedGetLogsReceivedParams = ReceivedsAPI.ReceivedReceivedGetLogsReceivedParams;
}
