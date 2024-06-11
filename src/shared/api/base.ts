import axios, { AxiosResponse } from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST,
  headers: {
    'Content-type': 'application/json',
  },
});

api.interceptors.response.use((response: AxiosResponse) => {
  if (
    response.data &&
    response.headers['content-type'] === 'application/json'
  ) {
    response.data = camelizeKeys(response.data);
  }

  return response;
});

api.interceptors.request.use((config) => {
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
});

export { api };
