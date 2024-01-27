// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as HostnameAssociationsAPI from 'cloudflare/resources/zones/certificate-authorities/hostname-associations';

export class CertificateAuthorities extends APIResource {
  hostnameAssociations: HostnameAssociationsAPI.HostnameAssociations =
    new HostnameAssociationsAPI.HostnameAssociations(this._client);
}

export namespace CertificateAuthorities {
  export import HostnameAssociations = HostnameAssociationsAPI.HostnameAssociations;
  export import HostnameAssociationClientCertificateForAZoneListHostnameAssociationsResponse = HostnameAssociationsAPI.HostnameAssociationClientCertificateForAZoneListHostnameAssociationsResponse;
  export import HostnameAssociationClientCertificateForAZonePutHostnameAssociationsResponse = HostnameAssociationsAPI.HostnameAssociationClientCertificateForAZonePutHostnameAssociationsResponse;
  export import HostnameAssociationClientCertificateForAZoneListHostnameAssociationsParams = HostnameAssociationsAPI.HostnameAssociationClientCertificateForAZoneListHostnameAssociationsParams;
  export import HostnameAssociationClientCertificateForAZonePutHostnameAssociationsParams = HostnameAssociationsAPI.HostnameAssociationClientCertificateForAZonePutHostnameAssociationsParams;
}
