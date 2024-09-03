import { ApiRequestFnResponse } from '@shared/api/api.types';
import { defineAxiosError } from '@shared/api/define-axios-error';

export type IApiResponse<DataType> =
  | {
  data: DataType;
  error: null;
  success: true;
  status: number;
}
  | {
  data: null;
  error: string;
  success: false;
  status: number;
};

export const executeRequest = async <ReturnType>(
  requestFn: () => ApiRequestFnResponse<ReturnType>,
): Promise<IApiResponse<ReturnType>> => {
  try {
    const response = await requestFn();

    if (response.status === 500) {
      return {
        data: null,
        error: 'Ошибка на сервере',
        success: false,
        status: 500,
      };
    }

    return {
      data: response.data,
      error: null,
      success: true,
      status: response.status,
    };
  } catch (error: any) {
    const { status, message } = defineAxiosError(error);
    return {
      data: null,
      error: message,
      success: false,
      status,
    };
  }
};
