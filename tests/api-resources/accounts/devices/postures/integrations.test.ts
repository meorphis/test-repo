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

describe('resource integrations', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = cloudflare.accounts.devices.postures.integrations.retrieve(
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
  test.skip('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.devices.postures.integrations.retrieve(
        '699d98642c564d2e855e9661899b7252',
        'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = cloudflare.accounts.devices.postures.integrations.update(
      '699d98642c564d2e855e9661899b7252',
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
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
  test.skip('delete', async () => {
    const responsePromise = cloudflare.accounts.devices.postures.integrations.delete(
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
  test.skip('devicePostureIntegrationsCreateDevicePostureIntegration: only required params', async () => {
    const responsePromise =
      cloudflare.accounts.devices.postures.integrations.devicePostureIntegrationsCreateDevicePostureIntegration(
        '699d98642c564d2e855e9661899b7252',
        {
          config: {
            api_url: 'https://as123.awmdm.com/API',
            auth_url: 'https://na.uemauth.vmwservices.com/connect/token',
            client_id: 'example client id',
            client_secret: 'example client secret',
          },
          interval: '10m',
          name: 'My Workspace One Integration',
          type: 'workspace_one',
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
  test.skip('devicePostureIntegrationsCreateDevicePostureIntegration: required and optional params', async () => {
    const response =
      await cloudflare.accounts.devices.postures.integrations.devicePostureIntegrationsCreateDevicePostureIntegration(
        '699d98642c564d2e855e9661899b7252',
        {
          config: {
            api_url: 'https://as123.awmdm.com/API',
            auth_url: 'https://na.uemauth.vmwservices.com/connect/token',
            client_id: 'example client id',
            client_secret: 'example client secret',
          },
          interval: '10m',
          name: 'My Workspace One Integration',
          type: 'workspace_one',
        },
      );
  });

  // skipped: tests are disabled for the time being
  test.skip('devicePostureIntegrationsListDevicePostureIntegrations', async () => {
    const responsePromise =
      cloudflare.accounts.devices.postures.integrations.devicePostureIntegrationsListDevicePostureIntegrations(
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
  test.skip('devicePostureIntegrationsListDevicePostureIntegrations: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.devices.postures.integrations.devicePostureIntegrationsListDevicePostureIntegrations(
        '699d98642c564d2e855e9661899b7252',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
