import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoInspiracaoComponent } from './info-inspiracao/info-inspiracao.component';
import { InfoMarcaComponent } from './info-marca/info-marca.component';
import { InfoOqueehComponent } from './info-oqueeh/info-oqueeh.component';
import { InfoPorqueusarComponent } from './info-porqueusar/info-porqueusar.component';
import { InfoPrivacidadeComponent } from './info-privacidade/info-privacidade.component';
import { InfoSobreComponent } from './info-sobre/info-sobre.component';
import { InfoTermosComponent } from './info-termos/info-termos.component';

const infoRoutes: Routes = [
  { path: 'inspiracao', component: InfoInspiracaoComponent },
  { path: 'marca', component: InfoMarcaComponent },
  { path: 'oqueeh', component: InfoOqueehComponent },
  { path: 'porqueusar', component: InfoPorqueusarComponent },
  { path: 'privacidade', component: InfoPrivacidadeComponent },
  { path: 'sobre', component: InfoSobreComponent  },
  { path: 'termos', component: InfoTermosComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(infoRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class InfoRoutingModule { }
