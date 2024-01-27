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

describe('resource invites', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = cloudflare.organizations.invites.retrieve(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '4f5f0c14a2a41d5063dd301b2f829f04',
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
      cloudflare.organizations.invites.retrieve(
        '023e105f4ecef8ad9ca31a8372d0c353',
        '4f5f0c14a2a41d5063dd301b2f829f04',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = cloudflare.organizations.invites.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '4f5f0c14a2a41d5063dd301b2f829f04',
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
    const responsePromise = cloudflare.organizations.invites.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '4f5f0c14a2a41d5063dd301b2f829f04',
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
  test.skip('organizationInvitesCreateInvitation: only required params', async () => {
    const responsePromise = cloudflare.organizations.invites.organizationInvitesCreateInvitation(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        invited_member_email: 'user@example.com',
        roles: [{ id: '5a7805061c76ada191ed06f989cc3dac' }, { id: '9a7806061c88ada191ed06f989cc3dac' }],
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
  test.skip('organizationInvitesCreateInvitation: required and optional params', async () => {
    const response = await cloudflare.organizations.invites.organizationInvitesCreateInvitation(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        invited_member_email: 'user@example.com',
        roles: [{ id: '5a7805061c76ada191ed06f989cc3dac' }, { id: '9a7806061c88ada191ed06f989cc3dac' }],
        auto_accept: true,
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('organizationInvitesListInvitations', async () => {
    const responsePromise = cloudflare.organizations.invites.organizationInvitesListInvitations(
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
  test.skip('organizationInvitesListInvitations: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.organizations.invites.organizationInvitesListInvitations(
        '023e105f4ecef8ad9ca31a8372d0c353',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
