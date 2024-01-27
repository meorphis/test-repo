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

describe('resource postures', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = cloudflare.accounts.devices.postures.retrieve(
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
      cloudflare.accounts.devices.postures.retrieve(
        '699d98642c564d2e855e9661899b7252',
        'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.accounts.devices.postures.update(
      '699d98642c564d2e855e9661899b7252',
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { name: 'Admin Serial Numbers', type: 'file' },
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
    const response = await cloudflare.accounts.devices.postures.update(
      '699d98642c564d2e855e9661899b7252',
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        name: 'Admin Serial Numbers',
        type: 'file',
        description: 'The rule for admin serial numbers',
        expiration: '1h',
        input: {
          exists: true,
          operating_system: 'mac',
          path: '/bin/cat',
          sha256: 'https://api.us-2.crowdstrike.com',
          thumbprint: '0aabab210bdb998e9cf45da2c9ce352977ab531c681b74cf1e487be1bbe9fe6e',
        },
        match: [{ platform: 'windows' }, { platform: 'windows' }, { platform: 'windows' }],
        schedule: '1h',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.accounts.devices.postures.delete(
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
  test.skip('devicePostureRulesCreateDevicePostureRule: only required params', async () => {
    const responsePromise = cloudflare.accounts.devices.postures.devicePostureRulesCreateDevicePostureRule(
      '699d98642c564d2e855e9661899b7252',
      { name: 'Admin Serial Numbers', type: 'file' },
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
  test.skip('devicePostureRulesCreateDevicePostureRule: required and optional params', async () => {
    const response = await cloudflare.accounts.devices.postures.devicePostureRulesCreateDevicePostureRule(
      '699d98642c564d2e855e9661899b7252',
      {
        name: 'Admin Serial Numbers',
        type: 'file',
        description: 'The rule for admin serial numbers',
        expiration: '1h',
        input: {
          exists: true,
          operating_system: 'mac',
          path: '/bin/cat',
          sha256: 'https://api.us-2.crowdstrike.com',
          thumbprint: '0aabab210bdb998e9cf45da2c9ce352977ab531c681b74cf1e487be1bbe9fe6e',
        },
        match: [{ platform: 'windows' }, { platform: 'windows' }, { platform: 'windows' }],
        schedule: '1h',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('devicePostureRulesListDevicePostureRules', async () => {
    const responsePromise = cloudflare.accounts.devices.postures.devicePostureRulesListDevicePostureRules(
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
  test.skip('devicePostureRulesListDevicePostureRules: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.devices.postures.devicePostureRulesListDevicePostureRules(
        '699d98642c564d2e855e9661899b7252',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
