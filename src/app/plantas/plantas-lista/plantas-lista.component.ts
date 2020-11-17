import { Component, OnInit } from '@angular/core';

import { Planta } from '../plantas.model';
import { PlantaService } from '../planta.service';
import { MinhasPlantasService } from '../minhas-plantas/minhas-plantas.service';

@Component({
  selector: 'app-plantas-lista',
  templateUrl: './plantas-lista.component.html',
  styleUrls: ['./plantas-lista.component.css']
})

export class PlantasListaComponent implements OnInit {

  plantas: Planta[];

  constructor(
    private plantaService: PlantaService, 
    private minhasPlantasService: MinhasPlantasService
  ) { }
  
  ngOnInit(): void {
    this.getPlants();
  }

  getPlants(): void {
    this.plantaService.getPlants()
    .subscribe(plantas => this.plantas = plantas);
  }

  onAddPlanta(planta: Planta){
    this.minhasPlantasService.addPlanta(planta);
  }
}
