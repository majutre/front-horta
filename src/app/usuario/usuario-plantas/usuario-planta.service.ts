import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioPlantaService {

  plants = [];

  constructor() { }

  addPlant(p) {
    this.plants.push(p);
  }

  getPlant() {
    return this.plants;
  }
}