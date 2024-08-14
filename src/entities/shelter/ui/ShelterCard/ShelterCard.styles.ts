import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  title: {
    fontSize: token.fontSizeLG,
  },
  description: {
    height: token.fontSize * token.lineHeight * 6,
  },
}));
