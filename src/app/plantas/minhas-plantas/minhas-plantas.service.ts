import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

import { Planta } from '../plantas.model';

@Injectable({
  providedIn: 'root'
})
export class MinhasPlantasService {

  minhasPlantasChanged = new Subject<Planta[]>();
  private minhasPlantas: Planta[] = [];

  getMinhasPlantas(){
    return this.minhasPlantas.slice();
  }

  getMinhaPlanta(index: number){
    return this.minhasPlantas[index];
  }

  addPlanta(planta: Planta){
    this.minhasPlantas.push(planta);
    this.minhasPlantasChanged.next(this.minhasPlantas.slice());
  }

  // addVariasPlantas(plantas: Planta[]) {
  //   this.minhasPlantas.push(...plantas);
  //   this.minhasPlantasChanged.next(this.minhasPlantas.slice());
  // }
  
  // updateMinhasPlantas(index: number, newPlanta: Planta) {
  //   this.minhasPlantas[index] = newPlanta;
  //   this.minhasPlantasChanged.next(this.minhasPlantas.slice());
  // }

  setPlantas(plantas: Planta[]) {
    this.minhasPlantas = plantas;
    this.minhasPlantasChanged.next(this.minhasPlantas.slice());
  }

  deleteMinhaPlanta(index: number){
    this.minhasPlantas.splice(index, 1);
    this.minhasPlantasChanged.next(this.minhasPlantas.slice());
  }
}
