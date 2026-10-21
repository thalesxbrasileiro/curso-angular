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
  
  constructor() { }

  ngOnInit(): void {
  }

}
