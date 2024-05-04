import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    gap: token.marginSM,
  },
  text: {
    fontSize: token.fontSizeXL,
    verticalAlign: 'center',
  },
  userRoleTag: {
    marginLeft: 'auto',
  }
}));
