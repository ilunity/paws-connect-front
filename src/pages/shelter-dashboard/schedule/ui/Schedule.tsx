import React from 'react';
import { ScheduleProps } from './Schedule.types';
import { SHELTER_DASHBOARD_ITEMS } from '@widgets/shelter-dashboard-navigation/ui/ShelterDashboardNavigation.types';
import { ShelterDashboardLayout } from '@widgets/shelter-dashboard-layout';
import { GetServerSideProps } from 'next';
import { executeRequest } from '@shared/api';
import { IShelter, shelterService } from '@entities/shelter';
import { isShelterOwner } from '@shared/utils/roles';

export const getServerSideProps: GetServerSideProps<ScheduleProps> = async ({ req, params }) => {
  const shelterId = params?.id as string;

  const shelterResponse = await executeRequest(() => shelterService.getOne(shelterId));
  if (shelterResponse.error) {
    throw new Error(shelterResponse.error);
  }

  return {
    props: {
      shelter: shelterResponse.data as IShelter,
      isOwner: isShelterOwner(req, shelterResponse.data?.id as number),
    },
  };
};

export const Schedule: React.FC<ScheduleProps> = ({ shelter, isOwner }) => {
  return (
    <ShelterDashboardLayout
      dashboardItemName={ SHELTER_DASHBOARD_ITEMS.INFO }
      isOwner={ isOwner }
    >

    </ShelterDashboardLayout>
  );
};
