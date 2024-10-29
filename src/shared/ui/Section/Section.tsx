import React from 'react';
import { SectionProps } from './Section.types';
import { useStyles } from './Section.styles';
import { Flex, Space, Typography } from 'antd';


const { Title } = Typography;

export const Section: React.FC<SectionProps> = ({ title, children, action, level = 2 }) => {
  const { styles } = useStyles();

  return (
    <Flex className={ styles.container }>
      <Flex className={ styles.header }>
        { title &&
          <Title level={ level } className={ styles.title }>
            { title }
          </Title>
        }
        <Space
          className={ styles.actionContainer }
          size={ 4 }
          wrap
        >
          { action }
        </Space>
      </Flex>
      <div>
        { children }
      </div>
    </Flex>
  );
};
