import React from 'react';
import { useStyles } from './CreateShelterProposal.styles';
import { Card, Flex, Typography } from 'antd';
import { CreateShelterButton } from '@features/create-shelter';

const { Text } = Typography;

export const CreateShelterProposal: React.FC = () => {
  const { styles } = useStyles();

  return (
    <Card>
      <Flex
        className={ styles.container }
        wrap={ 'wrap' }
        gap={ 'small' }
      >
        <Text>
          У Вас пока нет размещенного приюта. Если у Вас есть приют, Вы можете добавить его на наш сайт:
        </Text>
        <CreateShelterButton />
      </Flex>
    </Card>
  );
};
