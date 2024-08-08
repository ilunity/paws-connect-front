import { GENDER } from '@shared/types';

export interface GenderSelectProps {
  value?: `${GENDER}`;
  onChange?: (gender: `${GENDER}`) => void;
}
