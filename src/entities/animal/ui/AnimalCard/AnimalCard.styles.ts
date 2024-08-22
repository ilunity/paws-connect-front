import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    maxWidth: 300,
    flex: 1,
  },
  image: {
    objectFit: 'cover',
  },
  textContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  primaryText: {
    fontSize: token.fontSizeXL,
    fontWeight: token.fontWeightStrong,
  },
  secondaryText: {
    fontSize: token.fontSizeLG,
  },
  description: {
    minHeight: token.fontSize * token.lineHeight * 8,
  },
}));
