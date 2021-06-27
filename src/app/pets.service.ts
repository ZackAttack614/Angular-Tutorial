import { Injectable } from '@angular/core';
import { Animal } from './animal';
import { Cat } from './cat';
import { Dog } from './dog';

const pets: Animal[] = [
  new Dog('Fido', 12, 'Husky'),
  new Dog('Happy', 12, 'Husky'),
  new Dog('Tino', 12, 'Husky'),
  new Cat('Spotty', 12, 'Tabby'),
];

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor() { }

  getPets(): Animal[] {
    return pets;
  }
}
