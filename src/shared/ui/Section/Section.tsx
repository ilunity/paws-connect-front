import React from 'react';
import { SectionProps } from './Section.types';
import { useStyles } from './Section.styles';
import { Flex, Space, Typography } from 'antd';

export const Section: React.FC<SectionProps> = ({ title, children, action, level = 2 }) => {
  const { styles } = useStyles();

  return (
    <Flex className={ styles.container }>
      <Flex className={ styles.header }>
        { title &&
          <Typography.Title level={ level }>
            { title }
          </Typography.Title>
        }
        <Space>
          { action }
        </Space>
      </Flex>
      <div>
        { children }
      </div>
    </Flex>
  );
};
