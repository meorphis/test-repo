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

describe('resource advertisements', () => {
  // skipped: tests are disabled for the time being
  test.skip('magicNetworkMonitoringRulesUpdateAdvertisementForRule', async () => {
    const responsePromise =
      cloudflare.accounts.mnms.rules.advertisements.magicNetworkMonitoringRulesUpdateAdvertisementForRule(
        '6f91088a406011ed95aed352566e8d4c',
        '2890e6fa406311ed9b5a23f70f6fb8cf',
      );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
