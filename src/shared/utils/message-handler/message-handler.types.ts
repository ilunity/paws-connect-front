import { MessageInstance } from 'antd/es/message/interface';
import { IApiResponse } from '@shared/api';

export type MessageHandler = (messageApi: MessageInstance) => <T>(response: IApiResponse<T>, successMessage?: string) => T | undefined;
