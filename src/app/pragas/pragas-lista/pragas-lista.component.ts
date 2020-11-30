import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { PragaRepository } from './../controllers/repository/praga-repository';
import { PragaModel } from './../controllers/model/praga-model';

@Component({
  selector: 'app-pragas-lista',
  templateUrl: './pragas-lista.component.html',
  styleUrls: ['./pragas-lista.component.css']
})

export class PragasListaComponent implements OnInit {

  public formulario: FormGroup;
  pragas: PragaModel[];

  constructor(private pragaRepository: PragaRepository, private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.iniciarFormulario();
    this.getPragas();
  }

  getPragas(): void {
    this.pragaRepository
      .getAllPragas()
      .then(pragas => this.pragas = pragas);
  }
  
  public iniciarFormulario() {
    this.formulario = this.fb.group(
      { filtro: [null] }
    );
  }

  pesquisar() {
    const f = this.formulario.value.filtro;
    this.getPragasFiltro(f);

  }

  getPragasFiltro(f: string): void {
    this.pragaRepository
      .getAllPragas()
      .then(pragas => {
        this.pragas = pragas;
        this.pragas = this.pragas.filter(
          praga => praga.nome.toUpperCase() == f.toUpperCase()
        );
      });
  }
}

