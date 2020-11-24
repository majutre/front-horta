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
            .getAll<ClienteModel>(`${environment.URLSERVIDOR}cliente/${id}`)
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    getAllClientes(): Promise<ClienteModel[]> {
        return this.http
            .getAll<ClienteEntity[]>(`${environment.URLSERVIDOR}cliente`)
            .toPromise().then(x => {
                return x.data.map(this.mapper.mapFrom);
            })
    }

    postCliente(param: ClienteModel) {

        return this.http
            .post<ClienteEntity>(`${environment.URLSERVIDOR}cliente`, this.mapper.mapTo(param))
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    putCliente(param: ClienteModel) {

        return this.http
            .put<void>(
                `${environment.URLSERVIDOR}cliente/${param.id}`,
                this.mapper.mapTo(param)
            )
            .pipe(map((x) => x.data));
    }

    deleteCliente(id: number): Observable<void> {

        return this.http
            .delete<void>(`${environment.URLSERVIDOR}cliente/${id}`, id)
            .pipe(map((x) => x.data));
    }
}

