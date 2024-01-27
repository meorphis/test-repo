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

describe('resource hostnames', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = cloudflare.zones.originTlsClientAuths.hostnames.retrieve(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'app.example.com',
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
      cloudflare.zones.originTlsClientAuths.hostnames.retrieve(
        '023e105f4ecef8ad9ca31a8372d0c353',
        'app.example.com',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('perHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthentication: only required params', async () => {
    const responsePromise =
      cloudflare.zones.originTlsClientAuths.hostnames.perHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthentication(
        '023e105f4ecef8ad9ca31a8372d0c353',
        { config: [{}, {}, {}] },
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
  test.skip('perHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthentication: required and optional params', async () => {
    const response =
      await cloudflare.zones.originTlsClientAuths.hostnames.perHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthentication(
        '023e105f4ecef8ad9ca31a8372d0c353',
        {
          config: [
            { cert_id: '2458ce5a-0c35-4c7f-82c7-8e9487d3ff60', enabled: true, hostname: 'app.example.com' },
            { cert_id: '2458ce5a-0c35-4c7f-82c7-8e9487d3ff60', enabled: true, hostname: 'app.example.com' },
            { cert_id: '2458ce5a-0c35-4c7f-82c7-8e9487d3ff60', enabled: true, hostname: 'app.example.com' },
          ],
        },
      );
  });
});
