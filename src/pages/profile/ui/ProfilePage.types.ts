import { IUser } from '@entities/user';
import { IShelter } from '@entities/shelter';

export interface ProfilePageProps {
  user: IUser;
  shelters: IShelter[];
}
