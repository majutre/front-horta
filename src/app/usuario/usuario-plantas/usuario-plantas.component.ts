import { PlantaService } from './../../plantas/planta.service';
import { DataStorageService } from './../../base/data-storage.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Planta } from '../../plantas/plantas.model';

@Component({
  selector: 'app-usuario-plantas',
  templateUrl: './usuario-plantas.component.html',
  styleUrls: ['./usuario-plantas.component.css']
})
export class UsuarioPlantasComponent implements OnInit {

  plantas: Planta[] = [];
  private subscription: Subscription;
  isEmpty: boolean = false;

  constructor(
    private plantaService: PlantaService,
    private dataService: DataStorageService
    ) { }

  ngOnInit() {
    this.plantas = this.plantaService.getMinhasPlantas();
    this.subscription = this.plantaService.minhasPlantasChanged
      .subscribe(
        (plantas: Planta[]) => {
          this.plantas = plantas;
        }
      );

    // if (this.plantas = []) {
    //   this.isEmpty = true;
    // }

    // this.dataService.fetchPlantas();
  }

  onDeletePlanta(index: number) {
    this.plantaService.deleteMinhaPlanta(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
