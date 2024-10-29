import { createStyles } from 'antd-style';
import {
  LAYOUT_PADDING_HORIZONTAL,
  LAYOUT_PADDING_VERTICAL,
  MD_LAYOUT_PADDING_HORIZONTAL,
  MD_LAYOUT_PADDING_VERTICAL,
} from '@widgets/layout/utils/consts';

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

      padding: ${LAYOUT_PADDING_VERTICAL} ${LAYOUT_PADDING_HORIZONTAL};

      ${responsive.md} {
          padding: ${MD_LAYOUT_PADDING_VERTICAL} ${MD_LAYOUT_PADDING_HORIZONTAL};
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
