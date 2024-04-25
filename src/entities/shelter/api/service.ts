import { IShelter } from '@entities/shelter';
import { ApiRequestFnResponse, http } from '@shared/api';
import { ICreateShelterBody } from './types';

class ShelterService {
  get(): ApiRequestFnResponse<IShelter> {
    return http.get(`shelters`);
  }

  create(shelter: ICreateShelterBody): ApiRequestFnResponse<IShelter> {
    return http.post(`shelters`, shelter);
  }
}

export const shelterService = new ShelterService();
