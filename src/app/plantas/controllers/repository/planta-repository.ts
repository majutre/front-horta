import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { BaseHttpService } from '../../../services/http/base-http.service';
import { environment } from './../../../../environments/environment';
import { PlantaMapper } from './../mapper/planta-mapper';
import { PlantaEntity } from '../entity/planta-entity';
import { PlantaModel } from './../model/planta-model';


@Injectable({
    providedIn: 'root',
})
export class PlantaRepository {

    mapper = new PlantaMapper();
 
    constructor(public http: BaseHttpService) { }

    getPlantaById(id: number): Observable<PlantaModel> {
        return this.http
            .getAll<PlantaModel>(`${environment.URLSERVIDOR}planta/${id}`)
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    getAllPlantas(): Observable<PlantaModel> {
        return this.http
            .getAll<PlantaEntity[]>(`${environment.URLSERVIDOR}planta`)
            .pipe(mergeMap((x) => x.data))
            .pipe(map((x) => this.mapper.mapFrom(x)));
    }

    postPlanta(param: PlantaModel) {
        return this.http
            .post<PlantaEntity>(`${environment.URLSERVIDOR}planta`, this.mapper.mapTo(param))
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    putPlanta(param: PlantaModel) {
        return this.http
            .put<void>(
                `${environment.URLSERVIDOR}planta/${param.id}`,
                this.mapper.mapTo(param)
            )
            .pipe(map((x) => x.data));
    }

    deletePlanta(id: number): Observable<void> {
        return this.http
            .delete<void>(`${environment.URLSERVIDOR}planta/${id}`, id)
            .pipe(map((x) => x.data));
    }
}
