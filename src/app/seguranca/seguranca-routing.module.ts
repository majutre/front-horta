import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreaClienteComponent } from './../area-cliente/area-cliente.component';
import { NaoAutorizadoComponent } from './nao-autorizado.component';
import { LoginComponent } from './../login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'area-cliente', component: AreaClienteComponent, canActivate: [AuthGuard] },
  { path: 'nao-autorizado', component: NaoAutorizadoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegurancaRoutingModule { }
