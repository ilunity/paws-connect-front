import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  uploadButton: {
    border: 0,
    background: 'none',
  },
  uploadButtonText: {
    marginBottom: token.marginXS,
  },
  img: {
    height: '100%',
    width: '100%',
    objectFit: 'contain',
  },
}));
