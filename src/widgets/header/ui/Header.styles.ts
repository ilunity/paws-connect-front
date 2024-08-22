import { createStyles } from 'antd-style';
import { theme } from 'antd';

export const useDynamicTokenStyles = () => {
  const { token } = theme.useToken();

  return createStyles(() => ({
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'transparent',
      borderBottom: '2px solid ' + token.colorPrimary,
    },
    logo: {
      fontWeight: 'bold',
      color: token.colorPrimary,
      fontSize: token.fontSizeHeading3,
    },
  }))();
};
