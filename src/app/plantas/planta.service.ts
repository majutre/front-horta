import { ClienteRepository } from './../usuario/controllers/repository/cliente-repository';
import { Injectable, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { ClienteModel } from './../usuario/controllers/model/cliente-model';
import { PlantaRepository } from './controllers/repository/planta-repository';
import { PlantaModel } from './controllers/model/planta-model';
import { AuthService } from './../seguranca/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

  minhasPlantasChanged = new Subject<PlantaModel[]>();
  private minhasPlantas: PlantaModel[] = [];
  usuario: ClienteModel;
  usuarioId: number;

  constructor(
    private plantaRepository: PlantaRepository, 
    private clienteRepository: ClienteRepository, 
    private authService: AuthService 
  ) { }


  getMinhasPlantas() {
   return this.minhasPlantas.slice(); 
    // return this.clienteRepository.getClienteById(this.usuarioId).plantas;
  }

  getMinhaPlanta(index: number) {
    return this.minhasPlantas[index];
  }

  addPlanta(idUsuario: number, planta: PlantaModel) {
    this.minhasPlantas.push(planta);
    this.minhasPlantasChanged.next(this.minhasPlantas.slice());
    this.plantaRepository.adicionarPlanta(idUsuario, planta);
  }

  // addVariasPlantas(plantas: Planta[]) {
  //   this.minhasPlantas.push(...plantas);
  //   this.minhasPlantasChanged.next(this.minhasPlantas.slice());
  // }

  // updateMinhasPlantas(index: number, newPlanta: Planta) {
  //   this.minhasPlantas[index] = newPlanta;
  //   this.minhasPlantasChanged.next(this.minhasPlantas.slice());
  // }

  setPlantas(plantas: PlantaModel[]) {
    this.minhasPlantas = plantas;
    this.minhasPlantasChanged.next(this.minhasPlantas.slice());
  }

  deleteMinhaPlanta(usuarioId: number, index: number) {
    this.minhasPlantas.splice(index, 1);
    this.minhasPlantasChanged.next(this.minhasPlantas.slice());
    this.plantaRepository.removerPlanta(usuarioId, index);
  }


}