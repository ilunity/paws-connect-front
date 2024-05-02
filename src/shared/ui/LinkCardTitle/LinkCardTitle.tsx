import React from 'react';
import { LinkCardTitleProps } from './LinkCardTitle.types';
import { useStyles } from './LinkCardTitle.styles';
import { ExportOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

export const LinkCardTitle: React.FC<LinkCardTitleProps> = ({ onClick, children }) => {
  const { styles } = useStyles();

  return (
    <Typography.Title
      className={ styles.title }
      level={ 5 }
      onClick={ onClick }
    >
      { children }
      <ExportOutlined className={ styles.titleIcon } />
    </Typography.Title>
  );
};
