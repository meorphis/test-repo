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

describe('resource references', () => {
  // skipped: tests are disabled for the time being
  test.skip('accountLoadBalancerMonitorsListMonitorReferences', async () => {
    const responsePromise =
      cloudflare.accounts.loadBalancers.monitors.references.accountLoadBalancerMonitorsListMonitorReferences(
        '023e105f4ecef8ad9ca31a8372d0c353',
        'f1aba936b94213e5b8dca0c0dbf1f9cc',
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
  test.skip('accountLoadBalancerMonitorsListMonitorReferences: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.loadBalancers.monitors.references.accountLoadBalancerMonitorsListMonitorReferences(
        '023e105f4ecef8ad9ca31a8372d0c353',
        'f1aba936b94213e5b8dca0c0dbf1f9cc',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
