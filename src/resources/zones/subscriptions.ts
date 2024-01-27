// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SubscriptionsAPI from 'cloudflare/resources/zones/subscriptions';

export class Subscriptions extends APIResource {
  /**
   * Create a zone subscription, either plan or add-ons.
   */
  zoneSubscriptionCreateZoneSubscription(
    identifier: string,
    body: SubscriptionZoneSubscriptionCreateZoneSubscriptionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionZoneSubscriptionCreateZoneSubscriptionResponse> {
    return this._client.post(`/zones/${identifier}/subscription`, { body, ...options });
  }

  /**
   * Updates zone subscriptions, either plan or add-ons.
   */
  zoneSubscriptionUpdateZoneSubscription(
    identifier: string,
    body: SubscriptionZoneSubscriptionUpdateZoneSubscriptionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionZoneSubscriptionUpdateZoneSubscriptionResponse> {
    return this._client.put(`/zones/${identifier}/subscription`, { body, ...options });
  }

  /**
   * Lists zone subscription details.
   */
  zoneSubscriptionZoneSubscriptionDetails(
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionZoneSubscriptionZoneSubscriptionDetailsResponse> {
    return this._client.get(`/zones/${identifier}/subscription`, options);
  }
}

export interface SubscriptionZoneSubscriptionCreateZoneSubscriptionResponse {
  errors?: Array<SubscriptionZoneSubscriptionCreateZoneSubscriptionResponse.Error>;

  messages?: Array<SubscriptionZoneSubscriptionCreateZoneSubscriptionResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SubscriptionZoneSubscriptionCreateZoneSubscriptionResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface SubscriptionZoneSubscriptionUpdateZoneSubscriptionResponse {
  errors?: Array<SubscriptionZoneSubscriptionUpdateZoneSubscriptionResponse.Error>;

  messages?: Array<SubscriptionZoneSubscriptionUpdateZoneSubscriptionResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SubscriptionZoneSubscriptionUpdateZoneSubscriptionResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface SubscriptionZoneSubscriptionZoneSubscriptionDetailsResponse {
  errors?: Array<SubscriptionZoneSubscriptionZoneSubscriptionDetailsResponse.Error>;

  messages?: Array<SubscriptionZoneSubscriptionZoneSubscriptionDetailsResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SubscriptionZoneSubscriptionZoneSubscriptionDetailsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface SubscriptionZoneSubscriptionCreateZoneSubscriptionParams {
  app?: SubscriptionZoneSubscriptionCreateZoneSubscriptionParams.App;

  /**
   * The list of add-ons subscribed to.
   */
  component_values?: Array<SubscriptionZoneSubscriptionCreateZoneSubscriptionParams.ComponentValue>;

  /**
   * How often the subscription is renewed automatically.
   */
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

  /**
   * The rate plan applied to the subscription.
   */
  rate_plan?: SubscriptionZoneSubscriptionCreateZoneSubscriptionParams.RatePlan;

  /**
   * A simple zone object. May have null properties if not a zone subscription.
   */
  zone?: SubscriptionZoneSubscriptionCreateZoneSubscriptionParams.Zone;
}

export namespace SubscriptionZoneSubscriptionCreateZoneSubscriptionParams {
  export interface App {
    /**
     * app install id.
     */
    install_id?: string;
  }

  /**
   * A component value for a subscription.
   */
  export interface ComponentValue {
    /**
     * The default amount assigned.
     */
    default?: number;

    /**
     * The name of the component value.
     */
    name?: string;

    /**
     * The unit price for the component value.
     */
    price?: number;

    /**
     * The amount of the component value assigned.
     */
    value?: number;
  }

  /**
   * The rate plan applied to the subscription.
   */
  export interface RatePlan {
    /**
     * The ID of the rate plan.
     */
    id?: unknown;

    /**
     * The currency applied to the rate plan subscription.
     */
    currency?: string;

    /**
     * Whether this rate plan is managed externally from Cloudflare.
     */
    externally_managed?: boolean;

    /**
     * Whether a rate plan is enterprise-based (or newly adopted term contract).
     */
    is_contract?: boolean;

    /**
     * The full name of the rate plan.
     */
    public_name?: string;

    /**
     * The scope that this rate plan applies to.
     */
    scope?: string;

    /**
     * The list of sets this rate plan applies to.
     */
    sets?: Array<string>;
  }

  /**
   * A simple zone object. May have null properties if not a zone subscription.
   */
  export interface Zone {}
}

export interface SubscriptionZoneSubscriptionUpdateZoneSubscriptionParams {
  app?: SubscriptionZoneSubscriptionUpdateZoneSubscriptionParams.App;

  /**
   * The list of add-ons subscribed to.
   */
  component_values?: Array<SubscriptionZoneSubscriptionUpdateZoneSubscriptionParams.ComponentValue>;

  /**
   * How often the subscription is renewed automatically.
   */
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

  /**
   * The rate plan applied to the subscription.
   */
  rate_plan?: SubscriptionZoneSubscriptionUpdateZoneSubscriptionParams.RatePlan;

  /**
   * A simple zone object. May have null properties if not a zone subscription.
   */
  zone?: SubscriptionZoneSubscriptionUpdateZoneSubscriptionParams.Zone;
}

export namespace SubscriptionZoneSubscriptionUpdateZoneSubscriptionParams {
  export interface App {
    /**
     * app install id.
     */
    install_id?: string;
  }

  /**
   * A component value for a subscription.
   */
  export interface ComponentValue {
    /**
     * The default amount assigned.
     */
    default?: number;

    /**
     * The name of the component value.
     */
    name?: string;

    /**
     * The unit price for the component value.
     */
    price?: number;

    /**
     * The amount of the component value assigned.
     */
    value?: number;
  }

  /**
   * The rate plan applied to the subscription.
   */
  export interface RatePlan {
    /**
     * The ID of the rate plan.
     */
    id?: unknown;

    /**
     * The currency applied to the rate plan subscription.
     */
    currency?: string;

    /**
     * Whether this rate plan is managed externally from Cloudflare.
     */
    externally_managed?: boolean;

    /**
     * Whether a rate plan is enterprise-based (or newly adopted term contract).
     */
    is_contract?: boolean;

    /**
     * The full name of the rate plan.
     */
    public_name?: string;

    /**
     * The scope that this rate plan applies to.
     */
    scope?: string;

    /**
     * The list of sets this rate plan applies to.
     */
    sets?: Array<string>;
  }

  /**
   * A simple zone object. May have null properties if not a zone subscription.
   */
  export interface Zone {}
}

export namespace Subscriptions {
  export import SubscriptionZoneSubscriptionCreateZoneSubscriptionResponse = SubscriptionsAPI.SubscriptionZoneSubscriptionCreateZoneSubscriptionResponse;
  export import SubscriptionZoneSubscriptionUpdateZoneSubscriptionResponse = SubscriptionsAPI.SubscriptionZoneSubscriptionUpdateZoneSubscriptionResponse;
  export import SubscriptionZoneSubscriptionZoneSubscriptionDetailsResponse = SubscriptionsAPI.SubscriptionZoneSubscriptionZoneSubscriptionDetailsResponse;
  export import SubscriptionZoneSubscriptionCreateZoneSubscriptionParams = SubscriptionsAPI.SubscriptionZoneSubscriptionCreateZoneSubscriptionParams;
  export import SubscriptionZoneSubscriptionUpdateZoneSubscriptionParams = SubscriptionsAPI.SubscriptionZoneSubscriptionUpdateZoneSubscriptionParams;
}
