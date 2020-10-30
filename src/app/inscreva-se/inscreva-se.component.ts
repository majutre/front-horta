import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MustMatch } from './validator-senha/must-match.validator';
import { ClienteModel } from '../Clientes/model/cliente-model';
import { ClienteRepository } from '../Clientes/repository/cliente-repository';

@Component({
  selector: 'inscreva-se',
  templateUrl: './inscreva-se.component.html',
  styleUrls: ['./inscreva-se.component.css', '../../assets/css/forms.css']
})
export class InscrevaSeComponent implements OnInit {

  title = 'Inscreva-se'

  public formulario: FormGroup;
  public submitted: boolean = false;
  genero = ['MASCULINO', 'FEMININO', 'NAOINFORMAR'];

  constructor(
    private repository: ClienteRepository,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.iniciarFormulario(); 
  }

 public iniciarFormulario() {

    this.formulario = this.fb.group({
      id: [null],
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
      sobrenome: ['', [Validators.required, Validators.minLength(3)]],
      genero: ['NAOINFORMAR'],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8)]],
      confirmPass: ['', Validators.required]
    }
    , { validator: MustMatch('senha', 'confirmPass') }
    );
  }

  get form() { return this.formulario.controls;  }

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
    this.iniciarFormulario();
  }

}

