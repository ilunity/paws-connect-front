import { InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import { getAuth } from '@clerk/nextjs/server';

export const authTokenInterceptor = async (config: InternalAxiosRequestConfig) => {
  if (config.authorization !== false) {
    const isServerSide = typeof window === 'undefined';
    let token: string | undefined;

    if (isServerSide) {
      const request = config.request;
      if (!request) {
        throw new Error('Не найден параметр request для получения токена clerk');
      }

      const { getToken } = getAuth(request);
      token = await getToken() || undefined;
    } else {
      token = Cookies.get('__session');
    }


    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
  }
  return config;
};
