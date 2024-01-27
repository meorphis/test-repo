// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ProjectsAPI from 'cloudflare/resources/accounts/pages/projects/projects';
import * as DomainsAPI from 'cloudflare/resources/accounts/pages/projects/domains';
import * as DeploymentsAPI from 'cloudflare/resources/accounts/pages/projects/deployments/deployments';

export class Projects extends APIResource {
  deployments: DeploymentsAPI.Deployments = new DeploymentsAPI.Deployments(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);

  /**
   * Fetch a project by name.
   */
  retrieve(
    accountIdentifier: string,
    projectName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/pages/projects/${projectName}`, options);
  }

  /**
   * Set new attributes for an existing project. Modify environment variables. To
   * delete an environment variable, set the key to null.
   */
  update(
    accountIdentifier: string,
    projectName: string,
    body: ProjectUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectUpdateResponse> {
    return this._client.patch(`/accounts/${accountIdentifier}/pages/projects/${projectName}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a project by name.
   */
  delete(
    accountIdentifier: string,
    projectName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.delete(`/accounts/${accountIdentifier}/pages/projects/${projectName}`, options);
  }

  /**
   * Create a new project.
   */
  pagesProjectCreateProject(
    accountIdentifier: string,
    body: ProjectPagesProjectCreateProjectParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectPagesProjectCreateProjectResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/pages/projects`, { body, ...options });
  }

  /**
   * Fetch a list of all user projects.
   */
  pagesProjectGetProjects(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectPagesProjectGetProjectsResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/pages/projects`, options);
  }
}

export interface ProjectRetrieveResponse {
  errors?: Array<ProjectRetrieveResponse.Error>;

  messages?: Array<ProjectRetrieveResponse.Message>;

  result?: ProjectRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ProjectRetrieveResponse {
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
     * Id of the project.
     */
    id?: string;

    /**
     * Configs for the project build process.
     */
    build_config?: Result.BuildConfig;

    canonical_deployment?: Result.CanonicalDeployment;

    /**
     * When the project was created.
     */
    created_on?: string;

    /**
     * Configs for deployments in a project.
     */
    deployment_configs?: Result.DeploymentConfigs;

    /**
     * A list of associated custom domains for the project.
     */
    domains?: Array<unknown>;

    latest_deployment?: Result.LatestDeployment;

    /**
     * Name of the project.
     */
    name?: string;

    /**
     * Production branch of the project. Used to identify production deployments.
     */
    production_branch?: string;

    source?: unknown;

    /**
     * The Cloudflare subdomain associated with the project.
     */
    subdomain?: string;
  }

  export namespace Result {
    /**
     * Configs for the project build process.
     */
    export interface BuildConfig {
      /**
       * Enable build caching for the project.
       */
      build_caching?: boolean | null;

      /**
       * Command used to build project.
       */
      build_command?: string | null;

      /**
       * Output directory of the build.
       */
      destination_dir?: string | null;

      /**
       * Directory to run the command.
       */
      root_dir?: string | null;

      /**
       * The classifying tag for analytics.
       */
      web_analytics_tag?: string | null;

      /**
       * The auth token for analytics.
       */
      web_analytics_token?: string | null;
    }

    export interface CanonicalDeployment {
      /**
       * Id of the deployment.
       */
      id?: string;

      /**
       * A list of alias URLs pointing to this deployment.
       */
      aliases?: Array<unknown> | null;

      build_config?: unknown;

      /**
       * When the deployment was created.
       */
      created_on?: string;

      /**
       * Info about what caused the deployment.
       */
      deployment_trigger?: CanonicalDeployment.DeploymentTrigger;

      /**
       * A dict of env variables to build this deploy.
       */
      env_vars?: unknown;

      /**
       * Type of deploy.
       */
      environment?: string;

      /**
       * If the deployment has been skipped.
       */
      is_skipped?: boolean;

      latest_stage?: unknown;

      /**
       * When the deployment was last modified.
       */
      modified_on?: string;

      /**
       * Id of the project.
       */
      project_id?: string;

      /**
       * Name of the project.
       */
      project_name?: string;

      /**
       * Short Id (8 character) of the deployment.
       */
      short_id?: string;

      source?: unknown;

      /**
       * List of past stages.
       */
      stages?: Array<CanonicalDeployment.Stage>;

      /**
       * The live URL to view this deployment.
       */
      url?: string;
    }

