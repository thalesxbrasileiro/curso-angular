import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit {

  id!: string;

  constructor(private rotaAtiva: ActivatedRoute) { 
    this.id = this.rotaAtiva.snapshot.params['id'];
    
  }

  ngOnInit(): void {
  }

}
