import { Component, OnInit } from '@angular/core';

import { PlantaService } from './planta.service';
import { PlantaRepository } from './controllers/repository/planta-repository';
import { PlantaModel } from './controllers/model/planta-model';
@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {

  plantas: PlantaModel[];

  constructor(
    private plantaService: PlantaService, 
    private plantaRepository: PlantaRepository
  ) { }

  ngOnInit(): void {
    this.getPlantas();
  }

  getPlantas(): void {
    this.plantaRepository
      .getAllPlantas()
      .then(plants => this.plantas = plants);
  }
}
