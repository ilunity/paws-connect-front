import { createStyles } from 'antd-style';
import { theme } from 'antd';

export const useDynamicTokenStyles = () => {
  const { token } = theme.useToken();

  return createStyles(() => ({
    dropdownLink: {
      color: token.colorPrimary,
    },
  }))();
};
