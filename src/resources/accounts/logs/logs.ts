// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ControlsAPI from 'cloudflare/resources/accounts/logs/controls/controls';

export class Logs extends APIResource {
  controls: ControlsAPI.Controls = new ControlsAPI.Controls(this._client);
}

export namespace Logs {
  export import Controls = ControlsAPI.Controls;
}
