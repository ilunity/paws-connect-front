import React from 'react';
import { SheltersProfileSectionProps } from './SheltersProfileSection.types';
import { SheltersList } from '@entities/shelter';
import { useRouter } from 'next/router';
import { Section } from '@shared/ui';

export const SheltersProfileSection: React.FC<SheltersProfileSectionProps> = ({ shelters }) => {
  const router = useRouter();

  const goToShelterDashboard = (shelterId: number) => {
    router.push({ pathname: `/shelters/${shelterId}/dashboard/info` });
  };

  return (
    <Section title={ 'Ваши приюты' }>
      <SheltersList
        shelters={ shelters }
        onClick={ goToShelterDashboard }
      />
    </Section>
  );
};
