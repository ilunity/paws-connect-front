import { GENDER } from '@shared/types';
import { IShelter } from '@entities/shelter';

export enum ANIMAL_TYPE {
  DOG = 'Собака',
  CAT = 'Кошка',
}

export const genderText: Record<`${GENDER}`, string> = {
  [GENDER.MALE]: 'Мальчик',
  [GENDER.FEMALE]: 'Девочка',
};

export enum ANIMAL_STATUS {
  FURLOUGH = 'FURLOUGH',
  EXPOSED = 'EXPOSED',
}

export interface IAnimal {
  id: string;
  name: string;
  age: number;
  breed: string;
  description: string;
  shelterId: string;
  gender: `${GENDER}`;
  avatar: string;
  status: `${ANIMAL_STATUS}`;
  type: string;
}

export type IExtendedAnimal = Omit<IAnimal, 'shelterId'> & {
  shelter: IShelter;
}
