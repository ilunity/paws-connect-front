import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  logo: {
    fontWeight: 'bold',
    color: token.colorPrimary,
    fontSize: token.fontSizeHeading3,
  },
  logoIcon: {
    marginRight: token.marginXS,
    fontSize: token.fontSizeHeading3,
    color: token.colorPrimary,
  },
}));
