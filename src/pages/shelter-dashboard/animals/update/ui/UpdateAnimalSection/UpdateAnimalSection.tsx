import React from 'react';
import { UpdateAnimalSectionProps } from './UpdateAnimalSection.types';
import { Button, message } from 'antd';
import { Section } from '@shared/ui';
import { CreateAnimalForm } from '@features/create-animal';
import { CREATE_ANIMAL_FORM_TYPES } from '@features/create-animal/ui/CreateAnimalForm/CreateAnimalForm.types';
import { requestMessageHandler } from '@shared/utils/message-handler';
import { executeRequest } from '@shared/api';
import { animalsService } from '@entities/animal';
import { useRouter } from 'next/router';

export const UpdateAnimalSection: React.FC<UpdateAnimalSectionProps> = ({ animal }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const requestHandler = requestMessageHandler(messageApi);
  const router = useRouter();

  const deleteAnimal = async () => {
    const response = await executeRequest(() => animalsService.remove(animal.id));
    requestHandler(response);

    if (response.success) {
      messageApi.success('Питомец удален!')
      router.back();
    }
  };

  return (
    <Section
      title={ 'Редактирование питомца' }
      action={
        <Button
          type={ 'primary' }
          danger
          onClick={ deleteAnimal }
        >
          Удалить питомца
        </Button>
      }
    >
      { contextHolder }
      <CreateAnimalForm
        type={ CREATE_ANIMAL_FORM_TYPES.UPDATE }
        animalId={ animal.id }
        initialValues={ animal }
        onSuccess={ () => {
          messageApi.success('Информация о питомце изменена!');
        } }
      />
    </Section>
  );
};
