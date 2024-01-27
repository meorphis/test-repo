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
    const responsePromise = cloudflare.zones.firewalls.accessRules.rules.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '92f17202ed8bd63d69a66b86a49a8f6b',
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
    const responsePromise = cloudflare.zones.firewalls.accessRules.rules.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '92f17202ed8bd63d69a66b86a49a8f6b',
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
  test.skip('ipAccessRulesForAZoneCreateAnIPAccessRule: only required params', async () => {
    const responsePromise =
      cloudflare.zones.firewalls.accessRules.rules.ipAccessRulesForAZoneCreateAnIPAccessRule(
        '023e105f4ecef8ad9ca31a8372d0c353',
        {
          configuration: {},
          mode: 'challenge',
          notes: 'This rule is enabled because of an event that occurred on date X.',
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
  test.skip('ipAccessRulesForAZoneCreateAnIPAccessRule: required and optional params', async () => {
    const response =
      await cloudflare.zones.firewalls.accessRules.rules.ipAccessRulesForAZoneCreateAnIPAccessRule(
        '023e105f4ecef8ad9ca31a8372d0c353',
        {
          configuration: { target: 'ip', value: '198.51.100.4' },
          mode: 'challenge',
          notes: 'This rule is enabled because of an event that occurred on date X.',
        },
      );
  });

  // skipped: tests are disabled for the time being
  test.skip('ipAccessRulesForAZoneListIPAccessRules', async () => {
    const responsePromise =
      cloudflare.zones.firewalls.accessRules.rules.ipAccessRulesForAZoneListIPAccessRules(
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
  test.skip('ipAccessRulesForAZoneListIPAccessRules: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.zones.firewalls.accessRules.rules.ipAccessRulesForAZoneListIPAccessRules(
        '023e105f4ecef8ad9ca31a8372d0c353',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('ipAccessRulesForAZoneListIPAccessRules: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.zones.firewalls.accessRules.rules.ipAccessRulesForAZoneListIPAccessRules(
        '023e105f4ecef8ad9ca31a8372d0c353',
        {
          direction: 'desc',
          'egs-pagination': { json: { page: 1, per_page: 1 } },
          filters: {
            'configuration.target': 'ip',
            'configuration.value': '198.51.100.4',
            match: 'any',
            mode: 'challenge',
            notes: 'my note',
          },
          order: 'mode',
          page: 1,
          per_page: 20,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
