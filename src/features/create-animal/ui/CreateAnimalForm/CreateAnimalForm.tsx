import React from 'react';
import { CREATE_ANIMAL_FORM_TYPES, CreateAnimalFormProps, FieldType } from './CreateAnimalForm.types';
import { Button, Form, FormProps, Input, InputNumber, message, Select } from 'antd';
import { executeRequest } from '@shared/api';
import { ANIMAL_STATUS, animalsService, AnimalTypeSelect } from '@entities/animal';
import { GenderSelect, UploadImage } from '@shared/ui';
import { requestMessageHandler } from '@shared/utils/message-handler';

const WRAPPER_COL = { offset: 4, span: 8 };
const { useForm } = Form;

export const CreateAnimalForm: React.FC<CreateAnimalFormProps> = (
  {
    onSuccess,
    initialValues,
    animalId,
    type,
    shelterId,
  },
) => {
  const [messageApi, contextHolder] = message.useMessage();
  const requestHandler = requestMessageHandler(messageApi);
  const [form] = useForm();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    const response = type === CREATE_ANIMAL_FORM_TYPES.CREATE
      ? await executeRequest(() => animalsService.create({ ...values, shelterId: `${shelterId}` }))
      : await executeRequest(() => animalsService.update({ ...values, animalId: `${animalId}` }));

    requestHandler(response);
    if (response.success) {
      onSuccess?.();

      if (type === CREATE_ANIMAL_FORM_TYPES.CREATE) {
        form.resetFields();
      }
    }
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    messageApi.error(`Failed: ${errorInfo}`);
  };

  const required = type === CREATE_ANIMAL_FORM_TYPES.CREATE;

  let initialTextValues;
  if (type === CREATE_ANIMAL_FORM_TYPES.UPDATE) {
    const { avatar, ...rest } = initialValues as FieldType;
    initialTextValues = rest;
  }

  return (
    <>
      { contextHolder }
      <Form
        name={ 'create-animal-form' }
        labelCol={ { span: WRAPPER_COL.offset } }
        style={ { maxWidth: 800 } }
        initialValues={ initialTextValues }
        onFinish={ onFinish }
        onFinishFailed={ onFinishFailed }
        autoComplete="on"
        form={ form }
      >
        <Form.Item<FieldType>
          label="Имя"
          name="name"
          rules={ [{ required, message: 'Введите имя питомца!' }] }
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Описание"
          name="description"
          rules={ [{ required, message: 'Введите описание питомца!' }] }
        >
          <Input.TextArea autoSize={ { minRows: 12, maxRows: 24 } } />
        </Form.Item>
        <Form.Item<FieldType>
          label="Возраст"
          name="age"
          rules={ [{ required, message: 'Введите возраст питомца!' }] }
        >
          <InputNumber min={ 0 } max={ 100 } />
        </Form.Item>
        <Form.Item<FieldType>
          label="Порода"
          name="breed"
          rules={ [{ required, message: 'Введите породу питомца!' }] }
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Пол"
          name="gender"
          rules={ [{ required, message: 'Выберите пол питомца!' }] }
        >
          <GenderSelect />
        </Form.Item>
        <Form.Item<FieldType>
          label="Изображение"
          name="avatar"
          rules={ [{ required, message: 'Выберите изображение питомца!' }] }
        >
          <UploadImage maxMBSize={ 8 } />
        </Form.Item>
        <Form.Item<FieldType>
          label="Статус"
          name="status"
          rules={ [{ required, message: 'Выберите статус питомца!' }] }
        >
          <Select>
            <Select.Option value={ ANIMAL_STATUS.FURLOUGH }> На передержке </Select.Option>
            <Select.Option value={ ANIMAL_STATUS.EXPOSED }> Ждет хозяина </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item<FieldType>
          label="Тип"
          name="type"
          rules={ [{ required, message: 'Выберите тип питомца!' }] }
        >
          <AnimalTypeSelect />
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
