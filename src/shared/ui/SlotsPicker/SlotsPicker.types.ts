import { InputSlot } from 'slot-calculator';
import { SlotProps } from './Slot/Slot.types';
import { PickedSlotReturn } from './SlotsPicker.state';

export interface SlotsPickerProps {
  duration: SlotProps['duration'];
  availability: InputSlot[];
  unavailability?: InputSlot[];
  onChange: (slots: PickedSlotReturn[]) => void;
}
