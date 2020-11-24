import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { AuthService } from './../seguranca/auth.service';
import { environment } from './../../environments/environment';
import { PlantaModel } from './../plantas/controllers/model/planta-model';
import { PlantaService } from './../plantas/planta.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  
  constructor(
    private http: HttpClient, 
    private plantaService: PlantaService, 
    private authService: AuthService
  ) { }

  storePlantas() {
    const plantas = this.plantaService.getMinhasPlantas();
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
      .get<PlantaModel[]>(
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
          this.plantaService.setPlantas(plantas);
        })
      );
      
  }   
}
