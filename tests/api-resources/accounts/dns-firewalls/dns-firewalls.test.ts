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

describe('resource dnsFirewalls', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = cloudflare.accounts.dnsFirewalls.retrieve(
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
      cloudflare.accounts.dnsFirewalls.retrieve(
        '023e105f4ecef8ad9ca31a8372d0c353',
        '023e105f4ecef8ad9ca31a8372d0c353',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.accounts.dnsFirewalls.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        deprecate_any_requests: true,
        dns_firewall_ips: ['203.0.113.1', '203.0.113.254', '2001:DB8:AB::CF', '2001:DB8:CD::CF'],
        ecs_fallback: false,
        maximum_cache_ttl: 900,
        minimum_cache_ttl: 60,
        name: 'My Awesome DNS Firewall cluster',
        upstream_ips: ['192.0.2.1', '198.51.100.1', '2001:DB8:100::CF'],
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
    const response = await cloudflare.accounts.dnsFirewalls.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        deprecate_any_requests: true,
        dns_firewall_ips: ['203.0.113.1', '203.0.113.254', '2001:DB8:AB::CF', '2001:DB8:CD::CF'],
        ecs_fallback: false,
        maximum_cache_ttl: 900,
        minimum_cache_ttl: 60,
        name: 'My Awesome DNS Firewall cluster',
        upstream_ips: ['192.0.2.1', '198.51.100.1', '2001:DB8:100::CF'],
        attack_mitigation: {
          enabled: true,
          only_when_origin_unhealthy: {},
          only_when_upstream_unhealthy: false,
        },
        negative_cache_ttl: 900,
        origin_ips: {},
        ratelimit: 600,
        retries: 2,
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.accounts.dnsFirewalls.delete(
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
  test.skip('dnsFirewallCreateDNSFirewallCluster: only required params', async () => {
    const responsePromise = cloudflare.accounts.dnsFirewalls.dnsFirewallCreateDNSFirewallCluster(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        name: 'My Awesome DNS Firewall cluster',
        upstream_ips: ['192.0.2.1', '198.51.100.1', '2001:DB8:100::CF'],
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
  test.skip('dnsFirewallCreateDNSFirewallCluster: required and optional params', async () => {
    const response = await cloudflare.accounts.dnsFirewalls.dnsFirewallCreateDNSFirewallCluster(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        name: 'My Awesome DNS Firewall cluster',
        upstream_ips: ['192.0.2.1', '198.51.100.1', '2001:DB8:100::CF'],
        attack_mitigation: {
          enabled: true,
          only_when_origin_unhealthy: {},
          only_when_upstream_unhealthy: false,
        },
        deprecate_any_requests: true,
        ecs_fallback: false,
        maximum_cache_ttl: 900,
        minimum_cache_ttl: 60,
        negative_cache_ttl: 900,
        origin_ips: {},
        ratelimit: 600,
        retries: 2,
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('dnsFirewallListDNSFirewallClusters', async () => {
    const responsePromise = cloudflare.accounts.dnsFirewalls.dnsFirewallListDNSFirewallClusters(
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
  test.skip('dnsFirewallListDNSFirewallClusters: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.dnsFirewalls.dnsFirewallListDNSFirewallClusters(
        '023e105f4ecef8ad9ca31a8372d0c353',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('dnsFirewallListDNSFirewallClusters: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.dnsFirewalls.dnsFirewallListDNSFirewallClusters(
        '023e105f4ecef8ad9ca31a8372d0c353',
        { page: 1, per_page: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
