import { IExtendedAnimal } from '@entities/animal';

export interface UpdateAnimalPageProps {
  shelterId: string;
  animal: IExtendedAnimal;
  isOwner: boolean;
}
