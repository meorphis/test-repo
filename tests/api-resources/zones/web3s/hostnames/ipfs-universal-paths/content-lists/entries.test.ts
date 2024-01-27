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

describe('resource entries', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = cloudflare.zones.web3s.hostnames.ipfsUniversalPaths.contentLists.entries.retrieve(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
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
  test.skip('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.zones.web3s.hostnames.ipfsUniversalPaths.contentLists.entries.retrieve(
        '023e105f4ecef8ad9ca31a8372d0c353',
        '023e105f4ecef8ad9ca31a8372d0c353',
        '023e105f4ecef8ad9ca31a8372d0c353',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.zones.web3s.hostnames.ipfsUniversalPaths.contentLists.entries.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { content: 'QmPZ9gcCEpqKTo6aq61g2nXGUhM4iCL3ewB6LDXZCtioEB', type: 'cid' },
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
    const response = await cloudflare.zones.web3s.hostnames.ipfsUniversalPaths.contentLists.entries.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        content: 'QmPZ9gcCEpqKTo6aq61g2nXGUhM4iCL3ewB6LDXZCtioEB',
        type: 'cid',
        description: 'this is my content list entry',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.zones.web3s.hostnames.ipfsUniversalPaths.contentLists.entries.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
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
  test.skip('web3HostnameCreateIpfsUniversalPathGatewayContentListEntry: only required params', async () => {
    const responsePromise =
      cloudflare.zones.web3s.hostnames.ipfsUniversalPaths.contentLists.entries.web3HostnameCreateIpfsUniversalPathGatewayContentListEntry(
        '023e105f4ecef8ad9ca31a8372d0c353',
        '023e105f4ecef8ad9ca31a8372d0c353',
        { content: 'QmPZ9gcCEpqKTo6aq61g2nXGUhM4iCL3ewB6LDXZCtioEB', type: 'cid' },
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
  test.skip('web3HostnameCreateIpfsUniversalPathGatewayContentListEntry: required and optional params', async () => {
    const response =
      await cloudflare.zones.web3s.hostnames.ipfsUniversalPaths.contentLists.entries.web3HostnameCreateIpfsUniversalPathGatewayContentListEntry(
        '023e105f4ecef8ad9ca31a8372d0c353',
        '023e105f4ecef8ad9ca31a8372d0c353',
        {
          content: 'QmPZ9gcCEpqKTo6aq61g2nXGUhM4iCL3ewB6LDXZCtioEB',
          type: 'cid',
          description: 'this is my content list entry',
        },
      );
  });

  // skipped: tests are disabled for the time being
  test.skip('web3HostnameListIpfsUniversalPathGatewayContentListEntries', async () => {
    const responsePromise =
      cloudflare.zones.web3s.hostnames.ipfsUniversalPaths.contentLists.entries.web3HostnameListIpfsUniversalPathGatewayContentListEntries(
        '023e105f4ecef8ad9ca31a8372d0c353',
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
  test.skip('web3HostnameListIpfsUniversalPathGatewayContentListEntries: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.zones.web3s.hostnames.ipfsUniversalPaths.contentLists.entries.web3HostnameListIpfsUniversalPathGatewayContentListEntries(
        '023e105f4ecef8ad9ca31a8372d0c353',
        '023e105f4ecef8ad9ca31a8372d0c353',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
