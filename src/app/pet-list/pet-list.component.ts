import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {
  pets: Animal[] = [];

  constructor(public petsService: PetsService) {
  }

  ngOnInit(): void {
    this.pets = this.petsService.getPets();
  }

}
