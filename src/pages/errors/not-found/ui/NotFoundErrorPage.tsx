'use client';

import React from 'react';
import { Button, Result } from 'antd';
import { useRouter } from 'next/router';
import Head from 'next/head';

export const NotFoundErrorPage: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          Not Found
        </title>
      </Head>
      <Result
        status={ '404' }
        title={ '404' }
        subTitle={ 'Ресурс не найден.' }
        extra={
          <Button type="primary" onClick={ router.back }>
            Вернуться назад
          </Button>
        }
      />
    </>
  );
};
