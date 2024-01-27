// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DeploymentsAPI from 'cloudflare/resources/accounts/pages/projects/deployments/deployments';
import * as RetriesAPI from 'cloudflare/resources/accounts/pages/projects/deployments/retries';
import * as RollbacksAPI from 'cloudflare/resources/accounts/pages/projects/deployments/rollbacks';
import * as HistoriesAPI from 'cloudflare/resources/accounts/pages/projects/deployments/histories/histories';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class Deployments extends APIResource {
  histories: HistoriesAPI.Histories = new HistoriesAPI.Histories(this._client);
  retries: RetriesAPI.Retries = new RetriesAPI.Retries(this._client);
  rollbacks: RollbacksAPI.Rollbacks = new RollbacksAPI.Rollbacks(this._client);

  /**
   * Fetch information about a deployment.
   */
  retrieve(
    accountIdentifier: string,
    projectName: string,
    deploymentIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentRetrieveResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/pages/projects/${projectName}/deployments/${deploymentIdentifier}`,
      options,
    );
  }

  /**
   * Delete a deployment.
   */
  delete(
    accountIdentifier: string,
    projectName: string,
    deploymentIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.delete(
      `/accounts/${accountIdentifier}/pages/projects/${projectName}/deployments/${deploymentIdentifier}`,
      options,
    );
  }

  /**
   * Start a new deployment from production. The repository and account must have
   * already been authorized on the Cloudflare Pages dashboard.
   */
  pagesDeploymentCreateDeployment(
    accountIdentifier: string,
    projectName: string,
    body: DeploymentPagesDeploymentCreateDeploymentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentPagesDeploymentCreateDeploymentResponse> {
    return this._client.post(
      `/accounts/${accountIdentifier}/pages/projects/${projectName}/deployments`,
      multipartFormRequestOptions({ body, ...options }),
    );
  }

  /**
   * Fetch a list of project deployments.
   */
  pagesDeploymentGetDeployments(
    accountIdentifier: string,
    projectName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentPagesDeploymentGetDeploymentsResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/pages/projects/${projectName}/deployments`,
      options,
    );
  }
}

export interface DeploymentRetrieveResponse {
  errors?: Array<DeploymentRetrieveResponse.Error>;

  messages?: Array<DeploymentRetrieveResponse.Message>;

  result?: DeploymentRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DeploymentRetrieveResponse {
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
}

export type DeploymentDeleteResponse = unknown;

export interface DeploymentPagesDeploymentCreateDeploymentResponse {
  errors?: Array<DeploymentPagesDeploymentCreateDeploymentResponse.Error>;

  messages?: Array<DeploymentPagesDeploymentCreateDeploymentResponse.Message>;

  result?: DeploymentPagesDeploymentCreateDeploymentResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DeploymentPagesDeploymentCreateDeploymentResponse {
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
}

export interface DeploymentPagesDeploymentGetDeploymentsResponse {
  errors?: Array<DeploymentPagesDeploymentGetDeploymentsResponse.Error>;

  messages?: Array<DeploymentPagesDeploymentGetDeploymentsResponse.Message>;

  result?: Array<DeploymentPagesDeploymentGetDeploymentsResponse.Result>;

  result_info?: DeploymentPagesDeploymentGetDeploymentsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DeploymentPagesDeploymentGetDeploymentsResponse {
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

export interface DeploymentPagesDeploymentCreateDeploymentParams {
  /**
   * The branch to build the new deployment from. The `HEAD` of the branch will be
   * used. If omitted, the production branch will be used by default.
   */
  branch?: string;
}

export namespace Deployments {
  export import DeploymentRetrieveResponse = DeploymentsAPI.DeploymentRetrieveResponse;
  export import DeploymentDeleteResponse = DeploymentsAPI.DeploymentDeleteResponse;
  export import DeploymentPagesDeploymentCreateDeploymentResponse = DeploymentsAPI.DeploymentPagesDeploymentCreateDeploymentResponse;
  export import DeploymentPagesDeploymentGetDeploymentsResponse = DeploymentsAPI.DeploymentPagesDeploymentGetDeploymentsResponse;
  export import DeploymentPagesDeploymentCreateDeploymentParams = DeploymentsAPI.DeploymentPagesDeploymentCreateDeploymentParams;
  export import Histories = HistoriesAPI.Histories;
  export import Retries = RetriesAPI.Retries;
  export import RetryPagesDeploymentRetryDeploymentResponse = RetriesAPI.RetryPagesDeploymentRetryDeploymentResponse;
  export import Rollbacks = RollbacksAPI.Rollbacks;
  export import RollbackPagesDeploymentRollbackDeploymentResponse = RollbacksAPI.RollbackPagesDeploymentRollbackDeploymentResponse;
}
