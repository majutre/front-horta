import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './../home/home.component';
import { PragasComponent } from '../pragas/pragas.component';
import { OqueehComponent } from '../oqueeh/oqueeh.component';
import { PorqueusarComponent } from '../porqueusar/porqueusar.component';
import { InspiracaoComponent } from '../inspiracao/inspiracao.component';
import { SobreComponent } from '../sobre/sobre.component';
import { MarcaComponent } from '../marca/marca.component';
import { TermosComponent } from '../termos/termos.component';
import { PrivacidadeComponent } from '../privacidade/privacidade.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'pragas', component: PragasComponent},
  { path: 'oqueeh', component: OqueehComponent},
  { path: 'porqueusar', component: PorqueusarComponent},
  { path: 'inspiracao', component: InspiracaoComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'marca', component: MarcaComponent},
  { path: 'termos', component: TermosComponent},
  { path: 'privacidade', component: PrivacidadeComponent},
  { path: '**', component: PageNotFoundComponent },//esse path deve ser sempre o último
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
