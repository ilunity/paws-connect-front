import { IUser } from '@entities/user';

export interface IShelter {
  user: IUser;
  id: string;
  name: string;
  description: string;
  city: string;
  address: string;
}
