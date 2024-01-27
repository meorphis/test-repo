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

describe('resource downloads', () => {
  // skipped: tests are disabled for the time being
  test.skip('radarPostDatasetDownload: only required params', async () => {
    const responsePromise = cloudflare.radar.datasets.downloads.radarPostDatasetDownload({ datasetId: 3 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('radarPostDatasetDownload: required and optional params', async () => {
    const response = await cloudflare.radar.datasets.downloads.radarPostDatasetDownload({
      datasetId: 3,
      format: 'JSON',
    });
  });
});
