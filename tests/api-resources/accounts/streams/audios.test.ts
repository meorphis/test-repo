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

describe('resource audios', () => {
  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = cloudflare.accounts.streams.audios.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'ea95132c15732412d22c1476fa83f27a',
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
    const responsePromise = cloudflare.accounts.streams.audios.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'ea95132c15732412d22c1476fa83f27a',
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
  test.skip('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.streams.audios.delete(
        '023e105f4ecef8ad9ca31a8372d0c353',
        'ea95132c15732412d22c1476fa83f27a',
        'ea95132c15732412d22c1476fa83f27a',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('copy: only required params', async () => {
    const responsePromise = cloudflare.accounts.streams.audios.copy(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'ea95132c15732412d22c1476fa83f27a',
      { label: 'director commentary' },
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
  test.skip('copy: required and optional params', async () => {
    const response = await cloudflare.accounts.streams.audios.copy(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'ea95132c15732412d22c1476fa83f27a',
      { label: 'director commentary', url: 'https://www.examplestorage.com/audio_file.mp3' },
    );
  });
});
