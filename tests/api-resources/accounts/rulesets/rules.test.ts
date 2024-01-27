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
  test.skip('update', async () => {
    const responsePromise = cloudflare.accounts.rulesets.rules.update(
      'abf9b32d38c5f572afde3336ec0ce302',
      '2f2feab2026849078ba485f918791bdc',
      '3a03d665bac047339bb530ecb439a90d',
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
  test.skip('delete', async () => {
    const responsePromise = cloudflare.accounts.rulesets.rules.delete(
      'abf9b32d38c5f572afde3336ec0ce302',
      '2f2feab2026849078ba485f918791bdc',
      '3a03d665bac047339bb530ecb439a90d',
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
  test.skip('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.rulesets.rules.delete(
        'abf9b32d38c5f572afde3336ec0ce302',
        '2f2feab2026849078ba485f918791bdc',
        '3a03d665bac047339bb530ecb439a90d',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('accountRulesetsCreateAnAccountRulesetRule', async () => {
    const responsePromise = cloudflare.accounts.rulesets.rules.accountRulesetsCreateAnAccountRulesetRule(
      'abf9b32d38c5f572afde3336ec0ce302',
      '2f2feab2026849078ba485f918791bdc',
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
