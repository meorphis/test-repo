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

describe('resource uaRules', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = cloudflare.zones.firewalls.uaRules.retrieve(
      '023e105f4ecef8ad9ca31a8372d0c353',
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
  test.skip('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.zones.firewalls.uaRules.retrieve(
        '023e105f4ecef8ad9ca31a8372d0c353',
        '372e67954025e0ba6aaa6d586b9e0b59',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.zones.firewalls.uaRules.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '372e67954025e0ba6aaa6d586b9e0b59',
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
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.zones.firewalls.uaRules.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '372e67954025e0ba6aaa6d586b9e0b59',
      {},
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.zones.firewalls.uaRules.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
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
  test.skip('userAgentBlockingRulesCreateAUserAgentBlockingRule: only required params', async () => {
    const responsePromise =
      cloudflare.zones.firewalls.uaRules.userAgentBlockingRulesCreateAUserAgentBlockingRule(
        '023e105f4ecef8ad9ca31a8372d0c353',
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
  test.skip('userAgentBlockingRulesCreateAUserAgentBlockingRule: required and optional params', async () => {
    const response =
      await cloudflare.zones.firewalls.uaRules.userAgentBlockingRulesCreateAUserAgentBlockingRule(
        '023e105f4ecef8ad9ca31a8372d0c353',
        {},
      );
  });

  // skipped: tests are disabled for the time being
  test.skip('userAgentBlockingRulesListUserAgentBlockingRules', async () => {
    const responsePromise =
      cloudflare.zones.firewalls.uaRules.userAgentBlockingRulesListUserAgentBlockingRules(
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
  test.skip('userAgentBlockingRulesListUserAgentBlockingRules: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.zones.firewalls.uaRules.userAgentBlockingRulesListUserAgentBlockingRules(
        '023e105f4ecef8ad9ca31a8372d0c353',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('userAgentBlockingRulesListUserAgentBlockingRules: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.zones.firewalls.uaRules.userAgentBlockingRulesListUserAgentBlockingRules(
        '023e105f4ecef8ad9ca31a8372d0c353',
        { description: 'abusive', description_search: 'abusive', page: 1, per_page: 1, ua_search: 'Safari' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
