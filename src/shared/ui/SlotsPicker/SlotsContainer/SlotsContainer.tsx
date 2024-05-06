import React from 'react';
import { SlotsContainerProps } from './SlotsContainer.types';
import { useStyles } from './SlotsContainer.styles';
import { Flex, Typography } from 'antd';
import { Slot } from '../Slot';
import { DateTime } from 'luxon';
import { SlotsDivider } from '../SlotsDivider';
import { observer } from 'mobx-react-lite';
import { getUtcDateTime } from '@shared/utils';

export const SlotsContainer: React.FC<SlotsContainerProps> = observer((
  {
    duration,
    slots,
    day,
    slotsPickerState,
  },
) => {
  const { styles } = useStyles();

  const getSlots = () => {
    const interval = slotsPickerState.getInterval();

    const slotsElements = [];

    for (let i = 0; i < slots.length; i++) {
      const slot = slots[i];
      const slotHour = getUtcDateTime(slot.from).hour;
      const insideInterval = slotHour >= interval.from && slotHour <= interval.to;

      if (!insideInterval) {
        continue;
      }

      const isEndOfHour = getUtcDateTime(slot.to).minute === 0;
      const isLastSlot = i === slots.length - 1 || slotHour === interval.to;

      slotsElements.push(
        <React.Fragment key={ slot.from }>
          <Slot
            duration={ duration }
            slot={ slot }
            slotsPickerState={ slotsPickerState }
          />
          { isEndOfHour && !isLastSlot ? <SlotsDivider /> : '' }
        </React.Fragment>,
      );
    }

    return slotsElements;
  };


  return (
    <Flex className={ styles.container }>
      <Typography.Text className={ styles.dayGrid }>
        { DateTime.fromISO(day).toFormat('dd.MM EEE', { locale: 'ru' }) }
      </Typography.Text>
      { getSlots() }
    </Flex>
  );
});
