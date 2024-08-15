import React from 'react';
import { GetServerSideProps } from 'next';
import { isShelterOwner } from '@shared/utils/roles';
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

  // const shelterResponse = await executeRequest(() => shelterService.getOne(shelterId));
  // if (shelterResponse.error) {
  //   throw new Error(shelterResponse.error);
  // }
  const animalResponse = await executeRequest(() => animalsService.getOne(animalId));
  if (animalResponse.error) {
    throw new Error(animalResponse.error);
  }

  return {
    props: {
      shelterId,
      animal: animalResponse.data as IExtendedAnimal,
      isOwner: isShelterOwner(req, shelterId),
    },
  };
};

export const UpdateAnimalPage: React.FC<UpdateAnimalPageProps> = ({ shelterId, animal, isOwner }) => {
  return (
    <ShelterDashboardLayout
      dashboardItemName={ SHELTER_DASHBOARD_ITEMS.ANIMALS_UPDATE }
      isOwner={ isOwner }
    >
      <UpdateAnimalSection animal={ animal } />
    </ShelterDashboardLayout>
  );
};
