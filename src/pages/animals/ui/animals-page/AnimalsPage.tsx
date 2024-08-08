import React from 'react';
import { AnimalsPageProps } from './AnimalsPage.types';
import { useStyles } from './AnimalsPage.styles';
import { Layout } from '@widgets/layout';
import { AnimalsSection } from '@widgets/animals-section';
import { GetServerSideProps } from 'next';
import { executeRequest } from '@shared/api';
import { animalsService } from '@entities/animal';
import { GetAnimalsSection } from '../get-animal-section';
import { Flex } from 'antd';

export const getServerSideProps: GetServerSideProps<AnimalsPageProps> = async ({ query }) => {
  // @ts-ignore
  const animalsResponse = await executeRequest(() => animalsService.get(query));

  if (animalsResponse.error) {
    throw new Error(animalsResponse.error);
  }
  const animals = animalsResponse.data;

  return {
    props: {
      animals: animals || [],
    },
  };
};

export const AnimalsPage: React.FC<AnimalsPageProps> = ({ animals }) => {
  const { styles } = useStyles();

  return (
    <Layout>
      <Flex className={ styles.container }>
        <GetAnimalsSection />
        <AnimalsSection animals={ animals } />
      </Flex>
    </Layout>
  );
};
