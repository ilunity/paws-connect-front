import React from 'react';
import { LayoutProps } from './Layout.types';
import { useStyles } from './Layout.styles';
import { Layout as AntdLayout } from 'antd';
import { Header } from '@widgets/header';

const { Content } = AntdLayout;

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { styles } = useStyles();

  return (
    <AntdLayout className={ styles.container }>
      <Header />
      <Content className={ styles.contentContainer }>
        { children }
      </Content>
    </AntdLayout>
  );
};
