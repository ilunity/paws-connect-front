import React from 'react';
import { CreateAnimalSectionProps } from './CreateAnimalSection.types';
import { Section } from '@shared/ui';
import { CreateAnimalForm } from '@features/create-animal';

export const CreateAnimalSection: React.FC<CreateAnimalSectionProps> = ({ shelterId }) => {
  return (
    <Section title={ 'Добавить питомца' }>
      <CreateAnimalForm
        shelterId={ shelterId }
      />
    </Section>
  );
};
