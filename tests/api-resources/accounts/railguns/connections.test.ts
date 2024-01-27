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

describe('resource connections', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = cloudflare.accounts.railguns.connections.retrieve(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'e928d310693a83094309acf9ead50448',
      'c4a7362d577a6c3019a474fd6f485821',
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
      cloudflare.accounts.railguns.connections.retrieve(
        '023e105f4ecef8ad9ca31a8372d0c353',
        'e928d310693a83094309acf9ead50448',
        'c4a7362d577a6c3019a474fd6f485821',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.accounts.railguns.connections.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'e928d310693a83094309acf9ead50448',
      'c4a7362d577a6c3019a474fd6f485821',
      { enabled: true, zone: {} },
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
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.accounts.railguns.connections.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'e928d310693a83094309acf9ead50448',
      'c4a7362d577a6c3019a474fd6f485821',
      { enabled: true, zone: {} },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.accounts.railguns.connections.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'e928d310693a83094309acf9ead50448',
      'c4a7362d577a6c3019a474fd6f485821',
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
  test.skip('railgunConnectionsCreateConnection: only required params', async () => {
    const responsePromise = cloudflare.accounts.railguns.connections.railgunConnectionsCreateConnection(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'e928d310693a83094309acf9ead50448',
      { zone: {} },
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
  test.skip('railgunConnectionsCreateConnection: required and optional params', async () => {
    const response = await cloudflare.accounts.railguns.connections.railgunConnectionsCreateConnection(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'e928d310693a83094309acf9ead50448',
      { zone: {}, enabled: true },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('railgunConnectionsListConnections', async () => {
    const responsePromise = cloudflare.accounts.railguns.connections.railgunConnectionsListConnections(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'e928d310693a83094309acf9ead50448',
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
  test.skip('railgunConnectionsListConnections: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.railguns.connections.railgunConnectionsListConnections(
        '023e105f4ecef8ad9ca31a8372d0c353',
        'e928d310693a83094309acf9ead50448',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('railgunConnectionsListConnections: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.railguns.connections.railgunConnectionsListConnections(
        '023e105f4ecef8ad9ca31a8372d0c353',
        'e928d310693a83094309acf9ead50448',
        { enabled: true, page: 1, per_page: 20 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
