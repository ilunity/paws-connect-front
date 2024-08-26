import { createStyles, css } from 'antd-style';

export const useStyles = createStyles(({ token , responsive}) => ({
  container: css`
    gap: ${token.marginXXL}px;
      
      ${responsive.lg} {
          flex-direction: column;
      }
  `,
  imageWrapper: css`
      width: 600px;
      height: 350px;

      ${responsive.lg} {
          width: 500px;
          height: 300px;
      }

      ${responsive.sm} {
          width: 326px;
          height: 190px;
      }
  `,
  image: {
    objectFit: 'cover',
    borderRadius: token.borderRadiusLG,
    border: `1px solid ${token.colorBorder}`
  },
  animalInfoContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  animalsTagsContainer: {
    width: '100%',
    gap: token.marginSM,
    flexWrap: 'wrap',
    marginBottom: token.marginLG,
  },
  description: {
    fontSize: token.fontSizeXL,
  },
  card: {
    padding: token.paddingXS,
  },
}));
