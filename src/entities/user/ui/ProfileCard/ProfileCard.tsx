import React from 'react';
import { ProfileCardProps } from './ProfileCard.types';
import { useStyles } from './ProfileCard.styles';
import { useUser } from '@clerk/nextjs';
import { Avatar, Card, Flex, Tag, Typography } from 'antd';

export const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  const { styles } = useStyles();

  return (
    <Card>
      <Flex className={ styles.container }>
        <Avatar size={ 'large' } src={ useUser().user?.imageUrl } />
        <Typography className={ styles.text }>
          { user.name }
        </Typography>
        <Typography.Text
          className={ styles.text }
          type={ 'secondary' }
        >
          { user.email }
        </Typography.Text>
        <Tag
          color={ 'blue' }
          className={ styles.userRoleTag }
        >
          <Typography.Text
            className={ styles.text }
          >
            { user.role }
          </Typography.Text>
        </Tag>
      </Flex>
    </Card>
  );
};
