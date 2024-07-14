import { PickerStateSlot, SlotsPickerState } from '../slots-picker.state';

export interface SlotProps {
  title?: string;
  duration: '60' | '30' | '15';
  slot: PickerStateSlot;
  slotsPickerState: SlotsPickerState;
}
