import React from 'react';
import { AnimalCardProps } from './AnimalCard.types';
import { useStyles } from './AnimalCard.styles';
import { Card, Image, Typography } from 'antd';
import { useRouter } from 'next/router';
import { LinkCardTitle } from '@shared/ui';

const { Paragraph,Text } = Typography;

export const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  const router = useRouter();
  const { styles } = useStyles();

  const goToAnimal = () => {
    router.push({ pathname: `/animals/${animal.id}` });
  };

  return (
    <Card title={
      <LinkCardTitle onClick={ goToAnimal }>
        { animal.name }
      </LinkCardTitle>
    }>
      <Image
        className={ styles.image }
        src={ animal.avatar }
      />
      <Paragraph
        className={ styles.description }
        ellipsis={ {
          rows: 8,
          expandable: true,
          symbol: 'Подробнее',
          onExpand: goToAnimal,
        } }
      >
        <Typography>
          <Text strong>
            { 'Возраст: ' }
          </Text>
          { animal.age }
        </Typography>
        <Typography>
          <Text strong>
            { 'Порода: ' }
          </Text>
          { animal.breed }
        </Typography>
        <Typography>
          <Text strong>
            { 'Пол: ' }
          </Text>
          { animal.sex }
        </Typography>
        <Typography>
          { animal.description }
        </Typography>
      </Paragraph>
    </Card>
  );
};