    export namespace CanonicalDeployment {
      /**
       * Info about what caused the deployment.
       */
      export interface DeploymentTrigger {
        /**
         * Additional info about the trigger.
         */
        metadata?: DeploymentTrigger.Metadata;

        /**
         * What caused the deployment.
         */
        type?: string;
      }

      export namespace DeploymentTrigger {
        /**
         * Additional info about the trigger.
         */
        export interface Metadata {
          /**
           * Where the trigger happened.
           */
          branch?: string;

          /**
           * Hash of the deployment trigger commit.
           */
          commit_hash?: string;

          /**
           * Message of the deployment trigger commit.
           */
          commit_message?: string;
        }
      }

      /**
       * The status of the deployment.
       */
      export interface Stage {
        /**
         * When the stage ended.
         */
        ended_on?: string | null;

        /**
         * The current build stage.
         */
        name?: string;

        /**
         * When the stage started.
         */
        started_on?: string | null;

        /**
         * State of the current stage.
         */
        status?: string;
      }
    }

    /**
     * Configs for deployments in a project.
     */
    export interface DeploymentConfigs {
      /**
       * Configs for preview deploys.
       */
      preview?: DeploymentConfigs.Preview;

      /**
       * Configs for production deploys.
       */
      production?: DeploymentConfigs.Production;
    }

    export namespace DeploymentConfigs {
      /**
       * Configs for preview deploys.
       */
      export interface Preview {
        /**
         * Constellation bindings used for Pages Functions.
         */
        ai_bindings?: Preview.AIBindings | null;

        /**
         * Analytics Engine bindings used for Pages Functions.
         */
        analytics_engine_datasets?: Preview.AnalyticsEngineDatasets | null;

        /**
         * Compatibility date used for Pages Functions.
         */
        compatibility_date?: string;

        /**
         * Compatibility flags used for Pages Functions.
         */
        compatibility_flags?: Array<unknown>;

        /**
         * D1 databases used for Pages Functions.
         */
        d1_databases?: Preview.D1Databases | null;

        /**
         * Durabble Object namespaces used for Pages Functions.
         */
        durable_object_namespaces?: Preview.DurableObjectNamespaces | null;

        /**
         * Environment variables for build configs.
         */
        env_vars?: Preview.EnvVars | null;

        /**
         * KV namespaces used for Pages Functions.
         */
        kv_namespaces?: Preview.KvNamespaces;

        /**
         * Placement setting used for Pages Functions.
         */
        placement?: Preview.Placement | null;

        /**
         * Queue Producer bindings used for Pages Functions.
         */
        queue_producers?: Preview.QueueProducers | null;

        /**
         * R2 buckets used for Pages Functions.
         */
        r2_buckets?: Preview.R2Buckets | null;

        /**
         * Services used for Pages Functions.
         */
        service_bindings?: Preview.ServiceBindings | null;
      }

      export namespace Preview {
        /**
         * Constellation bindings used for Pages Functions.
         */
        export interface AIBindings {
          /**
           * AI binding.
           */
          AI_BINDING?: AIBindings.AIBinding;
        }

        export namespace AIBindings {
          /**
           * AI binding.
           */
          export interface AIBinding {
            project_id?: unknown;
          }
        }

        /**
         * Analytics Engine bindings used for Pages Functions.
         */
        export interface AnalyticsEngineDatasets {
          /**
           * Analytics Engine binding.
           */
          ANALYTICS_ENGINE_BINDING?: AnalyticsEngineDatasets.AnalyticsEngineBinding;
        }

        export namespace AnalyticsEngineDatasets {
          /**
           * Analytics Engine binding.
           */
          export interface AnalyticsEngineBinding {
            /**
             * Name of the dataset.
             */
            dataset?: string;
          }
        }

        /**
         * D1 databases used for Pages Functions.
         */
        export interface D1Databases {
          /**
           * D1 binding.
           */
          D1_BINDING?: D1Databases.D1Binding;
        }

        export namespace D1Databases {
          /**
           * D1 binding.
           */
          export interface D1Binding {
            /**
             * UUID of the D1 database.
             */
            id?: string;
          }
        }

        /**
         * Durabble Object namespaces used for Pages Functions.
         */
        export interface DurableObjectNamespaces {
          /**
           * Durabble Object binding.
           */
          DO_BINDING?: DurableObjectNamespaces.DoBinding;
        }

        export namespace DurableObjectNamespaces {
          /**
           * Durabble Object binding.
           */
          export interface DoBinding {
            /**
             * ID of the Durabble Object namespace.
             */
            namespace_id?: string;
          }
        }

