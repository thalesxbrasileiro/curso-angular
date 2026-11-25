import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null,
    cep: null,
    numero: null,
    complemento: null
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);

    // console.log(this.usuario);
  }

  verificaValidTouched(campo: NgModel) {
    return campo.invalid && campo.touched;
  }

  aplicaCssErro(campo: NgModel) {
    return {
      'is-invalid': this.verificaValidTouched(campo)
    };
  }

}
