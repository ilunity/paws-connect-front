import { api } from '@shared/api';

class UserService {
  getOne(userId: string) {
    return api.get(`users/${userId}`);
  }
}

export const userService = new UserService();
