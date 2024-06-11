import React from 'react';
import { LinkCardTitleProps } from './LinkCardTitle.types';
import { useStyles } from './LinkCardTitle.styles';
import { ExportOutlined } from '@ant-design/icons';
import { Flex, Typography } from 'antd';

export const LinkCardTitle: React.FC<LinkCardTitleProps> = ({ onClick, children }) => {
  const { styles } = useStyles();

  return (
    <Flex className={ styles.container } onClick={ onClick }>
      <Typography.Title
        className={ styles.title }
        level={ 5 }
      >
        { children }
      </Typography.Title>
      <ExportOutlined className={ styles.titleIcon } />
    </Flex>
  );
};
