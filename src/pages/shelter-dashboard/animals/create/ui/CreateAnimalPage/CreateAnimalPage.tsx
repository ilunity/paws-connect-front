import React from 'react';
import { CreateAnimalPageProps } from './CreateAnimalPage.types';
import { GetServerSideProps } from 'next';
import { isShelterOwner } from '@shared/utils/roles';
import { SHELTER_DASHBOARD_ITEMS } from '@widgets/shelter-dashboard-navigation/ui/ShelterDashboardNavigation.types';
import { ShelterDashboardLayout } from '@widgets/shelter-dashboard-layout';
import { CreateAnimalSection } from '@pages/shelter-dashboard/animals/create/ui/CreateAnimalSection';

export const getServerSideProps: GetServerSideProps<CreateAnimalPageProps> = async ({ req, params }) => {
  const shelterId = params?.shelterId as string;

  return {
    props: {
      shelterId,
      isOwner: isShelterOwner(req, shelterId),
    },
  };
};

export const CreateAnimalPage: React.FC<CreateAnimalPageProps> = ({ shelterId, isOwner }) => {
  return (
    <ShelterDashboardLayout
      dashboardItemName={ SHELTER_DASHBOARD_ITEMS.ANIMALS_CREATE }
      isOwner={ isOwner }
    >
      <CreateAnimalSection shelterId={ shelterId } />
    </ShelterDashboardLayout>
  );
};
