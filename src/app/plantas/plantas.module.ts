import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PlantasListaComponent } from './plantas-lista/plantas-lista.component';
import { PlantaDetalhesComponent } from '../plantas/planta-detalhes/planta-detalhes.component';

import { PlantasRoutingModule } from './plantas-routing.module';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    PlantasListaComponent,
    PlantaDetalhesComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PlantasRoutingModule
  ]
})
export class PlantasModule { }
