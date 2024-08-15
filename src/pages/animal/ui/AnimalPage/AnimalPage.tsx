import React from 'react';
import { AnimalPageProps } from './AnimalPage.types';
import { GetServerSideProps } from 'next';
import { executeRequest } from '@shared/api';
import { animalsService, IExtendedAnimal } from '@entities/animal';
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
      animal: animalResponse.data as IExtendedAnimal,
    },
  };
};

export const AnimalPage: React.FC<AnimalPageProps> = ({ animal }) => {
  return (
    <Layout>
      <AnimalSection animal={ animal } />
    </Layout>
  );
};
