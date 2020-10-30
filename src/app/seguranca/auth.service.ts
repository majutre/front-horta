import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';



import { AuthRepository } from './auth-repository';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtPayload: any;
  user = new Subject<User>(); 

  constructor(
    public authRepository: AuthRepository, 
    private router: Router
  ) 
  { 
    this.carregarToken();
  }

  login(login: string, senha: string){
    
    return this.authRepository
      .postLogin(login, senha)
      .subscribe(
        (resposta) => {
          
          const json: JSON = JSON.parse(JSON.stringify(resposta));
          console.log(json);
          this.armazenarToken(json['access_token']);
          
          console.log('Novo access token criado!' + JSON.stringify(this.jwtPayload));
          this.router.navigate(['/area-cliente']); //aqui vem a página pós login
          const user = new User(JSON.stringify(this.jwtPayload));
          this.user.next(user);
        },
        (e) => {
          console.log(e.error.error_description);      
        }
      ); 
  }

  autoLogin(){
    const token: string = localStorage.getItem('token')

    if (this.isAccessTokenInvalido()) {
      return;
    }

    const loadedUser = new User(JSON.stringify(token));

    this.user.next(loadedUser);
  
  }

  private armazenarToken(token: string) {
    this.jwtPayload = JSON.parse(atob(token.split('.')[1]));
  
    localStorage.setItem('token', token);
  }

  private carregarToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.armazenarToken(token);
    }
  }

  logout() {
   
    return this.authRepository
      .postLogout()
      .subscribe(
        (resposta) => {
          this.limparAccessToken();
          this.router.navigate(['/login']);
        },
        (e) => {
          console.log(e.error.error_description);      
        }
      ); 
  }

  // autoLogout(){

  // }

  limparAccessToken() {
    this.jwtPayload = null;
    this.user = null;
    localStorage.removeItem('token');
  }

  isAccessTokenInvalido() {
    const token = localStorage.getItem('token');
    
    return !token || this.isTokenExpired();
  }

  isTokenExpired(){
    this.authRepository
      .postCheckToken()
      .subscribe(
        resposta => {        
          const json: JSON = JSON.parse(JSON.stringify(resposta));      
          if(json['active']){
            return false;
          }    
        },
        (e) => {
          this.obterNovoAccessToken();           
        }
      );
  }

  obterNovoAccessToken(){    
    return this.authRepository
      .postRefreshToken()
      .subscribe(
        (resposta) => {
          const json: JSON = JSON.parse(JSON.stringify(resposta));
          this.armazenarToken(json['access_token']);
          console.log('Novo access token criado pelo refresh token! ' + JSON.stringify(this.jwtPayload));
        },
        (e) => {
          console.log(e.error.error_description);  
          this.router.navigate(['/login']);    
        }
      );  
  }

  temPermissao(permissao: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
  }

  temQualquerPermissao(roles) {
    for (const role of roles) {
      if (this.temPermissao(role)) {
        return true;
      }
    }
    return false;
  }

}
