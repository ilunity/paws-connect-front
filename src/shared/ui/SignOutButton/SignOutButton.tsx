import React from 'react';
import { useStyles } from './SignOutButton.styles';
import { useClerk } from '@clerk/nextjs';
import { LogoutOutlined } from '@ant-design/icons';
import { Space, Typography } from 'antd';
import { useRouter } from 'next/router';

export const SignOutButton: React.FC = () => {
  const { styles } = useStyles();
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <Space className={ styles.container }
      onClick={ () => signOut(() => router.push('/')) }
    >
      <Typography.Link>
        Выйти
      </Typography.Link>
      <LogoutOutlined className={ styles.logOutIcon } />
    </Space>
  );
};
