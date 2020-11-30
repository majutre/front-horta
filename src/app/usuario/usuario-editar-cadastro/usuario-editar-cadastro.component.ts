import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { MustMatch } from '../usuario-cadastro/validator-senha/must-match.validator';
import { AuthService } from './../../seguranca/auth.service';
import { ClienteRepository } from './../controllers/repository/cliente-repository';
import { ClienteModel } from './../controllers/model/cliente-model';
@Component({
  selector: 'app-usuario-editar-cadastro',
  templateUrl: './usuario-editar-cadastro.component.html',
  styleUrls: ['./usuario-editar-cadastro.component.css']
})
export class UsuarioEditarCadastroComponent implements OnInit {

  title = 'Editar cadastro'

  public formulario: FormGroup;
  public submitted: boolean = false;
  genero = ['MASCULINO', 'FEMININO', 'NAOINFORMAR'];

  constructor(
    private repository: ClienteRepository,
    private fb: FormBuilder,
    public authService: AuthService
  ) { 
   
  }

  ngOnInit(): void {
    this.iniciarFormulario();

    const usuarioId = this.authService.jwtPayload.usuario_id;

    this.carregarInfo(usuarioId);
  }

  public iniciarFormulario() {

    this.formulario = this.fb.group(
      {
        id: [null],
        nome: ['', [Validators.minLength(3), Validators.maxLength(150)]],
        sobrenome: ['', [Validators.required, Validators.minLength(3)]],
        genero: [''],
        email: ['', [Validators.email]],
        senha: ['', [Validators.minLength(8)]],
        confirmPass: ['']
      }
      , 
      { validator: MustMatch('senha', 'confirmPass') }
    );
  }

  carregarInfo(usuarioId: number) {
    this.repository
      .getClienteById(usuarioId)
      .subscribe(dados => {
        this.formulario.controls.id.setValue(dados.id);
        this.formulario.controls.nome.setValue(dados.nome);
        this.formulario.controls.sobrenome.setValue(dados.sobrenome);
        this.formulario.controls.genero.setValue(dados.genero);
        this.formulario.controls.email.setValue(dados.email);
      })
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

    this.repository.putCliente(dados).subscribe(resposta => {
      this.limparFormulario();
    });

  }

  get form() { return this.formulario.controls; }
  
  limparFormulario() {
    this.submitted = false;
    this.formulario.reset();
  }
}
