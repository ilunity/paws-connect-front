import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';

export const camelizeInterceptor = (response: AxiosResponse) => {
  if (
    response.data &&
    response.headers['content-type'] === 'application/json'
  ) {
    response.data = camelizeKeys(response.data);
  }

  return response;
};

export const decamelizeInterceptor = (config: InternalAxiosRequestConfig) => {
  const newConfig = { ...config };
  newConfig.url = `${config.url}`;

  if (newConfig.headers['Content-Type'] === 'multipart/form-data') {
    return newConfig;
  }

  if (config.params) {
    newConfig.params = decamelizeKeys(config.params);
  }

  if (config.data) {
    newConfig.data = decamelizeKeys(config.data);
  }

  return newConfig;
};
