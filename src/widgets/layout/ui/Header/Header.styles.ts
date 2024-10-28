import { createStyles } from 'antd-style';
import { theme } from 'antd';
import { LAYOUT_PADDING_HORIZONTAL, SM_LAYOUT_PADDING_HORIZONTAL } from '@widgets/layout/ui/consts';

export const useDynamicTokenStyles = () => {
  const { token } = theme.useToken();

  return createStyles(({ css, responsive }) => ({
    container: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: transparent;
        border-bottom: 2px solid ${token.colorPrimary};

        padding: 0 ${LAYOUT_PADDING_HORIZONTAL};

        ${responsive.sm} {
            padding: 0 ${SM_LAYOUT_PADDING_HORIZONTAL};
        }
    `,
    logo: {
      fontWeight: 'bold',
      color: token.colorPrimary,
      fontSize: token.fontSizeHeading3,
    },
    userButtonWrapper: {
      display:'flex',
      justifyContent: 'flex-end'
    },
  }))();
};
