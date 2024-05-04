import { Layout } from '@widgets/layout';
import { Section } from '@shared/ui';
import { useRouter } from 'next/router';
import { CreateShelterForm } from '@features/create-shelter';

export const CreateShelterPage: React.FC = () => {
  const router = useRouter();

  return (
    <Layout>
      <Section>
        <CreateShelterForm onSuccess={ router.back } />
      </Section>
    </Layout>
  );
};
