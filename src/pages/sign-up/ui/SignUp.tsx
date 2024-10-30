import React from 'react';
import { SignUp as ClerkSignUp } from '@clerk/nextjs';
import Head from 'next/head';
import { AlignLayout } from '@widgets/layout';


export const SignUp: React.FC = () => {
  return (
    <AlignLayout>
      <Head>
        <title>
          Зарегистрироваться
        </title>
      </Head>
      <ClerkSignUp />
    </AlignLayout>
  );
};
