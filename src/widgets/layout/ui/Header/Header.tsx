import React from 'react';
import { Layout } from 'antd';
import { useDynamicTokenStyles } from './Header.styles';
import { NavigationBar } from '@shared/ui/NavigationBar';
import { UserButton } from '@entities/user';
import NextLink from 'next/link';
import { useResponsive } from 'antd-style';
import { TextLogo } from '@shared/ui';


const { Header: AntdHeader } = Layout;

export const Header: React.FC = () => {
  const { styles } = useDynamicTokenStyles();
  const { md } = useResponsive();

  return (
    <AntdHeader className={ styles.container }>
      { md &&
        <NextLink href={ '/' } passHref>
          <TextLogo />
        </NextLink>
      }
      <NavigationBar dropdown={ !md } />
      <div className={ styles.userButtonWrapper }>
        <UserButton />
      </div>
    </AntdHeader>
  );
};
