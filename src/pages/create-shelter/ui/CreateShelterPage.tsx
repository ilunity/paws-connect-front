import { Layout } from '@widgets/layout';
import { Section } from '@shared/ui';
import { useRouter } from 'next/router';
import { CreateShelterForm } from '@features/create-shelter';
import { CREATE_SHELTER_FORM_TYPES } from '@features/create-shelter/ui/CreateShelterForm/CreateShelterForm.types';
import Head from 'next/head';
import React from 'react';

export const CreateShelterPage: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          Создание приюта
        </title>
      </Head>
      <Layout>
        <Section>
          <CreateShelterForm
            onSuccess={ router.back }
            type={ CREATE_SHELTER_FORM_TYPES.CREATE }
          />
        </Section>
      </Layout>
    </>
  );
};
