import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../seguranca/auth.service';
@Component({
  selector: 'usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: [
    './usuario-login.component.css',
     '../../../assets/css/forms.css'
    ]
})
export class UsuarioLoginComponent implements OnInit {

  public formulario: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.iniciarFormulario();
  }

  public iniciarFormulario() {
    this.formulario = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  onLogin() {


    if (this.formulario.invalid) {
      return;
    }

    //fazer a chamada
    const login = this.formulario.value.login;
    const senha = this.formulario.value.senha;
    
    this.authService.login(login, senha);
    this.formulario.reset();

  }
}
