import React from 'react';
import { Layout } from '@widgets/layout';
import { HomeSection } from '@pages/home/ui/HomeSection';
import { useStyles } from './HomePage.styles';

export const HomePage: React.FC = () => {
  const { styles } = useStyles();

  return (
    <Layout contentClassName={ styles.layout }>
      <HomeSection />
    </Layout>
  );
};
