import { IShelter } from '@entities/shelter';
import { IAnimal } from '@entities/animal';

export interface ShelterPageProps {
  shelter: IShelter;
  animals: IAnimal[];
}
