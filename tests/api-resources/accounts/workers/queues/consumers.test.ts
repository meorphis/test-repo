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

describe('resource consumers', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.accounts.workers.queues.consumers.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'example-queue',
      'example-consumer',
      {
        dead_letter_queue: 'updated-example-dlq',
        environment: 'production',
        script_name: 'example-consumer',
        settings: { batch_size: 100 },
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
    const response = await cloudflare.accounts.workers.queues.consumers.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'example-queue',
      'example-consumer',
      {
        dead_letter_queue: 'updated-example-dlq',
        environment: 'production',
        script_name: 'example-consumer',
        settings: { batch_size: 100 },
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = cloudflare.accounts.workers.queues.consumers.list(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'example-queue',
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
  test.skip('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.accounts.workers.queues.consumers.list('023e105f4ecef8ad9ca31a8372d0c353', 'example-queue', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.accounts.workers.queues.consumers.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'example-queue',
      'example-consumer',
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
  test.skip('queueCreateQueueConsumer: only required params', async () => {
    const responsePromise = cloudflare.accounts.workers.queues.consumers.queueCreateQueueConsumer(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'example-queue',
      {
        dead_letter_queue: 'example-dlq',
        environment: 'production',
        script_name: 'example-consumer',
        settings: { batch_size: 10, max_retries: 3, max_wait_time_ms: 5000 },
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
  test.skip('queueCreateQueueConsumer: required and optional params', async () => {
    const response = await cloudflare.accounts.workers.queues.consumers.queueCreateQueueConsumer(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'example-queue',
      {
        dead_letter_queue: 'example-dlq',
        environment: 'production',
        script_name: 'example-consumer',
        settings: { batch_size: 10, max_retries: 3, max_wait_time_ms: 5000 },
      },
    );
  });
});
