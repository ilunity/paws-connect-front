import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  title: {
    alignItems: 'center',
    cursor: 'pointer',
  },
  titleIcon: {
    marginLeft: token.marginXS,
    color: token.colorLink,
  },
}));
