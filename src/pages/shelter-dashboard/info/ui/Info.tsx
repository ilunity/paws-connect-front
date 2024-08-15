import React from 'react';
import { InfoProps } from './Info.types';
import { GetServerSideProps } from 'next';
import { executeRequest } from '@shared/api';
import { IShelter, shelterService } from '@entities/shelter';
import { ShelterDashboardLayout } from '@widgets/shelter-dashboard-layout';
import { SHELTER_DASHBOARD_ITEMS } from '@widgets/shelter-dashboard-navigation/ui/ShelterDashboardNavigation.types';
import { isShelterOwner } from '@shared/utils/roles';
import { CreateShelterForm } from '@features/create-shelter';
import { CREATE_SHELTER_FORM_TYPES } from '@features/create-shelter/ui/CreateShelterForm/CreateShelterForm.types';
import { message } from 'antd';

export const getServerSideProps: GetServerSideProps<InfoProps> = async ({ req, params }) => {
  const shelterId = params?.id as string;

  const shelterResponse = await executeRequest(() => shelterService.getOne(shelterId));
  if (shelterResponse.error) {
    throw new Error(shelterResponse.error);
  }

  return {
    props: {
      shelter: shelterResponse.data as IShelter,
      isOwner: isShelterOwner(req, shelterResponse.data?.id as string),
    },
  };
};

export const Info: React.FC<InfoProps> = ({ shelter, isOwner }) => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <ShelterDashboardLayout
      dashboardItemName={ SHELTER_DASHBOARD_ITEMS.INFO }
      isOwner={ isOwner }
    >
      { contextHolder }
      <CreateShelterForm
        type={ CREATE_SHELTER_FORM_TYPES.UPDATE }
        initialValues={ shelter }
        shelterId={ shelter.id }
        onSuccess={ () => {
          messageApi.success('Информация о приюте обновлена!');
        } }
      />
    </ShelterDashboardLayout>
  );
};
