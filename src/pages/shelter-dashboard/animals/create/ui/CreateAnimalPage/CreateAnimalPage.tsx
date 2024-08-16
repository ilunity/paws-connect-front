import React from 'react';
import { CreateAnimalPageProps } from './CreateAnimalPage.types';
import { GetServerSideProps } from 'next';
import { SHELTER_DASHBOARD_ITEMS } from '@widgets/shelter-dashboard-navigation/ui/ShelterDashboardNavigation.types';
import { ShelterDashboardLayout } from '@widgets/shelter-dashboard-layout';
import { CreateAnimalSection } from '@pages/shelter-dashboard/animals/create/ui/CreateAnimalSection';

export const getServerSideProps: GetServerSideProps<CreateAnimalPageProps> = async ({ req, params }) => {
  const shelterId = params?.shelterId as string;

  return {
    props: {
      shelterId,
    },
  };
};

export const CreateAnimalPage: React.FC<CreateAnimalPageProps> = ({ shelterId }) => {
  return (
    <ShelterDashboardLayout
      dashboardItemName={ SHELTER_DASHBOARD_ITEMS.ANIMALS_CREATE }
      shelterId={ shelterId }
    >
      <CreateAnimalSection shelterId={ shelterId } />
    </ShelterDashboardLayout>
  );
};
