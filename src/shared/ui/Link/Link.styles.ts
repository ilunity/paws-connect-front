import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
  buttonLink: css`
      color: ${token.colorTextLightSolid};
      border: 1px solid transparent;
      border-bottom: 1px solid ${token.colorTextLightSolid};
      padding: ${token.paddingXXS}px;

      &:hover {
          border: 1px solid ${token.colorTextLightSolid};
          border-radius: ${token.borderRadiusSM}px;
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
}));
