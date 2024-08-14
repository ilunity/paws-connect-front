import { createStyles } from 'antd-style';

const linkFontSize: Record<'small' | 'large', 'fontSizeSM' | 'fontSizeLG'> = {
  small: 'fontSizeSM',
  large: 'fontSizeLG',
};

interface StylesProps {
  size: 'small' | 'large';
}

export const useStyles = createStyles(({ token }, { size }: StylesProps) => {
  return {
    linkText: {
      fontSize: token[linkFontSize[size]],
    },
  };
});
