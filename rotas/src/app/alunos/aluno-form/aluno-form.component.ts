import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { IFormCanDeactivate } from '../../guards/iform-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {

  aluno: any = {};
  inscricao!: Subscription;
  private formMudou: boolean = false;

  constructor(
    private rota: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.rota.params.subscribe(
      (params: any) => {
        let id = Number(params['id'])
        this.aluno = this.alunosService.getAluno(id);
        // console.log('ID procurado:', id);
        // console.log('Aluno retornado:', this.aluno);
        // console.log('Aluno é null?', this.aluno === null);
      }
    )
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
    console.log('mudou');
  }

  podeMudarRota() {
    if (this.formMudou) {
      return confirm('Tem certeza que deseja sair dessa página?');
    }

    return true;
  }

  podeDesativar() {
    return this.podeMudarRota();
  }

}
