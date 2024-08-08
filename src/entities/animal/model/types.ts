import { GENDER } from '@shared/types';

export enum ANIMAL_TYPE {
  DOG = 'Собака',
  CAT = 'Кошка',
}

export const genderText: Record<`${GENDER}`, string> = {
  [GENDER.MALE]: 'Мальчик',
  [GENDER.FEMALE]: 'Девочка',
}

export enum ANIMAL_STATUS {
  FURLOUGH = 'FURLOUGH',
  EXPOSED = 'EXPOSED',
}

export interface IAnimal {
  id: number;
  name: string;
  age: number;
  breed: string;
  description: string;
  shelterId: number;
  gender: `${GENDER}`;
  avatar: string;
  status: `${ANIMAL_STATUS}`;
  type: string;
}
