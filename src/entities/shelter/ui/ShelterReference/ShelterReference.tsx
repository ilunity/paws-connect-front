import React from 'react';
import { ShelterReferenceProps } from './ShelterReference.types';
import { useStyles } from './ShelterReference.styles';
import { Card, Flex, Typography } from 'antd';
import { PhoneNumberLink } from '@shared/ui';

const { Text, Link } = Typography;

export const ShelterReference: React.FC<ShelterReferenceProps> = ({ shelter, onClick }) => {
  const { styles } = useStyles();

  const handleClick = () => {
    onClick(shelter.id);
  };

  return (
    <Card>
      <Flex className={ styles.container }>
        <Flex className={ styles.clickableContainer } onClick={ handleClick }>
          <Typography className={ styles.text }>
            { shelter.name }
          </Typography>
          <Text type={ 'secondary' } className={ styles.text }>
            ({ shelter.location })
          </Text>
        </Flex>
        <PhoneNumberLink phoneNumber={ shelter.tel } />
      </Flex>
    </Card>
  );
};
