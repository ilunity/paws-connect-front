import React from 'react';
import { LayoutProps } from './Layout.types';
import { useStyles } from './Layout.styles';
import { Layout as AntdLayout } from 'antd';
import { Header } from '@widgets/header';

const { Content, Sider } = AntdLayout;

export const Layout: React.FC<LayoutProps> = ({ aside, children }) => {
  const { styles } = useStyles();

  return (
    <AntdLayout className={ styles.container }>
      <Header />
      { aside
        ? (
          <AntdLayout
            className={ styles.asideLayout }
            hasSider
          >
            <Sider className={ styles.aside }>
              { aside }
            </Sider>
            <Content className={ styles.contentContainer }>
              { children }
            </Content>
          </AntdLayout>)
        : (
          <Content className={ styles.contentContainer }>
            { children }
          </Content>)
      }
    </AntdLayout>
  );
};
