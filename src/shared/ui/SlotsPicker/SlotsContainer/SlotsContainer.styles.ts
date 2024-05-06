import { createStyles } from 'antd-style';
import { DEFAULT_SLOT_HEIGHT, GAP_HEIGHT, MAX_SLOT_DURATION, MIN_SLOT_DURATION } from '@shared/ui/SlotsPicker/consts';

export const useStyles = createStyles(({ token }) => {
  const slotHeight = DEFAULT_SLOT_HEIGHT * (MAX_SLOT_DURATION / MIN_SLOT_DURATION) - GAP_HEIGHT;
  return {
    container: {
      flexDirection: 'column',
      gap: token.marginXXS,
    },
    dayGrid: {
      textAlign: 'center',
      lineHeight: `${slotHeight}px`,
    },
  };
});
