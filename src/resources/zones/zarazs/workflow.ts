// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WorkflowAPI from 'cloudflare/resources/zones/zarazs/workflow';

export class Workflow extends APIResource {
  /**
   * Gets Zaraz workflow for a zone.
   */
  retrieve(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<ZarazWorkflow> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/zaraz/v2/workflow`, options);
  }

  /**
   * Updates Zaraz workflow for a zone.
   */
  update(
    zoneIdentifier: string,
    body: WorkflowUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZarazWorkflow> {
    return this._client.put(`/zones/${zoneIdentifier}/settings/zaraz/v2/workflow`, { body, ...options });
  }
}

export interface ZarazWorkflow {
  errors?: Array<ZarazWorkflow.Error>;

  messages?: Array<ZarazWorkflow.Message>;

  /**
   * Zaraz workflow
   */
  result?: 'realtime' | 'preview';

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace ZarazWorkflow {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export type WorkflowUpdateParams = 'realtime' | 'preview';

export namespace Workflow {
  export import ZarazWorkflow = WorkflowAPI.ZarazWorkflow;
  export import WorkflowUpdateParams = WorkflowAPI.WorkflowUpdateParams;
}
