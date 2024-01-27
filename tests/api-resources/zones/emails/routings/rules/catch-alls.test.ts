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

describe('resource catchAlls', () => {
  // skipped: tests are disabled for the time being
  test.skip('emailRoutingRoutingRulesGetCatchAllRule', async () => {
    const responsePromise =
      cloudflare.zones.emails.routings.rules.catchAlls.emailRoutingRoutingRulesGetCatchAllRule(
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
  test.skip('emailRoutingRoutingRulesGetCatchAllRule: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.zones.emails.routings.rules.catchAlls.emailRoutingRoutingRulesGetCatchAllRule(
        '023e105f4ecef8ad9ca31a8372d0c353',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('emailRoutingRoutingRulesUpdateCatchAllRule: only required params', async () => {
    const responsePromise =
      cloudflare.zones.emails.routings.rules.catchAlls.emailRoutingRoutingRulesUpdateCatchAllRule(
        '023e105f4ecef8ad9ca31a8372d0c353',
        {
          actions: [{ type: 'forward' }, { type: 'forward' }, { type: 'forward' }],
          matchers: [{ type: 'all' }, { type: 'all' }, { type: 'all' }],
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
  test.skip('emailRoutingRoutingRulesUpdateCatchAllRule: required and optional params', async () => {
    const response =
      await cloudflare.zones.emails.routings.rules.catchAlls.emailRoutingRoutingRulesUpdateCatchAllRule(
        '023e105f4ecef8ad9ca31a8372d0c353',
        {
          actions: [
            {
              type: 'forward',
              value: [
                'destinationaddress@example.net',
                'destinationaddress@example.net',
                'destinationaddress@example.net',
              ],
            },
            {
              type: 'forward',
              value: [
                'destinationaddress@example.net',
                'destinationaddress@example.net',
                'destinationaddress@example.net',
              ],
            },
            {
              type: 'forward',
              value: [
                'destinationaddress@example.net',
                'destinationaddress@example.net',
                'destinationaddress@example.net',
              ],
            },
          ],
          matchers: [{ type: 'all' }, { type: 'all' }, { type: 'all' }],
          enabled: true,
          name: 'Send to user@example.net rule.',
        },
      );
  });
});
