import React from 'react';
import { SlotProps } from './Slot.types';
import { useStyles } from './Slot.styles';
import { Typography } from 'antd';
import { observer } from 'mobx-react-lite';

export const Slot: React.FC<SlotProps> = observer((
  {
    title,
    duration,
    slot,
    slotsPickerState,
  },
) => {
  const { styles } = useStyles({ duration, available: slot.available, picked: slot.picked });

  return (
    <div
      className={ styles.container }
      onClick={ () => slotsPickerState.toggleSlot(slot) }
    >
      <Typography.Text>
        { title }
      </Typography.Text>
    </div>
  );
});
