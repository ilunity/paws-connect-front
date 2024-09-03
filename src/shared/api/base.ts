import axios from 'axios';
import { authTokenInterceptor, camelizeInterceptor, decamelizeInterceptor } from '@shared/api/interceptors';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST,
  headers: {
    'Content-type': 'application/json',
  },
  authorization: true,
});


api.interceptors.response.use(camelizeInterceptor);
api.interceptors.request.use(decamelizeInterceptor);
api.interceptors.request.use(authTokenInterceptor);


export { api };
