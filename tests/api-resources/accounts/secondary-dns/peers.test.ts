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

describe('resource peers', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = cloudflare.accounts.secondaryDNS.peers.retrieve(
      '01a7362d577a6c3019a474fd6f485823',
      '23ff594956f20c2a721606e94745a8aa',
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
      cloudflare.accounts.secondaryDNS.peers.retrieve(
        '01a7362d577a6c3019a474fd6f485823',
        '23ff594956f20c2a721606e94745a8aa',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.accounts.secondaryDNS.peers.update(
      '01a7362d577a6c3019a474fd6f485823',
      '23ff594956f20c2a721606e94745a8aa',
      { name: 'my-peer-1' },
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
    const response = await cloudflare.accounts.secondaryDNS.peers.update(
      '01a7362d577a6c3019a474fd6f485823',
      '23ff594956f20c2a721606e94745a8aa',
      {
        name: 'my-peer-1',
        ip: '192.0.2.53',
        ixfr_enable: false,
        port: 53,
        tsig_id: '69cd1e104af3e6ed3cb344f263fd0d5a',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.accounts.secondaryDNS.peers.delete(
      '01a7362d577a6c3019a474fd6f485823',
      '23ff594956f20c2a721606e94745a8aa',
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
  test.skip('secondaryDNSPeerCreatePeer: only required params', async () => {
    const responsePromise = cloudflare.accounts.secondaryDNS.peers.secondaryDNSPeerCreatePeer(
      '01a7362d577a6c3019a474fd6f485823',
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
  test.skip('secondaryDNSPeerCreatePeer: required and optional params', async () => {
    const response = await cloudflare.accounts.secondaryDNS.peers.secondaryDNSPeerCreatePeer(
      '01a7362d577a6c3019a474fd6f485823',
      {},
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('secondaryDNSPeerListPeers', async () => {
    const responsePromise = cloudflare.accounts.secondaryDNS.peers.secondaryDNSPeerListPeers(
      '01a7362d577a6c3019a474fd6f485823',
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
  test.skip('secondaryDNSPeerListPeers: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.secondaryDNS.peers.secondaryDNSPeerListPeers('01a7362d577a6c3019a474fd6f485823', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
