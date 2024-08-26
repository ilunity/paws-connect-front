import { USER_ROLES } from '@shared/types';

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: `${USER_ROLES}`;
}
