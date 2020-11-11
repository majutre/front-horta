import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';

import { InfoInspiracaoComponent } from './info-inspiracao/info-inspiracao.component';
import { InfoOqueehComponent } from './info-oqueeh/info-oqueeh.component';
import { InfoMarcaComponent } from './info-marca/info-marca.component';
import { InfoPorqueusarComponent } from './info-porqueusar/info-porqueusar.component';
import { InfoPrivacidadeComponent } from './info-privacidade/info-privacidade.component';
import { InfoSobreComponent } from './info-sobre/info-sobre.component';
import { InfoTermosComponent } from './info-termos/info-termos.component';

@NgModule({
  declarations: [
    InfoInspiracaoComponent,
    InfoOqueehComponent,
    InfoMarcaComponent,
    InfoPorqueusarComponent,
    InfoPrivacidadeComponent,
    InfoSobreComponent,
    InfoTermosComponent,
  ],
  imports: [
    CommonModule,
    InfoRoutingModule,
  ]
})
export class InfoModule { }
