import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from './../alunos.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno!: Aluno;
  inscricao!: Subscription;

  constructor(
    private rota: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    /*this.inscricao = this.rota.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);
      }
    )*/

      console.log('ngOnInit: Inicializando AlunoDetalheComponent');

    this.inscricao = this.rota.data.subscribe(
      (data) => {
        console.log('Recebendo o objeto de dados do resolver');
        this.aluno = data.aluno;
      }
    );
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
