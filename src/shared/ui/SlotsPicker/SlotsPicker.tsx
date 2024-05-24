import React, { useEffect, useState } from 'react';
import { SlotsPickerProps } from './SlotsPicker.types';
import { useStyles } from './SlotsPicker.styles';
import { Flex } from 'antd';
import { observer } from 'mobx-react-lite';
import { SlotsPickerState } from './slots-picker.state';
import { SlotsContainer } from './SlotsContainer';
import { TimeGrid } from './TimeGrid';
import { SlotsPickerHeader } from './SlotsPickerHeader';
import { CurrenWeekState } from './current-week.state';

export const SlotsPicker: React.FC<SlotsPickerProps> = observer((
  {
    duration,
    availability,
    unavailability,
    onChange,
    from,
    to,
  },
) => {
  const { styles } = useStyles();
  const [slotsPickerState]
    = useState<SlotsPickerState>(() => new SlotsPickerState(
      {
        duration,
        availability,
        unavailability,
        from,
        to,
      },
    ));

  const [currentWeek] = useState<CurrenWeekState>(() => new CurrenWeekState(from, to));

  useEffect(() => {
    slotsPickerState.subscribe(onChange);
  }, [slotsPickerState]);


  return (
    <div className={ styles.container }>
      <SlotsPickerHeader currentWeek={ currentWeek } />
      <Flex>
        <TimeGrid
          from={ slotsPickerState.getMaxDaytimeInterval().from }
          to={ slotsPickerState.getMaxDaytimeInterval().to }
        />
        {
          currentWeek.getDaysList().map(day => {
            const slots = slotsPickerState.allSlotsByDay[day];

            return (<SlotsContainer
              key={ day }
              slots={ slots }
              day={ day }
              duration={ duration }
              slotsPickerState={ slotsPickerState }
            />);
          },
          )
        }
      </Flex>
    </div>
  );
});
