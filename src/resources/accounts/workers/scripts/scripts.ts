// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { type Response } from 'cloudflare/_shims/index';
import * as ScriptsAPI from 'cloudflare/resources/accounts/workers/scripts/scripts';
import * as ContentAPI from 'cloudflare/resources/accounts/workers/scripts/content';
import * as ContentV2API from 'cloudflare/resources/accounts/workers/scripts/content-v2';
import * as SchedulesAPI from 'cloudflare/resources/accounts/workers/scripts/schedules';
import * as SettingsAPI from 'cloudflare/resources/accounts/workers/scripts/settings';
import * as TailsAPI from 'cloudflare/resources/accounts/workers/scripts/tails';
import * as UsageModelsAPI from 'cloudflare/resources/accounts/workers/scripts/usage-models';
import { type Uploadable, maybeMultipartFormRequestOptions } from 'cloudflare/core';

export class Scripts extends APIResource {
  schedules: SchedulesAPI.Schedules = new SchedulesAPI.Schedules(this._client);
  tails: TailsAPI.Tails = new TailsAPI.Tails(this._client);
  usageModels: UsageModelsAPI.UsageModels = new UsageModelsAPI.UsageModels(this._client);
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
  contentV2: ContentV2API.ContentV2 = new ContentV2API.ContentV2(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

  /**
   * Fetch raw script content for your worker. Note this is the original script
   * content, not JSON encoded.
   */
  retrieve(
    accountIdentifier: string,
    scriptName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.get(`/accounts/${accountIdentifier}/workers/scripts/${scriptName}`, {
      ...options,
      __binaryResponse: true,
    });
  }

  /**
   * Upload a worker module.
   */
  update(
    accountIdentifier: string,
    scriptName: string,
    params: ScriptUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptUpdateResponse> {
    const { rollback_to, ...body } = params;
    return this._client.put(
      `/accounts/${accountIdentifier}/workers/scripts/${scriptName}`,
      maybeMultipartFormRequestOptions({ query: { rollback_to }, body, ...options }),
    );
  }

  /**
   * Delete your worker. This call has no response body on a successful delete.
   */
  delete(
    accountIdentifier: string,
    scriptName: string,
    params: ScriptDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { force } = params;
    return this._client.delete(`/accounts/${accountIdentifier}/workers/scripts/${scriptName}`, {
      query: { force },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Fetch a list of uploaded workers.
   */
  workerScriptListWorkers(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptWorkerScriptListWorkersResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/workers/scripts`, options);
  }
}

export interface ScriptUpdateResponse {
  errors?: Array<ScriptUpdateResponse.Error>;

  messages?: Array<ScriptUpdateResponse.Message>;

  result?: ScriptUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ScriptUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * The id of the script in the Workers system. Usually the script name.
     */
    id?: string;

    /**
     * When the script was created.
     */
    created_on?: string;

    /**
     * Hashed script content, can be used in a If-None-Match header when updating.
     */
    etag?: string;

    /**
     * Whether Logpush is turned on for the Worker.
     */
    logpush?: boolean;

    /**
     * When the script was last modified.
     */
    modified_on?: string;

    /**
     * Deprecated. Deployment metadata for internal usage.
     */
    pipeline_hash?: string;

    /**
     * Specifies the placement mode for the Worker (e.g. 'smart').
     */
    placement_mode?: string;

    /**
     * List of Workers that will consume logs from the attached Worker.
     */
    tail_consumers?: Array<Result.TailConsumer>;

    /**
     * Specifies the usage model for the Worker (e.g. 'bundled' or 'unbound').
     */
    usage_model?: string;
  }

  export namespace Result {
    /**
     * A reference to a script that will consume logs from the attached Worker.
     */
    export interface TailConsumer {
      /**
       * Name of Worker that is to be the consumer.
       */
      service: string;

      /**
       * Optional environment if the Worker utilizes one.
       */
      environment?: string;

      /**
       * Optional dispatch namespace the script belongs to.
       */
      namespace?: string;
    }
  }
}

export interface ScriptWorkerScriptListWorkersResponse {
  errors?: Array<ScriptWorkerScriptListWorkersResponse.Error>;

  messages?: Array<ScriptWorkerScriptListWorkersResponse.Message>;

  result?: Array<ScriptWorkerScriptListWorkersResponse.Result>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ScriptWorkerScriptListWorkersResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * The id of the script in the Workers system. Usually the script name.
     */
    id?: string;

    /**
     * When the script was created.
     */
    created_on?: string;

    /**
     * Hashed script content, can be used in a If-None-Match header when updating.
     */
    etag?: string;

    /**
     * Whether Logpush is turned on for the Worker.
     */
    logpush?: boolean;

    /**
     * When the script was last modified.
     */
    modified_on?: string;

    /**
     * Deprecated. Deployment metadata for internal usage.
     */
    pipeline_hash?: string;

    /**
     * Specifies the placement mode for the Worker (e.g. 'smart').
     */
    placement_mode?: string;

    /**
     * List of Workers that will consume logs from the attached Worker.
     */
    tail_consumers?: Array<Result.TailConsumer>;

    /**
     * Specifies the usage model for the Worker (e.g. 'bundled' or 'unbound').
     */
    usage_model?: string;
  }

  export namespace Result {
    /**
     * A reference to a script that will consume logs from the attached Worker.
     */
    export interface TailConsumer {
      /**
       * Name of Worker that is to be the consumer.
       */
      service: string;

      /**
       * Optional environment if the Worker utilizes one.
       */
      environment?: string;

      /**
       * Optional dispatch namespace the script belongs to.
       */
      namespace?: string;
    }
  }
}

export type ScriptUpdateParams = ScriptUpdateParams.Variant0 | ScriptUpdateParams.Variant1;

export namespace ScriptUpdateParams {
  export interface Variant0 {
    /**
     * Query param: Rollback to provided deployment based on deployment ID. Request
     * body will only parse a "message" part. You can learn more about deployments
     * [here](https://developers.cloudflare.com/workers/platform/deployments/).
     */
    rollback_to?: string;

    /**
     * Body param: A module comprising a Worker script, often a javascript file.
     * Multiple modules may be provided as separate named parts, but at least one
     * module must be present and referenced in the metadata as `main_module` or
     * `body_part` by part name.
     */
    '<any part name>'?: Array<Uploadable>;

    /**
     * Body param: JSON encoded metadata about the uploaded parts and Worker
     * configuration.
     */
    metadata?: ScriptUpdateParams.Variant0.Metadata;
  }

  export namespace Variant0 {
    /**
     * JSON encoded metadata about the uploaded parts and Worker configuration.
     */
    export interface Metadata {
      /**
       * List of bindings available to the worker.
       */
      bindings?: Array<unknown>;

      /**
       * Name of the part in the multipart request that contains the script (e.g. the
       * file adding a listener to the `fetch` event). Indicates a
       * `service worker syntax` Worker.
       */
      body_part?: string;

      /**
       * Date indicating targeted support in the Workers runtime. Backwards incompatible
       * fixes to the runtime following this date will not affect this Worker.
       */
      compatibility_date?: string;

      /**
       * Flags that enable or disable certain features in the Workers runtime. Used to
       * enable upcoming features or opt in or out of specific changes not included in a
       * `compatibility_date`.
       */
      compatibility_flags?: Array<string>;

      /**
       * List of binding types to keep from previous_upload.
       */
      keep_bindings?: Array<string>;

      /**
       * Whether Logpush is turned on for the Worker.
       */
      logpush?: boolean;

      /**
       * Name of the part in the multipart request that contains the main module (e.g.
       * the file exporting a `fetch` handler). Indicates a `module syntax` Worker.
       */
      main_module?: string;

      /**
       * Migrations to apply for Durable Objects associated with this Worker.
       */
      migrations?: Metadata.AvYbsl2uSingleStepMigrations | Metadata.AvYbsl2uSteppedMigrations;

      placement?: Metadata.Placement;

      /**
       * List of strings to use as tags for this Worker
       */
      tags?: Array<string>;

      /**
       * List of Workers that will consume logs from the attached Worker.
       */
      tail_consumers?: Array<Metadata.TailConsumer>;

      /**
       * Usage model to apply to invocations.
       */
      usage_model?: 'bundled' | 'unbound';

      /**
       * Key-value pairs to use as tags for this version of this Worker
       */
      version_tags?: unknown;
    }

    export namespace Metadata {
      /**
       * A single set of migrations to apply.
       */
      export interface AvYbsl2uSingleStepMigrations {
        /**
         * A list of classes to delete Durable Object namespaces from.
         */
        deleted_classes?: Array<string>;

        /**
         * A list of classes to create Durable Object namespaces from.
         */
        new_classes?: Array<string>;

        /**
         * Tag to set as the latest migration tag.
         */
        new_tag?: string;

        /**
         * Tag used to verify against the latest migration tag for this Worker. If they
         * don't match, the upload is rejected.
         */
        old_tag?: string;

        /**
         * A list of classes with Durable Object namespaces that were renamed.
         */
        renamed_classes?: Array<AvYbsl2uSingleStepMigrations.RenamedClass>;

        /**
         * A list of transfers for Durable Object namespaces from a different Worker and
         * class to a class defined in this Worker.
         */
        transferred_classes?: Array<AvYbsl2uSingleStepMigrations.TransferredClass>;
      }

      export namespace AvYbsl2uSingleStepMigrations {
        export interface RenamedClass {
          from?: string;

          to?: string;
        }

        export interface TransferredClass {
          from?: string;

          from_script?: string;

          to?: string;
        }
      }

      export interface AvYbsl2uSteppedMigrations {
        /**
         * Tag to set as the latest migration tag.
         */
        new_tag?: string;

        /**
         * Tag used to verify against the latest migration tag for this Worker. If they
         * don't match, the upload is rejected.
         */
        old_tag?: string;

        /**
         * Migrations to apply in order.
         */
        steps?: Array<AvYbsl2uSteppedMigrations.Step>;
      }

      export namespace AvYbsl2uSteppedMigrations {
        export interface Step {
          /**
           * A list of classes to delete Durable Object namespaces from.
           */
          deleted_classes?: Array<string>;

          /**
           * A list of classes to create Durable Object namespaces from.
           */
          new_classes?: Array<string>;

          /**
           * A list of classes with Durable Object namespaces that were renamed.
           */
          renamed_classes?: Array<Step.RenamedClass>;

          /**
           * A list of transfers for Durable Object namespaces from a different Worker and
           * class to a class defined in this Worker.
           */
          transferred_classes?: Array<Step.TransferredClass>;
        }

        export namespace Step {
          export interface RenamedClass {
            from?: string;

            to?: string;
          }

          export interface TransferredClass {
            from?: string;

            from_script?: string;

            to?: string;
          }
        }
      }

      export interface Placement {
        /**
         * Enables
         * [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
         * Only `"smart"` is currently supported
         */
        mode?: 'smart';
      }

      /**
       * A reference to a script that will consume logs from the attached Worker.
       */
      export interface TailConsumer {
        /**
         * Name of Worker that is to be the consumer.
         */
        service: string;

        /**
         * Optional environment if the Worker utilizes one.
         */
        environment?: string;

        /**
         * Optional dispatch namespace the script belongs to.
         */
        namespace?: string;
      }
    }
  }

  export interface Variant1 {
    /**
     * Query param: Rollback to provided deployment based on deployment ID. Request
     * body will only parse a "message" part. You can learn more about deployments
     * [here](https://developers.cloudflare.com/workers/platform/deployments/).
     */
    rollback_to?: string;

    /**
     * Body param: Rollback message to be associated with this deployment. Only parsed
     * when query param `"rollback_to"` is present.
     */
    message?: string;
  }
}

export interface ScriptDeleteParams {
  /**
   * If set to true, delete will not be stopped by associated service binding,
   * durable object, or other binding. Any of these associated bindings/durable
   * objects will be deleted along with the script.
   */
  force?: boolean;
}

export namespace Scripts {
  export import ScriptUpdateResponse = ScriptsAPI.ScriptUpdateResponse;
  export import ScriptWorkerScriptListWorkersResponse = ScriptsAPI.ScriptWorkerScriptListWorkersResponse;
  export import ScriptUpdateParams = ScriptsAPI.ScriptUpdateParams;
  export import ScriptDeleteParams = ScriptsAPI.ScriptDeleteParams;
  export import Schedules = SchedulesAPI.Schedules;
  export import ScheduleWorkerCronTriggerGetCronTriggersResponse = SchedulesAPI.ScheduleWorkerCronTriggerGetCronTriggersResponse;
  export import ScheduleWorkerCronTriggerUpdateCronTriggersResponse = SchedulesAPI.ScheduleWorkerCronTriggerUpdateCronTriggersResponse;
  export import ScheduleWorkerCronTriggerUpdateCronTriggersParams = SchedulesAPI.ScheduleWorkerCronTriggerUpdateCronTriggersParams;
  export import Tails = TailsAPI.Tails;
  export import TailDeleteResponse = TailsAPI.TailDeleteResponse;
  export import TailWorkerTailLogsListTailsResponse = TailsAPI.TailWorkerTailLogsListTailsResponse;
  export import TailWorkerTailLogsStartTailResponse = TailsAPI.TailWorkerTailLogsStartTailResponse;
  export import UsageModels = UsageModelsAPI.UsageModels;
  export import UsageModelWorkerScriptFetchUsageModelResponse = UsageModelsAPI.UsageModelWorkerScriptFetchUsageModelResponse;
  export import UsageModelWorkerScriptUpdateUsageModelResponse = UsageModelsAPI.UsageModelWorkerScriptUpdateUsageModelResponse;
  export import UsageModelWorkerScriptUpdateUsageModelParams = UsageModelsAPI.UsageModelWorkerScriptUpdateUsageModelParams;
  export import Content = ContentAPI.Content;
  export import ContentUpdateResponse = ContentAPI.ContentUpdateResponse;
  export import ContentUpdateParams = ContentAPI.ContentUpdateParams;
  export import ContentV2 = ContentV2API.ContentV2;
  export import Settings = SettingsAPI.Settings;
  export import SettingRetrieveResponse = SettingsAPI.SettingRetrieveResponse;
  export import SettingUpdateResponse = SettingsAPI.SettingUpdateResponse;
  export import SettingUpdateParams = SettingsAPI.SettingUpdateParams;
}
