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

describe('resource origins', () => {
  // skipped: tests are disabled for the time being
  test.skip('postZonesZoneIdentifierLogpushValidateOrigin: only required params', async () => {
    const responsePromise =
      cloudflare.zones.logpushes.validates.origins.postZonesZoneIdentifierLogpushValidateOrigin(
        '023e105f4ecef8ad9ca31a8372d0c353',
        { logpull_options: 'fields=RayID,ClientIP,EdgeStartTimestamp&timestamps=rfc3339' },
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
  test.skip('postZonesZoneIdentifierLogpushValidateOrigin: required and optional params', async () => {
    const response =
      await cloudflare.zones.logpushes.validates.origins.postZonesZoneIdentifierLogpushValidateOrigin(
        '023e105f4ecef8ad9ca31a8372d0c353',
        { logpull_options: 'fields=RayID,ClientIP,EdgeStartTimestamp&timestamps=rfc3339' },
      );
  });
});
