import React from 'react';
import { AnimalsSectionProps } from './AnimalsSection.types';
import { Section } from '@shared/ui';
import { AnimalsList } from '@entities/animal';

export const AnimalsSection: React.FC<AnimalsSectionProps> = ({animals}) => {
  return (
    <Section title={ 'Питомцы' }>
      <AnimalsList animals={ animals }/>
    </Section>
  );
};
