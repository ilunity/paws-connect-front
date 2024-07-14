import { Interval } from 'luxon';
import { getUtcDateTime } from '@shared/utils/get-utc-datetime';
import { PickedSlotReturn } from '@shared/ui/SlotsPicker/slots-picker.state';

export const mergePickedSlots = (slots: PickedSlotReturn[]) => {
  const intervals = slots.map(slot => Interval.fromDateTimes(
    getUtcDateTime(slot.from),
    getUtcDateTime(slot.to),
  ));

  return Interval.merge(intervals);
};
