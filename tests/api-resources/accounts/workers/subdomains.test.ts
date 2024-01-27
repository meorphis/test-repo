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

describe('resource subdomains', () => {
  // skipped: tests are disabled for the time being
  test.skip('workerSubdomainCreateSubdomain: only required params', async () => {
    const responsePromise = cloudflare.accounts.workers.subdomains.workerSubdomainCreateSubdomain(
      '023e105f4ecef8ad9ca31a8372d0c353',
      "{'subdomain': 'example-subdomain'}",
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
  test.skip('workerSubdomainCreateSubdomain: required and optional params', async () => {
    const response = await cloudflare.accounts.workers.subdomains.workerSubdomainCreateSubdomain(
      '023e105f4ecef8ad9ca31a8372d0c353',
      "{'subdomain': 'example-subdomain'}",
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('workerSubdomainGetSubdomain', async () => {
    const responsePromise = cloudflare.accounts.workers.subdomains.workerSubdomainGetSubdomain(
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
  test.skip('workerSubdomainGetSubdomain: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.workers.subdomains.workerSubdomainGetSubdomain('023e105f4ecef8ad9ca31a8372d0c353', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
