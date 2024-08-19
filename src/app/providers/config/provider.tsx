import { AppProps, AppType } from 'next/app';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import { theme } from './theme';

// eslint-disable-next-line react/display-name
export const ConfigProvider = (Component: AppType) => (props: AppProps) => (
  <AntdConfigProvider
    theme={ theme }
  >
    <Component { ...props } />
  </AntdConfigProvider>
);
