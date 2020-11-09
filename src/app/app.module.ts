import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InspiracaoComponent } from './inspiracao/inspiracao.component';
import { MarcaComponent } from './marca/marca.component';
import { OqueehComponent } from './oqueeh/oqueeh.component';
import { PorqueusarComponent } from './porqueusar/porqueusar.component';
import { PragasComponent } from './pragas/pragas.component';
import { PrivacidadeComponent } from './privacidade/privacidade.component';
import { SobreComponent } from './sobre/sobre.component';
import { TermosComponent } from './termos/termos.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { AreaClienteComponent } from './area-cliente/area-cliente.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { PlantasModule } from './plantas/plantas.module';
import { UsuarioModule } from './usuario/usuario.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { FooterModule } from './footer.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PlantasModule,
    UsuarioModule,
    SegurancaModule,
    AppRoutingModule,
    FooterModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    InspiracaoComponent,
    MarcaComponent,
    OqueehComponent,
    PorqueusarComponent,
    PragasComponent,
    PrivacidadeComponent,
    SobreComponent,
    TermosComponent,
    HeaderComponent,
    FooterComponent,
    AreaClienteComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
