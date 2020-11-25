import { ClienteRepository } from './../usuario/controllers/repository/cliente-repository';
import { Injectable, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { ClienteModel } from './../usuario/controllers/model/cliente-model';
import { PragaRepository } from './controllers/repository/praga-repository';
import { PragaModel } from './controllers/model/praga-model';
import { AuthService } from './../seguranca/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PragaService {

  private minhasPragas: PragaModel[] = [];
  usuario: ClienteModel;
  usuarioId: number;

  constructor(
    private PragaRepository: PragaRepository, 
    private authService: AuthService 
  ) { }



}