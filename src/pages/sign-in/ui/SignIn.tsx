import React from 'react';
import { SignIn as ClerkSignIn } from '@clerk/nextjs';
import Head from 'next/head';


export const SignIn: React.FC = () => {
  return (
    <>
      <Head>
        <title>
          Войти
        </title>
      </Head>
      <ClerkSignIn />
    </>
  );
};
