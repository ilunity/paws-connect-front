import { IApiResponse } from '@shared/api';
import { MessageInstance } from 'antd/es/message/interface';
import { MessageHandler } from './message-handler.types';

export const requestMessageHandler: MessageHandler = (messageApi: MessageInstance) =>
  <T>(response: IApiResponse<T>, successMessage?: string) => {
    if (!response.success) {
      messageApi.error(response.error);
      return;
    }

    if (successMessage) {
      messageApi.success(successMessage);
    }

    return response.data;
  };
