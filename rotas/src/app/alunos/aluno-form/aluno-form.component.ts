import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit {

  aluno: any = {};
  inscricao!: Subscription;

  constructor(
    private rotaAtiva: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.rotaAtiva.params.subscribe(
      (params: any) => {
        let id = Number(params['id'])
        this.aluno = this.alunosService.getAluno(id);
        console.log('ID procurado:', id);
        console.log('Aluno retornado:', this.aluno);
        console.log('Aluno é null?', this.aluno === null);
      }
    )
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
