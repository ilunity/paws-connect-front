import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    lineHeight: token.lineHeightSM,
    cursor: 'pointer',
  },
  username: {
    color: token.colorTextLightSolid,
  },
  downIcon: {
    color: token.colorTextLightSolid,
  },
}));
