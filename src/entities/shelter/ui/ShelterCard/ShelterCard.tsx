import React from 'react';
import { ShelterCardProps } from './ShelterCard.types';
import { useStyles } from './ShelterCard.styles';
import { Card, Typography } from 'antd';
import { PhoneNumberLink } from '@shared/ui';

const { Paragraph, Text, Link } = Typography;

export const ShelterCard: React.FC<ShelterCardProps> = ({ shelter, onClick }) => {
  const { styles } = useStyles();

  const handleClick = () => {
    onClick(shelter.id);
  };

  return (
    <Card
      hoverable
      title={
        <Typography>
          <Text className={ styles.title }>
            { shelter.name }
          </Text>
          <Text className={ styles.title } type={ 'secondary' }>
            { ` (${shelter.location})` }
          </Text>
        </Typography>
      }
      onClick={ handleClick }
    >
      <Typography>
        <Paragraph
          className={ styles.description }
          ellipsis={ { rows: 6 } }
        >
          { shelter.description }
        </Paragraph>
        <PhoneNumberLink phoneNumber={ shelter.tel } />
      </Typography>
    </Card>
  );
};
