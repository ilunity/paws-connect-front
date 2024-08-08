import React from 'react';
import { AnimalCardProps } from './AnimalCard.types';
import { useStyles } from './AnimalCard.styles';
import { Card, Flex, Typography } from 'antd';
import { useRouter } from 'next/router';
import { ageToStringFormat } from '@shared/utils';

const { Text } = Typography;

export const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  const router = useRouter();
  const { styles } = useStyles();

  const goToAnimal = () => {
    router.push({ pathname: `/animals/${animal.id}` });
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
      onClick={ goToAnimal }
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
