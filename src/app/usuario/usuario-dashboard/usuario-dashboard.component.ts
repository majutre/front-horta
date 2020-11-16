import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../seguranca/auth.service'

@Component({
  selector: 'usuario-dashboard',
  templateUrl: './usuario-dashboard.component.html',
  styleUrls: ['./usuario-dashboard.component.css']
})
export class UsuarioDashboardComponent implements OnInit {

  usuario: string = '';

  constructor(public service: AuthService) {
    this.usuario = service.jwtPayload.nome_completo;
  }

  ngOnInit(): void {
  }

}
