import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  description: {
    minHeight: token.fontSize * token.lineHeight * 4,
  }
}));
