import React from 'react';
import { Layout, Typography } from 'antd';
import { useDynamicTokenStyles } from './Header.styles';
import { NavigationBar } from '@shared/ui/NavigationBar';
import { UserButton } from '@entities/user';
import NextLink from 'next/link';

const { Header: AntdHeader } = Layout;

export const Header: React.FC = () => {
  const { styles } = useDynamicTokenStyles();

  return (
    <AntdHeader className={ styles.container }>
      <NextLink href={ '/' } passHref>
        <Typography className={ styles.logo }>
          PawsConnect
        </Typography>
      </NextLink>
      <NavigationBar />
      <div className={ styles.userButtonWrapper }>
        <UserButton />
      </div>
    </AntdHeader>
  );
};
