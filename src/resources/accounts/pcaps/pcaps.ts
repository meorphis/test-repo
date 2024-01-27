// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PcapsAPI from 'cloudflare/resources/accounts/pcaps/pcaps';
import * as DownloadsAPI from 'cloudflare/resources/accounts/pcaps/downloads';
import * as OwnershipsAPI from 'cloudflare/resources/accounts/pcaps/ownerships/ownerships';

export class Pcaps extends APIResource {
  ownerships: OwnershipsAPI.Ownerships = new OwnershipsAPI.Ownerships(this._client);
  downloads: DownloadsAPI.Downloads = new DownloadsAPI.Downloads(this._client);

  /**
   * Get information for a PCAP request by id.
   */
  retrieve(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PcapRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/pcaps/${identifier}`, options);
  }

  /**
   * Create new PCAP request for account.
   */
  magicPcapCollectionCreatePcapRequest(
    accountIdentifier: string,
    body: PcapMagicPcapCollectionCreatePcapRequestParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PcapMagicPcapCollectionCreatePcapRequestResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/pcaps`, { body, ...options });
  }

  /**
   * Lists all packet capture requests for an account.
   */
  magicPcapCollectionListPacketCaptureRequests(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PcapMagicPcapCollectionListPacketCaptureRequestsResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/pcaps`, options);
  }
}

export interface PcapRetrieveResponse {
  errors?: Array<PcapRetrieveResponse.Error>;

  messages?: Array<PcapRetrieveResponse.Message>;

  result?: PcapRetrieveResponse.JF8Dd6b2PcapsResponseSimple | PcapRetrieveResponse.JF8Dd6b2PcapsResponseFull;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PcapRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface JF8Dd6b2PcapsResponseSimple {
    /**
     * The ID for the packet capture.
     */
    id?: string;

    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    filter_v1?: JF8Dd6b2PcapsResponseSimple.FilterV1;

    /**
     * The status of the packet capture request.
     */
    status?:
      | 'unknown'
      | 'success'
      | 'pending'
      | 'running'
      | 'conversion_pending'
      | 'conversion_running'
      | 'complete'
      | 'failed';

    /**
     * The RFC 3339 timestamp when the packet capture was created.
     */
    submitted?: string;

    /**
     * The system used to collect packet captures.
     */
    system?: 'magic-transit';

    /**
     * The packet capture duration in seconds.
     */
    time_limit?: number;

    /**
     * The type of packet capture. `Simple` captures sampled packets, and `full`
     * captures entire payloads and non-sampled packets.
     */
    type?: 'simple' | 'full';
  }

  export namespace JF8Dd6b2PcapsResponseSimple {
    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    export interface FilterV1 {
      /**
       * The destination IP address of the packet.
       */
      destination_address?: string;

      /**
       * The destination port of the packet.
       */
      destination_port?: number;

      /**
       * The protocol number of the packet.
       */
      protocol?: number;

      /**
       * The source IP address of the packet.
       */
      source_address?: string;

      /**
       * The source port of the packet.
       */
      source_port?: number;
    }
  }

  export interface JF8Dd6b2PcapsResponseFull {
    /**
     * The ID for the packet capture.
     */
    id?: string;

    /**
     * The maximum number of bytes to capture. This field only applies to `full` packet
     * captures.
     */
    byte_limit?: number;

    /**
     * The name of the data center used for the packet capture. This can be a specific
     * colo (ord02) or a multi-colo name (ORD). This field only applies to `full`
     * packet captures.
     */
    colo_name?: string;

    /**
     * The full URI for the bucket. This field only applies to `full` packet captures.
     */
    destination_conf?: string;

    /**
     * An error message that describes why the packet capture failed. This field only
     * applies to `full` packet captures.
     */
    error_message?: string;

    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    filter_v1?: JF8Dd6b2PcapsResponseFull.FilterV1;

    /**
     * The status of the packet capture request.
     */
    status?:
      | 'unknown'
      | 'success'
      | 'pending'
      | 'running'
      | 'conversion_pending'
      | 'conversion_running'
      | 'complete'
      | 'failed';

    /**
     * The RFC 3339 timestamp when the packet capture was created.
     */
    submitted?: string;

    /**
     * The system used to collect packet captures.
     */
    system?: 'magic-transit';

    /**
     * The packet capture duration in seconds.
     */
    time_limit?: number;

    /**
     * The type of packet capture. `Simple` captures sampled packets, and `full`
     * captures entire payloads and non-sampled packets.
     */
    type?: 'simple' | 'full';
  }

  export namespace JF8Dd6b2PcapsResponseFull {
    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    export interface FilterV1 {
      /**
       * The destination IP address of the packet.
       */
      destination_address?: string;

      /**
       * The destination port of the packet.
       */
      destination_port?: number;

      /**
       * The protocol number of the packet.
       */
      protocol?: number;

      /**
       * The source IP address of the packet.
       */
      source_address?: string;

      /**
       * The source port of the packet.
       */
      source_port?: number;
    }
  }
}

export interface PcapMagicPcapCollectionCreatePcapRequestResponse {
  errors?: Array<PcapMagicPcapCollectionCreatePcapRequestResponse.Error>;

  messages?: Array<PcapMagicPcapCollectionCreatePcapRequestResponse.Message>;

  result?:
    | PcapMagicPcapCollectionCreatePcapRequestResponse.JF8Dd6b2PcapsResponseSimple
    | PcapMagicPcapCollectionCreatePcapRequestResponse.JF8Dd6b2PcapsResponseFull;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PcapMagicPcapCollectionCreatePcapRequestResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface JF8Dd6b2PcapsResponseSimple {
    /**
     * The ID for the packet capture.
     */
    id?: string;

    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    filter_v1?: JF8Dd6b2PcapsResponseSimple.FilterV1;

    /**
     * The status of the packet capture request.
     */
    status?:
      | 'unknown'
      | 'success'
      | 'pending'
      | 'running'
      | 'conversion_pending'
      | 'conversion_running'
      | 'complete'
      | 'failed';

    /**
     * The RFC 3339 timestamp when the packet capture was created.
     */
    submitted?: string;

    /**
     * The system used to collect packet captures.
     */
    system?: 'magic-transit';

    /**
     * The packet capture duration in seconds.
     */
    time_limit?: number;

    /**
     * The type of packet capture. `Simple` captures sampled packets, and `full`
     * captures entire payloads and non-sampled packets.
     */
    type?: 'simple' | 'full';
  }

  export namespace JF8Dd6b2PcapsResponseSimple {
    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    export interface FilterV1 {
      /**
       * The destination IP address of the packet.
       */
      destination_address?: string;

      /**
       * The destination port of the packet.
       */
      destination_port?: number;

      /**
       * The protocol number of the packet.
       */
      protocol?: number;

      /**
       * The source IP address of the packet.
       */
      source_address?: string;

      /**
       * The source port of the packet.
       */
      source_port?: number;
    }
  }

  export interface JF8Dd6b2PcapsResponseFull {
    /**
     * The ID for the packet capture.
     */
    id?: string;

    /**
     * The maximum number of bytes to capture. This field only applies to `full` packet
     * captures.
     */
    byte_limit?: number;

    /**
     * The name of the data center used for the packet capture. This can be a specific
     * colo (ord02) or a multi-colo name (ORD). This field only applies to `full`
     * packet captures.
     */
    colo_name?: string;

    /**
     * The full URI for the bucket. This field only applies to `full` packet captures.
     */
    destination_conf?: string;

    /**
     * An error message that describes why the packet capture failed. This field only
     * applies to `full` packet captures.
     */
    error_message?: string;

    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    filter_v1?: JF8Dd6b2PcapsResponseFull.FilterV1;

    /**
     * The status of the packet capture request.
     */
    status?:
      | 'unknown'
      | 'success'
      | 'pending'
      | 'running'
      | 'conversion_pending'
      | 'conversion_running'
      | 'complete'
      | 'failed';

    /**
     * The RFC 3339 timestamp when the packet capture was created.
     */
    submitted?: string;

    /**
     * The system used to collect packet captures.
     */
    system?: 'magic-transit';

    /**
     * The packet capture duration in seconds.
     */
    time_limit?: number;

    /**
     * The type of packet capture. `Simple` captures sampled packets, and `full`
     * captures entire payloads and non-sampled packets.
     */
    type?: 'simple' | 'full';
  }

  export namespace JF8Dd6b2PcapsResponseFull {
    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    export interface FilterV1 {
      /**
       * The destination IP address of the packet.
       */
      destination_address?: string;

      /**
       * The destination port of the packet.
       */
      destination_port?: number;

      /**
       * The protocol number of the packet.
       */
      protocol?: number;

      /**
       * The source IP address of the packet.
       */
      source_address?: string;

      /**
       * The source port of the packet.
       */
      source_port?: number;
    }
  }
}

export interface PcapMagicPcapCollectionListPacketCaptureRequestsResponse {
  errors?: Array<PcapMagicPcapCollectionListPacketCaptureRequestsResponse.Error>;

  messages?: Array<PcapMagicPcapCollectionListPacketCaptureRequestsResponse.Message>;

  result?: Array<
    | PcapMagicPcapCollectionListPacketCaptureRequestsResponse.JF8Dd6b2PcapsResponseSimple
    | PcapMagicPcapCollectionListPacketCaptureRequestsResponse.JF8Dd6b2PcapsResponseFull
  >;

  result_info?: PcapMagicPcapCollectionListPacketCaptureRequestsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PcapMagicPcapCollectionListPacketCaptureRequestsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface JF8Dd6b2PcapsResponseSimple {
    /**
     * The ID for the packet capture.
     */
    id?: string;

    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    filter_v1?: JF8Dd6b2PcapsResponseSimple.FilterV1;

    /**
     * The status of the packet capture request.
     */
    status?:
      | 'unknown'
      | 'success'
      | 'pending'
      | 'running'
      | 'conversion_pending'
      | 'conversion_running'
      | 'complete'
      | 'failed';

    /**
     * The RFC 3339 timestamp when the packet capture was created.
     */
    submitted?: string;

    /**
     * The system used to collect packet captures.
     */
    system?: 'magic-transit';

    /**
     * The packet capture duration in seconds.
     */
    time_limit?: number;

    /**
     * The type of packet capture. `Simple` captures sampled packets, and `full`
     * captures entire payloads and non-sampled packets.
     */
    type?: 'simple' | 'full';
  }

  export namespace JF8Dd6b2PcapsResponseSimple {
    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    export interface FilterV1 {
      /**
       * The destination IP address of the packet.
       */
      destination_address?: string;

      /**
       * The destination port of the packet.
       */
      destination_port?: number;

      /**
       * The protocol number of the packet.
       */
      protocol?: number;

      /**
       * The source IP address of the packet.
       */
      source_address?: string;

      /**
       * The source port of the packet.
       */
      source_port?: number;
    }
  }

  export interface JF8Dd6b2PcapsResponseFull {
    /**
     * The ID for the packet capture.
     */
    id?: string;

    /**
     * The maximum number of bytes to capture. This field only applies to `full` packet
     * captures.
     */
    byte_limit?: number;

    /**
     * The name of the data center used for the packet capture. This can be a specific
     * colo (ord02) or a multi-colo name (ORD). This field only applies to `full`
     * packet captures.
     */
    colo_name?: string;

    /**
     * The full URI for the bucket. This field only applies to `full` packet captures.
     */
    destination_conf?: string;

    /**
     * An error message that describes why the packet capture failed. This field only
     * applies to `full` packet captures.
     */
    error_message?: string;

    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    filter_v1?: JF8Dd6b2PcapsResponseFull.FilterV1;

    /**
     * The status of the packet capture request.
     */
    status?:
      | 'unknown'
      | 'success'
      | 'pending'
      | 'running'
      | 'conversion_pending'
      | 'conversion_running'
      | 'complete'
      | 'failed';

    /**
     * The RFC 3339 timestamp when the packet capture was created.
     */
    submitted?: string;

    /**
     * The system used to collect packet captures.
     */
    system?: 'magic-transit';

    /**
     * The packet capture duration in seconds.
     */
    time_limit?: number;

    /**
     * The type of packet capture. `Simple` captures sampled packets, and `full`
     * captures entire payloads and non-sampled packets.
     */
    type?: 'simple' | 'full';
  }

  export namespace JF8Dd6b2PcapsResponseFull {
    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    export interface FilterV1 {
      /**
       * The destination IP address of the packet.
       */
      destination_address?: string;

      /**
       * The destination port of the packet.
       */
      destination_port?: number;

      /**
       * The protocol number of the packet.
       */
      protocol?: number;

      /**
       * The source IP address of the packet.
       */
      source_address?: string;

      /**
       * The source port of the packet.
       */
      source_port?: number;
    }
  }

  export interface ResultInfo {
    /**
     * Total number of results for the requested service
     */
    count?: number;

    /**
     * Current page within paginated list of results
     */
    page?: number;

    /**
     * Number of results per page of results
     */
    per_page?: number;

    /**
     * Total results available without any search parameters
     */
    total_count?: number;
  }
}

export type PcapMagicPcapCollectionCreatePcapRequestParams =
  | PcapMagicPcapCollectionCreatePcapRequestParams.JF8Dd6b2PcapsRequestSimple
  | PcapMagicPcapCollectionCreatePcapRequestParams.JF8Dd6b2PcapsRequestFull;

export namespace PcapMagicPcapCollectionCreatePcapRequestParams {
  export interface JF8Dd6b2PcapsRequestSimple {
    /**
     * The limit of packets contained in a packet capture.
     */
    packet_limit: number;

    /**
     * The system used to collect packet captures.
     */
    system: 'magic-transit';

    /**
     * The packet capture duration in seconds.
     */
    time_limit: number;

    /**
     * The type of packet capture. `Simple` captures sampled packets, and `full`
     * captures entire payloads and non-sampled packets.
     */
    type: 'simple' | 'full';

    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    filter_v1?: PcapMagicPcapCollectionCreatePcapRequestParams.JF8Dd6b2PcapsRequestSimple.FilterV1;
  }

  export namespace JF8Dd6b2PcapsRequestSimple {
    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    export interface FilterV1 {
      /**
       * The destination IP address of the packet.
       */
      destination_address?: string;

      /**
       * The destination port of the packet.
       */
      destination_port?: number;

      /**
       * The protocol number of the packet.
       */
      protocol?: number;

      /**
       * The source IP address of the packet.
       */
      source_address?: string;

      /**
       * The source port of the packet.
       */
      source_port?: number;
    }
  }

  export interface JF8Dd6b2PcapsRequestFull {
    /**
     * The name of the data center used for the packet capture. This can be a specific
     * colo (ord02) or a multi-colo name (ORD). This field only applies to `full`
     * packet captures.
     */
    colo_name: string;

    /**
     * The full URI for the bucket. This field only applies to `full` packet captures.
     */
    destination_conf: string;

    /**
     * The system used to collect packet captures.
     */
    system: 'magic-transit';

    /**
     * The packet capture duration in seconds.
     */
    time_limit: number;

    /**
     * The type of packet capture. `Simple` captures sampled packets, and `full`
     * captures entire payloads and non-sampled packets.
     */
    type: 'simple' | 'full';

    /**
     * The maximum number of bytes to capture. This field only applies to `full` packet
     * captures.
     */
    byte_limit?: number;

    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    filter_v1?: PcapMagicPcapCollectionCreatePcapRequestParams.JF8Dd6b2PcapsRequestFull.FilterV1;

    /**
     * The limit of packets contained in a packet capture.
     */
    packet_limit?: number;
  }

  export namespace JF8Dd6b2PcapsRequestFull {
    /**
     * The packet capture filter. When this field is empty, all packets are captured.
     */
    export interface FilterV1 {
      /**
       * The destination IP address of the packet.
       */
      destination_address?: string;

      /**
       * The destination port of the packet.
       */
      destination_port?: number;

      /**
       * The protocol number of the packet.
       */
      protocol?: number;

      /**
       * The source IP address of the packet.
       */
      source_address?: string;

      /**
       * The source port of the packet.
       */
      source_port?: number;
    }
  }
}

export namespace Pcaps {
  export import PcapRetrieveResponse = PcapsAPI.PcapRetrieveResponse;
  export import PcapMagicPcapCollectionCreatePcapRequestResponse = PcapsAPI.PcapMagicPcapCollectionCreatePcapRequestResponse;
  export import PcapMagicPcapCollectionListPacketCaptureRequestsResponse = PcapsAPI.PcapMagicPcapCollectionListPacketCaptureRequestsResponse;
  export import PcapMagicPcapCollectionCreatePcapRequestParams = PcapsAPI.PcapMagicPcapCollectionCreatePcapRequestParams;
  export import Ownerships = OwnershipsAPI.Ownerships;
  export import OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesResponse = OwnershipsAPI.OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesResponse;
  export import OwnershipMagicPcapCollectionListPcaPsBucketOwnershipResponse = OwnershipsAPI.OwnershipMagicPcapCollectionListPcaPsBucketOwnershipResponse;
  export import OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesParams = OwnershipsAPI.OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesParams;
  export import Downloads = DownloadsAPI.Downloads;
}