        /**
         * Environment variables for build configs.
         */
        export interface EnvVars {
          /**
           * Environment variable.
           */
          ENVIRONMENT_VARIABLE?: EnvVars.EnvironmentVariable;
        }

        export namespace EnvVars {
          /**
           * Environment variable.
           */
          export interface EnvironmentVariable {
            /**
             * The type of environment variable (plain text or secret)
             */
            type?: 'plain_text' | 'secret_text';

            /**
             * Environment variable value.
             */
            value?: string;
          }
        }

        /**
         * KV namespaces used for Pages Functions.
         */
        export interface KvNamespaces {
          /**
           * KV binding.
           */
          KV_BINDING?: KvNamespaces.KvBinding;
        }

        export namespace KvNamespaces {
          /**
           * KV binding.
           */
          export interface KvBinding {
            /**
             * ID of the KV namespace.
             */
            namespace_id?: string;
          }
        }

        /**
         * Placement setting used for Pages Functions.
         */
        export interface Placement {
          /**
           * Placement mode.
           */
          mode?: string;
        }

        /**
         * Queue Producer bindings used for Pages Functions.
         */
        export interface QueueProducers {
          /**
           * Queue Producer binding.
           */
          QUEUE_PRODUCER_BINDING?: QueueProducers.QueueProducerBinding;
        }

        export namespace QueueProducers {
          /**
           * Queue Producer binding.
           */
          export interface QueueProducerBinding {
            /**
             * Name of the Queue.
             */
            name?: string;
          }
        }

        /**
         * R2 buckets used for Pages Functions.
         */
        export interface R2Buckets {
          /**
           * R2 binding.
           */
          R2_BINDING?: R2Buckets.R2Binding;
        }

        export namespace R2Buckets {
          /**
           * R2 binding.
           */
          export interface R2Binding {
            /**
             * Name of the R2 bucket.
             */
            name?: string;
          }
        }

        /**
         * Services used for Pages Functions.
         */
        export interface ServiceBindings {
          /**
           * Service binding.
           */
          SERVICE_BINDING?: ServiceBindings.ServiceBinding;
        }

        export namespace ServiceBindings {
          /**
           * Service binding.
           */
          export interface ServiceBinding {
            /**
             * The Service environment.
             */
            environment?: string;

            /**
             * The Service name.
             */
            service?: string;
          }
        }
      }

      /**
       * Configs for production deploys.
       */
      export interface Production {
        /**
         * Constellation bindings used for Pages Functions.
         */
        ai_bindings?: Production.AIBindings | null;

        /**
         * Analytics Engine bindings used for Pages Functions.
         */
        analytics_engine_datasets?: Production.AnalyticsEngineDatasets | null;

        /**
         * Compatibility date used for Pages Functions.
         */
        compatibility_date?: string;

        /**
         * Compatibility flags used for Pages Functions.
         */
        compatibility_flags?: Array<unknown>;

        /**
         * D1 databases used for Pages Functions.
         */
        d1_databases?: Production.D1Databases | null;

        /**
         * Durabble Object namespaces used for Pages Functions.
         */
        durable_object_namespaces?: Production.DurableObjectNamespaces | null;

        /**
         * Environment variables for build configs.
         */
        env_vars?: Production.EnvVars | null;

        /**
         * KV namespaces used for Pages Functions.
         */
        kv_namespaces?: Production.KvNamespaces;

        /**
         * Placement setting used for Pages Functions.
         */
        placement?: Production.Placement | null;

        /**
         * Queue Producer bindings used for Pages Functions.
         */
        queue_producers?: Production.QueueProducers | null;

        /**
         * R2 buckets used for Pages Functions.
         */
        r2_buckets?: Production.R2Buckets | null;

        /**
         * Services used for Pages Functions.
         */
        service_bindings?: Production.ServiceBindings | null;
      }

      export namespace Production {
        /**
         * Constellation bindings used for Pages Functions.
         */
        export interface AIBindings {
          /**
           * AI binding.
           */
          AI_BINDING?: AIBindings.AIBinding;
        }

        export namespace AIBindings {
          /**
           * AI binding.
           */
          export interface AIBinding {
            project_id?: unknown;
          }
        }

        /**
         * Analytics Engine bindings used for Pages Functions.
         */
        export interface AnalyticsEngineDatasets {
          /**
           * Analytics Engine binding.
           */
          ANALYTICS_ENGINE_BINDING?: AnalyticsEngineDatasets.AnalyticsEngineBinding;
        }

