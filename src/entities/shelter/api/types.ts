import { IShelter } from '@entities/shelter';

export type ICreateShelterBody = Omit<IShelter, 'user' | 'id' | 'verified'> & {
  ownerId: string;
};

export type IUpdateShelterBody = Partial<Omit<ICreateShelterBody, 'ownerId'>> & {
  shelterId: string;
};
