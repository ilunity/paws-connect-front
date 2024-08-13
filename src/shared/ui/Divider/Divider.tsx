import React from 'react';
import { useStyles } from './Divider.styles';

export const Divider: React.FC = () => {
  const { styles } = useStyles();

  return (
    <div className={ styles.divider } />
  );
};
