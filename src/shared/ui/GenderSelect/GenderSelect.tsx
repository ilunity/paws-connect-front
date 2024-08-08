import React from 'react';
import { Select } from 'antd';
import { GenderSelectProps } from '@shared/ui/GenderSelect/GenderSelect.types';
import { GENDER } from '@shared/types';

export const GenderSelect: React.FC<GenderSelectProps> = ({ value, onChange }) => {
  return (
    <Select value={ value } onChange={ onChange }>
      <Select.Option value={ GENDER.MALE }>Мужской</Select.Option>
      <Select.Option value={ GENDER.FEMALE }>Женский</Select.Option>
    </Select>
  );
};
