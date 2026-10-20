import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.scss']
})
export class ExemploPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Estruturas de Dados e Algoritmos com JavaScript: Escreva um Código JavaScript Complexo e Eficaz Usando a Mais Recente ECMAScript',
    rating: 4.94321,
    numeroPagina: 408,
    preco: 92.65,
    dataLancamento: new Date(2019, 2, 11),
    url: 'https://a.co/d/0fCuMe24'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
