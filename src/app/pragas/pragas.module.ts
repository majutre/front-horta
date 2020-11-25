import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PragasRoutingModule } from './pragas-routing.module';
import { PragaDetalhesComponent } from './praga-detalhes/praga-detalhes.component';
import { PragasListaComponent } from './pragas-lista/pragas-lista.component';


@NgModule({
  declarations: [
    PragasListaComponent,
    PragaDetalhesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PragasRoutingModule
  ]
})
export class PragasModule { }
