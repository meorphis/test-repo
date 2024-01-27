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

describe('resource summaries', () => {
  // skipped: tests are disabled for the time being
  test.skip('spectrumAnalyticsSummaryGetAnalyticsSummary', async () => {
    const responsePromise =
      cloudflare.zones.spectrums.analytics.events.summaries.spectrumAnalyticsSummaryGetAnalyticsSummary(
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
  test.skip('spectrumAnalyticsSummaryGetAnalyticsSummary: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.zones.spectrums.analytics.events.summaries.spectrumAnalyticsSummaryGetAnalyticsSummary(
        '023e105f4ecef8ad9ca31a8372d0c353',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('spectrumAnalyticsSummaryGetAnalyticsSummary: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.zones.spectrums.analytics.events.summaries.spectrumAnalyticsSummaryGetAnalyticsSummary(
        '023e105f4ecef8ad9ca31a8372d0c353',
        {
          dimensions: ['event', 'appID'],
          filters: 'event==disconnect%20AND%20coloName!=SFO',
          metrics: ['count', 'bytesIngress'],
          since: '2014-01-02T02:20:00Z',
          sort: ['+count', '-bytesIngress'],
          until: '2014-01-02T03:20:00Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
