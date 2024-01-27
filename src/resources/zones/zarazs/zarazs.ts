// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as WorkflowAPI from 'cloudflare/resources/zones/zarazs/workflow';

export class Zarazs extends APIResource {
  workflow: WorkflowAPI.Workflow = new WorkflowAPI.Workflow(this._client);
}

export namespace Zarazs {
  export import Workflow = WorkflowAPI.Workflow;
  export import ZarazWorkflow = WorkflowAPI.ZarazWorkflow;
  export import WorkflowUpdateParams = WorkflowAPI.WorkflowUpdateParams;
}
