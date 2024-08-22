import { createStyles, css } from 'antd-style';
import { theme } from 'antd';

export const useDynamicTokenStyles = () => {
  const { token } = theme.useToken();

  return createStyles(({ responsive }) => ({
    container: css`
        flex: 1;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: ${token.marginXL}px;
        overflow: hidden;
        position: relative;

        ${responsive.lg} {
            flex-direction: column;
            gap: 0;
        }
    `,
    textBlockContainer: css`
        max-width: 530px;
        gap: ${token.marginXL}px;

        ${responsive.sm} {
            gap: ${token.marginSM}px;
        }
    `,
    textPrimary: css`
        font-size: ${token.fontSizeHeading1}px;

        ${responsive.sm} {
            font-size: ${token.fontSizeHeading2}px;
        }
    `,
    textSecondary: css`
        font-size: ${token.fontSizeXL}px;
    `,
    imageWrapper: css`
        align-self: end;
        margin-right: 100px;
        min-width: 400px;
        width: 400px;
        position: relative;

        ${responsive.lg} {
            min-width: 300px;
            width: 300px;
            margin-right: 75px;
        }

        ${responsive.sm} {
            min-width: 200px;
            width: 200px;
            margin-right: 50px;
        }
    `,
    circleWrapper: css`
        height: 470px;
        width: 500px;
        overflow: hidden;
        position: absolute;
        bottom: 0;

        ${responsive.lg} {
            height: 345px;
            width: 375px;
            right: -75px;
        }

        ${responsive.sm} {
            height: 220px;
            width: 250px;
            right: -50px;
        }
    `,
    bigCircle: {
      height: 'calc(100% + 30px)',
      width: '100%',
      background: token.colorPrimary,
      opacity: 0.9,
      borderRadius: '50%',
    },
  }))();
};
