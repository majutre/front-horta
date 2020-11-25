import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


import { PlantaService } from '../planta.service';
import { AuthService } from './../../seguranca/auth.service';
import { PlantaRepository } from './../controllers/repository/planta-repository';
import { ClienteModel } from './../../usuario/controllers/model/cliente-model';
import { environment } from './../../../environments/environment';
import { PlantaModel } from './../controllers/model/planta-model';


@Component({
  selector: 'app-plantas-lista',
  templateUrl: './plantas-lista.component.html',
  styleUrls: ['./plantas-lista.component.css']
})

export class PlantasListaComponent implements OnInit {

  plantas: PlantaModel[];
  usuario: ClienteModel;
  usuarioId: number;
  

  constructor(
    private plantaService: PlantaService,
    private plantaRepository: PlantaRepository,
    private http: HttpClient,
    public authService: AuthService
  ) {
   
  }

  ngOnInit(): void {
    this.getPlantas();
    const usuarioId = this.authService.jwtPayload.usuario_id;
  }

 
  getPlantas(): void {
    this.plantaRepository
      .getAllPlantas()
      .then(plantas => this.plantas = plantas);
  }

  onAddPlanta(planta: PlantaModel) {
    this.plantaService.addPlanta(this.usuarioId, planta);

  }

  

}

