import { IAnimal } from '@entities/animal';

export interface AnimalsDashboardPageProps {
  shelterId: string;
  animals: IAnimal[];
}
