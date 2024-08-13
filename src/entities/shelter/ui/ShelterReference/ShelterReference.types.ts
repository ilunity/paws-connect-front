import { IShelter } from '@entities/shelter';

export interface ShelterReferenceProps {
  shelter: IShelter;
  onClick: (shelterId: number) => void;
}
