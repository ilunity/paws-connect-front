import { ISOSlot } from 'slot-calculator';
import { SlotProps } from './Slot/Slot.types';
import { PickedSlotReturn } from './slots-picker.state';

export interface SlotsPickerProps {
  duration: SlotProps['duration'];
  availability: ISOSlot[];
  unavailability?: ISOSlot[];
  onChange: (slots: PickedSlotReturn[]) => void;
  from: string;
  to: string;
}
