import React from 'react';
import { Link } from '@shared/ui';

export const SignInButton: React.FC = () => {
  return (
    <Link href={ 'https://lucky-foal-95.accounts.dev/sign-in' }>
      Войти
    </Link>
  );
};
