import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token, responsive }) => ({
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  contentContainer: css`
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      padding: 32px 128px;

      ${responsive.sm} {
          padding: 16px 32px;
      }

      background: repeat url("/background/background-image.png");
  `,
  asideLayout: {
    minHeight: '100%',
  },
  aside: {
    minHeight: '100%',
    width: 200,
    overflow: 'auto',
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
  },
}));
