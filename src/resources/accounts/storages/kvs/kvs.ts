// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as NamespacesAPI from 'cloudflare/resources/accounts/storages/kvs/namespaces/namespaces';

export class Kvs extends APIResource {
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
}

export namespace Kvs {
  export import Namespaces = NamespacesAPI.Namespaces;
  export import NamespaceUpdateResponse = NamespacesAPI.NamespaceUpdateResponse;
  export import NamespaceListResponse = NamespacesAPI.NamespaceListResponse;
  export import NamespaceDeleteResponse = NamespacesAPI.NamespaceDeleteResponse;
  export import NamespaceWorkersKvNamespaceCreateANamespaceResponse = NamespacesAPI.NamespaceWorkersKvNamespaceCreateANamespaceResponse;
  export import NamespaceListResponsesPage = NamespacesAPI.NamespaceListResponsesPage;
  export import NamespaceUpdateParams = NamespacesAPI.NamespaceUpdateParams;
  export import NamespaceListParams = NamespacesAPI.NamespaceListParams;
  export import NamespaceWorkersKvNamespaceCreateANamespaceParams = NamespacesAPI.NamespaceWorkersKvNamespaceCreateANamespaceParams;
}
