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

describe('resource rules', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = cloudflare.zones.firewalls.wafs.packages.rules.retrieve(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'a25a9a7e9c00afc1fb2e0245519d725b',
      'a25a9a7e9c00afc1fb2e0245519d725b',
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
      cloudflare.zones.firewalls.wafs.packages.rules.retrieve(
        '023e105f4ecef8ad9ca31a8372d0c353',
        'a25a9a7e9c00afc1fb2e0245519d725b',
        'a25a9a7e9c00afc1fb2e0245519d725b',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = cloudflare.zones.firewalls.wafs.packages.rules.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'a25a9a7e9c00afc1fb2e0245519d725b',
      'a25a9a7e9c00afc1fb2e0245519d725b',
      {},
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
  test.skip('wafRulesListWafRules', async () => {
    const responsePromise = cloudflare.zones.firewalls.wafs.packages.rules.wafRulesListWafRules(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'a25a9a7e9c00afc1fb2e0245519d725b',
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
  test.skip('wafRulesListWafRules: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.zones.firewalls.wafs.packages.rules.wafRulesListWafRules(
        '023e105f4ecef8ad9ca31a8372d0c353',
        'a25a9a7e9c00afc1fb2e0245519d725b',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('wafRulesListWafRules: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.zones.firewalls.wafs.packages.rules.wafRulesListWafRules(
        '023e105f4ecef8ad9ca31a8372d0c353',
        'a25a9a7e9c00afc1fb2e0245519d725b',
        { direction: 'desc', match: 'any', mode: 'CHL', order: 'priority', page: 1, per_page: 5 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
