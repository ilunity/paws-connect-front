import React from 'react';
import './index.css';
import { withProviders } from './providers';
import { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Component { ...pageProps } />
  );
};

export default withProviders(App);
