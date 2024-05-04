import { ICreateAnimalBody } from '@entities/animal/api/types';

export type FieldType = Omit<ICreateAnimalBody, 'shelterId'>;

export interface CreateAnimalFormProps {
  onSuccess?: () => void;
  initialValues?: FieldType;
  shelterId: number;
}
