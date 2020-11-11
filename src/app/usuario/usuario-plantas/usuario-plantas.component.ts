import { Component, OnInit } from '@angular/core';

import { Planta } from '../../plantas/plantas.model';
import { UsuarioPlantaService } from './usuario-planta.service';

@Component({
  selector: 'app-usuario-plantas',
  templateUrl: './usuario-plantas.component.html',
  styleUrls: ['./usuario-plantas.component.css']
})
export class UsuarioPlantasComponent implements OnInit {

  plants: Planta[];

  constructor(
    private usuarioPlantaService: UsuarioPlantaService 
  ) { }

  ngOnInit() {
    this.plants = this.usuarioPlantaService.getPlant();
  }
}
