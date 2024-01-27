// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as LogsAPI from 'cloudflare/resources/accounts/pages/projects/deployments/histories/logs';

export class Logs extends APIResource {
  /**
   * Fetch deployment logs for a project.
   */
  pagesDeploymentGetDeploymentLogs(
    accountIdentifier: string,
    projectName: string,
    deploymentIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LogPagesDeploymentGetDeploymentLogsResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/pages/projects/${projectName}/deployments/${deploymentIdentifier}/history/logs`,
      options,
    );
  }
}

export interface LogPagesDeploymentGetDeploymentLogsResponse {
  errors?: Array<LogPagesDeploymentGetDeploymentLogsResponse.Error>;

  messages?: Array<LogPagesDeploymentGetDeploymentLogsResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace LogPagesDeploymentGetDeploymentLogsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export namespace Logs {
  export import LogPagesDeploymentGetDeploymentLogsResponse = LogsAPI.LogPagesDeploymentGetDeploymentLogsResponse;
}
