import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    columnGap: token.marginSM,
    rowGap: token.marginXS,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  clickableContainer: {
    cursor: 'pointer',
    columnGap: token.marginSM,
    flexWrap: 'wrap',
  },
  sideContainer: {
    display: 'flex',
    columnGap: token.marginSM,
    rowGap: token.marginXS,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  text: {
    fontSize: token.fontSizeXL,
  },
}));
