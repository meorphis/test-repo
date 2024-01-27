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

describe('resource ases', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.radar.dns.tops.ases.list({ domain: ['string', 'string', 'string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await cloudflare.radar.dns.tops.ases.list({
      domain: ['string', 'string', 'string'],
      asn: ['string', 'string', 'string'],
      dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
      dateRange: ['1d', '2d', '7d'],
      dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
      format: 'JSON',
      limit: 5,
      location: ['string', 'string', 'string'],
      name: ['string', 'string', 'string'],
    });
  });
});
