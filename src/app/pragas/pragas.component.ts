import { Component, OnInit } from '@angular/core';

import { PragaRepository } from './controllers/repository/praga-repository';
import { PragaModel } from './controllers/model/praga-model';

@Component({
  selector: 'app-pragas',
  templateUrl: './pragas.component.html',
  styleUrls: ['./pragas.component.css']
})
export class PragasComponent implements OnInit {

  pragas: PragaModel[];
  title = 'Pragas';

  constructor(
    private pragaRepository: PragaRepository
  ) { }

  ngOnInit(): void {
    this.getPragas();
  }

  getPragas(): void {
    this.pragaRepository
      .getAllPragas()
      .then(pragas => this.pragas = pragas);
  }
  
}
