import { http } from '@shared/api';

class UserService {
  getOne(userId: string) {
    return http.get(`users/${userId}`);
  }
}

export const userService = new UserService();
