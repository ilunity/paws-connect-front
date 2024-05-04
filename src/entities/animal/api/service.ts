import { ApiRequestFnResponse, api } from '@shared/api';
import { IAnimal } from '@entities/animal';
import { ICreateAnimalBody } from '@entities/animal/api/types';

class AnimalsService {
  create(animal: ICreateAnimalBody):ApiRequestFnResponse<IAnimal> {
    return api.post('animals', animal);
  }

  get(): ApiRequestFnResponse<IAnimal[]> {
    return api.get(`animals`);
  }

  getOne(id: string): ApiRequestFnResponse<IAnimal> {
    return api.get(`animals/${id}`);
  }

  getByShelter(shelterId: string): ApiRequestFnResponse<IAnimal[]> {
    return api.get(`animals?shelterId=${shelterId}`);
  }
}

export const animalsService = new AnimalsService();
