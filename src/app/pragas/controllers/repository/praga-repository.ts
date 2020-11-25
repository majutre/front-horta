import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseHttpService } from '../../../services/http/base-http.service';
import { environment } from './../../../../environments/environment';
import { PragaMapper } from './../mapper/praga-mapper';
import { PragaEntity } from '../entity/praga-entity';
import { PragaModel } from './../model/praga-model';
import { AuthService } from './../../../seguranca/auth.service';



@Injectable({
    providedIn: 'root',
})
export class PragaRepository {

    mapper = new PragaMapper();

 
    constructor(public http: BaseHttpService, public authService: AuthService) {
     }

    //CONTROLES GERAIS

    getPragaById(id: number): Observable<PragaModel> {
        return this.http
            .getAll<PragaModel>(`${environment.URLSERVIDOR}praga/${id}`)
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    getAllPragas(): Promise<PragaModel[]> {
        return this.http
            .getAll<PragaEntity[]>(`${environment.URLSERVIDOR}praga`)
            .toPromise()
            .then(x => {
                return x.data.map(this.mapper.mapFrom);
            })
    }
   
    //FILTROS

    filtrar(param: PragaModel) {
        return this.http
            .post<PragaEntity>(
                `${environment.URLSERVIDOR}praga/filtrar`,
                this.mapper.mapTo(param)
            )
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }
}