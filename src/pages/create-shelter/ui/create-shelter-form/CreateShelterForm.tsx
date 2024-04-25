import React from 'react';
import { Button, Form, FormProps, Input, Typography } from 'antd';
import { executeRequest } from '@shared/api';
import { shelterService } from '@entities/shelter';
import { useAuth } from '@clerk/nextjs';
import { CreateShelterFormProps } from '@pages/create-shelter/ui/create-shelter-form/CreateShelterForm.types';

type FieldType = {
  name: string;
  description: string;
  address: string;
  city: string;
};

const WRAPPER_COL = { offset: 6, span: 12 };

export const CreateShelterForm: React.FC<CreateShelterFormProps> = ({ onSuccess }) => {
  const { userId } = useAuth();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    // @ts-ignore
    const response = await executeRequest(() => shelterService.create({ ...values, userId }));
    onSuccess();
    // todo Обработка ошибок
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name={'create-shelter-form'}
      labelCol={{ span: WRAPPER_COL.offset }}
      style={{ maxWidth: 800 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item wrapperCol={WRAPPER_COL}>
        <Typography.Title level={2}>
          Создать приют
        </Typography.Title>
      </Form.Item>
      <Form.Item<FieldType>
        label="Название"
        name="name"
        rules={[{ required: true, message: 'Введите название вашего приюта!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Описание"
        name="description"
        rules={[{ required: true, message: 'Введите описание вашего приюта!' }]}
      >
        <Input.TextArea autoSize={{ minRows: 12, maxRows: 24 }} />
      </Form.Item>
      <Form.Item<FieldType>
        label="Город"
        name="city"
        rules={[{ required: true, message: 'Введите город вашего приюта!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Адрес"
        name="address"
        rules={[{ required: true, message: 'Введите адрес вашего приюта!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={WRAPPER_COL}>
        <Button type="primary" htmlType="submit">
          Подтвердить
        </Button>
      </Form.Item>
    </Form>
  );
};
