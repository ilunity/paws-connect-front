import { ANIMAL_TYPE, IAnimal } from '@entities/animal';
import { GENDER } from '@shared/types';

export type ICreateAnimalBody = Omit<IAnimal, 'id'>;

export type IGetAnimalsParams = {
  shelterId: string;
  type: ANIMAL_TYPE;
  location: string;
  gender: GENDER;
};

export type IUpdateAnimalBody = Partial<Omit<ICreateAnimalBody, 'shelterId'>> & {
  animalId: string;
};
