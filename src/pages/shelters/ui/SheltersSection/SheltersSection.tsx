import React from 'react';
import { SheltersSectionProps } from './SheltersSection.types';
import { SheltersList } from '@entities/shelter';
import { Section } from '@shared/ui';

export const SheltersSection: React.FC<SheltersSectionProps> = ({ shelters }) => {
  return (
    <Section title={ 'Приюты' }>
      <SheltersList shelters={ shelters } />
    </Section>
  );
};
