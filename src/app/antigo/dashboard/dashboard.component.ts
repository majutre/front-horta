import { Component, OnInit } from '@angular/core';

import { Planta } from '../plantas/plantas.model';
import { PlantaService } from '../plantas/planta.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  plantas: Planta[] = [];

  constructor(private plantaService: PlantaService) { }

  ngOnInit() {
    this.getPlants();
  }

  getPlants(): void {
    this.plantaService.getPlants()
      .subscribe(plantas => this.plantas = plantas.slice(1, 5));
  }
}
