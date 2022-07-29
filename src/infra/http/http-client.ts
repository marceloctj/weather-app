import axios, { AxiosResponse } from 'axios';

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: any;
  params?: any;
};

export type HttpMethod = 'post' | 'get' | 'put' | 'delete';

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  body?: T;
};

export class HttpClient {
  constructor(
    private baseURL?: string,
    private defaultOptions?: Partial<HttpRequest>,
  ) {}

  async request<R = any>(data: HttpRequest): Promise<HttpResponse<R>> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await axios.request<R>({
        baseURL: this.baseURL,
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
        params: { ...this.defaultOptions?.params, ...data.params },
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }
    return {
      statusCode: axiosResponse?.status,
      body: axiosResponse?.data,
    };
  }
}
