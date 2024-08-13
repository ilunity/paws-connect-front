import React from 'react';
import { StatisticCardProps } from './StatisticCard.types';
import { Card, Statistic } from 'antd';

export const StatisticCard: React.FC<StatisticCardProps> = (props) => {
  return (
    <Card styles={ { body: { padding: 12 } } } bordered={ false }>
      <Statistic { ...props } />
    </Card>
  );
};
