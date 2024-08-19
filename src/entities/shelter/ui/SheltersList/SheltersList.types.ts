import { IShelter } from '@entities/shelter';

export interface SheltersListProps {
  shelters: IShelter[];
  onClick: (shelterId: string) => void;
}
