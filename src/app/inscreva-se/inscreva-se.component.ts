import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ClienteModel } from '../Clientes/model/cliente-model';
import { ClienteRepository } from '../Clientes/repository/cliente-repository';

@Component({
  selector: 'inscreva-se',
  templateUrl: './inscreva-se.component.html',
  styleUrls: ['./inscreva-se.component.css', '../../assets/css/forms.css']
})

export class InscrevaSeComponent implements OnInit {

  title = 'Inscreva-se'

  estados: any[] = [];
  cidades: any[] = [];
  public formulario: FormGroup;
  public submitted: boolean = false;

  constructor(
    private repository: ClienteRepository,
    private fb: FormBuilder) { }


  ngOnInit(): void {
    this.iniciarFormulario();

    // this.repository.getAllEstados().subscribe(resposta => {
    //   this.estados.push({ label: resposta.nome, value: resposta.id });
    // });
  }

 public iniciarFormulario() {

    this.formulario = this.fb.group({
      id: [null],
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
      sobrenome: ['', Validators.required, Validators.minLength(3)],
      genero: [''],
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });

    // this.formulario.controls.id.setValue('');
    // this.formulario.controls.nome.setValue('Rafael');
    // this.formulario.controls.sobrenome.setValue('Lopes');    
  }

  cadastrar() {
    this.submitted = true;
    if (this.formulario.invalid) {
      return;
    }
    this.salvar();
  };

  salvar() {

    const dados = {

      id: this.formulario.value.id,
      nome: this.formulario.value.nome,
      sobrenome: this.formulario.value.sobrenome,
      genero: this.formulario.value.genero,
      email: this.formulario.value.email,
      senha: this.formulario.value.senha

    } as ClienteModel;

    if (dados.id) {
      this.repository.putCliente(dados).subscribe(resposta => {
        this.limparFormulario();
      });
    } else {
      this.repository.postCliente(dados).subscribe(resposta => {
        this.limparFormulario();
      });
    }
  }

  limparFormulario() {
    this.submitted = false;
    this.formulario.reset();
  }

  // listarCidades() {
  //   this.cidades = [];
  //   let id: number = this.formulario.value.estado;
  //   this.repository.getAllCidadesByEstado(id).subscribe(resposta => {
  //     this.cidades.push({ label: resposta.nome, value: resposta.id });
  //   });
  // }
}

