import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Estruturas de Dados e Algoritmos com JavaScript: Escreva um Código JavaScript Complexo e Eficaz Usando a Mais Recente ECMAScript',
    rating: 4.94321,
    numeroPagina: 408,
    preco: 92.65,
    dataLancamento: new Date(2019, 2, 11),
    url: 'https://a.co/d/0fCuMe24'
  };

  livros: string[] = ['Java', 'Angular 2'];

  filtro!: string;

  addCurso(valor: string) {
    this.livros.push(valor);
    console.log(this.livros);

  }

  obterCursos() {
    if (this.livros.length === 0 || !this.filtro || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter((v) => {
      if (v.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
