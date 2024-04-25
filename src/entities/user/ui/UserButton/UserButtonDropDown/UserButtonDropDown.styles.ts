import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    minWidth: 150,
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  },
  divider:{
    margin: 0,
    color: token.colorBorderBg,
  }
}));
