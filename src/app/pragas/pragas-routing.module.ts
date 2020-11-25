import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PragasListaComponent } from './pragas-lista/pragas-lista.component';
import { PragaDetalhesComponent } from './praga-detalhes/praga-detalhes.component';


const pragasRoutes: Routes = [
  { path: 'pragas',  component: PragasListaComponent },
  { path: 'praga/:id', component: PragaDetalhesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(pragasRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PragasRoutingModule { }
