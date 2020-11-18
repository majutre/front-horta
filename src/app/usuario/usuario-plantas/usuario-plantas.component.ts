import { DataStorageService } from './../../base/data-storage.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Planta } from '../../plantas/plantas.model';
import { MinhasPlantasService } from '../../plantas/minhas-plantas/minhas-plantas.service';
import { UsuarioPlantaService } from './usuario-planta.service';

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
    private minhasPlantasService: MinhasPlantasService,
    private dataService: DataStorageService
    ) { }

  ngOnInit() {
    this.plantas = this.minhasPlantasService.getMinhasPlantas();
    this.subscription = this.minhasPlantasService.minhasPlantasChanged
      .subscribe(
        (plantas: Planta[]) => {
          this.plantas = plantas;
        }
      );

    if (this.plantas = []) {
      this.isEmpty = true;
    }

    this.dataService.fetchPlantas();
  }

  onDeletePlanta(index: number) {
    this.minhasPlantasService.deleteMinhaPlanta(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