        export namespace AnalyticsEngineDatasets {
          /**
           * Analytics Engine binding.
           */
          export interface AnalyticsEngineBinding {
            /**
             * Name of the dataset.
             */
            dataset?: string;
          }
        }

        /**
         * D1 databases used for Pages Functions.
         */
        export interface D1Databases {
          /**
           * D1 binding.
           */
          D1_BINDING?: D1Databases.D1Binding;
        }

        export namespace D1Databases {
          /**
           * D1 binding.
           */
          export interface D1Binding {
            /**
             * UUID of the D1 database.
             */
            id?: string;
          }
        }

        /**
         * Durabble Object namespaces used for Pages Functions.
         */
        export interface DurableObjectNamespaces {
          /**
           * Durabble Object binding.
           */
          DO_BINDING?: DurableObjectNamespaces.DoBinding;
        }

        export namespace DurableObjectNamespaces {
          /**
           * Durabble Object binding.
           */
          export interface DoBinding {
            /**
             * ID of the Durabble Object namespace.
             */
            namespace_id?: string;
          }
        }

        /**
         * Environment variables for build configs.
         */
        export interface EnvVars {
          /**
           * Environment variable.
           */
          ENVIRONMENT_VARIABLE?: EnvVars.EnvironmentVariable;
        }

        export namespace EnvVars {
          /**
           * Environment variable.
           */
          export interface EnvironmentVariable {
            /**
             * The type of environment variable (plain text or secret)
             */
            type?: 'plain_text' | 'secret_text';

            /**
             * Environment variable value.
             */
            value?: string;
          }
        }

        /**
         * KV namespaces used for Pages Functions.
         */
        export interface KvNamespaces {
          /**
           * KV binding.
           */
          KV_BINDING?: KvNamespaces.KvBinding;
        }

        export namespace KvNamespaces {
          /**
           * KV binding.
           */
          export interface KvBinding {
            /**
             * ID of the KV namespace.
             */
            namespace_id?: string;
          }
        }

        /**
         * Placement setting used for Pages Functions.
         */
        export interface Placement {
          /**
           * Placement mode.
           */
          mode?: string;
        }

        /**
         * Queue Producer bindings used for Pages Functions.
         */
        export interface QueueProducers {
          /**
           * Queue Producer binding.
           */
          QUEUE_PRODUCER_BINDING?: QueueProducers.QueueProducerBinding;
        }

        export namespace QueueProducers {
          /**
           * Queue Producer binding.
           */
          export interface QueueProducerBinding {
            /**
             * Name of the Queue.
             */
            name?: string;
          }
        }

        /**
         * R2 buckets used for Pages Functions.
         */
        export interface R2Buckets {
          /**
           * R2 binding.
           */
          R2_BINDING?: R2Buckets.R2Binding;
        }

        export namespace R2Buckets {
          /**
           * R2 binding.
           */
          export interface R2Binding {
            /**
             * Name of the R2 bucket.
             */
            name?: string;
          }
        }

        /**
         * Services used for Pages Functions.
         */
        export interface ServiceBindings {
          /**
           * Service binding.
           */
          SERVICE_BINDING?: ServiceBindings.ServiceBinding;
        }

        export namespace ServiceBindings {
          /**
           * Service binding.
           */
          export interface ServiceBinding {
            /**
             * The Service environment.
             */
            environment?: string;

            /**
             * The Service name.
             */
            service?: string;
          }
        }
      }
    }

    export interface LatestDeployment {
      /**
       * Id of the deployment.
       */
      id?: string;

      /**
       * A list of alias URLs pointing to this deployment.
       */
      aliases?: Array<unknown> | null;

      build_config?: unknown;

      /**
       * When the deployment was created.
       */
      created_on?: string;

      /**
       * Info about what caused the deployment.
       */
      deployment_trigger?: LatestDeployment.DeploymentTrigger;

      /**
       * A dict of env variables to build this deploy.
       */
      env_vars?: unknown;

      /**
       * Type of deploy.
       */
      environment?: string;

      /**
       * If the deployment has been skipped.
       */
      is_skipped?: boolean;

      latest_stage?: unknown;

      /**
       * When the deployment was last modified.
       */
      modified_on?: string;

      /**
       * Id of the project.
       */
      project_id?: string;

      /**
       * Name of the project.
       */
      project_name?: string;

      /**
       * Short Id (8 character) of the deployment.
       */
      short_id?: string;

