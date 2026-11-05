import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AuthGuard } from '../guards/auth.guard';

const alunoRoutes: Routes = [
    {
        path: 'alunos', component: AlunosComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'novo', component: AlunoFormComponent },
            { path: ':id', component: AlunoDetalheComponent },
            { path: ':id/editar', component: AlunoFormComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(alunoRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule { }
