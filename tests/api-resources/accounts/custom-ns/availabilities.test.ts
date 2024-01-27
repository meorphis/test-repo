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

describe('resource availabilities', () => {
  // skipped: tests are disabled for the time being
  test.skip('accountLevelCustomNameserversGetEligibleZonesForAccountCustomNameservers', async () => {
    const responsePromise =
      cloudflare.accounts.customNs.availabilities.accountLevelCustomNameserversGetEligibleZonesForAccountCustomNameservers(
        '372e67954025e0ba6aaa6d586b9e0b59',
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
  test.skip('accountLevelCustomNameserversGetEligibleZonesForAccountCustomNameservers: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.customNs.availabilities.accountLevelCustomNameserversGetEligibleZonesForAccountCustomNameservers(
        '372e67954025e0ba6aaa6d586b9e0b59',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
