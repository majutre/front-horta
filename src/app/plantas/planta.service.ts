import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { Planta } from './plantas.model';
import { PLANTAS } from './mock-plantas';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

  minhasPlantasChanged = new Subject<Planta[]>();
  private minhasPlantas: Planta[] = [];

  constructor( ) { }

  getPlants(): Observable<Planta[]> {
    return of(PLANTAS);
  }

  getPlant(id: number): Observable<Planta> {
    return of(PLANTAS.find(planta => planta.id === id));
  }

  /** MINHAS PLANTAS - INÍCIO **/

  getMinhasPlantas() {
    return this.minhasPlantas.slice();
  }

  getMinhaPlanta(index: number) {
    return this.minhasPlantas[index];
  }

  addPlanta(planta: Planta) {
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

  deleteMinhaPlanta(index: number) {
    this.minhasPlantas.splice(index, 1);
    this.minhasPlantasChanged.next(this.minhasPlantas.slice());
  }

/** MINHAS PLANTAS - FIM **/

}