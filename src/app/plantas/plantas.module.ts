import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlantasListaComponent } from './plantas-lista/plantas-lista.component';
import { PlantaDetalhesComponent } from '../plantas/planta-detalhes/planta-detalhes.component';

import { PlantasRoutingModule } from './plantas-routing.module';


@NgModule({
  declarations: [
    PlantasListaComponent,
    PlantaDetalhesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PlantasRoutingModule
  ]
})
export class PlantasModule { }
