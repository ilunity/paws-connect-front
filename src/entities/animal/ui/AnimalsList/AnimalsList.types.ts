import { IAnimal } from '@entities/animal';

export interface AnimalsListProps {
  animals: IAnimal[];
  onClick: (animalId: string) => void;
}
