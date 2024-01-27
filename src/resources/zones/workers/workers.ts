// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as FiltersAPI from 'cloudflare/resources/zones/workers/filters';
import * as RoutesAPI from 'cloudflare/resources/zones/workers/routes';
import * as ScriptsAPI from 'cloudflare/resources/zones/workers/scripts/scripts';

export class Workers extends APIResource {
  scripts: ScriptsAPI.Scripts = new ScriptsAPI.Scripts(this._client);
  filters: FiltersAPI.Filters = new FiltersAPI.Filters(this._client);
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
}

export namespace Workers {
  export import Scripts = ScriptsAPI.Scripts;
  export import ScriptWorkerScriptDeprecatedUploadWorkerResponse = ScriptsAPI.ScriptWorkerScriptDeprecatedUploadWorkerResponse;
  export import ScriptWorkerScriptDeprecatedUploadWorkerParams = ScriptsAPI.ScriptWorkerScriptDeprecatedUploadWorkerParams;
  export import Filters = FiltersAPI.Filters;
  export import FilterUpdateResponse = FiltersAPI.FilterUpdateResponse;
  export import FilterDeleteResponse = FiltersAPI.FilterDeleteResponse;
  export import FilterWorkerFiltersDeprecatedCreateFilterResponse = FiltersAPI.FilterWorkerFiltersDeprecatedCreateFilterResponse;
  export import FilterWorkerFiltersDeprecatedListFiltersResponse = FiltersAPI.FilterWorkerFiltersDeprecatedListFiltersResponse;
  export import FilterUpdateParams = FiltersAPI.FilterUpdateParams;
  export import FilterWorkerFiltersDeprecatedCreateFilterParams = FiltersAPI.FilterWorkerFiltersDeprecatedCreateFilterParams;
  export import Routes = RoutesAPI.Routes;
  export import RouteRetrieveResponse = RoutesAPI.RouteRetrieveResponse;
  export import RouteUpdateResponse = RoutesAPI.RouteUpdateResponse;
  export import RouteDeleteResponse = RoutesAPI.RouteDeleteResponse;
  export import RouteWorkerRoutesCreateRouteResponse = RoutesAPI.RouteWorkerRoutesCreateRouteResponse;
  export import RouteWorkerRoutesListRoutesResponse = RoutesAPI.RouteWorkerRoutesListRoutesResponse;
  export import RouteUpdateParams = RoutesAPI.RouteUpdateParams;
  export import RouteWorkerRoutesCreateRouteParams = RoutesAPI.RouteWorkerRoutesCreateRouteParams;
}
