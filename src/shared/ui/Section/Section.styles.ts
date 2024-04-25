import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    width: '100%',
    flexDirection: 'column',
    background: token.colorBgContainer,
    padding: token.paddingMD,
    marginBottom: token.marginXL,
  },
  title: {
    marginBottom: token.marginMD,
  },
}));
