import { ClerkProvider } from '@clerk/nextjs';
import { AppProps, AppType } from 'next/app';

// eslint-disable-next-line react/display-name
export const withAuth = (Component: AppType) => (props: AppProps) => (
  <ClerkProvider>
    <Component { ...props } />
  </ClerkProvider>
);
