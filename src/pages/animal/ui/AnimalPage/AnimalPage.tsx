import React from 'react';
import { AnimalPageProps } from './AnimalPage.types';
import { useStyles } from './AnimalPage.styles';
import { GetServerSideProps } from 'next';
import { executeRequest } from '@shared/api';
import { animalsService, IAnimal } from '@entities/animal';
import { Layout } from '@widgets/layout';
import { AnimalSection } from '../AnimalSection';

export const getServerSideProps: GetServerSideProps<AnimalPageProps> = async ({ params }) => {
  const animalId = params?.id as string;

  const animalResponse = await executeRequest(() => animalsService.getOne(animalId));
  if (animalResponse.error) {
    throw new Error(animalResponse.error);
  }

  return {
    props: {
      animal: animalResponse.data as IAnimal,
    },
  };
};

export const AnimalPage: React.FC<AnimalPageProps> = ({ animal }) => {
  const { styles } = useStyles();

  return (
    <Layout>
      <AnimalSection animal={ animal } />
    </Layout>
  );
};
