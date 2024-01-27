// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AddressesAPI from 'cloudflare/resources/accounts/emails/routings/addresses';

export class Routings extends APIResource {
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);
}

export namespace Routings {
  export import Addresses = AddressesAPI.Addresses;
  export import AddressRetrieveResponse = AddressesAPI.AddressRetrieveResponse;
  export import AddressDeleteResponse = AddressesAPI.AddressDeleteResponse;
  export import AddressEmailRoutingDestinationAddressesCreateADestinationAddressResponse = AddressesAPI.AddressEmailRoutingDestinationAddressesCreateADestinationAddressResponse;
  export import AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse = AddressesAPI.AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse;
  export import AddressEmailRoutingDestinationAddressesListDestinationAddressesResponsesPage = AddressesAPI.AddressEmailRoutingDestinationAddressesListDestinationAddressesResponsesPage;
  export import AddressEmailRoutingDestinationAddressesCreateADestinationAddressParams = AddressesAPI.AddressEmailRoutingDestinationAddressesCreateADestinationAddressParams;
  export import AddressEmailRoutingDestinationAddressesListDestinationAddressesParams = AddressesAPI.AddressEmailRoutingDestinationAddressesListDestinationAddressesParams;
}
