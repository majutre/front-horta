import { Component, OnInit, Output } from '@angular/core';

import { AuthService } from './../seguranca/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario: string = '';

  constructor(public authService: AuthService) {
    this.usuario = authService.jwtPayload ? authService.jwtPayload.user_name : '';
  }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logout();
  }
}
