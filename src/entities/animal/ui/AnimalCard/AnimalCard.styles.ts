import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css, responsive }) => ({
  container: {
    maxWidth: 300,
  },
  image: {
    height: 170,
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
    color: '#C5705D',
  },
  description: {
    minHeight: token.fontSize * token.lineHeight * 8,
  },
}));
