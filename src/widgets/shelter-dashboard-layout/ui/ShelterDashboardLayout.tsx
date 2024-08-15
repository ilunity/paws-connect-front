import React from 'react';
import { ShelterDashboardLayoutProps } from './ShelterDashboardLayout.types';
import { ShelterDashboardNavigation } from '@widgets/shelter-dashboard-navigation';
import { Layout } from '@widgets/layout';
import { Flex } from 'antd';
import { useStyles } from './ShelterDashboardLayout.styles';

export const ShelterDashboardLayout: React.FC<ShelterDashboardLayoutProps> = (
  {
    dashboardItemName,
    isOwner = false,
    children,
  },
) => {
  const { styles } = useStyles();

  return (
    <Layout>
      <Flex className={ styles.container }>
        <ShelterDashboardNavigation owner={ isOwner } selected={ dashboardItemName } />
        { children }
      </Flex>
    </Layout>
  );
};
