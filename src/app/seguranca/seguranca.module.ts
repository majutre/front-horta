import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SegurancaRoutingModule } from './seguranca-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { SpinnerComponent } from './../template/spinner/spinner.component';


@NgModule({
  declarations: [
    SpinnerComponent,
  ],
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
