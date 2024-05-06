import React, { useEffect, useState } from 'react';
import { SlotsPickerProps } from './SlotsPicker.types';
import { useStyles } from './SlotsPicker.styles';
import { Flex } from 'antd';
import { observer } from 'mobx-react-lite';
import { SlotsPickerState } from './SlotsPicker.state';
import { SlotsContainer } from './SlotsContainer';
import { TimeGrid } from './TimeGrid';

export const SlotsPicker: React.FC<SlotsPickerProps> = observer((
  {
    duration,
    availability,
    unavailability,
    onChange,
  },
) => {
  const { styles } = useStyles();
  const [slotsPickerState]
    = useState<SlotsPickerState>(() => new SlotsPickerState(
      {
        duration,
        availability,
        unavailability,
      },
    ));

  useEffect(() => {
    slotsPickerState.subscribe(onChange);
  }, [slotsPickerState]);

  return (
    <Flex className={ styles.container }>
      <TimeGrid { ...slotsPickerState.getInterval() } />
      {
        Object.entries(slotsPickerState.allSlotsByDay).map(([day, slots]) => (
          <SlotsContainer
            key={ day }
            slots={ slots }
            day={ day }
            duration={ duration }
            slotsPickerState={ slotsPickerState }
          />
        ))
      }
    </Flex>
  );
});
