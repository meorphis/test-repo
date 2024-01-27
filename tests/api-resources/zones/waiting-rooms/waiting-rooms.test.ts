// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiEmail: 'dev@cloudflare.com',
  apiKey: 'my-cloudflare-api-key',
  apiToken: 'my-cloudflare-api-token',
  userServiceKey: 'my-cloudflare-user-service-key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource waitingRooms', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = cloudflare.zones.waitingRooms.retrieve(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '699d98642c564d2e855e9661899b7252',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.zones.waitingRooms.retrieve(
        '023e105f4ecef8ad9ca31a8372d0c353',
        '699d98642c564d2e855e9661899b7252',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.zones.waitingRooms.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '699d98642c564d2e855e9661899b7252',
      {
        host: 'shop.example.com',
        name: 'production_webinar',
        new_users_per_minute: 200,
        total_active_users: 200,
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.zones.waitingRooms.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '699d98642c564d2e855e9661899b7252',
      {
        host: 'shop.example.com',
        name: 'production_webinar',
        new_users_per_minute: 200,
        total_active_users: 200,
        additional_routes: [
          { host: 'shop2.example.com', path: '/shop2/checkout' },
          { host: 'shop2.example.com', path: '/shop2/checkout' },
          { host: 'shop2.example.com', path: '/shop2/checkout' },
        ],
        cookie_attributes: { samesite: 'auto', secure: 'auto' },
        cookie_suffix: 'abcd',
        custom_page_html:
          '{{#waitTimeKnown}} {{waitTime}} mins {{/waitTimeKnown}} {{^waitTimeKnown}} Queue all enabled {{/waitTimeKnown}}',
        default_template_language: 'es-ES',
        description: 'Production - DO NOT MODIFY',
        disable_session_renewal: false,
        json_response_enabled: false,
        path: '/shop/checkout',
        queue_all: true,
        queueing_method: 'fifo',
        queueing_status_code: 202,
        session_duration: 1,
        suspended: true,
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.zones.waitingRooms.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '699d98642c564d2e855e9661899b7252',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('patch: only required params', async () => {
    const responsePromise = cloudflare.zones.waitingRooms.patch(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '699d98642c564d2e855e9661899b7252',
      {
        host: 'shop.example.com',
        name: 'production_webinar',
        new_users_per_minute: 200,
        total_active_users: 200,
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('patch: required and optional params', async () => {
    const response = await cloudflare.zones.waitingRooms.patch(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '699d98642c564d2e855e9661899b7252',
      {
        host: 'shop.example.com',
        name: 'production_webinar',
        new_users_per_minute: 200,
        total_active_users: 200,
        additional_routes: [
          { host: 'shop2.example.com', path: '/shop2/checkout' },
          { host: 'shop2.example.com', path: '/shop2/checkout' },
          { host: 'shop2.example.com', path: '/shop2/checkout' },
        ],
        cookie_attributes: { samesite: 'auto', secure: 'auto' },
        cookie_suffix: 'abcd',
        custom_page_html:
          '{{#waitTimeKnown}} {{waitTime}} mins {{/waitTimeKnown}} {{^waitTimeKnown}} Queue all enabled {{/waitTimeKnown}}',
        default_template_language: 'es-ES',
        description: 'Production - DO NOT MODIFY',
        disable_session_renewal: false,
        json_response_enabled: false,
        path: '/shop/checkout',
        queue_all: true,
        queueing_method: 'fifo',
        queueing_status_code: 202,
        session_duration: 1,
        suspended: true,
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('waitingRoomCreateWaitingRoom: only required params', async () => {
    const responsePromise = cloudflare.zones.waitingRooms.waitingRoomCreateWaitingRoom(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        host: 'shop.example.com',
        name: 'production_webinar',
        new_users_per_minute: 200,
        total_active_users: 200,
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('waitingRoomCreateWaitingRoom: required and optional params', async () => {
    const response = await cloudflare.zones.waitingRooms.waitingRoomCreateWaitingRoom(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        host: 'shop.example.com',
        name: 'production_webinar',
        new_users_per_minute: 200,
        total_active_users: 200,
        additional_routes: [
          { host: 'shop2.example.com', path: '/shop2/checkout' },
          { host: 'shop2.example.com', path: '/shop2/checkout' },
          { host: 'shop2.example.com', path: '/shop2/checkout' },
        ],
        cookie_attributes: { samesite: 'auto', secure: 'auto' },
        cookie_suffix: 'abcd',
        custom_page_html:
          '{{#waitTimeKnown}} {{waitTime}} mins {{/waitTimeKnown}} {{^waitTimeKnown}} Queue all enabled {{/waitTimeKnown}}',
        default_template_language: 'es-ES',
        description: 'Production - DO NOT MODIFY',
        disable_session_renewal: false,
        json_response_enabled: false,
        path: '/shop/checkout',
        queue_all: true,
        queueing_method: 'fifo',
        queueing_status_code: 202,
        session_duration: 1,
        suspended: true,
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('waitingRoomListWaitingRooms', async () => {
    const responsePromise = cloudflare.zones.waitingRooms.waitingRoomListWaitingRooms(
      '023e105f4ecef8ad9ca31a8372d0c353',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('waitingRoomListWaitingRooms: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.zones.waitingRooms.waitingRoomListWaitingRooms('023e105f4ecef8ad9ca31a8372d0c353', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
