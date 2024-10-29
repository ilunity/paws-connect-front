import { IAnimal } from '@entities/animal';

export interface AnimalsPageProps {
  paginatedAnimals: IAnimal[];
  animalsCount: number;
  sheltersCities: string[];
}
