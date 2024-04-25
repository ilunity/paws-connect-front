import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    width: '100%',
    justifyContent: 'space-between',
  },
  logOutIcon: {
    color: token.colorLink,
  },
}));
