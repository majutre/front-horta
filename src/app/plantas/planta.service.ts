import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Planta } from './plantas.model';
import { PLANTAS } from './mock-plantas';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

  constructor( ) { }

  getPlants(): Observable<Planta[]> {
    return of(PLANTAS);
  }

  getPlant(id: number): Observable<Planta> {
    return of(PLANTAS.find(planta => planta.id === id));
  }
}