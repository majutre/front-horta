import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '../../seguranca/auth.service';
import { PragaModel } from './../controllers/model/praga-model';
import { PragaRepository } from './../controllers/repository/praga-repository';

@Component({
  selector: 'app-praga-detalhes',
  templateUrl: './praga-detalhes.component.html',
  styleUrls: ['./praga-detalhes.component.css']
})
export class PragaDetalhesComponent implements OnInit {

  praga: PragaModel;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private pragaRepository: PragaRepository,
    public authService: AuthService
  ) { 
    
  }

  ngOnInit(): void {
    this.getPraga();
  }

  getPraga(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pragaRepository
      .getPragaById(id)
      .subscribe(praga => this.praga = praga);
  }


  goBack(): void {
    this.location.back();
  }

}
