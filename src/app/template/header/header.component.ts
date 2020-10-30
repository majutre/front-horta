import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from './../../seguranca/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario: string = '';


  constructor(public authService: AuthService, private router: Router) {
    this.usuario = authService.jwtPayload ? authService.jwtPayload.user_name : '';
  }

  ngOnInit() {

  }

  onLogout() {
    this.authService.logout();
  }

}
