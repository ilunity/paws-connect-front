import React from 'react';
import { useStyles } from './UserButton.styles';
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs';
import { Avatar, Space, Typography } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { UserButtonDropDown } from '@entities/user/ui/UserButton/UserButtonDropDown';
import { SignInButton } from '@shared/ui';

export const UserButton: React.FC = () => {
  const { styles } = useStyles();
  const { user } = useUser();

  return (
    <>
      <SignedIn>
        <UserButtonDropDown>
          <Space className={ styles.container }>
            <Typography className={ styles.username }>
              { user?.username }
            </Typography>
            <Avatar
              size={ 32 }
              src={ user?.imageUrl }
            />
            <DownOutlined className={ styles.downIcon } />
          </Space>
        </UserButtonDropDown>
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
  );
};
