import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  
  canActivate(
    rota: ActivatedRouteSnapshot, 
    estado: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    
    console.log('AuthGuard: Verificando se o usuário está autenticado');
    return this.verificarAcesso();
  }

  private verificarAcesso() {

    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }
    
    this.router.navigate(['/login']);
    
    return false;
  }
  
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | boolean | UrlTree {
    
    console.log('CanLoad: Verificando se o usuário pode carregar o código do módulo: ' + this.verificarAcesso());
    return this.verificarAcesso();
  }
  
}
