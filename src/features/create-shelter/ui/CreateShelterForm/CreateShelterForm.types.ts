export type FieldType = {
  name: string;
  description: string;
  address: string;
  city: string;
};

export interface CreateShelterFormProps {
  onSuccess: () => void;
  initialValues?: FieldType;
}
