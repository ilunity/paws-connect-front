import { SlotProps } from '@shared/ui/SlotsPicker/Slot/Slot.types';
import { PickerStateSlot, SlotsPickerState } from '@shared/ui/SlotsPicker/slots-picker.state';

export interface SlotsContainerProps {
  duration: SlotProps['duration'];
  day: string;
  slots: PickerStateSlot[];
  slotsPickerState: SlotsPickerState;
}