      source?: unknown;

      /**
       * List of past stages.
       */
      stages?: Array<LatestDeployment.Stage>;

      /**
       * The live URL to view this deployment.
       */
      url?: string;
    }

    export namespace LatestDeployment {
      /**
       * Info about what caused the deployment.
       */
      export interface DeploymentTrigger {
        /**
         * Additional info about the trigger.
         */
        metadata?: DeploymentTrigger.Metadata;

        /**
         * What caused the deployment.
         */
        type?: string;
      }

      export namespace DeploymentTrigger {
        /**
         * Additional info about the trigger.
         */
        export interface Metadata {
          /**
           * Where the trigger happened.
           */
          branch?: string;

          /**
           * Hash of the deployment trigger commit.
           */
          commit_hash?: string;

          /**
           * Message of the deployment trigger commit.
           */
          commit_message?: string;
        }
      }

      /**
       * The status of the deployment.
       */
      export interface Stage {
        /**
         * When the stage ended.
         */
        ended_on?: string | null;

        /**
         * The current build stage.
         */
        name?: string;

        /**
         * When the stage started.
         */
        started_on?: string | null;

        /**
         * State of the current stage.
         */
        status?: string;
      }
    }
  }
}

export interface ProjectUpdateResponse {
  errors?: Array<ProjectUpdateResponse.Error>;

  messages?: Array<ProjectUpdateResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ProjectUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export type ProjectDeleteResponse = unknown;

export interface ProjectPagesProjectCreateProjectResponse {
  errors?: Array<ProjectPagesProjectCreateProjectResponse.Error>;

  messages?: Array<ProjectPagesProjectCreateProjectResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ProjectPagesProjectCreateProjectResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface ProjectPagesProjectGetProjectsResponse {
  errors?: Array<ProjectPagesProjectGetProjectsResponse.Error>;

  messages?: Array<ProjectPagesProjectGetProjectsResponse.Message>;

  result?: Array<ProjectPagesProjectGetProjectsResponse.Result>;

  result_info?: ProjectPagesProjectGetProjectsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ProjectPagesProjectGetProjectsResponse {
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
     * Id of the deployment.
     */
    id?: string;

    /**
     * A list of alias URLs pointing to this deployment.
     */
    aliases?: Array<unknown> | null;

    build_config?: unknown;

    /**
     * When the deployment was created.
     */
    created_on?: string;

    /**
     * Info about what caused the deployment.
     */
    deployment_trigger?: Result.DeploymentTrigger;

    /**
     * A dict of env variables to build this deploy.
     */
    env_vars?: unknown;

    /**
     * Type of deploy.
     */
    environment?: string;

    /**
     * If the deployment has been skipped.
     */
    is_skipped?: boolean;

    latest_stage?: unknown;

    /**
     * When the deployment was last modified.
     */
    modified_on?: string;

    /**
     * Id of the project.
     */
    project_id?: string;

    /**
     * Name of the project.
     */
    project_name?: string;

    /**
     * Short Id (8 character) of the deployment.
     */
    short_id?: string;

    source?: unknown;

    /**
     * List of past stages.
     */
    stages?: Array<Result.Stage>;

    /**
     * The live URL to view this deployment.
     */
    url?: string;
  }

  export namespace Result {
    /**
     * Info about what caused the deployment.
     */
    export interface DeploymentTrigger {
      /**
       * Additional info about the trigger.
       */
      metadata?: DeploymentTrigger.Metadata;

      /**
       * What caused the deployment.
       */
      type?: string;
    }

    export namespace DeploymentTrigger {
      /**
       * Additional info about the trigger.
       */
      export interface Metadata {
        /**
         * Where the trigger happened.
         */
        branch?: string;

        /**
         * Hash of the deployment trigger commit.
         */
        commit_hash?: string;

        /**
         * Message of the deployment trigger commit.
         */
        commit_message?: string;
      }
    }

    /**
     * The status of the deployment.
     */
    export interface Stage {
      /**
       * When the stage ended.
       */
      ended_on?: string | null;

      /**
       * The current build stage.
       */
      name?: string;

      /**
       * When the stage started.
       */
      started_on?: string | null;

      /**
       * State of the current stage.
       */
      status?: string;
    }
  }

  export interface ResultInfo {
    count?: unknown;

    page?: unknown;

    per_page?: unknown;

    total_count?: unknown;
  }
}

export type ProjectUpdateParams = unknown;

export interface ProjectPagesProjectCreateProjectParams {
  /**
   * Configs for the project build process.
   */
  build_config?: ProjectPagesProjectCreateProjectParams.BuildConfig;

