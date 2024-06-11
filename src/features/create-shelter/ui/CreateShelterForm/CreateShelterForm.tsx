import React from 'react';
import { Button, Form, FormProps, Input, message, Typography } from 'antd';
import { executeRequest } from '@shared/api';
import { shelterService } from '@entities/shelter';
import { useAuth } from '@clerk/nextjs';
import { CREATE_SHELTER_FORM_TYPES, CreateShelterFormProps, FieldType } from './CreateShelterForm.types';
import { requestMessageHandler } from '@shared/utils/message-handler';


const WRAPPER_COL = { offset: 4, span: 8 };

export const CreateShelterForm: React.FC<CreateShelterFormProps> = (
  {
    onSuccess,
    initialValues,
    type,
    shelterId,
  },
) => {
  const auth = useAuth();
  const userId = auth.userId as string;
  const [messageApi, contextHolder] = message.useMessage();
  const requestHandler = requestMessageHandler(messageApi);

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    const response = type === CREATE_SHELTER_FORM_TYPES.CREATE
      ? await executeRequest(() => shelterService.create({ ...values, userId }))
      : await executeRequest(() => shelterService.update({ ...values, shelterId }));

    requestHandler(response);
    if (response.success) {
      onSuccess?.();
    }
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    messageApi.error(`Failed: ${errorInfo}`);
  };

  const required = type === CREATE_SHELTER_FORM_TYPES.CREATE;

  return (
    <>
      { contextHolder }
      <Form
        name={ 'shelter-form' }
        labelCol={ { span: WRAPPER_COL.offset } }
        style={ { maxWidth: 800 } }
        initialValues={ { initialValues, remember: true } }
        onFinish={ onFinish }
        onFinishFailed={ onFinishFailed }
        autoComplete="off"
      >
        <Form.Item wrapperCol={ { offset: WRAPPER_COL.offset } }>
          <Typography.Title level={ 2 }>
            { type === CREATE_SHELTER_FORM_TYPES.CREATE
              ? 'Создать приют'
              : 'Редактировать информацию о приюте'
            }
          </Typography.Title>
        </Form.Item>
        <Form.Item<FieldType>
          label="Название"
          name="name"
          rules={ [{ required, message: 'Введите название вашего приюта!' }] }
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Описание"
          name="description"
          rules={ [{ required, message: 'Введите описание вашего приюта!' }] }
        >
          <Input.TextArea autoSize={ { minRows: 12, maxRows: 24 } } />
        </Form.Item>
        <Form.Item<FieldType>
          label="Город"
          name="location"
          rules={ [{ required, message: 'Введите город вашего приюта!' }] }
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Номер телефона"
          name="tel"
          rules={ [{ required, message: 'Введите номер телефона!' }] }
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={ WRAPPER_COL }>
          <Button type="primary" htmlType="submit">
            Подтвердить
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
