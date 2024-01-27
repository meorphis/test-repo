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

describe('resource pools', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = cloudflare.user.loadBalancers.pools.retrieve('17b5962d775c646f3f9725cbc7a53df4');
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
      cloudflare.user.loadBalancers.pools.retrieve('17b5962d775c646f3f9725cbc7a53df4', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.user.loadBalancers.pools.update('17b5962d775c646f3f9725cbc7a53df4', {
      name: 'primary-dc-1',
      origins: [{}, {}, {}],
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
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.user.loadBalancers.pools.update('17b5962d775c646f3f9725cbc7a53df4', {
      name: 'primary-dc-1',
      origins: [
        {
          address: '0.0.0.0',
          enabled: true,
          header: { Host: ['example.com', 'example.com', 'example.com'] },
          name: 'app-server-1',
          virtual_network_id: 'a5624d4e-044a-4ff0-b3e1-e2465353d4b4',
          weight: 0.6,
        },
        {
          address: '0.0.0.0',
          enabled: true,
          header: { Host: ['example.com', 'example.com', 'example.com'] },
          name: 'app-server-1',
          virtual_network_id: 'a5624d4e-044a-4ff0-b3e1-e2465353d4b4',
          weight: 0.6,
        },
        {
          address: '0.0.0.0',
          enabled: true,
          header: { Host: ['example.com', 'example.com', 'example.com'] },
          name: 'app-server-1',
          virtual_network_id: 'a5624d4e-044a-4ff0-b3e1-e2465353d4b4',
          weight: 0.6,
        },
      ],
      check_regions: ['WEU', 'ENAM'],
      description: 'Primary data center - Provider XYZ',
      enabled: false,
      latitude: 0,
      load_shedding: {
        default_percent: 0,
        default_policy: 'random',
        session_percent: 0,
        session_policy: 'hash',
      },
      longitude: 0,
      minimum_origins: 0,
      monitor: {},
      notification_email: 'someone@example.com,sometwo@example.com',
      notification_filter: {
        origin: { disable: true, healthy: true },
        pool: { disable: true, healthy: false },
      },
      origin_steering: { policy: 'random' },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.user.loadBalancers.pools.delete('17b5962d775c646f3f9725cbc7a53df4');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('loadBalancerPoolsCreatePool: only required params', async () => {
    const responsePromise = cloudflare.user.loadBalancers.pools.loadBalancerPoolsCreatePool({
      name: 'primary-dc-1',
      origins: [{}, {}, {}],
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
  test.skip('loadBalancerPoolsCreatePool: required and optional params', async () => {
    const response = await cloudflare.user.loadBalancers.pools.loadBalancerPoolsCreatePool({
      name: 'primary-dc-1',
      origins: [
        {
          address: '0.0.0.0',
          enabled: true,
          header: { Host: ['example.com', 'example.com', 'example.com'] },
          name: 'app-server-1',
          virtual_network_id: 'a5624d4e-044a-4ff0-b3e1-e2465353d4b4',
          weight: 0.6,
        },
        {
          address: '0.0.0.0',
          enabled: true,
          header: { Host: ['example.com', 'example.com', 'example.com'] },
          name: 'app-server-1',
          virtual_network_id: 'a5624d4e-044a-4ff0-b3e1-e2465353d4b4',
          weight: 0.6,
        },
        {
          address: '0.0.0.0',
          enabled: true,
          header: { Host: ['example.com', 'example.com', 'example.com'] },
          name: 'app-server-1',
          virtual_network_id: 'a5624d4e-044a-4ff0-b3e1-e2465353d4b4',
          weight: 0.6,
        },
      ],
      check_regions: ['WEU', 'ENAM'],
      description: 'Primary data center - Provider XYZ',
      enabled: false,
      latitude: 0,
      load_shedding: {
        default_percent: 0,
        default_policy: 'random',
        session_percent: 0,
        session_policy: 'hash',
      },
      longitude: 0,
      minimum_origins: 0,
      monitor: {},
      notification_email: 'someone@example.com,sometwo@example.com',
      notification_filter: {
        origin: { disable: true, healthy: true },
        pool: { disable: true, healthy: false },
      },
      origin_steering: { policy: 'random' },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('loadBalancerPoolsListPools', async () => {
    const responsePromise = cloudflare.user.loadBalancers.pools.loadBalancerPoolsListPools();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('loadBalancerPoolsListPools: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.user.loadBalancers.pools.loadBalancerPoolsListPools({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('loadBalancerPoolsListPools: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.user.loadBalancers.pools.loadBalancerPoolsListPools(
        { monitor: {} },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('loadBalancerPoolsPatchPools', async () => {
    const responsePromise = cloudflare.user.loadBalancers.pools.loadBalancerPoolsPatchPools({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('patch', async () => {
    const responsePromise = cloudflare.user.loadBalancers.pools.patch('17b5962d775c646f3f9725cbc7a53df4', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