  canonical_deployment?: ProjectPagesProjectCreateProjectParams.CanonicalDeployment;

  /**
   * Configs for deployments in a project.
   */
  deployment_configs?: ProjectPagesProjectCreateProjectParams.DeploymentConfigs;

  latest_deployment?: ProjectPagesProjectCreateProjectParams.LatestDeployment;

  /**
   * Name of the project.
   */
  name?: string;

  /**
   * Production branch of the project. Used to identify production deployments.
   */
  production_branch?: string;
}

export namespace ProjectPagesProjectCreateProjectParams {
  /**
   * Configs for the project build process.
   */
  export interface BuildConfig {
    /**
     * Enable build caching for the project.
     */
    build_caching?: boolean | null;

    /**
     * Command used to build project.
     */
    build_command?: string | null;

    /**
     * Output directory of the build.
     */
    destination_dir?: string | null;

    /**
     * Directory to run the command.
     */
    root_dir?: string | null;

    /**
     * The classifying tag for analytics.
     */
    web_analytics_tag?: string | null;

    /**
     * The auth token for analytics.
     */
    web_analytics_token?: string | null;
  }

  export interface CanonicalDeployment {}

  /**
   * Configs for deployments in a project.
   */
  export interface DeploymentConfigs {
    /**
     * Configs for preview deploys.
     */
    preview?: DeploymentConfigs.Preview;

    /**
     * Configs for production deploys.
     */
    production?: DeploymentConfigs.Production;
  }

  export namespace DeploymentConfigs {
    /**
     * Configs for preview deploys.
     */
    export interface Preview {
      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: Preview.AIBindings | null;

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: Preview.AnalyticsEngineDatasets | null;

      /**
       * Compatibility date used for Pages Functions.
       */
      compatibility_date?: string;

      /**
       * Compatibility flags used for Pages Functions.
       */
      compatibility_flags?: Array<unknown>;

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: Preview.D1Databases | null;

      /**
       * Durabble Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: Preview.DurableObjectNamespaces | null;

      /**
       * Environment variables for build configs.
       */
      env_vars?: Preview.EnvVars | null;

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: Preview.KvNamespaces;

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Preview.Placement | null;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: Preview.QueueProducers | null;

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: Preview.R2Buckets | null;

      /**
       * Services used for Pages Functions.
       */
      service_bindings?: Preview.ServiceBindings | null;
    }

    export namespace Preview {
      /**
       * Constellation bindings used for Pages Functions.
       */
      export interface AIBindings {
        /**
         * AI binding.
         */
        AI_BINDING?: AIBindings.AIBinding;
      }

      export namespace AIBindings {
        /**
         * AI binding.
         */
        export interface AIBinding {
          project_id?: unknown;
        }
      }

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Analytics Engine binding.
         */
        ANALYTICS_ENGINE_BINDING?: AnalyticsEngineDatasets.AnalyticsEngineBinding;
      }

      export namespace AnalyticsEngineDatasets {
        /**
         * Analytics Engine binding.
         */
        export interface AnalyticsEngineBinding {
          /**
           * Name of the dataset.
           */
          dataset?: string;
        }
      }

      /**
       * D1 databases used for Pages Functions.
       */
      export interface D1Databases {
        /**
         * D1 binding.
         */
        D1_BINDING?: D1Databases.D1Binding;
      }

      export namespace D1Databases {
        /**
         * D1 binding.
         */
        export interface D1Binding {
          /**
           * UUID of the D1 database.
           */
          id?: string;
        }
      }

      /**
       * Durabble Object namespaces used for Pages Functions.
       */
      export interface DurableObjectNamespaces {
        /**
         * Durabble Object binding.
         */
        DO_BINDING?: DurableObjectNamespaces.DoBinding;
      }

      export namespace DurableObjectNamespaces {
        /**
         * Durabble Object binding.
         */
        export interface DoBinding {
          /**
           * ID of the Durabble Object namespace.
           */
          namespace_id?: string;
        }
      }

      /**
       * Environment variables for build configs.
       */
      export interface EnvVars {
        /**
         * Environment variable.
         */
        ENVIRONMENT_VARIABLE?: EnvVars.EnvironmentVariable;
      }

      export namespace EnvVars {
        /**
         * Environment variable.
         */
        export interface EnvironmentVariable {
          /**
           * The type of environment variable (plain text or secret)
           */
          type?: 'plain_text' | 'secret_text';

