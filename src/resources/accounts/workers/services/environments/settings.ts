// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/accounts/workers/services/environments/settings';

export class Settings extends APIResource {
  /**
   * Get script settings from a worker with an environment
   */
  retrieve(
    accountIdentifier: string,
    serviceName: string,
    environmentName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingRetrieveResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/workers/services/${serviceName}/environments/${environmentName}/settings`,
      options,
    );
  }

  /**
   * Patch script metadata, such as bindings
   */
  update(
    accountIdentifier: string,
    serviceName: string,
    environmentName: string,
    body: SettingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingUpdateResponse> {
    return this._client.patch(
      `/accounts/${accountIdentifier}/workers/services/${serviceName}/environments/${environmentName}/settings`,
      { body, ...options },
    );
  }
}

export interface SettingRetrieveResponse {
  /**
   * List of bindings attached to this Worker
   */
  bindings?: Array<
    | SettingRetrieveResponse.AvYbsl2uKvNamespaceBinding
    | SettingRetrieveResponse.AvYbsl2uServiceBinding
    | SettingRetrieveResponse.AvYbsl2uDoBinding
    | SettingRetrieveResponse.AvYbsl2uR2Binding
    | SettingRetrieveResponse.AvYbsl2uQueueBinding
    | SettingRetrieveResponse.AvYbsl2uD1Binding
    | SettingRetrieveResponse.AvYbsl2uDispatchNamespaceBinding
    | SettingRetrieveResponse.AvYbsl2uMtlsCertBinding
  >;

  /**
   * Opt your Worker into changes after this date
   */
  compatibility_date?: string;

  /**
   * Opt your Worker into specific changes
   */
  compatibility_flags?: Array<string>;

  /**
   * Whether Logpush is turned on for the Worker.
   */
  logpush?: boolean;

  /**
   * Migrations to apply for Durable Objects associated with this Worker.
   */
  migrations?:
    | SettingRetrieveResponse.AvYbsl2uSingleStepMigrations
    | SettingRetrieveResponse.AvYbsl2uSteppedMigrations;

  placement?: SettingRetrieveResponse.Placement;

  /**
   * Tags to help you manage your Workers
   */
  tags?: Array<string>;

  /**
   * List of Workers that will consume logs from the attached Worker.
   */
  tail_consumers?: Array<SettingRetrieveResponse.TailConsumer>;

  /**
   * Specifies the usage model for the Worker (e.g. 'bundled' or 'unbound').
   */
  usage_model?: string;
}

export namespace SettingRetrieveResponse {
  export interface AvYbsl2uKvNamespaceBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Namespace identifier tag.
     */
    namespace_id: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'kv_namespace';
  }

  export interface AvYbsl2uServiceBinding {
    /**
     * Optional environment if the Worker utilizes one.
     */
    environment: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Name of Worker to bind to
     */
    service: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'service';
  }

  export interface AvYbsl2uDoBinding {
    /**
     * The exported class name of the Durable Object
     */
    class_name: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'durable_object_namespace';

    /**
     * The environment of the script_name to bind to
     */
    environment?: string;

    /**
     * Namespace identifier tag.
     */
    namespace_id?: string;

    /**
     * The script where the Durable Object is defined, if it is external to this Worker
     */
    script_name?: string;
  }

  export interface AvYbsl2uR2Binding {
    /**
     * R2 bucket to bind to
     */
    bucket_name: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'r2_bucket';
  }

  export interface AvYbsl2uQueueBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Name of the Queue to bind to
     */
    queue_name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'queue';
  }

  export interface AvYbsl2uD1Binding {
    /**
     * ID of the D1 database to bind to
     */
    id: string;

    /**
     * A JavaScript variable name for the binding.
     */
    binding: string;

    /**
     * The name of the D1 database associated with the 'id' provided.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'd1';
  }

  export interface AvYbsl2uDispatchNamespaceBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Namespace to bind to
     */
    namespace: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'dispatch_namespace';

    /**
     * Outbound worker
     */
    outbound?: AvYbsl2uDispatchNamespaceBinding.Outbound;
  }

  export namespace AvYbsl2uDispatchNamespaceBinding {
    /**
     * Outbound worker
     */
    export interface Outbound {
      /**
       * Pass information from the Dispatch Worker to the Outbound Worker through the
       * parameters
       */
      params?: Array<string>;

      /**
       * Outbound worker
       */
      worker?: Outbound.Worker;
    }

    export namespace Outbound {
      /**
       * Outbound worker
       */
      export interface Worker {
        /**
         * Environment of the outbound worker
         */
        environment?: string;

        /**
         * Name of the outbound worker
         */
        service?: string;
      }
    }
  }

  export interface AvYbsl2uMtlsCertBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'mtls_certificate';

    /**
     * ID of the certificate to bind to
     */
    certificate_id?: string;
  }

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

export interface SettingUpdateResponse {
  /**
   * List of bindings attached to this Worker
   */
  bindings?: Array<
    | SettingUpdateResponse.AvYbsl2uKvNamespaceBinding
    | SettingUpdateResponse.AvYbsl2uServiceBinding
    | SettingUpdateResponse.AvYbsl2uDoBinding
    | SettingUpdateResponse.AvYbsl2uR2Binding
    | SettingUpdateResponse.AvYbsl2uQueueBinding
    | SettingUpdateResponse.AvYbsl2uD1Binding
    | SettingUpdateResponse.AvYbsl2uDispatchNamespaceBinding
    | SettingUpdateResponse.AvYbsl2uMtlsCertBinding
  >;

  /**
   * Opt your Worker into changes after this date
   */
  compatibility_date?: string;

  /**
   * Opt your Worker into specific changes
   */
  compatibility_flags?: Array<string>;

  /**
   * Whether Logpush is turned on for the Worker.
   */
  logpush?: boolean;

  /**
   * Migrations to apply for Durable Objects associated with this Worker.
   */
  migrations?:
    | SettingUpdateResponse.AvYbsl2uSingleStepMigrations
    | SettingUpdateResponse.AvYbsl2uSteppedMigrations;

  placement?: SettingUpdateResponse.Placement;

  /**
   * Tags to help you manage your Workers
   */
  tags?: Array<string>;

  /**
   * List of Workers that will consume logs from the attached Worker.
   */
  tail_consumers?: Array<SettingUpdateResponse.TailConsumer>;

  /**
   * Specifies the usage model for the Worker (e.g. 'bundled' or 'unbound').
   */
  usage_model?: string;
}

export namespace SettingUpdateResponse {
  export interface AvYbsl2uKvNamespaceBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Namespace identifier tag.
     */
    namespace_id: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'kv_namespace';
  }

  export interface AvYbsl2uServiceBinding {
    /**
     * Optional environment if the Worker utilizes one.
     */
    environment: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Name of Worker to bind to
     */
    service: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'service';
  }

  export interface AvYbsl2uDoBinding {
    /**
     * The exported class name of the Durable Object
     */
    class_name: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'durable_object_namespace';

    /**
     * The environment of the script_name to bind to
     */
    environment?: string;

    /**
     * Namespace identifier tag.
     */
    namespace_id?: string;

    /**
     * The script where the Durable Object is defined, if it is external to this Worker
     */
    script_name?: string;
  }

  export interface AvYbsl2uR2Binding {
    /**
     * R2 bucket to bind to
     */
    bucket_name: string;

    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'r2_bucket';
  }

  export interface AvYbsl2uQueueBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Name of the Queue to bind to
     */
    queue_name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'queue';
  }

  export interface AvYbsl2uD1Binding {
    /**
     * ID of the D1 database to bind to
     */
    id: string;

    /**
     * A JavaScript variable name for the binding.
     */
    binding: string;

    /**
     * The name of the D1 database associated with the 'id' provided.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'd1';
  }

  export interface AvYbsl2uDispatchNamespaceBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Namespace to bind to
     */
    namespace: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'dispatch_namespace';

    /**
     * Outbound worker
     */
    outbound?: AvYbsl2uDispatchNamespaceBinding.Outbound;
  }

  export namespace AvYbsl2uDispatchNamespaceBinding {
    /**
     * Outbound worker
     */
    export interface Outbound {
      /**
       * Pass information from the Dispatch Worker to the Outbound Worker through the
       * parameters
       */
      params?: Array<string>;

      /**
       * Outbound worker
       */
      worker?: Outbound.Worker;
    }

    export namespace Outbound {
      /**
       * Outbound worker
       */
      export interface Worker {
        /**
         * Environment of the outbound worker
         */
        environment?: string;

        /**
         * Name of the outbound worker
         */
        service?: string;
      }
    }
  }

  export interface AvYbsl2uMtlsCertBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'mtls_certificate';

    /**
     * ID of the certificate to bind to
     */
    certificate_id?: string;
  }

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

export interface SettingUpdateParams {
  /**
   * List of bindings attached to this Worker
   */
  bindings?: Array<
    | SettingUpdateParams.AvYbsl2uKvNamespaceBinding
    | SettingUpdateParams.AvYbsl2uServiceBinding
    | SettingUpdateParams.AvYbsl2uDoBinding
    | SettingUpdateParams.AvYbsl2uR2Binding
    | SettingUpdateParams.AvYbsl2uQueueBinding
    | SettingUpdateParams.AvYbsl2uD1Binding
    | SettingUpdateParams.AvYbsl2uDispatchNamespaceBinding
    | SettingUpdateParams.AvYbsl2uMtlsCertBinding
  >;

  /**
   * Opt your Worker into changes after this date
   */
  compatibility_date?: string;

  /**
   * Opt your Worker into specific changes
   */
  compatibility_flags?: Array<string>;

  /**
   * Whether Logpush is turned on for the Worker.
   */
  logpush?: boolean;

  /**
   * Migrations to apply for Durable Objects associated with this Worker.
   */
  migrations?:
    | SettingUpdateParams.AvYbsl2uSingleStepMigrations
    | SettingUpdateParams.AvYbsl2uSteppedMigrations;

  placement?: SettingUpdateParams.Placement;

  /**
   * Tags to help you manage your Workers
   */
  tags?: Array<string>;

  /**
   * List of Workers that will consume logs from the attached Worker.
   */
  tail_consumers?: Array<SettingUpdateParams.TailConsumer>;

  /**
   * Specifies the usage model for the Worker (e.g. 'bundled' or 'unbound').
   */
  usage_model?: string;
}

export namespace SettingUpdateParams {
  export interface AvYbsl2uKvNamespaceBinding {
    /**
     * The class of resource that the binding provides.
     */
    type: 'kv_namespace';
  }

  export interface AvYbsl2uServiceBinding {
    /**
     * Optional environment if the Worker utilizes one.
     */
    environment: string;

    /**
     * Name of Worker to bind to
     */
    service: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'service';
  }

  export interface AvYbsl2uDoBinding {
    /**
     * The exported class name of the Durable Object
     */
    class_name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'durable_object_namespace';

    /**
     * The environment of the script_name to bind to
     */
    environment?: string;

    /**
     * The script where the Durable Object is defined, if it is external to this Worker
     */
    script_name?: string;
  }

  export interface AvYbsl2uR2Binding {
    /**
     * R2 bucket to bind to
     */
    bucket_name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'r2_bucket';
  }

  export interface AvYbsl2uQueueBinding {
    /**
     * Name of the Queue to bind to
     */
    queue_name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'queue';
  }

  export interface AvYbsl2uD1Binding {
    /**
     * ID of the D1 database to bind to
     */
    id: string;

    /**
     * The name of the D1 database associated with the 'id' provided.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'd1';
  }

  export interface AvYbsl2uDispatchNamespaceBinding {
    /**
     * Namespace to bind to
     */
    namespace: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'dispatch_namespace';

    /**
     * Outbound worker
     */
    outbound?: AvYbsl2uDispatchNamespaceBinding.Outbound;
  }

  export namespace AvYbsl2uDispatchNamespaceBinding {
    /**
     * Outbound worker
     */
    export interface Outbound {
      /**
       * Pass information from the Dispatch Worker to the Outbound Worker through the
       * parameters
       */
      params?: Array<string>;

      /**
       * Outbound worker
       */
      worker?: Outbound.Worker;
    }

    export namespace Outbound {
      /**
       * Outbound worker
       */
      export interface Worker {
        /**
         * Environment of the outbound worker
         */
        environment?: string;

        /**
         * Name of the outbound worker
         */
        service?: string;
      }
    }
  }

  export interface AvYbsl2uMtlsCertBinding {
    /**
     * The class of resource that the binding provides.
     */
    type: 'mtls_certificate';

    /**
     * ID of the certificate to bind to
     */
    certificate_id?: string;
  }

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

export namespace Settings {
  export import SettingRetrieveResponse = SettingsAPI.SettingRetrieveResponse;
  export import SettingUpdateResponse = SettingsAPI.SettingUpdateResponse;
  export import SettingUpdateParams = SettingsAPI.SettingUpdateParams;
}
