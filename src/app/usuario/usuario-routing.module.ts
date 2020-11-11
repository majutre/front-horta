import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioDashboardComponent } from './usuario-dashboard/usuario-dashboard.component';
import { UsuarioPlantasComponent } from './usuario-plantas/usuario-plantas.component';
import { UsuarioAlarmesComponent } from './usuario-alarmes/usuario-alarmes.component';
import { UsuarioEditarCadastroComponent } from './usuario-editar-cadastro/usuario-editar-cadastro.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';

import { AuthGuard } from '../seguranca/auth.guard';

const usuarioRoutes: Routes = [
  { path: 'usuario-cadastro', component: UsuarioCadastroComponent },
  { path: 'usuario-login', component: UsuarioLoginComponent },
  { 
    path: 'usuario-dashboard', 
    component: UsuarioDashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: ['DH01'] },
    children: [
      {
        path: 'usuario-plantas',
        component: UsuarioPlantasComponent
      },
      {
        path: 'usuario-alarmes',
        component: UsuarioAlarmesComponent
      },
      {
        path: 'usuario-editar-cadastro',
        component: UsuarioEditarCadastroComponent
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(usuarioRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsuarioRoutingModule { }
