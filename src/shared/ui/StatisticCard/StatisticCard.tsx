import React from 'react';
import { StatisticCardProps } from './StatisticCard.types';
import { Card, Statistic } from 'antd';
import { useStyles } from './StatisticCard.styles';

export const StatisticCard: React.FC<StatisticCardProps> = (props) => {
  const { styles } = useStyles();

  return (
    <Card bordered={ false } size="small" className={ styles.container }>
      <Statistic { ...props } />
    </Card>
  );
};
