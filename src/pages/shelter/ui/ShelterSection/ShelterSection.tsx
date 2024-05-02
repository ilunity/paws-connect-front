import React from 'react';
import { ShelterSectionProps } from './ShelterSection.types';
import { useStyles } from './ShelterSection.styles';
import { Section } from '@shared/ui';
import { Card, Typography } from 'antd';

const {Paragraph, Text} = Typography;

export const ShelterSection: React.FC<ShelterSectionProps> = ({shelter}) => {
  const { styles } = useStyles();

  return (
    <Section
      title={ shelter.name }
    >
      <Card>
        <Paragraph className={ styles.description }>
          { shelter.description }
        </Paragraph>
        <Text>
          { `${shelter.city}: ` }
          <Text type={ 'secondary' }>
            { shelter.address }
          </Text>
        </Text>
      </Card>
    </Section>
  );
};
