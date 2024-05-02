import React from 'react';
import { Layout } from '@widgets/layout';
import { IShelter, shelterService, SheltersList } from '@entities/shelter';
import { executeRequest } from '@shared/api';
import { GetServerSideProps } from 'next';
import { SheltersProps } from './Shelters.types';
import { SheltersSection } from './SheltersSection';

export const getServerSideProps: GetServerSideProps<SheltersProps> = async () => {
  const response = await executeRequest(shelterService.get);

  if (response.error) {
    throw new Error(response.error);
  }

  return {
    props: {
      shelters: response.data as IShelter[],
    },
  };
};

export const Shelters: React.FC<SheltersProps> = ({ shelters }) => {
  return (
    <Layout>
      <SheltersSection shelters={shelters}/>
    </Layout>
  );
};
