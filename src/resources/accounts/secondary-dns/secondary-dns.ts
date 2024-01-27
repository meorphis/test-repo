// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ACLsAPI from 'cloudflare/resources/accounts/secondary-dns/acls';
import * as PeersAPI from 'cloudflare/resources/accounts/secondary-dns/peers';
import * as TsigsAPI from 'cloudflare/resources/accounts/secondary-dns/tsigs';

export class SecondaryDNS extends APIResource {
  acls: ACLsAPI.ACLs = new ACLsAPI.ACLs(this._client);
  peers: PeersAPI.Peers = new PeersAPI.Peers(this._client);
  tsigs: TsigsAPI.Tsigs = new TsigsAPI.Tsigs(this._client);
}

export namespace SecondaryDNS {
  export import ACLs = ACLsAPI.ACLs;
  export import ACLRetrieveResponse = ACLsAPI.ACLRetrieveResponse;
  export import ACLUpdateResponse = ACLsAPI.ACLUpdateResponse;
  export import ACLDeleteResponse = ACLsAPI.ACLDeleteResponse;
  export import ACLSecondaryDNSACLCreateACLResponse = ACLsAPI.ACLSecondaryDNSACLCreateACLResponse;
  export import ACLSecondaryDNSACLListACLsResponse = ACLsAPI.ACLSecondaryDNSACLListACLsResponse;
  export import ACLUpdateParams = ACLsAPI.ACLUpdateParams;
  export import ACLSecondaryDNSACLCreateACLParams = ACLsAPI.ACLSecondaryDNSACLCreateACLParams;
  export import Peers = PeersAPI.Peers;
  export import PeerRetrieveResponse = PeersAPI.PeerRetrieveResponse;
  export import PeerUpdateResponse = PeersAPI.PeerUpdateResponse;
  export import PeerDeleteResponse = PeersAPI.PeerDeleteResponse;
  export import PeerSecondaryDNSPeerCreatePeerResponse = PeersAPI.PeerSecondaryDNSPeerCreatePeerResponse;
  export import PeerSecondaryDNSPeerListPeersResponse = PeersAPI.PeerSecondaryDNSPeerListPeersResponse;
  export import PeerUpdateParams = PeersAPI.PeerUpdateParams;
  export import PeerSecondaryDNSPeerCreatePeerParams = PeersAPI.PeerSecondaryDNSPeerCreatePeerParams;
  export import Tsigs = TsigsAPI.Tsigs;
  export import TsigRetrieveResponse = TsigsAPI.TsigRetrieveResponse;
  export import TsigUpdateResponse = TsigsAPI.TsigUpdateResponse;
  export import TsigDeleteResponse = TsigsAPI.TsigDeleteResponse;
  export import TsigSecondaryDNSTsigCreateTsigResponse = TsigsAPI.TsigSecondaryDNSTsigCreateTsigResponse;
  export import TsigSecondaryDNSTsigListTsiGsResponse = TsigsAPI.TsigSecondaryDNSTsigListTsiGsResponse;
  export import TsigUpdateParams = TsigsAPI.TsigUpdateParams;
  export import TsigSecondaryDNSTsigCreateTsigParams = TsigsAPI.TsigSecondaryDNSTsigCreateTsigParams;
}
