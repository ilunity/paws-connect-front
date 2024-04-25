import React from 'react';
import { SectionProps } from './Section.types';
import { useStyles } from './Section.styles';
import { Flex, Typography } from 'antd';

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  const { styles } = useStyles();

  return (
    <Flex className={ styles.container }>
      { title &&
        <Typography.Title level={ 2 }>
          { title }
        </Typography.Title>
      }
      { children }
    </Flex>
  );
};
