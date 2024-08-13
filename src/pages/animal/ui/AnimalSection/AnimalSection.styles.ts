import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    gap: token.marginXXL,
  },
  image: {
    objectFit: 'cover',
    borderRadius: token.borderRadiusLG,
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
