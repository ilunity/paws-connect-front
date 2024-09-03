import { api, ApiProtectedRequestFn } from '@shared/api';
import { IUser } from '@entities/user';

class UserService {
  getOne: ApiProtectedRequestFn<IUser, string> = (id, { request } = {}) => {
    return api.get(`users/${id}`, { request });
  };
}

export const userService = new UserService();
