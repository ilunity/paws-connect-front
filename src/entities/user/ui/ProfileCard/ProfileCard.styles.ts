import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    justifyContent: 'space-between',
    columnGap: token.marginLG,
    rowGap: token.marginXS,
    flexWrap: 'wrap',
  },
  userPrimaryInfoContainer: {
    columnGap: token.marginSM,
    flexWrap: 'wrap',
  },
  text: {
    fontSize: token.fontSizeXL,
    verticalAlign: 'center',
  },
  userRoleTag: {
    display: 'flex',
    alignItems: 'center',
  }
}));
