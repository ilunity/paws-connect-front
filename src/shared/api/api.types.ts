import { AxiosResponse } from 'axios';
import { GetServerSidePropsContext } from 'next';

export type ApiRequestFnResponse<DataType> = Promise<AxiosResponse<DataType>>;

export interface ApiPrivateRequestOptions {
  request?: GetServerSidePropsContext['req'];
}

export type ApiPublicRequestFn<ReturnType, DataType = void> =
  (data: DataType) => ApiRequestFnResponse<ReturnType>;

export type ApiProtectedRequestFn<ReturnType, DataType = void> =
  (data: DataType, options?: ApiPrivateRequestOptions) => ApiRequestFnResponse<ReturnType>;

export interface IApiError {
  status: number;
  message: string;
}
