import { IAnimal } from '@entities/animal';

export interface AnimalsDashboardPageProps {
  animals: IAnimal[];
  isOwner: boolean;
}
