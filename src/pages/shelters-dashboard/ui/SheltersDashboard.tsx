import React from 'react';
import { SheltersDashboardProps } from './SheltersDashboard.types';
import { useStyles } from './SheltersDashboard.styles';
import { GetServerSideProps } from 'next';
import { executeRequest } from '@shared/api';
import { IShelter, shelterService } from '@entities/shelter';
import { getAuth } from '@clerk/nextjs/server';
import { useRouter } from 'next/router';
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
  const { styles } = useStyles();
  const router = useRouter();

  return (
    <Layout>
      <ShelterSection shelter={ shelter } />
      <CreateAnimalSection shelterId={ shelter.id } />
    </Layout>
  );
};
