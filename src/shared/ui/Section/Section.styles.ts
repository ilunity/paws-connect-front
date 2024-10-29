import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css, responsive }) => ({
  container: {
    width: '100%',
    flexDirection: 'column',
    marginBottom: token.marginXL,
  },
  header: css`
      justify-content: space-between;
      align-items: center;
      column-gap: ${token.marginXL}px;
      flex-wrap: wrap;
      margin-bottom: ${token.marginMD}px;
  `,
  actionContainer: {
    marginTop: token.marginXS,
  },
  title: {
    marginBottom: '0 !important',
  },
}));
