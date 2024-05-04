import React from 'react';
import { CreateAnimalFormProps, FieldType } from './CreateAnimalForm.types';
import { Button, Form, FormProps, Input, InputNumber, Select } from 'antd';
import { executeRequest } from '@shared/api';
import { ANIMAL_STATUS, animalsService } from '@entities/animal';
import { UploadImage } from '@shared/ui';

const WRAPPER_COL = { offset: 4, span: 8 };

export const CreateAnimalForm: React.FC<CreateAnimalFormProps> = ({ onSuccess, initialValues, shelterId }) => {
  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    // @ts-ignore
    console.log(values);
    const response = await executeRequest(() => animalsService.create({ ...values, shelterId }));
    onSuccess?.();
    // todo Обработка ошибок
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name={ 'create-animal-form' }
      labelCol={ { span: WRAPPER_COL.offset } }
      style={ { maxWidth: 800 } }
      initialValues={ { initialValues, remember: true } }
      onFinish={ onFinish }
      onFinishFailed={ onFinishFailed }
      autoComplete="on"
    >
      <Form.Item<FieldType>
        label="Имя"
        name="name"
        rules={ [{ required: true, message: 'Введите имя питомца!' }] }
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Описание"
        name="description"
        rules={ [{ required: true, message: 'Введите описание питомца!' }] }
      >
        <Input.TextArea autoSize={ { minRows: 12, maxRows: 24 } } />
      </Form.Item>
      <Form.Item<FieldType>
        label="Возраст"
        name="age"
        rules={ [{ required: true, message: 'Введите город вашего приюта!' }] }
      >
        <InputNumber min={ 0 } max={ 100 } />
      </Form.Item>
      <Form.Item<FieldType>
        label="Порода"
        name="breed"
        rules={ [{ required: true, message: 'Введите породу питомца!' }] }
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Пол"
        name="sex"
        rules={ [{ required: true, message: 'Введите породу питомца!' }] }
      >
        <Select>
          <Select.Option value="male">Мужской</Select.Option>
          <Select.Option value="female">Женский</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item<FieldType>
        label="Изображение"
        name="avatar"
        rules={ [{ required: true, message: 'Выберите изобрлажение питомца!' }] }
      >
        <UploadImage maxMBSize={ 8 } />
      </Form.Item>
      <Form.Item<FieldType>
        label="Статус"
        name="status"
        rules={ [{ required: true, message: 'Выберите статус питомца!' }] }
      >
        <Select>
          <Select.Option value={ ANIMAL_STATUS.FURLOUGH }> На передержке </Select.Option>
          <Select.Option value={ ANIMAL_STATUS.EXPOSED }> Ждет хозяина </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item<FieldType>
        label="Тип"
        name="type"
        rules={ [{ required: true, message: 'Выберите тип питомца!' }] }
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={ WRAPPER_COL }>
        <Button type="primary" htmlType="submit">
          Подтвердить
        </Button>
      </Form.Item>
    </Form>
  );
};
