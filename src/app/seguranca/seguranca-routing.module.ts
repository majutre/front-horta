import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreaClienteComponent } from './../area-cliente/area-cliente.component';
import { NaoAutorizadoComponent } from './nao-autorizado.component';
/*import { DashboardComponent } from '../dashboard/dashboard.component';*/

import { AuthGuard } from './auth.guard';

const segurancaRoutes: Routes = [
  {
    path: 'area-cliente', 
    component: AreaClienteComponent, 
    canActivate: [AuthGuard],
    data: { roles: ['DH01'] }  
  },
    /*{ 
    path: 'dashboard', 
    component: DashboardComponent, 
    canActivate: [AuthGuard],
    data: { roles: ['DH01'] }   
  },*/
  { path: 'nao-autorizado', component: NaoAutorizadoComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(segurancaRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SegurancaRoutingModule { }
