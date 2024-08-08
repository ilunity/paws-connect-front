import { ANIMAL_TYPE } from '@entities/animal';
import { GENDER } from '@shared/types';

export type FieldType = {
  location: string;
  gender: `${GENDER}`;
  type: `${ANIMAL_TYPE}`;
};

export interface GetAnimalsFormProps {}
