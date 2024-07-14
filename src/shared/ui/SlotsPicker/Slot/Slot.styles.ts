import { createStyles, css } from 'antd-style';
import { DEFAULT_SLOT_HEIGHT, GAP_HEIGHT, MIN_SLOT_DURATION, SLOT_WIDTH } from '../consts';

interface StylesProps {
  duration: string;
  available: boolean;
  picked: boolean;
}

export const useStyles = createStyles(({ token }, { duration, available, picked }: StylesProps) => {
  const durationMultiplier = +duration / MIN_SLOT_DURATION;
  const slotHeight = durationMultiplier * DEFAULT_SLOT_HEIGHT - GAP_HEIGHT;

  return {
    container: css`
      background: ${
        available
          ? token.colorSuccessBorder
          : picked
            ? token.colorInfoBorder
            : token.colorErrorBorder
      };
      border-radius: ${token.borderRadiusXS}px;
      width: ${SLOT_WIDTH}px;
      height: ${slotHeight}px;
      cursor: ${(available || picked ? 'pointer' : 'not-allowed')};
      margin: 0 ${token.paddingXXS}px;

      &:hover {
        background: ${
          available
            ? token.colorSuccessBorderHover
            : picked
              ? token.colorInfoBorderHover 
              : token.colorErrorBorder
          };
      }
    `,
  };
});
