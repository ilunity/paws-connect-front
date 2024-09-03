import { IShelter, IUpdateShelterBody } from '@entities/shelter';
import { api, ApiProtectedRequestFn, ApiPublicRequestFn } from '@shared/api';
import { ICreateShelterBody } from './types';

class ShelterService {
  get: ApiPublicRequestFn<IShelter[]> = () => {
    return api.get('shelters', { authorization: false });
  };

  getOne: ApiPublicRequestFn<IShelter, string> = (id) => {
    return api.get(`shelters/${id}`, { authorization: false });
  };

  getByUser: ApiProtectedRequestFn<IShelter[], string> = (id, { request } = {}) => {
    return api.get(`shelters?owner_id=${id}`, { request });
  };

  create: ApiProtectedRequestFn<IShelter, ICreateShelterBody> = (shelter, { request } = {}) => {
    return api.post(`shelters`, shelter, { request });
  };

  update: ApiProtectedRequestFn<IShelter, IUpdateShelterBody> = (shelter, { request } = {}) => {
    return api.put('shelters', shelter, { request });
  };

  getCities: ApiPublicRequestFn<string[]> = () => {
    return api.get(`shelters/cities`, { authorization: false });
  };
}

export const shelterService = new ShelterService();
