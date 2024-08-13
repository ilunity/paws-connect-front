import { api, ApiRequestFnResponse } from '@shared/api';
import { IAnimal, IExtendedAnimal } from '@entities/animal';
import { ICreateAnimalBody, IGetAnimalsParams } from '@entities/animal/api/types';

class AnimalsService {
  create(animal: ICreateAnimalBody): ApiRequestFnResponse<IAnimal> {
    return api.post('animals', animal);
  }

  get(params: IGetAnimalsParams): ApiRequestFnResponse<IAnimal[]> {
    return api.get(`animals`, { params });
  }

  getOne(id: string): ApiRequestFnResponse<IExtendedAnimal> {
    return api.get(`animals/${id}`);
  }

  getByShelter(shelterId: string): ApiRequestFnResponse<IAnimal[]> {
    return api.get(`animals?shelterId=${shelterId}`);
  }
}

export const animalsService = new AnimalsService();
