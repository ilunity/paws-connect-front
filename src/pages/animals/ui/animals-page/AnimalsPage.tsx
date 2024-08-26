import React from 'react';
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

export const getServerSideProps: GetServerSideProps<AnimalsPageProps> = async ({ query }) => {
  // @ts-ignore
  const animalsResponse = await executeRequest(() => animalsService.get(query));

  if (animalsResponse.error) {
    throw new Error(animalsResponse.error);
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

  return (
    <Layout>
      <Flex className={styles.container}>
        <GetAnimalsSection sheltersCities={sheltersCities} />
        <AnimalsSection animals={animals} />
      </Flex>
    </Layout>
  );
};
