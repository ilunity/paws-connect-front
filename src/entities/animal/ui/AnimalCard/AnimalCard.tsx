import React from 'react';
import { AnimalCardProps } from './AnimalCard.types';
import { useStyles } from './AnimalCard.styles';
import { Card, Flex, Typography } from 'antd';
import { ageToStringFormat } from '@shared/utils';

const { Text } = Typography;

export const AnimalCard: React.FC<AnimalCardProps> = ({ animal, onClick }) => {
  const { styles } = useStyles();

  const handleClick = () => {
    onClick(animal.id);
  };

  return (
    <Card
      className={ styles.container }
      hoverable
      cover={
        <img
          className={ styles.image }
          src={ process.env.NEXT_PUBLIC_STATIC + animal.avatar }
        />
      }
      onClick={ handleClick }
    >
      <Flex className={ styles.textContainer }>
        <Text className={ styles.primaryText }>
          { animal.name }
        </Text>
        <Text className={ styles.secondaryText } type={ 'secondary' }>
          { ageToStringFormat(animal.age) }
        </Text>
      </Flex>
      <Text className={ styles.secondaryText } type={ 'secondary' }>
        { animal.breed }
      </Text>
    </Card>
  );
};
