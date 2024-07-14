import { createStyles, css } from 'antd-style';
import { DEFAULT_SLOT_HEIGHT, GAP_HEIGHT, MAX_SLOT_DURATION, MIN_SLOT_DURATION, SLOT_WIDTH } from '../consts';

export const useStyles = createStyles(({ token }) => {
  const slotHeight = DEFAULT_SLOT_HEIGHT * (MAX_SLOT_DURATION / MIN_SLOT_DURATION) - GAP_HEIGHT;

  return {
    container: {
      flexDirection: 'column',
      gap: token.marginXXS,
    },
    stub: {
      height: slotHeight,
    },
    timeText: css`
        width: ${SLOT_WIDTH}px;
        text-align: center;
        line-height: ${slotHeight}px;
    `,
  };
});
