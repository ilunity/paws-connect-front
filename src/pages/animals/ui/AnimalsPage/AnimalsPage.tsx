import React, { useState } from 'react';
import { AnimalsPageProps } from './AnimalsPage.types';
import { useStyles } from './AnimalsPage.styles';
import { Layout } from '@widgets/layout';
import { AnimalsSection } from '@widgets/animals-section';
import { GetServerSideProps } from 'next';
import { executeRequest } from '@shared/api';
import { animalsService, IAnimal } from '@entities/animal';
import { GetAnimalsSection } from '../GetAnimalSection';
import { Flex } from 'antd';
import { shelterService } from '@entities/shelter';
import { IGetAnimalsParams, IGetPaginatedAnimalsParams } from '@entities/animal/api/types';
import { useResponsive } from 'antd-style';
import Head from 'next/head';
import { QueryParamsPagination } from '@shared/ui';

export const getServerSideProps: GetServerSideProps<AnimalsPageProps> = async ({ query }) => {
  const animalsCountResponse = await executeRequest(() => animalsService.getCount(query as IGetAnimalsParams));
  if (animalsCountResponse.error) {
    throw new Error(animalsCountResponse.error);
  }
  const animalsCount = animalsCountResponse.data as number;

  const animalsResponse = await executeRequest(() => animalsService.get(query as unknown as IGetPaginatedAnimalsParams));
  if (animalsResponse.error) {
    return { notFound: true };
  }
  const paginatedAnimals = animalsResponse.data as IAnimal[];

  const citiesResponse = await executeRequest(shelterService.getCities);
  if (citiesResponse.error) {
    throw new Error(citiesResponse.error);
  }
  const sheltersCities = citiesResponse.data as string[];

  return {
    props: {
      paginatedAnimals,
      animalsCount,
      sheltersCities,
    },
  };
};

export const AnimalsPage: React.FC<AnimalsPageProps> = ({ paginatedAnimals, animalsCount, sheltersCities }) => {
  const [isFormModalOpen, setIsFormModalOpen] = useState<boolean>(false);
  const { styles } = useStyles();
  const { md } = useResponsive();
  const isFormModal = !md;

  const openFormModal = () => setIsFormModalOpen(true);
  const closeFormModal = () => setIsFormModalOpen(false);

  return (
    <>
      <Head>
        <title>
          Поиск питомцев
        </title>
      </Head>
      <Layout>
        <Flex className={ styles.container }>
          <GetAnimalsSection
            sheltersCities={ sheltersCities }
            isModalForm={ isFormModal }
            isFormModalOpen={ isFormModalOpen }
            closeFormModal={ closeFormModal }
          />
          <Flex className={ styles.animalsBlock }>
            <AnimalsSection
              animals={ paginatedAnimals }
              showOpenFormModalButton={ isFormModal }
              openFormModal={ openFormModal }
            />
            <QueryParamsPagination elementsCount={ animalsCount } />
          </Flex>
        </Flex>
      </Layout>
    </>
  );
};
