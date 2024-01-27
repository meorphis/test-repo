// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as EventsAPI from 'cloudflare/resources/zones/waiting-rooms/events/events';
import * as DetailsAPI from 'cloudflare/resources/zones/waiting-rooms/events/details';

export class Events extends APIResource {
  details: DetailsAPI.Details = new DetailsAPI.Details(this._client);

  /**
   * Fetches a single configured event for a waiting room.
   */
  retrieve(
    zoneIdentifier: string,
    waitingRoomId: unknown,
    eventId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventResponse> {
    return this._client.get(
      `/zones/${zoneIdentifier}/waiting_rooms/${waitingRoomId}/events/${eventId}`,
      options,
    );
  }

  /**
   * Updates a configured event for a waiting room.
   */
  update(
    zoneIdentifier: string,
    waitingRoomId: unknown,
    eventId: unknown,
    body: EventUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventResponse> {
    return this._client.put(`/zones/${zoneIdentifier}/waiting_rooms/${waitingRoomId}/events/${eventId}`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes an event for a waiting room.
   */
  delete(
    zoneIdentifier: string,
    waitingRoomId: unknown,
    eventId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventDeleteResponse> {
    return this._client.delete(
      `/zones/${zoneIdentifier}/waiting_rooms/${waitingRoomId}/events/${eventId}`,
      options,
    );
  }

  /**
   * Patches a configured event for a waiting room.
   */
  patch(
    zoneIdentifier: string,
    waitingRoomId: unknown,
    eventId: unknown,
    body: EventPatchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/waiting_rooms/${waitingRoomId}/events/${eventId}`, {
      body,
      ...options,
    });
  }

  /**
   * Only available for the Waiting Room Advanced subscription. Creates an event for
   * a waiting room. An event takes place during a specified period of time,
   * temporarily changing the behavior of a waiting room. While the event is active,
   * some of the properties in the event's configuration may either override or
   * inherit from the waiting room's configuration. Note that events cannot overlap
   * with each other, so only one event can be active at a time.
   */
  waitingRoomCreateEvent(
    zoneIdentifier: string,
    waitingRoomId: unknown,
    body: EventWaitingRoomCreateEventParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/waiting_rooms/${waitingRoomId}/events`, {
      body,
      ...options,
    });
  }

  /**
   * Lists events for a waiting room.
   */
  waitingRoomListEvents(
    zoneIdentifier: string,
    waitingRoomId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventWaitingRoomListEventsResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/waiting_rooms/${waitingRoomId}/events`, options);
  }
}

export interface EventResponse {
  result?: EventResponse.Result;
}

export namespace EventResponse {
  export interface Result {
    id?: unknown;

    created_on?: string;

    /**
     * If set, the event will override the waiting room's `custom_page_html` property
     * while it is active. If null, the event will inherit it.
     */
    custom_page_html?: string | null;

    /**
     * A note that you can use to add more details about the event.
     */
    description?: string;

    /**
     * If set, the event will override the waiting room's `disable_session_renewal`
     * property while it is active. If null, the event will inherit it.
     */
    disable_session_renewal?: boolean | null;

    /**
     * An ISO 8601 timestamp that marks the end of the event.
     */
    event_end_time?: string;

    /**
     * An ISO 8601 timestamp that marks the start of the event. At this time, queued
     * users will be processed with the event's configuration. The start time must be
     * at least one minute before `event_end_time`.
     */
    event_start_time?: string;

    modified_on?: string;

    /**
     * A unique name to identify the event. Only alphanumeric characters, hyphens and
     * underscores are allowed.
     */
    name?: string;

    /**
     * If set, the event will override the waiting room's `new_users_per_minute`
     * property while it is active. If null, the event will inherit it. This can only
     * be set if the event's `total_active_users` property is also set.
     */
    new_users_per_minute?: number | null;

    /**
     * An ISO 8601 timestamp that marks when to begin queueing all users before the
     * event starts. The prequeue must start at least five minutes before
     * `event_start_time`.
     */
    prequeue_start_time?: string | null;

    /**
     * If set, the event will override the waiting room's `queueing_method` property
     * while it is active. If null, the event will inherit it.
     */
    queueing_method?: string | null;

    /**
     * If set, the event will override the waiting room's `session_duration` property
     * while it is active. If null, the event will inherit it.
     */
    session_duration?: number | null;

    /**
     * If enabled, users in the prequeue will be shuffled randomly at the
     * `event_start_time`. Requires that `prequeue_start_time` is not null. This is
     * useful for situations when many users will join the event prequeue at the same
     * time and you want to shuffle them to ensure fairness. Naturally, it makes the
     * most sense to enable this feature when the `queueing_method` during the event
     * respects ordering such as **fifo**, or else the shuffling may be unnecessary.
     */
    shuffle_at_event_start?: boolean;

    /**
     * Suspends or allows an event. If set to `true`, the event is ignored and traffic
     * will be handled based on the waiting room configuration.
     */
    suspended?: boolean;

    /**
     * If set, the event will override the waiting room's `total_active_users` property
     * while it is active. If null, the event will inherit it. This can only be set if
     * the event's `new_users_per_minute` property is also set.
     */
    total_active_users?: number | null;
  }
}

export interface EventDeleteResponse {
  result?: EventDeleteResponse.Result;
}

export namespace EventDeleteResponse {
  export interface Result {
    id?: unknown;
  }
}

export interface EventWaitingRoomListEventsResponse {
  errors?: Array<EventWaitingRoomListEventsResponse.Error>;

  messages?: Array<EventWaitingRoomListEventsResponse.Message>;

  result?: Array<EventWaitingRoomListEventsResponse.Result>;

  result_info?: EventWaitingRoomListEventsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace EventWaitingRoomListEventsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    id?: unknown;

    created_on?: string;

    /**
     * If set, the event will override the waiting room's `custom_page_html` property
     * while it is active. If null, the event will inherit it.
     */
    custom_page_html?: string | null;

    /**
     * A note that you can use to add more details about the event.
     */
    description?: string;

    /**
     * If set, the event will override the waiting room's `disable_session_renewal`
     * property while it is active. If null, the event will inherit it.
     */
    disable_session_renewal?: boolean | null;

    /**
     * An ISO 8601 timestamp that marks the end of the event.
     */
    event_end_time?: string;

    /**
     * An ISO 8601 timestamp that marks the start of the event. At this time, queued
     * users will be processed with the event's configuration. The start time must be
     * at least one minute before `event_end_time`.
     */
    event_start_time?: string;

    modified_on?: string;

    /**
     * A unique name to identify the event. Only alphanumeric characters, hyphens and
     * underscores are allowed.
     */
    name?: string;

    /**
     * If set, the event will override the waiting room's `new_users_per_minute`
     * property while it is active. If null, the event will inherit it. This can only
     * be set if the event's `total_active_users` property is also set.
     */
    new_users_per_minute?: number | null;

    /**
     * An ISO 8601 timestamp that marks when to begin queueing all users before the
     * event starts. The prequeue must start at least five minutes before
     * `event_start_time`.
     */
    prequeue_start_time?: string | null;

    /**
     * If set, the event will override the waiting room's `queueing_method` property
     * while it is active. If null, the event will inherit it.
     */
    queueing_method?: string | null;

    /**
     * If set, the event will override the waiting room's `session_duration` property
     * while it is active. If null, the event will inherit it.
     */
    session_duration?: number | null;

    /**
     * If enabled, users in the prequeue will be shuffled randomly at the
     * `event_start_time`. Requires that `prequeue_start_time` is not null. This is
     * useful for situations when many users will join the event prequeue at the same
     * time and you want to shuffle them to ensure fairness. Naturally, it makes the
     * most sense to enable this feature when the `queueing_method` during the event
     * respects ordering such as **fifo**, or else the shuffling may be unnecessary.
     */
    shuffle_at_event_start?: boolean;

    /**
     * Suspends or allows an event. If set to `true`, the event is ignored and traffic
     * will be handled based on the waiting room configuration.
     */
    suspended?: boolean;

    /**
     * If set, the event will override the waiting room's `total_active_users` property
     * while it is active. If null, the event will inherit it. This can only be set if
     * the event's `new_users_per_minute` property is also set.
     */
    total_active_users?: number | null;
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

export interface EventUpdateParams {
  /**
   * An ISO 8601 timestamp that marks the end of the event.
   */
  event_end_time: string;

  /**
   * An ISO 8601 timestamp that marks the start of the event. At this time, queued
   * users will be processed with the event's configuration. The start time must be
   * at least one minute before `event_end_time`.
   */
  event_start_time: string;

  /**
   * A unique name to identify the event. Only alphanumeric characters, hyphens and
   * underscores are allowed.
   */
  name: string;

  /**
   * If set, the event will override the waiting room's `custom_page_html` property
   * while it is active. If null, the event will inherit it.
   */
  custom_page_html?: string | null;

  /**
   * A note that you can use to add more details about the event.
   */
  description?: string;

  /**
   * If set, the event will override the waiting room's `disable_session_renewal`
   * property while it is active. If null, the event will inherit it.
   */
  disable_session_renewal?: boolean | null;

  /**
   * If set, the event will override the waiting room's `new_users_per_minute`
   * property while it is active. If null, the event will inherit it. This can only
   * be set if the event's `total_active_users` property is also set.
   */
  new_users_per_minute?: number | null;

  /**
   * An ISO 8601 timestamp that marks when to begin queueing all users before the
   * event starts. The prequeue must start at least five minutes before
   * `event_start_time`.
   */
  prequeue_start_time?: string | null;

  /**
   * If set, the event will override the waiting room's `queueing_method` property
   * while it is active. If null, the event will inherit it.
   */
  queueing_method?: string | null;

  /**
   * If set, the event will override the waiting room's `session_duration` property
   * while it is active. If null, the event will inherit it.
   */
  session_duration?: number | null;

  /**
   * If enabled, users in the prequeue will be shuffled randomly at the
   * `event_start_time`. Requires that `prequeue_start_time` is not null. This is
   * useful for situations when many users will join the event prequeue at the same
   * time and you want to shuffle them to ensure fairness. Naturally, it makes the
   * most sense to enable this feature when the `queueing_method` during the event
   * respects ordering such as **fifo**, or else the shuffling may be unnecessary.
   */
  shuffle_at_event_start?: boolean;

  /**
   * Suspends or allows an event. If set to `true`, the event is ignored and traffic
   * will be handled based on the waiting room configuration.
   */
  suspended?: boolean;

  /**
   * If set, the event will override the waiting room's `total_active_users` property
   * while it is active. If null, the event will inherit it. This can only be set if
   * the event's `new_users_per_minute` property is also set.
   */
  total_active_users?: number | null;
}

export interface EventPatchParams {
  /**
   * An ISO 8601 timestamp that marks the end of the event.
   */
  event_end_time: string;

  /**
   * An ISO 8601 timestamp that marks the start of the event. At this time, queued
   * users will be processed with the event's configuration. The start time must be
   * at least one minute before `event_end_time`.
   */
  event_start_time: string;

  /**
   * A unique name to identify the event. Only alphanumeric characters, hyphens and
   * underscores are allowed.
   */
  name: string;

  /**
   * If set, the event will override the waiting room's `custom_page_html` property
   * while it is active. If null, the event will inherit it.
   */
  custom_page_html?: string | null;

  /**
   * A note that you can use to add more details about the event.
   */
  description?: string;

  /**
   * If set, the event will override the waiting room's `disable_session_renewal`
   * property while it is active. If null, the event will inherit it.
   */
  disable_session_renewal?: boolean | null;

  /**
   * If set, the event will override the waiting room's `new_users_per_minute`
   * property while it is active. If null, the event will inherit it. This can only
   * be set if the event's `total_active_users` property is also set.
   */
  new_users_per_minute?: number | null;

  /**
   * An ISO 8601 timestamp that marks when to begin queueing all users before the
   * event starts. The prequeue must start at least five minutes before
   * `event_start_time`.
   */
  prequeue_start_time?: string | null;

  /**
   * If set, the event will override the waiting room's `queueing_method` property
   * while it is active. If null, the event will inherit it.
   */
  queueing_method?: string | null;

  /**
   * If set, the event will override the waiting room's `session_duration` property
   * while it is active. If null, the event will inherit it.
   */
  session_duration?: number | null;

  /**
   * If enabled, users in the prequeue will be shuffled randomly at the
   * `event_start_time`. Requires that `prequeue_start_time` is not null. This is
   * useful for situations when many users will join the event prequeue at the same
   * time and you want to shuffle them to ensure fairness. Naturally, it makes the
   * most sense to enable this feature when the `queueing_method` during the event
   * respects ordering such as **fifo**, or else the shuffling may be unnecessary.
   */
  shuffle_at_event_start?: boolean;

  /**
   * Suspends or allows an event. If set to `true`, the event is ignored and traffic
   * will be handled based on the waiting room configuration.
   */
  suspended?: boolean;

  /**
   * If set, the event will override the waiting room's `total_active_users` property
   * while it is active. If null, the event will inherit it. This can only be set if
   * the event's `new_users_per_minute` property is also set.
   */
  total_active_users?: number | null;
}

export interface EventWaitingRoomCreateEventParams {
  /**
   * An ISO 8601 timestamp that marks the end of the event.
   */
  event_end_time: string;

  /**
   * An ISO 8601 timestamp that marks the start of the event. At this time, queued
   * users will be processed with the event's configuration. The start time must be
   * at least one minute before `event_end_time`.
   */
  event_start_time: string;

  /**
   * A unique name to identify the event. Only alphanumeric characters, hyphens and
   * underscores are allowed.
   */
  name: string;

  /**
   * If set, the event will override the waiting room's `custom_page_html` property
   * while it is active. If null, the event will inherit it.
   */
  custom_page_html?: string | null;

  /**
   * A note that you can use to add more details about the event.
   */
  description?: string;

  /**
   * If set, the event will override the waiting room's `disable_session_renewal`
   * property while it is active. If null, the event will inherit it.
   */
  disable_session_renewal?: boolean | null;

  /**
   * If set, the event will override the waiting room's `new_users_per_minute`
   * property while it is active. If null, the event will inherit it. This can only
   * be set if the event's `total_active_users` property is also set.
   */
  new_users_per_minute?: number | null;

  /**
   * An ISO 8601 timestamp that marks when to begin queueing all users before the
   * event starts. The prequeue must start at least five minutes before
   * `event_start_time`.
   */
  prequeue_start_time?: string | null;

  /**
   * If set, the event will override the waiting room's `queueing_method` property
   * while it is active. If null, the event will inherit it.
   */
  queueing_method?: string | null;

  /**
   * If set, the event will override the waiting room's `session_duration` property
   * while it is active. If null, the event will inherit it.
   */
  session_duration?: number | null;

  /**
   * If enabled, users in the prequeue will be shuffled randomly at the
   * `event_start_time`. Requires that `prequeue_start_time` is not null. This is
   * useful for situations when many users will join the event prequeue at the same
   * time and you want to shuffle them to ensure fairness. Naturally, it makes the
   * most sense to enable this feature when the `queueing_method` during the event
   * respects ordering such as **fifo**, or else the shuffling may be unnecessary.
   */
  shuffle_at_event_start?: boolean;

  /**
   * Suspends or allows an event. If set to `true`, the event is ignored and traffic
   * will be handled based on the waiting room configuration.
   */
  suspended?: boolean;

  /**
   * If set, the event will override the waiting room's `total_active_users` property
   * while it is active. If null, the event will inherit it. This can only be set if
   * the event's `new_users_per_minute` property is also set.
   */
  total_active_users?: number | null;
}

export namespace Events {
  export import EventResponse = EventsAPI.EventResponse;
  export import EventDeleteResponse = EventsAPI.EventDeleteResponse;
  export import EventWaitingRoomListEventsResponse = EventsAPI.EventWaitingRoomListEventsResponse;
  export import EventUpdateParams = EventsAPI.EventUpdateParams;
  export import EventPatchParams = EventsAPI.EventPatchParams;
  export import EventWaitingRoomCreateEventParams = EventsAPI.EventWaitingRoomCreateEventParams;
  export import Details = DetailsAPI.Details;
  export import DetailWaitingRoomPreviewActiveEventDetailsResponse = DetailsAPI.DetailWaitingRoomPreviewActiveEventDetailsResponse;
}
