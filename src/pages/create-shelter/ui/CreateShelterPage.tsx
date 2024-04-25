import { Layout } from '@widgets/layout';
import { CreateShelterForm } from './create-shelter-form';
import { Section } from '@shared/ui';
import { useRouter } from 'next/router';

export const CreateShelterPage: React.FC = () => {
  const router = useRouter();

  return (
    <Layout>
      <Section>
        <CreateShelterForm onSuccess={ () => router.back() } />
      </Section>
    </Layout>
  );
};
