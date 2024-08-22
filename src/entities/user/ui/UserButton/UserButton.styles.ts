import { createStyles } from 'antd-style';
import { theme } from 'antd';

export const useDynamicTokenStyles = () => {
  const { token } = theme.useToken();

  return createStyles(() => ({
    container: {
      lineHeight: token.lineHeightSM,
      cursor: 'pointer',
    },
    username: {
      color: token.colorPrimary,
    },
    downIcon: {
      color: token.colorPrimary,
    },
  }))();
}
