import { createStyles, css } from 'antd-style';

export const useStyles = createStyles(({ token , responsive}) => ({
  container: css`
    gap: ${token.marginXXL}px;
      
      ${responsive.lg} {
          flex-direction: column;
      }
  `,
  imageWrapper: css`
      width: 100%;
      max-width: 750px;

      ${responsive.xl} {
          width: 550px;
      }
      
      ${responsive.lg} {
           width: 100%;
       }
  `,
  image: {
    objectFit: 'cover',
    borderRadius: token.borderRadiusLG,
    border: `1px solid ${token.colorBorder}`,
    aspectRatio: '16 / 9',
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
