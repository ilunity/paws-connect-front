import React from 'react';
import { AnimalSectionProps } from './AnimalSection.types';
import { useStyles } from './AnimalSection.styles';
import { Divider, Section, StatisticCard } from '@shared/ui';
import { Flex, Image, Typography } from 'antd';
import { genderText } from '@entities/animal';
import { ageToStringFormat } from '@shared/utils';
import { ShelterReference } from '@entities/shelter';
import { useRouter } from 'next/router';

const { Title, Paragraph, Text } = Typography;

export const AnimalSection: React.FC<AnimalSectionProps> = ({ animal }) => {
  const { styles } = useStyles();
  const router = useRouter();

  const goToShelter = (shelterId: number) => {
    router.push({ pathname: `/shelters/${shelterId}` });
  };

  return (
    <Section>
      <Flex className={ styles.container }>
        <Image
          width={ 700 }
          height={ 400 }
          className={ styles.image }
          src={ process.env.NEXT_PUBLIC_STATIC + animal.avatar }
          alt={ 'Изображение животного' }
        />
        <Flex className={ styles.animalInfoContainer }>
          <Title level={ 2 }>
            { animal.name }
          </Title>
          <Flex className={ styles.animalsTagsContainer }>
            <Divider />
            <StatisticCard
              title="Вид"
              value={ animal.type }
            />
            <StatisticCard
              title="Порода"
              value={ animal.breed }
            />
            <StatisticCard
              title="Пол"
              value={ genderText[animal.gender] }
            />
            <StatisticCard
              title="Возраст"
              value={ ageToStringFormat(animal.age) }
            />
            <Divider />
          </Flex>
          <Paragraph className={ styles.description }>
            { animal.description }
          </Paragraph>
          <ShelterReference
            shelter={ animal.shelter }
            onClick={ goToShelter }
          />
        </Flex>
      </Flex>
    </Section>
  );
};
