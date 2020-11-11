import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UsuarioRoutingModule } from './usuario-routing.module';

import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioDashboardComponent } from './usuario-dashboard/usuario-dashboard.component';
import { UsuarioPlantasComponent } from './usuario-plantas/usuario-plantas.component';
import { UsuarioAlarmesComponent } from './usuario-alarmes/usuario-alarmes.component';
import { UsuarioEditarCadastroComponent } from './usuario-editar-cadastro/usuario-editar-cadastro.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';

import { AuthGuard } from '../seguranca/auth.guard';


@NgModule({
  declarations: [
    UsuarioCadastroComponent,
    UsuarioDashboardComponent,
    UsuarioPlantasComponent,
    UsuarioAlarmesComponent,
    UsuarioEditarCadastroComponent,
    UsuarioLoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
