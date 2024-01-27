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

describe('resource pagerules', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = cloudflare.zones.pagerules.retrieve(
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
      cloudflare.zones.pagerules.retrieve(
        '023e105f4ecef8ad9ca31a8372d0c353',
        '023e105f4ecef8ad9ca31a8372d0c353',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.zones.pagerules.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { actions: [{}, {}, {}], targets: [{ constraint: {}, target: 'url' }] },
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
    const response = await cloudflare.zones.pagerules.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        actions: [
          {
            name: 'forward_url',
            value: {
              type: 'temporary',
              url: 'http://www.example.com/somewhere/$1/astring/$2/anotherstring/$3',
            },
          },
          {
            name: 'forward_url',
            value: {
              type: 'temporary',
              url: 'http://www.example.com/somewhere/$1/astring/$2/anotherstring/$3',
            },
          },
          {
            name: 'forward_url',
            value: {
              type: 'temporary',
              url: 'http://www.example.com/somewhere/$1/astring/$2/anotherstring/$3',
            },
          },
        ],
        targets: [{ constraint: { operator: 'matches', value: '*example.com/images/*' }, target: 'url' }],
        priority: 0,
        status: 'active',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.zones.pagerules.delete(
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
  test.skip('pageRulesCreateAPageRule: only required params', async () => {
    const responsePromise = cloudflare.zones.pagerules.pageRulesCreateAPageRule(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { actions: [{}, {}, {}], targets: [{ constraint: {}, target: 'url' }] },
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
  test.skip('pageRulesCreateAPageRule: required and optional params', async () => {
    const response = await cloudflare.zones.pagerules.pageRulesCreateAPageRule(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        actions: [
          {
            name: 'forward_url',
            value: {
              type: 'temporary',
              url: 'http://www.example.com/somewhere/$1/astring/$2/anotherstring/$3',
            },
          },
          {
            name: 'forward_url',
            value: {
              type: 'temporary',
              url: 'http://www.example.com/somewhere/$1/astring/$2/anotherstring/$3',
            },
          },
          {
            name: 'forward_url',
            value: {
              type: 'temporary',
              url: 'http://www.example.com/somewhere/$1/astring/$2/anotherstring/$3',
            },
          },
        ],
        targets: [{ constraint: { operator: 'matches', value: '*example.com/images/*' }, target: 'url' }],
        priority: 0,
        status: 'active',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('pageRulesListPageRules', async () => {
    const responsePromise = cloudflare.zones.pagerules.pageRulesListPageRules(
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
  test.skip('pageRulesListPageRules: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.zones.pagerules.pageRulesListPageRules('023e105f4ecef8ad9ca31a8372d0c353', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('pageRulesListPageRules: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.zones.pagerules.pageRulesListPageRules(
        '023e105f4ecef8ad9ca31a8372d0c353',
        { direction: 'desc', match: 'any', order: 'status', status: 'active' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
