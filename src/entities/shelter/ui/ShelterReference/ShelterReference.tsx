import React from 'react';
import { ShelterReferenceProps } from './ShelterReference.types';
import { useStyles } from './ShelterReference.styles';
import { Card, Flex, Tag, Typography } from 'antd';
import { PhoneNumberLink } from '@shared/ui';

const { Text } = Typography;

export const ShelterReference: React.FC<ShelterReferenceProps> = (
  {
    shelter,
    onClick,
    size = 'default',
    status = false,
  },
) => {
  const { styles } = useStyles();

  const handleClick = () => {
    onClick(shelter.id);
  };

  return (
    <Card size={ size }>
      <Flex className={ styles.container }>
        <Flex className={ styles.clickableContainer } onClick={ handleClick }>
          <Typography className={ styles.text }>
            { shelter.name }
          </Typography>
          <Text type={ 'secondary' } className={ styles.text }>
            ({ shelter.location })
          </Text>
        </Flex>
        <Flex className={ styles.sideContainer }>
          <PhoneNumberLink phoneNumber={ shelter.tel } />
          { status &&
          <Tag color={ 'blue' }>
            <Typography.Text
              className={ styles.text }
            >
              { shelter.verified ? 'Одобрено' : 'На рассмотрении' }
            </Typography.Text>
          </Tag>
          }
        </Flex>
      </Flex>
    </Card>
  );
};
