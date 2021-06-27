import { Animal } from './animal';

export class Cat implements Animal {
  name: string;
  age: number;
  breed: string;

  constructor(name: string, age: number, breed: string) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
}