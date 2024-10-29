import React from 'react';
import { Layout } from '@widgets/layout';
import { IShelter, shelterService } from '@entities/shelter';
import { executeRequest } from '@shared/api';
import { GetServerSideProps } from 'next';
import { SheltersPageProps } from './SheltersPage.types';
import { SheltersSection } from '../SheltersSection';
import Head from 'next/head';

export const getServerSideProps: GetServerSideProps<SheltersPageProps> = async () => {
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

export const SheltersPage: React.FC<SheltersPageProps> = ({ shelters }) => {
  return (
    <>
      <Head>
        <title>
          Приюты
        </title>
      </Head>
      <Layout>
        <SheltersSection shelters={ shelters } />
      </Layout>
    </>
  );
};
