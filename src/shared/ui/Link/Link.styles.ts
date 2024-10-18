import { createStyles } from 'antd-style';
import { theme } from 'antd';

export interface StylesProps {
  size?: 'default' | 'large';
}

export const useDynamicTokenStyles = (props?: StylesProps) => {
  const { token } = theme.useToken();

  return createStyles(({ css }, { size = 'default' }: StylesProps) => ({
    buttonLink: css`
        color: ${token.colorPrimary};
        padding: ${token.paddingXXS}px;
        font-size: ${size === 'large' ? token.fontSizeXL : token.fontSize}px;

        &:hover {
            border-bottom: 1px solid ${token.colorPrimary};
        }

        &:active {
            opacity: 0.8;
        }
    `,
    textLink: css`
        color: ${token.colorLink};

        &:hover {
            color: ${token.colorLinkHover};
        }

        &:active {
            color: ${token.colorLinkActive};
        }
    `,
  }))({ size: 'large' });
};
