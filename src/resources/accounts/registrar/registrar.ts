// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as DomainsAPI from 'cloudflare/resources/accounts/registrar/domains';

export class Registrar extends APIResource {
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
}

export namespace Registrar {
  export import Domains = DomainsAPI.Domains;
  export import RegistrarAPIDomainResponseCollection = DomainsAPI.RegistrarAPIDomainResponseCollection;
  export import DomainRetrieveResponse = DomainsAPI.DomainRetrieveResponse;
  export import DomainUpdateResponse = DomainsAPI.DomainUpdateResponse;
  export import DomainUpdateParams = DomainsAPI.DomainUpdateParams;
}
