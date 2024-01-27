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

describe('resource directUploads', () => {
  // skipped: tests are disabled for the time being
  test.skip('streamVideosUploadVideosViaDirectUploadURLs: only required params', async () => {
    const responsePromise =
      cloudflare.accounts.streams.directUploads.streamVideosUploadVideosViaDirectUploadURLs(
        '023e105f4ecef8ad9ca31a8372d0c353',
        { maxDurationSeconds: 1 },
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
  test.skip('streamVideosUploadVideosViaDirectUploadURLs: required and optional params', async () => {
    const response =
      await cloudflare.accounts.streams.directUploads.streamVideosUploadVideosViaDirectUploadURLs(
        '023e105f4ecef8ad9ca31a8372d0c353',
        {
          maxDurationSeconds: 1,
          allowedOrigins: ['example.com'],
          creator: 'creator-id_abcde12345',
          expiry: '2021-01-02T02:20:00Z',
          meta: { name: 'video12345.mp4' },
          requireSignedURLs: true,
          scheduledDeletion: '2014-01-02T02:20:00Z',
          thumbnailTimestampPct: 0.529241,
          watermark: { uid: 'ea95132c15732412d22c1476fa83f27a' },
          'Upload-Creator': 'creator-id_abcde12345',
        },
      );
  });
});
