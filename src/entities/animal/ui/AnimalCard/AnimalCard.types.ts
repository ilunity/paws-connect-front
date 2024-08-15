import { IAnimal } from '@entities/animal';
import { ReactNode } from 'react';

export interface AnimalCardProps {
  animal: IAnimal;
  onClick: (animalId: string) => void;
  extra?: ReactNode;
}
