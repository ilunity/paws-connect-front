import { createStyles } from 'antd-style';

export const useStyles = createStyles(({css, token }) => ({
  container: css`
      width: 200px;
      height: 110px;
      
      & .ant-upload-select {
          width: 100% !important;
          height: 100% !important;
      }
  `,
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
    borderRadius: token.borderRadiusLG,
  },
}));
