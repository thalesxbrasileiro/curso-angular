import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MeuFormComponent } from './meu-form.component';



@NgModule({
  declarations: [
    MeuFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MeuFormComponent   // Exporta o componente para uso em outros módulos
  ]
})
export class MeuFormModule { }
