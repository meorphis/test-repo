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

describe('resource hijacksEvents', () => {
  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = cloudflare.radar.bgps.hijacksEvents.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.radar.bgps.hijacksEvents.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.radar.bgps.hijacksEvents.list(
        {
          dateEnd: '2023-09-01T11:41:33.782Z',
          dateRange: '7d',
          dateStart: '2023-09-01T11:41:33.782Z',
          eventId: 0,
          format: 'JSON',
          hijackerAsn: 0,
          involvedAsn: 0,
          involvedCountry: 'string',
          maxConfidence: 0,
          minConfidence: 0,
          page: 0,
          per_page: 0,
          prefix: 'string',
          sortBy: 'TIME',
          sortOrder: 'DESC',
          victimAsn: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
