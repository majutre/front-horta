import { PragaModel } from './../../pragas/controllers/model/praga-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PlantaService } from '../planta.service'
import { AuthService } from './../../seguranca/auth.service';
import { ClienteModel } from './../../usuario/controllers/model/cliente-model'
import { PlantaModel } from './../controllers/model/planta-model';
import { PlantaRepository } from './../controllers/repository/planta-repository';

@Component({
  selector: 'app-planta-detalhes',
  templateUrl: './planta-detalhes.component.html',
  styleUrls: ['./planta-detalhes.component.css']
})
export class PlantaDetalhesComponent implements OnInit {

  planta: PlantaModel;
  usuario: ClienteModel;
  pragas: any[] = [];
  
  usuarioId: number;

  constructor(
    private route: ActivatedRoute,
    private plantaService: PlantaService,
    private location: Location,
    private plantaRepository: PlantaRepository,
    public authService: AuthService
  ) { 
    
  }

  ngOnInit(): void {
    this.getPlanta();
    this.getPragas();
  }

  getPlanta(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.plantaRepository
      .getPlantaById(id)
      .subscribe(planta => this.planta = planta);
  }

  getPragas(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.plantaRepository
      .getAllPragasByPlanta(id)
      .subscribe(praga => this.pragas.push({ nome: praga.nome, id: praga.id }));
  }

  onAddPlanta(planta: PlantaModel) {
    this.plantaService.addPlanta(this.usuarioId, planta);
  }

  goBack(): void {
    this.location.back();
  }

}
