import { ANIMAL_TYPE, GENDER, IAnimal } from '@entities/animal';

export type ICreateAnimalBody = Omit<IAnimal, 'id'>;

export type IGetAnimalsParams = {
  shelterId: number;
  type: ANIMAL_TYPE;
  location: string;
  gender: GENDER;
};
