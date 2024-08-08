import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    flexDirection: 'row',
    gap: token.marginXXL,
  }
}));
