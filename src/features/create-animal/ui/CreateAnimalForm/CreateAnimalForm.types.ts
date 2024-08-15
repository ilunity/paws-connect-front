import { ICreateAnimalBody } from '@entities/animal/api/types';

export type FieldType = Omit<ICreateAnimalBody, 'shelterId'>;

export const enum CREATE_ANIMAL_FORM_TYPES {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
}

export type CreateAnimalFormProps = {
  onSuccess: () => void;
  initialValues?: undefined;
  type: `${CREATE_ANIMAL_FORM_TYPES.CREATE}`;
  animalId?: undefined;
  shelterId: string;
} | {
  onSuccess?: () => void;
  initialValues: FieldType;
  type: `${CREATE_ANIMAL_FORM_TYPES.UPDATE}`;
  animalId: string;
  shelterId?: undefined;
}
