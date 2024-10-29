import React from 'react';
import { ProfileCardProps } from './ProfileCard.types';
import { useStyles } from './ProfileCard.styles';
import { useUser } from '@clerk/nextjs';
import { Avatar, Card, Flex, Tag, Typography } from 'antd';


const { Text } = Typography;

export const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  const { styles } = useStyles();

  return (
    <Card>
      <Flex className={ styles.container }>
        <Flex className={ styles.userPrimaryInfoContainer }>
          <Avatar size={ 'large' } src={ useUser().user?.imageUrl } />
          <Text className={ styles.text }>
            { user.name }
          </Text>
          <Text
            className={ styles.text }
            type={ 'secondary' }
          >
            { user.email }
          </Text>
        </Flex>
        <Tag
          color={ 'blue' }
          className={ styles.userRoleTag }
        >
          <Text
            className={ styles.text }
          >
            { user.role }
          </Text>
        </Tag>
      </Flex>
    </Card>
  );
};
