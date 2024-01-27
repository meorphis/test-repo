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

describe('resource objects', () => {
  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = cloudflare.accounts.workers.durableObjects.namespaces.objects.list(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '5fd1cafff895419c8bcc647fc64ab8f0',
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
  test.skip('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.workers.durableObjects.namespaces.objects.list(
        '023e105f4ecef8ad9ca31a8372d0c353',
        '5fd1cafff895419c8bcc647fc64ab8f0',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.workers.durableObjects.namespaces.objects.list(
        '023e105f4ecef8ad9ca31a8372d0c353',
        '5fd1cafff895419c8bcc647fc64ab8f0',
        {
          cursor:
            'AAAAANuhDN7SjacTnSVsDu3WW1Lvst6dxJGTjRY5BhxPXdf6L6uTcpd_NVtjhn11OUYRsVEykxoUwF-JQU4dn6QylZSKTOJuG0indrdn_MlHpMRtsxgXjs-RPdHYIVm3odE_uvEQ_dTQGFm8oikZMohns34DLBgrQpc',
          limit: 10,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
