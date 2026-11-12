import { AuthGuard } from './guards/auth.guard';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosGuard } from './guards/cursos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
//import { AlunosGuard } from './guards/alunos.guard';
//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';

const appRoutes: Routes = [
  // Rotas específicas
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),     // CursosModule usa Lazy Loading
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [AuthGuard],
    // canActivateChild: [AlunosGuard]     // Está no alunos-routing.module.ts
    canLoad: [AuthGuard]
  },
  { 
    path: 'login', component: LoginComponent 
  },
  // Rota raiz
  {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'    // Redireciona para a HomeComponent caso a rota raiz seja acessada
  },
  // Curinga SEMPRE por último
  { 
    path: '**', component: PaginaNaoEncontradaComponent,       // Redireciona para a HomeComponent caso a rota não seja encontrada
    //canActivate: [AuthGuard]      // Descomente se quiser proteger a rota de página não encontrada
   }  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],  // Configura o roteamento com hash na URL
  exports: [RouterModule]
})
export class AppRoutingModule { }
