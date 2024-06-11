import { IUser } from '@entities/user';

export interface IShelter {
  user: IUser;
  id: number;
  name: string;
  description: string;
  location: string;
  tel: string;
}
