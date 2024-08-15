import React from 'react';
import { CreateAnimalSectionProps } from './CreateAnimalSection.types';
import { Section } from '@shared/ui';
import { CreateAnimalForm } from '@features/create-animal';
import { message } from 'antd';
import { CREATE_ANIMAL_FORM_TYPES } from '@features/create-animal/ui/CreateAnimalForm/CreateAnimalForm.types';

export const CreateAnimalSection: React.FC<CreateAnimalSectionProps> = ({ shelterId }) => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <Section title={ 'Добавить питомца' }>
      {contextHolder}
      <CreateAnimalForm
        type={CREATE_ANIMAL_FORM_TYPES.CREATE}
        shelterId={ shelterId }
        onSuccess={ () => {
          messageApi.success('Питомец успешно добавлен!');
        } }
      />
    </Section>
  );
};
