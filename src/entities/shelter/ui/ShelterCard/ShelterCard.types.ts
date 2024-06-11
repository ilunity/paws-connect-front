import { IShelter } from '@entities/shelter';

export interface ShelterCardProps {
  shelter: IShelter;
  onClick: (shelterId: number) => void;
}
