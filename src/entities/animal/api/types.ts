import { IAnimal } from '@entities/animal';

export type ICreateAnimalBody = Omit<IAnimal, 'id'>;
