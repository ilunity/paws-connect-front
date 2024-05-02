import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  image: {
    borderRadius: token.borderRadiusSM,
  },
  description: {
    minHeight: token.fontSize * token.lineHeight * 8,
  }
}));
