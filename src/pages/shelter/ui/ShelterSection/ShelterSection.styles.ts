import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  description: {
    fontSize: token.fontSizeXL,
  },
  location: {
    fontSize: token.fontSizeLG,
  },
  phoneNumberText: {
    fontSize: token.fontSizeLG,
  }
}));
