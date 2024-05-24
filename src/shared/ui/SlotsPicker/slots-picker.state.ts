import { getSlots, InputSlot, OutputSlot } from 'slot-calculator';
import { makeAutoObservable } from 'mobx';
import { SlotProps } from './Slot/Slot.types';
import { getUtcDateTime } from '@shared/utils';
import { Settings } from 'luxon';

Settings.defaultZone = 'utc';

export interface PickerStateSlot extends OutputSlot {
  picked: boolean;
}

export type PickedSlotReturn = Pick<OutputSlot, 'from' | 'to'>;

type SubscribedFunction = (slots: PickedSlotReturn[]) => void;

export class SlotsPickerState {
  pickedSlots: PickerStateSlot[] = [];
  allSlotsByDay: Record<string, PickerStateSlot[]> = {};
  availableSlotsByDay: Record<string, OutputSlot[]> = {};
  private subscribed: SubscribedFunction[] = [];

  constructor(
    {
      availability,
      unavailability,
      duration,
      from,
      to
    }: {
      duration: SlotProps['duration'];
      availability: InputSlot[];
      unavailability?: InputSlot[];
      from: string;
      to: string;
    },
  ) {
    const { allSlotsByDay, availableSlotsByDay } = getSlots({
      duration: +duration,
      availability,
      unavailability,
      outputTimezone: 'UTC',
      from,
      to
    });

    this.allSlotsByDay = this.initMetadata(allSlotsByDay);
    this.availableSlotsByDay = availableSlotsByDay;

    makeAutoObservable(this);
  }

  private initMetadata(slotsByDay: Record<string, OutputSlot[]>): Record<string, PickerStateSlot[]> {
    const slotsWithMetadata = slotsByDay as Record<string, PickerStateSlot[]>;

    for (const day of Object.keys(slotsWithMetadata)) {
      for (let slot of slotsWithMetadata[day]) {
        slot = { ...slot, picked: false };
      }
    }

    return slotsWithMetadata;
  }

  subscribe(callback: SubscribedFunction) {
    this.subscribed.push(callback);
  }

  private onChange() {
    for (const subscriber of this.subscribed) {
      subscriber(this.pickedSlots.map(v => ({ from: v.from, to: v.to })));
    }
  }

  getMaxDaytimeInterval() {
    let minHour = 23;
    let maxHour = 0;

    const available = this.availableSlotsByDay;

    for (const day of Object.keys(available)) {
      const slotsCount = available[day].length;

      const firstSlot = available[day][0].from;
      const lastSlot = available[day][slotsCount - 1].from;

      if (getUtcDateTime(firstSlot).hour < minHour) {
        minHour = getUtcDateTime(firstSlot).hour;
      }
      if (getUtcDateTime(lastSlot).hour > maxHour) {
        maxHour = getUtcDateTime(lastSlot).hour;
      }
    }

    return { from: minHour, to: maxHour };
  }

  addSlot = (slot: PickerStateSlot) => {
    const desiredSlot = this.searchSlotAmongAll(slot);
    desiredSlot.available = false;
    slot.picked = true;

    this.pickedSlots.push(slot);
    this.onChange();
  };

  deleteSlot(slot: PickerStateSlot) {
    if (!slot.picked) {
      return;
    }

    const desiredSlot = this.searchSlotAmongAll(slot);
    desiredSlot.available = true;
    slot.picked = false;
    this.deleteFromPicked(slot);
    this.onChange();
  }

  toggleSlot(slot: PickerStateSlot) {
    const desiredSlot = this.searchSlotAmongAll(slot);
    if (desiredSlot.available) {
      this.addSlot(slot);
      return;
    }

    this.deleteSlot(slot);
  }

  private deleteFromPicked(slot: PickerStateSlot) {
    const desiredSlotIndex = this.searchSlotIndexAmongPicked(slot);
    this.pickedSlots.splice(desiredSlotIndex, 1);
  }

  private searchSlotAmongAll(slot: PickerStateSlot) {
    const day = getUtcDateTime(slot.from).toISODate() as string;
    const daySlots = this.allSlotsByDay[day];
    const desiredSlot = daySlots.find(value => value.from === slot.from) as OutputSlot;

    return desiredSlot;
  }

  private searchSlotIndexAmongPicked(slot: PickerStateSlot) {
    const desiredSlotIndex = this.pickedSlots.findIndex(value => value.from === slot.from);
    return desiredSlotIndex;
  }
}
