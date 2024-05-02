import React from 'react';
import { ShelterCardProps } from './ShelterCard.types';
import { useStyles } from './ShelterCard.styles';
import { Card, Typography } from 'antd';
import { useRouter } from 'next/router';
import { LinkCardTitle } from '@shared/ui';

const { Paragraph, Text } = Typography;

export const ShelterCard: React.FC<ShelterCardProps> = ({ shelter }) => {
  const router = useRouter();
  const { styles } = useStyles();

  const goToShelter = () => {
    router.push({ pathname: `/shelters/${shelter.id}` });
  };

  return (
    <Card
      title={
        <LinkCardTitle onClick={ goToShelter }>
          { shelter.name }
        </LinkCardTitle>
      }
      bordered={ false }
    >
      <Typography>
        <Paragraph
          className={ styles.description }
          ellipsis={ {
            rows: 4,
            expandable: true,
            symbol: 'Прочитать полностью',
            onExpand: goToShelter,
          } }
        >
          { shelter.description }
        </Paragraph>
        <Text type={ 'secondary' }>
          { shelter.address }
        </Text>
      </Typography>
    </Card>
  );
};
