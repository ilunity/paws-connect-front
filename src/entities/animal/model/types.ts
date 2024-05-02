export interface IAnimal {
  id: number;
  name: string;
  age: number;
  breed: string;
  description: string;
  shelterId: string;
  sex: "male" | "female";
  avatar: string;
  status: "default" | "exposed";
  type: string;
}
