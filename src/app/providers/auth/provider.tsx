import { ClerkProvider } from '@clerk/nextjs';
import { AppProps, AppType } from 'next/app';

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

// eslint-disable-next-line react/display-name
export const withAuth = (Component: AppType) => (props: AppProps) => (
  <ClerkProvider publishableKey={ publishableKey }>
    <Component { ...props } />
  </ClerkProvider>
);
