import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    gap: token.marginSM,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  clickableContainer: {
    cursor: 'pointer',
    gap: token.marginSM,
    flexWrap: 'wrap',
  },
  text: {
    fontSize: token.fontSizeXL,
  },
}));
