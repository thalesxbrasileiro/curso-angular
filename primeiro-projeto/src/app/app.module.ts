import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [                    // componentes, diretivas e pipes
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  imports: [                         // módulos que queremos utilizar nesse módulo
    BrowserModule,
    CursosModule
  ],
  providers: [],                     // serviços que ficaram disponíveis para os componentes que foram declarados esse módulo
  bootstrap: [AppComponent]          // só tem no módulo raiz
})
export class AppModule { }           // módulo raiz da aplicação
