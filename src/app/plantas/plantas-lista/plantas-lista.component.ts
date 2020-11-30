import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


import { PlantaService } from '../planta.service';
import { AuthService } from './../../seguranca/auth.service';
import { PlantaRepository } from './../controllers/repository/planta-repository';
import { ClienteModel } from './../../usuario/controllers/model/cliente-model';
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
  public formulario: FormGroup;


  constructor(
    private plantaService: PlantaService,
    private plantaRepository: PlantaRepository,
    public authService: AuthService,
    private fb: FormBuilder,
  ) {
   
  }

  ngOnInit(): void {
    this.iniciarFormulario();
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

  public iniciarFormulario() {
    this.formulario = this.fb.group(
      { filtro: [null] }
    );
  }

  pesquisar(){
    const f = this.formulario.value.filtro;
    this.getPlantasFiltro(f);
 
  }

  getPlantasFiltro(f: string): void {
    this.plantaRepository
      .getAllPlantas()
      .then(plantas => {
        this.plantas = plantas;
        this.plantas = this.plantas.filter(
          planta => planta.nome.toUpperCase() == f.toUpperCase()
        );
      });
  }
}

