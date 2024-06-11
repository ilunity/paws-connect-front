import React from 'react';
import { ShelterDashboardLayoutProps } from './ShelterDashboardLayout.types';
import { ShelterDashboardNavigation } from '@widgets/shelter-dashboard-navigation';
import { Layout } from '@widgets/layout';

export const ShelterDashboardLayout: React.FC<ShelterDashboardLayoutProps> = (
  {
    dashboardItemName,
    isOwner = false,
    children,
  },
) => {
  return (
    <Layout
      aside={ <ShelterDashboardNavigation owner={ isOwner } selected={ dashboardItemName } /> }
    >
      { children }
    </Layout>
  );
};
