import { Planta } from './../plantas/plantas.model';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {  map, tap } from 'rxjs/operators';

import { AuthService } from './../seguranca/auth.service';
import { MinhasPlantasService } from './../plantas/minhas-plantas/minhas-plantas.service';
import { environment } from './../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  
  constructor(
    private http: HttpClient, 
    private minhasPlantasService: MinhasPlantasService, 
    private authService: AuthService
  ) { }

  storePlantas() {
    const plantas = this.minhasPlantasService.getMinhasPlantas();
    this.http
      .put(
        `${environment.URLSERVIDOR}usuario`,
        plantas
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchPlantas() {

    return this.http
      .get<Planta[]>(
        `${environment.URLSERVIDOR}usuario`
      )
      .pipe(
        map(plantas => {
          return plantas.map(planta => {
            return {
              ...planta,
              plantas: planta.id ? planta.id : []
            };
          });
        }),
        tap(plantas => {
          this.minhasPlantasService.setPlantas(plantas);
        })
      );
      
  }   
}
