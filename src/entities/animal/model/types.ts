export enum ANIMAL_STATUS {
  FURLOUGH = 'FURLOUGH',
  EXPOSED = 'EXPOSED',
}

export interface IAnimal {
  id: number;
  name: string;
  age: number;
  breed: string;
  description: string;
  shelterId: number;
  sex: 'male' | 'female';
  avatar: string;
  status: `${ANIMAL_STATUS}`;
  type: string;
}
