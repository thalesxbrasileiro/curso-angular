import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  declarations: [
    CursosComponent, 
    CursoDetalheComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent       // define quais componentes, diretivas ou pipes desse módulo ficarão disponíveis para outros módulos que o importarem
  ]                       // CursoDetalheComponent, que não está em exports, fica restrito ao próprio CursosModule, isso é encapsulamento da API do módulo
})
export class CursosModule { }     // torna a classe CursosModule disponível para outros arquivos (nos imports)
