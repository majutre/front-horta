import { Component, OnInit } from '@angular/core';

import { Planta } from '../plantas.model';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-plantas-lista',
  templateUrl: './plantas-lista.component.html',
  styleUrls: ['./plantas-lista.component.css']
})

export class PlantasListaComponent implements OnInit {

  plantas: Planta[];

  constructor(private plantaService: PlantaService) { }
  
  ngOnInit(): void {
    this.getPlants();
  }

  getPlants(): void {
    this.plantaService.getPlants()
    .subscribe(plantas => this.plantas = plantas);
  }
}
