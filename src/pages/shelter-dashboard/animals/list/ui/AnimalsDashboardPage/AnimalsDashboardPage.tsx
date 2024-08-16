import React from 'react';
import { AnimalsDashboardPageProps } from './AnimalsDashboardPage.types';
import { SHELTER_DASHBOARD_ITEMS } from '@widgets/shelter-dashboard-navigation/ui/ShelterDashboardNavigation.types';
import { ShelterDashboardLayout } from '@widgets/shelter-dashboard-layout';
import { GetServerSideProps } from 'next';
import { executeRequest } from '@shared/api';
import { animalsService, IAnimal } from '@entities/animal';
import { UpdateAnimalsSection } from '@widgets/update-animals-section';

export const getServerSideProps: GetServerSideProps<AnimalsDashboardPageProps> = async ({ req, params }) => {
  const shelterId = params?.shelterId as string;

  const animalsResponse = await executeRequest(() => animalsService.getByShelter(shelterId));
  if (animalsResponse.error) {
    throw new Error(animalsResponse.error);
  }

  return {
    props: {
      shelterId,
      animals: animalsResponse.data as IAnimal[],
    },
  };
};

export const AnimalsDashboardPage: React.FC<AnimalsDashboardPageProps> = ({ shelterId, animals }) => {
  return (
    <ShelterDashboardLayout
      dashboardItemName={ SHELTER_DASHBOARD_ITEMS.ANIMALS_LIST }
      shelterId={ shelterId }
    >
      <UpdateAnimalsSection animals={ animals } />
    </ShelterDashboardLayout>
  );
};
