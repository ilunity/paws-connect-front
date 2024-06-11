import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
  },
  title: {
    alignItems: 'center',
    marginBottom: '0px !important',
  },
  titleIcon: {
    marginLeft: token.marginXS,
    color: token.colorLink,
  },
}));
