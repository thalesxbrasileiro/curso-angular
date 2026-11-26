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

    // Faz a requisição POST para enviar os dados do formulário para o servidor em formato JSON
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
      .subscribe(dados => console.log(dados));
  }

  verificaValidTouched(campo: NgModel) {
    return campo.invalid && campo.touched;
  }

  aplicaCssErro(campo: NgModel) {
    return {
      'is-invalid': this.verificaValidTouched(campo)
    };
  }

  consultaCEP(valor: string, form: NgForm) {
    console.log(valor);
    
    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validacep.test(cep)) {

        this.resetaDadosFormulario(form);

        //Faz a chamada GET
        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
          .subscribe(
            // dados => console.log(dados)
            dados => this.populaFormulario(dados, form)   // Quando a requisição dá certo
          );
      }
    }
  }

  populaFormulario(dados: any, formulario: NgForm) {
    /*formulario.setValue({              // Exige que todos os campos do formulário sejam preenchidos
      nome: formulario.value.nome,
      email: formulario.value.email,
      endereco: {
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });*/

    formulario.form.patchValue({      // Atualiza apenas os campos especificados do formulário, sem exigir todos os campos preenchidos
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaDadosFormulario(formulario: NgForm) {
    formulario.form.patchValue({
      endereco: {
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

}