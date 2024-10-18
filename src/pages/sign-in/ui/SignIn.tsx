import React from 'react';
import { SignIn as ClerkSignIn } from '@clerk/nextjs';


export const SignIn: React.FC = () => {
  return (<ClerkSignIn />);
};
