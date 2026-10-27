import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit {

  id!: string;
  inscricao!: Subscription;

  constructor(private rotaAtiva: ActivatedRoute) { 
    // this.id = this.rotaAtiva.snapshot.params['id'];
    // console.log(this.rotaAtiva);
    
  }

  ngOnInit(): void {
    this.inscricao = this.rotaAtiva.params.subscribe(
      (params: any) => {
        this.id = params['id'];
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
