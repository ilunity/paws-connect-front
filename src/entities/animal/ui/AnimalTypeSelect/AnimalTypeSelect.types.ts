import { ANIMAL_TYPE } from '@entities/animal';

export interface AnimalTypeSelectProps {
  value?: `${ANIMAL_TYPE}`;
  onChange?: (animalType: `${ANIMAL_TYPE}`) => void;
}
