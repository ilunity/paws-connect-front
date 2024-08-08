import { Interval } from 'luxon';
import { PickedSlot } from '@shared/ui/SlotsPicker/states';
import { getUtcDateTime } from '@shared/utils';

export const mergePickedSlots = (slots: PickedSlot[]) => {
  const intervals = slots.map(slot => Interval.fromDateTimes(
    getUtcDateTime(slot.from),
    getUtcDateTime(slot.to),
  ));

  return Interval.merge(intervals).map(interval => ({
    from: interval?.start?.toISO() as string,
    to: interval?.end?.toISO() as string,
  }));
};
