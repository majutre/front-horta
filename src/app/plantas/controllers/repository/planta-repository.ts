import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { BaseHttpService } from '../../../services/http/base-http.service';
import { environment } from './../../../../environments/environment';
import { PlantaMapper } from './../mapper/planta-mapper';
import { PlantaEntity } from '../entity/planta-entity';
import { PlantaModel } from './../model/planta-model';
import { ClienteModel } from './../../../usuario/controllers/model/cliente-model';
import { PragaMapper } from './../../../pragas/controllers/mapper/praga-mapper';
import { PragaEntity } from './../../../pragas/controllers/entity/praga-entity';
import { PragaModel } from './../../../pragas/controllers/model/praga-model';
import { AuthService } from './../../../seguranca/auth.service';


@Injectable({
    providedIn: 'root',
})
export class PlantaRepository {

    mapper = new PlantaMapper();
    pragaMapper = new PragaMapper();

 
    constructor(public http: BaseHttpService, public authService: AuthService) {
     }

    //CONTROLES GERAIS
    getPlantaById(id: number): Observable<PlantaModel> {
        return this.http
            .getAll<PlantaModel>(`${environment.URLSERVIDOR}planta/${id}`)
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    getAllPlantas(): Promise<PlantaModel[]> {
        return this.http
            .getAll<PlantaEntity[]>(`${environment.URLSERVIDOR}planta`)
            .toPromise()
            .then(x => {
                return x.data.map(this.mapper.mapFrom);
            })
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

    //CONTROLES PLANTA x USUÁRIO

    adicionarPlanta(idUsuario: number, planta: PlantaModel) {
        return this.http
           .post<PlantaEntity>(
                `${environment.URLSERVIDOR}usuario/${idUsuario}/plantas/${planta.id}`,
                this.mapper.mapTo(planta)
            )
           .pipe(map((x) => this.mapper.mapFrom(x.data)));
        // .post<void>(
        //     `${environment.URLSERVIDOR}usuario/${idUsuario}/plantas/${planta.id}`,
        //     null, false
    }

    removerPlanta(idUsuario: number, idPlanta: number) {
        return this.http
            .delete<void>(
                `${environment.URLSERVIDOR}usuario/${idUsuario}/plantas/${idPlanta}`, idPlanta
            )
            .pipe(map((x) => x.data));
    }

    // fetchPlantas(id: number): Promise<PlantaModel[]>{
    //     return this.http
    //          .getAll<PlantaModel>(`${environment.URLSERVIDOR}usuario/${id}`)
    //         .toPromise().then(x => {
    //             return x.data.map(this.mapper.mapFrom);
    //         })
    // }

    //PRAGAS

    getAllPragasByPlanta(id: number): Observable<PragaModel> {
        
        return this.http
            .getAll<PragaEntity[]>(`${environment.URLSERVIDOR}planta/${id}/pragas`)
            .pipe(mergeMap((x) => x.data))
            .pipe(map((x) => this.pragaMapper.mapFrom(x)));
    }

    //FILTROS

    filtrar(param: PlantaModel) {
        return this.http
            .post<PlantaEntity>(
                `${environment.URLSERVIDOR}planta/filtrar`,
                this.mapper.mapTo(param)
            )
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }
}