import { Component, OnInit } from '@angular/core';

import { PragaRepository } from './../controllers/repository/praga-repository';
import { PragaModel } from './../controllers/model/praga-model';

@Component({
  selector: 'app-pragas-lista',
  templateUrl: './pragas-lista.component.html',
  styleUrls: ['./pragas-lista.component.css']
})

export class PragasListaComponent implements OnInit {


  pragas: PragaModel[];

  constructor(private pragaRepository: PragaRepository) { }

  ngOnInit(): void {
    this.getPragas();
  }

  getPragas(): void {
    this.pragaRepository
      .getAllPragas()
      .then(pragas => this.pragas = pragas);
  }
  

}

