// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ProjectsAPI from 'cloudflare/resources/accounts/pages/projects/projects';

export class Pages extends APIResource {
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
}

export namespace Pages {
  export import Projects = ProjectsAPI.Projects;
  export import ProjectRetrieveResponse = ProjectsAPI.ProjectRetrieveResponse;
  export import ProjectUpdateResponse = ProjectsAPI.ProjectUpdateResponse;
  export import ProjectDeleteResponse = ProjectsAPI.ProjectDeleteResponse;
  export import ProjectPagesProjectCreateProjectResponse = ProjectsAPI.ProjectPagesProjectCreateProjectResponse;
  export import ProjectPagesProjectGetProjectsResponse = ProjectsAPI.ProjectPagesProjectGetProjectsResponse;
  export import ProjectUpdateParams = ProjectsAPI.ProjectUpdateParams;
  export import ProjectPagesProjectCreateProjectParams = ProjectsAPI.ProjectPagesProjectCreateProjectParams;
}
