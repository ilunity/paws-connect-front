import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: token.colorTextLightSolid,
    fontSize: token.fontSizeXL,
  },
}));
