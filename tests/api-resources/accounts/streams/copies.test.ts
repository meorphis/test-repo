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

describe('resource copies', () => {
  // skipped: tests are disabled for the time being
  test.skip('streamVideosUploadVideosFromAURL: only required params', async () => {
    const responsePromise = cloudflare.accounts.streams.copies.streamVideosUploadVideosFromAURL(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { url: 'https://example.com/myvideo.mp4' },
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
  test.skip('streamVideosUploadVideosFromAURL: required and optional params', async () => {
    const response = await cloudflare.accounts.streams.copies.streamVideosUploadVideosFromAURL(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        url: 'https://example.com/myvideo.mp4',
        allowedOrigins: ['example.com'],
        creator: 'creator-id_abcde12345',
        meta: { name: 'video12345.mp4' },
        requireSignedURLs: true,
        scheduledDeletion: '2014-01-02T02:20:00Z',
        thumbnailTimestampPct: 0.529241,
        watermark: { uid: 'ea95132c15732412d22c1476fa83f27a' },
        'Upload-Creator': 'creator-id_abcde12345',
        'Upload-Metadata':
          'name aGVsbG8gd29ybGQ=, requiresignedurls, allowedorigins ZXhhbXBsZS5jb20sdGVzdC5jb20=',
      },
    );
  });
});
