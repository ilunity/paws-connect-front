import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  divider: {
    height: 1,
    width: '100%',
    background: token.colorText,
  },
}));
