import { AuthService } from './../../seguranca/auth.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataStorageService } from './../../base/data-storage.service';

import { PlantaModel } from './../../plantas/controllers/model/planta-model';
import { PlantaService } from './../../plantas/planta.service';
@Component({
  selector: 'app-usuario-plantas',
  templateUrl: './usuario-plantas.component.html',
  styleUrls: ['./usuario-plantas.component.css']
})
export class UsuarioPlantasComponent implements OnInit {

  plantas: PlantaModel[] = [];
  private subscription: Subscription;
  isEmpty: boolean = false;
  usuarioId: number;

  constructor(
    private plantaService: PlantaService,
    private dataService: DataStorageService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.plantas = this.plantaService.getMinhasPlantas();
    this.subscription = this.plantaService.minhasPlantasChanged
      .subscribe(
        (plantas: PlantaModel[]) => {
          this.plantas = plantas;
        }
      );

    // if (this.plantas = []) {
    //   this.isEmpty = true;
    // }
    const usuarioId = this.authService.jwtPayload.usuario_id;
    this.dataService.fetchPlantas();
  }

  onDeletePlanta(index: number) {
    this.plantaService.deleteMinhaPlanta(this.usuarioId, index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
