import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    display: 'inline-block',
    padding: token.padding,
    borderRadius: token.borderRadius,
    background: token.colorBgElevated,
    boxShadow: token.boxShadowSecondary,
  }
}));
