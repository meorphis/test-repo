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
    const responsePromise = cloudflare.accounts.pages.projects.domains.retrieve(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'this-is-my-project-01',
      'string',
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
      cloudflare.accounts.pages.projects.domains.retrieve(
        '023e105f4ecef8ad9ca31a8372d0c353',
        'this-is-my-project-01',
        'string',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = cloudflare.accounts.pages.projects.domains.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'this-is-my-project-01',
      'string',
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
    const responsePromise = cloudflare.accounts.pages.projects.domains.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'this-is-my-project-01',
      'string',
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
  test.skip('pagesDomainsAddDomain: only required params', async () => {
    const responsePromise = cloudflare.accounts.pages.projects.domains.pagesDomainsAddDomain(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'this-is-my-project-01',
      { name: 'example.com' },
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
  test.skip('pagesDomainsAddDomain: required and optional params', async () => {
    const response = await cloudflare.accounts.pages.projects.domains.pagesDomainsAddDomain(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'this-is-my-project-01',
      { name: 'example.com' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('pagesDomainsGetDomains', async () => {
    const responsePromise = cloudflare.accounts.pages.projects.domains.pagesDomainsGetDomains(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'this-is-my-project-01',
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
  test.skip('pagesDomainsGetDomains: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.pages.projects.domains.pagesDomainsGetDomains(
        '023e105f4ecef8ad9ca31a8372d0c353',
        'this-is-my-project-01',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
