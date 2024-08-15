import React from 'react';
import { SheltersProfileSectionProps } from './SheltersProfileSection.types';
import { ShelterReference } from '@entities/shelter';
import { useRouter } from 'next/router';
import { Section } from '@shared/ui';
import { Flex } from 'antd';
import { useStyles } from './SheltersProfileSection.styles';

export const SheltersProfileSection: React.FC<SheltersProfileSectionProps> = ({ shelters }) => {
  const { styles } = useStyles();
  const router = useRouter();

  const goToShelterDashboard = (shelterId: string) => {
    router.push({ pathname: `/shelters/${shelterId}/dashboard/info` });
  };

  return (
    <Section title={ 'Ваши приюты' }>
      { shelters.map(shelter => (
        <Flex className={ styles.container }>
          <ShelterReference
            size={ 'small' }
            shelter={ shelter }
            onClick={ goToShelterDashboard }
          />
        </Flex>
      )) }
    </Section>
  );
};
