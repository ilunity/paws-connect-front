import { GetServerSideProps } from 'next';
import React from 'react';
import { ShelterPageProps } from './ShelterPage.types';
import { executeRequest } from '@shared/api';
import { IShelter, shelterService } from '@entities/shelter';
import { Layout } from '@widgets/layout';
import { ShelterSection } from '@pages/shelter/ui/ShelterSection';
import { animalsService, IAnimal } from '@entities/animal';
import { AnimalsSection } from '@widgets/animals-section';

export const getServerSideProps: GetServerSideProps<ShelterPageProps> = async ({ params, res }) => {
  const shelterId = params?.shelterId as string;

  const shelterResponse = await executeRequest(() => shelterService.getOne(shelterId));
  if (shelterResponse.error) {
    return { notFound: true };
  }

  const animalsResponse = await executeRequest(() => animalsService.getByShelter(shelterId));
  if (animalsResponse.error) {
    throw new Error(animalsResponse.error);
  }

  return {
    props: {
      shelter: shelterResponse.data as IShelter,
      animals: animalsResponse.data as IAnimal[],
    },
  };
};

export const ShelterPage: React.FC<ShelterPageProps> = ({ shelter, animals }) => {
  return (
    <Layout>
      <ShelterSection shelter={ shelter } />
      <AnimalsSection animals={ animals } />
    </Layout>
  );
};
