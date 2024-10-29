import React from 'react';
import { Button, Result } from 'antd';
import { useRouter } from 'next/router';
import Head from 'next/head';

export const ForbiddenErrorPage: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          Forbidden
        </title>
      </Head>
      <Result
        status={ '403' }
        title={ '403' }
        subTitle={ 'У вас нет доступа к этой странице.' }
        extra={
          <Button type="primary" onClick={ router.back }>
            Вернуться назад
          </Button>
        }
      />
    </>
  );
};
