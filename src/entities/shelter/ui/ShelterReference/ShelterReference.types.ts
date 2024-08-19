import { IShelter } from '@entities/shelter';

export interface ShelterReferenceProps {
  shelter: IShelter;
  onClick: (shelterId: string) => void;
  size?: 'small' | 'default';
}
