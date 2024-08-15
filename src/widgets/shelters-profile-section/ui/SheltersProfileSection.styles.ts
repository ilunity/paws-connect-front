import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    flexDirection: 'column',
    gap: token.marginSM,
  },
}));
