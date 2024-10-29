import React from 'react';
import { SignUp as ClerkSignUp } from '@clerk/nextjs';
import Head from 'next/head';


export const SignUp: React.FC = () => {
  return (
    <>
      <Head>
        <title>
          Зарегистрироваться
        </title>
      </Head>
      <ClerkSignUp />
    </>
  );
};
