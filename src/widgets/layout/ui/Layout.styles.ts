import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: '32px 128px',
  },
  content: {
    flexGrow: 1,
    padding: token.padding,
    background: token.colorBgContainer,
    borderRadius: token.borderRadiusLG,
  },
}));
