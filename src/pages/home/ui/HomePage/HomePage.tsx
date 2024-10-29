import React from 'react';
import { Layout } from '@widgets/layout';
import { HomeSection } from '@pages/home/ui/HomeSection';
import { useStyles } from './HomePage.styles';
import Head from 'next/head';

export const HomePage: React.FC = () => {
  const { styles } = useStyles();

  return (
    <>
      <Head>
        <title>
          PawsConnect
        </title>
      </Head>
      <Layout contentClassName={ styles.layout }>
        <HomeSection />
      </Layout>
    </>
  );
};
