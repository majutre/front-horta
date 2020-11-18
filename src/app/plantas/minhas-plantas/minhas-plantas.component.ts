import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Planta } from './../plantas.model';
import { MinhasPlantasService } from './minhas-plantas.service';

@Component({
  selector: 'app-minhas-plantas',
  templateUrl: './minhas-plantas.component.html',
  styleUrls: ['./minhas-plantas.component.css']
})
export class MinhasPlantasComponent implements OnInit, OnDestroy {

  title = 'Minhas Plantas';
  plantas: Planta[];
  private subscription: Subscription;

  constructor(private minhasPlantasService: MinhasPlantasService) { }

  ngOnInit() {
    this.plantas = this.minhasPlantasService.getMinhasPlantas();
    this.subscription = this.minhasPlantasService.minhasPlantasChanged
      .subscribe(
        (plantas: Planta[]) => {
          this.plantas = plantas;
        }
      );
  }
  

  onDeletePlanta(index: number){
    this.minhasPlantasService.deleteMinhaPlanta(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
