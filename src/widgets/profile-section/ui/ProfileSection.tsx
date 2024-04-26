import React from 'react';
import { ProfileSectionProps } from './ProfileSection.types';
import { ProfileCard } from '@entities/user';
import { Section } from '@shared/ui';

export const ProfileSection: React.FC<ProfileSectionProps> = ({user}) => {
  return (
    <Section title={ 'Профиль' }>
      <ProfileCard user={ user }/>
    </Section>
  );
};
