import React from 'react';
import { SheltersProfileSectionProps } from './SheltersProfileSection.types';
import { ShelterReference } from '@entities/shelter';
import { useRouter } from 'next/router';
import { Section } from '@shared/ui';
import { Button, Flex } from 'antd';
import { useStyles } from './SheltersProfileSection.styles';

export const SheltersProfileSection: React.FC<SheltersProfileSectionProps> = ({ shelters }) => {
  const { styles } = useStyles();
  const router = useRouter();

  const goToShelterDashboard = (shelterId: string) => {
    router.push({ pathname: `/shelters/${shelterId}/dashboard/info` });
  };

  const goToCreateShelter = () => {
    router.push({ pathname: '/shelters/create' });
  };

  return (
    <Section
      title={ 'Ваши приюты' }
      action={
        <Button
          type={ 'primary' }
          onClick={ goToCreateShelter }
        >
          Добавить приют
        </Button>
      }
    >
      <Flex className={ styles.container }>
        { shelters.map(shelter => (
          <ShelterReference
            key={ shelter.id }
            size={ 'small' }
            shelter={ shelter }
            onClick={ goToShelterDashboard }
          />
        )) }
      </Flex>
    </Section>
  );
};
