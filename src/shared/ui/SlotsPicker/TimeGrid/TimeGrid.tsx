import React from 'react';
import { TimeGridProps } from './TimeGrid.types';
import { useStyles } from './TimeGrid.styles';
import { Flex, Typography } from 'antd';
import { DateTime } from 'luxon';
import { SlotsDivider } from '@shared/ui/SlotsPicker/SlotsDivider';

export const TimeGrid: React.FC<TimeGridProps> = ({ from, to }) => {
  const { styles } = useStyles();

  const timeElements = [];
  for (let i = from; i < to + 1; i++) {
    timeElements.push(
      <React.Fragment key={ i }>
        <Typography.Text className={ styles.timeText }>
          { DateTime.fromObject({hour: i}).toFormat('HH:mm') }
        </Typography.Text>
        { i !== to && <SlotsDivider /> }
      </React.Fragment>,
    );
  }

  return (
    <Flex className={ styles.container }>
      <div className={ styles.stub } />
      { timeElements }
    </Flex>
  );
};
