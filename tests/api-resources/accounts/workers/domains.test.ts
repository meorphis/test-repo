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

describe('resource domains', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = cloudflare.accounts.workers.domains.retrieve(
      '9a7806061c88ada191ed06f989cc3dac',
      'dbe10b4bc17c295377eabd600e1787fd',
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
      cloudflare.accounts.workers.domains.retrieve(
        '9a7806061c88ada191ed06f989cc3dac',
        'dbe10b4bc17c295377eabd600e1787fd',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.accounts.workers.domains.delete(
      '9a7806061c88ada191ed06f989cc3dac',
      'dbe10b4bc17c295377eabd600e1787fd',
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
  test.skip('workerDomainAttachToDomain: only required params', async () => {
    const responsePromise = cloudflare.accounts.workers.domains.workerDomainAttachToDomain(
      '9a7806061c88ada191ed06f989cc3dac',
      {
        environment: 'production',
        hostname: 'foo.example.com',
        service: 'foo',
        zone_id: '593c9c94de529bbbfaac7c53ced0447d',
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
  test.skip('workerDomainAttachToDomain: required and optional params', async () => {
    const response = await cloudflare.accounts.workers.domains.workerDomainAttachToDomain(
      '9a7806061c88ada191ed06f989cc3dac',
      {
        environment: 'production',
        hostname: 'foo.example.com',
        service: 'foo',
        zone_id: '593c9c94de529bbbfaac7c53ced0447d',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('workerDomainListDomains', async () => {
    const responsePromise = cloudflare.accounts.workers.domains.workerDomainListDomains(
      '9a7806061c88ada191ed06f989cc3dac',
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
  test.skip('workerDomainListDomains: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.workers.domains.workerDomainListDomains('9a7806061c88ada191ed06f989cc3dac', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('workerDomainListDomains: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.workers.domains.workerDomainListDomains(
        '9a7806061c88ada191ed06f989cc3dac',
        {
          environment: 'production',
          hostname: 'foo.example.com',
          service: 'foo',
          zone_identifier: '593c9c94de529bbbfaac7c53ced0447d',
          zone_name: 'example.com',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
