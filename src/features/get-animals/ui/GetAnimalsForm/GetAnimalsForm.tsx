import React, { useEffect } from 'react';
import { FieldType, GetAnimalsFormProps } from './GetAnimalsForm.types';
import { AutoComplete, AutoCompleteProps, Button, Form, FormProps, Space } from 'antd';
import { GenderSelect } from '@shared/ui';
import { AnimalTypeSelect } from '@entities/animal';
import { useSearchParamsObject, useUpdateSearchParams } from '@shared/utils';


export const GetAnimalsForm: React.FC<GetAnimalsFormProps> = ({ cities }) => {
  const updateSearchParams = useUpdateSearchParams();
  const params = useSearchParamsObject();
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    updateSearchParams(values);
  };

  useEffect(() => {
    form.setFieldsValue(params);
  }, []);

  const resetParams = () => {
    form.resetFields();
    form.submit();
  };

  const citiesOptions: AutoCompleteProps['options'] = cities.map(city => ({
    label: city,
    value: city,
  }));

  return (
    <Form
      name={ 'shelter-form' }
      style={ { maxWidth: 800 } }
      onFinish={ onFinish }
      autoComplete="off"
      layout={ 'vertical' }
      form={ form }
    >
      <Form.Item<FieldType>
        label="Тип животного"
        name="type"
      >
        <AnimalTypeSelect />
      </Form.Item>
      <Form.Item<FieldType>
        label="Город"
        name="location"
      >
        <AutoComplete
          options={ citiesOptions }
          filterOption={ (inputValue, option) => {
            const value = `${option?.value}`;
            return value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
          } }
        />
      </Form.Item>
      <Form.Item<FieldType>
        label="Пол"
        name="gender"
      >
        <GenderSelect />
      </Form.Item>
      <Space.Compact block>
        <Button style={ { width: '55%' } } type="primary" htmlType="submit">
          Подтвердить
        </Button>
        <Button style={ { width: '45%' } } type="default" htmlType="reset" onClick={ resetParams }>
          Сбросить
        </Button>
      </Space.Compact>
    </Form>
  );
};
