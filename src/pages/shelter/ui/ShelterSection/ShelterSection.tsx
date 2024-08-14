import React from 'react';
import { ShelterSectionProps } from './ShelterSection.types';
import { useStyles } from './ShelterSection.styles';
import { PhoneNumberLink, Section } from '@shared/ui';
import { Typography } from 'antd';

const { Paragraph, Link, Text } = Typography;

export const ShelterSection: React.FC<ShelterSectionProps> = ({ shelter }) => {
  const { styles } = useStyles();

  return (
    <Section
      title={ `${shelter.name} (${shelter.location})` }
    >
      <Paragraph className={ styles.description }>
        { shelter.description }
      </Paragraph>
      <Typography>
        <Text
          className={ styles.phoneNumberText }
          strong
        >
          { 'Контакты: ' }
        </Text>
        <PhoneNumberLink phoneNumber={ shelter.tel } />
      </Typography>
    </Section>
  );
};
