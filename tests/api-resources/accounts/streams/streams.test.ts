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

describe('resource streams', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = cloudflare.accounts.streams.retrieve(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'ea95132c15732412d22c1476fa83f27a',
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
      cloudflare.accounts.streams.retrieve(
        '023e105f4ecef8ad9ca31a8372d0c353',
        'ea95132c15732412d22c1476fa83f27a',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = cloudflare.accounts.streams.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'ea95132c15732412d22c1476fa83f27a',
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
    const responsePromise = cloudflare.accounts.streams.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'ea95132c15732412d22c1476fa83f27a',
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
  test.skip('streamVideosInitiateVideoUploadsUsingTus: only required params', async () => {
    const responsePromise = cloudflare.accounts.streams.streamVideosInitiateVideoUploadsUsingTus(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { 'Tus-Resumable': '1.0.0', 'Upload-Length': 0 },
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
  test.skip('streamVideosInitiateVideoUploadsUsingTus: required and optional params', async () => {
    const response = await cloudflare.accounts.streams.streamVideosInitiateVideoUploadsUsingTus(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        'Tus-Resumable': '1.0.0',
        'Upload-Length': 0,
        'Upload-Creator': 'creator-id_abcde12345',
        'Upload-Metadata':
          'name aGVsbG8gd29ybGQ=, requiresignedurls, allowedorigins ZXhhbXBsZS5jb20sdGVzdC5jb20=',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('streamVideosListVideos', async () => {
    const responsePromise = cloudflare.accounts.streams.streamVideosListVideos(
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
  test.skip('streamVideosListVideos: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.streams.streamVideosListVideos('023e105f4ecef8ad9ca31a8372d0c353', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('streamVideosListVideos: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.streams.streamVideosListVideos(
        '023e105f4ecef8ad9ca31a8372d0c353',
        {
          asc: true,
          creator: 'creator-id_abcde12345',
          end: '2014-01-02T02:20:00Z',
          include_counts: true,
          search: 'puppy.mp4',
          start: '2014-01-02T02:20:00Z',
          status: 'inprogress',
          type: 'live',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
