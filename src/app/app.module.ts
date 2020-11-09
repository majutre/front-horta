import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PragasComponent } from './pragas/pragas.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { AreaClienteComponent } from './area-cliente/area-cliente.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { PlantasModule } from './plantas/plantas.module';
import { UsuarioModule } from './usuario/usuario.module';
import { InfoModule } from './info/info.module';
import { SegurancaModule } from './seguranca/seguranca.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PlantasModule,
    UsuarioModule,
    InfoModule,
    SegurancaModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PragasComponent,
    HeaderComponent,
    FooterComponent,
    AreaClienteComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
