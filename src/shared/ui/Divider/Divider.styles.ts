import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  divider: {
    width: '100%',
    borderBottom: '1px solid ' + token.colorText,
  },
}));
