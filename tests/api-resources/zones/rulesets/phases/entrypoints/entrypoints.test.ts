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

describe('resource entrypoints', () => {
  // skipped: tests are disabled for the time being
  test.skip('transformRulesListTransformRules', async () => {
    const responsePromise = cloudflare.zones.rulesets.phases.entrypoints.transformRulesListTransformRules(
      '9f1839b6152d298aca64c4e906b6d074',
      'http_request_firewall_custom',
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
  test.skip('transformRulesListTransformRules: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.zones.rulesets.phases.entrypoints.transformRulesListTransformRules(
        '9f1839b6152d298aca64c4e906b6d074',
        'http_request_firewall_custom',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('transformRulesUpdateTransformRules', async () => {
    const responsePromise = cloudflare.zones.rulesets.phases.entrypoints.transformRulesUpdateTransformRules(
      '9f1839b6152d298aca64c4e906b6d074',
      'http_request_firewall_custom',
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
});
