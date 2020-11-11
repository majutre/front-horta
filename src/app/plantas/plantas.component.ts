import { Component, OnInit } from '@angular/core';

import { Planta } from './plantas.model';
import { PlantaService } from './planta.service';
@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {

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
