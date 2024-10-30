import React from 'react';
import { AlignLayoutProps } from './AlignLayout.types';
import { useStyles } from './AlignLayout.styles';
import { Flex } from 'antd';
import { Layout } from '@widgets/layout';


export const AlignLayout: React.FC<AlignLayoutProps> = ({ children }) => {
  const { styles } = useStyles();

  return (
    <Layout
      withHeader={ false }
    >
      <Flex className={ styles.container }>
        { children }
      </Flex>
    </Layout>
  );
};
