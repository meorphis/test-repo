// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RollbacksAPI from 'cloudflare/resources/accounts/pages/projects/deployments/rollbacks';

export class Rollbacks extends APIResource {
  /**
   * Rollback the production deployment to a previous deployment. You can only
   * rollback to succesful builds on production.
   */
  pagesDeploymentRollbackDeployment(
    accountIdentifier: string,
    projectName: string,
    deploymentIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RollbackPagesDeploymentRollbackDeploymentResponse> {
    return this._client.post(
      `/accounts/${accountIdentifier}/pages/projects/${projectName}/deployments/${deploymentIdentifier}/rollback`,
      options,
    );
  }
}

export interface RollbackPagesDeploymentRollbackDeploymentResponse {
  errors?: Array<RollbackPagesDeploymentRollbackDeploymentResponse.Error>;

  messages?: Array<RollbackPagesDeploymentRollbackDeploymentResponse.Message>;

  result?: RollbackPagesDeploymentRollbackDeploymentResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RollbackPagesDeploymentRollbackDeploymentResponse {
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

export namespace Rollbacks {
  export import RollbackPagesDeploymentRollbackDeploymentResponse = RollbacksAPI.RollbackPagesDeploymentRollbackDeploymentResponse;
}
