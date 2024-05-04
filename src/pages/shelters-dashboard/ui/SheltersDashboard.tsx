import React from 'react';
import { SheltersDashboardProps } from './SheltersDashboard.types';
import { GetServerSideProps } from 'next';
import { executeRequest } from '@shared/api';
import { IShelter, shelterService } from '@entities/shelter';
import { getAuth } from '@clerk/nextjs/server';
import { Layout } from '@widgets/layout';
import { ShelterSection } from '@pages/shelter/ui/ShelterSection';
import { CreateAnimalSection } from '@pages/shelters-dashboard/ui/CreateAnimalSection';

export const getServerSideProps: GetServerSideProps<SheltersDashboardProps> = async ({ req }) => {
  const { userId } = getAuth(req);
  const response = await executeRequest(() => shelterService.getByUser(userId as string));

  if (response.error) {
    throw new Error(response.error);
  }

  return {
    props: {
      shelter: response.data as IShelter,
    },
  };
};

export const SheltersDashboard: React.FC<SheltersDashboardProps> = ({ shelter }) => {
  return (
    <Layout>
      <ShelterSection shelter={ shelter } />
      <CreateAnimalSection shelterId={ shelter.id } />
    </Layout>
  );
};
