import React from 'react';
import { SheltersDashboardProps } from './SheltersDashboard.types';
import { GetServerSideProps } from 'next';
import { executeRequest } from '@shared/api';
import { shelterService } from '@entities/shelter';
import { getAuth } from '@clerk/nextjs/server';
import { Layout } from '@widgets/layout';
import { SheltersProfileSection } from '@widgets/shelters-profile-section';

export const getServerSideProps: GetServerSideProps<SheltersDashboardProps> = async ({ req }) => {
  const { userId } = getAuth(req);
  const response = await executeRequest(() => shelterService.getByUser(userId as string, { request: req }));

  const resultShelters = response.data || [];

  return {
    props: {
      shelters: resultShelters,
    },
  };
};

export const SheltersDashboard: React.FC<SheltersDashboardProps> = ({ shelters }) => {
  return (
    <Layout>
      <SheltersProfileSection shelters={ shelters } />
    </Layout>
  );
};
