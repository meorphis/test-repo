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

describe('resource outgoings', () => {
  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.zones.secondaryDNS.outgoings.delete(
      '269d8f4853475ca241c4e730be286b20',
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
  test.skip('secondaryDNSPrimaryZoneCreatePrimaryZoneConfiguration: only required params', async () => {
    const responsePromise =
      cloudflare.zones.secondaryDNS.outgoings.secondaryDNSPrimaryZoneCreatePrimaryZoneConfiguration(
        '269d8f4853475ca241c4e730be286b20',
        {
          name: 'www.example.com.',
          peers: ['23ff594956f20c2a721606e94745a8aa', '00920f38ce07c2e2f4df50b1f61d4194'],
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
  test.skip('secondaryDNSPrimaryZoneCreatePrimaryZoneConfiguration: required and optional params', async () => {
    const response =
      await cloudflare.zones.secondaryDNS.outgoings.secondaryDNSPrimaryZoneCreatePrimaryZoneConfiguration(
        '269d8f4853475ca241c4e730be286b20',
        {
          name: 'www.example.com.',
          peers: ['23ff594956f20c2a721606e94745a8aa', '00920f38ce07c2e2f4df50b1f61d4194'],
        },
      );
  });

  // skipped: tests are disabled for the time being
  test.skip('secondaryDNSPrimaryZonePrimaryZoneConfigurationDetails', async () => {
    const responsePromise =
      cloudflare.zones.secondaryDNS.outgoings.secondaryDNSPrimaryZonePrimaryZoneConfigurationDetails(
        '269d8f4853475ca241c4e730be286b20',
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
  test.skip('secondaryDNSPrimaryZonePrimaryZoneConfigurationDetails: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.zones.secondaryDNS.outgoings.secondaryDNSPrimaryZonePrimaryZoneConfigurationDetails(
        '269d8f4853475ca241c4e730be286b20',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('secondaryDNSPrimaryZoneUpdatePrimaryZoneConfiguration: only required params', async () => {
    const responsePromise =
      cloudflare.zones.secondaryDNS.outgoings.secondaryDNSPrimaryZoneUpdatePrimaryZoneConfiguration(
        '269d8f4853475ca241c4e730be286b20',
        {
          name: 'www.example.com.',
          peers: ['23ff594956f20c2a721606e94745a8aa', '00920f38ce07c2e2f4df50b1f61d4194'],
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
  test.skip('secondaryDNSPrimaryZoneUpdatePrimaryZoneConfiguration: required and optional params', async () => {
    const response =
      await cloudflare.zones.secondaryDNS.outgoings.secondaryDNSPrimaryZoneUpdatePrimaryZoneConfiguration(
        '269d8f4853475ca241c4e730be286b20',
        {
          name: 'www.example.com.',
          peers: ['23ff594956f20c2a721606e94745a8aa', '00920f38ce07c2e2f4df50b1f61d4194'],
        },
      );
  });
});
