import { PickedSlot } from '@shared/ui/SlotsPicker/states';
import { weekDays, WeekDaySlot } from '@shared/ui/SlotsPicker/WeekDaysSlotsPicker/WeekDaysSlotsPicker.types';
import { DateTime } from 'luxon';

export abstract class SlotsPickerConverter {
  static picked2WeekDay(slots: PickedSlot[]): WeekDaySlot[] {
    return slots.map(slot => ({
      from: DateTime.fromISO(slot.from).toISOTime() as string,
      to: DateTime.fromISO(slot.to).toISOTime() as string,
      day: weekDays[DateTime.fromISO(slot.from).weekday - 1],
    }));
  }
}
