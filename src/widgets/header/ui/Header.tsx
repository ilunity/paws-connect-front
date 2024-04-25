import React from 'react';
import { Layout, Typography } from 'antd';
import { useStyles } from './Header.styles';
import { NavigationBar } from '@shared/ui/NavigationBar';
import { UserButton } from '@entities/user';

const { Header: AntdHeader } = Layout;

export const Header: React.FC = () => {
  const { styles } = useStyles();

  return (
    <AntdHeader className={ styles.container }>
      <Typography className={ styles.logo }>
        PawsConnect
      </Typography>
      <NavigationBar />
      <UserButton />
    </AntdHeader>
  );
};
