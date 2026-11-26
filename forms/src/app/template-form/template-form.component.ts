import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  constructor(private http: HttpClient) { }

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

  consultaCEP(valor: string) {
    console.log(valor);

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validacep.test(cep)) {

        //Faz a chamada
        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
          .subscribe(
            dados => console.log(dados));
      }
    }
    
  }

}