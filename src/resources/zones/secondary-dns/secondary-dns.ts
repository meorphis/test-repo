// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ForceAxfrsAPI from 'cloudflare/resources/zones/secondary-dns/force-axfrs';
import * as IncomingsAPI from 'cloudflare/resources/zones/secondary-dns/incomings';
import * as OutgoingsAPI from 'cloudflare/resources/zones/secondary-dns/outgoings/outgoings';

export class SecondaryDNS extends APIResource {
  forceAxfrs: ForceAxfrsAPI.ForceAxfrs = new ForceAxfrsAPI.ForceAxfrs(this._client);
  incomings: IncomingsAPI.Incomings = new IncomingsAPI.Incomings(this._client);
  outgoings: OutgoingsAPI.Outgoings = new OutgoingsAPI.Outgoings(this._client);
}

export namespace SecondaryDNS {
  export import ForceAxfrs = ForceAxfrsAPI.ForceAxfrs;
  export import ForceAxfrSecondaryDNSSecondaryZoneForceAxfrResponse = ForceAxfrsAPI.ForceAxfrSecondaryDNSSecondaryZoneForceAxfrResponse;
  export import Incomings = IncomingsAPI.Incomings;
  export import IncomingDeleteResponse = IncomingsAPI.IncomingDeleteResponse;
  export import IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationResponse = IncomingsAPI.IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationResponse;
  export import IncomingSecondaryDNSSecondaryZoneSecondaryZoneConfigurationDetailsResponse = IncomingsAPI.IncomingSecondaryDNSSecondaryZoneSecondaryZoneConfigurationDetailsResponse;
  export import IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationResponse = IncomingsAPI.IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationResponse;
  export import IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationParams = IncomingsAPI.IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationParams;
  export import IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationParams = IncomingsAPI.IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationParams;
  export import Outgoings = OutgoingsAPI.Outgoings;
  export import OutgoingDeleteResponse = OutgoingsAPI.OutgoingDeleteResponse;
  export import OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationResponse = OutgoingsAPI.OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationResponse;
  export import OutgoingSecondaryDNSPrimaryZonePrimaryZoneConfigurationDetailsResponse = OutgoingsAPI.OutgoingSecondaryDNSPrimaryZonePrimaryZoneConfigurationDetailsResponse;
  export import OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationResponse = OutgoingsAPI.OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationResponse;
  export import OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationParams = OutgoingsAPI.OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationParams;
  export import OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationParams = OutgoingsAPI.OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationParams;
}
