import React from 'react';
import { SignIn as ClerkSignIn } from '@clerk/nextjs';
import Head from 'next/head';
import { AlignLayout, Layout } from '@widgets/layout';


export const SignIn: React.FC = () => {
  return (
    <AlignLayout>
      <Head>
        <title>
            Войти
        </title>
      </Head>
      <ClerkSignIn />
    </AlignLayout>
  );
};
