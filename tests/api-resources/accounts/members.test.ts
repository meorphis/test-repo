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

describe('resource members', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = cloudflare.accounts.members.retrieve({}, '4536bcfad5faccb111b47003c79917fa');
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
      cloudflare.accounts.members.retrieve({}, '4536bcfad5faccb111b47003c79917fa', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.accounts.members.update({}, '4536bcfad5faccb111b47003c79917fa', {
      roles: [
        { id: '3536bcfad5faccb999b47003c79917fb', permissions: {} },
        { id: '3536bcfad5faccb999b47003c79917fb', permissions: {} },
        { id: '3536bcfad5faccb999b47003c79917fb', permissions: {} },
      ],
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
    const response = await cloudflare.accounts.members.update({}, '4536bcfad5faccb111b47003c79917fa', {
      roles: [
        {
          id: '3536bcfad5faccb999b47003c79917fb',
          permissions: {
            analytics: { read: true, write: false },
            billing: { read: true, write: false },
            cache_purge: { read: true, write: false },
            dns: { read: true, write: false },
            dns_records: { read: true, write: false },
            lb: { read: true, write: false },
            logs: { read: true, write: false },
            organization: { read: true, write: false },
            ssl: { read: true, write: false },
            waf: { read: true, write: false },
            zone_settings: { read: true, write: false },
            zones: { read: true, write: false },
          },
        },
        {
          id: '3536bcfad5faccb999b47003c79917fb',
          permissions: {
            analytics: { read: true, write: false },
            billing: { read: true, write: false },
            cache_purge: { read: true, write: false },
            dns: { read: true, write: false },
            dns_records: { read: true, write: false },
            lb: { read: true, write: false },
            logs: { read: true, write: false },
            organization: { read: true, write: false },
            ssl: { read: true, write: false },
            waf: { read: true, write: false },
            zone_settings: { read: true, write: false },
            zones: { read: true, write: false },
          },
        },
        {
          id: '3536bcfad5faccb999b47003c79917fb',
          permissions: {
            analytics: { read: true, write: false },
            billing: { read: true, write: false },
            cache_purge: { read: true, write: false },
            dns: { read: true, write: false },
            dns_records: { read: true, write: false },
            lb: { read: true, write: false },
            logs: { read: true, write: false },
            organization: { read: true, write: false },
            ssl: { read: true, write: false },
            waf: { read: true, write: false },
            zone_settings: { read: true, write: false },
            zones: { read: true, write: false },
          },
        },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.accounts.members.delete({}, '4536bcfad5faccb111b47003c79917fa');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('accountMembersAddMember: only required params', async () => {
    const responsePromise = cloudflare.accounts.members.accountMembersAddMember(
      {},
      {
        email: 'user@example.com',
        roles: [
          '3536bcfad5faccb999b47003c79917fb',
          '3536bcfad5faccb999b47003c79917fb',
          '3536bcfad5faccb999b47003c79917fb',
        ],
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
  test.skip('accountMembersAddMember: required and optional params', async () => {
    const response = await cloudflare.accounts.members.accountMembersAddMember(
      {},
      {
        email: 'user@example.com',
        roles: [
          '3536bcfad5faccb999b47003c79917fb',
          '3536bcfad5faccb999b47003c79917fb',
          '3536bcfad5faccb999b47003c79917fb',
        ],
        status: 'accepted',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('accountMembersListMembers', async () => {
    const responsePromise = cloudflare.accounts.members.accountMembersListMembers({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('accountMembersListMembers: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.members.accountMembersListMembers({}, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('accountMembersListMembers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.members.accountMembersListMembers(
        {},
        { direction: 'desc', order: 'status', page: 1, per_page: 5, status: 'accepted' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
