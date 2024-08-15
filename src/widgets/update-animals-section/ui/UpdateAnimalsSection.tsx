import React from 'react';
import { UpdateAnimalsSectionProps } from './UpdateAnimalsSection.types';
import { AnimalsList } from '@entities/animal';
import { Section } from '@shared/ui';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

export const UpdateAnimalsSection: React.FC<UpdateAnimalsSectionProps> = ({ animals }) => {
  const router = useRouter();
  const pathname = usePathname();

  const goToUpdateAnimal = (animalId: string) => {
    router.push({ pathname: `${pathname}/${animalId}` });
  };

  return (
    <Section title={ 'Список питомцев приюта:' }>
      <AnimalsList animals={ animals } onClick={ goToUpdateAnimal } />
    </Section>
  );
};