          /**
           * Environment variable value.
           */
          value?: string;
        }
      }

      /**
       * KV namespaces used for Pages Functions.
       */
      export interface KvNamespaces {
        /**
         * KV binding.
         */
        KV_BINDING?: KvNamespaces.KvBinding;
      }

      export namespace KvNamespaces {
        /**
         * KV binding.
         */
        export interface KvBinding {
          /**
           * ID of the KV namespace.
           */
          namespace_id?: string;
        }
      }

      /**
       * Placement setting used for Pages Functions.
       */
      export interface Placement {
        /**
         * Placement mode.
         */
        mode?: string;
      }

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      export interface QueueProducers {
        /**
         * Queue Producer binding.
         */
        QUEUE_PRODUCER_BINDING?: QueueProducers.QueueProducerBinding;
      }

      export namespace QueueProducers {
        /**
         * Queue Producer binding.
         */
        export interface QueueProducerBinding {
          /**
           * Name of the Queue.
           */
          name?: string;
        }
      }

      /**
       * R2 buckets used for Pages Functions.
       */
      export interface R2Buckets {
        /**
         * R2 binding.
         */
        R2_BINDING?: R2Buckets.R2Binding;
      }

      export namespace R2Buckets {
        /**
         * R2 binding.
         */
        export interface R2Binding {
          /**
           * Name of the R2 bucket.
           */
          name?: string;
        }
      }

      /**
       * Services used for Pages Functions.
       */
      export interface ServiceBindings {
        /**
         * Service binding.
         */
        SERVICE_BINDING?: ServiceBindings.ServiceBinding;
      }

      export namespace ServiceBindings {
        /**
         * Service binding.
         */
        export interface ServiceBinding {
          /**
           * The Service environment.
           */
          environment?: string;

          /**
           * The Service name.
           */
          service?: string;
        }
      }
    }

    /**
     * Configs for production deploys.
     */
    export interface Production {
      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: Production.AIBindings | null;

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: Production.AnalyticsEngineDatasets | null;

      /**
       * Compatibility date used for Pages Functions.
       */
      compatibility_date?: string;

      /**
       * Compatibility flags used for Pages Functions.
       */
      compatibility_flags?: Array<unknown>;

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: Production.D1Databases | null;

      /**
       * Durabble Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: Production.DurableObjectNamespaces | null;

      /**
       * Environment variables for build configs.
       */
      env_vars?: Production.EnvVars | null;

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: Production.KvNamespaces;

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Production.Placement | null;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: Production.QueueProducers | null;

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: Production.R2Buckets | null;

      /**
       * Services used for Pages Functions.
       */
      service_bindings?: Production.ServiceBindings | null;
    }

    export namespace Production {
      /**
       * Constellation bindings used for Pages Functions.
       */
      export interface AIBindings {
        /**
         * AI binding.
         */
        AI_BINDING?: AIBindings.AIBinding;
      }

      export namespace AIBindings {
        /**
         * AI binding.
         */
        export interface AIBinding {
          project_id?: unknown;
        }
      }

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Analytics Engine binding.
         */
        ANALYTICS_ENGINE_BINDING?: AnalyticsEngineDatasets.AnalyticsEngineBinding;
      }

      export namespace AnalyticsEngineDatasets {
        /**
         * Analytics Engine binding.
         */
        export interface AnalyticsEngineBinding {
          /**
           * Name of the dataset.
           */
          dataset?: string;
        }
      }

      /**
       * D1 databases used for Pages Functions.
       */
      export interface D1Databases {
        /**
         * D1 binding.
         */
        D1_BINDING?: D1Databases.D1Binding;
      }

      export namespace D1Databases {
        /**
         * D1 binding.
         */
        export interface D1Binding {
          /**
           * UUID of the D1 database.
           */
          id?: string;
        }
      }

      /**
       * Durabble Object namespaces used for Pages Functions.
       */
      export interface DurableObjectNamespaces {
        /**
         * Durabble Object binding.
         */
        DO_BINDING?: DurableObjectNamespaces.DoBinding;
      }

      export namespace DurableObjectNamespaces {
        /**
         * Durabble Object binding.
         */
        export interface DoBinding {
          /**
           * ID of the Durabble Object namespace.
           */
          namespace_id?: string;
        }
      }

