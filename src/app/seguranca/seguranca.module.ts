import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SegurancaRoutingModule } from './seguranca-routing.module';
import { LoginComponent } from './../login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SegurancaRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule           
  ],
  providers:[
    AuthService,
    AuthGuard,
  ]
})
export class SegurancaModule { }
