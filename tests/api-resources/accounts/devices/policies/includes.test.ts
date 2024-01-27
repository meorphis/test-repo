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

describe('resource includes', () => {
  // skipped: tests are disabled for the time being
  test.skip('devicesGetSplitTunnelIncludeList', async () => {
    const responsePromise = cloudflare.accounts.devices.policies.includes.devicesGetSplitTunnelIncludeList(
      '699d98642c564d2e855e9661899b7252',
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
  test.skip('devicesGetSplitTunnelIncludeList: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.devices.policies.includes.devicesGetSplitTunnelIncludeList(
        '699d98642c564d2e855e9661899b7252',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('devicesGetSplitTunnelIncludeListForADeviceSettingsPolicy', async () => {
    const responsePromise =
      cloudflare.accounts.devices.policies.includes.devicesGetSplitTunnelIncludeListForADeviceSettingsPolicy(
        '699d98642c564d2e855e9661899b7252',
        'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
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
  test.skip('devicesGetSplitTunnelIncludeListForADeviceSettingsPolicy: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.devices.policies.includes.devicesGetSplitTunnelIncludeListForADeviceSettingsPolicy(
        '699d98642c564d2e855e9661899b7252',
        'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('devicesSetSplitTunnelIncludeList: only required params', async () => {
    const responsePromise = cloudflare.accounts.devices.policies.includes.devicesSetSplitTunnelIncludeList(
      '699d98642c564d2e855e9661899b7252',
      [
        { address: '192.0.2.0/24', description: 'Include testing domains from the tunnel' },
        { address: '192.0.2.0/24', description: 'Include testing domains from the tunnel' },
        { address: '192.0.2.0/24', description: 'Include testing domains from the tunnel' },
      ],
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
  test.skip('devicesSetSplitTunnelIncludeList: required and optional params', async () => {
    const response = await cloudflare.accounts.devices.policies.includes.devicesSetSplitTunnelIncludeList(
      '699d98642c564d2e855e9661899b7252',
      [
        {
          address: '192.0.2.0/24',
          description: 'Include testing domains from the tunnel',
          host: '*.example.com',
        },
        {
          address: '192.0.2.0/24',
          description: 'Include testing domains from the tunnel',
          host: '*.example.com',
        },
        {
          address: '192.0.2.0/24',
          description: 'Include testing domains from the tunnel',
          host: '*.example.com',
        },
      ],
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('devicesSetSplitTunnelIncludeListForADeviceSettingsPolicy: only required params', async () => {
    const responsePromise =
      cloudflare.accounts.devices.policies.includes.devicesSetSplitTunnelIncludeListForADeviceSettingsPolicy(
        '699d98642c564d2e855e9661899b7252',
        'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        [
          { address: '192.0.2.0/24', description: 'Include testing domains from the tunnel' },
          { address: '192.0.2.0/24', description: 'Include testing domains from the tunnel' },
          { address: '192.0.2.0/24', description: 'Include testing domains from the tunnel' },
        ],
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
  test.skip('devicesSetSplitTunnelIncludeListForADeviceSettingsPolicy: required and optional params', async () => {
    const response =
      await cloudflare.accounts.devices.policies.includes.devicesSetSplitTunnelIncludeListForADeviceSettingsPolicy(
        '699d98642c564d2e855e9661899b7252',
        'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        [
          {
            address: '192.0.2.0/24',
            description: 'Include testing domains from the tunnel',
            host: '*.example.com',
          },
          {
            address: '192.0.2.0/24',
            description: 'Include testing domains from the tunnel',
            host: '*.example.com',
          },
          {
            address: '192.0.2.0/24',
            description: 'Include testing domains from the tunnel',
            host: '*.example.com',
          },
        ],
      );
  });
});