      /**
       * Environment variables for build configs.
       */
      export interface EnvVars {
        /**
         * Environment variable.
         */
        ENVIRONMENT_VARIABLE?: EnvVars.EnvironmentVariable;
      }

      export namespace EnvVars {
        /**
         * Environment variable.
         */
        export interface EnvironmentVariable {
          /**
           * The type of environment variable (plain text or secret)
           */
          type?: 'plain_text' | 'secret_text';

          /**
           * Environment variable value.
           */
          value?: string;
        }
      }

      /**
       * KV namespaces used for Pages Functions.
       */
      export interface KvNamespaces {
        /**
         * KV binding.
         */
        KV_BINDING?: KvNamespaces.KvBinding;
      }

      export namespace KvNamespaces {
        /**
         * KV binding.
         */
        export interface KvBinding {
          /**
           * ID of the KV namespace.
           */
          namespace_id?: string;
        }
      }

      /**
       * Placement setting used for Pages Functions.
       */
      export interface Placement {
        /**
         * Placement mode.
         */
        mode?: string;
      }

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      export interface QueueProducers {
        /**
         * Queue Producer binding.
         */
        QUEUE_PRODUCER_BINDING?: QueueProducers.QueueProducerBinding;
      }

      export namespace QueueProducers {
        /**
         * Queue Producer binding.
         */
        export interface QueueProducerBinding {
          /**
           * Name of the Queue.
           */
          name?: string;
        }
      }

      /**
       * R2 buckets used for Pages Functions.
       */
      export interface R2Buckets {
        /**
         * R2 binding.
         */
        R2_BINDING?: R2Buckets.R2Binding;
      }

      export namespace R2Buckets {
        /**
         * R2 binding.
         */
        export interface R2Binding {
          /**
           * Name of the R2 bucket.
           */
          name?: string;
        }
      }

      /**
       * Services used for Pages Functions.
       */
      export interface ServiceBindings {
        /**
         * Service binding.
         */
        SERVICE_BINDING?: ServiceBindings.ServiceBinding;
      }

      export namespace ServiceBindings {
        /**
         * Service binding.
         */
        export interface ServiceBinding {
          /**
           * The Service environment.
           */
          environment?: string;

          /**
           * The Service name.
           */
          service?: string;
        }
      }
    }
  }

  export interface LatestDeployment {}
}

export namespace Projects {
  export import ProjectRetrieveResponse = ProjectsAPI.ProjectRetrieveResponse;
  export import ProjectUpdateResponse = ProjectsAPI.ProjectUpdateResponse;
  export import ProjectDeleteResponse = ProjectsAPI.ProjectDeleteResponse;
  export import ProjectPagesProjectCreateProjectResponse = ProjectsAPI.ProjectPagesProjectCreateProjectResponse;
  export import ProjectPagesProjectGetProjectsResponse = ProjectsAPI.ProjectPagesProjectGetProjectsResponse;
  export import ProjectUpdateParams = ProjectsAPI.ProjectUpdateParams;
  export import ProjectPagesProjectCreateProjectParams = ProjectsAPI.ProjectPagesProjectCreateProjectParams;
  export import Deployments = DeploymentsAPI.Deployments;
  export import DeploymentRetrieveResponse = DeploymentsAPI.DeploymentRetrieveResponse;
  export import DeploymentDeleteResponse = DeploymentsAPI.DeploymentDeleteResponse;
  export import DeploymentPagesDeploymentCreateDeploymentResponse = DeploymentsAPI.DeploymentPagesDeploymentCreateDeploymentResponse;
  export import DeploymentPagesDeploymentGetDeploymentsResponse = DeploymentsAPI.DeploymentPagesDeploymentGetDeploymentsResponse;
  export import DeploymentPagesDeploymentCreateDeploymentParams = DeploymentsAPI.DeploymentPagesDeploymentCreateDeploymentParams;
  export import Domains = DomainsAPI.Domains;
  export import DomainRetrieveResponse = DomainsAPI.DomainRetrieveResponse;
  export import DomainUpdateResponse = DomainsAPI.DomainUpdateResponse;
  export import DomainDeleteResponse = DomainsAPI.DomainDeleteResponse;
  export import DomainPagesDomainsAddDomainResponse = DomainsAPI.DomainPagesDomainsAddDomainResponse;
  export import DomainPagesDomainsGetDomainsResponse = DomainsAPI.DomainPagesDomainsGetDomainsResponse;
  export import DomainPagesDomainsAddDomainParams = DomainsAPI.DomainPagesDomainsAddDomainParams;
}
