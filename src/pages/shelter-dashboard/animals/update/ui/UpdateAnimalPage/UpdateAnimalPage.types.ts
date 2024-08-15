import { IExtendedAnimal } from '@entities/animal';

export interface UpdateAnimalPageProps {
  animal: IExtendedAnimal;
  isOwner: boolean;
}
