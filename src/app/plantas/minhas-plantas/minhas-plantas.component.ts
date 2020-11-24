import { AuthService } from './../../seguranca/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PlantaModel } from './../controllers/model/planta-model';
import { PlantaService } from './../planta.service';
import { PlantaRepository } from './../controllers/repository/planta-repository';

@Component({
  selector: 'app-minhas-plantas',
  templateUrl: './minhas-plantas.component.html',
  styleUrls: ['./minhas-plantas.component.css']
})
export class MinhasPlantasComponent implements OnInit, OnDestroy {

  title = 'Minhas Plantas';
  plantas: PlantaModel[];
  private subscription: Subscription;
  usuarioId: number;

  constructor(private plantaService: PlantaService, private plantaRepository: PlantaRepository, public authService: AuthService) { }

  ngOnInit() {
    this.plantas = this.plantaService.getMinhasPlantas();
    this.subscription = this.plantaService.minhasPlantasChanged
      .subscribe(
        (plantas: PlantaModel[]) => {
          this.plantas = plantas;
        }
      );
    
    const usuarioId = this.authService.jwtPayload.usuario_id;
  }
  
  onDeletePlanta(index: number){
    this.plantaService.deleteMinhaPlanta(this.usuarioId, index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
