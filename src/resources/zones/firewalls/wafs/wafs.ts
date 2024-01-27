// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as OverridesAPI from 'cloudflare/resources/zones/firewalls/wafs/overrides';
import * as PackagesAPI from 'cloudflare/resources/zones/firewalls/wafs/packages/packages';

export class Wafs extends APIResource {
  overrides: OverridesAPI.Overrides = new OverridesAPI.Overrides(this._client);
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);
}

export namespace Wafs {
  export import Overrides = OverridesAPI.Overrides;
  export import OverrideRetrieveResponse = OverridesAPI.OverrideRetrieveResponse;
  export import OverrideUpdateResponse = OverridesAPI.OverrideUpdateResponse;
  export import OverrideDeleteResponse = OverridesAPI.OverrideDeleteResponse;
  export import OverrideWafOverridesCreateAWafOverrideResponse = OverridesAPI.OverrideWafOverridesCreateAWafOverrideResponse;
  export import OverrideWafOverridesListWafOverridesResponse = OverridesAPI.OverrideWafOverridesListWafOverridesResponse;
  export import OverrideWafOverridesListWafOverridesResponsesPage = OverridesAPI.OverrideWafOverridesListWafOverridesResponsesPage;
  export import OverrideUpdateParams = OverridesAPI.OverrideUpdateParams;
  export import OverrideWafOverridesCreateAWafOverrideParams = OverridesAPI.OverrideWafOverridesCreateAWafOverrideParams;
  export import OverrideWafOverridesListWafOverridesParams = OverridesAPI.OverrideWafOverridesListWafOverridesParams;
  export import Packages = PackagesAPI.Packages;
  export import PackageRetrieveResponse = PackagesAPI.PackageRetrieveResponse;
  export import PackageUpdateResponse = PackagesAPI.PackageUpdateResponse;
  export import PackageWafPackagesListWafPackagesResponse = PackagesAPI.PackageWafPackagesListWafPackagesResponse;
  export import PackageUpdateParams = PackagesAPI.PackageUpdateParams;
  export import PackageWafPackagesListWafPackagesParams = PackagesAPI.PackageWafPackagesListWafPackagesParams;
}
