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

describe('resource routes', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = cloudflare.accounts.magic.routes.retrieve(
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
      cloudflare.accounts.magic.routes.retrieve(
        '023e105f4ecef8ad9ca31a8372d0c353',
        '023e105f4ecef8ad9ca31a8372d0c353',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.accounts.magic.routes.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { nexthop: '203.0.113.1', prefix: '192.0.2.0/24', priority: 0 },
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
    const response = await cloudflare.accounts.magic.routes.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        nexthop: '203.0.113.1',
        prefix: '192.0.2.0/24',
        priority: 0,
        description: 'New route for new prefix 203.0.113.1',
        scope: { colo_names: ['den01', 'den01', 'den01'], colo_regions: ['APAC', 'APAC', 'APAC'] },
        weight: 0,
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.accounts.magic.routes.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      routes: [{}, {}, {}],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await cloudflare.accounts.magic.routes.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      routes: [{}, {}, {}],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteMany', async () => {
    const responsePromise = cloudflare.accounts.magic.routes.deleteMany(
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
  test.skip('magicStaticRoutesCreateRoutes: only required params', async () => {
    const responsePromise = cloudflare.accounts.magic.routes.magicStaticRoutesCreateRoutes(
      '023e105f4ecef8ad9ca31a8372d0c353',
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
  test.skip('magicStaticRoutesCreateRoutes: required and optional params', async () => {
    const response = await cloudflare.accounts.magic.routes.magicStaticRoutesCreateRoutes(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {},
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('magicStaticRoutesListRoutes', async () => {
    const responsePromise = cloudflare.accounts.magic.routes.magicStaticRoutesListRoutes(
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
  test.skip('magicStaticRoutesListRoutes: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.magic.routes.magicStaticRoutesListRoutes('023e105f4ecef8ad9ca31a8372d0c353', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('magicStaticRoutesUpdateManyRoutes: only required params', async () => {
    const responsePromise = cloudflare.accounts.magic.routes.magicStaticRoutesUpdateManyRoutes(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { routes: [{}, {}, {}] },
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
  test.skip('magicStaticRoutesUpdateManyRoutes: required and optional params', async () => {
    const response = await cloudflare.accounts.magic.routes.magicStaticRoutesUpdateManyRoutes(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        routes: [
          {
            description: 'New route for new prefix 203.0.113.1',
            nexthop: '203.0.113.1',
            prefix: '192.0.2.0/24',
            priority: 0,
            scope: { colo_names: ['den01', 'den01', 'den01'], colo_regions: ['APAC', 'APAC', 'APAC'] },
            weight: 0,
          },
          {
            description: 'New route for new prefix 203.0.113.1',
            nexthop: '203.0.113.1',
            prefix: '192.0.2.0/24',
            priority: 0,
            scope: { colo_names: ['den01', 'den01', 'den01'], colo_regions: ['APAC', 'APAC', 'APAC'] },
            weight: 0,
          },
          {
            description: 'New route for new prefix 203.0.113.1',
            nexthop: '203.0.113.1',
            prefix: '192.0.2.0/24',
            priority: 0,
            scope: { colo_names: ['den01', 'den01', 'den01'], colo_regions: ['APAC', 'APAC', 'APAC'] },
            weight: 0,
          },
        ],
      },
    );
  });
});
