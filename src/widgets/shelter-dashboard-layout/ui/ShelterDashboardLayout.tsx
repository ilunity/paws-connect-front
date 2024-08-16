import React, { useEffect } from 'react';
import { ShelterDashboardLayoutProps } from './ShelterDashboardLayout.types';
import { ShelterDashboardNavigation } from '@widgets/shelter-dashboard-navigation';
import { Layout } from '@widgets/layout';
import { Flex } from 'antd';
import { useStyles } from './ShelterDashboardLayout.styles';
import { useUserMetadata } from '@shared/utils/roles';
import { ERROR_PAGE, useGoToErrorPage } from '@shared/utils';

export const ShelterDashboardLayout: React.FC<ShelterDashboardLayoutProps> = (
  {
    shelterId,
    dashboardItemName,
    children,
  },
) => {
  const { isLoaded, isShelterOwner, isShelterWorker } = useUserMetadata();
  const goToForbidden = useGoToErrorPage(ERROR_PAGE.FORBIDDEN, true);

  useEffect(() => {
    if (isLoaded) {
      const isEnoughRights = isShelterWorker(shelterId) || isShelterOwner(shelterId);
      if (!isEnoughRights) {
        goToForbidden();
      }
    }
  }, [isLoaded]);

  const { styles } = useStyles();

  return (
    <Layout loading={ !isLoaded }>
      <Flex className={ styles.container }>
        { isLoaded &&
          <>
            <ShelterDashboardNavigation owner={ isShelterOwner(shelterId) } selected={ dashboardItemName } />
            { children }
          </>
        }
      </Flex>
    </Layout>
  );
};
