import React from 'react';
import { AnimalsSectionProps } from './AnimalsSection.types';
import { Section } from '@shared/ui';
import { AnimalsList } from '@entities/animal';
import { useRouter } from 'next/router';
import { Button } from 'antd';
import { BarsOutlined } from '@ant-design/icons';

export const AnimalsSection: React.FC<AnimalsSectionProps> = (
  {
    animals,
    showOpenFormModalButton,
    openFormModal,
  },
) => {
  const router = useRouter();

  const goToAnimal = (animalId: string) => {
    router.push({ pathname: `/animals/${animalId}` });
  };

  return (
    <Section
      title={ 'Питомцы' }
      action={ showOpenFormModalButton && (
        <Button
          onClick={ openFormModal }
          icon={ <BarsOutlined /> }
        >
          Параметры поиска
        </Button>
      ) }
    >
      <AnimalsList animals={ animals } onClick={ goToAnimal } />
    </Section>
  );
};
