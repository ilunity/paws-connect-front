import React from 'react';
import { ShelterProfileSectionProps } from './ShelterProfileSection.types';
import { LinkCardTitle, Section } from '@shared/ui';
import { CreateShelterProposal } from '@features/create-shelter';
import { Card, Typography } from 'antd';
import { useRouter } from 'next/router';

const { Paragraph, Text, Title } = Typography;
const SHELTERS_DASHBOARD_PATHNAME = '/shelters/dashboard';

export const ShelterProfileSection: React.FC<ShelterProfileSectionProps> = ({ shelter }) => {
  const router = useRouter();
  const isShelterDashboardPage = router.pathname === SHELTERS_DASHBOARD_PATHNAME;

  return (
    <Section
      title={ 'Ваш приют' }
    >
      { shelter
        ? <Card title={
          isShelterDashboardPage
            ? shelter.name
            : (
              <LinkCardTitle onClick={ () => router.push(SHELTERS_DASHBOARD_PATHNAME) }>
                { shelter.name }
              </LinkCardTitle>
            )
        }>
          <Typography>
            <Paragraph>
              { shelter.description }
            </Paragraph>
            <Paragraph>
              { `${shelter.city}: ` }
              <Text type={ 'secondary' }>
                { shelter.address }
              </Text>
            </Paragraph>
          </Typography>
        </Card>
        : <CreateShelterProposal />
      }
    </Section>
  );
};
