import React from 'react';
import { useDynamicTokenStyles } from './HomeSection.styles';
import { Button, Flex, Image, Space, Typography } from 'antd';
import { useRouter } from 'next/router';

const { Text, Paragraph } = Typography;

export const HomeSection: React.FC = () => {
  const { styles } = useDynamicTokenStyles();
  const router = useRouter();

  const goToAnimals = () => {
    router.push('/animals');
  };

  return (
    <Flex className={ styles.container }>
      <Space
        direction={ 'vertical' }
        className={ styles.textBlockContainer }
      >
        <Text className={ styles.textPrimary } strong>
          Не только людям нужен дом
        </Text>
        <Text className={ styles.textSecondary }>
          Ты можешь найти себе здесь нового друга или просто помочь приюту
        </Text>
        <Button
          type={ 'primary' }
          size={ 'large' }
          onClick={ goToAnimals }
        >
          Подружиться
        </Button>
      </Space>
      <div className={ styles.imageWrapper }>
        <div className={ styles.circleWrapper }>
          <div className={ styles.bigCircle } />
        </div>
        <Image
          src={ 'images/home-page-dog.png' }
          preview={ false }
        />
      </div>
    </Flex>
  );
};
