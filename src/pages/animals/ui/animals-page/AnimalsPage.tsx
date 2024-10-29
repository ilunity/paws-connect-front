import React, { useState } from 'react';
import { AnimalsPageProps } from './AnimalsPage.types';
import { useStyles } from './AnimalsPage.styles';
import { Layout } from '@widgets/layout';
import { AnimalsSection } from '@widgets/animals-section';
import { GetServerSideProps } from 'next';
import { executeRequest } from '@shared/api';
import { animalsService, IAnimal } from '@entities/animal';
import { GetAnimalsSection } from '../get-animal-section';
import { Flex } from 'antd';
import { shelterService } from '@entities/shelter';
import { IGetAnimalsParams } from '@entities/animal/api/types';
import { useResponsive } from 'antd-style';

export const getServerSideProps: GetServerSideProps<AnimalsPageProps> = async ({ query }) => {
  const animalsResponse = await executeRequest(() => animalsService.get(query as IGetAnimalsParams));

  if (animalsResponse.error) {
    return { notFound: true };
  }
  const animals = animalsResponse.data as IAnimal[];

  const citiesResponse = await executeRequest(shelterService.getCities);
  if (citiesResponse.error) {
    throw new Error(citiesResponse.error);
  }
  const sheltersCities = citiesResponse.data as string[];

  return {
    props: {
      animals,
      sheltersCities,
    },
  };
};

export const AnimalsPage: React.FC<AnimalsPageProps> = ({ animals, sheltersCities }) => {
  const { styles } = useStyles();
  const [isFormModalOpen, setIsFormModalOpen] = useState<boolean>(false);
  const { md } = useResponsive();
  const isFormModal = !md;

  const openFormModal = () => setIsFormModalOpen(true);
  const closeFormModal = () => setIsFormModalOpen(false);

  return (
    <Layout>
      <Flex className={ styles.container }>
        <GetAnimalsSection
          sheltersCities={ sheltersCities }
          isModalForm={ isFormModal }
          isFormModalOpen={ isFormModalOpen }
          closeFormModal={ closeFormModal }
        />
        <AnimalsSection
          animals={ animals }
          showOpenFormModalButton={ isFormModal }
          openFormModal={ openFormModal }
        />
      </Flex>
    </Layout>
  );
};
