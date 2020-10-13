import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Planta } from './plantas.model';
import { PLANTAS } from '../data/mock-plantas';
import { MessageService } from '../messages/message.service';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

  constructor(private messageService: MessageService) { }

  getPlants(): Observable<Planta[]> {
    // TODO: send the message _after_ fetching the plants
    this.messageService.add('PlantaService: fetched plants');
    return of(PLANTAS);
  }

  getPlant(id: number): Observable<Planta> {
    // TODO: send the message _after_ fetching the plant
    this.messageService.add(`PlantaService: fetched planta id=${id}`);
    return of(PLANTAS.find(planta => planta.id === id));
  }
}