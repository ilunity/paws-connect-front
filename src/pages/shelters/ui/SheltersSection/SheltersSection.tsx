import React from 'react';
import { SheltersSectionProps } from './SheltersSection.types';
import { SheltersList } from '@entities/shelter';
import { Section } from '@shared/ui';
import { useRouter } from 'next/router';

export const SheltersSection: React.FC<SheltersSectionProps> = ({ shelters }) => {
  const router = useRouter();

  const goToShelter = (shelterId: string) => {
    router.push({ pathname: `/shelters/${shelterId}` });
  };

  return (
    <Section title={ 'Приюты' }>
      <SheltersList
        shelters={ shelters }
        onClick={ goToShelter }
      />
    </Section>
  );
};
