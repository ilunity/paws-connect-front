import { ApiRequestFnResponse, http } from '@shared/api';
import { IAnimal } from '@entities/animal';

class AnimalsService {
  get(): ApiRequestFnResponse<IAnimal[]> {
    return http.get(`animals`);
  }

  getOne(id: string): ApiRequestFnResponse<IAnimal> {
    return http.get(`animals/${id}`);
  }

  getByShelter(shelterId: string): ApiRequestFnResponse<IAnimal[]> {
    return http.get(`animals?shelterId=${shelterId}`);
  }
}

export const animalsService = new AnimalsService();
