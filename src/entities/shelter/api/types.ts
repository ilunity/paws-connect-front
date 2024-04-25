import { IShelter } from '@entities/shelter';

export type ICreateShelterBody = Omit<IShelter, 'user' | 'id'> & {
  userId: string;
};
