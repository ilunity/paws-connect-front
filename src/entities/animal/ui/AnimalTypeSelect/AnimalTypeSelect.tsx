import React from 'react';
import { Select } from 'antd';
import { ANIMAL_TYPE } from '@entities/animal';
import { AnimalTypeSelectProps } from './AnimalTypeSelect.types';

export const AnimalTypeSelect: React.FC<AnimalTypeSelectProps> = ({ value, onChange }) => {
  return (
    <Select value={ value } onSelect={ onChange }>
      <Select.Option value={ ANIMAL_TYPE.DOG }>Собака</Select.Option>
      <Select.Option value={ ANIMAL_TYPE.CAT }>Кошка</Select.Option>
    </Select>
  );
};
