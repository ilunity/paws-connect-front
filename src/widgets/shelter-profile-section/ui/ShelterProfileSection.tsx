import React from 'react';
import { ShelterProfileSectionProps } from './ShelterProfileSection.types';
import { Section } from '@shared/ui';
import { CreateShelterProposal } from '@features/create-shelter';
import { Card, Typography } from 'antd';

const { Paragraph, Text, Title } = Typography;

export const ShelterProfileSection: React.FC<ShelterProfileSectionProps> = ({ shelter }) => {
  return (
    <Section
      title={ 'Ваш приют' }
    >
      { shelter
        ? <Card title={ shelter.name }>
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
