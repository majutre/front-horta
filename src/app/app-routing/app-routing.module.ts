import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './../login/login.component';
import { HomeComponent } from './../home/home.component';
import { PragasComponent } from '../pragas/pragas.component';
import { InscrevaSeComponent } from '../inscreva-se/inscreva-se.component';
import { OqueehComponent } from '../oqueeh/oqueeh.component';
import { PorqueusarComponent } from '../porqueusar/porqueusar.component';
import { InspiracaoComponent } from '../inspiracao/inspiracao.component';
import { SobreComponent } from '../sobre/sobre.component';
import { MarcaComponent } from '../marca/marca.component';
import { TermosComponent } from '../termos/termos.component';
import { PrivacidadeComponent } from '../privacidade/privacidade.component';
import { PerfilDaPlantaComponent } from '../perfil-da-planta/perfil-da-planta.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'pragas', component: PragasComponent},
  { path: 'inscreva-se', component: InscrevaSeComponent},
  { path: 'oqueeh', component: OqueehComponent},
  { path: 'porqueusar', component: PorqueusarComponent},
  { path: 'inspiracao', component: InspiracaoComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'marca', component: MarcaComponent},
  { path: 'termos', component: TermosComponent},
  { path: 'privacidade', component: PrivacidadeComponent},
  { path: 'perfil-da-planta', component: PerfilDaPlantaComponent },
  { path: 'not-found', component: PageNotFoundComponent},
 // { path: '**', redirectTo: '/not-found' } //esse path deve ser sempre o último
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
