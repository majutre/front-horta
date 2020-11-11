import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantasListaComponent } from './plantas-lista/plantas-lista.component';
import { PlantaDetalhesComponent } from './planta-detalhes/planta-detalhes.component';

const plantasRoutes: Routes = [
  { path: 'plantas',  component: PlantasListaComponent },
  { path: 'planta/:id', component: PlantaDetalhesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(plantasRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PlantasRoutingModule { }
