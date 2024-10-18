import React from 'react';
import { Link } from '@shared/ui';

export const SignInButton: React.FC = () => {
  return (
    <Link href={ '/sign-in' }>
      Войти
    </Link>
  );
};
