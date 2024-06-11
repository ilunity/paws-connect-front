import React from 'react';
import { ShelterCardProps } from './ShelterCard.types';
import { useStyles } from './ShelterCard.styles';
import { Card, Typography } from 'antd';
import { LinkCardTitle } from '@shared/ui';

const { Paragraph, Text } = Typography;

export const ShelterCard: React.FC<ShelterCardProps> = ({ shelter, onClick }) => {
  const { styles } = useStyles();

  const handleClick = () => {
    onClick(shelter.id);
  };

  return (
    <Card
      title={
        <LinkCardTitle onClick={ handleClick }>
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
            onExpand: handleClick,
          } }
        >
          { shelter.description }
        </Paragraph>
        <Text type={ 'secondary' }>
          { shelter.location }
        </Text>
      </Typography>
    </Card>
  );
};
