import React from 'react';
import { GetServerSideProps } from 'next';
import { SHELTER_DASHBOARD_ITEMS } from '@widgets/shelter-dashboard-navigation/ui/ShelterDashboardNavigation.types';
import { ShelterDashboardLayout } from '@widgets/shelter-dashboard-layout';
import {
  UpdateAnimalPageProps,
} from '@pages/shelter-dashboard/animals/update/ui/UpdateAnimalPage/UpdateAnimalPage.types';
import { executeRequest } from '@shared/api';
import { animalsService, IExtendedAnimal } from '@entities/animal';
import { UpdateAnimalSection } from '../UpdateAnimalSection';

export const getServerSideProps: GetServerSideProps<UpdateAnimalPageProps> = async ({ req, params }) => {
  const shelterId = params?.shelterId as string;
  const animalId = params?.animalId as string;

  const animalResponse = await executeRequest(() => animalsService.getOne(animalId));
  if (animalResponse.error) {
    return { notFound: true };
  }

  return {
    props: {
      shelterId,
      animal: animalResponse.data as IExtendedAnimal,
    },
  };
};

export const UpdateAnimalPage: React.FC<UpdateAnimalPageProps> = ({ shelterId, animal }) => {
  return (
    <ShelterDashboardLayout
      dashboardItemName={ SHELTER_DASHBOARD_ITEMS.ANIMALS_UPDATE }
      shelterId={ shelterId }
    >
      <UpdateAnimalSection animal={ animal } />
    </ShelterDashboardLayout>
  );
};
