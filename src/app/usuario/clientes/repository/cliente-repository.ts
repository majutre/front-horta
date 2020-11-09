import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { BaseHttpService } from '../../../services/http/base-http.service';
import { environment } from '../../../../environments/environment';
import { ClienteMapper } from './../mapper/cliente-mapper';
import { ClienteEntity } from './../entity/cliente-entity';
import { ClienteModel } from './../model/cliente-model';


@Injectable({
    providedIn: 'root',
})
export class ClienteRepository {

    mapper = new ClienteMapper();


    constructor(public http: BaseHttpService) { }

    getClienteById(id: number): Observable<ClienteModel> {
        return this.http
            .getAll<ClienteModel>(`${environment.URLSERVIDOR}usuario/${id}`)
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    getAllClientes(): Observable<ClienteModel> {
        return this.http
            .getAll<ClienteEntity[]>(`${environment.URLSERVIDOR}usuario`)
            .pipe(mergeMap((x) => x.data))
            .pipe(map((x) => this.mapper.mapFrom(x)));
    }

    // getAllEstados(): Observable<EstadoModel> {
    //     return this.http
    //         .getAll<EstadoEntity[]>(`${environment.URLSERVIDOR}estado`)
    //         .pipe(mergeMap((x) => x.data))
    //         .pipe(map((x) => this.mapperEstado.mapFrom(x)));
    // }

    // getAllCidadesByEstado(id: number): Observable<CidadeModel> {
    //     return this.http
    //         .getAll<CidadeEntity[]>(`${environment.URLSERVIDOR}estado/${id}/cidades`)
    //         .pipe(mergeMap((x) => x.data))
    //         .pipe(map((x) => this.mapperCidade.mapFrom(x)));
    // }

    postCliente(param: ClienteModel) {
        return this.http
            .post<ClienteEntity>(`${environment.URLSERVIDOR}usuario`, this.mapper.mapTo(param))
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    putCliente(param: ClienteModel) {
        return this.http
            .put<void>(
                `${environment.URLSERVIDOR}usuario/${param.id}`,
                this.mapper.mapTo(param)
            )
            .pipe(map((x) => x.data));
    }

    deleteCliente(id: number): Observable<void> {
        return this.http
            .delete<void>(`${environment.URLSERVIDOR}usuario/${id}`, id)
            .pipe(map((x) => x.data));
    }
}
