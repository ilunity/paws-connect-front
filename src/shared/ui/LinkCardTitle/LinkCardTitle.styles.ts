import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  title: {
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: '0px !important',
  },
  titleIcon: {
    marginLeft: token.marginXS,
    color: token.colorLink,
  },
}));
