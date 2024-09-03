import { api, ApiProtectedRequestFn, ApiPublicRequestFn } from '@shared/api';
import { IAnimal, IExtendedAnimal } from '@entities/animal';
import { ICreateAnimalBody, IGetAnimalsParams, IUpdateAnimalBody } from '@entities/animal/api/types';

class AnimalsService {
  create: ApiProtectedRequestFn<IAnimal, ICreateAnimalBody> = (animal, { request } = {}) => {
    return api.post('animals', animal, { request });
  };

  get: ApiPublicRequestFn<IAnimal[], IGetAnimalsParams> = (params) => {
    return api.get(`animals`, { params, authorization: false });
  };

  getOne: ApiPublicRequestFn<IExtendedAnimal, string> = (id) => {
    return api.get(`animals/${id}`, { authorization: false });
  };

  getByShelter: ApiPublicRequestFn<IAnimal[], string> = (shelterId) => {
    return api.get(`animals`, { params: { shelterId }, authorization: false });
  };

  update: ApiProtectedRequestFn<IAnimal, IUpdateAnimalBody> = (animal, { request } = {}) => {
    return api.put('animals', animal, { request });
  };

  remove: ApiProtectedRequestFn<void, string> = (id, { request } = {}) => {
    return api.delete(`animals/${id}`, { request });
  };
}

export const animalsService = new AnimalsService();
