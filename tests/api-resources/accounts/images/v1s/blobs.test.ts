// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';

const cloudflare = new Cloudflare({
  apiEmail: 'dev@cloudflare.com',
  apiKey: 'my-cloudflare-api-key',
  apiToken: 'my-cloudflare-api-token',
  userServiceKey: 'my-cloudflare-user-service-key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource blobs', () => {
  // skipped: tests are disabled for the time being
  test.skip('cloudflareImagesBaseImage: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.images.v1s.blobs.cloudflareImagesBaseImage(
        '023e105f4ecef8ad9ca31a8372d0c353',
        'string',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
