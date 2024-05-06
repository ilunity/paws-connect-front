import React from 'react';
import { useStyles } from './SlotsDivider.styles';

export const SlotsDivider: React.FC = () => {
  const { styles } = useStyles();

  return (
    <div className={ styles.divider } />
  );
};
