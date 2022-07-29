import { faker } from '@faker-js/faker';
import mockAxios from 'jest-mock-axios';
import { HttpClient, HttpStatusCode } from './http-client';

jest.mock('axios');

describe('HttpClient', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it('should be defined', () => {
    expect(HttpClient).toBeDefined();
  });

  it('should be return a success request', async () => {
    const client = new HttpClient();

    const data = faker.datatype.array(5);

    mockAxios.request.mockResolvedValueOnce({
      status: HttpStatusCode.ok,
      data,
    });

    await expect(
      client.request({
        method: 'get',
        url: faker.internet.url(),
      }),
    ).resolves.toMatchObject({ statusCode: HttpStatusCode.ok, body: data });
  });

  it('should be return a error request', async () => {
    const client = new HttpClient();

    mockAxios.request.mockRejectedValueOnce({
      response: {
        status: HttpStatusCode.serverError,
        data: null,
      },
    });

    await expect(
      client.request({
        method: 'get',
        url: faker.internet.url(),
      }),
    ).resolves.toMatchObject({
      statusCode: HttpStatusCode.serverError,
      body: null,
    });
  });
});
