import { IShelter } from '@entities/shelter';

export type ICreateShelterBody = Omit<IShelter, 'user' | 'id'> & {
  userId: string;
};

export type IUpdateShelterBody = Partial<Omit<ICreateShelterBody, 'userId'>> & {
  shelterId: number;
};
