import React from 'react';
import { CreateAnimalSectionProps } from './CreateAnimalSection.types';
import { useStyles } from './CreateAnimalSection.styles';
import { Section } from '@shared/ui';
import { CreateAnimalForm } from '@features/create-animal';
import { useRouter } from 'next/router';

export const CreateAnimalSection: React.FC<CreateAnimalSectionProps> = ({ shelterId }) => {
  const { styles } = useStyles();

  return (
    <Section title={ 'Добавить питомца' }>
      <CreateAnimalForm
        shelterId={ shelterId }
      />
    </Section>
  );
};
