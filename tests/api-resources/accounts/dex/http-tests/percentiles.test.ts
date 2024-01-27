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

describe('resource percentiles', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.accounts.dex.httpTests.percentiles.list(
      '01a7362d577a6c3019a474fd6f485823',
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { timeEnd: '2023-09-20T17:00:00Z', timeStart: '2023-09-20T17:00:00Z' },
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
  test.skip('list: required and optional params', async () => {
    const response = await cloudflare.accounts.dex.httpTests.percentiles.list(
      '01a7362d577a6c3019a474fd6f485823',
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        timeEnd: '2023-09-20T17:00:00Z',
        timeStart: '2023-09-20T17:00:00Z',
        colo: 'string',
        deviceId: ['string', 'string', 'string'],
      },
    );
  });
});
