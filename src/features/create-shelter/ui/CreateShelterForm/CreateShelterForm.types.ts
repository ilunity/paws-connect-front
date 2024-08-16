import { PhoneNumber } from 'antd-phone-input';

export type FieldType = {
  name: string;
  description: string;
  location: string;
  tel: PhoneNumber;
};

export const enum CREATE_SHELTER_FORM_TYPES {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
}

export type CreateShelterFormProps = {
  onSuccess: () => void;
  initialValues?: undefined;
  type: `${CREATE_SHELTER_FORM_TYPES.CREATE}`;
  shelterId?: undefined;
} | {
  onSuccess?: () => void;
  initialValues: FieldType;
  type: `${CREATE_SHELTER_FORM_TYPES.UPDATE}`;
  shelterId: string;
}
