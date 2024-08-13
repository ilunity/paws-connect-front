import { ANIMAL_TYPE, IAnimal } from '@entities/animal';
import { GENDER } from '@shared/types';

export type ICreateAnimalBody = Omit<IAnimal, 'id'>;

export type IGetAnimalsParams = {
  shelterId: number;
  type: ANIMAL_TYPE;
  location: string;
  gender: GENDER;
};
