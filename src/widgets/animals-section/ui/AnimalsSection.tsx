import React from 'react';
import { AnimalsSectionProps } from './AnimalsSection.types';
import { Section } from '@shared/ui';
import { AnimalsList } from '@entities/animal';
import { useRouter } from 'next/router';

export const AnimalsSection: React.FC<AnimalsSectionProps> = ({ animals }) => {
  const router = useRouter();

  const goToAnimal = (animalId: string) => {
    router.push({ pathname: `/animals/${animalId}` });
  };

  return (
    <Section title={ 'Питомцы' }>
      <AnimalsList animals={ animals } onClick={ goToAnimal } />
    </Section>
  );
};
