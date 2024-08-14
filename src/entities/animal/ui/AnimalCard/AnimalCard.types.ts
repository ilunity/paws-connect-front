import { IAnimal } from '@entities/animal';

export interface AnimalCardProps {
  animal: IAnimal;
  onClick: (animalId: number) => void;
}
