import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Planta } from './../plantas.model';
import { PlantaService } from './../planta.service';

@Component({
  selector: 'app-minhas-plantas',
  templateUrl: './minhas-plantas.component.html',
  styleUrls: ['./minhas-plantas.component.css']
})
export class MinhasPlantasComponent implements OnInit, OnDestroy {

  title = 'Minhas Plantas';
  plantas: Planta[];
  private subscription: Subscription;

  constructor(private plantaService: PlantaService) { }

  ngOnInit() {
    this.plantas = this.plantaService.getMinhasPlantas();
    this.subscription = this.plantaService.minhasPlantasChanged
      .subscribe(
        (plantas: Planta[]) => {
          this.plantas = plantas;
        }
      );
  }
  

  onDeletePlanta(index: number){
    this.plantaService.deleteMinhaPlanta(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
