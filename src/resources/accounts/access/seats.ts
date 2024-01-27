// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SeatsAPI from 'cloudflare/resources/accounts/access/seats';

export class Seats extends APIResource {
  /**
   * Removes a user from a Zero Trust seat when both `access_seat` and `gateway_seat`
   * are set to false.
   */
  zeroTrustSeatsUpdateAUserSeat(
    identifier: string,
    body: SeatZeroTrustSeatsUpdateAUserSeatParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SeatZeroTrustSeatsUpdateAUserSeatResponse> {
    return this._client.patch(`/accounts/${identifier}/access/seats`, { body, ...options });
  }
}

export interface SeatZeroTrustSeatsUpdateAUserSeatResponse {
  errors?: Array<SeatZeroTrustSeatsUpdateAUserSeatResponse.Error>;

  messages?: Array<SeatZeroTrustSeatsUpdateAUserSeatResponse.Message>;

  result?: Array<SeatZeroTrustSeatsUpdateAUserSeatResponse.Result>;

  result_info?: SeatZeroTrustSeatsUpdateAUserSeatResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SeatZeroTrustSeatsUpdateAUserSeatResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * True if the seat is part of Access.
     */
    access_seat?: boolean;

    created_at?: string;

    /**
     * True if the seat is part of Gateway.
     */
    gateway_seat?: boolean;

    /**
     * Identifier
     */
    seat_uid?: string;

    updated_at?: string;
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

export type SeatZeroTrustSeatsUpdateAUserSeatParams = Array<SeatZeroTrustSeatsUpdateAUserSeatParams.Body>;

export namespace SeatZeroTrustSeatsUpdateAUserSeatParams {
  export interface Body {
    /**
     * True if the seat is part of Access.
     */
    access_seat: boolean;

    /**
     * True if the seat is part of Gateway.
     */
    gateway_seat: boolean;
  }
}

export namespace Seats {
  export import SeatZeroTrustSeatsUpdateAUserSeatResponse = SeatsAPI.SeatZeroTrustSeatsUpdateAUserSeatResponse;
  export import SeatZeroTrustSeatsUpdateAUserSeatParams = SeatsAPI.SeatZeroTrustSeatsUpdateAUserSeatParams;
}
