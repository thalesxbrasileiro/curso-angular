import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MeuFormModule } from './meu-form/meu-form.module';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent // Foi colocado aqui automaticamente após a criação do componente
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MeuFormModule  // Importa o módulo que exporta o MeuFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
