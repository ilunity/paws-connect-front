import { IShelter, IUpdateShelterBody } from '@entities/shelter';
import { ApiRequestFnResponse, api } from '@shared/api';
import { ICreateShelterBody } from './types';

class ShelterService {
  get(): ApiRequestFnResponse<IShelter[]> {
    return api.get(`shelters`);
  }

  getOne(id: string): ApiRequestFnResponse<IShelter> {
    return api.get(`shelters/${id}`);
  }

  getByUser(userId: string): ApiRequestFnResponse<IShelter[]> {
    return api.get(`shelters?userId=${userId}`);
  }

  create(shelter: ICreateShelterBody): ApiRequestFnResponse<IShelter> {
    return api.post(`shelters`, shelter);
  }

  update(shelter: IUpdateShelterBody): ApiRequestFnResponse<IShelter> {
    return api.put('shelters', shelter);
  }
}

export const shelterService = new ShelterService();
