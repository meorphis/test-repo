// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SubscriptionsAPI from 'cloudflare/resources/accounts/subscriptions';

export class Subscriptions extends APIResource {
  /**
   * Updates an account subscription.
   */
  update(
    accountIdentifier: string,
    subscriptionIdentifier: string,
    body: SubscriptionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionUpdateResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/subscriptions/${subscriptionIdentifier}`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes an account's subscription.
   */
  delete(
    accountIdentifier: string,
    subscriptionIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionDeleteResponse> {
    return this._client.delete(
      `/accounts/${accountIdentifier}/subscriptions/${subscriptionIdentifier}`,
      options,
    );
  }

  /**
   * Creates an account subscription.
   */
  accountSubscriptionsCreateSubscription(
    accountIdentifier: string,
    body: SubscriptionAccountSubscriptionsCreateSubscriptionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionAccountSubscriptionsCreateSubscriptionResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/subscriptions`, { body, ...options });
  }

  /**
   * Lists all of an account's subscriptions.
   */
  accountSubscriptionsListSubscriptions(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionAccountSubscriptionsListSubscriptionsResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/subscriptions`, options);
  }
}

export interface SubscriptionUpdateResponse {
  errors?: Array<SubscriptionUpdateResponse.Error>;

  messages?: Array<SubscriptionUpdateResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SubscriptionUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface SubscriptionDeleteResponse {
  errors?: Array<SubscriptionDeleteResponse.Error>;

  messages?: Array<SubscriptionDeleteResponse.Message>;

  result?: SubscriptionDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SubscriptionDeleteResponse {
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
     * Subscription identifier tag.
     */
    subscription_id?: string;
  }
}

export interface SubscriptionAccountSubscriptionsCreateSubscriptionResponse {
  errors?: Array<SubscriptionAccountSubscriptionsCreateSubscriptionResponse.Error>;

  messages?: Array<SubscriptionAccountSubscriptionsCreateSubscriptionResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SubscriptionAccountSubscriptionsCreateSubscriptionResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface SubscriptionAccountSubscriptionsListSubscriptionsResponse {
  errors?: Array<SubscriptionAccountSubscriptionsListSubscriptionsResponse.Error>;

  messages?: Array<SubscriptionAccountSubscriptionsListSubscriptionsResponse.Message>;

  result?: Array<SubscriptionAccountSubscriptionsListSubscriptionsResponse.Result>;

  result_info?: SubscriptionAccountSubscriptionsListSubscriptionsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SubscriptionAccountSubscriptionsListSubscriptionsResponse {
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
     * Subscription identifier tag.
     */
    id?: string;

    app?: Result.App;

    /**
     * The list of add-ons subscribed to.
     */
    component_values?: Array<Result.ComponentValue>;

    /**
     * The monetary unit in which pricing information is displayed.
     */
    currency?: string;

    /**
     * The end of the current period and also when the next billing is due.
     */
    current_period_end?: string;

    /**
     * When the current billing period started. May match initial_period_start if this
     * is the first period.
     */
    current_period_start?: string;

    /**
     * How often the subscription is renewed automatically.
     */
    frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

    /**
     * The price of the subscription that will be billed, in US dollars.
     */
    price?: number;

    /**
     * The rate plan applied to the subscription.
     */
    rate_plan?: Result.RatePlan;

    /**
     * The state that the subscription is in.
     */
    state?: 'Trial' | 'Provisioned' | 'Paid' | 'AwaitingPayment' | 'Cancelled' | 'Failed' | 'Expired';

    /**
     * A simple zone object. May have null properties if not a zone subscription.
     */
    zone?: Result.Zone;
  }

  export namespace Result {
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
    export interface Zone {
      /**
       * Identifier
       */
      id?: string;

      /**
       * The domain name
       */
      name?: string;
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

export interface SubscriptionUpdateParams {
  app?: SubscriptionUpdateParams.App;

  /**
   * The list of add-ons subscribed to.
   */
  component_values?: Array<SubscriptionUpdateParams.ComponentValue>;

  /**
   * How often the subscription is renewed automatically.
   */
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

  /**
   * The rate plan applied to the subscription.
   */
  rate_plan?: SubscriptionUpdateParams.RatePlan;

  /**
   * A simple zone object. May have null properties if not a zone subscription.
   */
  zone?: SubscriptionUpdateParams.Zone;
}

export namespace SubscriptionUpdateParams {
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

export interface SubscriptionAccountSubscriptionsCreateSubscriptionParams {
  app?: SubscriptionAccountSubscriptionsCreateSubscriptionParams.App;

  /**
   * The list of add-ons subscribed to.
   */
  component_values?: Array<SubscriptionAccountSubscriptionsCreateSubscriptionParams.ComponentValue>;

  /**
   * How often the subscription is renewed automatically.
   */
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

  /**
   * The rate plan applied to the subscription.
   */
  rate_plan?: SubscriptionAccountSubscriptionsCreateSubscriptionParams.RatePlan;

  /**
   * A simple zone object. May have null properties if not a zone subscription.
   */
  zone?: SubscriptionAccountSubscriptionsCreateSubscriptionParams.Zone;
}

export namespace SubscriptionAccountSubscriptionsCreateSubscriptionParams {
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
  export import SubscriptionUpdateResponse = SubscriptionsAPI.SubscriptionUpdateResponse;
  export import SubscriptionDeleteResponse = SubscriptionsAPI.SubscriptionDeleteResponse;
  export import SubscriptionAccountSubscriptionsCreateSubscriptionResponse = SubscriptionsAPI.SubscriptionAccountSubscriptionsCreateSubscriptionResponse;
  export import SubscriptionAccountSubscriptionsListSubscriptionsResponse = SubscriptionsAPI.SubscriptionAccountSubscriptionsListSubscriptionsResponse;
  export import SubscriptionUpdateParams = SubscriptionsAPI.SubscriptionUpdateParams;
  export import SubscriptionAccountSubscriptionsCreateSubscriptionParams = SubscriptionsAPI.SubscriptionAccountSubscriptionsCreateSubscriptionParams;
}
