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

describe('resource tsigs', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = cloudflare.accounts.secondaryDNS.tsigs.retrieve(
      '01a7362d577a6c3019a474fd6f485823',
      '69cd1e104af3e6ed3cb344f263fd0d5a',
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
      cloudflare.accounts.secondaryDNS.tsigs.retrieve(
        '01a7362d577a6c3019a474fd6f485823',
        '69cd1e104af3e6ed3cb344f263fd0d5a',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.accounts.secondaryDNS.tsigs.update(
      '01a7362d577a6c3019a474fd6f485823',
      '69cd1e104af3e6ed3cb344f263fd0d5a',
      {
        algo: 'hmac-sha512.',
        name: 'tsig.customer.cf.',
        secret:
          'caf79a7804b04337c9c66ccd7bef9190a1e1679b5dd03d8aa10f7ad45e1a9dab92b417896c15d4d007c7c14194538d2a5d0feffdecc5a7f0e1c570cfa700837c',
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
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.accounts.secondaryDNS.tsigs.update(
      '01a7362d577a6c3019a474fd6f485823',
      '69cd1e104af3e6ed3cb344f263fd0d5a',
      {
        algo: 'hmac-sha512.',
        name: 'tsig.customer.cf.',
        secret:
          'caf79a7804b04337c9c66ccd7bef9190a1e1679b5dd03d8aa10f7ad45e1a9dab92b417896c15d4d007c7c14194538d2a5d0feffdecc5a7f0e1c570cfa700837c',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.accounts.secondaryDNS.tsigs.delete(
      '01a7362d577a6c3019a474fd6f485823',
      '69cd1e104af3e6ed3cb344f263fd0d5a',
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
  test.skip('secondaryDNSTsigCreateTsig: only required params', async () => {
    const responsePromise = cloudflare.accounts.secondaryDNS.tsigs.secondaryDNSTsigCreateTsig(
      '01a7362d577a6c3019a474fd6f485823',
      {
        algo: 'hmac-sha512.',
        name: 'tsig.customer.cf.',
        secret:
          'caf79a7804b04337c9c66ccd7bef9190a1e1679b5dd03d8aa10f7ad45e1a9dab92b417896c15d4d007c7c14194538d2a5d0feffdecc5a7f0e1c570cfa700837c',
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
  test.skip('secondaryDNSTsigCreateTsig: required and optional params', async () => {
    const response = await cloudflare.accounts.secondaryDNS.tsigs.secondaryDNSTsigCreateTsig(
      '01a7362d577a6c3019a474fd6f485823',
      {
        algo: 'hmac-sha512.',
        name: 'tsig.customer.cf.',
        secret:
          'caf79a7804b04337c9c66ccd7bef9190a1e1679b5dd03d8aa10f7ad45e1a9dab92b417896c15d4d007c7c14194538d2a5d0feffdecc5a7f0e1c570cfa700837c',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('secondaryDNSTsigListTsiGs', async () => {
    const responsePromise = cloudflare.accounts.secondaryDNS.tsigs.secondaryDNSTsigListTsiGs(
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
  test.skip('secondaryDNSTsigListTsiGs: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.secondaryDNS.tsigs.secondaryDNSTsigListTsiGs('01a7362d577a6c3019a474fd6f485823', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
